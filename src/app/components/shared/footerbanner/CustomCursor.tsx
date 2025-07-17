// components/FooterBanner/CustomCursor.tsx
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

type CustomCursorProps = {
  show: boolean
  x: number
  y: number
  direcao: 'left' | 'right'
}

export default function CustomCursor({ show, x, y, direcao }: CustomCursorProps) {
  if (!show) return null

  return (
    <div
      className="fixed pointer-events-none z-50 text-black transition-transform duration-75"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      <div className="bg-white rounded-full p-2 shadow-lg border border-neutral-300">
        {direcao === 'left' ? <IconArrowLeft size={24} /> : <IconArrowRight size={24} />}
      </div>
    </div>
  )
}
