import { Link } from 'react-router-dom';
import { Cpu, Shield, Zap, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background dot grid and ambient glow */}
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
              Sovereign Intelligence
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-sand-offwhite leading-tight">
            We Build Cognitive Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-light via-sand-medium to-spice-gold">
              For Enterprise Operations.
            </span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-sand-medium/85 font-light leading-relaxed">
            Duneborn is an AI-first software engineering lab. We diagnose complex institutional logjams, design bespoke autonomous LLM agents, and integrate private cognitive software layers directly into legacy enterprise workflows.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-sm border border-sand-medium/10">
            <span className="p-3 bg-spice-gold/15 border border-spice-gold/20 rounded-sm inline-block mb-6">
              <Cpu className="text-spice-gold" size={24} />
            </span>
            <h3 className="text-lg font-bold uppercase tracking-wider text-sand-offwhite mb-3">
              AI-First Engineering
            </h3>
            <p className="text-xs text-sand-medium/70 font-light leading-relaxed">
              We move beyond generic API wrappers. Every system is architected around specialized domain models fine-tuned to parse structured and unstructured organizational data.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-sm border border-sand-medium/10">
            <span className="p-3 bg-spice-gold/15 border border-spice-gold/20 rounded-sm inline-block mb-6">
              <Shield className="text-spice-gold" size={24} />
            </span>
            <h3 className="text-lg font-bold uppercase tracking-wider text-sand-offwhite mb-3">
              Zero Public Model Leakage
            </h3>
            <p className="text-xs text-sand-medium/70 font-light leading-relaxed">
              Corporate data assets never leave your security perimeter. All training, embeddings, and inference pipelines execute inside isolated VPCs and private cloud clusters.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-sm border border-sand-medium/10">
            <span className="p-3 bg-spice-gold/15 border border-spice-gold/20 rounded-sm inline-block mb-6">
              <Zap className="text-spice-gold" size={24} />
            </span>
            <h3 className="text-lg font-bold uppercase tracking-wider text-sand-offwhite mb-3">
              Zero-Drag Automation
            </h3>
            <p className="text-xs text-sand-medium/70 font-light leading-relaxed">
              By automating routine compliance audits, invoice verifications, and document parsing, operations teams reduce latency from weeks to seconds.
            </p>
          </div>
        </div>

        {/* Technical Architecture Breakdown */}
        <div className="glass-panel p-8 md:p-12 rounded-sm border border-sand-medium/15 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] uppercase tracking-widest text-spice-gold font-mono font-bold block mb-2">
              SYSTEM METHODOLOGY
            </span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-sand-offwhite">
              The Agentic Execution Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Systemic Audit',
                desc: 'Mapping internal ERPs, document repositories, and operational logjams.',
              },
              {
                step: '02',
                title: 'Model Engineering',
                desc: 'Fine-tuning specialized LLM agents and deterministic compliance validators.',
              },
              {
                step: '03',
                title: 'Private Deployment',
                desc: 'Hosting containerized models on Cloudflare Edge or dedicated VPC clusters.',
              },
              {
                step: '04',
                title: 'Quiet Scale',
                desc: 'Autonomous agent dispatch with immutable cryptographically signed audit logs.',
              },
            ].map((item) => (
              <div key={item.step} className="p-6 bg-white/40 border border-sand-medium/10 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-mono font-extrabold text-spice-gold block mb-2">{item.step}</span>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-sand-offwhite mb-2">{item.title}</h4>
                  <p className="text-xs text-sand-medium/80 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-sand-medium/10 flex items-center gap-1.5 text-[9px] text-green-600 font-mono">
                  <CheckCircle2 size={12} />
                  <span>Verified Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-sand-medium">
                Our Standards
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-sand-offwhite">
              Engineered for High-Stakes Environments
            </h2>
            <p className="text-sm text-sand-medium/80 font-light leading-relaxed">
              Whether deploying automated compliance verification for multi-million dollar procurement tenders or real-time telematics tracking for commercial fleets, Duneborn architectures are built for absolute deterministic accuracy.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'SOC2 Type II & ISO 27001 Security Standard Compliance',
                'Deterministic Fallback Systems with Human-in-the-Loop Safeguards',
                'Seamless Integration with SAP, Salesforce, Microsoft 365 & PostgreSQL',
                'Cryptographically Signed Immutable Activity Audits'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-sand-offwhite font-medium">
                  <span className="p-1 bg-spice-gold/15 rounded-sm border border-spice-gold/30">
                    <Terminal size={12} className="text-spice-gold" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="pt-4 flex gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm"
              >
                Explore Projects
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-sand-offwhite border border-sand-medium/30 hover:border-sand-light font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm"
              >
                Contact Engineers
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 glass-panel p-8 rounded-sm border border-sand-medium/15 relative">
            <div className="flex items-center justify-between border-b border-sand-medium/10 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-sand-offwhite uppercase tracking-widest">DUNEBORN LABS OVERVIEW</span>
              <span className="text-[9px] uppercase tracking-wider bg-spice-gold/15 text-spice-gold px-2 py-0.5 rounded-sm font-mono font-bold">EST. 2026</span>
            </div>

            <div className="space-y-4 font-mono text-xs text-sand-medium">
              <div className="p-3 bg-brand-black/20 rounded-sm border border-sand-medium/10">
                <span className="text-spice-gold font-bold">&gt; HQ Location:</span> Jaipur, Rajasthan, India
              </div>
              <div className="p-3 bg-brand-black/20 rounded-sm border border-sand-medium/10">
                <span className="text-spice-gold font-bold">&gt; Specialization:</span> Agentic AI, Autonomous RAG, Cognitive Software
              </div>
              <div className="p-3 bg-brand-black/20 rounded-sm border border-sand-medium/10">
                <span className="text-spice-gold font-bold">&gt; Target Sectors:</span> Global Conglomerates, Fleet Logistics, Procurement
              </div>
              <div className="p-3 bg-brand-black/20 rounded-sm border border-sand-medium/10">
                <span className="text-spice-gold font-bold">&gt; Deployment Stack:</span> Cloudflare Edge, Containerized PyTorch / vLLM, Vite
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
