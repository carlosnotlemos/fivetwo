import { Produto } from '@/core/model/Produto'
import Link from 'next/link'

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <div className="w-[350px] h-[600px] relative overflow-hidden rounded-xl shadow-lg bg-black group">
      <img
        src={produto.imagemurl}
        alt={produto.nome}
        className="w-full h-full object-cover"
      />

      <Link
        href="#"
        className="
          absolute bottom-5 left-1/2 -translate-x-1/2
          opacity-0 translate-y-4
          bg-white text-black font-semibold px-6 py-2 rounded-full
          shadow-lg
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:translate-y-0
          hover:scale-105
          cursor-pointer
          select-none
          z-10
        "
        onClick={e => e.preventDefault()}
      >
        Visualizar
      </Link>
    </div>
  )
}
