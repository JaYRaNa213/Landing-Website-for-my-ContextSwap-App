import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = parseInt(process.env.PORT || "3000", 10);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path2 = req.path;
  let capturedJson;
  const originalJson = res.json;
  res.json = function(body, ...args) {
    capturedJson = body;
    return originalJson.call(this, body, ...args);
  };
  res.on("finish", () => {
    if (path2.startsWith("/api")) {
      const duration = Date.now() - start;
      let msg = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJson) msg += ` :: ${JSON.stringify(capturedJson)}`;
      log(msg.length > 80 ? msg.slice(0, 77) + "\u2026" : msg);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    console.error("\u274C Server Error:", err);
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
  });
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    const clientBuildPath = path.resolve(__dirname, "../dist/public");
    app.use(express.static(clientBuildPath));
    app.get("*", (_, res) => {
      res.sendFile(path.join(clientBuildPath, "index.html"));
    });
  }
  app.listen(port, "0.0.0.0", () => {
    console.log(`\u2705 Server running at http://localhost:${port}`);
  });
})();
