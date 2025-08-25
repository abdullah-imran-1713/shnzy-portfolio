interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
}

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-3 text-2xl font-playfair font-semibold text-white">
                  Shanzay Asghar
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Creative designer passionate about crafting beautiful,
                meaningful experiences that connect brands with people.
                Let&apos;s create something amazing together! ✨
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <SocialLink href="#" icon="🎨" label="Dribbble" />
                <SocialLink href="#" icon="🎯" label="Behance" />
                <SocialLink href="#" icon="📷" label="Instagram" />
                <SocialLink href="#" icon="💼" label="LinkedIn" />
                <SocialLink href="#" icon="📧" label="Email" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">Brand Identity</li>
                <li className="text-gray-300">UI/UX Design</li>
                <li className="text-gray-300">Web Design</li>
                <li className="text-gray-300">Mobile App Design</li>
                <li className="text-gray-300">Illustration</li>
                <li className="text-gray-300">Consultation</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-6">
                Get design inspiration and updates delivered to your inbox
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Shanzay Asghar. Made with 💖 and lots of coffee
              </p>

              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <span className="text-white text-sm">↑</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/4 animate-bounce text-pink-300 opacity-30">
            💖
          </div>
          <div
            className="absolute bottom-0 left-1/2 animate-bounce text-purple-300 opacity-30"
            style={{ animationDelay: '0.5s' }}
          >
            ✨
          </div>
          <div
            className="absolute bottom-0 right-1/4 animate-bounce text-yellow-300 opacity-30"
            style={{ animationDelay: '1s' }}
          >
            🌟
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200 border border-white/20"
      title={label}
    >
      <span className="text-xl">{icon}</span>
    </a>
  );
}
