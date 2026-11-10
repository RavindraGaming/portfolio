import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, School } from 'lucide-react';
import { EducationItem } from '../types';

export const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      institution: 'Joy University',
      degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)',
      duration: '2026 – 2030',
      location: 'Tamil Nadu, India',
      status: 'current',
      description:
        'Currently pursuing undergraduate degree focusing on core Computer Science foundations, Artificial Intelligence, algorithms, Python programming, and modern software development.',
      highlights: [
        'Specialization: Artificial Intelligence & Machine Learning Foundations',
        'Exploring Data Structures, Python Development, and Web Technologies',
        'Active participant in collegiate coding groups and creative digital clubs',
      ],
    },
    {
      institution: 'Sri Chaitanya Junior Boys College',
      degree: 'Intermediate / Higher Secondary Education (MPC)',
      duration: 'Completed',
      location: 'India',
      status: 'completed',
      description:
        'Completed rigorous pre-university curriculum emphasizing Mathematics, Physics, and Chemistry, cultivating strong analytical and problem-solving reasoning.',
      highlights: [
        'Focus on Advanced Mathematics, Physics, and Chemistry (MPC stream)',
        'Built analytical discipline and structured problem-solving foundation',
      ],
    },
    {
      institution: 'Akshara High School',
      degree: 'Secondary School Certificate (SSC)',
      duration: 'Completed',
      location: 'India',
      status: 'completed',
      description:
        'Completed high school schooling with strong academic performance, active participation in school events, and initial exposure to technology and computers.',
      highlights: [
        'Comprehensive foundational academics & science education',
        'Early curiosity in computers, creative media, and digital content',
      ],
    },
  ];

  return (
    <section id="education" className="relative py-24 border-t border-purple-500/15">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Academic Milestones</span>
            <span aria-hidden="true">·</span>
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Education Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-sm text-slate-400 max-w-lg">
            A chronological timeline of my academic background and current university studies.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-slate-800" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.status === 'current';

              return (
                <div
                  key={item.institution}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-transform duration-300 ${
                        isCurrent
                          ? 'bg-[#0a0e28] border-cyan-400 text-cyan-300 shadow-[0_0_15px_#06b6d4]'
                          : 'bg-[#0a0e28] border-purple-500/60 text-purple-300 shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                      }`}
                    >
                      {isCurrent ? (
                        <GraduationCap className="w-4 h-4 animate-bounce" />
                      ) : (
                        <School className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Empty half for desktop alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    } w-full`}
                  >
                    <div
                      className={`glass-panel p-6 sm:p-7 rounded-2xl relative transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 ${
                        isCurrent
                          ? 'border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.1)]'
                          : ''
                      }`}
                    >
                      {/* Meta kicker */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono mb-2">
                        <span
                          className={isCurrent ? 'text-cyan-400 font-semibold' : 'text-purple-400'}
                        >
                          {item.duration}
                        </span>
                        {isCurrent && (
                          <span className="text-[11px] text-cyan-300 font-mono tracking-wider">
                            Currently Enrolled
                          </span>
                        )}
                      </div>

                      {/* Institution Name */}
                      <h3 className="text-xl font-bold text-white font-display">
                        {item.institution}
                      </h3>

                      {/* Degree / Certificate */}
                      <h4 className="text-sm font-semibold text-slate-300 mt-1 mb-3">
                        {item.degree}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-800">
                        {item.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-300/90"
                          >
                            <span className="text-cyan-400 mt-0.5">›</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
