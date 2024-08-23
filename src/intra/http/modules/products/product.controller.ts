import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request } from "@nestjs/common";
import { CreateProductUseCase } from "src/modules/product/useCases/CreateProductUseCase/createProductUseCase";
import { AuthenticatedRequestModel } from "../auth/models/authenticatedRequestModel";
import { CreateProductBody } from "./dtos/createProductBody";
import { ProductViewModel } from "./viewModel/productViewModel";
import { EditProductUseCase } from "src/modules/product/useCases/EditProductUseCase/editProductUseCase";
import { EditProductBody } from "./dtos/editProductBody";
import { DeleteProductUseCase } from "src/modules/product/useCases/DeleteProductUseCase/deleteProductUseCase";
import { GetProductUseCase } from "src/modules/product/useCases/getProductUseCase/getProductUseCase";
import { GetManyProductUseCase } from "src/modules/product/useCases/getManyProductUseCase/getManyProductUseCase";
import { Public } from "../auth/decorators/isPublic";

@Controller('products')
export class ProductsController {
  
  constructor(
    private createProductUseCase: CreateProductUseCase, 
    private editProductUseCase: EditProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase,
    private getProductUseCase: GetProductUseCase,
    private getManyProductUseCase: GetManyProductUseCase,
  ) {}

  @Post()
  async createProduct(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateProductBody
  ) {
    const { name, description, productVariants, productImages, tags } = body;

    const product = await this.createProductUseCase.execute({
      name,
      description,
      userId: request.user.id,
      productVariants,
      productImages,
      tags,
    });

    return ProductViewModel.toHttp(product);
  }

  @Put(':id')
  async editProduct(
    @Request() request: AuthenticatedRequestModel,
    @Param('id') productId: string,
    @Body() body: EditProductBody
  ) {
    const { name, description, productVariants, productImages, tags } = body;

    await this.editProductUseCase.execute({
      productId,
      name,
      description,
      userId: request.user.id,
      productVariants,
      productImages,
      tags,
    });
  }

  @Delete(':id')
  async deleteProduct(
    @Request() request: AuthenticatedRequestModel,
    @Param('id') productId: string,
  ) {
    await this.deleteProductUseCase.execute({
      productId,
      userId: request.user.id,
      tags: [],
      productVariants: [],
      productImages: []
    });
  }

  @Public()
  @Get(':id')
  async getProduct(
    @Request() request: AuthenticatedRequestModel,
    @Param('id') productId: string
  ) {
  const product = await this.getProductUseCase.execute({
    productId,
  });
  
  return ProductViewModel.toHttp(product);
  }

  @Public()
  @Get()
  async GetManyProducts(
    @Request() request: AuthenticatedRequestModel,
    @Query('page') page: string,
    @Query('limit') limit: string
  ) {
    const paginatedProducts = await this.getManyProductUseCase.execute({ 
      page: parseInt(page, 10), 
      limit: parseInt(limit, 10)
    });

    return {
      products: paginatedProducts.products.map(ProductViewModel.toHttp),
      currentPage: paginatedProducts.currentPage,
      totalPages: paginatedProducts.totalPages,
      hasNextPage: paginatedProducts.hasNextPage,
      hasPreviousPage: paginatedProducts.hasPreviousPage,
      pages: paginatedProducts.pages,
    };
  }
}
