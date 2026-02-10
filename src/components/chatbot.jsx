 import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCcw, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { findResponse } from '../data/botData';
import '../styles/chatbot-widget.css';

function Chatbot({ onClose, onDisable }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "I am your OMNI TECH event information assistant. I can help you with details about technical events, non-technical events, workshops, food, and registration packages. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = findResponse(input);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot-container">
      <header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Bot color="#39ff14" size={32} />
          <h1>OMNI TECH BOT</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="status-indicator">
            <div className="pulse"></div>
            <span>ONLINE</span>
          </div>
          <button
            className="chatbot-header-btn"
            onClick={onDisable}
            title="Disable Chatbot"
          >
            <RefreshCcw size={18} />
          </button>
          <button
            className="chatbot-header-btn"
            onClick={onClose}
            title="Close"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      <main className="chat-window" ref={scrollRef}>
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', fontSize: '0.75rem', opacity: 0.8 }}>
                {msg.isBot ? <Bot size={14} /> : <User size={14} />}
                <span>{msg.isBot ? 'OMNI TECH Bot' : 'User'}</span>
              </div>
              {msg.text}
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="message bot-message"
              style={{ display: 'flex', gap: '4px', padding: '12px 20px' }}
            >
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <div className="input-area">
        <div className="input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
          />
        </div>
        <button className="send-btn" onClick={handleSend}>
          <Send size={20} color="#000" />
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
