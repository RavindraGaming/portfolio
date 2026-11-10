/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceSubject, setSelectedServiceSubject] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceSubject(`Inquiry regarding: ${serviceTitle}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#040612] text-slate-100 relative selection:bg-purple-600/30 selection:text-cyan-200">
      {/* Interactive Particle & Starfield Background */}
      <ParticleBackground />

      {/* Futuristic Mesh Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-purple-950/20 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-[#02030a] via-transparent to-transparent" />
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Content Stream */}
      <main className="relative z-10">
        <Hero
          onExploreClick={() => scrollToSection('services')}
          onContactClick={() => scrollToSection('contact')}
        />
        <About />
        <Education />
        <Skills />
        <Services onSelectService={handleSelectService} />
        <Projects />
        <Experience />
        <Contact initialSubject={selectedServiceSubject} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
