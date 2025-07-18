import MainLayout from "@/app/components/template/MainLayout"

export default function InformacoesDeContato() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-6xl font-bold mb-6 text-center">Informações de Contato</h1>
        
        <p className="mb-8">
          Somos uma loja online especializada na venda de camisetas personalizáveis. Nosso objetivo é oferecer uma experiência prática, rápida e intuitiva, permitindo que você crie sua própria estampa diretamente pelo nosso site.
        </p>

        <p className="mb-8">
          Trabalhamos com algodão brasileiro de alta qualidade e também com algodão premium peruano, proporcionando conforto e durabilidade em cada peça.
        </p>

        <p className="mb-8">
          As camisetas são enviadas para todo o Brasil a partir do nosso centro de distribuição localizado em Fortaleza - CE.
        </p>

        <p className="mb-8">
          Quando você finaliza sua personalização, geramos uma imagem da sua arte, que é usada diretamente no processo de estamparia. Isso permite um processo ágil e eficiente de produção.
        </p>

        <p className="mb-8">
          Nosso atendimento funciona nos seguintes horários:
        </p>

        <ul className="mb-8 list-disc pl-6">
          <li>Segunda a sexta: 08:00 às 18:00</li>
          <li>Sábado: 09:00 às 13:00</li>
          <li>Domingo: Fechado</li>
        </ul>

        <a
          href="https://wa.me/5585986540523"
          target="_blank"
          className="text-blue-600 hover:underline"
          aria-label="Conversar conosco pelo WhatsApp"
        >
          (85) 98654-0523
        </a>

        <p className="text-sm text-gray-500">
          Esta página é apenas informativa. Caso tenha dúvidas, entre em contato conosco.
        </p>
      </div>
    </MainLayout>
  );
}
