import { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Target, 
  Search, 
  Layers, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import ContactForm from './ContactForm';

const workflowSteps = [
  {
    step: '01',
    title: 'Audience Definition & Intent Mapping',
    timeframe: 'Day 1–2',
    icon: Target,
    summary: 'Identify deterministic in-market accounts and buyer intent surges.',
    description: 'We ingest your Ideal Customer Profile (ICP), map global technographic and firmographic parameters, and activate real-time intent telemetry across 42M+ verified decision makers.',
    deliverable: 'Approved Master Account List (TAL) & Intent Filter Matrix',
    keyPoints: [
      'Account-level buying stage scoring',
      'Granular committee member identification',
      'Exclusion list & competitor suppression'
    ]
  },
  {
    step: '02',
    title: 'Asset Preparation & Campaign Staging',
    timeframe: 'Day 3–4',
    icon: Layers,
    summary: 'Format educational whitepapers, case studies, and digital assets.',
    description: 'Our creative and demand teams format your high-value assets into compliant, high-converting digital landing touchpoints with custom qualifying questions.',
    deliverable: 'Staged Asset Hub & Tracking Parameter Blueprint',
    keyPoints: [
      'Custom B2B qualification survey questions',
      'Mobile-responsive gated experience',
      'UTM & telemetry tracking setup'
    ]
  },
  {
    step: '03',
    title: 'Multi-Channel Intent Syndication',
    timeframe: 'Day 5–20',
    icon: Search,
    summary: 'Orchestrated distribution across verified publishing networks.',
    description: 'Targeted decision makers engage with your content across our premium B2B publisher network, email digests, and account-matched digital touchpoints.',
    deliverable: 'Live Content Syndication Across Verified Networks',
    keyPoints: [
      'Targeted executive digests & newsletters',
      'Dedicated gated asset landing environments',
      'Contextual publisher network placement'
    ]
  },
  {
    step: '04',
    title: '100% Quality & Verification Audit',
    timeframe: '1–2 Days',
    icon: ShieldCheck,
    summary: 'Dual-stage automated telemetry and manual verification.',
    description: 'Every captured prospect passes through our dual-stage verification engine: automated corporate data validation followed by tele-verification.',
    deliverable: '100% ICP-Matched & QA-Approved Contact Records',
    keyPoints: [
      'Direct business email & phone verification',
      'Company size & revenue confirmation',
      'Explicit opt-in timestamp logging'
    ]
  },
  {
    step: '05',
    title: 'Lead Delivery & CRM Integration',
    timeframe: 'Real-time',
    icon: Send,
    summary: 'Direct CRM sync with full engagement attribution.',
    description: 'Sales-ready leads are formatted and delivered directly into your CRM or via encrypted secure webhooks, complete with download attribution.',
    deliverable: 'Sales-Ready Contacts in Pipeline with Full Attribution',
    keyPoints: [
      'Direct CRM sync (HubSpot, Salesforce, Marketo)',
      'Custom formatted CSV & webhook delivery',
      'Weekly pipeline performance telemetry'
    ]
  }
];

const InteractiveContentSyndication = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const current = workflowSteps[selectedStep];
  const Icon = current.icon;

  return (
    <section className="py-20 lg:py-28 bg-[#0b0f17] border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-800">
          <div>
            <span className="carbon-eyebrow block mb-1 text-blue-400 font-mono">
              Operational methodology
            </span>
            <h2 className="carbon-display-md text-white">
              End-to-end campaign execution architecture
            </h2>
          </div>
          <p className="carbon-body-sm text-slate-400 max-w-md mt-2 md:mt-0">
            A rigorous 5-stage verification and syndication lifecycle ensuring zero lead waste and deterministic buyer engagement.
          </p>
        </div>

        {/* 5-Step Carbon Horizontal / Vertical Selector Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-800 bg-[#0f172a] shadow-xl">
          
          {/* Step Selector List (Left Column) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-800 divide-y divide-slate-800/80">
            {workflowSteps.map((item, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full text-left p-5 transition-colors flex items-start justify-between cursor-pointer border-l-4 ${
                    isSelected 
                      ? 'bg-slate-800/90 border-l-blue-500 text-white' 
                      : 'bg-[#0f172a] border-l-transparent text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-xs font-mono font-semibold pt-0.5 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`}>
                      {item.step}
                    </span>
                    <div>
                      <div className={`text-sm font-normal ${isSelected ? 'text-white font-medium' : 'text-slate-300'}`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {item.summary}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 mt-1 ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Step Detail Content Pane (Right Column) */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-[#0f172a]">
            <div>
              {/* Header with Step metadata */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400">Phase {current.step} of 05</span>
                    <h3 className="text-xl font-medium text-white">{current.title}</h3>
                  </div>
                </div>
                <div className="bg-slate-800 border border-slate-700 px-3 py-1 text-xs text-slate-300 font-mono">
                  SLA: {current.timeframe}
                </div>
              </div>

              {/* Description */}
              <p className="carbon-body text-slate-300 mb-8 leading-relaxed">
                {current.description}
              </p>

              {/* Deliverable Box */}
              <div className="bg-slate-900 border border-slate-800 p-4 mb-8">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1 font-mono">
                  Guaranteed Deliverable
                </span>
                <span className="text-sm font-medium text-white">
                  {current.deliverable}
                </span>
              </div>

              {/* Key Verification Checkpoints */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-mono">
                  Execution Checkpoints
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.keyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-8 border-t border-slate-800 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Deterministic compliance & 100% replacement guarantee
              </span>
              <ContactForm 
                type="demo"
                trigger={
                  <button 
                    type="button" 
                    className="carbon-btn-primary text-xs py-2.5 px-4"
                  >
                    <span>Deploy this workflow</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </button>
                }
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveContentSyndication;
