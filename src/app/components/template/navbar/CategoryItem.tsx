import { Categoria } from "@/core/model/Categoria"
import Link from "next/link"

export default function CategoryItem({categoria}: {categoria: Categoria}){
  return (
    <Link href={categoria.imagemurl ?? "#"} className="flex flex-col items-center gap-1 text-center group">
      <div className="p-[3px] rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 hover:scale-105 transition-transform duration-200">
        <div className="w-[50px] h-[50px] sm:w-[112px] sm:h-[112px] rounded-full bg-white overflow-hidden">
          <img 
            src={categoria.imagemurl ?? "/camisa1.png"}
            alt={categoria.subtitulo ?? categoria.nome}
            width={80}
            height={80}
            className="w-full h-full object-cover group-hover:opacity-75"
          />
        </div>
      </div>
      <span className="text-center text-sm group-hover:font-semibold uppercase">{categoria.nome}</span>
    </Link>
  )
}