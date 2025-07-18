import MainLayout from "@/app/components/template/MainLayout";

export default function RefundPolicy() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-6xl font-bold mb-6 text-center">
          Devolução e Reembolso
        </h1>

        <p className="mb-6">
          A sua satisfação é nossa prioridade. Caso tenha algum problema com seu pedido, oferecemos uma política de devolução simples e transparente.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prazo para Devolução</h2>
        <p className="mb-6">
          Você pode solicitar a devolução de um produto em até 7 dias corridos após o recebimento, conforme o Código de Defesa do Consumidor.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Condições para Reembolso</h2>
        <p className="mb-6">
          O produto deve estar em perfeitas condições, sem sinais de uso, com embalagem original e todos os acessórios.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Processo de Reembolso</h2>
        <p className="mb-6">
          Após a chegada do item devolvido e conferência, o reembolso será feito conforme a forma de pagamento original:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Cartão de crédito: estorno em até duas faturas, conforme a operadora.</li>
          <li>PIX ou boleto: devolução via transferência bancária.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Produtos com Defeito</h2>
        <p className="mb-6">
          Se você recebeu um item com defeito de fábrica, entre em contato em até 30 dias e faremos a substituição ou reembolso completo.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Última atualização: Julho de 2025.
        </p>
      </div>
    </MainLayout>
  );
}
