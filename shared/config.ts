import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfig;
};

type DBConfig = {
  url: string | undefined;
  authToken: string | undefined;
};

export const config: Config = {
  db: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
};
