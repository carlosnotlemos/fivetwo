-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "imagemurl" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "subtitulo" TEXT NOT NULL,
    "imagemurl" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias_produtos" (
    "id" SERIAL NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "categorias_produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beneficios" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "imagemurl" TEXT NOT NULL,

    CONSTRAINT "beneficios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "slidetexts" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "slidetexts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footer_banner_imgs" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagemurl" TEXT NOT NULL,

    CONSTRAINT "footer_banner_imgs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faqs" (
    "id" SERIAL NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,

    CONSTRAINT "faqs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nome_key" ON "categorias"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "categorias_produtos_produto_id_categoria_id_key" ON "categorias_produtos"("produto_id", "categoria_id");

-- AddForeignKey
ALTER TABLE "categorias_produtos" ADD CONSTRAINT "categorias_produtos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categorias_produtos" ADD CONSTRAINT "categorias_produtos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
