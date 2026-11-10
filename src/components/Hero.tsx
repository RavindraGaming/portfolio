import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowDown,
  Sparkles,
  Camera,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

import defaultAvatar from '../assets/images/ravindra_profile_avatar_1794326061636.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

const DEFAULT_AVATAR = defaultAvatar;

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const roles = [
    'B.Tech CSE (AI) Student',
    'Beginner Developer',
    'Creative Content Creator',
    'Aspiring AI Engineer',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Avatar state with localStorage support for custom user upload
  const [avatarUrl, setAvatarUrl] = useState<string>(DEFAULT_AVATAR);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('ravindra_custom_avatar');
    if (saved) {
      setAvatarUrl(saved);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setAvatarUrl(result);
        localStorage.setItem('ravindra_custom_avatar', result);
        setUploadNotice('Photo updated successfully!');
        setTimeout(() => setUploadNotice(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetAvatar = () => {
    localStorage.removeItem('ravindra_custom_avatar');
    setAvatarUrl(DEFAULT_AVATAR);
    setUploadNotice('Reset to default studio portrait');
    setTimeout(() => setUploadNotice(null), 3000);
  };

  // Typing effect
  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === currentFullRole) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting backward
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status kicker without pill enclosure (§1.A Zero-Pill) */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-cyan-400 mb-4">
              <span>Joy University</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>CSE (AI) 2026–2030</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-purple-400">Open to Learn</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight mb-3">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent glow-text-purple">
                Thellapati Ravindra
              </span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div className="min-h-[2.5rem] flex items-center justify-center lg:justify-start gap-1 mb-5">
              <span className="text-lg sm:text-2xl font-medium text-slate-200 font-display">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse" />
            </div>

            {/* Subtitle tag description */}
            <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6 font-mono">
              B.Tech CSE (AI) Student · Beginner Developer · Creative Content Creator
            </p>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              I am an enthusiastic and hardworking Computer Science student passionate about programming,
              artificial intelligence, web development, and creative content creation. I love learning
              new technologies and developing my skills.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-900/40 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-95 border border-purple-400/30 cursor-pointer"
              >
                Explore My Work
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-[#0d1230]/80 hover:bg-[#151c4a] rounded-xl transition-all duration-200 border border-slate-700/60 hover:border-cyan-400/50 hover:text-white hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-400 pt-2 border-t border-slate-800/80 w-full lg:w-auto">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/RavindraGaming/T.Ravindra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-purple-950/60 text-slate-300 hover:text-white border border-slate-800 hover:border-purple-500/40 transition-colors"
                  title="GitHub: RavindraGaming/T.Ravindra"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ravindra-thellapati-060abb438/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-blue-950/60 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  title="LinkedIn: Ravindra Thellapati"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/ravindra_the_vloger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-pink-950/60 text-slate-300 hover:text-pink-300 border border-slate-800 hover:border-pink-500/40 transition-colors"
                  title="Instagram: @ravindra_the_vloger"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="mailto:ravitellapati77@gmail.com"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-cyan-950/60 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  title="Email: ravitellapati77@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href="tel:9154821636"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-purple-950/60 text-slate-300 hover:text-purple-300 border border-slate-800 hover:border-purple-500/40 transition-colors"
                  title="Phone: 9154821636"
                  aria-label="Call Mobile"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Glowing Profile Picture & Custom Upload */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer pulsing neon ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-500 animate-pulse" />

              {/* Middle spinning gradient border */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-500 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                {/* Inner dark bezel */}
                <div className="p-1 rounded-full bg-[#050713]">
                  {/* Circular Image Container */}
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative bg-slate-900">
                    <img
                      src={avatarUrl}
                      alt="Thellapati Ravindra - B.Tech CSE (AI) Student"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Subtle inner lens vignette */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-2 right-4 bg-[#0a0e28]/90 backdrop-blur-md border border-cyan-500/40 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono text-cyan-200">Joy University AI '26</span>
              </div>
            </div>

            {/* Photo customization trigger */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />

              <div className="flex items-center gap-3">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-purple-950/60 border border-slate-700/60 hover:border-purple-400/50 rounded-lg transition-colors cursor-pointer"
                  title="Upload your personal photo"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Upload Your Photo</span>
                </button>

                {avatarUrl !== DEFAULT_AVATAR && (
                  <button
                    onClick={handleResetAvatar}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                    title="Reset to default portrait"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {uploadNotice && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono animate-in fade-in duration-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{uploadNotice}</span>
                </div>
              )}
              <span className="text-[11px] text-slate-500">
                Custom photo persists locally in your browser
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
