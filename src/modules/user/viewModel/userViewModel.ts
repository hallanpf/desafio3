import type { User } from "../entities/User";

export class UserViewModel {
  static toHtp({ id, email, name, role, updatedAt }: User) {
    return {
      id,
      email,
      name,
      role,
      updatedAt,
    };
  } 
}