import prisma from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser?.id) {
    return []
  }

  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: 'desc' // order by latest active
      },
      where: {
        userIds: {
          has: currentUser.id // load every conversation that includes current user
        }
      }, 
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true // array of people who have seen the latest message
          }
        }
      }
    })

    return conversations

  } catch (error: any) {
    return []
  }
}

export default getConversations