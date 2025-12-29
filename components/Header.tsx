import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../App';
import { PORTFOLIO_DATA } from '../constants';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const navItems: { id: Section; label: string }[] = [
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-40 flex justify-center px-2 sm:px-4">
      <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 backdrop-blur-md bg-white/50 border border-white/60 shadow-md rounded-full px-3 sm:px-4 md:px-6 py-2 max-w-full">
        <motion.div 
          className="text-base sm:text-lg md:text-xl font-bold cursor-pointer text-stone-800 hidden md:block whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveSection('hero')}
        >
          {PORTFOLIO_DATA.name}
        </motion.div>
        <nav className="flex items-center justify-center p-1 bg-stone-100 rounded-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`${
                activeSection === item.id ? "" : "hover:text-stone-600"
              } relative rounded-full px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-stone-800 transition focus-visible:outline-2 min-w-[60px] sm:min-w-[70px]`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white shadow-sm"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-20">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;