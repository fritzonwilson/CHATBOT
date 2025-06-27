import React from 'react';
import ChatBot from '../components/ChatBot';

const Chat = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <h2 className="text-2xl font-semibold mb-4">Chat Page</h2>
    <ChatBot />
  </div>
);

export default Chat; 