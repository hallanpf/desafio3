import { Product } from "src/modules/product/entities/product";

export class ProductViewModel {
  static toHttp({ id, name, description, createdAt, updatedAt }: Product) {
    return {
      id,
      name,
      description,
      createdAt,
      updatedAt,
    };
  }
}
