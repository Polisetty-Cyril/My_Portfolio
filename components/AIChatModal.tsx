import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { runChatQuery } from '../services/ragChatService';
import type { ChatMessage } from '../types';
import { UserIcon } from './icons/UserIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface AIChatModalProps {
  onClose: () => void;
}

const AIChatModal: React.FC<AIChatModalProps> = ({ onClose }) => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSubmit = async (prompt?: string) => {
    const query = prompt || userInput;
    if (!query || isLoading) return;

    setIsLoading(true);
    setUserInput('');
    setChatHistory((prev) => [...prev, { sender: 'user', text: query }]);

    const modelResponse = await runChatQuery(query, PORTFOLIO_DATA.aiChat.bioContext);
    
    setChatHistory((prev) => [...prev, { sender: 'model', text: modelResponse }]);
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl h-full max-h-[85vh] sm:max-h-[80vh] flex flex-col border border-gray-200 mx-2 sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">AI Assistant</h3>
            <p className="text-sm text-gray-600 mt-1">Ask me anything about Cyril</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center transition-all text-2xl"
          >
            ×
          </button>
        </header>

        <div ref={chatContainerRef} className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
          {chatHistory.map((msg, index) => (
            <motion.div 
              key={index} 
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.sender === 'model' && (
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-2 rounded-full flex-shrink-0 shadow-lg">
                  <SparklesIcon />
                </div>
              )}
              <div className={`p-4 rounded-2xl max-w-[85%] sm:max-w-md text-sm sm:text-base shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}>
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              </div>
              {msg.sender === 'user' && (
                <div className="bg-gray-200 text-gray-700 p-2 rounded-full flex-shrink-0 shadow-sm">
                  <UserIcon />
                </div>
              )}
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-2 rounded-full shadow-lg">
                <SparklesIcon />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
           {chatHistory.length === 0 && (
             <div className="text-center text-gray-600 p-6 sm:p-10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full mb-4 shadow-lg">
                    <SparklesIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Start a Conversation</h4>
                  <p className="text-sm text-gray-600">Ask about skills, experience, or career goals</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {PORTFOLIO_DATA.aiChat.starterPrompts.map((prompt, i) => (
                     <motion.button 
                       key={i} 
                       onClick={() => handleSubmit(prompt)} 
                       className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-full transition-all border border-gray-200 text-gray-700 hover:shadow-md"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                     >
                       {prompt}
                     </motion.button>
                  ))}
                </div>
             </div>
           )}
        </div>

        <footer className="p-4 sm:p-6 border-t border-gray-200 flex-shrink-0 bg-white">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="relative">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about projects, skills, or experience..."
                className="w-full bg-gray-50 border-0 rounded-full p-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base text-gray-900 placeholder-gray-500"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !userInput} 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-2.5 rounded-full disabled:bg-gray-400 hover:bg-black transition-all shadow-lg disabled:shadow-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </form>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default AIChatModal;