import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/CreateUserUseCase/createUserUseCase';
import { DatabaseModule } from 'src/intra/database/database.module';

@Module({
  imports: [ DatabaseModule ],
  controllers: [ UserController ],
  providers: [ CreateUserUseCase ],
})
export class UserModule {}