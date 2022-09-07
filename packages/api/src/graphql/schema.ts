import {makeExecutableSchema} from '@graphql-tools/schema'
import { sessionResolver, sessionSchema } from './resolvers/sessionResolver'

export const schema = makeExecutableSchema({
    typeDefs: [
        sessionSchema
    ],
    resolvers: [
        sessionResolver
    ]
});
