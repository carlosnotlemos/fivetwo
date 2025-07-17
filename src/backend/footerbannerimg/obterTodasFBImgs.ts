'use server'
import RepositorioFooterBannerImgs from "./RepositorioFooterBannerImgs";

export default async function obterTodasFBImgs() {
  return await RepositorioFooterBannerImgs.obterTodasFBImgs()
}