'use client'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Coluna 1 - Identidade */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">FiveTwo | Tshirteria</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong>CNPJ:</strong> 39.577.555/0001-36<br />
            PROSBUSI NEGÓCIOS DIGITAIS LTDA
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            📍 <strong>Sede:</strong><br />
            Rua Antonio Arruda, 786<br />
            Fortaleza – CE, 60335-095
          </p>
        </div>

        {/* Coluna 2 - Contato e horário */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Atendimento</h3>
          <p className="text-sm text-zinc-400">
            🕒 <strong>Seg a Sex:</strong> 09:00 – 18:00
          </p>
          <p className="text-sm text-zinc-400">
            💌 <strong>Email:</strong> fivetwotshirteria@gmail.com
          </p>
          <p className="text-sm text-zinc-400">
            📱 <strong>WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/85986540523"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300 transition"
            >
              85 98654-0523
            </a><br />
            <em className="text-xs text-zinc-500 block mt-1">Atendimento via WhatsApp. Não atendemos ligações.</em>
          </p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-zinc-700 text-center py-4 text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} FiveTwo. Todos os direitos reservados.
      </div>
    </footer>
  )
}
