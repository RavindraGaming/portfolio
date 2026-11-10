import React from 'react';
import { Compass, Sparkles, BookOpen, Rocket, CheckCircle2, HeartHandshake } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 border-t border-purple-500/15">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Career Status</span>
            <span aria-hidden="true">·</span>
            <span>Honest Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Fresher Spotlight Card */}
        <div className="glass-panel border-cyan-500/30 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.1)]">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
            {/* Badge without pill enclosure */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Career Beginning</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Currently a Fresher
            </h3>

            <blockquote className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium italic border-y border-slate-800 py-6">
              "I am at the beginning of my professional journey, focusing on learning programming,
              web development, artificial intelligence, and creative technologies."
            </blockquote>

            <p className="text-sm text-slate-400 leading-relaxed">
              With full transparency, I do not present fabricated corporate positions or artificial internships.
              Instead, I bring genuine curiosity, high energy, and a clean slate ready to be mentored into
              a high-impact software engineer.
            </p>

            {/* Current Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 w-full text-left">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-cyan-400 font-mono text-xs uppercase mb-1">Pillar 01</div>
                <div className="text-sm font-semibold text-white mb-1">Academic Depth</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Deepening computer science concepts, Python, and AI theory at Joy University.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-purple-400 font-mono text-xs uppercase mb-1">Pillar 02</div>
                <div className="text-sm font-semibold text-white mb-1">Coding Foundations</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Building responsive web pages with HTML & CSS, and practicing logic routines.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-pink-400 font-mono text-xs uppercase mb-1">Pillar 03</div>
                <div className="text-sm font-semibold text-white mb-1">Creative Production</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Editing video reels, designing thumbnails, and developing storytelling skills.
                </div>
              </div>
            </div>

            {/* Open for Opportunities note */}
            <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Open to beginner mentorship, collegiate tech projects, and entry-level collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
