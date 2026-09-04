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
    accentColor: '#0f62fe',
    badgeClass: 'bg-[#edf5ff] text-[#0043ce] border-[#d0e2ff]',
    summary: 'Identify deterministic in-market accounts and buyer intent surges.',
    description: 'We ingest your Ideal Customer Profile (ICP), map global technographic and firmographic parameters, and analyze real-time research activity across 42M+ verified decision makers.',
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
    accentColor: '#007d79',
    badgeClass: 'bg-[#e6f6f5] text-[#005d5d] border-[#9ef0f0]',
    summary: 'Format educational whitepapers, case studies, and digital assets.',
    description: 'Our creative and demand teams format your high-value assets into compliant, high-converting digital landing touchpoints with custom qualifying questions.',
    deliverable: 'Staged Asset Hub & Tracking Parameter Blueprint',
    keyPoints: [
      'Custom B2B qualification survey questions',
      'Mobile-responsive gated experience',
      'UTM & lead attribution tracking setup'
    ]
  },
  {
    step: '03',
    title: 'Multi-Channel Intent Syndication',
    timeframe: 'Day 5–20',
    icon: Search,
    accentColor: '#8a3ffc',
    badgeClass: 'bg-[#f6f2ff] text-[#6929c4] border-[#d4bbff]',
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
    accentColor: '#ee538b',
    badgeClass: 'bg-[#fff0f5] text-[#9f1853] border-[#ffd6e8]',
    summary: 'Dual-stage algorithmic validation and direct verification.',
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
    accentColor: '#1192e8',
    badgeClass: 'bg-[#edf5ff] text-[#00539a] border-[#bae6fd]',
    summary: 'Direct CRM sync with full engagement attribution.',
    description: 'Sales-ready leads are formatted and delivered directly into your CRM or via encrypted secure webhooks, complete with download attribution.',
    deliverable: 'Sales-Ready Contacts in Pipeline with Full Attribution',
    keyPoints: [
      'Direct CRM sync (HubSpot, Salesforce, Marketo)',
      'Custom formatted CSV & webhook delivery',
      'Weekly pipeline performance reporting'
    ]
  }
];

const InteractiveContentSyndication = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const current = workflowSteps[selectedStep];
  const Icon = current.icon;

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#e0e0e0] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3 border-b border-[#e0e0e0]">
          <div>
            <span className="carbon-eyebrow block mb-1">
              Operational methodology
            </span>
            <h2 className="carbon-display-md text-[#161616]">
              End-to-end campaign execution architecture
            </h2>
          </div>
          <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0">
            A rigorous 5-stage verification and syndication lifecycle ensuring zero lead waste and deterministic buyer engagement.
          </p>
        </div>

        {/* 5-Step Carbon Horizontal / Vertical Selector Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#e0e0e0] bg-white text-[#161616] shadow-xs">
          
          {/* Step Selector List (Left Column) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#e0e0e0] divide-y divide-[#e0e0e0] bg-white">
            {workflowSteps.map((item, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full text-left p-5 lg:p-6 transition-all duration-200 flex items-start justify-between cursor-pointer border-l-4 relative group ${
                    isSelected 
                      ? 'bg-[#fafbfc] border-l-[#0f62fe]' 
                      : 'bg-white border-l-transparent hover:bg-[#fafbfc]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span 
                      className={`text-xs font-mono font-semibold pt-0.5 transition-colors ${
                        isSelected ? 'text-[#0f62fe]' : 'text-[#8c8c8c] group-hover:text-[#161616]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div>
                      <div className={`text-sm transition-colors ${isSelected ? 'text-[#161616] font-medium' : 'text-[#525252] font-normal group-hover:text-[#161616]'}`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-[#8c8c8c] mt-1 line-clamp-1 font-normal">
                        {item.summary}
                      </div>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-all duration-300 flex-shrink-0 mt-1 ${
                      isSelected ? 'text-[#0f62fe] translate-x-1' : 'text-[#8c8c8c] group-hover:text-[#161616]'
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Step Detail Content Pane (Right Column) */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-white text-[#161616]">
            <div>
              {/* Header with Step metadata */}
              <div className="flex items-center justify-between pb-6 border-b border-[#e0e0e0] mb-6">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 border border-[#e0e0e0] flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: `${current.accentColor}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: current.accentColor }} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium block" style={{ color: current.accentColor }}>
                      Phase {current.step} of 05
                    </span>
                    <h3 className="text-xl font-medium text-[#161616]">{current.title}</h3>
                  </div>
                </div>
                <div className={`text-xs font-mono px-2.5 py-1 border ${current.badgeClass}`}>
                  SLA: {current.timeframe}
                </div>
              </div>

              {/* Description */}
              <p className="carbon-body text-[#525252] mb-8 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Deliverable Box with colored left indicator */}
              <div 
                className="bg-[#f4f4f4] border border-[#e0e0e0] p-5 mb-8 border-l-4 transition-colors"
                style={{ borderLeftColor: current.accentColor }}
              >
                <span className="text-[11px] uppercase tracking-wider text-[#6f6f6f] block mb-1.5 font-mono">
                  Guaranteed Deliverable
                </span>
                <span className="text-sm font-medium text-[#161616]">
                  {current.deliverable}
                </span>
              </div>

              {/* Key Verification Checkpoints */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#8c8c8c] mb-4 font-mono">
                  Execution Checkpoints
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.keyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs text-[#525252]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: current.accentColor }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-8 border-t border-[#e0e0e0] mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#525252] font-mono">
                Deterministic compliance & 100% replacement guarantee
              </span>
              <ContactForm 
                type="demo"
                trigger={
                  <button 
                    type="button" 
                    className="carbon-btn-primary h-11 px-5 text-xs font-normal"
                  >
                    <span>Deploy this workflow</span>
                    <ArrowRight className="w-4 h-4 ml-3 flex-shrink-0 group-hover:translate-x-1" />
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
