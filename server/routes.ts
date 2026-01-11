import type { Express } from "express";
import { createServer, type Server } from "http";
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { fromError } from "zod-validation-error";
import { storage } from "./storage";
import { hashPassword } from "./auth/password";
import passport from "./auth/passport";
import { signupSchema, contactSchema } from "@shared/schema";

const router = Router();

// Rate limiters
const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // 3 signups per IP
  message: "Too many signup attempts, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 submissions per IP
  message: "Too many submissions, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/users/register - User signup
router.post("/api/users/register", signupLimiter, async (req, res, next) => {
  try {
    // Validate input
    const validated = signupSchema.parse(req.body);

    // Check if user exists
    const existing = await storage.getUserByEmail(validated.email);
    if (existing) {
      return res.status(400).json({
        message: "An account with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(validated.password);

    // Create user
    const user = await storage.createUser({
      ...validated,
      password: hashedPassword,
    });

    // Auto-login after signup
    req.login(user, (err) => {
      if (err) return next(err);

      // Don't return password
      const { password, ...userWithoutPassword } = user;
      res.status(201).json({ user: userWithoutPassword });
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: fromError(error).toString(),
      });
    }
    next(error);
  }
});

// POST /api/auth/login - User login
router.post("/api/auth/login", (req, res, next) => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({
        message: info?.message || "Login failed",
      });
    }

    req.login(user, (err) => {
      if (err) return next(err);
      const { password, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword });
    });
  })(req, res, next);
});

// POST /api/auth/logout - User logout
router.post("/api/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.json({ message: "Logged out successfully" });
  });
});

// GET /api/auth/me - Get current user
router.get("/api/auth/me", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { password, ...userWithoutPassword } = req.user as any;
  res.json({ user: userWithoutPassword });
});

// POST /api/contact - Contact form submission
router.post("/api/contact", contactLimiter, async (req, res, next) => {
  try {
    const validated = contactSchema.parse(req.body);

    // Capture metadata
    const submission = await storage.createContactSubmission({
      ...validated,
      ipAddress: req.ip,
      userAgent: req.get("user-agent") || null,
    });

    // TODO: Send email notification to sales team
    // await sendContactNotification(submission);

    res.status(201).json({
      message: "Thank you for contacting us. We'll respond within 24 hours.",
      id: submission.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: fromError(error).toString(),
      });
    }
    next(error);
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Register all routes
  app.use(router);

  const httpServer = createServer(app);

  return httpServer;
}
