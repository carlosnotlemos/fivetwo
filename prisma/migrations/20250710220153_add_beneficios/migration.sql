-- CreateTable
CREATE TABLE "beneficio" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" DOUBLE PRECISION NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "beneficio_pkey" PRIMARY KEY ("id")
);
