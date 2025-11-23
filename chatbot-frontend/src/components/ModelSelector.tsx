import React from "react";

interface Props {
  provider: string;
  onChange: (p: string) => void;
}

export default function ModelSelector({ provider, onChange }: Props) {
  return (
    <div className="flex gap-4 justify-center my-4">
      <button
        onClick={() => onChange("n8n")}
        className={`px-6 py-2 rounded-xl border 
        ${provider === "n8n" 
          ? "bg-blue-600 text-white border-blue-700" 
          : "bg-[#1e293b] text-gray-300 border-gray-600 hover:bg-[#334155]"}`}
      >
        Modelo N8N
      </button>

      <button
        onClick={() => onChange("gemini")}
        className={`px-6 py-2 rounded-xl border 
        ${provider === "gemini" 
          ? "bg-blue-600 text-white border-blue-700" 
          : "bg-[#1e293b] text-gray-300 border-gray-600 hover:bg-[#334155]"}`}
      >
        Modelo Gemini
      </button>
    </div>
  );
}
