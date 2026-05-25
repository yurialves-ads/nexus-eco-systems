import { createHashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

import { HomePage } from "./pages/HomePage";
import { HistoriaPage } from "./pages/HistoriaPage";
import { FotosPage } from "./pages/FotosPage";
import { MissaoPage } from "./pages/MissaoPage";
import { DocumentosPage } from "./pages/DocumentosPage";

export const router = createHashRouter([
    {
        path: "/",
        Component: Layout,
        children: [
        {
            index: true,
            Component: HomePage,
        },

        {
            path: "historia",
            Component: HistoriaPage,
        },

        {
            path: "fotos",
            Component: FotosPage,
        },

        {
            path: "missao",
            Component: MissaoPage,
        },

        {
            path: "documentos",
            Component: DocumentosPage,
        },
        
        ],
    },
]);