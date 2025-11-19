import { useState } from "react";
import { v4 as uuid } from "uuid";
import type { ChatMessage } from "../models/ChatMessage";
import { sendMessageGemini, sendMessageN8N } from "../services/chatService";

export type ModelType = "gemini" | "n8n";

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState<ModelType>("gemini");
  const [userKey] = useState(() => uuid());

  const send = async (text: string) => {
    const newMessage: ChatMessage = {
      id: uuid(),
      from: "user",
      text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, newMessage]);
    setLoading(true);

    try {
      let result;

      if (model === "gemini") {
        result = await sendMessageGemini(text, userKey);
      } else {
        result = await sendMessageN8N(text, userKey);
      }

      const botMessage: ChatMessage = {
        id: uuid(),
        from: "bot",
        text: result.reply,
        source: result.source,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: uuid(),
        from: "bot",
        text: "⚠️ El backend no está disponible.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  return { messages, send, loading, model, setModel };
};
