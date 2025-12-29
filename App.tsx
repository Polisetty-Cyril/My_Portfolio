import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { SearchIcon } from './components/icons/SearchIcon';
import AIChatModal from './components/AIChatModal';

export type Section = 'hero' | 'resume' | 'projects' | 'contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('hero');
  const [isChatOpen, setChatOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'resume':
        return <Resume onBack={() => setActiveSection('hero')} />;
      case 'projects':
        return <Projects onBack={() => setActiveSection('hero')} />;
      case 'contact':
        return <Contact onBack={() => setActiveSection('hero')} />;
      case 'hero':
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-[#FDFBF8] min-h-screen text-stone-800 font-sans flex flex-col">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />

      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-stone-800 text-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 hover:bg-stone-900 transition-all duration-300 z-50"
        aria-label="Ask AI assistant"
      >
        <SearchIcon />
      </button>

      <AnimatePresence>
        {isChatOpen && <AIChatModal onClose={() => setChatOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;