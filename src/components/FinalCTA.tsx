import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onNavigate?: (page: 'home' | 'schedule') => void;
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onNavigate) {
      onNavigate('schedule');
    } else {
      navigate('/schedule');
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-black relative overflow-hidden border-t border-sand-medium/10">
      {/* Background SVG Grid & Glowing Dusk Horizon */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* SVG Dot grid overlay */}
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        
        {/* Soft centered bloom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial-sand opacity-30 mix-blend-screen" />
        
        {/* Sunset horizon */}
        <svg className="absolute bottom-0 left-0 w-full h-[200px] opacity-25" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="180" x2="1440" y2="180" stroke="#C9A876" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="720" cy="180" r="100" fill="url(#ctaDimSun)" />
          <circle cx="770" cy="120" r="40" fill="url(#ctaBrightSun)" />
          <defs>
            <radialGradient id="ctaDimSun" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#C9A876" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0B0A08" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ctaBrightSun" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#D89B4A" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#0B0A08" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-sand-medium">
            Acquisitions & Integrations
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-sand-offwhite leading-tight">
          Bring Order to the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-light via-sand-medium to-spice-gold text-glow-sand">
            Monolithic Workflows.
          </span>
        </h2>
        <p className="mt-6 text-sm md:text-base text-sand-medium/70 font-light max-w-xl mx-auto leading-relaxed">
          Ready to scale your institutional capabilities? Schedule a diagnostic session to outline your compliance, tender consulting, or process automation requirements.
        </p>

        {/* Dynamic Glass Call to Action Panel */}
        <div className="mt-12 max-w-lg mx-auto glass-panel p-8 md:p-10 rounded-sm text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-sand-medium/10">
          <div className="flex flex-col items-center gap-6">
            <span className="p-3 bg-spice-gold/10 border border-spice-gold/20 rounded-sm">
              <Sparkles className="text-spice-gold animate-pulse" size={24} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-sand-offwhite uppercase tracking-wider">
                Ingestion Diagnostic Portal
              </h3>
              <p className="mt-2 text-xs text-sand-medium/60 font-light max-w-sm leading-relaxed">
                Connect directly with our acquisitions officer through our encrypted calendar line.
              </p>
            </div>
            
            <button
              onClick={handleAction}
              className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm shadow-[0_4px_15px_rgba(216,155,74,0.25)] hover:shadow-[0_4px_25px_rgba(216,155,74,0.4)] cursor-pointer"
            >
              Initiate Secure Scheduler
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
