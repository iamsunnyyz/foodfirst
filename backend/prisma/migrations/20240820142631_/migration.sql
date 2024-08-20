/*
  Warnings:

  - Made the column `password` on table `Vendor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Vendor" ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "password" DROP DEFAULT,
ALTER COLUMN "password" SET DATA TYPE TEXT;
