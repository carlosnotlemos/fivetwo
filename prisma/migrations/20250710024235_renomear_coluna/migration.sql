/*
  Warnings:

  - You are about to drop the column `imagemUrl` on the `produto` table. All the data in the column will be lost.
  - Added the required column `imagemurl` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produto" DROP COLUMN "imagemUrl",
ADD COLUMN     "imagemurl" TEXT NOT NULL;
