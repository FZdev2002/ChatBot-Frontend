import { useState } from "react";
import type { ModelType } from "../hooks/useChat";

interface Props {
  model: ModelType;
  setModel: (m: ModelType) => void;
}

export default function ModelSelector({ model, setModel }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-left">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        Modelo: {model === "gemini" ? "Gemini" : "n8n"}
      </button>

      {open && (
        <div className="absolute top-12 right-0 bg-[#1e293b] border border-gray-700 rounded-lg shadow-xl w-40">
          <button
            onClick={() => { setModel("gemini"); setOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-blue-700/30 rounded-t-lg"
          >
            Gemini
          </button>

          <button
            onClick={() => { setModel("n8n"); setOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-blue-700/30 rounded-b-lg"
          >
            n8n
          </button>
        </div>
      )}
    </div>
  );
}
