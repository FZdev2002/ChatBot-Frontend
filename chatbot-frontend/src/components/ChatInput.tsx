import { useState } from "react";

interface Props {
  onSend: (msg: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: Props) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim().length === 0) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 px-4 py-2 rounded-xl bg-[#1e293b] border border-gray-600 text-gray-200 placeholder-gray-400 focus:ring focus:ring-blue-700/40 outline-none"
        placeholder="Escribe tu mensaje…"
        value={input}
        disabled={disabled}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        disabled={disabled}
        className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white disabled:opacity-40"
      >
        Enviar
      </button>
    </div>
  );
}
