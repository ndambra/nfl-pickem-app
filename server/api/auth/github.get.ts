export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        login: user.login,
        name: user.name,
        email: user.email,
      },
    });
    return sendRedirect(event, "/");
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error("GitHub OAuth error:", error);
    return sendRedirect(event, "/");
  },
});
