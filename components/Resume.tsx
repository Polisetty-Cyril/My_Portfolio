import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface ResumeProps {
  onBack: () => void;
}

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="bg-stone-800 text-white rounded-lg px-6 py-3 inline-block mb-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  </div>
);

const Resume: React.FC<ResumeProps> = ({ onBack }) => {
  const { resume: resumeData, name, contact } = PORTFOLIO_DATA;

  return (
    <div className="container mx-auto px-4 pt-20">
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 text-amber-600 hover:text-amber-700 transition-colors"
        whileHover={{ x: -5 }}
      >
        <ArrowLeftIcon />
        Back to Home
      </motion.button>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Scrollable Content */}
        <div className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-stone-800 text-white p-8 rounded-2xl mb-8 shadow-2xl">
              <h1 className="text-5xl font-extrabold">{name}</h1>
            </div>

            <div className="bg-[#EAE6E1] p-8 rounded-2xl mb-8 shadow-lg">
              <p className="text-stone-700">{resumeData.summary}</p>
            </div>

            <ResumeSection title="Experience">
              {resumeData.experience.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md mb-4 border border-stone-200">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-lg text-stone-900">{job.title}</h3>
                    <p className="text-sm text-stone-500">{job.date}</p>
                  </div>
                  <h4 className="font-semibold text-stone-700 mb-2">{job.company}</h4>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    {job.description.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </ResumeSection>
            
            <ResumeSection title="Education & Certifications">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md mb-4 border border-stone-200">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-lg text-stone-900">{edu.degree}</h3>
                    <p className="text-sm text-stone-500">{edu.date}</p>
                  </div>
                   <h4 className="font-semibold text-stone-700">{edu.school}</h4>
                   <p className="text-stone-600">{edu.details}</p>
                </div>
              ))}
            </ResumeSection>

            <ResumeSection title="Skills">
               <div className="flex flex-wrap gap-3">
                 {resumeData.skills.map((skill, index) => (
                   <div key={index} className="bg-white py-2 px-4 rounded-full shadow-sm border border-stone-200 text-stone-700 font-medium">
                     {skill}
                   </div>
                 ))}
               </div>
            </ResumeSection>
            
            <ResumeSection title="Notable Achievements">
               {resumeData.achievements.map((ach, index) => (
                 <div key={index} className="bg-white p-6 rounded-xl shadow-md mb-4 border border-stone-200">
                   <h3 className="font-bold text-lg text-stone-900 mb-1">{ach.title}</h3>
                   <h4 className="font-semibold text-stone-600 mb-2">{ach.source}</h4>
                   <p className="text-stone-600">{ach.description}</p>
                 </div>
               ))}
            </ResumeSection>

            <ResumeSection title="Reach Out for Opportunities">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
                  <p className="text-stone-700 mb-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to contact me.</p>
                  <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Name" className="w-full bg-stone-100 border-stone-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"/>
                      <input type="email" placeholder="Email" className="w-full bg-stone-100 border-stone-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"/>
                      <textarea placeholder="Message" rows={4} className="w-full bg-stone-100 border-stone-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                      <motion.button 
                        type="submit"
                        className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-4 rounded-md transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Submit
                      </motion.button>
                  </form>
              </div>
            </ResumeSection>

          </motion.div>
        </div>

        {/* Right Sticky Image */}
        <div className="hidden lg:block lg:w-1/3">
          <motion.div 
            className="sticky top-24"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={resumeData.profileImage} 
              alt={name} 
              className="w-full h-auto object-cover rounded-2xl shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;