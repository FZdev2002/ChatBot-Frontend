import { useState } from "react";
import { v4 as uuid } from "uuid";
import type { ChatMessage } from "../models/ChatMessage";
import { sendMessage } from "../services/chatService";

export const useChat = (provider: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => uuid());

  const send = async (text: string) => {
    const newMessage: ChatMessage = {
      id: uuid(),
      from: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, newMessage]);
    setLoading(true);

    console.log("MODELO SELECCIONADO:", provider);

    try {
      const result = await sendMessage(text, sessionId, provider);

      const botMessage: ChatMessage = {
        id: uuid(),
        from: "bot",
        text: result.output,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          id: uuid(),
          from: "bot",
          text: "⚠️ Backend no disponible.",
          timestamp: Date.now(),
        },
      ]);
    }

    setLoading(false);
  };

  return { messages, send, loading };
};
