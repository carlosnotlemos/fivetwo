import Backend from "@/backend"
import { useEffect, useState } from "react"
import { FooterBannerImg } from "@/generated/prisma"

export default function useFooterBannerImgs() {
  const [FBImgs, setFooterBannerImgs] = useState<FooterBannerImg[]>([])

  useEffect(() => {
    Backend.footerbannerimg.obter().then(setFooterBannerImgs)
  }, [])

  return { FBImgs }
}
