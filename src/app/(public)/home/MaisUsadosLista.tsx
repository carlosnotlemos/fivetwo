'use client'
import ProdutoCard from "@/app/components/shared/ProdutoCard";
import { IconCreditCard, IconCubeSend, IconDeviceDesktop } from "@tabler/icons-react";
import useProdutos from "@/hooks/useProdutos";

export default function MaisUsadosLista() {
  const {produtos} = useProdutos()

  return (
    <section className="pt-6 pb-7">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-8">
        <div className="flex flex-col items-center">
          <IconCreditCard size={36} className="mb-3" />
          <h3 className="text-2xl font-semibold mb-2">PARCELAMENTO</h3>
          <p className="text-md font-bold text-neutral-600">Parcele suas compras em até 10x sem juros no cartão.</p>
        </div>

        <div className="flex flex-col items-center">
          <IconCubeSend size={36} className="mb-3" />
          <h3 className="text-2xl font-semibold mb-2">ENTREGA RÁPIDA</h3>
          <p className="text-md font-bold text-neutral-600">Receba seus produtos com agilidade e segurança em todo o Brasil.</p>
        </div>

        <div className="flex flex-col items-center">
          <IconDeviceDesktop size={36} className="mb-3" />
          <h3 className="text-2xl font-semibold mb-2">ATENDIMENTO</h3>
          <p className="text-md font-bold text-neutral-600">Fale com a gente pelo WhatsApp ou Instagram a qualquer hora.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {produtos.map(produto => (
          <div key={produto.id} className="flex justify-center">
            <ProdutoCard produto={produto} />
          </div>
        ))}
      </div>
    </section>
  );
}
