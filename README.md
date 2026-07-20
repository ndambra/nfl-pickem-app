# nfl-pick-app

![code coverage badge](https://github.com/ndambra/nfl-pickem-app/actions/workflows/ci.yml/badge.svg)

## Local Development

Make sure you're on Node version 22+.

### Set up database
- Create Turso account and DB
- Copy Turso Database URL and Turso Auth Token into `.env`

```
TURSO_DATABASE_URL=<databaseURL>
TURSO_AUTH_TOKEN=<token>
```

### Make project OAUTH in github
- Create new OATH app
- Homepage URL = http://localhost:3000
- Authorization Callback URL = http://localhost:3000/api/auth/github
- Copy client ID and Secret into `.env` file

```
NUXT_OAUTH_GITHUB_CLIENT_ID=<clientID>
NUXT_OAUTH_GITHUB_CLIENT_SECRET=<clientSecret>
```

### Set up proxy (optional)
- if behind a proxy add to `.env` file

```
HTTP_PROXY=<proxy>
HTTPS_PROXY=<proxy>
```

### Run the server:

```bash
npm install
npm run dev
```
