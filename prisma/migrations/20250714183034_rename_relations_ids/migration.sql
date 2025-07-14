/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `categoria_produto` table. All the data in the column will be lost.
  - You are about to drop the column `produtoId` on the `categoria_produto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[produto_id,categoria_id]` on the table `categoria_produto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoria_id` to the `categoria_produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produto_id` to the `categoria_produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categoria_produto" DROP CONSTRAINT "categoria_produto_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "categoria_produto" DROP CONSTRAINT "categoria_produto_produtoId_fkey";

-- DropIndex
DROP INDEX "categoria_produto_produtoId_categoriaId_key";

-- AlterTable
ALTER TABLE "categoria_produto" DROP COLUMN "categoriaId",
DROP COLUMN "produtoId",
ADD COLUMN     "categoria_id" INTEGER NOT NULL,
ADD COLUMN     "produto_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categoria_produto_produto_id_categoria_id_key" ON "categoria_produto"("produto_id", "categoria_id");

-- AddForeignKey
ALTER TABLE "categoria_produto" ADD CONSTRAINT "categoria_produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoria_produto" ADD CONSTRAINT "categoria_produto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
