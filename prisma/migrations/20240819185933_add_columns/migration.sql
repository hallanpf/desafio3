/*
  Warnings:

  - Added the required column `category` to the `product_variants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `product_variants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_variants" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "discount" DOUBLE PRECISION NOT NULL;
