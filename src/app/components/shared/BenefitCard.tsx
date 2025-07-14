import { IconCreditCard, IconCubeSend, IconDeviceDesktop } from '@tabler/icons-react';

const iconMap = {
  IconCreditCard,
  IconCubeSend,
  IconDeviceDesktop,
};

type BenefitCardProps = {
  titulo: string;
  descricao: string;
  icon: string;
};

export default function BenefitCard({ titulo, descricao, icon }: BenefitCardProps) {
  const Icon = iconMap.hasOwnProperty(icon) ? iconMap[icon as keyof typeof iconMap] : IconCreditCard;

  return (
    <div className="flex flex-col items-center">
      <Icon size={36} className="mb-3" />
      <h3 className="text-2xl font-semibold mb-2 uppercase">{titulo}</h3>
      <p className="text-md font-bold text-neutral-600">{descricao}</p>
    </div>
  );
}
