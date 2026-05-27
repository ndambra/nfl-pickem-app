import { z } from "zod";
import { getUserByEmail } from "~~/server/db/queries/users";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    throw new Error("Invalid email or password. Please try again.");
  }

  if (!existingUser.password) {
    throw new Error("Invalid email or password. Please try again.");
  }

  const isValid = await verifyPassword(existingUser.password, password);

  if (!isValid) {
    throw new Error("Invalid email or password. Please try again.");
  }

  const { password: stash, ...userWithoutPassword } = existingUser;
  await setUserSession(event, {
    user: userWithoutPassword,
  });
});
