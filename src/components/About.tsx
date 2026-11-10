import React from 'react';
import {
  Sparkles,
  BookOpen,
  Compass,
  Smile,
  Target,
  GraduationCap,
  Globe2,
  Video,
  Code2,
  Cpu,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 border-t border-purple-500/15">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Identity</span>
            <span aria-hidden="true">·</span>
            <span>Aspirations</span>
            <span aria-hidden="true">·</span>
            <span>Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Biography & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden space-y-6">
              <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  My name is <strong className="text-white font-semibold">Thellapati Ravindra</strong>.
                  I am currently pursuing my{' '}
                  <span className="text-cyan-300 font-medium">
                    B.Tech in Computer Science and Engineering (Artificial Intelligence)
                  </span>{' '}
                  at <span className="text-purple-300 font-medium">Joy University</span>.
                </p>
                <p>
                  I am an enthusiastic and hardworking person interested in learning new technologies,
                  programming, and artificial intelligence.
                </p>
                <p>
                  My hobbies include creating comedy videos, making vlogs, exploring technology, and learning
                  new skills.
                </p>
              </div>

              {/* Strengths & Goal breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>My Strengths</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-normal">
                    Creativity, positive thinking, and a continuous willingness to learn new things.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span>My Long-Term Goal</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-normal">
                    To become a successful software engineer and achieve something great in my life.
                  </p>
                </div>
              </div>
            </div>

            {/* Honest Highlights Strip (§1.D Tabular Figures) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-panel p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tabular-nums">
                  2026–30
                </div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
                  B.Tech Batch
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400 tabular-nums">
                  Joy Univ
                </div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
                  Campus
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-400 tabular-nums">
                  3
                </div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
                  Languages
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-pink-400 tabular-nums">
                  CSE (AI)
                </div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
                  Specialization
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white font-display">
                    Quick Profile Dossier
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">Verified Info</span>
                </div>

                <div className="space-y-4 pt-4 text-sm">
                  <div className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-mono text-xs uppercase">Full Name</span>
                    <span className="text-white font-medium text-right">Thellapati Ravindra</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-mono text-xs uppercase">Degree</span>
                    <span className="text-cyan-300 font-medium text-right">
                      B.Tech in CSE (Artificial Intelligence)
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-mono text-xs uppercase">University</span>
                    <span className="text-purple-300 font-medium text-right">Joy University</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-mono text-xs uppercase">Status</span>
                    <span className="text-emerald-400 font-medium text-right">
                      Fresher & Active Learner
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-mono text-xs uppercase">Languages</span>
                    <span className="text-slate-200 font-medium text-right">
                      English · Telugu · Hindi
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-mono text-xs uppercase">Key Interests</span>
                    <span className="text-slate-200 font-medium text-right">
                      AI, Python, Web & Content Creation
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 py-1.5">
                    <span className="text-slate-400 font-mono text-xs uppercase">Social Handle</span>
                    <span className="text-pink-400 font-mono text-xs text-right">
                      @ravindra_the_vloger
                    </span>
                  </div>
                </div>
              </div>

              {/* Creator & Developer Quote */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200/90 italic leading-relaxed">
                "Learning code by day, telling visual stories by night. Every day is an opportunity to get better."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
