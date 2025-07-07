'use client'
import { useEffect, useState } from "react";
import { Produto } from "@/core/model/Produto";
import { obterProdutos } from "@/backend/produto/produtos";
import ProdutoCard from "@/app/components/shared/ProdutoCard";

export default function MaisUsadosLista() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return (
    <section className="max-w-7xl mx-auto my-12 lg:my-45">
      <h2 className="text-3xl font-bold font-sans tracking-tight text-center">
        FAVORITOS COM PREÇO IRRESISTÍVEL
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 justify-items-center my-5">
        {produtos.map(produto => (
          <li key={produto.id}>
            <ProdutoCard produto={produto} />
          </li>
        ))}
      </ul>
    </section>
  );
}
