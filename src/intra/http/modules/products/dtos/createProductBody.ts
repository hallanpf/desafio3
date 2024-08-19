import { IsString, IsNotEmpty, IsArray, ValidateNested, IsUUID, IsNumber, IsDate, IsOptional } from 'class-validator';
import { Type, Transform } from 'class-transformer';

class ProductVariant {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsNumber()
  price: number;

  @IsString()
  size: string;

  @IsString()
  sku: string;

  @IsString()
  color: string;

  @IsNumber()
  quantity: number;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @IsUUID()
  @IsOptional()
  productId: string;
}

class ProductImage {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  url: string;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @IsUUID()
  @IsOptional()
  productId: string;
}

class Tag {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  tags: string;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @IsUUID()
  @IsOptional()
  productId: string;
}

export class CreateProductBody {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUUID()
  userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Tag)
  tags: Tag[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductVariant)
  productVariants: ProductVariant[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductImage)
  productImages: ProductImage[];
}
