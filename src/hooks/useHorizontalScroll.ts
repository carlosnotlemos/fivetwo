import { useEffect, useRef, useState } from "react"

export function useHorizontalScroll() {
  const ref = useRef<HTMLUListElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      setProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth))
    }

    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollByOffset(offset: number) {
    ref.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return { ref, progress, scrollByOffset }
}
