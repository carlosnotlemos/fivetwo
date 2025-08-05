'use client'
import { useState } from "react";
import useFaq from "@/hooks/useFaq";
import FaqItem from "./FaqItem";
import Link from "next/link";

export default function Faq() {
  const { faqs } = useFaq();
  const [aberto, setAberto] = useState<number | null>(null);

  const toggle = (id: number) => {
    setAberto(aberto === id ? null : id);
  };

  return (
    <section className="bg-neutral-100">
      <h1 className="text-5xl text-center font-bold pt-12 text-gray-700">FAQ</h1>
      <p className="text-center p-8">Veja as perguntas mais frequentes de nossos clientes.</p>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gray-800 rounded-xl shadow-md p-6 space-y-4 border border-blue-200">
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
        <p className="mb-4">
          Nosso suporte está disponível de segunda a sexta das 9:00 às 18:00.
        </p>
          <a
            href="https://wa.me/85986540523"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              py-4 px-10
              text-lg
              text-white bg-orange-500
              rounded-lg
              border-2 border-orange-500
              transition

              hover:bg-transparent
              hover:text-orange-500
            "
          >
            Suporte
          </a>
      </div>
    </section>
  );
}
