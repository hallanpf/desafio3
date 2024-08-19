import { Module } from '@nestjs/common';
import { UserModule } from './intra/http/modules/user/user.module';
import { DatabaseModule } from './intra/database/database.module';
import { AuthModule } from './intra/http/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './intra/http/modules/auth/guards/jwtAuth.guard';
import { ProductModule } from './intra/http/modules/products/product.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, ProductModule ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
})
export class AppModule {}


