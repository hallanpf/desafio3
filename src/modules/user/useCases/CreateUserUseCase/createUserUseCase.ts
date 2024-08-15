import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/UserRepository";
import { User } from "../../entities/User";
import { hash } from "bcrypt";

interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  role: string;
  id?: string;
  updatedAt?: Date;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password, name, role, id, updatedAt }: CreateUserRequest) {
    const user = new User({
      email,
      password: await hash(password, 10),
      name,
      role,
      updatedAt: updatedAt || new Date(),
    }, id); 

    await this.userRepository.create(user);

    return user;
  }
}