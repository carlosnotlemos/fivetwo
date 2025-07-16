import { PrismaClient, Categoria } from '@/generated/prisma'

export default class RepositorioCategoria {
  private static db: PrismaClient = new PrismaClient()

  // Busca categoria pelo id, incluindo produtos relacionados via tabela join
  static async obterCategoriaComProdutos(id: number): Promise<Categoria | null> {
    return await this.db.categoria.findUnique({
      where: { id },
      include: {
        categoriaProdutos: {
          include: {
            produto: true,
          },
        },
      },
    })
  }

  static async obterTodasCategorias(): Promise<Categoria[]> {
    return await this.db.categoria.findMany()
  } 
}
