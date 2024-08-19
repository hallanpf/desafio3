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

    const createdProduct = await this.prisma.product.create({
      data: {
        id: productRaw.id,
        name: productRaw.name,
        description: productRaw.description,
        userId: productRaw.userId,
        createdAt: productRaw.createdAt,
        updatedAt: productRaw.updatedAt,
      },
    });

    await this.prisma.tags.createMany({
      data: productRaw.Tags.map(tag => ({
        ...tag,
        productId: createdProduct.id,
      })),
    });

    await this.prisma.productVariant.createMany({
      data: productRaw.ProductVariant.map(variant => ({
        ...variant,
        productId: createdProduct.id,
      })),
    });

    await this.prisma.productImages.createMany({
      data: productRaw.ProductImages.map(image => ({
        ...image,
        productId: createdProduct.id,
      })),
    });
  }

  async findById(id: string): Promise<Product | null> {
    const productRaw = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        Tags: true,
        ProductVariant: true,
        ProductImages: true,
      },
    });

    if (!productRaw) return null;

    return PrismaProductMapper.toDomain({
      ...productRaw,
      Tags: productRaw.Tags,
      ProductVariant: productRaw.ProductVariant,
      ProductImages: productRaw.ProductImages,
    });
  }

  async delete(product: Product): Promise<void> {
    await this.prisma.tags.deleteMany({
      where: {
        productId: product.id,
      },
    });
  
    await this.prisma.productVariant.deleteMany({
      where: {
        productId: product.id,
      },
    });
  
    await this.prisma.productImages.deleteMany({
      where: {
        productId: product.id,
      },
    });
  
    await this.prisma.product.delete({
      where: {
        id: product.id,
      },
    });
  }

  async update(product: Product): Promise<void> {
    const productRaw = PrismaProductMapper.toPrisma(product);

    await this.prisma.product.update({
      data: {
        name: productRaw.name,
        description: productRaw.description,
        userId: productRaw.userId,
        createdAt: productRaw.createdAt,
        updatedAt: productRaw.updatedAt,
      },
      where: {
        id: product.id
      },
    })
  }

  async findAll(): Promise<Product[]> {
    const productsRaw = await this.prisma.product.findMany({
      include: {
        Tags: true,
        ProductVariant: true,
        ProductImages: true,
      },
    });

    return productsRaw.map(PrismaProductMapper.toDomain);
  }
}
