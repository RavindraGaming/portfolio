import React from 'react';
import workspaceImg from '../assets/images/creative_tech_workspace_1794326061883.jpg';
import {
  Globe,
  Terminal,
  Video,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services: ServiceItem[] = [
    {
      id: 'web-dev',
      title: 'Basic Website Development',
      category: 'tech',
      description:
        'Creating clean, modern, and responsive static websites using HTML and CSS for personal portfolios, landing pages, or small showcases.',
      features: [
        'Clean HTML5 semantic structure',
        'Mobile-friendly responsive CSS design',
        'Modern layout styling and aesthetic typography',
      ],
      iconName: 'globe',
    },
    {
      id: 'python-code',
      title: 'Python Programming',
      category: 'tech',
      description:
        'Beginner-level Python programming, basic scripting, logic problem-solving, and foundational coding tasks.',
      features: [
        'Fundamental scripting & loops',
        'Basic calculations & algorithmic logic',
        'Clean code with helpful comments',
      ],
      iconName: 'terminal',
    },
    {
      id: 'video-edit',
      title: 'Video Editing',
      category: 'creative',
      description:
        'Editing videos tailored for social media, YouTube shorts, Instagram reels, and personal vlog content.',
      features: [
        'Pacing, jump cuts & comedic timing',
        'Background audio balancing & SFX sync',
        'Social media formatting & export optimization',
      ],
      iconName: 'video',
    },
    {
      id: 'thumbnail-design',
      title: 'Thumbnail Designing',
      category: 'creative',
      description:
        'Designing attractive, vibrant, and simple thumbnail graphics that capture viewers’ attention across social feeds.',
      features: [
        'Eye-catching color combinations',
        'Readable bold typography',
        'Character & subject emphasis',
      ],
      iconName: 'layers',
    },
    {
      id: 'content-creation',
      title: 'Creative Content Creation',
      category: 'creative',
      description:
        'Creating entertaining comedy videos, student campus vlogs, relatable sketches, and creative digital storytelling.',
      features: [
        'Relatable humor & comedy sketch concepts',
        'Campus & lifestyle vlogging',
        'Engaging audience hook & storyline development',
      ],
      iconName: 'sparkles',
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'terminal':
        return <Terminal className="w-6 h-6 text-blue-400" />;
      case 'video':
        return <Video className="w-6 h-6 text-pink-400" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-yellow-400" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 border-t border-purple-500/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>What I Offer</span>
            <span aria-hidden="true">·</span>
            <span>Beginner Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Services & Offerings
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-sm text-slate-300 max-w-xl">
            Practical skills I can assist you with right now. I am continuously learning, refining my craft, and improving my capabilities with every single project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`glass-panel p-7 rounded-2xl relative group flex flex-col justify-between hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300 ${
                index === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-purple-500/40 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white border border-slate-800 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>Discuss This Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}

          {/* Visual Workspace Showcase Card */}
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between border-cyan-500/30">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <span>Growth Philosophy</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Learning Today, Building Tomorrow
              </h3>
              <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                "Every line of code written and every video frame edited brings me closer to mastering modern technology. I welcome feedback and new opportunities to build."
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden h-36 bg-slate-900 border border-slate-800">
              <img
                src={workspaceImg}
                alt="Ravindra Creative & Tech Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050713] via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-[11px] font-mono text-cyan-300">
                Code & Media Workflow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
