// Importa a função para criar a raiz da aplicação React
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicação
import App from "./App.tsx";

// Importa os estilos globais
import "./styles/index.css";

// Seleciona o elemento com id "root" no HTML
const rootElement = document.getElementById("root")!;

// Cria a raiz da aplicação React
const root = createRoot(rootElement);

// Renderiza o App dentro da raiz
root.render(
  <App />
);