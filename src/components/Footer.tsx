export function Footer() {
  return (
    <footer
      id="contato"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#030504]
        text-white
      "
    >
      {/* =====================================================
          GLOW
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[350px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-500/[0.08]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-6
          py-16
          sm:px-10
          lg:py-20
        "
      >
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div
          className="
            grid
            gap-12
            md:grid-cols-[1.5fr_1fr_1fr]
            md:gap-16
          "
        >
          {/* ===================================================
              BRAND
          =================================================== */}
          <div>
            <div className="flex items-center gap-3">
              {/* Logo Nexus */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  hover:border-emerald-400/20
                  hover:bg-emerald-400/[0.05]
                "
              >
                <img
                  src="/logo.png"
                  alt="Logo Nexus"
                  className="
                    h-8
                    w-8
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />
              </div>

              <span
                className="
                  bg-gradient-to-r
                  from-emerald-400
                  to-green-300
                  bg-clip-text
                  text-2xl
                  font-bold
                  tracking-tight
                  text-transparent
                "
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Nexus
              </span>
            </div>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-zinc-500
              "
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              Engenharia de software, dados e inteligência computacional para
              construir soluções mais eficientes, sustentáveis e preparadas para
              o futuro.
            </p>

            {/* =================================================
                ODS
            ================================================= */}
            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-emerald-400/15
                bg-emerald-400/[0.04]
                px-4
                py-2
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-medium
                  tracking-wide
                  text-emerald-400
                "
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Tecnologia · Sustentabilidade · ODS 13
              </span>
            </div>
          </div>

          {/* ===================================================
              NAVEGAÇÃO
          =================================================== */}
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-zinc-600
              "
            >
              Navegação
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <a
                href="#home"
                className="
                  w-fit
                  text-sm
                  text-zinc-400
                  transition-colors
                  duration-300
                  hover:text-emerald-400
                "
              >
                Início
              </a>

              <a
                href="#sobre"
                className="
                  w-fit
                  text-sm
                  text-zinc-400
                  transition-colors
                  duration-300
                  hover:text-emerald-400
                "
              >
                Sobre
              </a>

              <a
                href="#projetos"
                className="
                  w-fit
                  text-sm
                  text-zinc-400
                  transition-colors
                  duration-300
                  hover:text-emerald-400
                "
              >
                Projetos
              </a>

              <a
                href="#contato"
                className="
                  w-fit
                  text-sm
                  text-zinc-400
                  transition-colors
                  duration-300
                  hover:text-emerald-400
                "
              >
                Contato
              </a>
            </nav>
          </div>

          {/* ===================================================
              NEXUS
          =================================================== */}
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-zinc-600
              "
            >
              Nexus
            </p>

            <div className="mt-6 space-y-4">
              <p
                className="
                  text-sm
                  leading-6
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-zinc-300
                "
              >
                Software
              </p>

              <p
                className="
                  text-sm
                  leading-6
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-zinc-300
                "
              >
                Dados & Inteligência
              </p>

              <p
                className="
                  text-sm
                  leading-6
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-zinc-300
                "
              >
                Sustentabilidade
              </p>

              <p
                className="
                  text-sm
                  leading-6
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-zinc-300
                "
              >
                Inovação
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}
        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[11px]
              text-zinc-600
            "
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            © 2026 Nexus. Todos os direitos reservados.
          </p>

          <p
            className="
              text-[11px]
              text-zinc-700
            "
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            Tecnologia para um futuro mais sustentável.
          </p>
        </div>
      </div>

      {/* =====================================================
          LINHA INFERIOR
      ===================================================== */}
      <div
        className="
          h-px
          bg-gradient-to-r
          from-transparent
          via-emerald-400/40
          to-transparent
        "
      />
    </footer>
  );
}
