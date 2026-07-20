import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: 'Fleet & Logistics' | 'Document Parsing' | 'Compliance' | 'Proposal Intel';
  tagline: string;
  description: string;
  status: 'ACTIVE PRODUCTION' | 'ENTERPRISE READY' | 'BETA PILOT';
  metrics: string[];
  techStack: string[];
  features: string[];
  linkText: string;
}

const PROJECTS: Project[] = [
  {
    id: 'netra',
    name: 'Netra',
    category: 'Fleet & Logistics',
    tagline: 'Enterprise AI Fleet Operational Intelligence Stack',
    description: 'Connects vehicle telematics, fuel logs, SAP ERP databases, and Excel sheets into an autonomous agent system that monitors KPIs, parses invoices, and eliminates cost overruns.',
    status: 'ACTIVE PRODUCTION',
    metrics: ['1,482 Active Trucks Monitored', '12.4% Average Fuel Savings', '100% Invoice Audit Accuracy'],
    techStack: ['SAP Connector', 'PostgreSQL', 'vLLM Reasoning', 'Microsoft 365'],
    features: [
      'Autonomous anomaly detection on fuel & maintenance',
      'Conversational BI querying in natural language',
      'One-click ERP & Excel universal connectors',
      'SOC2 Type II & Entra ID SSO security'
    ],
    linkText: 'Book Netra Demo'
  },
  {
    id: 'scribe',
    name: 'Duneborn Scribe',
    category: 'Document Parsing',
    tagline: 'High-Precision Cognitive Ingestion Engine',
    description: 'Parses multi-page legal addendums, complex engineering schematics, and structured tables without transmitting customer data outside your security perimeter.',
    status: 'ENTERPRISE READY',
    metrics: ['Sub-second Extraction Latency', 'Zero Model Hallucinations', '10k+ Pages Parsed / Hour'],
    techStack: ['Vision Transformers', 'PyTorch', 'On-Premises Container', 'JSON Schema Exporter'],
    features: [
      'Multi-column tabular data extraction',
      'Automated liability & clause mapping',
      'Deterministic output validation against schemas',
      'Local VPC isolation mode'
    ],
    linkText: 'Explore Scribe'
  },
  {
    id: 'aegis',
    name: 'Duneborn Aegis',
    category: 'Compliance',
    tagline: 'Real-Time Enterprise Regulatory Compliance Auditing',
    description: 'Audits business operations against ISO 27001, GDPR, and enterprise governance frameworks with automated clearance badges and cryptographically signed logs.',
    status: 'ACTIVE PRODUCTION',
    metrics: ['450+ Rule Schemas', 'Cryptographic Audit Trail', 'Zero Violation Escapes'],
    techStack: ['RegTech Engine', 'SHA-256 Audit Trail', 'Docker', 'GraphQL'],
    features: [
      'Automated rule auditing across multi-departmental logs',
      'Human-in-the-loop exception override workflows',
      'Real-time compliance status dashboard',
      'Exportable regulatory reporting bundles'
    ],
    linkText: 'Audit with Aegis'
  },
  {
    id: 'pathfinder',
    name: 'Duneborn Pathfinder',
    category: 'Proposal Intel',
    tagline: 'Automated Proposal Vetting & Competitive Intelligence',
    description: 'Analyzes enterprise RFP requirements, cross-checks margin thresholds, evaluates competitor activity, and optimizes proposal bidding strategies.',
    status: 'ENTERPRISE READY',
    metrics: ['3x Faster Tender Submissions', 'Optimal Pricing Calibration', 'Secure Proposal Archive'],
    techStack: ['Predictive Analytics', 'Vector Store', 'Python', 'FastAPI'],
    features: [
      'Automated tender requirement extraction',
      'Competitive intelligence benchmarking',
      'Compliance margin risk assessment',
      'Pre-proposal pricing optimizer'
    ],
    linkText: 'Launch Pathfinder'
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Fleet & Logistics', 'Document Parsing', 'Compliance', 'Proposal Intel'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-[15%] right-10 w-[600px] h-[400px] bg-radial-sand opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-sand-medium">
              Product Systems & Deployments
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-sand-offwhite leading-tight">
            Cognitive Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-light via-sand-medium to-spice-gold">
              Architectures in Production.
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-sand-medium/85 font-light leading-relaxed">
            Discover Duneborn’s flagship product platforms designed to diagnose operational friction, parse complex unstructured data, and automate enterprise workflows.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-12 border-b border-sand-medium/10 pb-6">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-spice-gold text-brand-black border border-spice-gold shadow-[0_0_15px_rgba(216,155,74,0.3)]'
                    : 'bg-white/40 text-sand-medium border border-sand-medium/15 hover:border-sand-medium/30 hover:text-sand-offwhite'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-medium/60" size={14} />
            <input
              type="text"
              placeholder="Search products or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/60 border border-sand-medium/20 rounded-sm pl-9 pr-4 py-2 text-xs text-sand-offwhite placeholder:text-sand-medium/50 focus:outline-none focus:border-spice-gold transition-colors font-mono"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel p-8 rounded-sm border border-sand-medium/15 flex flex-col justify-between hover:border-spice-gold/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-sand-medium/10 pb-4 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-spice-gold">
                    {project.category}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider bg-green-500/10 text-green-600 border border-green-500/20 px-2 py-0.5 rounded-sm font-mono font-bold">
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold uppercase tracking-tight text-sand-offwhite mb-2">
                  {project.name}
                </h3>
                <h4 className="text-xs text-sand-medium font-semibold uppercase tracking-wider mb-4">
                  {project.tagline}
                </h4>
                <p className="text-xs text-sand-medium/80 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/80 p-2.5 rounded-sm border border-sand-medium/10 text-center">
                      <span className="text-[10px] font-mono font-semibold text-sand-offwhite block">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-sand-offwhite/90">
                      <CheckCircle2 size={14} className="text-spice-gold mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Action */}
              <div className="pt-6 border-t border-sand-medium/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-[9px] bg-sand-light/50 border border-sand-medium/10 text-sand-medium px-2 py-0.5 rounded-sm font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/schedule"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-black text-white hover:bg-spice-gold hover:text-brand-black border border-sand-medium/30 transition-all duration-300 rounded-sm text-xs font-semibold uppercase tracking-widest cursor-pointer shrink-0"
                >
                  {project.linkText}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Request Banner */}
        <div className="glass-panel p-8 rounded-sm border border-spice-gold/20 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold uppercase tracking-wider text-sand-offwhite mb-2">
            Need a Custom Cognitive Agent System?
          </h3>
          <p className="text-xs text-sand-medium/70 font-light leading-relaxed max-w-lg mx-auto mb-6">
            We build bespoke LLM models, custom enterprise adapters, and proprietary automated data pipelines tailored to your organizational schema.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm"
          >
            Schedule Diagnostic Consultation
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
