'use client'
import { Produto } from "@/core/model/Produto";

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <article className="group m-2 relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      <figure className="w-full bg-gray-100 overflow-hidden">
        <img
          src={produto.imagemUrl}
          alt={produto.nome}
          className="h-[400px] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
        <figcaption className="p-4 text-center space-y-2 bg-white">
          <h3 className="text-lg font-semibold text-gray-800">{produto.nome}</h3>
          <p className="text-blue-600 font-bold text-xl">R$ {produto.preco.toFixed(2)}</p>
        </figcaption>
      </figure>
    </article>
  );
}
