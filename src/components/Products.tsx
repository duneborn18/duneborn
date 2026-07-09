import { useState } from 'react';
import { FileText, ArrowRight, CheckCircle, AlertTriangle, Play, Database, FileCheck, Layers, Shield, Activity, Share2, MessageSquare } from 'lucide-react';

type TabType = 'scribe' | 'aegis' | 'pathfinder' | 'netra';

export default function Products() {
  const [activeTab, setActiveTab] = useState<TabType>('scribe');
  const [selectedFile, setSelectedFile] = useState<number>(0);
  const [resolvedWarning, setResolvedWarning] = useState<boolean>(false);
  const [biddingStage, setBiddingStage] = useState<'analyzing' | 'optimized'>('analyzing');

  const files = [
    { name: "spec_civil.pdf", size: "Large", date: "Recent", status: "Parsed", data: {
      "doc_id": "DOC-X-SECURE",
      "authority": "Enterprise Operations Board",
      "estimated_effort": "Enterprise Scale",
      "compliance_standard": "ISO 27001 / SOC-2",
      "indemnity_cap": "Standard Corporate Value"
    }},
    { name: "liability_amendment.pdf", size: "Small", date: "Recent", status: "Parsed", data: {
      "doc_id": "AMD-Y-SECURE",
      "target_clause": "Liability Section",
      "amended_liability": "Standard Cap",
      "vetting_status": "Approved",
      "risk_rating": "Low"
    }},
    { name: "compliance_clearance.tiff", size: "Medium", date: "Recent", status: "Parsed", data: {
      "doc_id": "CLR-Z-SECURE",
      "security_clearance": "Enterprise Tier",
      "authorized_agency": "Internal Vetting Board",
      "expiration_date": "Continuous",
      "restrictions": "None"
    }}
  ];

  return (
    <section id="products" className="py-32 bg-brand-black relative border-t border-sand-medium/10">
      {/* Background SVG Grid Overlay */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-60" />
      
      {/* Glow cloud */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-sand opacity-15 pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-sand-medium">
              OPERATIONAL CORE
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-sand-offwhite">
            Our Products
          </h2>
          <p className="mt-4 text-sm md:text-base text-sand-medium/80 font-light max-w-xl">
            AI-first solutions engineered to navigate complexity, enforce compliance, and accelerate 
            high-stakes enterprise operations.
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 border-b border-sand-medium/10 pb-4">
          {[
            { id: 'scribe', name: 'Duneborn Scribe', subtitle: 'AI Document Parsing' },
            { id: 'aegis', name: 'Duneborn Aegis', subtitle: 'Compliance Auditing' },
            { id: 'pathfinder', name: 'Duneborn Pathfinder', subtitle: 'Proposal Vetting & Intel' },
            { id: 'netra', name: 'Netra', subtitle: 'Fleet Intelligence Stack' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`p-4 text-left transition-all duration-300 border-b-2 rounded-t-sm flex-grow md:flex-grow-0 ${
                activeTab === tab.id
                  ? 'border-spice-gold bg-white/80 text-sand-offwhite shadow-[0_-2px_10px_rgba(110,98,82,0.05)]'
                  : 'border-transparent text-sand-medium/60 hover:text-sand-medium hover:bg-white/30'
              }`}
            >
              <span className="block text-xs uppercase tracking-widest font-semibold">{tab.name}</span>
              <span className="block text-[10px] text-sand-medium/40 mt-0.5">{tab.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Product Workspace Interface */}
        <div className="glass-panel rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-sand-medium/10">
          
          {/* Header Bar */}
          <div className="bg-sand-light/50 border-b border-sand-medium/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
              <span className="h-4 w-[1px] bg-sand-medium/20 mx-2" />
              <span className="text-xs uppercase tracking-widest text-sand-medium font-mono">
                SECURE PORTAL // {activeTab.toUpperCase()}_WORKSPACE
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/40 border border-sand-medium/10 px-3 py-1 rounded-sm text-[9px] font-mono text-spice-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-spice-gold animate-pulse" />
              ENCRYPTED CHANNEL
            </div>
          </div>

          {/* Workspace Content */}
          <div className="min-h-[420px] bg-white/20 p-6 md:p-8">
            
            {/* SCRIBE Tab */}
            {activeTab === 'scribe' && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left: Document List */}
                <div className="lg:col-span-2 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-sand-medium/40 font-bold block">
                    Ingested Document Feed
                  </span>
                  <div className="space-y-2">
                    {files.map((file, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedFile(idx)}
                        className={`w-full p-4 text-left border rounded-sm transition-all flex items-center justify-between ${
                          selectedFile === idx
                            ? 'bg-white/70 border-spice-gold/40 shadow-[0_0_10px_rgba(194,125,39,0.05)]'
                            : 'bg-transparent border-sand-medium/10 hover:border-sand-medium/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <FileText size={18} className={selectedFile === idx ? "text-spice-gold" : "text-sand-medium"} />
                          <div>
                            <span className="block text-xs font-semibold text-sand-offwhite">{file.name}</span>
                            <span className="block text-[9px] text-sand-medium/50 mt-0.5">{file.size} • {file.date}</span>
                          </div>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest bg-green-500/10 text-green-400 px-2 py-0.5 rounded-sm font-semibold border border-green-500/20">
                          {file.status}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Extracted JSON */}
                <div className="lg:col-span-3 bg-white/50 border border-sand-medium/10 rounded-sm p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-sand-medium/5">
                      <span className="text-[10px] uppercase tracking-widest text-sand-medium font-bold">
                        Extracted Struct Profile
                      </span>
                      <span className="text-[9px] text-sand-medium/40 font-mono">
                        SRC: {files[selectedFile].name}
                      </span>
                    </div>
                    <pre className="text-xs text-sand-light font-mono leading-relaxed overflow-x-auto">
                      {JSON.stringify(files[selectedFile].data, null, 2)}
                    </pre>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-sand-medium/5 flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-[10px] text-sand-medium/60 font-light flex items-center gap-1.5">
                      <Database size={12} className="text-spice-gold" />
                      Automatic injection configured for database: ENTERPRISE_MAIN
                    </span>
                    <button className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-spice-gold font-bold hover:underline">
                      Push to Pipeline
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* AEGIS Tab */}
            {activeTab === 'aegis' && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left: Risk Metric dial */}
                <div className="lg:col-span-2 flex flex-col justify-between p-6 glass-panel rounded-sm">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sand-medium/40 font-bold block mb-4">
                      Compliance Audit Rating
                    </span>
                    <div className="flex flex-col items-center py-6">
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        {/* Outer track */}
                        <div className="absolute inset-0 rounded-full border-4 border-sand-medium/10" />
                        {/* Semi-circle glow */}
                        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="46"
                            fill="none"
                            stroke="#D89B4A"
                            strokeWidth="4"
                            strokeDasharray="289"
                            strokeDashoffset={resolvedWarning ? "17" : "40"} // dynamic compliance rating
                            className="transition-all duration-700"
                          />
                        </svg>
                        <div className="flex flex-col items-center">
                          <span className="text-4xl font-extrabold text-sand-offwhite font-display">
                            {resolvedWarning ? '98%' : '92%'}
                          </span>
                          <span className="text-[8px] uppercase tracking-widest text-sand-medium font-semibold mt-0.5">
                            SECURE LEVEL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-sand-medium/5">
                    <span className="text-xs text-sand-medium font-light">
                      Compliance vetting module: <span className="text-green-400 font-semibold uppercase">Active</span>
                    </span>
                  </div>
                </div>

                {/* Right: Vetting Checklists */}
                <div className="lg:col-span-3 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-sand-medium/40 font-bold block">
                    Policy Checklist Audits
                  </span>
                  
                  <div className="space-y-3">
                    <div className="p-4 bg-white/40 border border-sand-medium/10 rounded-sm flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-0.5" size={16} />
                      <div>
                        <span className="block text-xs font-semibold text-sand-offwhite">Local Enterprise Data Storage Vetted</span>
                        <span className="block text-[10px] text-sand-medium/60 mt-0.5">Verified that all metadata is localized on secure private enterprise clouds.</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white/40 border border-sand-medium/10 rounded-sm flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-0.5" size={16} />
                      <div>
                        <span className="block text-xs font-semibold text-sand-offwhite">Sub-Contractor Liability Caps Match Standards</span>
                        <span className="block text-[10px] text-sand-medium/60 mt-0.5">Liability is restricted within acceptable limits (Standard Compliance Clause).</span>
                      </div>
                    </div>

                    <div className={`p-4 border rounded-sm transition-all duration-300 flex items-start justify-between ${
                      resolvedWarning
                        ? 'bg-white/40 border-sand-medium/10'
                        : 'bg-yellow-500/5 border-yellow-500/20 shadow-[0_0_15px_rgba(194,125,39,0.02)]'
                    }`}>
                      <div className="flex items-start gap-3">
                        {resolvedWarning ? (
                          <CheckCircle className="text-green-400 mt-0.5" size={16} />
                        ) : (
                          <AlertTriangle className="text-yellow-500 mt-0.5" size={16} />
                        )}
                        <div>
                          <span className="block text-xs font-semibold text-sand-offwhite">
                            Liquidated Damages Clause Ambiguity
                          </span>
                          <span className="block text-[10px] text-sand-medium/60 mt-0.5">
                            {resolvedWarning 
                              ? 'Liquidated damages revised and aligned with target compliance standards.'
                              : 'Liquidated damages cap exceeds target compliance threshold.'}
                          </span>
                        </div>
                      </div>
                      
                      {!resolvedWarning && (
                        <button
                          onClick={() => setResolvedWarning(true)}
                          className="px-3 py-1 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 text-[9px] uppercase tracking-widest font-semibold rounded-sm transition-all"
                        >
                          Auto-Resolve
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PATHFINDER Tab */}
            {activeTab === 'pathfinder' && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left: Intel report */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sand-medium/40 font-bold block mb-3">
                      Automated Proposal Intelligence
                    </span>
                    <h4 className="text-lg font-bold text-sand-offwhite uppercase tracking-tight">
                      RFP Analysis: Infrastructure & Operations
                    </h4>
                  </div>

                  <div className="p-5 bg-white/40 border border-sand-medium/10 rounded-sm">
                    <span className="text-[9px] uppercase tracking-widest text-spice-gold font-bold block mb-2">
                      Target Pricing Vetting Recommendation
                    </span>
                    <p className="text-xs text-sand-medium/90 font-light leading-relaxed">
                      "Historical bidding cycles for the <span className="text-sand-light font-semibold">Enterprise Infrastructure Board</span> indicate competitor undercuts on similar procurement lines. We recommend structuring pricing at target ceiling rates to maximize win probability."
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setBiddingStage('optimized')}
                      className="group inline-flex items-center gap-1.5 px-4 py-2 bg-spice-gold text-brand-black text-[10px] uppercase tracking-widest font-bold hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm"
                    >
                      <Play size={10} className="fill-brand-black group-hover:fill-spice-gold" />
                      Optimize Proposal Copy
                    </button>
                    <span className="text-xs text-sand-medium/40 font-mono self-center">
                      Current Win Probability: <strong className="text-sand-light">{biddingStage === 'optimized' ? 'Optimal' : 'Standard'}</strong>
                    </span>
                  </div>
                </div>

                {/* Right: Competitor and data panel */}
                <div className="lg:col-span-2 glass-panel rounded-sm p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sand-medium/40 font-bold block mb-4">
                      Market Context Analytics
                    </span>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-sand-medium font-light">Competitor Activity</span>
                          <span className="text-sand-light font-mono">High Activity</span>
                        </div>
                        <div className="w-full bg-sand-light/40 h-2 rounded-full overflow-hidden border border-sand-medium/5">
                          <div className="bg-spice-gold h-full rounded-full" style={{ width: '85%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-sand-medium font-light">Compliance Margin Threshold</span>
                          <span className="text-sand-light font-mono">Secure</span>
                        </div>
                        <div className="w-full bg-sand-light/40 h-2 rounded-full overflow-hidden border border-sand-medium/5">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '98%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-sand-medium font-light">Bidding Strategy Accuracy</span>
                          <span className="text-sand-light font-mono">{biddingStage === 'optimized' ? 'High' : 'Medium'}</span>
                        </div>
                        <div className="w-full bg-sand-light/40 h-2 rounded-full overflow-hidden border border-sand-medium/5">
                          <div className={`h-full rounded-full transition-all duration-500 ${biddingStage === 'optimized' ? 'bg-green-500' : 'bg-spice-gold'}`} style={{ width: biddingStage === 'optimized' ? '92%' : '75%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-sand-medium/5 flex items-center gap-2 text-[10px] text-sand-medium">
                    <FileCheck size={14} className="text-spice-gold" />
                    Proposal compliance analysis updated just now.
                  </div>
                </div>
              </div>
            )}

            {/* NETRA OS Tab */}
            {activeTab === 'netra' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 md:p-8 animate-fade-up">
                
                {/* Left: Netra Live Fleet Monitor Mock Interface (5 cols) */}
                <div className="lg:col-span-5 bg-white/40 border border-sand-medium/10 rounded-sm p-6 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Top Status Header */}
                    <div className="flex items-center justify-between border-b border-sand-medium/15 pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Activity className="text-spice-gold animate-pulse" size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest text-sand-offwhite font-mono">NETRA MONITOR</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider bg-green-500/10 text-green-600 px-2 py-0.5 rounded-sm font-mono font-bold">
                        ACTIVE SECURE
                      </span>
                    </div>

                    {/* Operational KPIs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/80 p-3 rounded-sm border border-sand-medium/10 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-sand-medium/60 font-semibold">Active Fleet Trucks</span>
                        <span className="text-xl font-bold font-mono text-sand-offwhite">1,482</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-sm border border-sand-medium/10 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-sand-medium/60 font-semibold">Fuel Saving KPI</span>
                        <span className="text-xl font-bold font-mono text-green-600">12.4%</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-sm border border-sand-medium/10 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-sand-medium/60 font-semibold">Weekly Alerts</span>
                        <span className="text-xl font-bold font-mono text-orange-500">0</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-sm border border-sand-medium/10 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-sand-medium/60 font-semibold">Connected ERPs</span>
                        <span className="text-xl font-bold font-mono text-sand-offwhite font-sans text-sm mt-1 block">SAP, PgSQL</span>
                      </div>
                    </div>

                    {/* Live Processing Logs */}
                    <span className="block text-[9px] uppercase tracking-widest text-sand-medium font-bold mb-2">SYSTEM ACTIVITY FEED</span>
                    <div className="bg-brand-black/5 border border-sand-medium/15 p-4 rounded-sm font-mono text-[10px] space-y-2 text-sand-offwhite/90">
                      <div className="flex items-start gap-1.5">
                        <span className="text-spice-gold font-bold">&gt;</span>
                        <span>Syncing vehicle telematics via Excel... <span className="text-green-600 font-semibold">[CONNECTED]</span></span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-spice-gold font-bold">&gt;</span>
                        <span>Analyzing fuel invoice discrepancies... <span className="text-green-600 font-semibold">[18 ANOMALIES PARSED]</span></span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-spice-gold font-bold">&gt;</span>
                        <span>Auto-generating compliance digest... <span className="text-green-600 font-semibold">[DISPATCHED]</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Connected Enterprise Logos */}
                  <div>
                    <div className="border-t border-sand-medium/15 pt-4">
                      <span className="block text-[8px] uppercase tracking-widest text-sand-medium/60 font-bold mb-3">TRUSTED INTEGRATIONS</span>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold text-sand-medium">
                        <span className="bg-white/70 px-2 py-0.5 rounded-sm border border-sand-medium/10">SAP</span>
                        <span className="bg-white/70 px-2 py-0.5 rounded-sm border border-sand-medium/10">Salesforce</span>
                        <span className="bg-white/70 px-2 py-0.5 rounded-sm border border-sand-medium/10">Microsoft 365</span>
                        <span className="bg-white/70 px-2 py-0.5 rounded-sm border border-sand-medium/10">PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Operational Stack Grid (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-spice-gold/10 border border-spice-gold/20 text-spice-gold text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm w-fit mb-4">
                      NETRA
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-sand-offwhite leading-tight">
                      The Complete Operational <br />
                      Intelligence Stack
                    </h3>
                    <p className="mt-3 text-sm text-sand-offwhite/80 font-medium leading-relaxed">
                      Everything you need to turn raw fleet telematics, invoicing, and logistics data into automated action.
                    </p>
                  </div>

                  {/* 2x2 Feature Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="p-4 bg-white/75 border border-sand-medium/15 rounded-sm hover:border-spice-gold/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1 bg-spice-gold/15 border border-spice-gold/20 rounded-sm">
                          <Layers className="text-spice-gold" size={14} />
                        </span>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-sand-offwhite">Autonomous Agent OS</h4>
                      </div>
                      <p className="text-[11px] text-sand-medium/95 leading-relaxed font-medium">
                        Subscribe to specialized AI agents that monitor anomalies, send daily digests, and optimize schedules.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        <span className="text-[8px] bg-sand-light/50 text-sand-medium px-1.5 py-0.5 rounded-sm">WORKFLOWS</span>
                        <span className="text-[8px] bg-sand-light/50 text-sand-medium px-1.5 py-0.5 rounded-sm">COST TRACKING</span>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 bg-white/75 border border-sand-medium/15 rounded-sm hover:border-spice-gold/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1 bg-spice-gold/15 border border-spice-gold/20 rounded-sm">
                          <Share2 className="text-spice-gold" size={14} />
                        </span>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-sand-offwhite">Universal Connectors</h4>
                      </div>
                      <p className="text-[11px] text-sand-medium/95 leading-relaxed font-medium">
                        Securely sync telemetry and logistics data from Excel, SharePoint, and ERP databases with a single click.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 bg-white/75 border border-sand-medium/15 rounded-sm hover:border-spice-gold/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1 bg-spice-gold/15 border border-spice-gold/20 rounded-sm">
                          <MessageSquare className="text-spice-gold" size={14} />
                        </span>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-sand-offwhite">Conversational BI</h4>
                      </div>
                      <p className="text-[11px] text-sand-medium/95 leading-relaxed font-medium">
                        Ask complex questions about your fleet fuel logs, operational hours, and maintenance costs in plain English.
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-4 bg-white/75 border border-sand-medium/15 rounded-sm hover:border-spice-gold/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1 bg-spice-gold/15 border border-spice-gold/20 rounded-sm">
                          <Shield className="text-spice-gold" size={14} />
                        </span>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-sand-offwhite">Enterprise Security</h4>
                      </div>
                      <p className="text-[11px] text-sand-medium/95 leading-relaxed font-medium">
                        Data models never train public models. Role-based access controls integrated with Entra ID Single Sign-On.
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        <span className="text-[8px] bg-sand-light/50 text-sand-medium px-1.5 py-0.5 rounded-sm">SOC2 TYPE II</span>
                        <span className="text-[8px] bg-sand-light/50 text-sand-medium px-1.5 py-0.5 rounded-sm">SSO / OAUTH</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-black text-white hover:bg-spice-gold hover:text-brand-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm w-fit mt-4 cursor-pointer"
                  >
                    Deploy Netra
                    <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
