import Backend from "@/backend"
import { SlideText } from "@/core/model/SlideText"
import { useEffect, useState } from "react"

export default function useSlideText(){
  const [slidetext, setSlideText] = useState<SlideText | null>(null)

  useEffect(() => {
    Backend.slidetext.obter().then(setSlideText)
  }, [])

  return {
    slidetext,
  }
}