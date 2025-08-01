
// // server/index.ts
// import express, { type Request, Response, NextFunction } from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// import { registerRoutes } from "./routes.js"; // 👈 Add `.js` for ESM compatibility
// import { setupVite, serveStatic, log } from "./vite.js"; // 👈 Add `.js` too

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const port = parseInt(process.env.PORT || "3000", 10);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

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

//   app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//     console.error("❌ Server Error:", err);
//     res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
//   });

//   if (process.env.NODE_ENV === "development") {
//     await setupVite(app, server);
//   } else {
//     const clientBuildPath = path.resolve(__dirname, "../dist/public");
//     app.use(express.static(clientBuildPath));

//     app.get("*", (_, res) => {
//       res.sendFile(path.join(clientBuildPath, "index.html"));
//     });
//   }

//   app.listen(port, "0.0.0.0", () => {
//     console.log(`✅ Server running at http://localhost:${port}`);
//   });
// })();




import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes.js"; // 👈 Keep `.js`
import { setupVite, serveStatic, log } from "./vite.js"; // 👈 Keep `.js`

// ✅ Fix for importing CommonJS cors in ESM
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cors = require("cors");


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Enable CORS for your Vercel frontend
const allowedOrigin = "https://contextswap-8lun.onrender.com"; 
app.use(cors({ origin: allowedOrigin }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJson: any;

  const originalJson = res.json;
  res.json = function (body, ...args) {
    capturedJson = body;
    return originalJson.call(this, body, ...args);
  };

  res.on("finish", () => {
    if (path.startsWith("/api")) {
      const duration = Date.now() - start;
      let msg = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJson) msg += ` :: ${JSON.stringify(capturedJson)}`;
      log(msg.length > 80 ? msg.slice(0, 77) + "…" : msg);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error("❌ Server Error:", err);
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
  });

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    const clientBuildPath = path.resolve(__dirname, "../dist/public");
    app.use(express.static(clientBuildPath));

    app.get('/ping', (_req, res) => {
  res.send('pong');
});



    

    app.get("*", (_, res) => {
      res.sendFile(path.join(clientBuildPath, "index.html"));
    });
  }

  

  app.listen(port, "0.0.0.0", () => {
    console.log(`✅ Server running at http://localhost:${port}`);
  });
})();
