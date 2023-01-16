import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await prisma.user.create({
    data: {
      name: "Søren Bramer-Schmidt",
      email: "schmidt@prisma.io",
    },
  });

  console.log("Created user: ", user);
  return {user}
});
