'use client'
import { Produto } from "@/core/model/Produto";

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      {/* Imagem */}
      <div className="w-full h-[420px] bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={produto.imagemUrl}
          alt={produto.nome}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{produto.nome}</h3>
        <p className="text-blue-600 font-bold text-xl">R$ {produto.preco.toFixed(2)}</p>
      </div>
    </div>
  );
}
