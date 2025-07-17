import { Faq, PrismaClient } from "@/generated/prisma";

export default class RepositorioFaq {
  private static db: PrismaClient = new PrismaClient()

  static async obterTodosFaqs(): Promise<Faq[]> {
    return await this.db.faq.findMany()
  }
}