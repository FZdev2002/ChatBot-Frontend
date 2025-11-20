import axios from "axios";

const API_URL = "http://localhost:8080/chat";

export const sendMessage = async (prompt: string, sessionId: string) => {
  const res = await axios.post(API_URL, {
    chatInput: prompt,
    sessionId: sessionId,
  });

  return res.data;
};
