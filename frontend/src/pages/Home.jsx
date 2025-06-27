import React from 'react';
import ChatBot from '../components/ChatBot';

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <h1 className="text-3xl font-bold mb-4">Welcome to the Hackathon Chatbot!</h1>
    <ChatBot />
  </div>
);

export default Home; 