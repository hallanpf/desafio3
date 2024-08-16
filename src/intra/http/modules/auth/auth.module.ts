import { Module, MiddlewareConsumer } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "src/modules/auth/strategies/local.strategy";
import { ValidateUserUseCase } from "src/modules/auth/useCases/validadeUserUseCase/validadeUserUseCase";
import { UserModule } from "../user/user.module";
import { DatabaseModule } from "../../../database/database.module";
import { SignInUseCase } from "src/modules/auth/useCases/signInUseCase/signInUseCase";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "src/modules/auth/strategies/jwt.strategy";
import { SignInDTO } from "./middleware/signInDTO.middleware";

@Module({
  imports: [DatabaseModule, UserModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }
  })],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, ValidateUserUseCase, SignInUseCase ]
})

export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignInDTO).forRoutes('/signIn');
  }
}