'use client'
import { useState } from "react";
import useFaq from "@/hooks/useFaq";
import FaqItem from "./FaqItem";

export default function Faq() {
  const { faqs } = useFaq();
  const [aberto, setAberto] = useState<number | null>(null);

  const toggle = (id: number) => {
    setAberto(aberto === id ? null : id);
  };

  return (
    <section className="bg-neutral-100">
      <h1 className="text-5xl text-center font-bold pt-12">FAQ</h1>
      <p className="text-center p-8">Veja as perguntas mais frequentes de nossos clientes.</p>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-blue-100 rounded-xl shadow-md p-6 space-y-4 border border-blue-200">
          {faqs.map((item) => (
            <FaqItem
              key={item.id}
              pergunta={item.pergunta}
              resposta={item.resposta}
              aberto={aberto === item.id}
              onToggle={() => toggle(item.id)}
            />
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
