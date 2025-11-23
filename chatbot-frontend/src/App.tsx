import { useState } from "react";
import ChatPage from "./pages/ChatPage";
import ModelSelector from "./components/ModelSelector";

function App() {
  const [provider, setProvider] = useState("n8n"); // modelo default

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 flex flex-col">

      <header className="w-full py-4 px-8 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          AI ChatBot
        </h1>
      </header>

      <section className="text-center py-16 px-8 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <h2 className="text-4xl font-extrabold mb-4">
          Asistente Virtual para Consultas y Gestión de Productos
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Conversa con IA y obtén información clara sobre tu catálogo de productos.
        </p>
      </section>

      <ModelSelector provider={provider} onChange={setProvider} />

      <section className="flex-1 flex justify-center items-start py-10 px-4">
        <div className="w-full max-w-3xl">
          <ChatPage provider={provider} />
        </div>
      </section>

      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-700">
        © 2025 – Proyecto Web ChatBot | Flavia Andrea Nogales, Henry Ricardo Landivar Osuna y Fabio Cuéllar
      </footer>
    </div>
  );
}

export default App;
