import { PrismaClient, Produto } from '@/generated/prisma'

export default class RepositorioProduto {
  private static db: PrismaClient = new PrismaClient()

  // static async salvar(usuario: Usuario): Promise<Usuario> {
  //   return await this.db.usuarios.upsert({
  //     where: { id: usuario.id},
  //     update: usuario,
  //     create: usuario,
  //   })
  // }

  static async obterTodosProdutos(): Promise<Produto[]> {
    return await this.db.produto.findMany()
  }

  // static async obterPorId(id: string): Promise<Usuario | null> {
  //   return await this.db.usuarios.findUnique({ where: { id } })
  // }

  // static async excluir(id: string): Promise<void>{
  //   await this.db.usuarios.delete({where: { id }})
  // }
}