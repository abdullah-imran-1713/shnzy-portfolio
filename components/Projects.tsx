'use client';

import { useState } from 'react';

interface Category {
  id: string;
  label: string;
  emoji: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  featured?: boolean;
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', label: 'All Work', emoji: '✨' },
    { id: 'branding', label: 'Branding', emoji: '🎨' },
    { id: 'web', label: 'Web Design', emoji: '💻' },
    { id: 'mobile', label: 'Mobile App', emoji: '📱' },
    { id: 'illustration', label: 'Illustration', emoji: '🖌️' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Bloom Beauty Brand',
      category: 'branding',
      description: 'Complete brand identity for a sustainable beauty company',
      image: '/images/project1.jpg',
      tags: ['Brand Identity', 'Logo Design', 'Packaging'],
      color: 'from-pink-400 to-rose-500',
      featured: true,
    },
    {
      id: 2,
      title: 'Luna Wellness App',
      category: 'mobile',
      description: 'Mobile app design for meditation and wellness tracking',
      image: '/images/project2.jpg',
      tags: ['Mobile App', 'UI/UX', 'Wellness'],
      color: 'from-purple-400 to-indigo-500',
    },
    {
      id: 3,
      title: 'Artisan Marketplace',
      category: 'web',
      description:
        'E-commerce platform connecting local artisans with customers',
      image: '/images/project3.jpg',
      tags: ['Web Design', 'E-commerce', 'Responsive'],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 4,
      title: 'Whimsical Illustrations',
      category: 'illustration',
      description: 'Series of illustrations for children&apos;s book',
      image: '/images/project4.jpg',
      tags: ['Illustration', 'Children&apos;s Book', 'Character Design'],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 5,
      title: 'Tech Startup Rebrand',
      category: 'branding',
      description: 'Modern rebrand for innovative fintech company',
      image: '/images/project5.jpg',
      tags: ['Rebranding', 'Tech', 'Modern'],
      color: 'from-green-400 to-teal-500',
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'web',
      description: 'Elegant website design for fine dining restaurant',
      image: '/images/project6.jpg',
      tags: ['Web Design', 'Restaurant', 'Elegant'],
      color: 'from-red-400 to-pink-500',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-4 border border-white/20">
            🎨 Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my favorite projects that showcase my passion for
            beautiful, functional design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'glass text-gray-700 hover:bg-white/40'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card rounded-3xl overflow-hidden group cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image */}
              <div
                className={`relative h-64 ${
                  project.featured ? 'lg:h-80' : ''
                } bg-gradient-to-br ${project.color} overflow-hidden`}
              >
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <span className="text-2xl">🖼️</span>
                    </div>
                    <p className="text-sm opacity-90">Project Image</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-white/90 text-gray-800 rounded-full font-medium hover:bg-white transition-colors duration-200">
                    View Project
                  </button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
            View Full Portfolio
          </button>
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-semibold text-gray-800 mb-4">
              My Design Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every great design starts with understanding the problem and the
              people we're designing for
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Research and understand the challenge',
                icon: '🔍',
              },
              {
                step: '02',
                title: 'Define',
                desc: 'Synthesize insights into clear direction',
                icon: '💡',
              },
              {
                step: '03',
                title: 'Design',
                desc: 'Create and iterate on solutions',
                icon: '✏️',
              },
              {
                step: '04',
                title: 'Deliver',
                desc: 'Perfect and launch the final product',
                icon: '🚀',
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-pink-600 shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
