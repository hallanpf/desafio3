import { Controller, Get, HttpCode, Post, Request, UseGuards } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
import { AuthRequestModel } from "./models/authRequestModel";
import { SignInUseCase } from "src/modules/auth/useCases/signInUseCase/signInUseCase";
import { Public } from "./decorators/isPublic";
import type { AuthenticatedRequestModel } from "./models/authenticatedRequestModel";
import { LocalAuthGuard } from "./guards/localAuth.guard";

@Controller()
export class AuthController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post("signIn")
  @Public()
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() req: AuthRequestModel) {
    const accessToken = await this.signInUseCase.execute({user: req.user});
    console.log("Successful login");
    return { accessToken };
  } 

  // @Get("teste")
  // @UseGuards(AuthGuard("jwt"))
  // async teste(@Request() req: AuthenticatedRequestModel ) {
  //   return req.user;
  // }
}
