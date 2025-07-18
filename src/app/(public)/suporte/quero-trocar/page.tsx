import MainLayout from "@/app/components/template/MainLayout";

export default function QueroTrocar() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Quero trocar meu produto
        </h1>

        <p className="mb-6">
          Sabemos que às vezes um produto não atende 100% às suas expectativas. Não se preocupe, nossa política de troca é simples e prática!
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prazo para Solicitação</h2>
        <p className="mb-6">
          Você pode solicitar a troca do seu produto em até 7 dias corridos após o recebimento.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Requisitos para Troca</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Produto não pode apresentar sinais de uso;</li>
          <li>Deve estar com a embalagem original e todos os itens inclusos;</li>
          <li>A troca será feita por produto de valor igual ou superior (com pagamento da diferença).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Como Solicitar</h2>
        <p className="mb-6">
          Entre em contato conosco via WhatsApp ou e-mail informando seu número de pedido e o motivo da troca. Vamos te orientar com os próximos passos.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Última atualização: Julho de 2025.
        </p>
      </div>
    </MainLayout>
  );
}
