import { config } from "./../../shared/config";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

let conn = undefined;

if (config.db.url && config.db.authToken) {
  conn = drizzle({
    connection: {
      url: config.db.url,
      authToken: config.db.authToken,
    },
    schema: schema,
  });
} else {
  console.log(
    "TURSO_DATABASE_URL and TURSO_AUTH_TOKEN env variables must be set",
  );
  console.log("Running without CRUD endpoints");
}

export const db = conn;

export function assertDbConnection() {
  if (!db) {
    throw new Error("Database connection is not available");
  }
}
