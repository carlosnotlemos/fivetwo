'use client'
import useSlideText from "@/hooks/useSlideText"

export default function SlideText() {
  const { slidetext } = useSlideText()

  if (!slidetext) return null

  return (
    <div className="overflow-hidden py-15 bg-neutral-100">
      <div className="marquee text-6xl font-bold whitespace-nowrap" style={{ color: "#ff5d2e", display: "inline-block" }}>
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="inline-flex">
            <span style={{ paddingRight: "7rem" }}>{slidetext.texto}</span>
            <span style={{ paddingRight: "7rem" }}>{slidetext.icon}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
