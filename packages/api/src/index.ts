import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import {schema} from './graphql/utilities/schema'

async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer()
