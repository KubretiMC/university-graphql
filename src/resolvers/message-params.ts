import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { UserInput } from "./user-params";

@InputType()
export class CreateMessageInput {
    @Field()
    @MaxLength(10)
    messageNumber: string;

    @Field()
    createdBy: string;

    @Field()
    message: string;
}


@InputType()
export class EditMessageInput {
    @Field({ nullable: true })
    @MaxLength(10)
    messageNumber?: string;

    @Field({ nullable: true })
    createdBy?: string;

    @Field({ nullable: true })
    message?: number;

    @Field(type => [UserInput])
    users?: UserInput[]
}