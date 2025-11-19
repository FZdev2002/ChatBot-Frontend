export interface ChatMessage {
  id: string;
  from: "user" | "bot";
  text: string;
  source?: "gemini" | "n8n";
  timestamp: number;
}
