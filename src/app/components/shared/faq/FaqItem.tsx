import { IconChevronDown } from "@tabler/icons-react";

interface FaqItemProps {
  pergunta: string;
  resposta: string;
  aberto: boolean;
  onToggle: () => void;
}

export default function FaqItem({ pergunta, resposta, aberto, onToggle }: FaqItemProps) {
  return (
    <div>
      {/* Pergunta */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left font-semibold text-gray-800 cursor-pointer"
        aria-expanded={aberto}
      >
        <span>{pergunta}</span>
        <IconChevronDown
          className={`transition-transform duration-300 ${aberto ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {/* Resposta */}
      <div
        className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
          aberto ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!aberto}
      >
        {resposta}
      </div>
      {/* Divisor */}
      <hr className="my-4 border-blue-300" />
    </div>
  );
}
