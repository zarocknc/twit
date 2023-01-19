import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type userModel = {
  name: String,
  email: String
}



export default defineEventHandler(async (event) => {
  const body = await readBody(event)
 
  const user = await prisma.user.create({
    data: {
      name: body.newUserName,
      email: body.newMail,
    },
  });
  
  return {user}
  
});
