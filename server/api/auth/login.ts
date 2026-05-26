// import { z } from "zod";

// const bodySchema = z.object({
//   email: z.email(),
//   password: z.string().min(8),
// });

export default defineEventHandler(async (event) => {
  // const { email, password } = await readValidatedBody(event, bodySchema.parse);

  // TODO: remove once working, obviously for DEV work

  await setUserSession(event, {
    user: {
      login: "name",
    },
    secure: {
      apiToken: "1234567",
    },
    loggedInAt: new Date(),
  });
});
