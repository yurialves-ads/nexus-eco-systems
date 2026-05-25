import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Code2,
  Cpu,
  Database,
  Activity,
  Layers,
} from "lucide-react";

/* =========================================================
 * ESTATÍSTICAS
 * ========================================================= */

const stats = [
  {
    value: "Inovação",
    label: "Arquitetura de Sistemas Inteligentes",
    icon: Sparkles,
  },
  {
    value: "Programação",
    label: "Engenharia de Software Sustentável",
    icon: Code2,
  },
  {
    value: "Monitoramento",
    label: "Observabilidade Contínua de Sistemas",
    icon: ShieldCheck,
  },
];

/* =========================================================
 * COMPONENTE HERO
 * ========================================================= */

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center pt-28">

      {/* BACKGROUND AMBIENTAL */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/15 rounded-full blur-[160px]"
        />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-green-400/10 rounded-full blur-[150px]"
        />
      </div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* PARTÍCULAS TÉCNICAS */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -35, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + i * 0.2, repeat: Infinity }}
          className="absolute rounded-full bg-emerald-400"
          style={{
            width: `${2 + i * 0.25}px`,
            height: `${2 + i * 0.25}px`,
            left: `${5 + i * 5.5}%`,
            top: `${8 + i * 4.8}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">

          {/* ESQUERDA */}
          <div>

            <h1 className="text-[4rem] sm:text-[5.8rem] lg:text-[7.2rem] font-black leading-[0.88] tracking-[-0.07em] text-white">
              SOFTWARE
              <span className="block text-emerald-400">SUSTENTÁVEL</span>
              PARA O FUTURO
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl">
              A <span className="text-white font-semibold">Nexus</span> desenvolve sistemas de engenharia digital focados em sustentabilidade, performance e inteligência computacional.
            </p>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden">

              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center justify-center px-6 py-7 ${
                      index !== stats.length - 1
                        ? "border-r border-white/10"
                        : ""
                    }`}
                  >
                    <Icon className="w-5 h-5 text-emerald-400 mb-3" />

                    <span className="text-2xl font-black text-white">
                      {item.value}
                    </span>

                    <span className="text-xs text-zinc-500 mt-1 text-center">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DIREITA — CONTROL PANEL REALISTA */}
          <div className="relative hidden lg:flex justify-center items-center min-h-[560px]">

            {/* GLOW BASE */}
            <div className="absolute w-[520px] h-[520px] bg-emerald-500/10 blur-[140px] rounded-full" />

            {/* ANÉIS SISTÊMICOS */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute w-[540px] h-[540px] border border-emerald-500/10 rounded-full"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute w-[380px] h-[380px] border border-white/10 rounded-full"
            />

            {/* PAINEL CENTRAL */}
            <div className="relative z-10 w-[360px] h-[460px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col gap-6">

              {/* HEADER STATUS */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <Activity className="w-4 h-4" />
                  SYSTEM STATUS
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* STREAM VISUAL */}
              <div className="space-y-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-2 w-full bg-white/10 rounded-full overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{
                        duration: 2.2 + i * 0.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-full w-1/2 bg-emerald-400/40 rounded-full"
                    />
                  </div>
                ))}
              </div>

              {/* MODULE GRID */}
              <div className="grid grid-cols-2 gap-3 mt-auto">

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <Cpu className="w-4 h-4 text-emerald-400 mb-2" />
                  <p className="text-xs text-zinc-400">ENGINE CORE</p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <Database className="w-4 h-4 text-emerald-400 mb-2" />
                  <p className="text-xs text-zinc-400">DATA PIPE</p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <Layers className="w-4 h-4 text-emerald-400 mb-2" />
                  <p className="text-xs text-zinc-400">ARCH LAYER</p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <Activity className="w-4 h-4 text-emerald-400 mb-2" />
                  <p className="text-xs text-zinc-400">OBSERVE</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}