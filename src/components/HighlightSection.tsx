import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const base = import.meta.env.BASE_URL;

type Speaker = {
  id: number;
  name: string;
  role: string;
  company: string;
  topic: string;
  image: string;
  quote: string;
};

const speakers: Speaker[] = [
  {
    id: 7,
    name: "Yuri Correia",
    role: "Engenheiro de Software",
    company: "Tech Solutions",
    topic: "Desenvolvimento de sistemas e engenharia de software",
    image: `${base}images/yuri.png`,
    quote:
      "Grandes sistemas começam com pequenas ideias transformadas em código.",
  },
  {
    id: 3,
    name: "João Lucas",
    role: "Gerente de Projetos",
    company: "Tech Solutions",
    topic: "Gestão, planejamento e acompanhamento de projetos",
    image: `${base}images/lucas.png`,
    quote:
      "Código bem escrito não resolve apenas problemas. Ele cria possibilidades.",
  },
  {
    id: 6,
    name: "José Lucas Raposo",
    role: "Engenheiro de Dados",
    company: "Tech Solutions",
    topic: "Dados, análise e engenharia de dados",
    image: `${base}images/raposo.png`,
    quote: "Os melhores produtos nascem quando bons times evoluem juntos.",
  },
  {
    id: 8,
    name: "Rennan Barbosa",
    role: "Gerente de Requisitos",
    company: "Tech Solutions",
    topic: "Levantamento, análise e gerenciamento de requisitos de sistemas",
    image: `${base}images/rennan.png`,
    quote: "Clareza na ideia é o primeiro passo para qualidade no código.",
  },
];

const AUTOPLAY_TIME = 6000;

function SidePhoto({
  speaker,
  onClick,
}: {
  speaker: Speaker;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver ${speaker.name}`}
      className="
        group
        hidden
        h-20
        w-20
        overflow-hidden
        rounded-full
        border
        border-white/10
        bg-zinc-900
        opacity-40
        transition-all
        duration-300
        hover:scale-105
        hover:opacity-70
        md:block
        lg:h-24
        lg:w-24
      "
    >
      <img
        src={speaker.image}
        alt={speaker.name}
        className="
          h-full
          w-full
          object-cover
          grayscale-[15%]
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </button>
  );
}

function MainPhoto({ speaker }: { speaker: Speaker }) {
  return (
    <div
      className="
        relative
        h-48
        w-48
        overflow-hidden
        rounded-full
        bg-zinc-900
        sm:h-56
        sm:w-56
        lg:h-64
        lg:w-64
      "
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={speaker.id}
          src={speaker.image}
          alt={speaker.name}
          initial={{
            opacity: 0,
            scale: 1.03,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="h-full w-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Pessoa anterior" : "Próxima pessoa"}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        text-white/40
        transition-colors
        hover:border-white/25
        hover:text-white
      "
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

export default function HighlightSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const total = speakers.length;
  const activeSpeaker = speakers[activeIndex];

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const previous = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const selectSpeaker = (index: number) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(next, AUTOPLAY_TIME);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPlaying, next]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-28
        text-white
        sm:py-36
      "
    >
      {/* Linha superior */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-white/[0.06]
        "
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-5
                text-[11px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-emerald-400
              "
            >
              Pessoas & Tecnologia
            </p>

            <h2
              className="
                max-w-3xl
                text-4xl
                font-medium
                leading-[1]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-7xl
              "
            >
              Quem está por trás
              <span className="block text-zinc-500">da tecnologia.</span>
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-7
              text-zinc-500
            "
          >
            Diferentes pessoas, experiências e especialidades trabalhando na
            construção de soluções.
          </p>
        </motion.div>

        {/* ==================================================
            CAROUSEL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-20"
        >
          {/* Fotos */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
              sm:gap-8
            "
          >
            <SidePhoto
              speaker={speakers[(activeIndex - 1 + total) % total]}
              onClick={previous}
            />

            <MainPhoto speaker={activeSpeaker} />

            <SidePhoto
              speaker={speakers[(activeIndex + 1) % total]}
              onClick={next}
            />
          </div>

          {/* Conteúdo */}

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSpeaker.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 25 : -25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -25 : 25,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                {/* Frase */}

                <blockquote
                  className="
                    mx-auto
                    max-w-3xl
                    text-2xl
                    font-medium
                    leading-[1.25]
                    tracking-[-0.025em]
                    text-zinc-100
                    sm:text-3xl
                    md:text-4xl
                    lg:text-[44px]
                  "
                >
                  “{activeSpeaker.quote}”
                </blockquote>

                {/* Pessoa */}

                <div className="mt-8">
                  <h3
                    className="
                      text-lg
                      font-medium
                      text-white
                    "
                  >
                    {activeSpeaker.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-zinc-500
                    "
                  >
                    <span className="text-emerald-400">
                      {activeSpeaker.role}
                    </span>

                    <span className="mx-2 text-zinc-700">/</span>

                    {activeSpeaker.company}
                  </p>
                </div>

                {/* Área */}

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-lg
                    text-sm
                    leading-6
                    text-zinc-600
                  "
                >
                  {activeSpeaker.topic}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              CONTROLES
          ================================================== */}

          <div
            className="
              mt-12
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <ArrowButton direction="left" onClick={previous} />

            <div className="flex items-center gap-2 px-2">
              {speakers.map((speaker, index) => (
                <button
                  key={speaker.id}
                  type="button"
                  onClick={() => selectSpeaker(index)}
                  aria-label={`Selecionar ${speaker.name}`}
                  className="p-1"
                >
                  <span
                    className={`
                      block
                      h-1
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        index === activeIndex
                          ? "w-6 bg-emerald-400"
                          : "w-1.5 bg-zinc-700"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <ArrowButton direction="right" onClick={next} />

            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={
                isPlaying ? "Pausar carrossel" : "Reproduzir carrossel"
              }
              className="
                ml-1
                flex
                h-8
                w-8
                items-center
                justify-center
                text-zinc-600
                transition-colors
                hover:text-zinc-300
              "
            >
              {isPlaying ? (
                <Pause className="h-3 w-3" />
              ) : (
                <Play className="h-3 w-3" />
              )}
            </button>
          </div>

          {/* Barra de progresso */}

          <div
            className="
              mx-auto
              mt-8
              h-px
              max-w-[180px]
              overflow-hidden
              bg-white/[0.08]
            "
          >
            <motion.div
              key={`${activeSpeaker.id}-${isPlaying}`}
              initial={{
                width: "0%",
              }}
              animate={{
                width: isPlaying ? "100%" : "0%",
              }}
              transition={{
                duration: isPlaying ? AUTOPLAY_TIME / 1000 : 0,
                ease: "linear",
              }}
              className="
                h-full
                bg-emerald-400
              "
            />
          </div>
        </motion.div>

        {/* ==================================================
            MOBILE INFO
        ================================================== */}

        <div
          className="
            mt-20
            border-t
            border-white/[0.06]
            pt-5
            md:hidden
          "
        >
          <div className="flex justify-between">
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-zinc-700
              "
            >
              Nexus
            </span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-zinc-700
              "
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
