import {
  GraphQLInt, GraphQLObjectType, GraphQLString,
} from 'graphql';
// import { GraphQLDateTime } from 'graphql-iso-date';
import { DateTimeResolver } from 'graphql-scalars';

const UserGraphQLType = new GraphQLObjectType({
  name: 'User',
  description: 'A User within the application',
  fields: {
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },

    // dailyLogs: { type: GraphQLFloat },

    createdAt: { type: DateTimeResolver },
    updatedAt: { type: DateTimeResolver },
  },
});

export {
  UserGraphQLType,
};
