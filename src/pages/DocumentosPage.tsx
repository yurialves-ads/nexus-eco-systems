
    import { useState } from "react";
    import { motion } from "framer-motion";
    import {
      FileText,
      Search,
      FolderOpen,
      Eye,
      X,
    } from "lucide-react";

    type DocCategory =
      | "Especificações"
      | "Registros Internos";

    interface Documento {
      id: number;
      titulo: string;
      descricao: string;
      categoria: DocCategory;
      arquivo: string;
    }

    /* ==========================================================
      DOCUMENTOS
    ========================================================== */

    const documentos: Documento[] = [
      {
        id: 1,
        titulo: "ATA DA 1° REUNIÃO",
        descricao:
          "Registro oficial da primeira reunião do projeto Nexus, contendo alinhamentos iniciais, definição dos objetivos e decisões estratégicas.",
        categoria: "Registros Internos",
        arquivo: "/documentos/ATA DE REUNIÃO - 1.pdf",
      },

      {
        id: 2,
        titulo: "ATA DA 2° REUNIÃO",
        descricao:
          "Resumo das discussões realizadas pela equipe, acompanhamento das atividades e definição dos próximos passos do projeto.",
        categoria: "Registros Internos",
        arquivo: "/documentos/ATA DE REUNIÃO - 2.pdf",
      },

      {
        id: 3,
        titulo: "ATA DA 3° REUNIÃO",
        descricao:
          "Documento contendo decisões técnicas, evolução das tarefas em andamento e alinhamento entre os participantes.",
        categoria: "Registros Internos",
        arquivo: "/documentos/ATA DE REUNIÃO - 3.pdf",
      },

      {
        id: 4,
        titulo: "ATA DA 4° REUNIÃO",
        descricao:
          "Registro das definições do projeto, validação de entregas e acompanhamento das pendências identificadas.",
        categoria: "Registros Internos",
        arquivo: "/documentos/ATA DE REUNIÃO - 4.pdf",
      },

      {
        id: 5,
        titulo: "ATA DA 5° REUNIÃO",
        descricao:
          "Consolidação das decisões recentes, atualização do cronograma e planejamento das próximas atividades da equipe.",
        categoria: "Registros Internos",
        arquivo: "/documentos/ATA DE REUNIÃO - 5.pdf",
      },

      {
        id: 6,
        titulo: "Documento de Requisitos",
        descricao:
          "Levantamento completo dos requisitos funcionais e não funcionais da plataforma Nexus, incluindo regras de negócio, funcionalidades previstas e restrições do sistema.",
        categoria: "Especificações",
        arquivo: "/documentos/Documento de Requisitos - Nexus.pdf",
      },
    ];

    /* ==========================================================
      CATEGORIAS
    ========================================================== */

    const categories = [
      "Todos",
      "Especificações",
      "Registros Internos",
    ] as const;

    /* ==========================================================
      COMPONENTE PRINCIPAL
    ========================================================== */

    export function DocumentosPage() {
      // Categoria atualmente selecionada
      const [activeCategory, setActiveCategory] =
        useState<(typeof categories)[number]>("Todos");

      // Texto digitado na busca
      const [search, setSearch] = useState("");

      // PDF atualmente aberto
      const [selectedPdf, setSelectedPdf] =
        useState<Documento | null>(null);

      /* ========================================================
        FILTRO DE DOCUMENTOS
      ======================================================== */

      const filteredDocs = documentos.filter((doc) => {
        const termo = search.toLowerCase().trim();

        const matchesCategory =
          activeCategory === "Todos" ||
          doc.categoria === activeCategory;

        const matchesSearch =
          termo === "" ||
          doc.titulo.toLowerCase().includes(termo) ||
          doc.descricao.toLowerCase().includes(termo) ||
          doc.categoria.toLowerCase().includes(termo) ||
          doc.arquivo.toLowerCase().includes(termo);

        return matchesCategory && matchesSearch;
      });

      return (
        <div className="bg-[#070A12] min-h-screen">
          {/* =====================================================
              HERO
          ===================================================== */}

          <div className="relative pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-5 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-5">
                <FolderOpen className="w-4 h-4 text-emerald-400" />

                <span className="text-emerald-300 text-xs uppercase tracking-widest">
                  Repositório Técnico
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold text-white mb-4"
              >
                Centro de{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  Documentação
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                Acesse atas de reuniões, documentos de requisitos e
                demais registros relacionados ao desenvolvimento da
                plataforma Nexus.
              </motion.p>
            </div>
          </div>

          {/* =====================================================
              CONTEÚDO
          ===================================================== */}

          <div className="max-w-7xl mx-auto px-5 pb-20">
            {/* ===================================================
                BUSCA
            =================================================== */}

            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />

              <input
                type="text"
                placeholder="Buscar por ata, requisitos, reunião ou categoria..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Quantidade encontrada */}

            <div className="mb-8 text-sm text-gray-400">
              {filteredDocs.length} documento(s) encontrado(s)
            </div>

            {/* ===================================================
                FILTROS
            =================================================== */}

            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-emerald-500 text-black font-semibold"
                      : "border border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ===================================================
                GRID DE DOCUMENTOS
            =================================================== */}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredDocs.map((doc) => (
                <motion.div
                  key={doc.id}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
                >
                  {/* Ícone */}

                  <FileText className="w-10 h-10 text-emerald-400 mb-4" />

                  {/* Título */}

                  <h3 className="text-white font-semibold text-lg mb-2">
                    {doc.titulo}
                  </h3>

                  {/* Descrição */}

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {doc.descricao}
                  </p>

                  {/* Categoria */}

                  <span className="inline-block text-xs bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full mb-5">
                    {doc.categoria}
                  </span>

                  {/* Botão */}

                  <button
                    onClick={() => setSelectedPdf(doc)}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-black font-semibold py-3 rounded-xl hover:bg-emerald-400 transition"
                  >
                    <Eye size={18} />
                    Ler Documento
                  </button>
                </motion.div>
              ))}
            </div>

            {/* ===================================================
                MENSAGEM SEM RESULTADOS
            =================================================== */}

            {filteredDocs.length === 0 && (
              <div className="mt-10 text-center text-gray-500 border border-white/10 rounded-2xl p-10 bg-white/[0.02]">
                Nenhum documento encontrado para sua pesquisa.
              </div>
            )}

            {/* ===================================================
                MODAL PDF
            =================================================== */}

            {selectedPdf && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5">
                <div className="w-full max-w-6xl h-[90vh] bg-[#111827] rounded-2xl overflow-hidden">
                  {/* Cabeçalho */}

                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                    <h2 className="text-white font-semibold">
                      {selectedPdf.titulo}
                    </h2>

                    <button
                      onClick={() => setSelectedPdf(null)}
                      className="text-gray-400 hover:text-white transition"
                    >
                      <X />
                    </button>
                  </div>

                  {/* Visualizador PDF */}

                  <iframe
                    src={selectedPdf.arquivo}
                    title={selectedPdf.titulo}
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
