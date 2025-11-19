import type { ChatMessage } from "../models/ChatMessage";

interface Props {
  message: ChatMessage;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.from === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 max-w-[70%] rounded-2xl shadow-md text-sm 
        ${isUser
          ? "bg-blue-600 text-white rounded-br-none"
          : "bg-[#334155] text-gray-200 border border-gray-700 rounded-bl-none"
        }`}
      >
        <p>{message.text}</p>

        {!isUser && message.source && (
          <p className="text-[10px] text-gray-400 mt-1">{message.source}</p>
        )}
      </div>
    </div>
  );
}
