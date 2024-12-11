/*
  Warnings:

  - Added the required column `reference` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "reference" TEXT NOT NULL;
