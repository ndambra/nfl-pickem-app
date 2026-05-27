import { getLeaguesForUser } from "~~/server/db/queries/leagues";

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");

  if (userId) {
    return await getLeaguesForUser(userId);
  }
  return [];
});
