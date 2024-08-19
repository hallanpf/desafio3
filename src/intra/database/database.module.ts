import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository";
import { ProductRepository } from "src/modules/product/repositories/productRepository";
import { PrismaProductRepository } from "./prisma/repositories/PrismaProductRepository";

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository
    }
  ],
  exports: [UserRepository, ProductRepository]
})
export class DatabaseModule {}