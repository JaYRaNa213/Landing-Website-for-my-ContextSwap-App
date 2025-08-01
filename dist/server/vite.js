// server/vite.ts
import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { loadConfigFromFile } from "vite";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viteLogger = createLogger();
let viteRootConfig;
(async () => {
    const result = await loadConfigFromFile({
        command: "serve",
        mode: process.env.NODE_ENV === "production" ? "production" : "development",
    });
    viteRootConfig = result?.config || {};
})();
export function log(msg, source = "express") {
    const time = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    console.log(`${time} [${source}] ${msg}`);
}
export async function setupVite(app, server) {
    // const resolvedConfig = await (viteRootConfig as () => Promise<UserConfigExport>)();
    const resolvedConfig = viteRootConfig;
    const vite = await createViteServer({
        ...resolvedConfig,
        configFile: false, // use manually loaded config
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
    });
    app.use(vite.middlewares);
    app.use("*", async (req, res, next) => {
        const url = req.originalUrl;
        try {
            const templatePath = path.resolve(__dirname, "..", "client", "index.html");
            if (!fs.existsSync(templatePath)) {
                throw new Error(`Template not found at ${templatePath}`);
            }
            let template = await fs.promises.readFile(templatePath, "utf-8");
            template = template.replace(`src="/src/main.tsx"`, `src="/src/main.tsx?v=${nanoid()}"`);
            const html = await vite.transformIndexHtml(url, template);
            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        }
        catch (e) {
            vite.ssrFixStacktrace(e);
            next(e);
        }
    });
}
export function serveStatic(app) {
    const staticDir = path.resolve(__dirname, "..", "dist", "public");
    if (!fs.existsSync(staticDir)) {
        throw new Error(`❌ Build folder not found: ${staticDir}. Did you run 'npm run build'?`);
    }
    app.use(express.static(staticDir));
    app.use("*", (_req, res) => {
        const indexPath = path.join(staticDir, "index.html");
        if (!fs.existsSync(indexPath)) {
            res.status(404).send("Build index.html not found");
        }
        else {
            res.sendFile(indexPath);
        }
    });
}
