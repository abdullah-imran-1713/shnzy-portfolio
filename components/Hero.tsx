'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState<number>(0);
  const texts = [
    'UI/UX Designer',
    'Brand Strategist',
    'Creative Thinker',
    'Digital Artist',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-6 border border-white/20">
              ✨ Available for new projects
            </div>

            <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-gray-800 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Shanzay
              </span>
            </h1>

            <div className="h-16 mb-8">
              <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 mb-2">
                A passionate{' '}
                <span className="font-semibold text-pink-500 transition-all duration-500">
                  {texts[currentText]}
                </span>
              </p>
              <p className="text-gray-500 max-w-lg mx-auto lg:mx-0">
                Creating beautiful, functional designs that tell stories and
                solve problems with a touch of magic ✨
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 btn-primary rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-gray-700 rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-12">
              <SocialLink href="#" icon="dribbble" />
              <SocialLink href="#" icon="behance" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="linkedin" />
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Background Shapes */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-400 rounded-[3rem] transform rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-[3rem] transform -rotate-3 opacity-20"></div>

                {/* Image */}
                <div className="relative w-full h-full bg-gradient-to-r from-pink-100 to-purple-100 rounded-[3rem] p-2 glass">
                  <div className="w-full h-full bg-gray-200 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                    {/* Placeholder for actual image */}
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl">👩‍💻</span>
                      </div>
                      <p className="text-gray-500 text-sm">Your Photo Here</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full float-animation"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full float-animation animation-delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full float-animation animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-transparent rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  icon: string;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  const getIcon = (iconName: string): string => {
    const icons: Record<string, string> = {
      dribbble: '🎨',
      behance: '🎯',
      instagram: '📷',
      linkedin: '💼',
    };
    return icons[iconName] || '🔗';
  };

  return (
    <a
      href={href}
      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/30"
    >
      {getIcon(icon)}
    </a>
  );
}
