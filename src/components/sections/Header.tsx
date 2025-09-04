import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ResumeData } from '../../types';

interface NavigationLink {
  id: string;
  label: string;
  href?: string;
}

function generateNavigationLinks(data?: ResumeData): NavigationLink[] {
  const baseLinks: NavigationLink[] = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ];

  const contactLinks: NavigationLink[] = [];
  if (data?.contact?.github) {
    contactLinks.push({ id: 'github', label: 'GitHub', href: data.contact.github });
  }
  if (data?.contact?.linkedin) {
    contactLinks.push({ id: 'linkedin', label: 'LinkedIn', href: data.contact.linkedin });
  }

  return [...baseLinks, ...contactLinks];
}

interface DesktopNavigationProps {
  links: NavigationLink[];
}

function DesktopNavigation({ links }: DesktopNavigationProps) {
  return (
    <nav className="hidden md:flex space-x-6">
      {links.map((link) => (
        <motion.a
          key={link.id}
          href={link.href ?? `#${link.id}`}
          className="text-green-400 hover:text-green-100 transition-colors font-mono"
          whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(0,255,0,0.7)" }}
          {...(link.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link.label}
        </motion.a>
      ))}
    </nav>
  );
}

interface MobileNavigationProps {
  links: NavigationLink[];
  isOpen: boolean;
  onClose: () => void;
}

function MobileNavigation({ links, isOpen, onClose }: MobileNavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center space-y-4 py-4 z-20 border-t border-green-800/30"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href ?? `#${link.id}`}
              className="text-green-400 hover:text-green-100 font-mono text-lg transition-colors"
              onClick={onClose}
              {...(link.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface HeaderProps {
  data?: ResumeData;
}

export function Header({ data }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = generateNavigationLinks(data);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/70 backdrop-blur-sm border-b border-green-800/30">
      {/* Subtle matrix lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 border-t border-green-800/10 animate-pulse"></div>
        <div className="absolute inset-0 border-l border-green-800/10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <motion.div
          className="text-green-400 font-mono font-bold text-xl cursor-pointer select-none"
          whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(0,255,0,0.7)" }}
        >
          {""}
        </motion.div>

        <DesktopNavigation links={links} />

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-green-400 hover:text-green-100 focus:outline-none font-mono text-2xl"
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </div>

      <MobileNavigation 
        links={links} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}