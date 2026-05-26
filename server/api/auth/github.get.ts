import { eq } from "drizzle-orm";
import { db } from "~~/server/db";
import { users } from "~~/server/db/schema";

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onSuccess(event, { user, tokens }) {
    if (!db) {
      throw createError({
        statusCode: 500,
        statusMessage: "Unable to connect to the database.",
      });
    }

    if (!user.email) {
      throw createError({
        statusCode: 500,
        statusMessage: "Github account must have an email set.",
      });
    }

    let existingUser = await db.query.users.findFirst({
      where: eq(users.email, user.email),
    });

    if (!existingUser) {
      const [result] = await db
        .insert(users)
        .values({
          email: user.email,
          name: user.name,
          createdAt: Date.now().toLocaleString(),
          updatedAt: Date.now().toLocaleString(),
        })
        .returning();
      existingUser = result;
    }

    if (!existingUser) {
      throw createError({
        statusCode: 500,
        statusMessage: "Error authenticating with Github",
      });
    }

    const { password, ...userWithoutPassword } = existingUser;

    await setUserSession(event, {
      user: userWithoutPassword,
    });
    return sendRedirect(event, "/");
  },

  onError(event, error) {
    console.error("GitHub OAuth error:", error);
    return sendRedirect(event, "/");
  },
});
