'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="footer__wrapper p-6 lg:p-10 space-y-10">
        {/* Newsletter */}
        <div className="footer__block-list flex flex-col gap-10 md:flex-row">
          <div className="footer__block footer__block--newsletter flex-1">
            <div className="flex flex-col gap-6">
              <p className="text-xl font-bold">QUER RECEBER AS MELHORES PROMOÇÕES?</p>
              <div className="text-gray-600">
                <p>Se inscreva na nossa newsletter</p>
              </div>
              <form method="post" action="/contact#footer-newsletter" className="form" acceptCharset="UTF-8">
                <input type="hidden" name="form_type" value="customer" />
                <input type="hidden" name="utf8" value="✓" />
                <input type="hidden" name="contact[tags]" value="newsletter" />
                <div className="relative w-full">
                  <input
                    id="email"
                    type="email"
                    name="contact[email]"
                    placeholder=" "
                    className="peer w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    autoComplete="email"
                    required
                  />
                  <label htmlFor="email" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-black">
                    E-mail
                  </label>
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:scale-105 transition">
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
                      <path d="M0.75 7L3.75 4L0.75 1" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="sr-only">Assinar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Menu de Políticas */}
          <div className="footer__block footer__block--menu flex-1">
            <p className="font-bold mb-4">Menu de Políticas</p>
            <ul className="flex flex-col gap-2 text-gray-600 text-sm">
              {[
                ["Contato", "/pages/contact"],
                ["Seja Creator", "/pages/creators"],
                ["Atacado (acima 10 peças)", "/pages/atacado-aphago"],
                ["Rastrear Pedido", "/pages/rastreio"],
                ["Reclame Aqui", "/pages/reclame-aqui"],
                ["Estampas e Direitos Autorais", "/pages/estampas-e-direitos-autorais"],
                ["Sobre como trocar", "/pages/quero-trocar"],
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
          <div className="footer__block footer__block--text flex-1 text-sm text-gray-600">
            <p className="font-bold mb-2">Aphago | Camisetas</p>
            <p>
              <strong>39.577.555/0001-36<br />PROSBUSI NEGÓCIOS DIGITAIS LTDA</strong><br /><br />
              <strong>Sede:</strong> Av Dr Moura Ribeiro, 125<br />
              Marapé, Santos - SP<br />
              CEP 11070-061<br /><br />
              <strong>Despachos (Reserva INK)</strong><br />
              📍 SP: <em>06455-020</em><br />
              📍 RJ: <em>25585-085</em><br /><br />
              👤 SAC<br />
              ✉️ sac@aphago.com.br<br />
              📲 <a href="https://wa.me/13920013614" target="_blank">13 92001-3614</a><br />
              📲 <a href="https://wa.me/13920027086" target="_blank">13 92002-7086</a><br />
              📲 <a href="https://wa.me/13982073399" target="_blank">13 98207-3399</a><br />
              📲 <a href="https://wa.me/13920011334" target="_blank">13 93300-8207</a><br /><br />
              <em>Suporte via WhatsApp<br />Não atendemos ligação.</em><br /><br />
              🕗 <strong>Atendimento:</strong><br />
              Seg à Sex: 09:00 às 18:00
            </p>
          </div>
        </div>

        {/* Redes sociais (você pode adicionar os SVGs ou usar icons do Lucide/Iconify etc.) */}
        <div className="footer__aside-top flex justify-center gap-6">
          {[
            ["https://www.facebook.com/useaphago", "Facebook"],
            ["https://www.instagram.com/useaphago", "Instagram"],
            ["https://br.pinterest.com/useaphago/", "Pinterest"],
            ["https://www.youtube.com/useaphago", "YouTube"],
            ["https://www.tiktok.com/@aphago", "TikTok"]
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener"
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
