import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";

interface CreateProductRequest {
  name: string;
  description: string;
  userId: string;
  tags: Tag[];
  productVariants: ProductVariant[];
  productImages: ProductImage[];
}

interface Tag {
  id: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
  productId: string;
}

interface ProductVariant {
  id: string;
  price: number;
  size: string;
  sku: string;
  color: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  productId: string;
}

interface ProductImage {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  productId: string;
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}
  async execute({ name, description, userId, tags, productVariants, productImages }: CreateProductRequest) {
    const product = new Product({
      name,
      description,
      userId,
      tags,
      productVariants,
      productImages,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.productRepository.create(product);

    return product;
  }
}