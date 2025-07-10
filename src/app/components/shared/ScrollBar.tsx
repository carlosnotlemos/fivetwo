import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

type ScrollBarProps = {
  progress: number
  onLeft: () => void
  onRight: () => void
}

export default function ScrollBar({ progress, onLeft, onRight }: ScrollBarProps) {
  return (
    <div className="flex items-center gap-4 pt-6 px-40">
      <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-neutral-400 transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <button
        onClick={onLeft}
        className="bg-white p-2 shadow rounded-full"
        aria-label="Scroll left"
      >
        <IconArrowLeft />
      </button>
      <button
        onClick={onRight}
        className="bg-white p-2 shadow rounded-full"
        aria-label="Scroll right"
      >
        <IconArrowRight />
      </button>
    </div>
  )
}
