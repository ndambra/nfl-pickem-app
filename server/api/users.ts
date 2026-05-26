import { db } from "../db";

export default defineEventHandler(async () => {
  if (db) {
    return db.query.users.findMany();
  }
});
