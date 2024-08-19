import { User } from "../../../../../modules/user/entities/User";

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