import { FileText, Clock, ShieldAlert, Database } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <FileText className="text-spice-gold" size={24} />,
      stat: 'DELAY',
      label: 'Operational Latency',
      title: 'Legacy Process Bottlenecks',
      description: 'Monolithic processes rely on archaic workflows. Manual review chains and outdated logic slow systemic momentum to a crawl.'
    },
    {
      icon: <Clock className="text-spice-gold" size={24} />,
      stat: 'DRAG',
      label: 'Process Friction',
      title: 'Complex Approval Chains',
      description: 'Decisions stall across multi-tiered departments. Lack of unified cognitive tracking breeds communication dead-ends.'
    },
    {
      icon: <ShieldAlert className="text-spice-gold" size={24} />,
      stat: 'RISK',
      label: 'Compliance Risk Factor',
      title: 'Audit & Vetting Overhead',
      description: 'Evolving compliance frameworks create massive security audits and risk when handled by manual check teams.'
    },
    {
      icon: <Database className="text-spice-gold" size={24} />,
      stat: 'SILO',
      label: 'Data Fragmentation',
      title: 'Siloed Knowledge Bases',
      description: 'Crucial operational context and historical data remain locked in disconnected formats and unstructured archives.'
    }
  ];

  return (
    <section id="problem" className="py-24 bg-brand-black relative overflow-hidden border-t border-sand-medium/10">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-radial-sand opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-sand-medium">
              Systemic Vulnerabilities
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-sand-offwhite">
            The Friction of Institutional Scale
          </h2>
          <p className="mt-4 text-sm md:text-base text-sand-medium/80 font-light max-w-xl">
            Monolithic operations suffer from systemic drag. When procedures rely on manual validation, 
            performance degrades and critical timelines collapse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, index) => (
            <div
              key={index}
              className="p-8 glass-panel glass-panel-hover rounded-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-sand-light/30 rounded-sm border border-sand-medium/10">
                    {prob.icon}
                  </div>
                  <span className="text-3xl font-bold text-sand-light font-display opacity-80 group-hover:opacity-100 group-hover:text-spice-gold transition-all">
                    {prob.stat}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-spice-gold font-medium">
                  {prob.label}
                </span>
                <h3 className="text-base font-semibold text-sand-offwhite uppercase mt-4 mb-2">
                  {prob.title}
                </h3>
                <p className="text-xs text-sand-medium/70 font-light leading-relaxed">
                  {prob.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
