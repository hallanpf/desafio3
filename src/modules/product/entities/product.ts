import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface ProductProps {
  name: string;
  description: string;
  userId: string;
  tags: Tag[];
  productVariants: ProductVariant[];
  productImages: ProductImage[];
  createdAt: Date;
  updatedAt: Date;
}

interface ProductVariant {
  id: string;
  price: number;
  size: string;
  sku: string;
  color: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  productId: string;
}

interface ProductImage {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  productId: string;
}

interface Tag {
  id: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
  productId: string;
}


export class Product {
  private props: ProductProps;
  private _id: string;

  constructor(
    props: Replace<ProductProps, { productVariants: ProductVariant[]; productImages: ProductImage[]; tags: Tag[] }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      productVariants: props.productVariants,
      productImages: props.productImages,
      tags: props.tags,
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get userId(): string {
    return this.props.userId;
  }

  get tags(): Tag[] {
    return this.props.tags;
  }

  get productVariants(): ProductVariant[] {
    return this.props.productVariants;
  }

  get productImages(): ProductImage[] {
    return this.props.productImages;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set description(description: string) {
    this.props.description = description;
  }

  set userId(userId: string) {
    this.props.userId = userId;
  }

  set tags(tags: Tag[]) {
    this.props.tags = tags;
  }

  set productVariants(productVariants: ProductVariant[]) {
    this.props.productVariants = productVariants;
  }

  set productImages(productImages: ProductImage[]) {
    this.props.productImages = productImages;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
};