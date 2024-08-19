import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";

interface DeleteProductRequest {
  productId: string;
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

@Injectable()
export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}
  
  async execute(data: DeleteProductRequest): Promise<Product> {
    const product = await this.productRepository.findById(data.productId);

    if (!product) {
      throw new NotFoundException();
    };

    if (product.userId !== data.userId) {
      throw new UnauthorizedException();
    }

    await this.productRepository.delete(product);
    
    return product;
  }
}