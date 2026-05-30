/* =========================================================
 * HEADER PREMIUM — NEXUS
 * Navegação futurista premium
 * ========================================================= */

import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
  Sparkles,
} from "lucide-react";

/* =========================================================
 * LINKS DE NAVEGAÇÃO
 * ========================================================= */

const navLinks = [
  { label: "Home", path: "/" },
  { label: "História", path: "/historia" },
  { label: "Galeria", path: "/fotos" },
  { label: "Missão", path: "/missao" },
  { label: "Documentos", path: "/documentos" },
];

/* =========================================================
 * COMPONENTE HEADER
 * ========================================================= */

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  /* =======================================================
   * DETECTA SCROLL
   * ======================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  /* =======================================================
   * NAVEGAÇÃO
   * ======================================================= */

  const handleNavigate = (path: string) => {
    setMobileOpen(false);

    navigate(path);
  };

  /* =======================================================
   * LINK ATIVO
   * ======================================================= */

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ===================================================
       * HEADER PRINCIPAL
       * =================================================== */}

      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`
          fixed
          left-0
          right-0
          z-40
          transition-all
          duration-500
          ${
            scrolled
              ? `
                top-4
                mx-auto
                w-[95%]
                max-w-7xl
                rounded-3xl
                border
                border-white/10
                bg-black/65
                backdrop-blur-2xl
                shadow-[0_10px_60px_rgba(0,0,0,0.45)]
              `
              : `
                top-0
                border-b
                border-white/[0.05]
                bg-black/40
                backdrop-blur-xl
              `
          }
        `}
      >
        {/* ===================================================
         * GLOW INTERNO
         * =================================================== */}

        <div
          className="
            absolute
            inset-0
            rounded-3xl
            bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)]
            pointer-events-none
          "
        />

        {/* ===================================================
         * CONTAINER
         * =================================================== */}

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

          <div className="h-[82px] flex items-center justify-between">

            {/* =============================================
             * BRAND / NOME
             * ============================================= */}

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => handleNavigate("/")}
              className="
                relative
                flex
                items-center
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-emerald-400/10
                  blur-2xl
                  opacity-60
                "
              />

              {/* Texto */}
              <div className="relative z-10 text-left">

                <h1
                  className="
                    text-white
                    font-black
                    text-[1.6rem]
                    tracking-[-0.08em]
                    leading-none
                  "
                >
                  NEXUS
                </h1>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.32em]
                    text-zinc-500
                    mt-1.5
                  "
                >
                  Inteligência Sustentável e Inovadora
                </p>
              </div>
            </motion.button>

            {/* =============================================
             * NAVEGAÇÃO DESKTOP
             * ============================================= */}

            <nav
              className="
                hidden
                lg:flex
                items-center
                gap-1
              "
            >
              {navLinks.map((link) => {
                const active = isActive(link.path);

                return (
                  <button
                    key={link.path}
                    onClick={() =>
                      handleNavigate(link.path)
                    }
                    className="
                      relative
                      px-4
                      py-3
                      rounded-2xl
                      overflow-hidden
                      group
                    "
                  >
                    {/* Hover glow */}
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        bg-emerald-500/5
                      "
                    />

                    {/* Texto */}
                    <span
                      className={`
                        relative
                        z-10
                        text-[0.82rem]
                        font-medium
                        transition-all
                        duration-300
                        ${
                          active
                            ? "text-emerald-300"
                            : "text-zinc-400 group-hover:text-white"
                        }
                      `}
                    >
                      {link.label}
                    </span>

                    {/* Linha ativa */}
                    {active && (
                      <motion.div
                        layoutId="active-nav"
                        className="
                          absolute
                          bottom-1
                          left-3
                          right-3
                          h-[2px]
                          rounded-full
                          bg-gradient-to-r
                          from-emerald-400
                          to-green-500
                        "
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* =============================================
             * BOTÃO MOBILE
             * ============================================= */}

            <motion.button
              whileTap={{
                scale: 0.92,
              }}
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                lg:hidden
                relative
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                text-white
              "
            >
              <AnimatePresence mode="wait">

                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {mobileOpen ? (
                    <X size={22} />
                  ) : (
                    <Menu size={22} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ===================================================
         * MENU MOBILE
         * =================================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                lg:hidden
                overflow-hidden
                border-t
                border-white/[0.05]
                bg-black/95
                backdrop-blur-3xl
              "
            >
              <div className="px-5 py-6">

                {/* Links */}
                <div className="flex flex-col gap-2">

                  {navLinks.map((link) => {
                    const active = isActive(link.path);

                    return (
                      <motion.button
                        whileTap={{
                          scale: 0.98,
                        }}
                        key={link.path}
                        onClick={() =>
                          handleNavigate(link.path)
                        }
                        className={`
                          relative
                          overflow-hidden
                          text-left
                          px-5
                          py-4
                          rounded-2xl
                          transition-all
                          duration-300
                          ${
                            active
                              ? `
                                border
                                border-emerald-500/15
                                bg-emerald-500/10
                                text-emerald-300
                              `
                              : `
                                bg-white/[0.02]
                                text-zinc-300
                                hover:bg-white/[0.05]
                              `
                          }
                        `}
                      >
                        {/* Glow ativo */}
                        {active && (
                          <div
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-r
                              from-emerald-500/10
                              to-transparent
                            "
                          />
                        )}

                        <span className="relative z-10">
                          {link.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* CTA MOBILE */}
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}