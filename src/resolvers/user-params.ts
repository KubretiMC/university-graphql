import { MaxLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateUserInput {


    @MaxLength(30)
    @Field()
    firstName: string;

    @MaxLength(30)
    @Field()
    lastName: string;

    @MaxLength(255)
    @Field()
    address: string;

    @MaxLength(20)
    @Field()
    country: string;
}


@InputType()
export class BaseUserInput {

    @MaxLength(30)
    @Field({ nullable: true })
    firstName?: string;

    @MaxLength(30)
    @Field({ nullable: true })
    lastName?: string;

    @MaxLength(255)
    @Field({ nullable: true })
    address?: string;

    @MaxLength(20)
    @Field({ nullable: true })
    country?: string;
}

@InputType()
export class UserInput extends BaseUserInput {
    @Field()
    _id: ObjectId;
}