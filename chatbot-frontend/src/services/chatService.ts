import axios from "axios";

const API_GEMINI = "http://localhost:8080/api/chat/gemini";
const API_N8N = "http://localhost:8080/api/chat/n8n";

export const sendMessageGemini = async (prompt: string, userKey: string) => {
  const res = await axios.post(API_GEMINI, { prompt, userKey });
  return res.data;
};

export const sendMessageN8N = async (prompt: string, userKey: string) => {
  const res = await axios.post(API_N8N, { prompt, userKey });
  return res.data;
};
