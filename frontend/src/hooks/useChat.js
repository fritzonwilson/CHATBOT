import { useState } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const sendMessage = (msg) => setMessages((prev) => [...prev, msg]);
  return { messages, sendMessage };
} 