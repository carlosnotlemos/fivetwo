import MainLayout from "@/app/components/template/MainLayout";

export default function ShippingPolicy() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-6xl font-bold mb-6 text-center">
          Fretes e Prazos de Entrega
        </h1>

        <p className="mb-6">
          Trabalhamos com parceiros logísticos para garantir que seu pedido chegue com segurança e no menor tempo possível.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prazo de Entrega</h2>
        <p className="mb-6">
          O prazo de entrega varia de acordo com o endereço de destino e a modalidade de envio escolhida no momento da compra. O prazo começa a contar a partir da confirmação do pagamento.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cálculo do Frete</h2>
        <p className="mb-6">
          O valor do frete é calculado automaticamente no checkout, levando em conta o CEP de destino, peso e dimensões dos produtos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Atrasos e Problemas</h2>
        <p className="mb-6">
          Em casos de atraso por parte da transportadora, faremos o acompanhamento e daremos suporte total até a entrega ser concluída. Caso haja qualquer problema, entre em contato conosco pelo canal de atendimento.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Endereço Incorreto</h2>
        <p className="mb-6">
          Certifique-se de preencher corretamente seu endereço. Não nos responsabilizamos por entregas não realizadas devido a erros no preenchimento dos dados de entrega.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Última atualização: Julho de 2025.
        </p>
      </div>
    </MainLayout>
  );
}
