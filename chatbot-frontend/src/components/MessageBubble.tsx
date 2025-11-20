import type { ChatMessage } from "../models/ChatMessage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  message: ChatMessage;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.from === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-1`}>
      <div
        className={`px-4 py-2 max-w-[70%] rounded-2xl shadow-md text-sm 
        ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-[#334155] text-gray-200 border border-gray-700 rounded-bl-none"
        }`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: (props) => (
              <p className="mb-1 leading-normal" {...props} />
            ),
            strong: (props) => <strong className="font-bold" {...props} />,
            ul: (props) => (
              <ul className="list-disc ml-4 mb-1 leading-normal" {...props} />
            ),
            li: (props) => (
              <li className="mb-0 leading-normal" {...props} />
            ),
          }}
        >
          {message.text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
