import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { TwitterIcon } from './icons/TwitterIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex-shrink-0 border-t border-stone-200 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-stone-500">
        <div>
          <h3 className="font-bold text-stone-800 mb-2">Phone</h3>
          <p>{PORTFOLIO_DATA.contact.phone}</p>
        </div>
        <div>
          <h3 className="font-bold text-stone-800 mb-2">Email</h3>
          <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="hover:text-stone-900 transition-colors">{PORTFOLIO_DATA.contact.email}</a>
        </div>
        <div>
          <h3 className="font-bold text-stone-800 mb-2">Follow Me</h3>
          <div className="flex space-x-4">
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors"><LinkedinIcon /></a>
            <a href={PORTFOLIO_DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors"><TwitterIcon /></a>
          </div>
        </div>
        <div className="md:text-right">
          <p>&copy; {currentYear} By {PORTFOLIO_DATA.name}</p>
          <p>Powered and secured by React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;