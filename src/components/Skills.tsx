import React, { useState } from 'react';
import {
  Code,
  FileCode2,
  Palette,
  BrainCircuit,
  Video,
  Image,
  Layers,
  Sparkles,
  Languages,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'creative' | 'languages'>('all');

  const technicalSkills: SkillItem[] = [
    {
      name: 'Python',
      category: 'technical',
      level: 'Beginner / Actively Practicing',
      description:
        'Learning core syntax, data structures (lists, dicts), functions, loops, and beginner problem-solving logic.',
      iconName: 'code',
    },
    {
      name: 'HTML',
      category: 'technical',
      level: 'Beginner / Semantic Markup',
      description:
        'Constructing clean page layouts, semantic document trees, forms, links, and modern accessible web structure.',
      iconName: 'file-code',
    },
    {
      name: 'CSS',
      category: 'technical',
      level: 'Beginner / Layout & Styling',
      description:
        'Practicing Flexbox, Grid, colors, typography, borders, and responsive styling for mobile and desktop screens.',
      iconName: 'palette',
    },
    {
      name: 'Artificial Intelligence (AI)',
      category: 'technical',
      level: 'Academic Focus / Foundations',
      description:
        'Undergraduate coursework covering introductory machine learning principles, neural foundations, and AI tool experimentation.',
      iconName: 'brain',
    },
  ];

  const creativeSkills: SkillItem[] = [
    {
      name: 'Video Editing',
      category: 'creative',
      level: 'Hands-on Social Media Editor',
      description:
        'Editing comedy clips, vlogs, and shorts with timing cuts, background audio sync, pacing, and engaging transitions.',
      iconName: 'video',
    },
    {
      name: 'Photo Editing',
      category: 'creative',
      level: 'Visual Polishing',
      description:
        'Lighting correction, color grading, contrast enhancement, background isolation, and social media image refinement.',
      iconName: 'image',
    },
    {
      name: 'Thumbnail Designing',
      category: 'creative',
      level: 'Graphic Composition',
      description:
        'Creating high-contrast, eye-catching YouTube and Instagram thumbnail covers that capture attention.',
      iconName: 'layers',
    },
    {
      name: 'Content Creation',
      category: 'creative',
      level: 'Comedy & Vlogging',
      description:
        'Ideating, shooting, and publishing entertaining comedy videos, student vlogs, and tech explorations.',
      iconName: 'sparkles',
    },
  ];

  const languageSkills: SkillItem[] = [
    {
      name: 'English',
      category: 'languages',
      level: 'Professional Working & Academic',
      description: 'Used for coursework, programming documentation, communication, and technical study.',
      iconName: 'globe',
    },
    {
      name: 'Telugu',
      category: 'languages',
      level: 'Native / Mother Tongue',
      description: 'Primary language spoken fluently for creative content, comedy skits, and everyday communication.',
      iconName: 'globe',
    },
    {
      name: 'Hindi',
      category: 'languages',
      level: 'Conversational & Spoken',
      description: 'Comfortable speaking and understanding for broader entertainment and pan-Indian connections.',
      iconName: 'globe',
    },
  ];

  const allSkills = [...technicalSkills, ...creativeSkills, ...languageSkills];

  const displayedSkills =
    activeTab === 'all'
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'file-code':
        return <FileCode2 className="w-5 h-5 text-orange-400" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'brain':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'video':
        return <Video className="w-5 h-5 text-pink-400" />;
      case 'image':
        return <Image className="w-5 h-5 text-emerald-400" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-yellow-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      default:
        return <Languages className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 border-t border-purple-500/15">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Honest Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Zero Exaggeration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Skills & Proficiencies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-sm text-slate-400 max-w-xl">
            Real, honest competencies across technical programming, creative media production, and spoken languages.
          </p>
        </div>

        {/* Filter Controls (§1.A Interactive Filter Controls) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 bg-[#090d24] border border-slate-800 rounded-xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Technical ({technicalSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'creative'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Creative ({creativeSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'languages'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Languages ({languageSkills.length})
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-6 rounded-2xl relative group hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-purple-500/30 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  {/* Clean unboxed level label without pill enclosure */}
                  <span className="text-xs font-mono text-cyan-400 text-right">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-300/80 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Learning stage status indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Category: {skill.category}</span>
                <span className="text-purple-400">Continuous Growth</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disclosure Callout */}
        <div className="mt-12 p-5 rounded-2xl glass-card border border-purple-500/20 max-w-2xl mx-auto flex items-start gap-3.5">
          <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">Genuine Self-Assessment:</span> As a freshman student,
            I believe in truthful representation over inflated percentages. I am actively practicing coding,
            learning concepts from scratch, and building a solid foundation every day.
          </div>
        </div>
      </div>
    </section>
  );
};
