'use client'
import { useEffect, useState } from "react";
import { Produto } from "@/core/model/Produto";
import { obterProdutos } from "@/backend/produto/produtos";
import ProdutoCard from "@/app/components/shared/ProdutoCard";

export default function ProdutosLista() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-6">
      {produtos.map(produto => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </section>
  );
}
