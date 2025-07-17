// hooks/useCursorDirection.ts
import { useEffect, useState } from "react"

export function useCursorDirection(showCursor: boolean) {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [direcao, setDirecao] = useState<'left' | 'right'>('right')

  useEffect(() => {
    const mover = (e: MouseEvent) => {
      if (!showCursor) return
      setMouseX(e.clientX)
      setMouseY(e.clientY)
      setDirecao(e.clientX < window.innerWidth / 2 ? 'left' : 'right')
    }

    window.addEventListener('mousemove', mover)
    return () => window.removeEventListener('mousemove', mover)
  }, [showCursor])

  return { mouseX, mouseY, direcao }
}
