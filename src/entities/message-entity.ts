import { ObjectType, Field } from "type-graphql";
import { prop as Prop, getModelForClass, modelOptions, Severity } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { User } from "./user-entity";


@modelOptions({ options: { allowMixed: Severity.ALLOW } })

@ObjectType()
export class Message {


    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true, default: new Date() })
    @Field()
    createdOn: Date;

    @Prop({ required: true })
    @Field()
    createdBy: string;

    @Prop({ required: true })
    @Field()
    messageNumber: string;

    @Prop({ required: true })
    @Field()
    message: string;

    @Field(type => [User])
    @Prop({ default: [] })
    users?: User[]
}

export const MessageModel = getModelForClass(Message, { schemaOptions: { timestamps: true } });