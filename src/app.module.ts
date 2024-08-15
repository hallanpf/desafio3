import { Module, type MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './intra/http/modules/user/user.module';
import { DatabaseModule } from './intra/database/database.module';
import { AuthModule } from './intra/http/modules/auth/auth.module';
import { SignInDTO } from './intra/http/modules/auth/middleware/signInDTO.middleware';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './intra/http/modules/auth/guards/jwtAuth.guard';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [],
  providers: [ {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
}],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignInDTO).forRoutes('signIn');
  }
}
