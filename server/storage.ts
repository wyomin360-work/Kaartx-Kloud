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
  createTenant(tenant: InsertTenant): Promise<Tenant>;
  getTenantByEmail(email: string): Promise<Tenant | undefined>;
  getTenantBySubdomain(subdomain: string): Promise<Tenant | undefined>;
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

  async createTenant(insertTenant: InsertTenant): Promise<Tenant> {
    const id = randomUUID();
    let subdomain = insertTenant.marketplaceName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    let existingSubdomain = await this.getTenantBySubdomain(subdomain);
    let counter = 1;
    while (existingSubdomain) {
      subdomain = `${insertTenant.marketplaceName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')}-${counter}`;
      existingSubdomain = await this.getTenantBySubdomain(subdomain);
      counter++;
    }
    
    const trialEndsAt = new Date();
    trialEndsAt.setDate(trialEndsAt.getDate() + 14);

    const hashedPassword = hashPassword(insertTenant.password);

    const tenant: Tenant = {
      ...insertTenant,
      password: hashedPassword,
      id,
      subdomain,
      plan: 'Starter',
      status: 'Trial',
      createdAt: new Date(),
      trialEndsAt,
    };

    this.tenants.set(id, tenant);
    return tenant;
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
