'use client'
import { useEffect, useRef, useState } from "react"
import { Produto } from "@/core/model/Produto"
import { obterProdutos } from "@/backend/produto/produtos"
import PromoCard from "@/app/components/shared/PromoCard"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

export default function PromoLista() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const scrollRef = useRef<HTMLUListElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    obterProdutos().then(setProdutos)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const el = scrollRef.current
        const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth)
        setScrollProgress(progress)
      }
    }

    const el = scrollRef.current
    if (el) el.addEventListener('scroll', handleScroll)

    return () => {
      if (el) el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToLeft() {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  function scrollToRight() {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <section className="bg-neutral-100 pt-10 pb-7">
      <div className="w-full">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-2 ml-40">DIA DOS PAIS 🩵</h1>
        <p className="text-neutral-800 mb-6 ml-40">Antecipe o presente do papai e do vovô</p>

        {/* Lista de produtos */}
        <ul
          ref={scrollRef}
          className="flex gap-4 scroll-smooth overflow-x-auto px-40"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: '8px',
            marginBottom: '-8px',
          }}
        >
          {produtos.map(produto => (
            <li key={produto.id} className="flex-shrink-0 w-[280px]">
              <PromoCard produto={produto} />
            </li>
          ))}
        </ul>


        {/* Barra de progresso e botões */}
        <div className="flex items-center gap-4 pt-6 px-40">

          <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-neutral-400 transition-all duration-75"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          <button
            onClick={scrollToLeft}
            className="bg-white p-2 shadow rounded-full"
          >
            <IconArrowLeft />
          </button>
          <button
            onClick={scrollToRight}
            className="bg-white p-2 shadow rounded-full"
          >
            <IconArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
