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
      className={`rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg shadow-lg ${color}`}
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
    <div className="container mx-auto px-3 sm:px-4 pt-16 sm:pt-20 pb-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white flex-shrink-0"
        >
          <img src={PORTFOLIO_DATA.profileImage} alt={PORTFOLIO_DATA.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="text-center lg:text-left max-w-lg w-full"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">Hello</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4">A Bit About Me</h2>
          <p className="text-sm sm:text-base text-stone-600 mb-6 sm:mb-8 px-2 sm:px-0">{PORTFOLIO_DATA.about}</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
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