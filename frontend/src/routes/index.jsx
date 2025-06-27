import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import About from '../pages/About';

const AppRoutes = () => (
  <Router>
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/">Home</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default AppRoutes; 