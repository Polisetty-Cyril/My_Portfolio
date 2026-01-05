import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface ProjectsProps {
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Apple Style */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        <motion.button 
          onClick={onBack}
          className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
          whileHover={{ x: -5 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ArrowLeftIcon />
          <span className="text-sm font-medium">Back to Home</span>
        </motion.button>

        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with precision. Powered by innovation.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid - Masonry Style with Varying Sizes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto auto-rows-auto">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            // Define varying sizes for different cards
            const cardSizes = [
              'md:col-span-2 md:row-span-2', // Large card
              'md:col-span-1 md:row-span-1', // Small card
              'md:col-span-1 md:row-span-1', // Small card
              'md:col-span-1 md:row-span-2', // Tall card
              'md:col-span-2 md:row-span-1', // Wide card
            ];
            const sizeClass = cardSizes[index % cardSizes.length];
            
            // Varying image heights based on card size
            const imageHeights = [
              'h-96 md:h-[600px]', // Large
              'h-64 md:h-72',      // Small
              'h-64 md:h-72',      // Small
              'h-80 md:h-[500px]', // Tall
              'h-72 md:h-80',      // Wide
            ];
            const imageHeight = imageHeights[index % imageHeights.length];

            return (
              <motion.div
                key={project.id}
                className={`group relative ${sizeClass}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.12,
                  ease: [0.21, 0.45, 0.27, 0.9]
                }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-700 h-full flex flex-col"
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.5, ease: [0.21, 0.45, 0.27, 0.9] }}
                >
                  {/* Image Container with Parallax Effect */}
                  <div className={`relative ${imageHeight} overflow-hidden bg-gray-100`}>
                    <motion.img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Action Buttons - Apple Style */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 px-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl backdrop-blur-xl text-sm sm:text-base"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: hoveredId === project.id ? 0 : 20, 
                          opacity: hoveredId === project.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Demo
                      </motion.a>
                      <motion.a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900/90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl backdrop-blur-xl text-sm sm:text-base"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: hoveredId === project.id ? 0 : 20, 
                          opacity: hoveredId === project.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 1)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Source Code
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                    <motion.h3 
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                      layout
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies - Apple Pill Style */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ 
                            backgroundColor: 'rgb(17, 24, 39)', 
                            color: 'rgb(255, 255, 255)',
                            scale: 1.05
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;