'use client'
import ProductCard from "@/app/components/shared/product/product-card/ProductCard"
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll"
import ScrollBar from "@/app/components/shared/ScrollBar"
import useProdutos from "@/hooks/useProdutos"

  export default function PromoLista() {
    const {produtos} = useProdutos()
    const { ref: scrollRef, progress: scrollProgress, scrollByOffset } = useHorizontalScroll()

  return (
    <section className="bg-neutral-100 pt-10 pb-7">
      <div className="w-full">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-2 ml-40">DIA DOS PAIS 🩵</h1>
        <p className="text-neutral-800 mb-6 ml-40">Antecipe o presente do papai e do vovô</p>

        {/* Lista de produtos */}
        <ul
          ref={scrollRef}
          className="flex gap-4 scroll-smooth overflow-x-auto px-40 no-scrollbar"
        >
          {produtos.map(produto => (
            <li key={produto.id} className="flex-shrink-0 w-[280px]">
              <ProductCard produto={produto} />
            </li>
          ))}
        </ul>

        {/* Barra de progresso e botões */}
        <ScrollBar
          progress={scrollProgress}
          onLeft={() => scrollByOffset(-300)}
          onRight={() => scrollByOffset(300)}
        />
      </div>
    </section>
  )
}
