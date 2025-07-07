'use client'
import { useEffect } from "react"

export interface VideoInstagramProps {
    url: string
}

export default function VideoInstagram({ url }: VideoInstagramProps) {
  
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <article className="max-w-xl mx-auto py-10">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "1px",
          padding: 0,
          maxWidth: "540px",
          width: "100%",
        }}
      ></blockquote>
    </article>
  )
}