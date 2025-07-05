'use client'
import { Produto } from "@/core/model/Produto";
import Link from "next/link";

export default function ProdutoCard({ produto }: { produto: Produto }) {
  return (
    <Link href={produto.imagemUrl}>
      <img
        src={produto.imagemUrl}
        alt={produto.nome}
        className="w-full h-auto object-contain aspect-square hover:opacity-75"
      />
    </Link>
  );
}