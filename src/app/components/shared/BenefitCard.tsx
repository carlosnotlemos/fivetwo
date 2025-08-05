import { Beneficio } from '@/core/model/Beneficio';
import { IconCreditCard, IconCubeSend, IconDeviceDesktop } from '@tabler/icons-react';

const iconMap = {
  IconCreditCard,
  IconCubeSend,
  IconDeviceDesktop,
};

export default function BenefitCard({beneficio}: {beneficio: Beneficio}) {
  const Icon = iconMap.hasOwnProperty(beneficio.icon) ? iconMap[beneficio.icon as keyof typeof iconMap] : IconCreditCard;

  return (
    <div className="flex flex-col items-center text-gray-700">
      <Icon size={36} className="mb-3" />
      <h3 className="text-2xl font-semibold mb-2 uppercase">{beneficio.titulo}</h3>
      <p className="text-md font-bold">{beneficio.descricao}</p>
    </div>
  );
}
