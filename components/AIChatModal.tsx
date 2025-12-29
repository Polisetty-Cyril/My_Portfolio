import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { runChatQuery } from '../services/geminiService';
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
      className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl h-full max-h-[85vh] sm:max-h-[80vh] flex flex-col border border-stone-200 mx-2 sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-3 sm:p-4 border-b border-stone-200 flex justify-between items-center flex-shrink-0">
          <h3 className="text-base sm:text-lg font-bold">Ask me anything!</h3>
          <button onClick={onClose} className="text-stone-500 hover:text-stone-800 text-2xl leading-none px-2">×</button>
        </header>

        <div ref={chatContainerRef} className="flex-grow p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4 bg-stone-50/50">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`flex items-start gap-2 sm:gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'model' && <div className="bg-amber-500 text-white p-1.5 sm:p-2 rounded-full flex-shrink-0"><SparklesIcon /></div>}
              <div className={`p-2 sm:p-3 rounded-xl max-w-[80%] sm:max-w-md text-sm sm:text-base ${msg.sender === 'user' ? 'bg-stone-200' : 'bg-stone-800 text-white'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
              {msg.sender === 'user' && <div className="bg-stone-200 text-stone-600 p-1.5 sm:p-2 rounded-full flex-shrink-0"><UserIcon /></div>}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="bg-amber-500 text-white p-1.5 sm:p-2 rounded-full"><SparklesIcon /></div>
              <div className="p-2 sm:p-3 rounded-xl bg-stone-800">
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0s]"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
           {chatHistory.length === 0 && (
             <div className="text-center text-stone-500 p-4 sm:p-8">
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm">You can ask about my skills, experience, or career goals. Try one of these prompts:</p>
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {PORTFOLIO_DATA.aiChat.starterPrompts.map((prompt, i) => (
                     <button key={i} onClick={() => handleSubmit(prompt)} className="bg-stone-100 hover:bg-stone-200 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full transition-colors border border-stone-200">{prompt}</button>
                  ))}
                </div>
             </div>
           )}
        </div>

        <footer className="p-3 sm:p-4 border-t border-stone-200 flex-shrink-0">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="relative">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="w-full bg-stone-100 border border-stone-300 rounded-full p-2 sm:p-3 pl-3 sm:pl-4 pr-10 sm:pr-12 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !userInput} className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 bg-stone-800 text-white p-1.5 sm:p-2 rounded-full disabled:bg-stone-400 hover:bg-stone-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </form>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default AIChatModal;