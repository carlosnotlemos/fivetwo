import { InstaVideos } from "@/core/model/InstaVideos";

export async function ObterInstaVideos(): Promise<InstaVideos[]>{
  return [
    {id: 1, nome: "PromoVideo1", url: "https://www.instagram.com/p/DKFK2fFRurE/"},
    {id: 2, nome: "PromoVideo2", url: "https://www.instagram.com/reel/C9ujIPbxk-Y/"},
    {id: 3, nome: "PromoVideo3", url: "https://www.instagram.com/reel/C97lquER3R7/"}
  ]
}