/*
  Warnings:

  - You are about to drop the column `address` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `qr_code` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `shop_image` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Vendor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shop_id]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop_address` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - The required column `shop_id` was added to the `Vendor` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `shop_status` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "address",
DROP COLUMN "qr_code",
DROP COLUMN "shop_image",
DROP COLUMN "status",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "shop_address" TEXT NOT NULL,
ADD COLUMN     "shop_description" TEXT,
ADD COLUMN     "shop_id" TEXT NOT NULL,
ADD COLUMN     "shop_status" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_email_key" ON "Vendor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_shop_id_key" ON "Vendor"("shop_id");
