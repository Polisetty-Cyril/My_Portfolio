import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GithubIcon } from './icons/GithubIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex-shrink-0 border-t border-stone-200 bg-white/50 mt-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-stone-500">
        <div>
          <h3 className="font-bold text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
          <p className="break-words">{PORTFOLIO_DATA.contact.phone}</p>
        </div>
        <div>
          <h3 className="font-bold text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
          <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="hover:text-stone-900 transition-colors break-all">{PORTFOLIO_DATA.contact.email}</a>
        </div>
        <div>
          <h3 className="font-bold text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">Follow Me</h3>
          <div className="flex space-x-3 sm:space-x-4">
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors"><LinkedinIcon /></a>
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors"><GithubIcon /></a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 md:text-right text-center">
          <p>&copy; {currentYear} By {PORTFOLIO_DATA.name}</p>
          <p className="mt-1">Powered and secured by React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;