import { Building, Building2, Globe, Check } from 'lucide-react';

export default function Audience() {
  const sectors = [
    {
      icon: <Globe className="text-spice-gold" size={24} />,
      title: 'Global Enterprises & Conglomerates',
      description: 'Large-scale organizations navigating complex workflow logic, internal compliance guidelines, and massive data pipelines.',
      points: [
        'Custom enterprise-aligned workflow automation',
        'Corporate policy parser & validation engine',
        'Cross-department approval routing'
      ]
    },
    {
      icon: <Building2 className="text-spice-gold" size={24} />,
      title: 'Tech & Infrastructure Corporates',
      description: 'Technology and infrastructure leaders handling complex bidding processes, procurement cycles, and heavy audit guidelines.',
      points: [
        'Tender & procurement compliance vetting',
        'Bid-proposal drafting assistants',
        'Auditable decision and compliance logs'
      ]
    },
    {
      icon: <Building className="text-spice-gold" size={24} />,
      title: 'Regulated Operations & Logistics',
      description: 'Logistics and supply chain leaders dealing with contract negotiations, compliance checklists, and high-frequency audits.',
      points: [
        'Agreement classifications and parsing',
        'Compliance risk scoring',
        'Procurement lifecycle compression'
      ]
    }
  ];

  return (
    <section id="partners" className="py-24 bg-brand-black relative border-t border-sand-medium/10 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-radial-sand opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-sand-medium">
              Target Sectors
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-sand-offwhite">
            Who We Partner With
          </h2>
          <p className="mt-4 text-sm md:text-base text-sand-medium/80 font-light max-w-xl">
            Duneborn specializes in solving the most complex, high-stakes operational challenges inside 
            highly scale-critical sectors. We speak the language of compliance and workflows.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="p-8 glass-panel hover-border-glow rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-[#1A1814]/40 border border-sand-medium/5 w-fit rounded-sm mb-6">
                  {sector.icon}
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-tight text-sand-offwhite mb-4">
                  {sector.title}
                </h3>
                <p className="text-xs md:text-sm text-sand-medium/70 font-light leading-relaxed mb-6">
                  {sector.description}
                </p>
                <div className="border-t border-sand-medium/5 pt-6">
                  <span className="text-[10px] uppercase tracking-widest text-spice-gold font-semibold block mb-4">
                    Key Outcomes
                  </span>
                  <ul className="space-y-3">
                    {sector.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3">
                        <span className="p-0.5 bg-spice-gold/10 border border-spice-gold/20 rounded-sm mt-0.5">
                          <Check className="text-spice-gold" size={10} />
                        </span>
                        <span className="text-xs text-sand-medium/80 font-light leading-tight">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
