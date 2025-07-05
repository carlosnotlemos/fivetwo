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
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 justify-items-center">
        {produtos.map(produto => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}
