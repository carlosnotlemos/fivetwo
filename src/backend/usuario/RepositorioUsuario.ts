// import { Usuario } from "@/core/model/Usuario";
// import { PrismaClient } from '@/generated/prisma'

// export default class RepositorioUsuario {
//   private static db: PrismaClient = new PrismaClient()

//   static async listar() {
//     return await this.db.usuarios.findMany()
//   }

//   static async salvar(usuario: Usuario): Promise<Usuario> {
//     return await this.db.usuarios.upsert({
//       where: { id: usuario.id},
//       update: usuario,
//       create: usuario,
//     })
//   }

//   static async obertTodos(): Promise<Usuario[]> {
//     return await this.db.usuarios.findMany()
//   }

//   static async obterPorId(id: string): Promise<Usuario | null> {
//     return await this.db.usuarios.findUnique({ where: { id } })
//   }

//   static async excluir(id: string): Promise<void>{
//     await this.db.usuarios.delete({where: { id }})
//   }
// }