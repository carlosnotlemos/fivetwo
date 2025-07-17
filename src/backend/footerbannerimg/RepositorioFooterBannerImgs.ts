import { PrismaClient, FooterBannerImg } from '@/generated/prisma'

export default class RepositorioCategoria {
  private static db: PrismaClient = new PrismaClient()

  static async obterTodasFBImgs(): Promise<FooterBannerImg[]> {
    return await this.db.footerBannerImg.findMany()
  } 
}
