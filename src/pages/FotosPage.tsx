import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const photos = [
  { src: "", caption: "Equipe de Engenharia Nexus", category: "Time", size: "large" },
  { src: "", caption: "Arquitetura do Sistema em Planejamento", category: "Design de Sistema", size: "medium" },
  { src: "", caption: "Interface da Plataforma em Desenvolvimento", category: "Produto", size: "medium" },
  { src: "", caption: "Sessão de Desenvolvimento e Implementação", category: "Engenharia", size: "medium" },
  { src: "", caption: "Validação de Protótipos", category: "Testes", size: "medium" },
  { src: "", caption: "Módulo de Análise de Dados Climáticos", category: "Dados", size: "medium" },
];

export function FotosPage() {
  return (
    <div className="bg-[#070A12] min-h-screen">

      {/* HERO */}
      <div className="relative pt-32 pb-16 overflow-hidden">

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-5"
          >
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">
              Galeria da Plataforma
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
          >
            Construção da{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Nexus
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Registro visual do desenvolvimento da plataforma de tecnologia climática,
            arquitetura de sistemas e engenharia de software.
          </motion.p>

        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">

          {photos.map((photo, index) => (
            <motion.div
              key={photo.caption}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 ? "16/7" : "4/3" }}
            >

              {/* Placeholder visual */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm bg-gradient-to-br from-white/5 to-white/0">
                Imagem não carregada
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-80" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-300 mb-2 inline-block">
                  {photo.category}
                </span>

                <p className="text-white font-semibold text-sm">
                  {photo.caption}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}