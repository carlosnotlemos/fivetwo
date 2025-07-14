-- CreateTable
CREATE TABLE "categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_nome_key" ON "categoria"("nome");
