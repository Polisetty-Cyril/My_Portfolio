import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { PORTFOLIO_DATA } from '../constants';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
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
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
          I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl border border-stone-200">
        <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4"><strong>Email:</strong> <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-amber-600 hover:underline break-all">{PORTFOLIO_DATA.contact.email}</a></p>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8"><strong>Phone:</strong> {PORTFOLIO_DATA.contact.phone}</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="name" className="block mb-1.5 sm:mb-2 text-stone-700 text-sm sm:text-base">Name</label>
            <input type="text" id="name" className="w-full bg-stone-100 border border-stone-300 rounded-md p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base" />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="email" className="block mb-1.5 sm:mb-2 text-stone-700 text-sm sm:text-base">Email</label>
            <input type="email" id="email" className="w-full bg-stone-100 border border-stone-300 rounded-md p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base" />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="message" className="block mb-1.5 sm:mb-2 text-stone-700 text-sm sm:text-base">Message</label>
            <textarea id="message" rows={4} className="w-full bg-stone-100 border border-stone-300 rounded-md p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"></textarea>
          </div>
          <motion.button 
            type="submit"
            className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-2.5 sm:py-3 px-4 rounded-md transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;