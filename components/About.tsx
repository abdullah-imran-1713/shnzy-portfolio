interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export default function About() {
  const skills: Skill[] = [
    { name: 'UI/UX Design', level: 95, color: 'from-pink-400 to-pink-600' },
    {
      name: 'Brand Identity',
      level: 90,
      color: 'from-purple-400 to-purple-600',
    },
    { name: 'Web Design', level: 85, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Illustration', level: 80, color: 'from-yellow-400 to-orange-500' },
    { name: 'Typography', level: 88, color: 'from-green-400 to-teal-500' },
    { name: 'Motion Design', level: 75, color: 'from-blue-400 to-cyan-500' },
  ];

  const experience: Experience[] = [
    {
      year: '2023 - Present',
      role: 'Senior UI/UX Designer',
      company: 'Creative Studio Co.',
      description: 'Leading design for digital products and brand experiences',
    },
    {
      year: '2021 - 2023',
      role: 'Brand Designer',
      company: 'Design Agency Inc.',
      description: 'Crafted visual identities for 50+ startups and enterprises',
    },
    {
      year: '2019 - 2021',
      role: 'Junior Designer',
      company: 'Freelance',
      description:
        'Built foundation in design principles and client relationships',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-l from-pink-100 to-transparent rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-50"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-4 border border-white/20">
            💫 About Me
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Beautiful Design
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I believe that great design goes beyond aesthetics—it solves
            problems, tells stories, and creates meaningful connections between
            brands and people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story & Image */}
          <div>
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-3xl p-4 glass">
                  <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl">✨</span>
                      </div>
                      <p className="text-gray-500">Your Photo Here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                With over 4 years of experience in design, I've had the
                privilege of working with amazing clients ranging from
                innovative startups to established brands. My journey began with
                a simple love for colors and shapes, which evolved into a deep
                passion for creating meaningful digital experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not designing, you can find me sketching in coffee
                shops, exploring art galleries, or experimenting with new
                creative techniques. I believe that inspiration comes from
                everywhere, and I'm always eager to learn and grow as a
                designer.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 glass rounded-2xl">
                <div className="text-2xl font-bold text-pink-500">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 glass rounded-2xl">
                <div className="text-2xl font-bold text-purple-500">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills & Experience */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-8">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-8">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 last:pb-0">
                    {/* Timeline line */}
                    <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-500 last:hidden"></div>
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white shadow-lg"></div>

                    <div className="glass p-6 rounded-2xl hover-lift">
                      <div className="text-sm text-pink-500 font-medium mb-1">
                        {exp.year}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {exp.role}
                      </h4>
                      <div className="text-purple-600 font-medium mb-2">
                        {exp.company}
                      </div>
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="pt-8">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                📄 Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Values/Philosophy Section */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-semibold text-gray-800 mb-4">
              My Design Philosophy
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every project is an opportunity to create something beautiful and
              meaningful
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 glass rounded-3xl hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                User-Centered
              </h4>
              <p className="text-gray-600 text-sm">
                Every design decision is made with the user's needs, emotions,
                and goals in mind
              </p>
            </div>

            <div className="text-center p-6 glass rounded-3xl hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Aesthetically Pleasing
              </h4>
              <p className="text-gray-600 text-sm">
                Beautiful design isn't just decoration—it enhances functionality
                and creates delight
              </p>
            </div>

            <div className="text-center p-6 glass rounded-3xl hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Purpose-Driven
              </h4>
              <p className="text-gray-600 text-sm">
                Every element serves a purpose and contributes to the overall
                story and goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
