'use client'
import PromoCard from "@/app/components/shared/product/product-card/ProductCard";
import useProdutos from "@/hooks/useProdutos";

export default function ProdutoLista(){
  const {produtos} = useProdutos()

  return (
    <div className="bg-neutral-100 py-15">
      <section className="max-w-8xl mx-40 mb-17">
        <h1 className="text-4xl font-bold m-6">Nossas melhores estão aqui</h1>
        <div className="grid grid-cols-5 m-10 gap-x-2 gap-y-10">
          {produtos.map(produto => (
            <PromoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>
    </div>
  );
}