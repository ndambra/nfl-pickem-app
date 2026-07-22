import { z } from "zod";
import { createLeague, getLeagueByName } from "~~/server/db/queries/leagues";

const bodySchema = z.object({
  name: z.string(),
});

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  if (!userId) {
    throw new Error("User must be logged in to create a league.");
  }

  console.log(`Creating new league for user: ${userId}`);

  const { name } = await readValidatedBody(event, bodySchema.parse);
  console.log(`Validated body: ${name}`);

  const existingLeague = await getLeagueByName(name);
  if (existingLeague) {
    throw new Error("League name already exists. Enter a unique name.");
  }

  const newLeague = await createLeague({
    name,
    ownerId: userId,
    createdAt: Date.now().toLocaleString(),
    updatedAt: Date.now().toLocaleString(),
  });

  if (!newLeague) {
    throw new Error("Failed to create new league.");
  }
  return newLeague;
});
