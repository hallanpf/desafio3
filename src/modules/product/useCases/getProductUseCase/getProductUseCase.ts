import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";

interface GetProductRequest {
  productId: string;
  userId: string;
}

@Injectable()
export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: GetProductRequest): Promise<Product> {
    const product = await this.productRepository.findById(data.productId);
  
    if (!product) {
      throw new NotFoundException();
    }
  
    if (product.userId !== data.userId) {
      throw new UnauthorizedException();
    }
  
    return product;   
  }
}