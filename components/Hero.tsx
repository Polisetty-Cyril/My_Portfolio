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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-8 border-gray-100 flex-shrink-0"
        >
          <img src={PORTFOLIO_DATA.profileImage} alt={PORTFOLIO_DATA.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="text-center lg:text-left max-w-2xl w-full"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-4">Hello</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">A Bit About Me</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 px-2 sm:px-0">{PORTFOLIO_DATA.about}</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.button
              onClick={() => setActiveSection('resume')}
              className="px-8 py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-full shadow-lg transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.button>
            <motion.button
              onClick={() => setActiveSection('projects')}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full shadow-lg border-2 border-gray-200 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              See Projects
            </motion.button>
            <motion.button
              onClick={() => setActiveSection('contact')}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full shadow-lg border-2 border-gray-200 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Hero;