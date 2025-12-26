import { type User, type InsertUser, type MarketplaceRequest, type InsertMarketplaceRequest } from "@shared/schema";
import { randomUUID, randomBytes, scryptSync } from "crypto";

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `scrypt:${salt}:${hash}`;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMarketplaceRequest(request: InsertMarketplaceRequest): Promise<MarketplaceRequest>;
  getRequestByEmail(email: string): Promise<MarketplaceRequest | undefined>;
  getRequestByMarketplaceName(name: string): Promise<MarketplaceRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private marketplaceRequests: Map<string, MarketplaceRequest>;

  constructor() {
    this.users = new Map();
    this.marketplaceRequests = new Map();
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

  async createMarketplaceRequest(insertRequest: InsertMarketplaceRequest): Promise<MarketplaceRequest> {
    const id = randomUUID();
    const hashedPassword = hashPassword(insertRequest.password);

    const request: MarketplaceRequest = {
      id,
      marketplaceName: insertRequest.marketplaceName,
      email: insertRequest.email,
      password: hashedPassword,
      plan: insertRequest.plan || "Starter",
      billingCycle: insertRequest.billingCycle || "monthly",
      status: "pending",
      createdAt: new Date(),
    };

    this.marketplaceRequests.set(id, request);
    return request;
  }

  async getRequestByEmail(email: string): Promise<MarketplaceRequest | undefined> {
    return Array.from(this.marketplaceRequests.values()).find(
      (request) => request.email === email,
    );
  }

  async getRequestByMarketplaceName(name: string): Promise<MarketplaceRequest | undefined> {
    return Array.from(this.marketplaceRequests.values()).find(
      (request) => request.marketplaceName.toLowerCase() === name.toLowerCase(),
    );
  }
}

export const storage = new MemStorage();
