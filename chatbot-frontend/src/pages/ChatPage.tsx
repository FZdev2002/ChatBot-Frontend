import MessageBubble from "../components/MessageBubble";
import ChatInput from "../components/ChatInput";
import { useChat } from "../hooks/useChat";

export default function ChatPage({ provider }: { provider: string }) {
  const { messages, send, loading } = useChat(provider);

  return (
    <div className="flex flex-col h-[550px] bg-[#1e293b] shadow-xl rounded-2xl overflow-hidden border border-gray-700">

      <div className="p-4 bg-[#334155] text-gray-200 border-b border-gray-600 text-center text-lg font-semibold">
        ChatBot Inteligente
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}

        {loading && (
          <p className="text-gray-400 italic text-sm">El bot está respondiendo…</p>
        )}
      </div>

      <div className="bg-[#0f172a] border-t border-gray-700 p-3">
        <ChatInput onSend={send} disabled={loading} />
      </div>
    </div>
  );
}
