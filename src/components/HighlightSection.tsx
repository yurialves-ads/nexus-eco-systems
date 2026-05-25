import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Pause,
  Play,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const base = import.meta.env.BASE_URL;

// ======================================================
// TYPES
// ======================================================

type Position =
  | "center"
  | "left"
  | "right"
  | "far-left"
  | "far-right";

type Speaker = {
  id: number;
  name: string;
  role: string;
  company: string;
  topic: string;
  bio: string;
  image: string;
  tags: string[];
  color: string;
};

const speakers: Speaker[] = [
 {
  id: 7,
  name: "Yuri Correia",
  role: "DevOps",
  company: "Tech Solutions",
  topic: "Infraestrutura, automação e CI/CD",
  bio: "Engenheiro DevOps focado em automação de pipelines, infraestrutura como código e melhoria contínua de deploys e confiabilidade de sistemas em produção.",
  image: `${base}images/yuri.png`,
  tags: ["DevOps", "CI/CD", "Cloud"],
  color: "#06B6D4",
  },

  {
  id: 3,
  name: "João Lucas",
  role: "Engenheiro de Software",
  company: "Tech Solutions",
  topic: "Arquitetura de sistemas e engenharia de software",
  bio: "Engenheiro de software focado em sistemas escaláveis, APIs e boas práticas de arquitetura backend.",
  image: `${base}images/lucas.png`,
  tags: ["Backend", "Arquitetura", "APIs"],
  color: "#3B82F6",
  },

  {
  id: 4,
  name: "Gabriela Gomes",
  role: "Engenheira de Requisitos",
  company: "Tech Solutions",
  topic: "Engenharia de requisitos e análise de sistemas",
  bio: "Especialista em levantamento, análise e documentação de requisitos para sistemas complexos, atuando como ponte entre negócio e desenvolvimento.",
  image: `${base}images/gabi.png`,
  tags: ["Requisitos", "Análise de Sistemas", "Produto"],
  color: "#F59E0B",
  },

  {
  id: 5,
  name: "Otávio Henrique",
  role: "Gerente de Projetos",
  company: "Tech Solutions",
  topic: "Gestão de projetos e entrega de software",
  bio: "Responsável pelo planejamento, coordenação e entrega de projetos de software, garantindo prazos, qualidade e alinhamento entre equipes técnicas e de negócio.",
  image: `${base}images/otavio.png`,
  tags: ["Gestão", "Scrum", "Projetos"],
  color: "#EF4444",
  },

  {
  id: 6,
  name: "João Lucas Barbosa",
  role: "Scrum Master",
  company: "Tech Solutions",
  topic: "Agilidade e facilitação de times de desenvolvimento",
  bio: "Facilitador de times ágeis com foco em melhoria contínua, remoção de impedimentos e otimização de processos no ciclo de desenvolvimento de software.",
  image: `${base}images/joao.png`,
  tags: ["Agile", "Scrum", "Facilitação"],
  color: "#8B5CF6",
  },
  
  {
  id: 8,
  name: "Rennan Barbosa",
  role: "Analista de Requisitos",
  company: "Tech Solutions",
  topic: "Levantamento e análise de requisitos de sistemas",
  bio: "Atua na identificação, análise e documentação de requisitos funcionais e não funcionais, garantindo clareza entre stakeholders e equipe de desenvolvimento.",
  image: `${base}images/rennan.png`,
  tags: ["Requisitos", "Análise", "Produto"],
  color: "#F97316",
  },
];

// ======================================================
// CARD (UI PROFISSIONAL)
// ======================================================

function SpeakerCard({
  speaker,
  position,
  onClick,
}: {
  speaker: Speaker;
  position: Position;
  onClick: () => void;
}) {
  const isCenter = position === "center";

  const t: Record<
    Position,
    {
      x: number;
      scale: number;
      opacity: number;
      rotateY: number;
      zIndex: number;
      blur: number;
    }
  > = {
    center: { x: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30, blur: 0 },
    left: { x: -260, scale: 0.84, opacity: 0.65, rotateY: 14, zIndex: 20, blur: 2 },
    right: { x: 260, scale: 0.84, opacity: 0.65, rotateY: -14, zIndex: 20, blur: 2 },
    "far-left": { x: -460, scale: 0.62, opacity: 0.28, rotateY: 22, zIndex: 10, blur: 4 },
    "far-right": { x: 460, scale: 0.62, opacity: 0.28, rotateY: -22, zIndex: 10, blur: 4 },
  };

  const transform = t[position];

  return (
    <motion.div
      className="absolute cursor-pointer select-none"
      style={{ zIndex: transform.zIndex }}
      animate={{
        x: transform.x,
        scale: transform.scale,
        opacity: transform.opacity,
        rotateY: transform.rotateY,
        filter: `blur(${transform.blur}px)`,
      }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      onClick={onClick}
      whileHover={isCenter ? { y: -14 } : {}}
    >
      {/* CARD */}
      <div
        className="
          w-[350px]
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-b from-[#0A0A0A] to-[#050505]
          border border-white/10
          relative
        "
        style={{
          boxShadow: isCenter
            ? `0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px ${speaker.color}22`
            : "0 20px 50px rgba(0,0,0,0.5)",
        }}
      >
        {/* IMAGE */}
        <div className="relative h-[420px] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: `url(${speaker.image})`,
              filter: "contrast(1.05) saturate(1.05)",
            }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8 }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* COLOR GLOW */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at bottom, ${speaker.color}55, transparent 60%)`,
            }}
          />

          {/* TAGS */}
          <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
            {speaker.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-3 py-1
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/80
                  bg-black/40
                  border border-white/10
                  rounded-full
                  backdrop-blur-md
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* TEXT */}
          <div className="absolute bottom-0 p-7">
            <h3 className="text-[28px] font-semibold text-white tracking-tight">
              {speaker.name}
            </h3>
            <p className="text-sm text-white/70 mt-1">{speaker.role}</p>
            <p className="text-xs text-white/40 mt-1 tracking-wide">
              {speaker.company}
            </p>
          </div>
        </div>

        {/* EXPANDED */}
        <AnimatePresence>
          {isCenter && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} color={speaker.color} />
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  NEXUS
                </span>
              </div>

              <h4 className="text-white text-lg font-medium mb-3">
                {speaker.topic}
              </h4>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {speaker.bio}
              </p>

              <div className="flex gap-3">
                {[ExternalLink, Globe].map((Icon, i) => (
                  <button
                    key={i}
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      text-white/70
                      flex items-center justify-center
                      hover:bg-white/10
                      hover:text-white
                      transition
                    "
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ======================================================
// SECTION
// ======================================================

export default function HighlightSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const total = speakers.length;

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, isPlaying]);

  const getPosition = (i: number): Position | null => {
    const diff = (i - activeIndex + total) % total;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    if (diff === 2) return "far-right";
    if (diff === total - 2) return "far-left";

    return null;
  };

  return (
    <section ref={ref} className="relative py-32 bg-[#020202] overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-[-0.06em] mb-8">
          Mentes que
          <span className="block bg-gradient-to-r from-green-300 via-emerald-400 to-green-600 text-transparent bg-clip-text">
            Transformam
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
          Especialistas em tecnologia, inteligência artificial, inovação, branding, games e transformação digital.
        </p>
      </motion.div>

      {/* CAROUSEL */}
      <div
        className="relative h-[820px] flex items-center justify-center"
        style={{ perspective: "1800px" }}
      >
        {speakers.map((s, i) => {
          const pos = getPosition(i);
          if (!pos) return null;

          return (
            <SpeakerCard
              key={s.id}
              speaker={s}
              position={pos}
              onClick={() => setActiveIndex(i)}
            />
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center items-center gap-6 mt-12">

        <button
          onClick={prev}
          className="w-14 h-14 rounded-2xl bg-black/60 border border-green-500/20 text-green-400 flex items-center justify-center hover:bg-green-500/10 hover:border-green-400/50 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="w-12 h-12 rounded-full bg-black/70 border border-green-500/30 text-green-400 flex items-center justify-center hover:bg-green-500/15 hover:border-green-400/60 transition"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={next}
          className="w-14 h-14 rounded-2xl bg-black/60 border border-green-500/20 text-green-400 flex items-center justify-center hover:bg-green-500/10 hover:border-green-400/50 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </section>
  );
}