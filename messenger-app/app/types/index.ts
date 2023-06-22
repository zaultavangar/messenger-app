import {Conversation, Message, User} from '@prisma/client'

// extends message
export type FullMessageType = Message & {
  sender: User,
  seen: User[],
}

// extends conversation 
export type FullConversationType = Conversation & {
  users: User[],
  messages: FullMessageType[],
}