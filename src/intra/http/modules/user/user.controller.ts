import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/CreateUserUseCase/createUserUseCase";
import type { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModel } from "src/modules/user/viewModel/userViewModel";

@Controller('users')
export class UserController {
    constructor(private CreateUserUseCase: CreateUserUseCase) {}

    @Post()
    async createUser(@Body() body: CreateUserBody) {
      const { name, email, password, role } = body;

      const user = await this.CreateUserUseCase.execute({
        name, 
        email, 
        password, 
        role,
      });

      return UserViewModel.toHtp(user);
    }
}