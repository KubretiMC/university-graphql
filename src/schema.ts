import { buildSchema } from "type-graphql";
import { MessageResolver } from "./resolvers/message-resolver";
import { TypegooseMiddleware } from "./typegoose-midleware";
import * as path from "path";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { UserResolver } from "./resolvers/user-resolver";

export const getSchema = async () => {

    const schema = await buildSchema({
        resolvers: [MessageResolver, UserResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    });
    return schema;
}
