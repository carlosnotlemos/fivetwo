'use client'
import { Produto } from "@/core/model/Produto";

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-black">
      <img
        src={produto.imagemUrl}
        alt={produto.nome}
        className="w-full h-auto object-contain aspect-square rounded"
      />
      <h2 className="mt-2 font-semibold text-lg">{produto.nome}</h2>
      <p className="text-green-600 font-bold">R$ {produto.preco.toFixed(2)}</p>
    </div>
  );
}