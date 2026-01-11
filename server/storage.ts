import { eq } from "drizzle-orm";
import {
  type User,
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  users,
  contactSubmissions
} from "@shared/schema";
import { db } from "./db";

// Storage interface
export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact operations
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(limit?: number): Promise<ContactSubmission[]>;
  updateContactStatus(id: string, status: string): Promise<void>;
}

export class DrizzleStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return result[0];
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return result[0];
  }

  // Contact operations
  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db
      .insert(contactSubmissions)
      .values(contact)
      .returning();
    return result[0];
  }

  async getContactSubmissions(limit: number = 50): Promise<ContactSubmission[]> {
    const result = await db
      .select()
      .from(contactSubmissions)
      .orderBy(contactSubmissions.createdAt)
      .limit(limit);
    return result;
  }

  async updateContactStatus(id: string, status: string): Promise<void> {
    await db
      .update(contactSubmissions)
      .set({ status })
      .where(eq(contactSubmissions.id, id));
  }
}

export const storage = new DrizzleStorage();
