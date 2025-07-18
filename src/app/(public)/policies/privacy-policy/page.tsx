import MainLayout from "@/app/components/template/MainLayout";

export default function PoliticaDePrivacidade() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-6xl font-bold mb-6 text-center">Política de Privacidade</h1>

        <p className="mb-6">
          Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas ao visitar ou fazer uma compra no nosso site.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Informações que coletamos</h2>
        <p className="mb-6">
          Coletamos informações como nome, e-mail, endereço e dados de pagamento apenas quando fornecidos por você, com a finalidade de realizar o atendimento ou a entrega de produtos.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Uso das informações</h2>
        <p className="mb-6">
          Usamos as informações para processar pedidos, entrar em contato com você e melhorar nossos serviços. Não compartilhamos suas informações com terceiros, exceto quando necessário para cumprir obrigações legais ou processar pedidos.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Segurança</h2>
        <p className="mb-6">
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Seus direitos</h2>
        <p className="mb-6">
          Você pode solicitar a visualização, correção ou exclusão dos seus dados pessoais a qualquer momento, entrando em contato conosco.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Esta política pode ser atualizada periodicamente. Recomendamos que você a revise com frequência.
        </p>
      </div>
    </MainLayout>
  );
}
