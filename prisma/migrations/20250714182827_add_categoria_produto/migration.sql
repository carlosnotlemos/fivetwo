-- CreateTable
CREATE TABLE "categoria_produto" (
    "id" SERIAL NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "categoria_produto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_produto_produtoId_categoriaId_key" ON "categoria_produto"("produtoId", "categoriaId");

-- AddForeignKey
ALTER TABLE "categoria_produto" ADD CONSTRAINT "categoria_produto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoria_produto" ADD CONSTRAINT "categoria_produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
