import { createUser, getUserByEmail } from "~~/server/db/queries/users";

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onSuccess(event, { user, tokens }) {
    if (!user.email) {
      throw new Error("Github account must have an email set.");
    }

    let existingUser = await getUserByEmail(user.email);

    if (!existingUser) {
      const result = await createUser({
        email: user.email,
        name: user.name,
        createdAt: Date.now().toLocaleString(),
        updatedAt: Date.now().toLocaleString(),
      });
      existingUser = result;
    }

    if (!existingUser) {
      throw new Error("Error authenticating with Github");
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
