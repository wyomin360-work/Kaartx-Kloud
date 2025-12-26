import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMarketplaceRequestSchema } from "@shared/schema";
import { sendMarketplaceRequestEmails } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get('/api/health', (req, res) => {
    res.json({ ok: true });
  });

  app.post('/api/marketplace-requests', async (req, res) => {
    try {
      const validationResult = insertMarketplaceRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const firstError = validationResult.error.errors[0];
        return res.status(400).send(firstError.message);
      }

      const requestData = validationResult.data;
      const plan = req.body.plan || 'Starter';

      const [existingEmail, existingName] = await Promise.all([
        storage.getRequestByEmail(requestData.email),
        storage.getRequestByMarketplaceName(requestData.marketplaceName)
      ]);

      const errors: { field: string; message: string }[] = [];
      
      if (existingEmail) {
        errors.push({ field: 'email', message: 'A request with this email already exists' });
      }
      
      if (existingName) {
        errors.push({ 
          field: 'marketplaceName', 
          message: 'A request with this marketplace name already exists' 
        });
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const request = await storage.createMarketplaceRequest(requestData, plan);

      sendMarketplaceRequestEmails({
        marketplaceName: requestData.marketplaceName,
        email: requestData.email,
        plan,
      }).catch(err => console.error('Failed to send emails:', err));

      const { password, ...requestWithoutPassword } = request;

      res.status(201).json(requestWithoutPassword);
    } catch (error: any) {
      console.error('Error creating marketplace request:', error);
      res.status(500).send(error.message || 'Internal server error');
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
