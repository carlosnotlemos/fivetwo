import { IconCreditCard } from "@tabler/icons-react";

type ProductInfoProps = {
  nome: string
  preco: number
}

export default function ProductInfo({nome, preco}: ProductInfoProps) {
  return (
    <div className="p-3 text-center">
      <h3 className="text-base font-semibold text-gray-800 truncate">{nome}</h3>
      <p className="font-bold text-lg">⭐⭐⭐⭐⭐ (995)</p>
      <p className="text-neutral-500 text-md">A partir de R$ {preco.toFixed(2)}</p>
      <div className="flex items-center justify-center gap-2 text-neutral-700 text-md">
        <IconCreditCard />
        <span>
          Até <strong className="font-extrabold text-gray-900">12X </strong>
          de R$ <strong className="font-extrabold text-gray-900">{preco.toFixed(2)}</strong>
        </span>
      </div>
    </div>
  );
}