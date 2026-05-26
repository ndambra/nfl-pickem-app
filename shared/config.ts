import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type DBConfig = {
  url: string | undefined;
  authToken: string | undefined;
};

type APIConfig = {
  clientId: string | undefined;
  clientSecret: string | undefined;
  httpProxy: string;
  httpsProxy: string;
};

export const config: Config = {
  db: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  api: {
    clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
    clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
    httpProxy: process.env.HTTP_PROXY || "",
    httpsProxy: process.env.HTTPS_PROXY || "",
  },
};
