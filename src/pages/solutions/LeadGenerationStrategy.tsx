import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { FloatingLines } from '@/components/ui/FloatingLines';
import { LiquidEther } from '@/components/ui/LiquidEther';
import ContactForm from '@/components/ContactForm';
import leadGenStrategyHero from '@/assets/lead-generation-strategy-hero.jpg';
import dataAnalytics from '@/assets/data-analytics.jpg';
import resourcesOverview from '@/assets/resources-overview.jpg';
import multichannelAbm from '@/assets/multichannel-abm.jpg';
import strategyWorkshop from '@/assets/businesswoman-presenting-strategies-team.jpg';

const LeadGenerationStrategy = () => {
  const features = [
    {
      title: 'Ideal Customer Profile (ICP) Development',
      description: 'Define your perfect customer with detailed firmographic, technographic, and behavioral data analysis.',
      benefits: [
        'Precise targeting based on data-driven insights',
        'Higher conversion rates from qualified prospects',
        'Reduced sales cycle through better alignment'
      ]
    },
    {
      title: 'Sales Funnel Mapping & Audit',
      description: 'Comprehensive analysis of your current funnel performance with optimization recommendations.',
      benefits: [
        'Identify bottlenecks and conversion gaps',
        'Optimize each stage for maximum efficiency',
        'Improve lead-to-customer conversion rates'
      ]
    },
    {
      title: 'Lead Generation Channel Strategy',
      description: 'Multi-channel approach tailored to your industry, budget, and target audience preferences.',
      benefits: [
        'Diversified lead generation sources',
        'Risk mitigation through multiple channels',
        'Scalable approach for sustainable growth'
      ]
    },
    {
      title: 'Competitive Analysis & Messaging',
      description: 'Market positioning and messaging that differentiates you from competitors effectively.',
      benefits: [
        'Unique value proposition development',
        'Competitive advantage identification',
        'Compelling messaging that resonates'
      ]
    },
    {
      title: 'KPI & Goal Framework',
      description: 'Clear metrics and benchmarks to measure success and optimize campaign performance.',
      benefits: [
        'Measurable ROI and performance tracking',
        'Data-driven optimization decisions',
        'Clear success criteria and milestones'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'ICP & TAM Analysis',
      description: 'Deep audit of your historical closed-won deals to construct an empirical Ideal Customer Profile and map your total market opportunity.'
    },
    {
      step: '02',
      title: 'Intent Signal Setup',
      description: 'Deploy real-time intent monitoring across target accounts, capturing active buyer evaluation surges before your competitors.'
    },
    {
      step: '03',
      title: 'Multi-Channel Activation',
      description: 'Launch synchronized multi-touch campaigns combining programmatic ads, targeted LinkedIn outreach, and personalized email cadences.'
    },
    {
      step: '04',
      title: 'Continuous Optimization',
      description: 'Iterate messaging, channel allocation, and account tiering based on live engagement analytics and pipeline conversion metrics.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with WebGL FloatingLines Simulation */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#f0f4f8] via-[#e5ecf6] to-[#dbe8f5] py-20 lg:py-28 overflow-hidden text-[#161616] border-b border-[#cbdff0]">
          
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
              linesGradient={['#059669', '#6366f1', '#10b981', '#0284c7', '#06b6d4']}
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
                  Strategic Foundation
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Lead Generation Strategy <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    That Drives Measurable ROI
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Build a robust lead generation strategy that identifies your ideal customer profile (ICP), maps high-converting channels, and accelerates revenue pipeline.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Start Strategy Session</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>90-Day Implementation Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Deterministic Intent Signals</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Genuine Stock Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={leadGenStrategyHero} 
                      alt="Strategic business planning and lead generation consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Strategic Foundation Components Section with Curved Gradient Card Design */}
        <section className="py-24 bg-gradient-to-b from-[#dbe8f5] via-[#ede3d4] to-[#e2f1e8] border-b border-[#c2ded0] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <span>Core Strategy Pillars</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Strategic Foundation <span className="text-emerald-700">Components</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our comprehensive strategy development process ensures every campaign is built 
                on solid data and clear objectives for maximum ROI.
              </p>
            </div>

            {/* Curved Gradient Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                // Distinctive gradients for each strategy component
                const gradients = [
                  { from: '#064e3b', to: '#047857', badge: 'bg-emerald-500/20 text-emerald-300', metric: '99.4%', stat: 'ICP Accuracy' },
                  { from: '#1e1b4b', to: '#4338ca', badge: 'bg-indigo-500/20 text-indigo-300', metric: '3.2x', stat: 'Funnel Lift' },
                  { from: '#0f172a', to: '#0284c7', badge: 'bg-sky-500/20 text-sky-300', metric: 'Omni', stat: 'Channel Mix' },
                  { from: '#311042', to: '#7e22ce', badge: 'bg-purple-500/20 text-purple-300', metric: '100%', stat: 'Market Differentiation' },
                  { from: '#065f46', to: '#0d9488', badge: 'bg-teal-500/20 text-teal-300', metric: '24/7', stat: 'Real-Time Telemetry' }
                ];
                const grad = gradients[index % gradients.length];

                return (
                  <div
                    key={feature.title}
                    className="relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                  >
                    {/* Top Curved SVG Gradient Header (User Design #1) */}
                    <div className="relative h-44 p-6 text-white flex flex-col justify-between overflow-hidden">
                      
                      {/* Curved Gradient SVG */}
                      <svg 
                        fill="none" 
                        viewBox="0 0 342 175" 
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full -z-10 group-hover:scale-105 transition-transform duration-500" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          fill={`url(#paint_grad_${index})`} 
                          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                        />
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" y2="128" x2="354.142" y1="128" x1="0" id={`paint_grad_${index}`}>
                            <stop stopColor={grad.from} />
                            <stop stopColor={grad.to} offset="1" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Top Bar with Pillar Tag */}
                      <div className="flex items-center justify-between relative z-10">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border border-white/10 ${grad.badge}`}>
                          Pillar 0{index + 1}
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

        {/* Consulting Capabilities Section with 3D Flip / Reveal Cards (Design #2) */}
        <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Executive Advisory
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Lead Generation Strategy <span className="text-emerald-700">& Consulting</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Ideal for enterprise revenue teams who need a validated blueprint and data roadmap before committing capital to execution.
              </p>
            </div>

            {/* 3D Flip / Reveal Cards Grid (Design #2) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Flip Card 1 */}
              <div className="flip-consulting-card">
                {/* Front Face */}
                <div className="first-face p-5 bg-white border border-slate-200 shadow-md rounded-3xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-4 border border-slate-100">
                    <img 
                      src={dataAnalytics} 
                      alt="Target audience analysis and ICP development" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-2xs">
                      <span>Audience Analysis</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      Target Audience Analysis & ICP
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      Define, segment, and prioritize accounts most likely to convert with high lifetime value.
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
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">2 Weeks Turnaround</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mt-3 mb-4">
                      ICP Discovery Blueprint
                    </h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Firmographic, technographic & intent scoring matrix</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Buying group persona mapping & decision tree</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>High-converting outbound & ad copywriting playbook</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center tracking-wide uppercase shadow-sm">
                    ICP Discovery Guide
                  </div>
                </div>
              </div>

              {/* Flip Card 2 */}
              <div className="flip-consulting-card">
                {/* Front Face */}
                <div className="first-face p-5 bg-white border border-slate-200 shadow-md rounded-3xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-4 border border-slate-100">
                    <img 
                      src={resourcesOverview} 
                      alt="Sales funnel audit and optimization" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-2xs">
                      <span>Funnel Audit</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      Sales Funnel Audit & Diagnostics
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      Identify leakages, friction points, and attribution gaps across your buyer journey.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                    <span>Hover to flip deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Back Face (Revealed on Hover) */}
                <div className="second-face p-6 bg-white text-slate-900 border border-slate-200 shadow-xl rounded-3xl">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Deliverables</span>
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200">10 Days Turnaround</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mt-3 mb-4">
                      Funnel Audit Report
                    </h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>Stage-by-stage conversion benchmark diagnostics</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>Lead qualification & scoring threshold audit</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>Actionable 90-day conversion optimization roadmap</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold text-center tracking-wide uppercase shadow-sm">
                    Funnel Audit Report
                  </div>
                </div>
              </div>

              {/* Flip Card 3 */}
              <div className="flip-consulting-card">
                {/* Front Face */}
                <div className="first-face p-5 bg-white border border-slate-200 shadow-md rounded-3xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-4 border border-slate-100">
                    <img 
                      src={multichannelAbm} 
                      alt="Lead generation channel strategy and mix" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-2xs">
                      <span>Channel Roadmap</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      Channel Strategy & Allocation
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      Determine optimal budget splits across inbound, outbound, paid, and syndicated channels.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
                    <span>Hover to flip deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Back Face (Revealed on Hover) */}
                <div className="second-face p-6 bg-white text-slate-900 border border-slate-200 shadow-xl rounded-3xl">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Deliverables</span>
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200">14 Days Turnaround</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mt-3 mb-4">
                      Channel Allocation Model
                    </h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>Paid vs organic vs outbound budget simulation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>Channel-specific CAC and payback period projections</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>Campaign calendar and tech stack recommendations</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-2.5 rounded-xl bg-sky-600 text-white text-xs font-bold text-center tracking-wide uppercase shadow-sm">
                    Channel Strategy Model
                  </div>
                </div>
              </div>

              {/* Flip Card 4 */}
              <div className="flip-consulting-card">
                {/* Front Face */}
                <div className="first-face p-5 bg-white border border-slate-200 shadow-md rounded-3xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-4 border border-slate-100">
                    <img 
                      src={strategyWorkshop} 
                      alt="Value proposition and messaging workshop" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-2xs">
                      <span>Messaging Workshop</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      Value Proposition Workshop
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      Craft differentiated messaging that resonates with complex B2B buying committees.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
                    <span>Hover to flip deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Back Face (Revealed on Hover) */}
                <div className="second-face p-6 bg-white text-slate-900 border border-slate-200 shadow-xl rounded-3xl">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Deliverables</span>
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-purple-50 text-purple-800 border border-purple-200">Workshop & Assets</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mt-3 mb-4">
                      Messaging Matrix
                    </h4>
                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Role-specific value prop & pain-point matrix</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Sales enablement battlecards & objection handling</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>High-converting outbound & ad copywriting playbook</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-2.5 rounded-xl bg-purple-600 text-white text-xs font-bold text-center tracking-wide uppercase shadow-sm">
                    Messaging Matrix Guide
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Combined Process & Grand Finale CTA Master Section with LiquidEther Fluid Background */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#e2f1e8] via-[#ece5f8] to-[#dfd5f5] overflow-hidden border-t border-[#cdbfe8]">
          
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
            
            {/* Subsection 1: Strategy Development Process */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
                Our Strategy Development Process
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A systematic approach to building your lead generation foundation
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
                  Ready to Build Your Lead Generation Strategy?
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Let's create a comprehensive strategy that identifies your best prospects and maps the most effective path to convert them into customers.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                        <span>Book a Strategy Session</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />

                  <ContactForm 
                    type="general"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200">
                        <span>Download Strategy Guide</span>
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

export default LeadGenerationStrategy;