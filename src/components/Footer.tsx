export function Footer() {
  return (
    <footer id="contato" className="bg-[#070A12] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 flex flex-col items-center text-center gap-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="ft-grad"
                x1="0"
                y1="0"
                x2="36"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#10B981" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
            </defs>

            <circle cx="18" cy="18" r="15" stroke="url(#ft-grad)" strokeWidth="2" fill="none" />
            <ellipse cx="18" cy="18" rx="7" ry="15" stroke="url(#ft-grad)" strokeWidth="1.5" fill="none" />
            <line x1="3" y1="18" x2="33" y2="18" stroke="url(#ft-grad)" strokeWidth="1.5" />
            <rect x="13" y="13" width="10" height="10" rx="2" fill="url(#ft-grad)" opacity="0.85" />
          </svg>

          <span
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Nexus
          </span>
        </div>

        {/* Texto institucional */}
        <p
          className="text-gray-500 max-w-sm leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem" }}
        >
          Desenvolvimento de ecossistemas digitais inteligentes para sustentabilidade,
          análise climática e infraestrutura de dados em tempo real.
        </p>

        {/* Tag ODS */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span
            className="text-emerald-400 text-xs font-medium tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tecnologia Climática · Sustentabilidade · ODS 13
          </span>
        </div>

        {/* Bottom */}
        <div className="w-full border-t border-white/5 pt-6 mt-2">
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2026 Nexus. Todos os direitos reservados. Plataforma de tecnologia climática.
          </p>
        </div>
      </div>

      {/* Linha inferior de gradiente */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
    </footer>
  );
}