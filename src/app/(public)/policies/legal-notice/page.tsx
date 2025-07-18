import MainLayout from "@/app/components/template/MainLayout";

export default function AvisoLegal() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-6xl font-bold mb-6 text-center">Aviso Legal</h1>

        <p className="mb-8">
          Este site é mantido e operado por FiveTwo | Tshirteria. Ao acessar e utilizar este site, você concorda com os termos deste aviso legal.
        </p>

        <p className="mb-8">
          Todo o conteúdo disponibilizado neste site, incluindo textos, imagens, gráficos, logotipos, ícones, vídeos e áudios, é protegido por direitos autorais e outras leis de propriedade intelectual.
        </p>

        <p className="mb-8">
          O uso indevido das informações contidas neste site, bem como a reprodução não autorizada de qualquer conteúdo, está sujeito às penalidades previstas na legislação aplicável.
        </p>

        <p className="mb-8">
          Apesar de nos esforçarmos para manter as informações atualizadas e corretas, não garantimos a completude, precisão ou atualização de qualquer conteúdo presente neste site.
        </p>

        <p className="mb-8">
          Reservamo-nos o direito de modificar, a qualquer momento e sem aviso prévio, o conteúdo e as condições de uso deste site.
        </p>

        <p className="text-sm text-gray-500">
          Caso tenha dúvidas sobre este aviso legal, entre em contato conosco.
        </p>
      </div>
    </MainLayout>
  );
}
