import { motion } from "framer-motion";
import { Target, Eye, Globe, Zap, Shield, Users, TrendingUp, Star } from "lucide-react";

const mission = {
  icon: Target,
  label: "Missão",
  color: "from-emerald-500 to-green-600",
  title: "Nossa Missão",
  description:
    "Desenvolver ecossistemas digitais inteligentes para análise, processamento e democratização de dados ambientais, promovendo soluções tecnológicas aplicadas à sustentabilidade global.",
  highlights: [
    "Acesso a dados ambientais em escala",
    "Tecnologia aplicada à sustentabilidade",
    "Soluções de inteligência climática",
    "Impacto ambiental positivo",
  ],
};

const vision = {
  icon: Eye,
  label: "Visão",
  color: "from-green-400 to-emerald-600",
  title: "Nossa Visão",
  description:
    "Ser uma referência em tecnologia climática e infraestrutura de dados ambientais, contribuindo para decisões mais inteligentes e sustentáveis em escala global até 2030.",
  highlights: [
    "Referência em Climate Tech",
    "Infraestrutura global de dados",
    "Inovação contínua em IA ambiental",
    "Escalabilidade internacional",
  ],
};

const values = [
  {
    icon: Globe,
    title: "Sustentabilidade",
    description:
      "Toda decisão é orientada pelo impacto ambiental e pela construção de soluções responsáveis.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Inovação",
    description:
      "Aplicação contínua de tecnologias avançadas para resolver desafios climáticos complexos.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Integridade",
    description:
      "Transparência e responsabilidade no uso e processamento de dados ambientais.",
    color: "from-emerald-600 to-green-700",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Construção de soluções abertas e colaborativas com impacto global.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: TrendingUp,
    title: "Precisão",
    description:
      "Foco em análise de dados confiáveis para suporte à tomada de decisão ambiental.",
    color: "from-emerald-400 to-green-500",
  },
];

const commitments = [
  { number: "ODS 13", label: "Ação Climática", desc: "Alinhados à agenda global de sustentabilidade" },
  { number: "2026", label: "Infraestrutura Ativa", desc: "Sistema em constante evolução tecnológica" },
  { number: "100%", label: "Foco em Impacto", desc: "Tecnologia orientada a resultados ambientais" },
];

export function MissaoPage() {
  return (
    <div className="bg-[#070A12] min-h-screen">

      {/* HERO */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-white"
          >
            Missão, Visão e{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Valores
            </span>
          </motion.h1>

          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Os princípios que orientam o desenvolvimento da Nexus como plataforma de tecnologia climática.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">

        {/* MISSÃO / VISÃO */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[mission, vision].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                  <Icon className="text-emerald-400" />
                </div>

                <span className="text-xs text-emerald-400 uppercase tracking-widest">
                  {item.label}
                </span>

                <h2 className="text-2xl text-white font-bold mt-2 mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-400 mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-emerald-400">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* COMPROMISSOS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          {commitments.map((c) => (
            <div key={c.number}>
              <p className="text-2xl font-bold text-emerald-400">{c.number}</p>
              <p className="text-white font-semibold">{c.label}</p>
              <p className="text-gray-500 text-xs">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* VALORES */}
        <h2 className="text-3xl text-white font-bold mb-6">
          Nossos <span className="text-emerald-400">Valores</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => {
            const Icon = v.icon;

            return (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <Icon className="text-emerald-400 mb-4" />
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}