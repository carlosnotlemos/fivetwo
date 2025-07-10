'use client'
import { Produto } from "@/core/model/Produto";
import Link from "next/link";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ produto }: { produto: Produto }) {
  return (
    <Link href={produto.imagemUrl}>
      <div className="w-70 h-150 bg-white rounded-md shadow-md overflow-hidden flex flex-col hover:shadow-lg transition">
        <div className="w-full h-105 bg-gray-100 flex items-center justify-center">
          <ProductImage src={produto.imagemUrl} alt={produto.nome}/>
        </div>
        <ProductInfo nome={produto.nome} preco={produto.preco} />
      </div>
    </Link>
  );
}
