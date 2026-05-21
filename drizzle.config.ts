import { config } from "./shared/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./server/db/schema.ts",
  out: "./server/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: config.db.url || "",
    authToken: config.db.authToken || "",
  },
});
