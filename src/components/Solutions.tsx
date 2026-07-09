import { Cpu, FileSpreadsheet, Workflow, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: <Cpu className="text-spice-gold" size={28} />,
      title: 'Cognitive Computing & Custom AI Core',
      description: 'Deploy context-aware custom LLM agents configured for institutional archives. Extract intelligence, ingest multi-page policies, and formulate decisions with absolute audit trails.',
      tag: 'COGNITIVE CORE',
      gridClass: 'md:col-span-2 md:row-span-1',
      bgGraphic: (
        <svg className="absolute right-0 bottom-0 w-64 h-64 opacity-5 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <circle cx="150" cy="150" r="100" stroke="#C9A876" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="150" cy="150" r="70" stroke="#C9A876" strokeWidth="1" />
          <line x1="50" y1="150" x2="150" y2="150" stroke="#D89B4A" strokeWidth="1" />
          <line x1="150" y1="50" x2="150" y2="150" stroke="#D89B4A" strokeWidth="1" />
        </svg>
      )
    },
    {
      icon: <FileSpreadsheet className="text-spice-gold" size={28} />,
      title: 'Enterprise Proposal & Vetting Support',
      description: 'Streamline enterprise proposal lifecycles. Automate proposals, conduct compliance audits, and engineer winning bids with high-velocity data parsing.',
      tag: 'PROPOSAL SUPPORT',
      gridClass: 'md:col-span-1 md:row-span-1',
      bgGraphic: (
        <svg className="absolute right-0 bottom-0 w-48 h-48 opacity-5 pointer-events-none" viewBox="0 0 100 100" fill="none">
          <rect x="20" y="20" width="60" height="60" stroke="#C9A876" strokeWidth="1" />
          <line x1="20" y1="40" x2="80" y2="40" stroke="#C9A876" strokeWidth="1" />
          <line x1="20" y1="60" x2="80" y2="60" stroke="#C9A876" strokeWidth="1" />
        </svg>
      )
    },
    {
      icon: <Workflow className="text-spice-gold" size={28} />,
      title: 'Monolithic Process Automation',
      description: 'Replace brittle legacy scripts with cognitive workflows. Automate multi-tiered approval chains, routing, and corporate compliance checks.',
      tag: 'ENTERPRISE FLOW',
      gridClass: 'md:col-span-1 md:row-span-1',
      bgGraphic: (
        <svg className="absolute right-0 bottom-0 w-48 h-48 opacity-5 pointer-events-none" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 L30 30 L70 70 L90 50" stroke="#C9A876" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="30" cy="30" r="5" fill="#D89B4A" />
          <circle cx="70" cy="70" r="5" fill="#D89B4A" />
        </svg>
      )
    },
    {
      icon: <ShieldCheck className="text-spice-gold" size={28} />,
      title: 'Secure Data & Compliance Infrastructure',
      description: 'On-premise or secure cloud architectures engineered to meet strict corporate compliance guidelines. Safeguard intellectual assets under custom security clearances.',
      tag: 'COMPLIANCE INFRA',
      gridClass: 'md:col-span-2 md:row-span-1',
      bgGraphic: (
        <svg className="absolute right-0 bottom-0 w-64 h-64 opacity-5 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" stroke="#C9A876" strokeWidth="1" />
          <polygon points="100,40 160,70 160,130 100,160 40,130 40,70" stroke="#D89B4A" strokeWidth="0.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-brand-black relative border-t border-sand-medium/10">
      
      {/* Background Volumetric Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-sand opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-sand-medium">
              Capabilities Core
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-sand-offwhite">
            Architectures for High-Stakes Operations
          </h2>
          <p className="mt-4 text-sm md:text-base text-sand-medium/80 font-light max-w-xl">
            We build secure, enterprise-grade systems designed to automate complex workflows, 
            vet compliance parameters, and optimize operational pipelines.
          </p>
        </div>

        {/* Bento Grid with glass panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className={`p-8 glass-panel glass-panel-hover rounded-sm flex flex-col justify-between relative overflow-hidden group ${sol.gridClass}`}
            >
              {sol.bgGraphic}

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-sand-light/40 border border-sand-medium/15 rounded-sm">
                      {sol.icon}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest bg-sand-medium/10 text-sand-light px-2 py-0.5 rounded-full font-semibold border border-sand-medium/10">
                      {sol.tag}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-sand-offwhite uppercase tracking-tight mb-4 group-hover:text-sand-light transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs md:text-sm text-sand-medium/70 font-light leading-relaxed max-w-xl">
                    {sol.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sand-medium/10 flex items-center justify-between text-xs uppercase tracking-widest text-sand-medium group-hover:text-spice-gold transition-colors font-medium">
                  <span>Learn more</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
