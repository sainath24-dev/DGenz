import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Lightfall from '@/components/ui/Lightfall';
import ContactForm from '@/components/ContactForm';
import trustSecurity from '@/assets/trust-security.jpg';

const WhyDGenz = () => {
  const differentiators = [
    {
      badge: '95% Accuracy',
      title: 'AI-Powered Intent Intelligence',
      description: 'Advanced machine learning models analyze billions of behavioral intent signals to identify active buying committees before competitors.',
      benefit: 'Deterministic surge detection'
    },
    {
      badge: '415M+ Profiles',
      title: 'Precision B2B Account Graph',
      description: 'Access verified decision-maker records across global markets, enriched with technographic, firmographic, and role-based data.',
      benefit: '32% higher engagement rates'
    },
    {
      badge: '17% Pipeline Lift',
      title: 'Measurable Revenue Attribution',
      description: 'Full closed-loop telemetry connecting every ad impression, content download, and outreach touchpoint directly to closed-won ARR.',
      benefit: 'Multi-touch ROI proof'
    },
    {
      badge: 'SOC 2 Type II',
      title: 'Enterprise Security & Compliance',
      description: 'Bank-grade encryption, GDPR/CCPA strict adherence, and certified data governance protect your corporate brand at every touchpoint.',
      benefit: '100% compliant data sourcing'
    },
    {
      badge: '3-5 Days Launch',
      title: 'Rapid Deployment & Velocity',
      description: 'Launch complex multi-channel ABM campaigns in days rather than months with our agile delivery pods and pre-built integrations.',
      benefit: '28% faster time-to-value'
    },
    {
      badge: '#1 Rated ABM',
      title: 'Dedicated Senior Strategy Pods',
      description: 'Every client is partnered with seasoned B2B growth architects and media managers committed to hitting your pipeline milestones.',
      benefit: 'Zero junior handoffs'
    }
  ];

  const comparison = [
    {
      feature: 'Intent Data Accuracy',
      dgenz: '95%+',
      competitors: '70-80%'
    },
    {
      feature: 'Campaign Setup Time',
      dgenz: '3-5 days',
      competitors: '2-4 weeks'
    },
    {
      feature: 'Verified Global B2B Reach',
      dgenz: '415M+ profiles',
      competitors: '50-200M'
    },
    {
      feature: 'Real-Time Intent Optimization',
      badge: 'Global Scale',
      title: 'Enterprise Data Coverage',
      description: '42M+ verified B2B contacts across 500K+ enterprise accounts globally, maintained with automated validation loops.',
      benefit: 'Direct decision-maker access'
    },
    {
      badge: 'Integrated',
      title: 'Omnichannel ABM Orchestration',
      description: 'Synchronized outreach across programmatic display, CTV, paid social, direct email, and phone channels.',
      benefit: 'Unified buyer journey'
    },
    {
      badge: 'Guaranteed',
      title: 'Performance & Revenue Focus',
      description: 'Transparent reporting and measurable ROI attribution tied to real pipeline velocity and closed-won revenue.',
      benefit: 'Targeted pipeline delivery'
    },
    {
      badge: 'Enterprise-Grade',
      title: 'Security & Compliance First',
      description: 'SOC 2 Type II certified, GDPR compliant, CCPA ready. Your brand reputation and data governance are strictly protected.',
      benefit: 'Zero risk deployment'
    },
    {
      badge: 'Specialized',
      title: 'Dedicated Strategy & Support',
      description: 'Senior ABM strategists and data engineers dedicated to optimizing your campaigns and pipeline conversion metrics.',
      benefit: 'Expert revenue team'
    }
  ];

  const metrics = [
    { value: '3.8x', label: 'Average Pipeline ROI', detail: 'Compared to traditional inbound marketing' },
    { value: '45%', label: 'Shorter Sales Cycles', detail: 'Through pre-warmed intent engagement' },
    { value: '88%', label: 'Account Penetration', detail: 'Across target buying committees' },
    { value: '99.2%', label: 'Data Accuracy Rate', detail: 'Verified through continuous hygiene' }
  ];

  const pillars = [
    {
      title: 'Precision Targeting',
      description: 'We eliminate wasted spend by focusing exclusively on accounts actively in-market for your solution.'
    },
    {
      title: 'Omnichannel Reach',
      description: 'Engage decision-makers across every digital and direct touchpoint they trust during their evaluation.'
    },
    {
      title: 'Revenue Attribution',
      description: 'Direct pipeline connection proves marketing impact with complete visibility from first touch to closed deal.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Lightfall WebGL Simulation */}
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-slate-50 via-slate-100/60 to-white py-20 lg:py-28 overflow-hidden text-slate-900 border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic Lightfall WebGL Simulation */}
          <div className="absolute inset-0 pointer-events-auto z-0 opacity-80 overflow-hidden">
            <Lightfall
              colors={['#059669', '#10b981', '#0284c7', '#06b6d4', '#6366f1']}
              speed={0.4}
              streakCount={10}
              streakWidth={1.8}
              streakLength={1.6}
              glow={1.3}
              density={1.1}
              twinkle={0.35}
              zoom={1.0}
              backgroundGlow={0.15}
              opacity={0.85}
              mouseInteraction={true}
              mixBlendMode="normal"
              className="w-full h-full"
            />
          </div>

          {/* Soft Bottom Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 pointer-events-none z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-xs">
                  Why DGenz Media
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  The Enterprise Standard for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    Account-Based Growth
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Discover why 500+ global B2B brands partner with DGenz Media to identify high-intent buying committees and scale revenue with precision.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Schedule Consultation</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />

                  <a 
                    href="/solutions/lead-generation-strategy"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer"
                  >
                    <span>Explore Solutions</span>
                  </a>
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>500+ Enterprise Brands Powered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>95%+ Intent Data Accuracy</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={trustSecurity} 
                      alt="DGenz Media enterprise trust and security" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Key Differentiators (Clean White Cards) */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Core Advantages
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                What Sets DGenz Media <span className="text-emerald-700">Apart</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We combine proprietary intent telemetry, multi-channel execution, and senior strategists to deliver superior pipeline outcomes.
              </p>
            </div>

            {/* Differentiators Grid (Clean White Cards) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item) => (
                <div 
                  key={item.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-5">
                      {item.badge}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Competitive Comparison (Clean White Card Table) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Side-by-Side Comparison
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                DGenz Media vs Traditional ABM
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                See the measurable advantages of choosing our deterministic intent architecture over legacy providers.
              </p>
            </div>

            {/* Comparison Table Card */}
            <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-5 font-bold text-slate-900 text-sm sm:text-base">Feature & Capability</th>
                      <th className="px-6 py-5 font-bold text-emerald-800 text-sm sm:text-base bg-emerald-50/50">DGenz Media</th>
                      <th className="px-6 py-5 font-bold text-slate-500 text-sm sm:text-base">Traditional Providers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm sm:text-base">
                    {comparison.map((row) => (
                      <tr key={row.feature} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-6 py-4.5 font-semibold text-slate-900">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4.5 bg-emerald-50/20 font-bold text-emerald-700">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{row.dgenz}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4.5 text-slate-500 font-medium">
                          {row.competitors}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Proven ROI Impact (Clean White Metric Cards) */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Quantified Outcomes
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Proven Results That Drive ARR
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our enterprise clients achieve measurable improvements across every stage of their revenue funnel.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {metrics.map((item) => (
                <div 
                  key={item.label}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-lg text-center transition-all duration-300"
                >
                  <div className="text-4xl sm:text-5xl font-black text-emerald-700 tracking-tight mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-slate-900 shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Experience the DGenz Advantage?
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                Partner with DGenz Media to build a predictable, high-converting account-based revenue engine for your enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="demo"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Schedule Consultation</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200">
                      <span>Request Sample Pipeline Plan</span>
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyDGenz;