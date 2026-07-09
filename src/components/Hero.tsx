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
      
      {/* Background Volumetric Gradients & Ambient Dusk Lights */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Cinematic Backdrop Image */}
        <img
          src="/dune_hero_bg.png"
          alt="Dune Landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.3] mix-blend-multiply"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
        {/* Soft Sand-Milk ambient cloud behind text */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-radial-gradient from-sand-medium/8 via-transparent to-transparent opacity-80 mix-blend-multiply" 
          style={{ background: 'radial-gradient(circle, rgba(228,200,154,0.18) 0%, rgba(245,242,235,0) 70%)' }}
        />
        {/* Large Golden Dusk refraction in the center-right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[75%] rounded-full bg-radial-gradient from-spice-gold/10 via-sand-medium/5 to-transparent opacity-80 mix-blend-multiply"
          style={{ background: 'radial-gradient(circle, rgba(216,155,74,0.15) 0%, rgba(228,200,154,0.08) 50%, rgba(245, 242, 235, 0) 80%)' }}
        />
        {/* SVG Dot grid overlay */}
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
      </div>

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-20 flex-grow flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Monumental Text */}
          <div className="lg:col-span-7 text-left animate-fade-up">
             {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-sand-medium">
                AI-FIRST COGNITIVE ARCHITECTURES · BESPOKE AGENTIC SYSTEMS · END-TO-END DEPLOYMENT
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-sand-offwhite leading-[1.1] uppercase">
              We Engineer & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-light via-sand-medium to-spice-gold text-glow-sand">
                Deploy Cognitive Agents.
              </span>
            </h1>

            {/* Metaphorical/Indirect Subheadline */}
            <p className="mt-8 text-sm md:text-base text-sand-medium/85 font-light max-w-xl leading-relaxed">
              Duneborn is an AI-first partner. We analyze your unique organizational bottlenecks, design custom agentic systems, and deploy them directly into your core workflows.
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

          {/* Right Column: High-End Cinematic SVG Orbit Graphic (Twin Suns & Planetary Curves) */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[350px] md:min-h-[450px]">
            
            {/* Outer solar orbit lines and sunset bloom */}
            <div className="absolute w-[320px] md:w-[450px] h-[320px] md:h-[450px] rounded-full border border-sand-medium/25 border-dashed animate-slow-drift" />
            
            <svg
              className="w-[300px] md:w-[420px] h-[300px] md:h-[420px] relative z-10"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Planetary curved horizon arc */}
              <path
                d="M 10 380 Q 200 240 390 380"
                stroke="url(#orbitArcGrad)"
                strokeWidth="2.5"
                fill="none"
              />
              
              {/* Concentric orbital rings */}
              <circle
                cx="200"
                cy="200"
                r="130"
                stroke="url(#ringGrad)"
                strokeWidth="1.25"
                style={{ transform: `rotate(${ringRotate}deg)`, transformOrigin: '200px 200px' }}
              />
              
              <circle
                cx="200"
                cy="200"
                r="165"
                stroke="url(#ringGradDim)"
                strokeWidth="0.75"
                strokeDasharray="4 8"
                style={{ transform: `rotate(-${ringRotate * 0.5}deg)`, transformOrigin: '200px 200px' }}
              />

              {/* Twin Suns */}
              {/* Sun 1: Large Dim Amber Sun */}
              <circle
                cx="150"
                cy="190"
                r="65"
                fill="url(#dimSunGrad)"
                className="animate-pulse-slow"
                style={{ transform: `translateY(${sunY * 0.4}px)` }}
              />
              
              {/* Sun 2: Small Brighter Gold Sun */}
              <circle
                cx="230"
                cy="140"
                r="30"
                fill="url(#brightSunGrad)"
                filter="url(#sunGlow)"
                style={{ transform: `translateY(${sunY * 0.7}px)` }}
              />

              {/* Graphic Gradients & Definitions */}
              <defs>
                <linearGradient id="orbitArcGrad" x1="10" y1="300" x2="390" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C9A876" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D89B4A" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#E4C89A" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="ringGrad" x1="70" y1="70" x2="330" y2="330" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C9A876" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#F5F2EB" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#D89B4A" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="ringGradDim" x1="35" y1="35" x2="365" y2="365" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E4C89A" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#F5F2EB" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="dimSunGrad" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#C9A876" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#C9A876" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#F5F2EB" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="brightSunGrad" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#D89B4A" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#C9A876" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F5F2EB" stopOpacity="0" />
                </radialGradient>
                <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
            
            {/* Horizon Silhouette Dunes below the solar system */}
            <div className="absolute bottom-0 left-0 right-0 h-[60px] overflow-hidden pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 60 Q 100 20 200 45 T 300 35 L 300 60 Z" fill="#EAE3D2" />
                <path d="M 0 60 Q 60 40 150 30 T 300 45 L 300 60 Z" fill="#EAE3D2" opacity="0.6" />
              </svg>
            </div>
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
              <span className="text-[10px] uppercase tracking-widest text-sand-medium mt-1 font-semibold">
                {val.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
