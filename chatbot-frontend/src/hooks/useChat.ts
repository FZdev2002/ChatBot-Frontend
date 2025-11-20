import { useState } from "react";
import { v4 as uuid } from "uuid";
import type { ChatMessage } from "../models/ChatMessage";
import { sendMessage } from "../services/chatService";

export const useChat = () => {
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

    try {
      const result = await sendMessage(text, sessionId);

      const botMessage: ChatMessage = {
        id: uuid(),
        from: "bot",
        text: result.output,     // backend returns "output"
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

  return { messages, send, loading };
};
