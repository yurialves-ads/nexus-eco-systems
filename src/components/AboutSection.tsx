import { motion } from "framer-motion";

import {
  Leaf,
  Cpu,
  ArrowRight,
  Wind,
  Trees,
} from "lucide-react";

/* =========================================================
 * IMAGENS — ODS 13 / CLIMA / SUSTENTABILIDADE
 * ========================================================= */

const IMG_MAIN =
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1600&auto=format&fit=crop";

const IMG_SM1 =
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop";

const IMG_SM2 =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop";

const IMG_LG =
  "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop";

/* =========================================================
 * COMPONENTE
 * ========================================================= */

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="
        relative
        overflow-hidden
        bg-black
      "
    >
      {/* ===================================================
       * FUNDO ABSOLUTO
       * =================================================== */}

      <div className="absolute inset-0 bg-black" />

      {/* ===================================================
       * BACKGROUND GLOBAL
       * =================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/95" />

        {/* Glow principal */}
        <div
          className="
            absolute
            top-[-250px]
            left-1/2
            -translate-x-1/2
            w-[95vw]
            max-w-[1400px]
            h-[850px]
            bg-emerald-500/10
            blur-[180px]
          "
        />

        {/* Glow lateral */}
        <div
          className="
            absolute
            bottom-[-200px]
            right-[-100px]
            w-[600px]
            h-[600px]
            bg-green-500/10
            blur-[170px]
          "
        />

        {/* Aurora */}
        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-10%]
            top-[10%]
            w-[700px]
            h-[700px]
            rounded-full
            bg-emerald-400/10
            blur-[140px]
          "
        />

        {/* Grid futurista */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Vinheta premium */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.88)_100%)]
          "
        />
      </div>

      {/* ===================================================
       * CONTAINER PRINCIPAL
       * =================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1700px]
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-16
          2xl:px-20
          py-16
          sm:py-20
          lg:py-28
        "
      >
        {/* ===================================================
         * GRID PRINCIPAL
         * =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-10
            xl:gap-16
            items-center
          "
        >
          {/* =================================================
           * LADO ESQUERDO
           * ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-emerald-500/20
                blur-3xl
                scale-105
              "
            />

            {/* Container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                sm:rounded-[2.5rem]
                border
                border-white/10
                bg-black/60
                backdrop-blur-3xl
                shadow-[0_0_100px_rgba(16,185,129,0.08)]
              "
            >
              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-br
                  from-emerald-500/10
                  via-black/30
                  to-black
                "
              />

              {/* Imagem */}
              <motion.img
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 1,
                }}
                src={IMG_MAIN}
                alt="ODS 13"
                className="
                  w-full
                  h-[320px]
                  sm:h-[460px]
                  md:h-[560px]
                  xl:h-[760px]
                  object-cover
                "
              />

              {/* Conteúdo */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-20
                  p-6
                  sm:p-8
                  md:p-10
                "
              >
                {/* Header */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    mb-5
                  "
                >
                  {/* Ícone */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-emerald-400
                      flex
                      items-center
                      justify-center
                      shadow-2xl
                      shadow-emerald-500/40
                      flex-shrink-0
                    "
                  >
                    <Leaf className="w-7 h-7 text-black" />
                  </div>

                  {/* Títulos */}
                  <div>
                    <h3
                      className="
                        text-white
                        font-black
                        text-2xl
                        sm:text-3xl
                      "
                    >
                      ODS 13
                    </h3>

                    <p
                      className="
                        text-emerald-300
                        text-sm
                        sm:text-base
                      "
                    >
                      Ação Contra a Mudança Global do Clima
                    </p>
                  </div>
                </div>

                {/* Texto */}
                <p
                  className="
                    text-zinc-200
                    leading-relaxed
                    text-sm
                    sm:text-base
                    lg:text-lg
                    max-w-2xl
                  "
                >
                  A Nexus utiliza inteligência artificial,
                  monitoramento ambiental e tecnologia
                  sustentável para impulsionar soluções
                  climáticas inovadoras alinhadas às metas
                  globais da ONU.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
           * LADO DIREITO
           * ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="
              flex
              flex-col
              gap-6
              lg:gap-8
            "
          >
            {/* CARD PRINCIPAL */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-black/60
                backdrop-blur-3xl
                p-6
                sm:p-8
                lg:p-10
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-56
                  h-56
                  bg-emerald-500/10
                  blur-3xl
                "
              />

              <div className="relative z-10">

                {/* Ícone */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-emerald-500/15
                    border
                    border-emerald-500/20
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Wind className="w-8 h-8 text-emerald-400" />
                </div>

                {/* Título */}
                <h3
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    text-white
                    leading-tight
                    tracking-[-0.04em]
                    mb-6
                  "
                >
                  Tecnologia
                  Climática
                  Inteligente
                </h3>

                {/* Texto */}
                <p
                  className="
                    text-zinc-300
                    leading-relaxed
                    text-sm
                    sm:text-base
                    lg:text-lg
                    max-w-2xl
                  "
                >
                  Desenvolvemos soluções digitais focadas
                  em sustentabilidade, análise climática,
                  preservação ambiental e monitoramento
                  inteligente para acelerar ações contra
                  os impactos das mudanças climáticas.
                </p>
              </div>
            </motion.div>

            {/* GRID DE CARDS */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
            >
              {/* CARD 1 */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-black/60
                  backdrop-blur-3xl
                  p-5
                  lg:p-6
                "
              >
                <img
                  src={IMG_SM1}
                  alt="Energia sustentável"
                  className="
                    w-full
                    h-44
                    lg:h-52
                    object-cover
                    rounded-2xl
                    mb-5
                  "
                />

                <Cpu className="w-7 h-7 text-emerald-400 mb-4" />

                <h4
                  className="
                    text-white
                    font-bold
                    text-2xl
                    mb-3
                  "
                >
                  Inovação Verde
                </h4>

                <p
                  className="
                    text-zinc-300
                    leading-relaxed
                    text-sm
                    lg:text-base
                  "
                >
                  Inteligência digital aplicada ao
                  desenvolvimento sustentável e à
                  redução dos impactos ambientais.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-black/60
                  backdrop-blur-3xl
                  p-5
                  lg:p-6
                "
              >
                <img
                  src={IMG_SM2}
                  alt="Impacto ambiental"
                  className="
                    w-full
                    h-44
                    lg:h-52
                    object-cover
                    rounded-2xl
                    mb-5
                  "
                />

                <Trees className="w-7 h-7 text-emerald-400 mb-4" />

                <h4
                  className="
                    text-white
                    font-bold
                    text-2xl
                    mb-3
                  "
                >
                  Impacto Climático
                </h4>

                <p
                  className="
                    text-zinc-300
                    leading-relaxed
                    text-sm
                    lg:text-base
                  "
                >
                  Soluções alinhadas às metas globais
                  da ONU para preservação ambiental,
                  sustentabilidade e futuro climático.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
         * BANNER FINAL
         * =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            relative
            mt-16
            lg:mt-24
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            shadow-[0_0_100px_rgba(16,185,129,0.08)]
          "
        >
          {/* Imagem */}
          <img
            src={IMG_LG}
            alt="Nexus Climate"
            className="
              w-full
              h-[340px]
              sm:h-[420px]
              lg:h-[560px]
              object-cover
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black
              via-black/90
              to-emerald-950/30
            "
          />

          {/* Conteúdo */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              xl:flex-row
              items-start
              xl:items-center
              justify-center
              xl:justify-between
              gap-8
              p-6
              sm:p-10
              lg:p-16
            "
          >
            {/* Textos */}
            <div className="max-w-3xl">

              <p
                className="
                  text-emerald-300
                  uppercase
                  tracking-[0.35em]
                  text-[10px]
                  sm:text-xs
                  mb-5
                  font-semibold
                "
              >
                Nexus • ODS 13 • Climate Intelligence
              </p>

              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  xl:text-6xl
                  font-black
                  text-white
                  leading-tight
                  tracking-[-0.05em]
                "
              >
                Construindo
                tecnologia para
                proteger o futuro
                do planeta.
              </h3>
            </div>

            {/* Botão */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-emerald-400
                to-green-500
                text-black
                font-black
                text-sm
                sm:text-base
                lg:text-lg
                shadow-2xl
                shadow-emerald-500/30
                w-full
                sm:w-auto
              "
            >
              Explorar Soluções

              <ArrowRight
                className="
                  w-5
                  h-5
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}