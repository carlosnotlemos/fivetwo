'use client'
import ProdutoCard from "@/app/components/shared/ProdutoCard";
import useProdutos from "@/hooks/useProdutos";
import BenefitCard from "@/app/components/shared/BenefitCard";
import useBeneficios from "@/hooks/useBeneficios";

export default function MaisUsadosLista() {
  const {produtos} = useProdutos()
  const {beneficios} = useBeneficios()

  return (
    <section className="pt-6 pb-7">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-8">
        {beneficios.map(beneficio => (
          <BenefitCard
            key={beneficio.id}
            titulo={beneficio.titulo} 
            descricao={beneficio.descricao} 
            icon={beneficio.icon} 
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {produtos.slice(0, 3).map(produto => (
          <div key={produto.id} className="flex justify-center">
            <ProdutoCard produto={produto} />
          </div>
        ))}
      </div>
    </section>
  );
}
