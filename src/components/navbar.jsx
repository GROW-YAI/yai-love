import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Menu, X } from 'lucide-react';
import K from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setActiveSection(id); // Update active section on click
  };

  // Intersection Observer to track active section
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust for when a section is considered "visible"
    });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-primary via-softNeutral to-accent shadow-lg"
    >
      <div
        className="container mx-auto px-4 py-3 flex justify-between items-center relative"
        ref={menuRef}
      >
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => scrollToSection('home')}
        >
          <Droplet className="w-10 h-10 text-naturalBrown group-hover:text-secondary transition-colors duration-300 transform group-hover:rotate-12" />
          <h1 className="text-3xl font-handwritten tracking-wide text-secondary group-hover:text-naturalBrown transition-colors duration-300">
            Eggshell Elixir
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {K.NAVLINKS.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              whileHover={{ scale: 1.1, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 transition-all duration-300 group relative ${
                activeSection === link.id
                  ? 'text-naturalBrown font-bold'
                  : 'text-secondary/70 hover:text-secondary'
              }`}
            >
              {React.cloneElement(link.icon, {
                className: `w-5 h-5 group-hover:text-naturalBrown ${
                  activeSection === link.id ? 'text-naturalBrown' : ''
                }`,
              })}
              <span>{link.name}</span>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-naturalBrown transition-all duration-300 group-hover:w-full ${
                  activeSection === link.id ? 'w-full' : ''
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-secondary"
        >
          {isMenuOpen ? <X className="w-8 h-8 animate-spin" /> : <Menu className="w-8 h-8" />}
        </motion.button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-softNeutral shadow-2xl md:hidden"
            >
              {K.NAVLINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left p-4 flex items-center space-x-3 hover:bg-accent/20 transition-colors group ${
                    activeSection === link.id ? 'bg-accent/30' : ''
                  }`}
                >
                  {React.cloneElement(link.icon, {
                    className: `w-6 h-6 group-hover:text-naturalBrown ${
                      activeSection === link.id ? 'text-naturalBrown' : 'text-secondary'
                    }`,
                  })}
                  <span className="text-secondary group-hover:text-naturalBrown transition-colors">
                    {link.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
