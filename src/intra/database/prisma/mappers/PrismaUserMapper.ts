import { User } from '../../../../modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma({createdAt, email, name, password, role, id}: User): UserRaw {
    return {
      createdAt,
      email,
      name,
      password,
      role,
      id,
      updatedAt: new Date()
    };
  }

  static toDomain({createdAt, email, name, password, role, id}: UserRaw): User {
    return new User({
      createdAt,
      email,
      name,
      password,
      role,
      updatedAt: new Date()
    }, id)
  }
}