-- CreateTable
CREATE TABLE "faq" (
    "id" SERIAL NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);
