'use client'
import { useEffect, useState } from "react";
import { Produto } from "@/core/model/Produto";
import { obterProdutos } from "@/backend/produto/produtos";
import PromoCard from "@/app/components/shared/PromoCard";

export default function PromoLista() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 justify-items-center">
        {produtos.map(produto => (
          <li key={produto.id}><PromoCard produto={produto} /></li>
        ))}
      </ul>
    </section>
  );
}
