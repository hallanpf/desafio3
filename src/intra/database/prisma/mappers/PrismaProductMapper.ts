import { Product } from '../../../../modules/product/entities/Product';
import { 
  Product as ProductRaw, 
  Tags as TagRaw, 
  ProductVariant as ProductVariantRaw, 
  ProductImages as ProductImageRaw 
} from '@prisma/client';

export class PrismaProductMapper {
  static toPrisma({
    id,
    name,
    description,
    userId,
    createdAt,
    updatedAt,
    tags,
    productVariants,
    productImages,
  }: Product): ProductRaw & { Tags: TagRaw[], ProductVariant: ProductVariantRaw[], ProductImages: ProductImageRaw[] } {
    return {
      id,
      name,
      description,
      userId,
      createdAt,
      updatedAt,
      Tags: tags.map(tag => ({
        id: tag.id,
        tags: tag.tags,
        createdAt: tag.createdAt,
        updatedAt: tag.updatedAt,
        productId: id,
      })),
      ProductVariant: productVariants.map(variant => ({
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
        productId: id,
      })),
      ProductImages: productImages.map(image => ({
        id: image.id,
        url: image.url,
        createdAt: image.createdAt,
        updatedAt: image.updatedAt,
        productId: id,
      })),
    };
  }

  static toDomain(productRaw: ProductRaw & { Tags: TagRaw[], ProductVariant: ProductVariantRaw[], ProductImages: ProductImageRaw[] }): Product {
    return new Product({
      name: productRaw.name,
      description: productRaw.description,
      userId: productRaw.userId,
      createdAt: productRaw.createdAt,
      updatedAt: productRaw.updatedAt,
      tags: productRaw.Tags.map(tag => ({
        id: tag.id,
        tags: tag.tags,
        createdAt: tag.createdAt,
        updatedAt: tag.updatedAt,
        productId: tag.productId,
      })),
      productVariants: productRaw.ProductVariant.map(variant => ({
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
      productImages: productRaw.ProductImages.map(image => ({
        id: image.id,
        url: image.url,
        createdAt: image.createdAt,
        updatedAt: image.updatedAt,
        productId: image.productId,
      })),
    }, productRaw.id);
  }
}
