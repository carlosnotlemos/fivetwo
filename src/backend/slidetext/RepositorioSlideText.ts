import { PrismaClient, SlideText } from '@/generated/prisma'

export default class RepositorioSlideText {
  private static db: PrismaClient = new PrismaClient()

  static async obterSlideText(): Promise<SlideText | null> {
    return await this.db.slideText.findFirst({
      orderBy: {
        id: 'desc'
      }
    })
  }
}