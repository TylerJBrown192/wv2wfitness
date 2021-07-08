// import { PrismaClient } from '@prisma/client';
// import {
//   ObjectType, Field, ID, buildSchemaSync,
// } from 'type-graphql';

// const schema = buildSchemaSync({
//   resolvers: [UserResolver],
// });
// const server = new ApolloServer({ schema });
// server.listen({ port: 4000 });

import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { buildFederatedSchema } from '@apollo/federation';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:4001' }, // TODO: Programatically configure URLs
  ],
});

// const x = buildFederatedSchema({
//   resolvers
//   // typeDefs
// })

const server = new ApolloServer({
  gateway,
  debug: true,
  // Subscriptions are unsupported but planned for a future Gateway version.
  subscriptions: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch((err) => { console.error(err); });
