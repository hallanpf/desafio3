import { Product } from "../entities/product";
import { ProductRepository } from "./productRepository";

export class ProductRepositoryInMemory implements ProductRepository {
  

  async create(product: Product): Promise<void> {
    this.products.push(product); 
  }

  async findById(id: string): Promise<Product | null> {
    const product = this.products.find(product => product.id === id);

    return product || null;
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async delete(product: Product): Promise<void> {
    const productIndex = this.products.findIndex(p => p.id === product.id);

    this.products.splice(productIndex, 1);
  }

  async update(product: Product): Promise<void> {
    const productIndex = this.products.findIndex(p => p.id === product.id);

    this.products[productIndex] = product;
  }
  public products: Product[] = [];
}