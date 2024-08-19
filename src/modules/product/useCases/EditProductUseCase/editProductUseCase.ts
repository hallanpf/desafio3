import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";

interface EditProductRequest {
  productId: string;
  userId: string;
  name: string;
  description: string;
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

@Injectable()
export class EditProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: EditProductRequest): Promise<Product> {
    const product = await this.productRepository.findById(data.productId);

    if (!product) {
      throw new NotFoundException();
    }

    if (product.userId !== data.userId) {
      throw new UnauthorizedException();
    }

    product.name = data.name;
    product.description = data.description;
    product.tags = data.tags;
    product.productVariants = data.productVariants;
    product.productImages = data.productImages;

    await this.productRepository.update(product);

    return product;
  }
}