import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Lightfall from '@/components/ui/Lightfall';
import ContactForm from '@/components/ContactForm';
import dataAnalytics from '/assets/img6.jpg';
import aiIntentData from '/assets/img7.jpg';

const OurData = () => {
  const dataPoints = [
    {
      metric: '415M+',
      title: 'Verified Decision-Makers',
      description: 'Comprehensive, triple-verified executive profiles across senior leadership, VPs, and director-level buying committees.',
      proof: 'Triple-verified SMTP & direct dials'
    },
    {
      metric: '129+',
      title: 'Global Industry Verticals',
      description: 'Extensive account coverage spanning enterprise software, manufacturing, healthcare, fintech, and professional services.',
      proof: '120+ international markets covered'
    },
    {
      metric: 'Real-Time',
      title: 'Dynamic Intent Telemetry',
      description: 'Live buying intent signals tracked across digital content surges, research patterns, and competitive evaluation cycles.',
      proof: 'Sub-second surge detection'
    },
    {
      metric: '100%',
      title: 'Privacy & Governance Compliant',
      description: 'Full adherence to GDPR, CCPA, and global data privacy frameworks with deterministic opt-in validation.',
      proof: 'SOC 2 Type II certified pipeline'
    }
  ];

  const sources = [
    'First-party data partnerships with 100+ vetted B2B editorial publishers',
    'Behavioral intent telemetry tracking across 50,000+ digital B2B properties',
    'Executive content consumption across whitepapers, webinars, and benchmarks',
    'High-intent search keyword volume and product comparison surges',
    'Technographic stack telemetry tracking software adoption changes',
    'Bidirectional CRM and marketing automation synchronization'
  ];

  const methodology = [
    {
      step: '01',
      stage: 'Ingestion',
      title: 'Multi-Source Data Aggregation',
      description: 'We ingest structured and unstructured telemetry from verified publisher networks, content gates, and digital footprint surges.'
    },
    {
      step: '02',
      stage: 'Normalization',
      title: 'AI-Powered Entity Resolution',
      description: 'Machine learning algorithms map individual interactions to unified account entities and specific buying committee personas.'
    },
    {
      step: '03',
      stage: 'Verification',
      title: 'Multi-Layer Quality Assurance',
      description: 'Continuous validation algorithms eliminate outdated records, verify email deliverability, and filter non-commercial traffic.'
    },
    {
      step: '04',
      stage: 'Activation',
      title: 'Deterministic Pipeline Delivery',
      description: 'Clean, actionable lead intelligence is routed directly into your CRM or activated across programmatic ad channels.'
    }
  ];

  const standards = [
    {
      title: '95%+ Data Accuracy',
      description: 'Rigorous automated validation cycles eliminate bounce rates and guarantee authentic decision-maker contact details.',
      highlight: 'Zero bounce guarantee'
    },
    {
      title: 'Strict Privacy Governance',
      description: 'Continuous audit trails and deterministic opt-in compliance across GDPR, CCPA, and international data laws.',
      highlight: '100% compliant sourcing'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Lightfall WebGL Simulation */}
        <section className="relative min-h-0 sm:min-h-[80vh] flex items-center bg-gradient-to-b from-slate-50 via-slate-100/60 to-white pt-28 sm:pt-32 pb-16 lg:py-28 overflow-hidden text-slate-900 border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic Lightfall WebGL Simulation */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-80 overflow-hidden">
            <Lightfall
              colors={['#059669', '#10b981', '#0284c7', '#06b6d4', '#6366f1']}
              speed={0.35}
              streakCount={4}
              streakWidth={1.0}
              streakLength={1.4}
              glow={1.1}
              density={0.45}
              twinkle={0.3}
              zoom={1.2}
              backgroundGlow={0.15}
              opacity={0.75}
              mouseInteraction={false}
              mixBlendMode="normal"
              className="w-full h-full"
            />
          </div>

          {/* Soft Bottom Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 pointer-events-none z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-xs">
                  Enterprise Data Graph
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  The Data Foundation <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    Powering B2B Growth
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Access 415M+ verified decision-maker profiles and live behavioral intent signals engineered to fuel high-converting account acquisition.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Request Data Sample</span>
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
                    <span>415M+ Verified Global Records</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>95%+ Data Delivery Accuracy</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={dataAnalytics} 
                      alt="DGenz Media data analytics graph" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Data Coverage Pillars (Clean White Cards) */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Audience Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Global B2B Data <span className="text-emerald-700">Coverage</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our global audience graph is continuously enriched to provide unparalleled coverage of active enterprise buyers.
              </p>
            </div>

            {/* Coverage Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataPoints.map((point) => (
                <div 
                  key={point.title}
                  className="rounded-3xl bg-white border border-slate-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-5">
                      {point.metric}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {point.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{point.proof}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: Verified Sources & Freshness (Clean White Cards) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Data Sources (7 cols) */}
              <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-lg">
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
                  Multi-Source Aggregation
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Verified Data Sources & Collection Nodes
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  We aggregate first-party and cooperative telemetry across high-intent digital environments to ensure comprehensive coverage of active buying accounts.
                </p>

                <div className="space-y-3 pt-2">
                  {sources.map((source, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{source}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Freshness Telemetry (5 cols) */}
              <div className="lg:col-span-5 rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 shadow-md flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-md bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider mb-4">
                    Continuous Freshness
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                    Real-Time Refresh Cadence
                  </h3>
                  
                  <div className="space-y-5 divide-y divide-slate-200">
                    <div className="pt-4 first:pt-0 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Intent Signals</span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold">Real-time Stream</span>
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Decision-Maker Contacts</span>
                      <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-900 text-xs font-bold">Daily SMTP Check</span>
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Account Firmographics</span>
                      <span className="px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-900 text-xs font-bold">Weekly Sync</span>
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Technographic Stacks</span>
                      <span className="px-2.5 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-bold">Bi-Weekly Telemetry</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
                  Automated de-duplication and hygiene algorithms execute continuously.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: 4-Phase Quality Methodology (Clean White Process Cards) */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Verification Framework
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our 4-Phase Data Methodology
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A rigorous, multi-layered data lifecycle engineered to ensure 95%+ accuracy and zero wasted spend.
              </p>
            </div>

            {/* Methodology Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item) => (
                <div 
                  key={item.step}
                  className="rounded-3xl bg-white border border-slate-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-black text-base flex items-center justify-center border border-emerald-200">
                        {item.step}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.stage}
                      </span>
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

          </div>
        </section>

        {/* Section 5: Standards & Compliance (Clean White Cards) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Trust & Security
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Enterprise Standards & Governance
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We maintain the highest privacy and regulatory compliance standards across global jurisdictions.
              </p>
            </div>

            {/* Standards Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {standards.map((item) => (
                <div 
                  key={item.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-slate-900 shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Access Verified B2B Account Intelligence?
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                Partner with DGenz Media to fuel your outbound, paid, and ABM campaigns with deterministic data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="demo"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Request Sample Data List</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200">
                      <span>Schedule Data Consultation</span>
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

export default OurData;