import { z } from "zod";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { email } = await readValidatedBody(event, bodySchema.parse);

  await setUserSession(event, {
    user: {
      name: "name",
      email,
    },
    secure: {
      apiToken: "1234567",
    },
    loggedInAt: new Date(),
  });
});
