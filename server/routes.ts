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

      // Generate subdomain for checking
      const subdomain = tenantData.marketplaceName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      // Check both email and subdomain uniqueness in parallel
      const [existingEmail, existingSubdomain] = await Promise.all([
        storage.getTenantByEmail(tenantData.ownerEmail),
        storage.getTenantBySubdomain(subdomain)
      ]);

      // Collect all validation errors
      const errors: { field: string; message: string }[] = [];
      
      if (existingEmail) {
        errors.push({ field: 'ownerEmail', message: 'Email already registered' });
      }
      
      if (existingSubdomain) {
        errors.push({ 
          field: 'marketplaceName', 
          message: 'This marketplace name is already taken. Please choose a different name.' 
        });
      }

      // If there are any errors, return them all
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const tenant = await storage.createTenant(tenantData, subdomain);

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
