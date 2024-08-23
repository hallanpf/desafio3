import { Product } from "src/modules/product/entities/product";

export class ProductViewModel {
  static toHttp({ id, name, description, createdAt, updatedAt, tags, productVariants, productImages }: Product) {
    return {
      id,
      name,
      description,
      createdAt,
      updatedAt,
      tags: tags.map(tag => ({
        id: tag.id,
        tags: tag.tags,
        createdAt: tag.createdAt,
        updatedAt: tag.updatedAt,
        productId: tag.productId,
      })),
      productVariants: productVariants.map(variant => ({
        id: variant.id,
        price: variant.price,
        size: variant.size,
        sku: variant.sku,
        color: variant.color,
        quantity: variant.quantity,
        category: variant.category,
        discount: variant.discount,
        createdAt: variant.createdAt,
        updatedAt: variant.updatedAt,
        productId: variant.productId,
      })),
      productImages: productImages.map(image => ({
        id: image.id,
        url: image.url,
        createdAt: image.createdAt,
        updatedAt: image.updatedAt,
        productId: image.productId,
      })),
    };
  }
}
