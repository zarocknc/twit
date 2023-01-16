import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await prisma.user.create({
    data: {
      name: "Juanito Muchotrigo",
      email: "Muchotrigo@gmail.com",
    },
  });

  console.log("Created user: ", user);
  return {user}
});
