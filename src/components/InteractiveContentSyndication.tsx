import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FileText, 
  Users, 
  Globe, 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  Clock, 
  Check,
  Workflow
} from 'lucide-react';

const workflowSteps = [
  {
    step: '01',
    title: 'Campaign Brief & ICP Alignment',
    timeframe: '1–2 Days',
    icon: FileText,
    accent: 'border-indigo-500 text-indigo-700 bg-indigo-50',
    dotColor: 'border-indigo-600 text-indigo-600',
    description: 'We collaborate to define your target account list (TAL), priority buyer personas, seniority levels, geographic focus, and custom qualifying questions.',
    deliverable: 'Campaign Specification Blueprint & Target Persona Matrix',
    keyPoints: [
      'Account tiering (Enterprise, Mid-Market)',
      'Job title & seniority mapping',
      'Custom qualifying questions (CQQs)'
    ]
  },
  {
    step: '02',
    title: 'Audience Matching & Segmentation',
    timeframe: '2–3 Days',
    icon: Users,
    accent: 'border-sky-500 text-sky-700 bg-sky-50',
    dotColor: 'border-sky-600 text-sky-600',
    description: 'We query and cross-reference your criteria against our proprietary database of 42M+ global B2B professionals to construct a high-intent audience segment.',
    deliverable: 'Validated Target Audience Cohort & Reach Projections',
    keyPoints: [
      'Database deduplication & hygiene',
      'Intent keyword correlation',
      'Opt-in compliance check (GDPR/CCPA)'
    ]
  },
  {
    step: '03',
    title: 'Multi-Channel Syndication Launch',
    timeframe: '3–5 Days',
    icon: Globe,
    accent: 'border-purple-500 text-purple-700 bg-purple-50',
    dotColor: 'border-purple-600 text-purple-600',
    description: 'Your whitepapers, eBooks, or research reports are deployed across dedicated editorial hubs, targeted executive digests, and premium partner networks.',
    deliverable: 'Live Content Syndication Across Verified Networks',
    keyPoints: [
      'Targeted email digests & newsletters',
      'Gated content landing pages',
      'Contextual resource library distribution'
    ]
  },
  {
    step: '04',
    title: '100% Quality & Verification Audit',
    timeframe: '1–2 Days',
    icon: ShieldCheck,
    accent: 'border-teal-500 text-teal-700 bg-teal-50',
    dotColor: 'border-teal-600 text-teal-600',
    description: 'Every captured prospect passes through our dual-stage verification engine: automated corporate data validation followed by manual tele-verification.',
    deliverable: '100% ICP-Matched & QA-Approved Contact Records',
    keyPoints: [
      'Direct business email verification',
      'Company size & revenue confirmation',
      'Explicit opt-in timestamp logging'
    ]
  },
  {
    step: '05',
    title: 'Lead Delivery & CRM Integration',
    timeframe: 'Ongoing',
    icon: Send,
    accent: 'border-emerald-500 text-emerald-700 bg-emerald-50',
    dotColor: 'border-emerald-600 text-emerald-600',
    description: 'Sales-ready leads are formatted and delivered directly into your CRM or via encrypted secure files, complete with download attribution and contact data.',
    deliverable: 'Sales-Ready Contacts in Pipeline with Full Attribution',
    keyPoints: [
      'Direct CRM sync (HubSpot, Salesforce, Marketo)',
      'Custom formatted CSV / Webhook delivery',
      'Comprehensive weekly performance reporting'
    ]
  }
];

const InteractiveContentSyndication = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-slate-600" />
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            The Content Syndication <span className="text-slate-700">Workflow</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent, structured 5-stage process engineered to turn your high-value research and whitepapers into verified, sales-ready B2B pipeline.
          </p>
        </div>

        {/* Scroll-Driven Curved Wave Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop SVG S-Curve Wave Track */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg 
              className="w-full h-full"
              viewBox="0 0 100 1000" 
              preserveAspectRatio="none" 
              fill="none"
            >
              <defs>
                <linearGradient id="timelineWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="25%" stopColor="#0284C7" />
                  <stop offset="50%" stopColor="#9333EA" />
                  <stop offset="75%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>

              {/* Inactive Dashed Background Wave */}
              <path 
                d="M 50 30 C 25 120, 75 220, 50 310 C 25 400, 75 500, 50 590 C 25 680, 75 780, 50 870 C 40 920, 50 970, 50 970" 
                stroke="#E2E8F0" 
                strokeWidth="2.5" 
                strokeDasharray="6 6"
                strokeLinecap="round"
              />

              {/* Active Scroll-Animated Gradient Wave */}
              <motion.path 
                d="M 50 30 C 25 120, 75 220, 50 310 C 25 400, 75 500, 50 590 C 25 680, 75 780, 50 870 C 40 920, 50 970, 50 970" 
                stroke="url(#timelineWaveGradient)" 
                strokeWidth="3.5" 
                fill="none"
                strokeLinecap="round"
                style={{ pathLength: smoothProgress }}
              />
            </svg>
          </div>

          {/* Mobile Straight Spine */}
          <div className="md:hidden absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-slate-200" />

          {/* Timeline Steps */}
          <div className="space-y-8 md:space-y-20 relative z-10">
            {workflowSteps.map((item, index) => {
              const isEven = index % 2 === 0;
              const StepIcon = item.icon;

              return (
                <div 
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Center Milestone Node */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-4 sm:top-6 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center font-bold text-xs sm:text-sm text-slate-900 shadow-xs z-20 transition-all duration-300 group-hover:scale-105">
                    {item.step}
                  </div>

                  {/* Empty Spacer Column for Desktop Balance */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card Column */}
                  <div className={`w-full md:w-1/2 pl-11 sm:pl-16 md:pl-0 ${isEven ? 'md:pr-14' : 'md:pl-14'}`}>
                    <div className="bg-white hover:bg-slate-50/50 border border-slate-200/90 rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:shadow-md hover:border-slate-300">
                      
                      {/* Top Row: Category Badge + Timeframe */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${item.accent}`}>
                          <StepIcon className="w-3.5 h-3.5" />
                          <span>Stage {item.step}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.timeframe}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Key Checklist Points */}
                      <div className="space-y-2 mb-5 pb-5 border-b border-slate-100">
                        {item.keyPoints.map((point) => (
                          <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                            <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-slate-700 stroke-[2.5]" />
                            </div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stage Deliverable Output Box */}
                      <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Stage Deliverable
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 block">
                          {item.deliverable}
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Card */}
        <div className="mt-24 max-w-4xl mx-auto text-center p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Ready to Scale Your Content Distribution?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Reach 42M+ qualified professionals with guaranteed ICP matching and transparent lead verification.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/solutions/content-driven-lead-generation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Explore Content Syndication</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              <span>Speak with a Strategist</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveContentSyndication;
