import { eq } from "drizzle-orm";
import { assertDbConnection, db } from "~~/server/db";
import { type NewUser, users } from "~~/server/db/schema";

export async function createUser(user: NewUser) {
  assertDbConnection();
  const [result] = await db!.insert(users).values(user).returning();

  return result;
}

export async function getUserByEmail(email: string) {
  assertDbConnection();
  const result = await db!.select().from(users).where(eq(users.email, email));

  return result.length > 0 ? result[0] : null;
}
