import { Eye, FileCode, Server, Zap } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      icon: <Eye className="text-spice-gold" size={20} />,
      title: 'Discover',
      subtitle: 'Systemic Audit',
      description: 'We audit your existing workflow pipelines, operational protocols, and logjams to outline specific bottlenecks.'
    },
    {
      icon: <FileCode className="text-spice-gold" size={20} />,
      title: 'Design',
      subtitle: 'Model Engineering',
      description: 'We design custom cognitive engines, secure AI adapters, and compliance schemas matching your operational constraints.'
    },
    {
      icon: <Server className="text-spice-gold" size={20} />,
      title: 'Deploy',
      subtitle: 'Enterprise Integration',
      description: 'We host the platform on-premises or inside custom secure clouds, linking securely into your internal database systems.'
    },
    {
      icon: <Zap className="text-spice-gold" size={20} />,
      title: 'Scale',
      subtitle: 'Quiet Automation',
      description: 'We roll out cognitive agents across all departments, automating cognitive workflows and auditing in real-time.'
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
          <p className="mt-4 text-sm md:text-base text-sand-medium/80 font-light max-w-xl">
            We deploy a robust, phased integration protocol to map, design, and host cognitive architectures 
            without disrupting ongoing day-to-day operations.
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
