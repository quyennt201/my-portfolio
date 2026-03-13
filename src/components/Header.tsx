import { MenuIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              href={`#${section.id}`}
              className="text-md font-medium text-white hover:text-purple-400 transition-colors"
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button className="md:hidden text-gray-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full backdrop-blur-xl bg-background/95 border-b border-white/10"
          >
            <div className="flex flex-col gap-6 p-6">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className="text-left text-lg cursor-pointer font-medium text-white hover:text-purple-400 transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
