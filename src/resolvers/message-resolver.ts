import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Message, MessageModel } from "../entities/message-entity";
import { CreateMessageInput, EditMessageInput } from "./message-params";

@Resolver()
export class MessageResolver {

    @Query(returns => [Message])
    async messages(): Promise<Message[]> {
        return await MessageModel.find({});
    }

    @Query(returns => Message)
    async message(@Arg("_id") _id: string): Promise<Message[]> {
        return await MessageModel.findById(_id);
    }

    @Mutation(returns => Message)
    async createMessage(@Arg("data") data: CreateMessageInput): Promise<Message> {
        const newMessage = new MessageModel(data);
        await newMessage.save();
        return newMessage;
    }

    @Mutation(returns => Message)
    async deleteMessage(@Arg("_id") _id: string): Promise<Message> {
        const deletedMessage = await MessageModel.findByIdAndRemove(_id);
        return deletedMessage;
    }

    @Mutation(returns => Message)
    async editMessage(@Arg("_id") _id: string, @Arg("data") data: EditMessageInput): Promise<Message> {

        return MessageModel.findByIdAndUpdate(_id, data, { new: true });
    }
}