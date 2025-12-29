import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-3 sm:px-4 pt-16 sm:pt-20 pb-8">
      <motion.button 
        onClick={onBack}
        className="flex items-center gap-2 mb-6 sm:mb-8 text-amber-600 hover:text-amber-700 transition-colors text-sm sm:text-base"
        whileHover={{ x: -5 }}
      >
        <ArrowLeftIcon />
        Back to Home
      </motion.button>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-stone-200 flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.04, y: -8, rotate: 1 }}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 flex-grow">{project.description}</p>
              <div className="mt-auto pt-3 sm:pt-4 border-t border-stone-100">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-amber-100 text-amber-800 text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;