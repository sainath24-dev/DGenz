import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  Globe, 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  Check,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const workflowSteps = [
  {
    step: '01',
    title: 'Campaign Brief & ICP Alignment',
    timeframe: '1–2 Days',
    icon: FileText,
    summary: 'Target account tiering and custom qualification matrix.',
    description: 'We collaborate to define your target account list (TAL), priority buyer personas, seniority thresholds, geographic scope, and custom qualifying questions.',
    deliverable: 'Campaign Specification Blueprint & Target Persona Matrix',
    keyPoints: [
      'Account tiering (Enterprise, Mid-Market)',
      'Buying committee & seniority mapping',
      'Custom qualifying questions (CQQs)'
    ]
  },
  {
    step: '02',
    title: 'Audience Matching & Intent Verification',
    timeframe: '2–3 Days',
    icon: Users,
    summary: 'Cross-referencing criteria against 42M+ verified decision makers.',
    description: 'We query and cross-reference your criteria against our verified database of 42M+ global B2B professionals to construct a high-intent audience segment.',
    deliverable: 'Validated Target Audience Cohort & Reach Projections',
    keyPoints: [
      'Database deduplication and hygiene',
      'Deterministic intent signal correlation',
      'Opt-in compliance check (GDPR/CCPA/SOC2)'
    ]
  },
  {
    step: '03',
    title: 'Multi-Channel Syndication Deployment',
    timeframe: '3–5 Days',
    icon: Globe,
    summary: 'Deployment across dedicated editorial hubs and partner networks.',
    description: 'Your whitepapers, research reports, and technical guides are deployed across targeted executive digests and contextual partner networks.',
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
    <section className="py-20 lg:py-28 bg-[#f4f4f4] border-b border-[#e0e0e0] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#e0e0e0]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#e0e0e0] bg-white">
          
          {/* Step Selector List (Left Column) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#e0e0e0] divide-y divide-[#e0e0e0]">
            {workflowSteps.map((item, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full text-left p-5 transition-colors flex items-start justify-between cursor-pointer border-l-4 ${
                    isSelected 
                      ? 'bg-[#f4f4f4] border-l-[#0f62fe]' 
                      : 'bg-white border-l-transparent hover:bg-[#f4f4f4]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-xs font-mono font-semibold pt-0.5 ${isSelected ? 'text-[#0f62fe]' : 'text-[#8c8c8c]'}`}>
                      {item.step}
                    </span>
                    <div>
                      <div className={`text-sm font-normal ${isSelected ? 'text-[#161616] font-medium' : 'text-[#525252]'}`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-[#8c8c8c] mt-0.5 line-clamp-1">
                        {item.summary}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 mt-1 ${isSelected ? 'text-[#0f62fe] translate-x-1' : 'text-[#8c8c8c]'}`} />
                </button>
              );
            })}
          </div>

          {/* Step Detail Content Pane (Right Column) */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-white">
            <div>
              {/* Header with Step metadata */}
              <div className="flex items-center justify-between pb-6 border-b border-[#e0e0e0] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#0f62fe]">Phase {current.step} of 05</span>
                    <h3 className="text-xl font-normal text-[#161616]">{current.title}</h3>
                  </div>
                </div>
                <div className="bg-[#f4f4f4] border border-[#e0e0e0] px-3 py-1 text-xs text-[#525252]">
                  SLA: {current.timeframe}
                </div>
              </div>

              {/* Description */}
              <p className="carbon-body text-[#525252] mb-8 leading-relaxed">
                {current.description}
              </p>

              {/* Deliverable Box */}
              <div className="bg-[#f4f4f4] border border-[#e0e0e0] p-4 mb-8">
                <span className="text-[11px] uppercase tracking-wider text-[#8c8c8c] block mb-1">
                  Guaranteed Deliverable
                </span>
                <span className="text-sm font-medium text-[#161616]">
                  {current.deliverable}
                </span>
              </div>

              {/* Key Verification Points */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#161616] mb-3">
                  Key Verification Standards
                </h4>
                <div className="space-y-2.5">
                  {current.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-sm text-[#525252]">
                      <Check className="w-4 h-4 text-[#0f62fe] flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-[#e0e0e0] mt-8 flex items-center justify-between">
              <Link 
                to="/solutions/content-driven-lead-generation" 
                className="carbon-btn-primary text-xs"
              >
                <span>View Full Syndication Specs</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
              <div className="text-xs text-[#8c8c8c]">
                Next Phase: {workflowSteps[(selectedStep + 1) % workflowSteps.length].title}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveContentSyndication;
