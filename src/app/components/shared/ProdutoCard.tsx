'use client'
import { Produto } from "@/core/model/Produto"

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <div className="w-[350px] h-[600px] overflow-hidden rounded-xl shadow-lg bg-black">
      <video
        src={produto.imagemUrl}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  )
}