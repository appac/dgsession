import { gql } from "apollo-server"
import { Session } from "../../models/SessionModel";
import { Resolvers } from "../schema-types.gen";

export const sessionSchema = gql`
    type Session {
        id: ID!
        title: String!
        body: String
        video: String
        scheduled: String!
        created: String!
        completed: Boolean!
    }

    input SessionInput {
        title: String!
        body: String
        video: String
        scheduled: String!
    }

    type Query {
        sessions: [Session]!
    }

    type Mutation {
        createSession(session: SessionInput!): Session!
    }
`

export const sessionResolver: Resolvers = {
    Query: {
        sessions: async () => {
            return Session.query();
        }
    },
    Mutation: {
        createSession: async (_, {session}) => {
            return Session.query().insertGraph(session).returning('*');
        }
    }
}
