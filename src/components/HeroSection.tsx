import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#030504]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Green ambient glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.7, 0.5],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-25%]
            h-[800px]
            w-[1000px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.18]
            blur-[180px]
          "
        />

        {/* White ambient glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[140px]
          "
        />

        {/* Bottom green glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [-30, 30, -30],
                  opacity: [0.2, 0.35, 0.2],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-30%]
            left-1/2
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-emerald-400/[0.10]
            blur-[170px]
          "
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vertical gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,rgba(3,5,4,0.15),rgba(3,5,4,0.55)_65%,#030504_100%)]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,#030504_90%)]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1400px]
          items-center
          justify-center
          px-6
          py-28
          sm:px-10
          lg:px-16
        "
      >
        <div className="w-full text-center">
          {/* =====================================================
              EYEBROW
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-8
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-8
                bg-emerald-300/70
                sm:w-12
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-zinc-400
                sm:text-[11px]
              "
            >
              Nexus · Digital Engineering
            </span>

            <span
              className="
                h-px
                w-8
                bg-emerald-300/70
                sm:w-12
              "
            />
          </motion.div>

          {/* =====================================================
              MAIN TITLE
          ===================================================== */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="
              mx-auto
              max-w-6xl
              text-[clamp(3.4rem,9vw,9rem)]
              font-black
              leading-[0.82]
              tracking-[-0.075em]
            "
          >
            <span className="block text-white">SOFTWARE</span>

            <span
              className="
                block
                bg-gradient-to-r
                from-emerald-300
                via-white
                to-emerald-400
                bg-clip-text
                text-transparent
              "
            >
              SUSTENTÁVEL
            </span>

            <span className="block text-white/[0.92]">PARA O FUTURO</span>
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-sm
              leading-7
              text-zinc-400
              sm:text-base
              lg:text-lg
            "
          >
            Engenharia de software, dados e inteligência computacional para
            construir sistemas mais eficientes, escaláveis e preparados para o
            futuro.
          </motion.p>

          {/* =====================================================
              CTA BUTTON
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              mt-10
              flex
              justify-center
            "
          >
            <a
              href="https://nexus-frontend-murex-two.vercel.app/pages/index.html"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-emerald-300
                hover:shadow-[0_0_45px_rgba(52,211,153,0.25)]
              "
            >
              Explorar projetos
              <ArrowDownRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:translate-y-0.5
                "
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 7, 0],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-zinc-600
          lg:flex
        "
      >
        <span>Scroll</span>

        <span
          className="
            h-7
            w-px
            bg-gradient-to-b
            from-emerald-300/50
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}
