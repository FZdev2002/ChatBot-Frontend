import axios from "axios";

const API_URL = "http://localhost:8080/chat";

export const sendMessage = async (prompt: string, sessionId: string, provider: string) => {
  console.log("Enviando al backend con provider:", provider);

  const res = await axios.post(API_URL, {
    chatInput: prompt,
    sessionId,
    provider,
  });

  return res.data;
};
