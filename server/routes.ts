import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static HTML files from client directory
  app.get("*.html", async (req, res, next) => {
    const htmlPath = path.resolve(
      import.meta.dirname,
      "..",
      "client",
      req.path.substring(1) // Remove leading slash
    );

    try {
      if (fs.existsSync(htmlPath)) {
        const htmlContent = await fs.promises.readFile(htmlPath, "utf-8");
        res.status(200).set({ "Content-Type": "text/html" }).end(htmlContent);
      } else {
        next();
      }
    } catch (e) {
      next(e);
    }
  });
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
