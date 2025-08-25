'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="ml-3 text-xl font-playfair font-semibold text-gray-800">
            Sarah
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 btn-primary rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg glass"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'top-3 rotate-45' : 'top-1'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'top-3'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-pink-500 font-medium py-2 text-left transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-pink-500 font-medium py-2 text-left transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-pink-500 font-medium py-2 text-left transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left py-2 text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
