'use client'
import { Produto } from "@/core/model/Produto";
import { IconCreditCard } from "@tabler/icons-react";
import Link from "next/link";

export default function PromoCard({ produto }: { produto: Produto }) {
  return (
    <Link href={produto.imagemUrl}>
      <div className="w-[280px] h-[600px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition">
        <div className="w-full h-[420px] bg-gray-100 flex items-center justify-center">
          <img
            src={produto.imagemUrl}
            alt={produto.nome}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-base font-semibold text-gray-800 truncate">{produto.nome}</h3>
          <p className="text-dark font-bold text-lg">⭐⭐⭐⭐⭐ (995)</p>
          <p className="text-neutral-500 text-md">A partir de R$ {produto.preco.toFixed(2)}</p>
          <div className="flex items-center justify-center gap-2 text-neutral-700 text-md">
            <IconCreditCard />
            <span>
              Até <strong className="font-extrabold text-gray-900">12X </strong>
              de R$ <strong className="font-extrabold text-gray-900">{produto.preco.toFixed(2)}</strong>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
