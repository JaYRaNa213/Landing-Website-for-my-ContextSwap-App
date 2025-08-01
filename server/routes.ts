// server/routes.ts
import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/download/windows", (req, res) => {
    res.json({
      message: "Windows download would be served here",
      filename: "ContextSwap-Setup.exe",
      size: "90MB",
      version: "1.0.0"
    });
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log("Contact form submission:", { name, email, message });
    res.json({ message: "Thank you for your message! We'll get back to you soon." });
  });

  app.post("/api/analytics/download", (req, res) => {
    const { platform, version } = req.body;
    console.log("Download tracked:", { platform, version, timestamp: new Date() });

    res.json({ success: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
