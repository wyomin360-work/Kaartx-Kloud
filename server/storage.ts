import { type User, type InsertUser, type Tenant, type InsertTenant } from "@shared/schema";
import { randomUUID, randomBytes, scryptSync } from "crypto";

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `scrypt:${salt}:${hash}`;
}

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createTenant(tenant: InsertTenant, subdomain: string, plan?: string): Promise<Tenant>;
  getTenantByEmail(email: string): Promise<Tenant | undefined>;
  getTenantBySubdomain(subdomain: string): Promise<Tenant | undefined>;
  getTenantById(id: string): Promise<Tenant | undefined>;
  activateGrowthPlan(id: string): Promise<Tenant | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private tenants: Map<string, Tenant>;

  constructor() {
    this.users = new Map();
    this.tenants = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createTenant(insertTenant: InsertTenant, subdomain: string, plan: string = 'Starter'): Promise<Tenant> {
    const id = randomUUID();
    
    const trialEndsAt = new Date();
    trialEndsAt.setDate(trialEndsAt.getDate() + 14);

    const hashedPassword = hashPassword(insertTenant.password);

    // For Growth plan, status is 'Pending' until payment is confirmed
    const status = plan === 'Growth' ? 'Pending' : 'Trial';

    const tenant: Tenant = {
      ...insertTenant,
      password: hashedPassword,
      id,
      subdomain,
      plan,
      status,
      createdAt: new Date(),
      trialEndsAt,
    };

    this.tenants.set(id, tenant);
    return tenant;
  }

  async getTenantById(id: string): Promise<Tenant | undefined> {
    return this.tenants.get(id);
  }

  async activateGrowthPlan(id: string): Promise<Tenant | undefined> {
    const tenant = this.tenants.get(id);
    if (!tenant) return undefined;

    const updatedTenant: Tenant = {
      ...tenant,
      plan: 'Growth',
      status: 'Active',
    };
    
    this.tenants.set(id, updatedTenant);
    return updatedTenant;
  }

  async getTenantByEmail(email: string): Promise<Tenant | undefined> {
    return Array.from(this.tenants.values()).find(
      (tenant) => tenant.ownerEmail === email,
    );
  }

  async getTenantBySubdomain(subdomain: string): Promise<Tenant | undefined> {
    return Array.from(this.tenants.values()).find(
      (tenant) => tenant.subdomain === subdomain,
    );
  }
}

export const storage = new MemStorage();
