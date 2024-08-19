import { Product } from '../../../../modules/product/entities/Product';
import { Product as ProductRaw } from '@prisma/client';

export class PrismaProductMapper {
  static toPrisma({
    id,
    name,
    description,
    userId,
    createdAt,
    updatedAt,    
  }: Product): ProductRaw{
    return {
      id,
      name,
      description,
      userId,
      createdAt,
      updatedAt,
    };
  }

  static toDomain({
    id, 
    name, 
    description,
    userId,
    createdAt, 
    updatedAt, 
  }: ProductRaw): Product {
    return new Product({
      name,
      description,
      userId,
      createdAt,
      updatedAt,
      productVariants: [],
      productImages: [],
      tags: [],
    }, id);
    }
  }