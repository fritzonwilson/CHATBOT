import React, { useState, useRef, useEffect } from 'react';
import { sendMessage } from '../services/mlApi';

// ChatBot component: A simple chat UI for hackathon use
const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);
    try {
      // Call ML API (replace with your backend endpoint)
      const botReply = await sendMessage(input);
      setMessages((msgs) => [...msgs, { sender: 'bot', text: botReply }]);
    } catch (err) {
      setError('Failed to get response.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-3 py-2 rounded-lg text-sm ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded disabled:opacity-50"
          onClick={handleSend}
          disabled={loading || !input.trim()}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;

// To use: import ChatBot from '../components/ChatBot'; and include <ChatBot /> in your page.
// The sendMessage function should be implemented in src/services/mlApi.js.
// For hackathons, keep UI simple and focus on core chat logic. 