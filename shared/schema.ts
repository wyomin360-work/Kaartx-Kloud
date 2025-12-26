import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const marketplaceRequests = pgTable("marketplace_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  marketplaceName: text("marketplace_name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  plan: text("plan").notNull().default("Starter"),
  billingCycle: text("billing_cycle").notNull().default("monthly"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertMarketplaceRequestSchema = createInsertSchema(marketplaceRequests).omit({
  id: true,
  createdAt: true,
  status: true,
}).extend({
  marketplaceName: z.string().min(2, "Marketplace name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  plan: z.string().default("Starter"),
  billingCycle: z.enum(["monthly", "yearly"]).default("monthly"),
});

export type InsertMarketplaceRequest = z.infer<typeof insertMarketplaceRequestSchema>;
export type MarketplaceRequest = typeof marketplaceRequests.$inferSelect;
export type PublicMarketplaceRequest = Omit<MarketplaceRequest, 'password'>;
