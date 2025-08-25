'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully! 💌');
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-100 via-purple-100 to-transparent rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-100 via-pink-100 to-transparent rounded-full opacity-50 blur-2xl"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-4 border border-white/20">
            💌 Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Let's Create Something{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-2xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                    placeholder="Sarah Johnson"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-2xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                    placeholder="hello@sarahjohnson.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-2xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a project type</option>
                  <option value="branding">Brand Identity Design</option>
                  <option value="web">Web Design</option>
                  <option value="mobile">Mobile App Design</option>
                  <option value="illustration">Illustration</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-2xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="I'd love to hear about your project goals, timeline, and any specific requirements you have in mind..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-2xl transition-all duration-300 ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:shadow-xl hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message ✨'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="glass p-6 rounded-3xl hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Email Me
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        For project inquiries and collaborations
                      </p>
                      <a
                        href="mailto:hello@sarahjohnson.com"
                        className="text-pink-500 hover:text-pink-600 font-medium"
                      >
                        hello@sarahjohnson.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Let's Chat
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Quick questions and casual conversations
                      </p>
                      <a
                        href="#"
                        className="text-purple-500 hover:text-purple-600 font-medium"
                      >
                        Schedule a call
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-3xl hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Based In
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Available for remote and local projects
                      </p>
                      <span className="text-indigo-500 font-medium">
                        New York, NY
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Find me on social
                </h4>
                <div className="flex space-x-4">
                  <SocialButton href="#" icon="🎨" label="Dribbble" />
                  <SocialButton href="#" icon="🎯" label="Behance" />
                  <SocialButton href="#" icon="📷" label="Instagram" />
                  <SocialButton href="#" icon="💼" label="LinkedIn" />
                </div>
              </div>

              {/* Fun Message */}
              <div className="glass p-6 rounded-3xl">
                <div className="text-center">
                  <div className="text-4xl mb-3">☕</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Coffee Chat?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    I love meeting fellow creatives and discussing design over a
                    good cup of coffee. If you're in NYC, let's grab coffee!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Project timelines vary depending on scope, but most projects take 2-6 weeks from start to finish. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: 'Do you work with international clients?',
                a: 'Absolutely! I work with clients globally and am comfortable coordinating across different time zones. Most of my communication happens via email and video calls.',
              },
              {
                q: "What's included in your design packages?",
                a: 'Each project is customized, but typically includes initial consultation, research, concept development, revisions, and final deliverables with style guides.',
              },
              {
                q: 'How do you handle project revisions?',
                a: "I include 2-3 rounds of revisions in all projects to ensure you're completely happy with the final result. Additional revisions can be accommodated as needed.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass p-6 rounded-3xl">
                <h4 className="font-semibold text-gray-800 mb-3">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SocialButtonProps {
  href: string;
  icon: string;
  label: string;
}

function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
      title={label}
    >
      <span className="text-xl">{icon}</span>
    </a>
  );
}
