'use client'
import { Produto } from "@/core/model/Produto";
import Link from "next/link";

export default function PromoCard({ produto }: { produto: Produto }) {
  return (
    <Link href={produto.imagemUrl}>
      <img
        src={produto.imagemUrl}
        alt={produto.nome}
        className="lg:h-[420px] lg:w-[420px] object-contain hover:opacity-75"
      />
    </Link>
  );
}