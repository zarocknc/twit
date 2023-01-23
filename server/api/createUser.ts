import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type userModel = {
  newUserName: string,
  newMail: string
}



export default defineEventHandler(async (event) => {
  const body: userModel = await readBody(event)
 
  const user = await prisma.user.create({
    data: {
      name: body.newUserName,
      email: body.newMail,
    },
  });
  
  return {user}
  
});
