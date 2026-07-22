import { getLeaguesForUser } from "~~/server/db/queries/leagues";

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");

  console.log("Fetching leagues for user:", userId);
  if (userId) {
    return await getLeaguesForUser(userId);
  }
  return [];
});
