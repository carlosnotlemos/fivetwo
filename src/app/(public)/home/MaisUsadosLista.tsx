'use client'
import ProdutoCard from "@/app/components/shared/ProdutoCard";
import BenefitCard from "@/app/components/shared/BenefitCard";
import useBeneficios from "@/hooks/useBeneficios";
import useCategoriaComProdutos from "@/hooks/useProdutoPorCategoria";

export default function   MaisUsadosLista() {
  const {categoria} = useCategoriaComProdutos(4)
  const {beneficios} = useBeneficios()

  return (
    <section className="max-w-7xl mx-auto pt-6 pb-7">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-8">
        {beneficios.map(beneficio => (
          <li key={beneficio.id}>
            <BenefitCard beneficio={beneficio} />
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {beneficios.map(beneficioCard => (
            <article key={beneficioCard.id} className="flex justify-center">
              <ProdutoCard beneficio={beneficioCard} />
            </article>
          )
        )}
      </div>
    </section>

  );
}
