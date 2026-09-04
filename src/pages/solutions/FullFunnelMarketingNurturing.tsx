import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { FloatingLines } from '@/components/ui/FloatingLines';
import { LiquidEther } from '@/components/ui/LiquidEther';
import ContactForm from '@/components/ContactForm';
import fullFunnelHero from '@/assets/full-funnel-marketing-hero.jpg';
import digitalMarketingHero from '@/assets/digital-marketing-hero.jpg';
import dataAnalytics from '@/assets/data-analytics.jpg';
import integrationsHero from '@/assets/integrations-hero.jpg';
import roiMeasurement from '@/assets/roi-measurement.jpg';

const FullFunnelMarketingNurturing = () => {
  const features = [
    {
      title: 'Marketing Automation Architecture',
      description: 'Enterprise HubSpot, Marketo, and Pardot implementations configured with complex conditional logic, lifecycle stages, and lead routing.',
      benefits: [
        'HubSpot Marketing Hub setup & custom lifecycle stages',
        'Marketo program templates and multi-variable scoring models',
        'Salesforce Pardot sync with custom bidirectional field mapping'
      ]
    },
    {
      title: 'Behavior-Triggered Nurture Cadences',
      description: 'Sophisticated multi-touch drip sequences and progressive educational nurture flows that guide prospects down the funnel.',
      benefits: [
        'Action-triggered email delivery based on content consumption',
        'Persona-specific educational tracks overcoming objections',
        'Automated re-engagement workflows resurrecting stalled leads'
      ]
    },
    {
      title: 'Predictive Lead Scoring & Routing',
      description: 'Multi-dimensional lead scoring combining explicit firmographic fit with real-time implicit behavioral engagement signals.',
      benefits: [
        'Fit + Intent + Activity score threshold calibration',
        'Automated real-time Slack/CRM notifications for sales-ready MQLs',
        'Negative scoring and time-decay algorithms preventing false positives'
      ]
    },
    {
      title: 'Unified CRM & Pipeline Integration',
      description: 'Flawless bidirectional synchronization between marketing systems and sales CRMs ensuring complete data integrity.',
      benefits: [
        'Salesforce & HubSpot CRM automated opportunity attribution',
        'Unified prospect timeline capturing all digital interactions',
        'Automated task creation and SDR round-robin distribution'
      ]
    },
    {
      title: 'Multi-Touch Revenue Attribution',
      description: 'Full-funnel attribution models that trace pipeline and closed-won revenue back to initial touchpoints and mid-funnel content.',
      benefits: [
        'First-touch, last-touch, and W-shaped multi-touch attribution',
        'Closed-loop revenue dashboards mapping CAC and payback periods',
        'Cohort velocity tracking highlighting conversion bottlenecks'
      ]
    }
  ];

  const automationPlatforms = [
    { 
      name: 'HubSpot Marketing Hub', 
      desc: 'Complete inbound nurture workflows, lead scoring, and automated pipeline progression.',
      image: digitalMarketingHero,
      tag: 'HubSpot Elite',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      turnaround: 'Rapid Onboarding',
      deliverables: [
        'Custom lifecycle stage definitions & automation triggers',
        'Behavioral email nurturing sequences with smart content',
        'Sales Hub handoff automation & deal creation workflows'
      ],
      btnColor: 'bg-emerald-600'
    },
    { 
      name: 'Marketo Enterprise Automation', 
      desc: 'Advanced lead management, dynamic segmentation, and enterprise marketing operations.',
      image: dataAnalytics,
      tag: 'Enterprise Ops',
      badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      turnaround: 'Custom Architecture',
      deliverables: [
        'Program templates and centralized tokenized assets',
        'Multi-tiered demographic and behavioral scoring models',
        'Advanced webhook integrations and data enrichment sync'
      ],
      btnColor: 'bg-indigo-600'
    },
    { 
      name: 'Salesforce Pardot (MCAE) Sync', 
      desc: 'Seamless alignment between B2B marketing nurture and Salesforce enterprise CRM.',
      image: integrationsHero,
      tag: 'Salesforce Native',
      badge: 'bg-sky-50 text-sky-800 border-sky-200',
      turnaround: 'Full Integration',
      deliverables: [
        'Connected campaigns and custom object sync architecture',
        'Engagement Studio nurture programs with conditional branches',
        'B2B Marketing Analytics dashboards and pipeline reports'
      ],
      btnColor: 'bg-sky-600'
    },
    { 
      name: 'Multi-Touch Revenue Telemetry', 
      desc: 'Closed-loop attribution connecting marketing spend directly to closed-won ARR.',
      image: roiMeasurement,
      tag: 'ROI Attribution',
      badge: 'bg-purple-50 text-purple-800 border-purple-200',
      turnaround: 'Real-Time Sync',
      deliverables: [
        'Multi-touch algorithmic attribution model implementation',
        'Pipeline velocity cohort analysis by lead source',
        'Executive board-ready ROI tracking and CAC payback dashboards'
      ],
      btnColor: 'bg-purple-600'
    }
  ];

  const process = [
    { step: '01', title: 'Funnel & Tooling Audit', description: 'Evaluate current MAP/CRM configurations, data hygiene, and lifecycle drop-offs.' },
    { step: '02', title: 'Lifecycle & Scoring Design', description: 'Design deterministic lifecycle stages, scoring algorithms, and routing rules.' },
    { step: '03', title: 'Nurture & Workflow Build', description: 'Construct multi-branch nurture sequences, dynamic content, and system syncs.' },
    { step: '04', title: 'Attribution & Optimization', description: 'Deploy closed-loop revenue reporting and iterate nurture tracks based on conversion data.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with WebGL FloatingLines Simulation */}
        <section className="relative min-h-[90vh] flex items-center bg-slate-50 py-20 lg:py-28 overflow-hidden text-[#161616] border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic FloatingLines WebGL Simulation */}
          <div className="absolute inset-0 pointer-events-auto z-0 opacity-85">
            <FloatingLines
              enabledWaves={['top', 'middle', 'bottom']}
              lineCount={[10, 14, 18]}
              lineDistance={[5, 4, 3]}
              bendRadius={6.0}
              bendStrength={-0.6}
              interactive={true}
              parallax={true}
              linesGradient={['#059669', '#a855f7', '#6366f1', '#10b981', '#06b6d4']}
              mixBlendMode="normal"
            />
          </div>

          {/* Soft Bottom Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 pointer-events-none z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-xs">
                  Full-Funnel Acceleration
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Marketing Automation That <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    Nurtures Leads Into Revenue
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Eliminate pipeline leakage with intelligent marketing automation, predictive lead scoring, and automated nurture sequences that turn warm prospects into closed-won customers.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Automate Your Funnel</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>3.8x Average MQL-to-SQL Conversion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Certified HubSpot & Marketo Architects</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Genuine Stock Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={fullFunnelHero} 
                      alt="Full-funnel marketing automation and lead nurturing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Core Strategic Pillars with Curved Gradient Cards */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Automation Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Full-Funnel Automation <span className="text-emerald-700">Capabilities</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Connect your marketing touchpoints into a unified, intelligent revenue machine that automatically scores, nurtures, and advances every prospect.
              </p>
            </div>

            {/* Curved Gradient Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const gradients = [
                  { from: '#064e3b', to: '#047857', badge: 'bg-emerald-500/20 text-emerald-300', metric: '100%', stat: 'CRM Sync Integrity' },
                  { from: '#1e1b4b', to: '#4338ca', badge: 'bg-indigo-500/20 text-indigo-300', metric: '3.8x', stat: 'MQL-to-SQL Lift' },
                  { from: '#0f172a', to: '#0284c7', badge: 'bg-sky-500/20 text-sky-300', metric: '+240%', stat: 'Pipeline Velocity' },
                  { from: '#311042', to: '#7e22ce', badge: 'bg-purple-500/20 text-purple-300', metric: '-35%', stat: 'Sales Cycle Duration' },
                  { from: '#065f46', to: '#0d9488', badge: 'bg-teal-500/20 text-teal-300', metric: '99.2%', stat: 'Attribution Match' }
                ];
                const grad = gradients[index % gradients.length];

                return (
                  <div
                    key={feature.title}
                    className="relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                  >
                    {/* Top Curved SVG Gradient Header */}
                    <div className="relative h-44 p-6 text-white flex flex-col justify-between overflow-hidden">
                      
                      <svg 
                        fill="none" 
                        viewBox="0 0 342 175" 
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full -z-10 group-hover:scale-105 transition-transform duration-500" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          fill={`url(#paint_ff_grad_${index})`} 
                          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                        />
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" y2="128" x2="354.142" y1="128" x1="0" id={`paint_ff_grad_${index}`}>
                            <stop stopColor={grad.from} />
                            <stop stopColor={grad.to} offset="1" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Top Bar with Pillar Tag */}
                      <div className="flex items-center justify-between relative z-10">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border border-white/10 ${grad.badge}`}>
                          Module 0{index + 1}
                        </span>
                      </div>

                      {/* Big Metric Display & Stat Label */}
                      <div className="relative z-10">
                        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          {grad.metric}
                        </div>
                        <div className="text-xs font-medium text-slate-200 mt-0.5">
                          {grad.stat}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-5">
                          {feature.description}
                        </p>
                      </div>

                      {/* Benefits Checklist */}
                      <div className="pt-4 border-t border-slate-100 space-y-2.5">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Enterprise Automation Platforms with 3D Flip Cards */}
        <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Platform Ecosystem
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Automation Platforms <span className="text-emerald-700">& Scope</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We implement and optimize best-in-class B2B marketing operations platforms and revenue telemetry systems.
              </p>
            </div>

            {/* 3D Flip / Reveal Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationPlatforms.map((platform) => (
                <div key={platform.name} className="flip-consulting-card">
                  
                  {/* Front Face */}
                  <div className="first-face p-5 bg-white border border-slate-200 shadow-md rounded-3xl">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-4 border border-slate-100">
                      <img 
                        src={platform.image} 
                        alt={platform.name} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-2xs">
                        <span>{platform.tag}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5">
                        {platform.name}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {platform.desc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>Hover to flip deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Back Face (Revealed on Hover) */}
                  <div className="second-face p-6 bg-white text-slate-900 border border-slate-200 shadow-xl rounded-3xl">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Deliverables</span>
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border ${platform.badge}`}>
                          {platform.turnaround}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mt-3 mb-4">
                        {platform.name} Scope
                      </h4>
                      <div className="space-y-3 text-xs text-slate-700">
                        {platform.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`w-full py-2.5 rounded-xl ${platform.btnColor} text-white text-xs font-bold text-center tracking-wide uppercase shadow-sm`}>
                      Architecture Ready
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Combined Process & Grand Finale CTA with LiquidEther */}
        <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden border-t border-slate-200">
          
          {/* Dynamic Liquid Ether WebGL Fluid Simulation Background */}
          <div className="absolute inset-0 pointer-events-auto z-0 opacity-40">
            <LiquidEther
              colors={['#10b981', '#06b6d4', '#6366f1', '#a855f7']}
              mouseForce={24}
              cursorSize={110}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={2000}
              autoRampDuration={0.6}
            />
          </div>

          {/* Light Vignette Overlays */}
          <div className="absolute inset-0 bg-white/30 pointer-events-none z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Subsection 1: Automation Deployment Process */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
                Our Automation Implementation Process
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A systematic roadmap engineered to audit, implement, and automate your revenue engine
              </p>
            </div>

            {/* 4-Step Clean White Process Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {process.map((item) => (
                <div 
                  key={item.step}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-lg flex items-center justify-center mb-4 border border-emerald-200">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subsection 2: Clean White Grand Finale CTA Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
              <div className="space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Ready to Automate Your Revenue Funnel?
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Let's design a custom marketing automation and lead nurturing blueprint that accelerates deal velocity and eliminates pipeline leakage.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                        <span>Automate Your Funnel</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />

                  <ContactForm 
                    type="general"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200">
                        <span>Request Funnel Audit</span>
                      </button>
                    }
                  />
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FullFunnelMarketingNurturing;