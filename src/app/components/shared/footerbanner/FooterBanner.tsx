'use client'

import { useState } from 'react'
import Carousel from './Carousel'
import CustomCursor from './CustomCursor'
import { useCursorDirection } from '@/hooks/useCursorDirection'
import useFooterBannerImgs from '@/hooks/useFooterBannerImg'

export default function FooterBanner() {
  const {FBImgs} = useFooterBannerImgs()
  const [indice, setIndice] = useState(0)
  const [showCursor, setShowCursor] = useState(false)
  const { mouseX, mouseY, direcao } = useCursorDirection(showCursor)

  const proxima = () => setIndice((i) => (i + 1) % FBImgs.length)
  const anterior = () => setIndice((i) => (i - 1 + FBImgs.length) % FBImgs.length)

  return (
    <section className="w-full h-full relative">
      <h2 className="text-3xl text-center font-bold py-4">😉 sem regras, só conforto</h2>

      <div
        onClick={() => (direcao === 'left' ? anterior() : proxima())}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className={`relative w-[1920px] h-[717px] mx-auto overflow-hidden ${showCursor ? 'cursor-none' : 'cursor-default'}`}
      >
        <Carousel imagens={FBImgs} indice={indice} />
      </div>

      <CustomCursor show={showCursor} x={mouseX} y={mouseY} direcao={direcao} />
    </section>
  )
}
