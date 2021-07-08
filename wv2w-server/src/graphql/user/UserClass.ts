import { PrismaClient } from '@prisma/client';
import {
  ObjectType, Field, ID, buildSchemaSync,
} from 'type-graphql';
import { ApolloServer } from 'apollo-server';


@ObjectType()
export class User {
  @Field()

  @Field((type) => String, { nullable: true })
  name?: string | null
}
