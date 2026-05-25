import { motion } from "framer-motion";

const solutions = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="3" stroke="#10B981" strokeWidth="2" />
        <line x1="4" y1="14" x2="32" y2="14" stroke="#10B981" strokeWidth="2" />
        <circle cx="8" cy="11" r="1.5" fill="#10B981" />
        <circle cx="12" cy="11" r="1.5" fill="#34D399" />
        <circle cx="16" cy="11" r="1.5" fill="#6EE7B7" />
      </svg>
    ),
    title: "Nexus Platform",
    description: "Plataforma central de processamento e integração de dados ambientais em tempo real."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L32 12V24L18 32L4 24V12L18 4Z" stroke="#10B981" strokeWidth="2" />
        <circle cx="18" cy="18" r="5" fill="#10B981" opacity="0.7" />
      </svg>
    ),
    title: "Climate Intelligence",
    description: "Processamento de dados climáticos para análise e geração de indicadores ambientais."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="6" width="24" height="24" rx="4" stroke="#10B981" strokeWidth="2" />
        <path d="M12 18L16 22L24 14" stroke="#10B981" strokeWidth="2" />
      </svg>
    ),
    title: "Dev Environment",
    description: "Ambiente integrado para desenvolvimento de soluções de software e sistemas climáticos."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <polyline points="4,28 12,18 20,22 28,10 32,14" stroke="#10B981" strokeWidth="2" />
        <circle cx="12" cy="18" r="2.5" fill="#10B981" />
        <circle cx="20" cy="22" r="2.5" fill="#34D399" />
        <circle cx="28" cy="10" r="2.5" fill="#6EE7B7" />
      </svg>
    ),
    title: "Data Analytics",
    description: "Análise avançada de dados ambientais para geração de insights operacionais."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" stroke="#10B981" strokeWidth="2" />
        <path d="M18 10V18L23 23" stroke="#10B981" strokeWidth="2" />
      </svg>
    ),
    title: "Certification System",
    description: "Sistema de validação e rastreabilidade de dados e processos ambientais."
  }
];

export function SolutionsSection() {
  return (
    <section className="bg-[#0B0F1A] py-20 sm:py-28 overflow-hidden" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Soluções da Plataforma
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto">
            Ecossistema tecnológico desenvolvido para processamento, análise e monitoramento de dados ambientais em escala global.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center p-6 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors mb-5">
                {sol.icon}
              </div>

              <h3 className="text-white mb-2 text-sm font-semibold group-hover:text-emerald-400 transition-colors">
                {sol.title}
              </h3>

              <p className="text-zinc-500 text-xs leading-relaxed">
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mb-12" />

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 text-black rounded-full font-semibold tracking-widest text-sm"
          >
            EXPLORAR PLATAFORMA
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}