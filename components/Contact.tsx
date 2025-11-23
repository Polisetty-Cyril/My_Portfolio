import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { PORTFOLIO_DATA } from '../constants';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
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
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-8">
          I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-2xl border border-stone-200">
        <p className="text-lg mb-4"><strong>Email:</strong> <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-amber-600 hover:underline">{PORTFOLIO_DATA.contact.email}</a></p>
        <p className="text-lg mb-8"><strong>Phone:</strong> {PORTFOLIO_DATA.contact.phone}</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-stone-700">Name</label>
            <input type="text" id="name" className="w-full bg-stone-100 border border-stone-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-stone-700">Email</label>
            <input type="email" id="email" className="w-full bg-stone-100 border border-stone-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-stone-700">Message</label>
            <textarea id="message" rows={4} className="w-full bg-stone-100 border border-stone-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
          </div>
          <motion.button 
            type="submit"
            className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-4 rounded-md transition-colors"
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