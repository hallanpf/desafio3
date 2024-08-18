import { Product } from "../entities/product";

export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
  abstract findById(id: string): Promise<Product | null>;
  abstract delete(product: Product): Promise<void>;
  abstract update(product: Product): Promise<void>;
  abstract findAll(): Promise<Product[]>;
}