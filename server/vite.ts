// server/vite.ts
import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger, type InlineConfig } from "vite";
import { type Server } from "http";
import { viteRootConfig } from "../vite.config"; // ✅ NOW it works
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const viteLogger = createLogger();

export function log(msg: string, source = "express") {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  console.log(`${time} [${source}] ${msg}`);
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    ...viteRootConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, opts) => {
        viteLogger.error(msg, opts);
        process.exit(1);
      },
    },
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  } satisfies InlineConfig); // ✅ Enforce types

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const templatePath = path.resolve(__dirname, "..", "client", "index.html");
      let template = await fs.promises.readFile(templatePath, "utf-8");

      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const html = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const publicDir = path.resolve(__dirname, "..", "dist/public");

  if (!fs.existsSync(publicDir)) {
    throw new Error(`❌ Build folder not found: ${publicDir}. Did you run 'vite build'?`);
  }

  app.use(express.static(publicDir));

  app.use("*", (_req, res) => {
    const indexPath = path.join(publicDir, "index.html");
    if (!fs.existsSync(indexPath)) {
      res.status(404).send("Build index.html not found");
    } else {
      res.sendFile(indexPath);
    }
  });
}
