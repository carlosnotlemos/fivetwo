import MainLayout from "@/app/components/template/MainLayout";

export default function TermosDeUso() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-6xl font-bold mb-6 text-center">Termos de Uso</h1>

        <p className="mb-6">
          Ao acessar este site, você concorda em cumprir estes Termos de Uso, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Uso Permitido</h2>
        <p className="mb-6">
          Você só pode usar este site para fins legais e de acordo com estes termos. É proibido utilizar este site para atividades ilegais, fraudulentas ou que prejudiquem outros usuários.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Propriedade Intelectual</h2>
        <p className="mb-6">
          Todo o conteúdo publicado neste site é de propriedade da nossa empresa ou de seus licenciadores e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitação de Responsabilidade</h2>
        <p className="mb-6">
          Este site é fornecido "como está", sem garantias de qualquer tipo. Não garantimos que o site será ininterrupto ou livre de erros.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Alterações</h2>
        <p className="mb-6">
          Podemos revisar estes Termos de Uso a qualquer momento, sem aviso prévio. Ao continuar a usar o site após as alterações, você concorda com os novos termos.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Última atualização: Julho de 2025.
        </p>
      </div>
    </MainLayout>
  );
}
