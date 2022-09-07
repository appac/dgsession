import { gql } from "apollo-server"

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
`

export const sessionResolver = {
    Query: {
        sessions: async () => {
            return [{
                id: 'bc9546db-b7a2-4907-bd2c-61a20a72c505',
                title: 'Writing Docker Compose Files',
                body: 'In this session, we\'ll cover writing a docker compose file, with an existing application in mind.',
                video: 'https://some.url.to.video.co/abc123',
                scheduled: '2022-09-13 15:00:00',
                created: '2022-09-07 09:12:37',
                completed: false
            }];
        }
    },
}
