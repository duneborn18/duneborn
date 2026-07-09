import { Quote } from 'lucide-react';

export default function SocialProof() {
  const logos = [
    { name: 'Titan Industries', dot: true },
    { name: 'Apex Systems', dot: false },
    { name: 'Aether Energy', dot: true },
    { name: 'Vanguard Systems', dot: false },
    { name: 'Core Compliance', dot: true }
  ];

  const testimonials = [
    {
      quote: "Duneborn compressed our bid submission workflow dramatically. The compliance vetting engine flagged a crucial regulatory discrepancy that would have instantly disqualified our proposal.",
      author: "Vikram K. Singhal",
      role: "Director of Acquisitions",
      company: "Titan Infrastructure Group"
    },
    {
      quote: "Managing regulatory compliance was a massive drain. Duneborn's cognitive indexing layer cut our manual audit overhead significantly and brought absolute traceability back to our approval history.",
      author: "Hana Al-Mansoor",
      role: "Chief of Digitization",
      company: "Apex Global Directorate"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-brand-black relative border-t border-sand-medium/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Trusted By Logos Row */}
        <div className="mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-sand-medium/60 font-semibold block mb-8">
            Securing Infrastructure For Industry Leaders
          </span>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 hover:opacity-60 transition-opacity duration-300">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-1.5 grayscale">
                <span className="font-display text-sm md:text-base font-black tracking-widest text-sand-offwhite">
                  {logo.name.toUpperCase()}
                </span>
                {logo.dot && <span className="w-1.5 h-1.5 rounded-full bg-spice-gold shadow-[0_0_6px_#D89B4A]" />}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="p-8 glass-panel border-l-4 border-l-spice-gold rounded-sm relative flex flex-col justify-between"
            >
              <div>
                <Quote className="text-spice-gold/20 mb-6" size={32} strokeWidth={1} />
                <p className="text-xs md:text-sm text-sand-offwhite/90 font-light leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-sand-medium/5 flex flex-col">
                <span className="text-xs font-semibold text-sand-light uppercase tracking-wide">
                  {test.author}
                </span>
                <span className="text-[10px] text-sand-medium uppercase tracking-widest mt-1">
                  {test.role} — <span className="text-spice-gold">{test.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
