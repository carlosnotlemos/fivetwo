'use client'
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

interface Item {
  pergunta: string;
  resposta: string;
}

const itens: Item[] = [
  {
    pergunta: "Qual o tempo de entrega?",
    resposta:
      "O tempo de produção pode demorar até 5 dias úteis. Mas normalmente despachamos no 2º dia útil, salvo em datas especiais como o Dia dos Pais.",
  },
  {
    pergunta: "Posso trocar produto personalizado?",
    resposta:
      "Sim! Você tem até 30 dias após o recebimento para trocar seu produto, mesmo que seja personalizado.",
  },
  {
    pergunta: "Como acompanho meu envio?",
    resposta:
      "Toda atualização de rastreio vai para o seu e-mail. Também estamos sempre disponíveis pelo WhatsApp.",
  },
  {
    pergunta: "Como acompanho meu envio?",
    resposta:
      "Toda atualização de rastreio vai para o seu e-mail. Também estamos sempre disponíveis pelo WhatsApp.",
  },
  {
    pergunta: "Como acompanho meu envio?",
    resposta:
      "Toda atualização de rastreio vai para o seu e-mail. Também estamos sempre disponíveis pelo WhatsApp.",
  },
];

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <section className="bg-neutral-100">
      <h1 className="text-5xl text-center font-bold pt-12">FAQ</h1>
      <p className="text-center p-8">
        Veja as perguntas mais frequentes de nossos clientes.
      </p>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-blue-100 rounded-xl shadow-md p-6 space-y-4 border border-blue-200">
          {itens.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-gray-800"
              >
                <span>{item.pergunta}</span>
                <IconChevronDown
                  className={`transition-transform duration-300 ${
                    aberto === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                  aberto === index
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.resposta}
              </div>

              {/* Linha divisória entre as perguntas */}
              {index < itens.length - 1 && (
                <hr className="my-4 border-blue-300" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-10 text-center">
        <p className="mb-4">Nosso suporte está disponível de segunda a sexta das: 9:00 às 18:00.</p>
        <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg py-4 px-10 transition">
          Suporte
        </button>
      </div>
    </section>
  );
}
