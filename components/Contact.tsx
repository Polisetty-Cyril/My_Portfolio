import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { PORTFOLIO_DATA } from '../constants';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life. Let's start a conversation.
          </p>
        </motion.div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">EMAIL</p>
                    <a 
                      href={`mailto:${PORTFOLIO_DATA.contact.email}`} 
                      className="text-lg text-gray-900 hover:text-blue-600 transition-colors break-all"
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">PHONE</p>
                    <a 
                      href={`tel:${PORTFOLIO_DATA.contact.phone}`} 
                      className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {PORTFOLIO_DATA.contact.phone}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-3">CONNECT</p>
                    <div className="flex gap-4">
                      <motion.a 
                        href={PORTFOLIO_DATA.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>
                      <motion.a 
                        href={PORTFOLIO_DATA.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      NAME
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-50 border-0 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      EMAIL
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-50 border-0 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      MESSAGE
                    </label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full bg-gray-50 border-0 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 px-6 rounded-full transition-all shadow-lg"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;