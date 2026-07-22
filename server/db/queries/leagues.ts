import { eq } from "drizzle-orm";
import { assertDbConnection, db } from "~~/server/db";
import { type NewLeague, leagues } from "~~/server/db/schema";

export async function createLeague(league: NewLeague) {
  assertDbConnection();
  const [result] = await db!.insert(leagues).values(league).returning();

  return result;
}

export async function getLeaguesForUser(userId: string) {
  assertDbConnection();
  return await db!.select().from(leagues).where(eq(leagues.ownerId, userId));
}

export async function getLeagueByName(leagueName: string) {
  assertDbConnection();
  const [result] = await db!
    .select()
    .from(leagues)
    .where(eq(leagues.name, leagueName));

  return result;
}
