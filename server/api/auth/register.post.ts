import { z } from "zod";
import { createUser, getUserByEmail } from "~~/server/db/queries/users";

const bodySchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
  name: z.string(),
});

export default defineEventHandler(async (event) => {
  const { email, password, name } = await readValidatedBody(
    event,
    bodySchema.parse,
  );

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("Account already exists for email. Login instead.");
  }

  const newUser = await createUser({
    name,
    email,
    createdAt: Date.now().toLocaleString(),
    updatedAt: Date.now().toLocaleString(),
    password: await hashPassword(password),
  });

  if (!newUser) {
    throw new Error("Failed to create user");
  }

  const { password: stash, ...userWithoutPassword } = newUser;
  await setUserSession(event, {
    user: userWithoutPassword,
  });
  return userWithoutPassword;
});
