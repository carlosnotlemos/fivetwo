import { IconCreditCard, IconCubeSend, IconDeviceDesktop } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-black py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center">
          <IconCreditCard size={36} className="mb-3" />
          <h3 className="text-lg font-semibold mb-2">PARCELAMENTO</h3>
          <p className="text-sm">Parcele suas compras em até 10x sem juros no cartão.</p>
        </div>

        <div className="flex flex-col items-center">
          <IconCubeSend size={36} className="mb-3" />
          <h3 className="text-lg font-semibold mb-2">ENTREGA RÁPIDA</h3>
          <p className="text-sm">Receba seus produtos com agilidade e segurança em todo o Brasil.</p>
        </div>

        <div className="flex flex-col items-center">
          <IconDeviceDesktop size={36} className="mb-3" />
          <h3 className="text-lg font-semibold mb-2">ATENDIMENTO</h3>
          <p className="text-sm">Fale com a gente pelo WhatsApp ou Instagram a qualquer hora.</p>
        </div>
      </div>
    </footer>
  );
}
