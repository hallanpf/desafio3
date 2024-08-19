import { Product } from "src/modules/product/entities/product";
import { ProductRepository } from "src/modules/product/repositories/productRepository";
import { PrismaService } from "../prisma.service";
import { PrismaProductMapper } from "../mappers/PrismaProductMapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaProductRepository implements ProductRepository {

  constructor(private prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    const productRaw = PrismaProductMapper.toPrisma(product);
    await this.prisma.product.create({
      data: productRaw
    });
  }

  async findById(id: string): Promise<Product | null> {
    const productRaw = await this.prisma.product.findUnique({
      where: {
        id
      }
    });
    if (!productRaw) return null;
    return PrismaProductMapper.toDomain(productRaw);    
  }

  async delete(product: Product): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id: product.id
      }
    });
  }

  async update(product: Product): Promise<void> {
    const productRaw = PrismaProductMapper.toPrisma(product);
    await this.prisma.product.update({
      where: {
        id: product.id
      },
      data: productRaw
    });
  }
  async findAll(): Promise<Product[]> {
    const productsRaw = await this.prisma.product.findMany();

    return productsRaw.map(PrismaProductMapper.toDomain);
  }
}