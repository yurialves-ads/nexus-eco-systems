import { motion } from "framer-motion";
import { Calendar, Lightbulb, Users } from "lucide-react";

const IMG_TEAM = "";
const IMG_CLASS = "";

const timeline = [
  {
    year: "Mar 2026",
    title: "Concepção da Plataforma",
    description:
      "Durante o desenvolvimento de um projeto acadêmico, surgiu a ideia de criar uma plataforma de dados ambientais voltada para análise climática e inteligência computacional.",
    icon: Lightbulb,
    color: "from-emerald-500 to-green-500",
    side: "left",
  },
  {
    year: "Mar 2026",
    title: "Formação do Núcleo Técnico",
    description:
      "Uma equipe multidisciplinar foi estruturada com foco em engenharia de software, análise de dados, arquitetura de sistemas e desenvolvimento de soluções climáticas.",
    icon: Users,
    color: "from-green-400 to-emerald-500",
    side: "right",
  },
];

function PageHero() {
  return (
    <div className="relative bg-[#070A12] pt-32 pb-20 overflow-hidden">

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-5"
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">
            Nossa Trajetória
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          História da{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            Nexus
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          A evolução de uma ideia acadêmica para uma plataforma de tecnologia climática voltada para dados ambientais e inteligência computacional.
        </p>

      </div>
    </div>
  );
}

export function HistoriaPage() {
  return (
    <div className="bg-[#070A12] min-h-screen">

      <PageHero />

      {/* TIMELINE */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">

        <div className="relative">

          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-green-400/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-14 md:gap-16">

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CARD */}
                  <div className="flex-1">
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-emerald-400/30 transition">
                      <span className="text-emerald-400 text-xs uppercase tracking-widest">
                        {item.year}
                      </span>

                      <h3 className="text-white font-bold text-xl mt-2 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* ICON */}
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <Icon className="text-white w-5 h-5" />
                    </div>
                    <div className="absolute inset-0 rounded-full blur-md opacity-30 bg-emerald-400" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="mt-24 relative rounded-3xl overflow-hidden h-72 border border-white/10">
          <img src={IMG_TEAM} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/40 to-transparent" />

          <div className="absolute bottom-8 left-8">
            <h3 className="text-white font-bold text-2xl">
              Construindo o futuro dos dados climáticos
            </h3>
            <p className="text-gray-400 text-sm">
              Nexus · Plataforma de inteligência ambiental
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}