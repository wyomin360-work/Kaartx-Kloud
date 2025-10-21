import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTenantSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ ok: true });
  });

  // Create new marketplace tenant
  app.post('/api/tenants', async (req, res) => {
    try {
      const validationResult = insertTenantSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const firstError = validationResult.error.errors[0];
        return res.status(400).send(firstError.message);
      }

      const tenantData = validationResult.data;

      const existingTenant = await storage.getTenantByEmail(tenantData.ownerEmail);
      if (existingTenant) {
        return res.status(400).send('Email already registered');
      }

      const tenant = await storage.createTenant(tenantData);

      const { password, ...tenantWithoutPassword } = tenant;

      res.status(201).json(tenantWithoutPassword);
    } catch (error: any) {
      console.error('Error creating tenant:', error);
      res.status(500).send(error.message || 'Internal server error');
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
