import React, { useState, useEffect } from 'react';
import upcomingProjectsImg from '../assets/images/upcoming_projects_futuristic_1794326062459.jpg';
import {
  Sparkles,
  Plus,
  Github,
  ExternalLink,
  Code2,
  Trash2,
  X,
  Clock,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { ProjectItem } from '../types';

const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'portfolio-v1',
    title: 'Futuristic Developer Portfolio',
    category: 'web',
    description:
      'Modern, high-performance personal portfolio built with React, TypeScript, and Tailwind CSS featuring neon aesthetics and glowing canvas effects.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
    githubUrl: 'https://github.com/RavindraGaming/T.Ravindra',
    liveUrl: '#home',
    status: 'in-progress',
    createdAt: '2026',
  },
  {
    id: 'python-automation-bot',
    title: 'Python Console Automation Utility',
    category: 'python',
    description:
      'Command-line scripting toolkit in Python for automating daily computer tasks, file organization, and basic calculations.',
    tags: ['Python 3', 'CLI', 'Automation'],
    status: 'planning',
    createdAt: '2026',
  },
  {
    id: 'ai-study-companion',
    title: 'AI Concepts Knowledge Explorer',
    category: 'ai',
    description:
      'Conceptual interactive learning notebook exploring core Machine Learning algorithms and beginner neural network mathematical principles.',
    tags: ['Python', 'AI Foundations', 'Joy University'],
    status: 'planning',
    createdAt: '2026',
  },
];

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('ravindra_custom_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_PROJECTS;
      }
    }
    return INITIAL_PROJECTS;
  });

  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'python' | 'ai' | 'creative'>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New project form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'web' | 'python' | 'ai' | 'creative'>('web');
  const [newDescription, setNewDescription] = useState('');
  const [newTags, setNewTags] = useState('');
  const [newGithub, setNewGithub] = useState('');
  const [newLive, setNewLive] = useState('');
  const [newStatus, setNewStatus] = useState<'planning' | 'in-progress' | 'completed'>('in-progress');

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    const newProject: ProjectItem = {
      id: `proj_${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      description: newDescription.trim(),
      tags: newTags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      githubUrl: newGithub.trim() || undefined,
      liveUrl: newLive.trim() || undefined,
      status: newStatus,
      createdAt: '2026',
    };

    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem('ravindra_custom_projects', JSON.stringify(updated));

    // Reset & Close
    setNewTitle('');
    setNewDescription('');
    setNewTags('');
    setNewGithub('');
    setNewLive('');
    setIsAddModalOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem('ravindra_custom_projects', JSON.stringify(updated));
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 border-t border-purple-500/15">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Portfolio Roadmap</span>
            <span aria-hidden="true">·</span>
            <span>Upcoming Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Projects & Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Hero Feature Box: Projects Coming Soon with Futuristic Illustration */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 p-8 sm:p-12 mb-16 shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Under Active Construction</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white leading-tight">
                Projects Coming Soon
              </h3>

              <p className="text-base sm:text-lg text-cyan-200/90 font-medium leading-relaxed">
                "Great things are under development. Stay connected to see my upcoming projects!"
              </p>

              <p className="text-sm text-slate-300/80 leading-relaxed max-w-xl">
                I am currently building my core technical skills in Python, web architecture, and Artificial
                Intelligence at Joy University. As I complete projects, they will be published right here with
                source code repositories and interactive live demonstrations.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-900/30 hover:shadow-cyan-600/40 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project Later (Manager)</span>
                </button>

                <a
                  href="https://github.com/RavindraGaming/T.Ravindra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/90 border border-slate-700 hover:border-purple-400/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Follow on GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Futuristic Graphic */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl h-64 sm:h-72">
              <img
                src={upcomingProjectsImg}
                alt="Futuristic AI Lab - Projects Under Development"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050713]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="text-cyan-400">AI Lab · joyuniv-ai</span>
                <span className="text-purple-400">Batch 2026–30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Concepts & Project Tiles Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h4 className="text-xl font-bold font-display text-white">
              Upcoming Project Showcase
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Live & in-progress builds will display here with GitHub links and live demos.
            </p>
          </div>

          {/* Interactive filter */}
          <div className="flex items-center gap-1.5 p-1 bg-[#090d24] border border-slate-800 rounded-xl overflow-x-auto text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setActiveFilter('python')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'python'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Python
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'ai'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel p-6 rounded-2xl relative flex flex-col justify-between group hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Meta header without pill enclosure */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="uppercase text-cyan-400 font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>
                      {project.status === 'in-progress'
                        ? 'In Progress'
                        : project.status === 'planning'
                        ? 'Planned'
                        : 'Completed'}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags without pill enclosures (§1.A Zero-Pill) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span className="text-slate-300">#{tag}</span>
                      {tIdx < project.tags.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900 hover:bg-purple-950/70 border border-slate-800 hover:border-purple-400/40 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      Repo soon
                    </span>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/50 border border-cyan-800/40 hover:border-cyan-400/40 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {/* Delete button if custom */}
                {project.id.startsWith('proj_') && (
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-950/30 transition-colors"
                    title="Delete custom project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Project Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel border border-cyan-500/40 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Add New Project
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Save a completed or planned project to your portfolio
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g., Simple Calculator in Python"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) =>
                      setNewCategory(e.target.value as 'web' | 'python' | 'ai' | 'creative')
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="web">Web Development</option>
                    <option value="python">Python Programming</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="creative">Creative / Video</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Status
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) =>
                      setNewStatus(e.target.value as 'planning' | 'in-progress' | 'completed')
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="planning">Planned</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Brief overview of what this project does and what you learned..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="Python, Tkinter, Logic"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    GitHub Link (optional)
                  </label>
                  <input
                    type="url"
                    value={newGithub}
                    onChange={(e) => setNewGithub(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Live Demo Link (optional)
                  </label>
                  <input
                    type="url"
                    value={newLive}
                    onChange={(e) => setNewLive(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all shadow-md shadow-cyan-900/30"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
