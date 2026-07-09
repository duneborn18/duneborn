import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sunY = scrollY * 0.25;
  const ringRotate = scrollY * 0.05;

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-16 bg-brand-black">
      
      {/* Background Volumetric Gradients & Ambient Tech Grid */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Engineering Blueprint Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.09]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="techGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6E6252" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
          {/* Subtle tech blueprint diagonals & radar circles */}
          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#6E6252" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="100%" y1="20%" x2="0" y2="80%" stroke="#6E6252" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="50%" cy="50%" r="320" stroke="#6E6252" strokeWidth="0.5" fill="none" />
          <circle cx="50%" cy="50%" r="480" stroke="#6E6252" strokeWidth="0.5" fill="none" strokeDasharray="12 12" />
        </svg>

        {/* Soft, modern ambient glows to replace heavy space dust */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-60" 
          style={{ background: 'radial-gradient(circle, rgba(228,200,154,0.3) 0%, rgba(245,242,235,0) 70%)' }}
        />
        <div className="absolute top-[20%] right-[10%] w-[60%] h-[60%] rounded-full opacity-55"
          style={{ background: 'radial-gradient(circle, rgba(216,155,74,0.2) 0%, rgba(228,200,154,0.06) 60%, rgba(245, 242, 235, 0) 80%)' }}
        />
        
        {/* SVG Dot grid overlay */}
        <div className="absolute inset-0 bg-dot-grid opacity-35" />
      </div>

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-20 flex-grow flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Monumental Text */}
          <div className="lg:col-span-7 text-left animate-fade-up">
             {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-sand-offwhite/85">
                AI-FIRST COGNITIVE ARCHITECTURES · BESPOKE AGENTIC SYSTEMS · END-TO-END DEPLOYMENT
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-sand-offwhite leading-[1.15] uppercase">
              We Diagnose Bottlenecks. <br />
              We Build Bespoke Agents. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-light via-sand-medium to-spice-gold text-glow-sand">
                We Deploy the Systems.
              </span>
            </h1>

            {/* Metaphorical/Indirect Subheadline */}
            <p className="mt-8 text-sm md:text-base text-sand-offwhite/90 font-medium max-w-xl leading-relaxed">
              Duneborn is a forward-looking, AI-first engineering partner. We audit complex operational bottlenecks, design custom agentic software systems tailored to solve them, and handle full integration and deployment into your existing infrastructure.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm shadow-[0_4px_20px_rgba(216,155,74,0.18)] hover:shadow-[0_4px_30px_rgba(216,155,74,0.35)]"
              >
                Get a Proposal
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-sand-offwhite border border-sand-medium/30 hover:border-sand-light font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm"
              >
                <Play size={12} className="text-spice-gold fill-spice-gold" />
                See how it works
              </a>
            </div>
          </div>

          {/* Right Column: High-End Cognitive Agentic Workflow Node Network */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[380px] md:min-h-[460px]">
            {/* Tech Radar Rings */}
            <div className="absolute w-[340px] md:w-[460px] h-[340px] md:h-[460px] rounded-full border border-sand-medium/20 border-dashed animate-slow-drift" />
            <div className="absolute w-[240px] md:w-[320px] h-[240px] md:h-[320px] rounded-full border border-sand-medium/10" />

            <svg
              className="w-[320px] md:w-[440px] h-[320px] md:h-[440px] relative z-10"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Node Network Connecting Paths with Data Flow Animation */}
              <g stroke="#C27D27" strokeWidth="1.5" strokeOpacity="0.4">
                {/* Diagonal lines to outer nodes */}
                <line x1="200" y1="200" x2="80" y2="200" strokeDasharray="5 5" />
                <line x1="200" y1="200" x2="200" y2="80" strokeDasharray="5 5" />
                <line x1="200" y1="200" x2="320" y2="200" strokeDasharray="5 5" />
                <line x1="200" y1="200" x2="200" y2="320" strokeDasharray="5 5" />
                
                {/* Triangular feedback loop path */}
                <path d="M 80 200 L 200 80 L 320 200 L 200 320 Z" stroke="#6E6252" strokeWidth="1" strokeOpacity="0.25" />
              </g>

              {/* Central Glowing Hub: Cognitive Core */}
              <g className="animate-pulse-slow">
                <circle cx="200" cy="200" r="38" fill="url(#coreGlow)" />
                <circle cx="200" cy="200" r="30" fill="#F5F2EB" stroke="#C27D27" strokeWidth="2.5" />
                <circle cx="200" cy="200" r="8" fill="#C27D27" />
              </g>
              <text x="200" y="248" textAnchor="middle" fill="#27221C" className="text-[10px] font-bold tracking-[0.2em] font-mono">COGNITIVE HUB</text>

              {/* Node 1: Ingest / Diagnose */}
              <g>
                <circle cx="80" cy="200" r="22" fill="#F5F2EB" stroke="#6E6252" strokeWidth="2" />
                <circle cx="80" cy="200" r="18" fill="white" fillOpacity="0.7" />
                {/* Simple Document Icon */}
                <rect x="74" y="193" width="12" height="14" rx="1.5" stroke="#6E6252" strokeWidth="1.5" />
                <line x1="78" y1="197" x2="82" y2="197" stroke="#6E6252" strokeWidth="1" />
                <line x1="78" y1="201" x2="82" y2="201" stroke="#6E6252" strokeWidth="1" />
              </g>
              <text x="80" y="235" textAnchor="middle" fill="#6E6252" className="text-[8px] font-bold tracking-[0.1em] font-mono">1. DIAGNOSE</text>

              {/* Node 2: Build / Architect */}
              <g>
                <circle cx="200" cy="80" r="22" fill="#F5F2EB" stroke="#6E6252" strokeWidth="2" />
                <circle cx="200" cy="80" r="18" fill="white" fillOpacity="0.7" />
                {/* Simple CPU/Chip Icon */}
                <rect x="194" y="74" width="12" height="12" rx="1" stroke="#6E6252" strokeWidth="1.5" />
                <line x1="200" y1="70" x2="200" y2="74" stroke="#6E6252" strokeWidth="1" />
                <line x1="200" y1="86" x2="200" y2="90" stroke="#6E6252" strokeWidth="1" />
                <line x1="190" y1="80" x2="194" y2="80" stroke="#6E6252" strokeWidth="1" />
                <line x1="206" y1="80" x2="210" y2="80" stroke="#6E6252" strokeWidth="1" />
              </g>
              <text x="200" y="50" textAnchor="middle" fill="#6E6252" className="text-[8px] font-bold tracking-[0.1em] font-mono">2. BUILD</text>

              {/* Node 3: Verify / Compliance */}
              <g>
                <circle cx="320" cy="200" r="22" fill="#F5F2EB" stroke="#6E6252" strokeWidth="2" />
                <circle cx="320" cy="200" r="18" fill="white" fillOpacity="0.7" />
                {/* Simple Shield Icon */}
                <path d="M 314 194 L 320 191 L 326 194 L 326 200 C 326 204 320 207 320 207 C 320 207 314 204 314 200 Z" stroke="#6E6252" strokeWidth="1.5" />
              </g>
              <text x="320" y="235" textAnchor="middle" fill="#6E6252" className="text-[8px] font-bold tracking-[0.1em] font-mono">3. VERIFY</text>

              {/* Node 4: Deploy / Exec */}
              <g>
                <circle cx="200" cy="320" r="22" fill="#F5F2EB" stroke="#6E6252" strokeWidth="2" />
                <circle cx="200" cy="320" r="18" fill="white" fillOpacity="0.7" />
                {/* Simple Server/Database Icon */}
                <rect x="194" y="313" width="12" height="6" rx="0.5" stroke="#6E6252" strokeWidth="1.2" />
                <rect x="194" y="321" width="12" height="6" rx="0.5" stroke="#6E6252" strokeWidth="1.2" />
                <circle cx="197" cy="316" r="0.75" fill="#C27D27" />
                <circle cx="197" cy="324" r="0.75" fill="#C27D27" />
              </g>
              <text x="200" y="355" textAnchor="middle" fill="#6E6252" className="text-[8px] font-bold tracking-[0.1em] font-mono">4. DEPLOY</text>

              {/* Definitions */}
              <defs>
                <radialGradient id="coreGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#C9A876" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F5F2EB" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

        </div>
      </div>

      {/* Corporate Values Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-20 mt-auto pt-8">
        <div className="border-t border-sand-medium/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 'COGNITIVE CORE', label: 'Bespoke LLM Agents' },
            { value: 'ZERO-DRAG', label: 'Workflow Integrations' },
            { value: 'COMPLIANT', label: 'Vetted Decision Logs' },
            { value: 'SECURE', label: 'Private Cloud Deployments' },
          ].map((val, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-base md:text-lg font-extrabold tracking-wider text-sand-offwhite font-display uppercase">
                {val.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-sand-offwhite/75 mt-1 font-bold">
                {val.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
