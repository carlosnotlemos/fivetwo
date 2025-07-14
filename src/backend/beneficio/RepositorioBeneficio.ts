import { PrismaClient, Beneficio } from '@/generated/prisma'

export default class RepositorioProduto {
  private static db: PrismaClient = new PrismaClient()

  static async obterTodosBeneficios(): Promise<Beneficio[]> {
    return await this.db.beneficio.findMany()
  }
}