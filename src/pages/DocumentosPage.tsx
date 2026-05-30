import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  FolderOpen,
  
} from "lucide-react";

type DocCategory =
  | "Todos"
  | "Relatórios de Engenharia"
  | "Apresentações Técnicas"
  | "Especificações"
  | "Pesquisas"
  | "Registros Internos";

const categories: DocCategory[] = [
  "Todos",
  "Relatórios de Engenharia",
  "Apresentações Técnicas",
  "Especificações",
  "Pesquisas",
  "Registros Internos",
];

export function DocumentosPage() {
  const [activeCategory, setActiveCategory] =
    useState<DocCategory>("Todos");

  const [search, setSearch] = useState("");

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
            <FolderOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">
              Repositório Técnico
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
          >
            Centro de{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Documentação
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Repositório central de documentos técnicos da plataforma Nexus,
            incluindo arquitetura, especificações e relatórios de engenharia.
          </motion.p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">

        {/* SEARCH + INFO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar documentos técnicos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03]">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-400 text-sm">
              Documentação Técnica
            </span>
          </div>
        </motion.div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500 text-black font-semibold"
                  : "border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-center text-gray-500 text-sm border border-white/10 rounded-2xl p-10 bg-white/[0.02]">
          Módulo de visualização de documentos técnicos ativo.
          Cards disponíveis para integração.
        </div>

      </div>
    </div>
  );
}