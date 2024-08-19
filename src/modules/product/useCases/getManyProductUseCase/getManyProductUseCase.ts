import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";

interface GetManyProductRequest {
  page: number;
  limit: number;
}

interface PaginatedProducts {
  products: Product[];
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pages: number[];
}

@Injectable()
export class GetManyProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: GetManyProductRequest): Promise<PaginatedProducts> {
    const { page, limit } = data;
    const products = await this.productRepository.findAll();

    if (!products || products.length === 0) {
      throw new NotFoundException();
    }

    const totalPages = Math.ceil(products.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    const pages = [];
    const maxPagesToShow = 3;
    const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return {
      products: products || paginatedProducts,
      currentPage: page,
      totalPages,
      hasNextPage,
      hasPreviousPage,
      pages,
    };
  }
}