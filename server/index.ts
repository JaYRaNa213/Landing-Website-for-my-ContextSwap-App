// import express, { type Request, Response, NextFunction } from "express";
// import { registerRoutes } from "./routes";
// import { setupVite, serveStatic, log } from "./vite";

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Logger middleware for API
// app.use((req, res, next) => {
//   const start = Date.now();
//   const path = req.path;
//   let capturedJson: any;

//   const originalJson = res.json;
//   res.json = function (body, ...args) {
//     capturedJson = body;
//     return originalJson.call(this, body, ...args);
//   };

//   res.on("finish", () => {
//     if (path.startsWith("/api")) {
//       const duration = Date.now() - start;
//       let msg = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
//       if (capturedJson) msg += ` :: ${JSON.stringify(capturedJson)}`;
//       log(msg.length > 80 ? msg.slice(0, 77) + "…" : msg);
//     }
//   });

//   next();
// });

// (async () => {
//   const server = await registerRoutes(app);

//   // Global error handler
//   app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//     const status = err.status || 500;
//     const message = err.message || "Internal Server Error";
//     console.error("❌ Server Error:", err);
//     res.status(status).json({ message });
//   });

//   if (process.env.NODE_ENV === "development") {
//     await setupVite(app, server);
//   } else {
//     serveStatic(app);
//   }

//   const port = parseInt(process.env.PORT || "3000", 10);
//   app.listen(port, "0.0.0.0", () => {
//     console.log(`✅ Server running at http://0.0.0.0:${port}`);
//   });
// })();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Resolve client/dist from root, not from dist/
const clientBuildPath = path.resolve(__dirname, "../client/dist");

// Serve static frontend files
app.use(express.static(clientBuildPath));

// Fallback to index.html for all frontend routes
app.get("*", (_, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
