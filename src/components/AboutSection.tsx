import { motion } from "framer-motion";

const IMG_MAIN =
  "https://images.unsplash.com/photo-1755889319901-72939cf7bac5?auto=format&fit=crop&fm=jpg&q=85&w=1600";

const IMG_SM1 =
  "https://images.unsplash.com/photo-1586366461834-d2d65d725a2e?auto=format&fit=crop&fm=jpg&q=85&w=900";

const IMG_SM2 =
  "https://images.unsplash.com/photo-1769939850264-94fea42a301f?auto=format&fit=crop&fm=jpg&q=85&w=900";

const IMG_LG =
  "https://images.unsplash.com/photo-1755889319901-72939cf7bac5?auto=format&fit=crop&fm=jpg&q=85&w=1400";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="
        overflow-hidden
        bg-[#030504]
        text-white
      "
    >
      {/* =========================================================
          UPPER — CLIMATE / VISION
      ========================================================= */}
      <div className="flex min-h-[520px] flex-col lg:flex-row">
        {/* =====================================================
            LEFT — CLIMATE IMAGE
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.85,
          }}
          className="
            relative
            min-h-[320px]
            overflow-hidden
            lg:min-h-[520px]
            lg:w-1/2
          "
        >
          <img
            src={IMG_MAIN}
            alt="Paisagem natural e preservação ambiental"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              hover:scale-105
            "
          />

          {/* Emerald climate overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-emerald-950/90
              via-emerald-900/60
              to-emerald-500/20
            "
          />

          {/* Dark cinematic overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/75
              via-black/20
              to-black/30
            "
          />

          {/* Vision content */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              px-10
              text-center
            "
          >
            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.3em]
                text-emerald-200
              "
            >
              Tecnologia & Clima
            </motion.span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="
                text-4xl
                font-bold
                leading-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
              style={{
                textShadow: "0 2px 30px rgba(0,0,0,0.55)",
              }}
            >
              Nossa Visão
            </motion.h2>

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="
                mt-5
                h-1
                w-16
                rounded-full
                bg-emerald-300
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT — ABOUT NEXUS
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.85,
          }}
          className="
            flex
            flex-col
            justify-center
            bg-[#050706]
            px-10
            py-16
            sm:px-14
            lg:w-1/2
            lg:px-16
            lg:py-20
          "
        >
          <span
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.25em]
              text-emerald-400
            "
          >
            Sobre a Nexus
          </span>

          <h3
            className="
              mb-4
              text-3xl
              font-bold
              leading-snug
              text-white
              sm:text-4xl
            "
          >
            Tecnologia construída
            <br />
            para um futuro sustentável.
          </h3>

          <p
            className="
              mb-6
              text-base
              font-semibold
              tracking-wide
              text-emerald-300
            "
          >
            Software · Inteligência · Sustentabilidade
          </p>

          <p
            className="
              max-w-md
              leading-relaxed
              text-zinc-400
            "
          >
            A Nexus é uma iniciativa voltada à criação de soluções digitais que
            conectam engenharia de software, dados e inteligência computacional.
            Desenvolvemos sistemas pensados para resolver problemas reais
            através da tecnologia.
          </p>

          <p
            className="
              mt-4
              max-w-md
              leading-relaxed
              text-zinc-500
            "
          >
            Acreditamos que inovação e sustentabilidade podem caminhar juntas. A
            tecnologia pode ajudar a compreender o ambiente, otimizar recursos e
            criar soluções mais eficientes para os desafios do futuro.
          </p>

          {/* Identity line */}
          <div
            className="
              mt-8
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-emerald-400/50
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-zinc-600
              "
            >
              Tecnologia para o futuro
            </span>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          LOWER — CLIMATE IMAGE GRID
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          flex
          h-64
          flex-col
          overflow-hidden
          sm:h-80
          sm:flex-row
        "
      >
        {/* =====================================================
            SMALL CLIMATE IMAGES
        ===================================================== */}
        <div
          className="
            flex
            flex-1
            flex-row
            sm:w-2/5
            sm:flex-none
            sm:flex-col
          "
        >
          {/* Climate image 01 */}
          <div
            className="
              relative
              flex-1
              overflow-hidden
            "
          >
            <img
              src={IMG_SM1}
              alt="Energia solar e sustentabilidade"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-emerald-800/25
                transition-colors
                duration-500
                hover:bg-emerald-800/0
              "
            />
          </div>

          {/* Climate image 02 */}
          <div
            className="
              relative
              flex-1
              overflow-hidden
              border-t
              border-white/10
            "
          >
            <img
              src={IMG_SM2}
              alt="Energia eólica e mudanças climáticas"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-emerald-900/30
                transition-colors
                duration-500
                hover:bg-emerald-900/0
              "
            />
          </div>
        </div>

        {/* =====================================================
            LARGE CLIMATE IMAGE
        ===================================================== */}
        <div
          className="
            relative
            flex-1
            overflow-hidden
            border-l
            border-white/10
            sm:w-3/5
            sm:flex-none
          "
        >
          <img
            src={IMG_LG}
            alt="Natureza e preservação ambiental"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-emerald-950/45
              via-emerald-900/20
              to-transparent
            "
          />
        </div>
      </motion.div>
    </section>
  );
}
