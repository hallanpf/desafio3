import { Product } from "../entities/product";

type Override = Partial<Product>;

export const makeProductFactory = ({ id, ...override }: Override) => {
  return new Product({
    name: 'Product Test',
    description: 'Product Description Test',
    userId: 'defaultUserId',
    tags: [],
    productVariants: [],
    productImages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override
  }, id);
}