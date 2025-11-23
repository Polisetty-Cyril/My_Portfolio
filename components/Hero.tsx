import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../App';
import { PORTFOLIO_DATA } from '../constants';

interface HeroProps {
  setActiveSection: (section: Section) => void;
}

const CircleButton: React.FC<{
  label: string;
  color: string;
  onClick: () => void;
}> = ({ label, color, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`rounded-full w-32 h-32 md:w-36 md:h-36 flex items-center justify-center text-white font-bold text-lg shadow-lg ${color}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {label}
    </motion.button>
  );
};

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white"
        >
          <img src={PORTFOLIO_DATA.profileImage} alt={PORTFOLIO_DATA.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="text-center md:text-left max-w-lg"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-2">Hello</h1>
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">A Bit About Me</h2>
          <p className="text-stone-600 mb-8">{PORTFOLIO_DATA.about}</p>

          <div className="flex justify-center md:justify-start space-x-4">
            <CircleButton label="Resume" color="bg-yellow-500" onClick={() => setActiveSection('resume')} />
            <CircleButton label="Projects" color="bg-red-500" onClick={() => setActiveSection('projects')} />
            <CircleButton label="Contact" color="bg-cyan-500" onClick={() => setActiveSection('contact')} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;