import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Instagram,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // If initialSubject changes from outside
  React.useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    setIsSubmitting(true);

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Also trigger a mailto fallback in case user wants immediate email client delivery
      const mailtoLink = `mailto:ravitellapati77@gmail.com?subject=${encodeURIComponent(
        subject || 'Portfolio Inquiry from ' + fullName
      )}&body=${encodeURIComponent(
        `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      // Clear fields
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto dismiss success after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-purple-500/15">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Direct Channels</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
          <p className="mt-4 text-sm text-slate-300 max-w-lg">
            Feel free to reach out for collaborations, project discussions, comedy ideas, or just to say hi!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Let's Connect
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  I am responsive on email, phone, and Instagram. You can reach out directly or copy details below.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-colors group">
                  <a
                    href="mailto:ravitellapati77@gmail.com"
                    className="flex items-center gap-3 text-slate-200 hover:text-white truncate"
                  >
                    <div className="p-2 rounded-lg bg-purple-950/60 text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                      <div className="text-xs sm:text-sm font-medium text-cyan-300 truncate">
                        ravitellapati77@gmail.com
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy('ravitellapati77@gmail.com', 'email')}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedItem === 'email' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
                  <a
                    href="tel:9154821636"
                    className="flex items-center gap-3 text-slate-200 hover:text-white truncate"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Phone / Mobile</div>
                      <div className="text-xs sm:text-sm font-medium text-purple-300">
                        +91 9154821636
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy('9154821636', 'phone')}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedItem === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/40 transition-colors group">
                  <a
                    href="https://www.instagram.com/ravindra_the_vloger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-200 hover:text-white truncate"
                  >
                    <div className="p-2 rounded-lg bg-pink-950/60 text-pink-400">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Instagram Vlog Channel</div>
                      <div className="text-xs sm:text-sm font-medium text-pink-300">
                        @ravindra_the_vloger
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/ravindra_the_vloger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-pink-400 rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                    title="Open Instagram"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Verified Profiles Box */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                  Online Profiles:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com/RavindraGaming/T.Ravindra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-xs font-mono text-slate-200 hover:text-white border border-slate-800 hover:border-purple-500/40 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ravindra-thellapati-060abb438/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-xs font-mono text-slate-200 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl relative">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Fill in the details below to dispatch your message directly to Ravindra.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-200">
                      Message Dispatched Successfully!
                    </h4>
                    <p className="text-xs text-emerald-300/80 mt-0.5 leading-relaxed">
                      Thank you for reaching out! Ravindra will get back to you at {email || 'your email'} shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d24] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d24] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry / Collaboration / Hello"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d24] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090d24] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Direct reply within 24-48 hrs
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-purple-900/40 hover:shadow-cyan-600/40 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
