import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/intra/database/database.module";
import { ProductViewModel } from "./viewModel/productViewModel";
import { DeleteProductUseCase } from "src/modules/product/useCases/DeleteProductUseCase/deleteProductUseCase";
import { CreateProductUseCase } from "src/modules/product/useCases/CreateProductUseCase/createProductUseCase";
import { EditProductUseCase } from "src/modules/product/useCases/EditProductUseCase/editProductUseCase";
import { GetManyProductUseCase } from "src/modules/product/useCases/getManyProductUseCase/getManyProductUseCase";
import { GetProductUseCase } from "src/modules/product/useCases/getProductUseCase/getProductUseCase";
import { ProductsController } from "./product.controller";

@Module({
  imports: [ DatabaseModule ],
  controllers: [ ProductsController ],
  providers: [
    CreateProductUseCase,
    EditProductUseCase,
    DeleteProductUseCase,
    GetProductUseCase,
    GetManyProductUseCase,
  ],
})
export class ProductModule {}