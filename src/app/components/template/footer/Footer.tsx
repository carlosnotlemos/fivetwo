'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="p-6 lg:p-10 space-y-10">
        {/* Newsletter */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex-1 p-6">
            <h2 className="text-xl font-bold mb-4">Quer receber as melhores promoções?</h2>
            <p className="text-gray-600 mb-6">
              Fale diretamente com a gente no WhatsApp e receba novidades e descontos exclusivos.
            </p>
          </div>

          {/* Menu de Políticas */}
          <div className="flex-1">
            <p className="font-bold mb-4">Menu de Políticas</p>
            <ul className="flex flex-col gap-2 text-gray-600 text-sm">
              {[
                ["Rastrear Pedido", "/suporte/rastreio"],
                ["Estampas e Direitos Autorais", "/suporte/estampas-e-direitos-autorais"],
                ["Sobre como trocar", "/suporte/quero-trocar"],
                ["Sobre Devolução e Reembolso", "/policies/refund-policy"],
                ["Fretes e Prazos de Entrega", "/policies/shipping-policy"],
                ["Termos de Uso", "/policies/terms-of-service"],
                ["Políticas de Privacidade", "/policies/privacy-policy"],
                ["Aviso Legal", "/policies/legal-notice"],
                ["Sobre nós", "/policies/contact-information"]
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-black transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações da empresa */}
          <div className="flex-1 text-sm text-gray-600">
            <p className="font-bold mb-2">FiveTwo | Tshirteria</p>
            <p>
              Transformando ideias em camisetas exclusivas<br /> feitas para você.<br /><br />
              <strong>Sede:</strong> Rua Antonio Arruda 786<br />
              Fortaleza / Ceará - CE<br />
              CEP 60335-095<br /><br />

              👤 <strong>SAC</strong><br />
              ✉️ fivetwotshirteria@gmail.com<br /><br />
              📲 <a href="https://wa.me/85986540523" target="_blank">85 98654-0523</a><br /><br />
              <em>Suporte via WhatsApp<br />Não atendemos ligação.</em><br /><br />
              🕗 <strong>Atendimento:</strong><br />
              Seg à Sex: 09:00 às 18:00
            </p>
          </div>
        </div>

        {/* Redes sociais (você pode adicionar os SVGs ou usar icons do Lucide/Iconify etc.) */}
        <div className="flex justify-center gap-6">
          {[
            ["https://www.instagram.com/fivetwo.tshirt", "Instagram"],
            ["https://wa.me/85986540523", "Whatsapp"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Seguir em ${label}`}
              className="hover:opacity-75 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
