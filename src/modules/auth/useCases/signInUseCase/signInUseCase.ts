import { Injectable } from "@nestjs/common";
import { User } from "src/modules/user/entities/User";
import { UserPayload } from "../../models/UserPayload";
import { JwtService } from "@nestjs/jwt";

interface SignInUseCaseRequest {
  user: User;
}
@Injectable()
export class SignInUseCase {
  constructor(private jwtService: JwtService) {}

  async execute({ user }: SignInUseCaseRequest) {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt.toJSON(),
    };

    const jwtToken = this.jwtService.sign(payload);

    return jwtToken;
  }
}