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

export const tenants = pgTable("tenants", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  marketplaceName: text("marketplace_name").notNull(),
  ownerEmail: text("owner_email").notNull().unique(),
  password: text("password").notNull(),
  subdomain: text("subdomain").notNull().unique(),
  plan: text("plan").notNull().default("Starter"),
  status: text("status").notNull().default("Trial"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  trialEndsAt: timestamp("trial_ends_at").notNull(),
});

export const insertTenantSchema = createInsertSchema(tenants).omit({
  id: true,
  createdAt: true,
  trialEndsAt: true,
  subdomain: true,
  plan: true,
  status: true,
}).extend({
  marketplaceName: z.string().min(2, "Marketplace name must be at least 2 characters"),
  ownerEmail: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type InsertTenant = z.infer<typeof insertTenantSchema>;
export type Tenant = typeof tenants.$inferSelect;
export type PublicTenant = Omit<Tenant, 'password'>;
