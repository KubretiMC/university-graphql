import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { User, UserModel } from "../entities/user-entity";
import { CreateUserInput, BaseUserInput } from "./user-params";

@Resolver()
export class UserResolver {

    @Query(returns => [User])
    async users(): Promise<User[]> {
        return await UserModel.find({});
    }

    @Query(returns => User)
    async user(@Arg("_id") _id: string): Promise<User[]> {
        return await UserModel.findById(_id);
    }

    @Mutation(returns => User)
    async createUser(@Arg("data") data: CreateUserInput): Promise<User> {
        const newUser = new UserModel(data);
        await newUser.save();
        return newUser;
    }

    @Mutation(returns => User)
    async deleteUser(@Arg("_id") _id: string): Promise<User> {
        const deltedUser = await UserModel.findByIdAndRemove(_id);
        return deltedUser;
    }

    @Mutation(returns => User)
    async editUser(@Arg("_id") _id: string, @Arg("data") data: BaseUserInput): Promise<User> {

        return UserModel.findByIdAndUpdate(_id, data, { new: true });
    }
}