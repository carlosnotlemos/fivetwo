import MainLayout from "@/app/components/template/MainLayout";

export default function RastrearPedido() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-5xl font-bold mb-6 text-center">Rastrear Pedido</h1>

        <p className="mb-6 text-center">
          Para acompanhar o status do seu pedido, por favor entre em contato com nosso suporte via WhatsApp.  
          Vamos te enviar o link para o rastreamento do seu pedido.
        </p>

        <div className="text-center">
          <a
            href="https://wa.me/5585986540523"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white rounded-lg py-3 px-8 hover:bg-green-700 transition"
          >
            Suporte pelo WhatsApp
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
