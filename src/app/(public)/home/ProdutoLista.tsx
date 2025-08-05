'use client'
import PromoCard from "@/app/components/shared/product/product-card/ProductCard";
import useProdutos from "@/hooks/useProdutos";

export default function ProdutoLista(){
  const {produtos} = useProdutos()

  return (
    <div className="bg-light-odd pb-15">
      <section className="max-w-8xl mx-40 mb-17">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">AS ESCOLHIDAS DA VEZ</h1>
        <div className="grid grid-cols-5 m-10 gap-x-2 gap-y-10">
          {produtos.slice(0,20).map(produto => (
            <PromoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>
    </div>
  );
}