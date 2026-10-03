/* =========================================================
 * HEADER PREMIUM — NEXUS
 * Header responsivo com:
 * - Logo Nexus
 * - Navegação desktop
 * - Menu mobile
 * - Detecção de rota ativa
 * - Header ocultável durante o scroll
 * - Reaparecimento ao rolar para cima
 * - Estado visual ao rolar
 * ========================================================= */

import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useLocation, useNavigate } from "react-router-dom";

import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "História", path: "/historia" },
  { label: "Galeria", path: "/fotos" },
  { label: "Missão", path: "/missao" },
  { label: "Documentos", path: "/documentos" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  const location = useLocation();
  const navigate = useNavigate();

  /*
   * Detecta o scroll da página.
   *
   * - Ao descer: header desaparece.
   * - Ao subir: header reaparece.
   * - No topo: header permanece visível.
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      setScrolled(currentScrollY > 24);

      // Sempre mostra o header quando estiver próximo do topo.
      if (currentScrollY <= 20) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollDifference = currentScrollY - previousScrollY;

      lastScrollY.current = currentScrollY;

      // Ignora pequenas oscilações do scroll.
      if (Math.abs(scrollDifference) < 5) {
        return;
      }

      // Descendo.
      if (scrollDifference > 0) {
        setHidden(true);
      }

      // Subindo.
      else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Fecha o menu mobile quando a tela passa
   * para o tamanho desktop.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Navegação entre páginas.
   */
  const handleNavigate = (path: string) => {
    setMobileOpen(false);
    setHidden(false);

    if (location.pathname !== path) {
      navigate(path);
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  /*
   * Verifica qual rota está ativa.
   */
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: hidden ? -130 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: 0.38,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={`
          fixed
          left-0
          right-0
          z-50
          transition-[top,width,max-width]
          duration-500

          ${
            scrolled
              ? `
                top-3
                mx-auto
                w-[calc(100%-24px)]
                max-w-7xl
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#050706]/90
                shadow-[0_20px_70px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
              `
              : `
                top-0
                border-b
                border-white/[0.05]
                bg-[#030504]/75
                backdrop-blur-xl
              `
          }
        `}
      >
        {/* Brilho decorativo do header */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
            rounded-2xl
          "
          aria-hidden="true"
        >
          <div
            className="
              absolute
              left-[18%]
              top-0
              h-24
              w-64
              -translate-y-1/2
              rounded-full
              bg-emerald-500/[0.07]
              blur-3xl
            "
          />
        </div>

        {/* Conteúdo principal */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            sm:px-7
            lg:px-8
          "
        >
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500

              ${scrolled ? "h-[70px]" : "h-[82px]"}
            `}
          >
            {/* =====================================================
             * LOGO
             * Arquivo: public/logo.png
             * URL pública: /logo.png
             * ===================================================== */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavigate("/")}
              className="
                group
                relative
                flex
                items-center
                gap-3
                text-left
              "
              aria-label="Ir para a página inicial"
            >
              <div
                className="
                  relative
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
                  group-hover:border-emerald-400/25
                  group-hover:bg-emerald-400/[0.05]
                "
              >
                <img
                  src="/logo.png"
                  alt="Nexus"
                  className="
                    h-8
                    w-8
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-emerald-400/[0.04]
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col">
                <span
                  className="
                    text-[1.25rem]
                    font-bold
                    leading-none
                    tracking-[-0.04em]
                    text-white
                  "
                  style={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Nexus
                </span>

                <span
                  className="
                    mt-1.5
                    hidden
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.24em]
                    text-zinc-600
                    sm:block
                  "
                >
                  Inteligência Sustentável
                </span>
              </div>
            </motion.button>

            {/* =====================================================
             * NAVEGAÇÃO DESKTOP
             * ===================================================== */}
            <nav
              className="
                hidden
                items-center
                gap-1
                lg:flex
              "
              aria-label="Navegação principal"
            >
              {navLinks.map((link) => {
                const active = isActive(link.path);

                return (
                  <button
                    type="button"
                    key={link.path}
                    onClick={() => handleNavigate(link.path)}
                    className={`
                      group
                      relative
                      rounded-xl
                      px-4
                      py-2.5
                      text-sm
                      transition-all
                      duration-300

                      ${
                        active
                          ? "text-emerald-300"
                          : "text-zinc-500 hover:text-white"
                      }
                    `}
                  >
                    <span
                      className={`
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-xl
                        transition-all
                        duration-300

                        ${
                          active
                            ? "bg-emerald-400/[0.07]"
                            : "bg-white/[0.03] opacity-0 group-hover:opacity-100"
                        }
                      `}
                      aria-hidden="true"
                    />

                    <span className="relative z-10">{link.label}</span>

                    {active && (
                      <motion.span
                        layoutId="nexus-active-nav"
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-0.5
                          w-5
                          -translate-x-1/2
                          rounded-full
                          bg-emerald-400
                        "
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* =====================================================
             * BOTÃO DOCUMENTOS
             * ===================================================== */}
            <div className="hidden lg:flex">
              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavigate("/documentos")}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.09]
                  bg-white/[0.04]
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:border-emerald-400/20
                  hover:bg-emerald-400/[0.07]
                  hover:text-white
                "
              >
                Documentos
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="
                    text-zinc-600
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-emerald-400
                  "
                />
              </motion.button>
            </div>

            {/* =====================================================
             * BOTÃO MENU MOBILE
             * ===================================================== */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileOpen((previous) => !previous)}
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                text-zinc-300
                transition-all
                duration-300
                hover:border-emerald-400/20
                hover:bg-emerald-400/[0.05]
                hover:text-white
                lg:hidden
              "
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              aria-controls="nexus-mobile-menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{
                    rotate: -45,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 45,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  {mobileOpen ? (
                    <X size={20} aria-hidden="true" />
                  ) : (
                    <Menu size={20} aria-hidden="true" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* =====================================================
         * MENU MOBILE
         * ===================================================== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="nexus-mobile-menu"
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
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="
                overflow-hidden
                border-t
                border-white/[0.06]
                bg-[#030504]/95
                backdrop-blur-2xl
                lg:hidden
              "
            >
              <div
                className="
                  px-5
                  py-5
                  sm:px-7
                "
              >
                <nav
                  className="
                    flex
                    flex-col
                    gap-1.5
                  "
                  aria-label="Navegação mobile"
                >
                  {navLinks.map((link) => {
                    const active = isActive(link.path);

                    return (
                      <motion.button
                        type="button"
                        whileTap={{
                          scale: 0.985,
                        }}
                        key={link.path}
                        onClick={() => handleNavigate(link.path)}
                        className={`
                          group
                          relative
                          flex
                          w-full
                          items-center
                          justify-between
                          overflow-hidden
                          rounded-xl
                          px-4
                          py-3.5
                          text-left
                          transition-all
                          duration-300

                          ${
                            active
                              ? `
                                border
                                border-emerald-400/10
                                bg-emerald-400/[0.06]
                                text-emerald-300
                              `
                              : `
                                border
                                border-transparent
                                text-zinc-400
                                hover:bg-white/[0.03]
                                hover:text-white
                              `
                          }
                        `}
                      >
                        <span
                          className="
                            relative
                            z-10
                            text-sm
                            font-medium
                          "
                        >
                          {link.label}
                        </span>

                        {active && (
                          <span
                            className="
                              relative
                              z-10
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-emerald-400
                              shadow-[0_0_12px_rgba(52,211,153,0.7)]
                            "
                            aria-hidden="true"
                          />
                        )}

                        <span
                          className="
                            pointer-events-none
                            absolute
                            inset-y-0
                            left-0
                            w-20
                            -translate-x-full
                            bg-gradient-to-r
                            from-emerald-400/[0.06]
                            to-transparent
                            transition-transform
                            duration-500
                            group-hover:translate-x-0
                          "
                          aria-hidden="true"
                        />
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Rodapé do menu mobile */}
                <div
                  className="
                    mt-5
                    border-t
                    border-white/[0.06]
                    pt-5
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-zinc-700
                    "
                  >
                    Nexus
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-zinc-600
                    "
                  >
                    Inteligência sustentável e inovação através da tecnologia.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
