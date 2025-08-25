'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div
              className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-purple-300 rounded-full animate-spin mx-auto"
              style={{ animationDelay: '-0.5s', animationDuration: '1s' }}
            ></div>
          </div>
          <p className="text-gray-600 font-medium animate-pulse">
            Loading beautiful things...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
