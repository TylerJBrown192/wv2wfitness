import { PrismaClient } from '@prisma/client';
import { User } from './UserClass';

const prisma = new PrismaClient();

@Resolver(User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  async allUsers() {
    return prisma.user.findMany();
  }
}
