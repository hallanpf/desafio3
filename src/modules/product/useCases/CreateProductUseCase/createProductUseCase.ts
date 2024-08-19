import { Injectable } from "@nestjs/common";
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
  category: string;
  discount: number;
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

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}
  async execute({ name, description, userId, tags, productVariants, productImages }: CreateProductRequest) {
    const tagArray = tags.map(tag => ({
      id: tag.id,
      tags: tag.tags,
      createdAt: tag.createdAt,
      updatedAt: tag.updatedAt,
      productId: tag.productId,
    }));

    const productVariantsArray = productVariants.map(productVariant => ({
      id: productVariant.id,
      price: productVariant.price,
      size: productVariant.size,
      sku: productVariant.sku,
      color: productVariant.color,
      quantity: productVariant.quantity,
      category: productVariant.category,
      discount: productVariant.discount,
      createdAt: productVariant.createdAt,
      updatedAt: productVariant.updatedAt,
      productId: productVariant.productId,
    }));

    const productImagesArray = productImages.map(productImage => ({
      id: productImage.id,
      url: productImage.url,
      createdAt: productImage.createdAt,
      updatedAt: productImage.updatedAt,
      productId: productImage.productId,
    }));
  
    const product = new Product({
      name,
      description,
      userId,
      tags: tagArray,
      productVariants: productVariantsArray,
      productImages: productImagesArray,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.productRepository.create(product);

    return product;
  }
}