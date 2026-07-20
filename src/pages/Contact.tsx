import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Mail, MapPin, Phone, CheckCircle2, Lock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Agentic AI Architecture',
    clearanceLevel: 'Standard Enterprise',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial-sand opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-sand-medium">
              Secure Operations & Ingestion
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-sand-offwhite leading-tight">
            Initiate Diagnostic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-light via-sand-medium to-spice-gold">
              & System Ingestion.
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-sand-medium/85 font-light leading-relaxed">
            Connect directly with Duneborn’s acquisitions officer and solution architects to outline your enterprise compliance, fleet intelligence, or custom agentic requirements.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-sm border border-sand-medium/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-2 border-b border-sand-medium/10 pb-4 mb-2">
                  <Lock size={14} className="text-spice-gold" />
                  <span className="text-xs font-mono font-bold text-sand-offwhite uppercase tracking-widest">
                    ENCRYPTED DIAGNOSTIC INGESTION FORM
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-sand-medium font-bold mb-2 font-mono">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/60 border border-sand-medium/20 rounded-sm px-4 py-3 text-xs text-sand-offwhite placeholder:text-sand-medium/40 focus:outline-none focus:border-spice-gold transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-sand-medium font-bold mb-2 font-mono">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="m.vance@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/60 border border-sand-medium/20 rounded-sm px-4 py-3 text-xs text-sand-offwhite placeholder:text-sand-medium/40 focus:outline-none focus:border-spice-gold transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-sand-medium font-bold mb-2 font-mono">
                      Organization / Enterprise
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Titan Global Logistics"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-white/60 border border-sand-medium/20 rounded-sm px-4 py-3 text-xs text-sand-offwhite placeholder:text-sand-medium/40 focus:outline-none focus:border-spice-gold transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-sand-medium font-bold mb-2 font-mono">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white/60 border border-sand-medium/20 rounded-sm px-4 py-3 text-xs text-sand-offwhite focus:outline-none focus:border-spice-gold transition-colors font-mono cursor-pointer"
                    >
                      <option value="Agentic AI Architecture">Agentic AI Architecture</option>
                      <option value="Netra OS Fleet Intelligence">Netra Fleet Intelligence</option>
                      <option value="Duneborn Scribe Ingestion">Duneborn Scribe Ingestion</option>
                      <option value="Aegis Regulatory Compliance">Aegis Compliance Auditing</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-sand-medium font-bold mb-2 font-mono">
                    Project Bottlenecks & Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Outline your organizational logjams, system constraints, or document ingestion volumes..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-white/60 border border-sand-medium/20 rounded-sm p-4 text-xs text-sand-offwhite placeholder:text-sand-medium/40 focus:outline-none focus:border-spice-gold transition-colors font-mono"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm shadow-[0_4px_15px_rgba(216,155,74,0.25)] cursor-pointer"
                  >
                    Transmit Ingestion Proposal
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-sand-medium/60 font-mono text-center pt-2">
                  <ShieldCheck size={12} className="text-spice-gold" />
                  <span>Sovereign Data Privacy Guaranteed. 256-bit AES Transmission Encryption.</span>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6 animate-fade-up">
                <span className="p-4 bg-green-500/10 border border-green-500/30 rounded-full inline-block text-green-600">
                  <CheckCircle2 size={36} />
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-sand-offwhite">
                  Ingestion Proposal Transmitted
                </h3>
                <p className="text-xs text-sand-medium/80 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-sand-offwhite font-semibold">{formData.name}</span>. Our acquisitions team has received your diagnostic request. You will be contacted via <span className="text-sand-offwhite font-semibold">{formData.email}</span> within 4 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-white/10 border border-sand-medium/20 text-sand-offwhite text-xs uppercase tracking-widest rounded-sm font-semibold cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: HQ & Calendar Line (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Calendar Slot Booking */}
            <div className="glass-panel p-8 rounded-sm border border-spice-gold/25 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-spice-gold font-mono font-bold block">
                DIRECT INGESTION CALENDAR
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wide text-sand-offwhite">
                Book a 1-on-1 Session
              </h3>
              <p className="text-xs text-sand-medium/80 font-light leading-relaxed">
                Prefer to select a specific date and time slot immediately? Access our interactive calendar to reserve your ingestion window.
              </p>
              <div className="pt-2">
                <Link
                  to="/schedule"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-black text-white hover:bg-spice-gold hover:text-brand-black border border-spice-gold transition-all duration-300 rounded-sm text-xs font-semibold uppercase tracking-widest"
                >
                  Open Booking Calendar
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Operations Info */}
            <div className="glass-panel p-8 rounded-sm border border-sand-medium/15 space-y-6">
              <span className="text-xs font-mono font-bold text-sand-offwhite uppercase tracking-widest border-b border-sand-medium/10 pb-3 block">
                GLOBAL OPERATIONAL CONTACTS
              </span>

              <div className="space-y-4 text-xs font-mono text-sand-medium">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-spice-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sand-offwhite uppercase">Global Headquarters</span>
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-spice-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sand-offwhite uppercase">Encrypted Secure Line</span>
                    <span>+1 (800) DUNE-BORN</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-spice-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sand-offwhite uppercase">Acquisitions Email</span>
                    <span>contact@duneborn.dev</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand-medium/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/40 p-3 rounded-sm border border-sand-medium/10">
                    <span className="block text-[8px] uppercase tracking-widest text-sand-medium/60 font-semibold">Response SLA</span>
                    <span className="text-lg font-bold font-mono text-sand-offwhite">&lt; 4 Hours</span>
                  </div>
                  <div className="bg-white/40 p-3 rounded-sm border border-sand-medium/10">
                    <span className="block text-[8px] uppercase tracking-widest text-sand-medium/60 font-semibold">Security Clearance</span>
                    <span className="text-lg font-bold font-mono text-green-600">Sovereign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
