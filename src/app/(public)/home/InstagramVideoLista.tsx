'use client'
import VideoInstagram from "@/app/components/shared/InstagramVideo"
import { ObterInstaVideos } from "@/backend/InstagramVideos/InstaVideos"
import { InstaVideos } from "@/core/model/InstaVideos"
import { useEffect, useState } from "react"

export default function InstagramVideoLista(){
  const [InstaVideos, setInstaVideos] = useState<InstaVideos[]>([])

  useEffect (() => {
    ObterInstaVideos().then(setInstaVideos)
  }, [])

  return (
    <section className="max-w-7xl mx-auto my-64">
      <h2 className="text-2xl font-bold text-center mb-5">NOSSOS PARCEIROS E PROMOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {InstaVideos.map((video) => (
          <VideoInstagram key={video.id} url={video.url} />
        ))}
      </div>
    </section>
  )
}