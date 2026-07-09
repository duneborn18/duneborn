import { Eye, FileCode, Server, Zap } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      icon: <Eye className="text-spice-gold" size={20} />,
      title: 'Diagnose',
      subtitle: 'Understand Bottlenecks',
      description: 'We audit your workflow pipelines and database schemas to understand and map complex bottlenecks.'
    },
    {
      icon: <FileCode className="text-spice-gold" size={20} />,
      title: 'Build',
      subtitle: 'Bespoke Agentic Design',
      description: 'We engineer custom cognitive architectures, LLM agents, and compliance layers built to solve those bottlenecks.'
    },
    {
      icon: <Server className="text-spice-gold" size={20} />,
      title: 'Deploy',
      subtitle: 'Production Integration',
      description: 'We host and integrate the systems securely on your private cloud or premises, connecting directly to your tools.'
    },
    {
      icon: <Zap className="text-spice-gold" size={20} />,
      title: 'Automate',
      subtitle: 'Continuous Scale',
      description: 'We roll out your bespoke agentic systems to automate operations, manage compliance, and audit in real-time.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-black relative border-t border-sand-medium/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-sand-medium">
              The Protocol
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-sand-offwhite">
            How Duneborn Operates
          </h2>
          <p className="mt-4 text-sm md:text-base text-sand-offwhite/80 font-medium max-w-xl">
            We operate as your dedicated AI-first engineering partner. We diagnose your specific organizational bottlenecks, build custom agentic systems, and deploy them directly into production.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop connecting glowing line */}
          <div className="hidden lg:block absolute top-[44px] left-[50px] right-[50px] h-[1px] bg-gradient-to-r from-sand-medium/20 via-spice-gold/40 to-sand-medium/20 shadow-[0_0_8px_#D89B4A]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col group">
                {/* Icon & Connector Bubble */}
                <div className="flex items-center mb-6 lg:mb-8">
                  <div className="p-3 glass-panel rounded-sm relative z-20 group-hover:border-spice-gold shadow-[0_0_15px_rgba(201,168,118,0.05)] transition-all duration-300">
                    {step.icon}
                  </div>
                  {/* Mobile connecting line */}
                  <div className="lg:hidden flex-grow h-[1px] bg-sand-medium/10 ml-4" />
                </div>

                {/* Content */}
                <span className="text-[10px] uppercase tracking-widest text-spice-gold font-semibold">
                  {step.subtitle}
                </span>
                <h3 className="text-lg font-semibold uppercase text-sand-offwhite tracking-tight mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-sand-medium/70 font-light leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
