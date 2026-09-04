import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ContactForm from '@/components/ContactForm';
import caseStudiesHero from '/assets/img7.jpg';

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Enterprise Software',
      challenge: 'Low response and engagement rates across top 200 target enterprise tier-1 accounts.',
      solution: 'Deployed multi-touch intent-triggered ABM display and personalized executive outreach cadences.',
      results: [
        { metric: '+285%', label: 'Account Engagement' },
        { metric: '+$2.1M', label: 'Net-New Pipeline' },
        { metric: '-45%', label: 'Sales Cycle Duration' }
      ],
      quote: 'DGenz Media transformed how we identify and engage our highest-value prospects. The intent data precision alone boosted our pipeline by over 200%.',
      author: 'Sarah Johnson, VP of Growth Marketing',
      featured: true
    },
    {
      company: 'Global Manufacturing Systems',
      industry: 'Manufacturing',
      challenge: 'Difficulty penetrating buying committees across traditional industrial distributor networks.',
      solution: 'Implemented IP-targeted programmatic advertising and high-value gated engineering whitepaper syndication.',
      results: [
        { metric: '+150%', label: 'Executive Reach' },
        { metric: '+78%', label: 'Brand Resonance' },
        { metric: '+92%', label: 'Demo Requests' }
      ],
      quote: 'The targeted multi-channel campaigns helped us reach plant directors and VP-level decision makers with unprecedented precision.',
      author: 'Michael Chen, Director of Demand Generation',
      featured: true
    },
    {
      company: 'FinanceFlow Enterprise',
      industry: 'Financial Services',
      challenge: 'Inefficient lead qualification and low conversion from initial inbound inquiries.',
      solution: 'Integrated predictive ML intent scoring and automated SDR speed-to-lead routing cadences.',
      results: [
        { metric: '+220%', label: 'SQL Conversion Rate' },
        { metric: '3.4x', label: 'Campaign ROAS' },
        { metric: '-35%', label: 'CAC Reduction' }
      ],
      quote: 'The machine learning scoring platform completely transformed our pipeline qualification. We only focus sales time on accounts with active buying surge signals.',
      author: 'Emily Rodriguez, Chief Marketing Officer',
      featured: false
    },
    {
      company: 'CloudTech Infrastructure',
      industry: 'Cloud Services',
      challenge: 'Competing against entrenched hyperscalers in saturated enterprise IT segments.',
      solution: 'Surgical LinkedIn ABM campaigns synchronized with high-intent search and retargeting sequences.',
      results: [
        { metric: '-67%', label: 'Cost Per Lead' },
        { metric: '+245%', label: 'Content Engagement' },
        { metric: '180+', label: 'Enterprise SQLs' }
      ],
      quote: 'Despite competing in an ultra-saturated market, DGenz Media allowed us to punch well above our weight and secure major enterprise contract wins.',
      author: 'David Park, Head of Growth',
      featured: false
    },
    {
      company: 'HealthTech Analytics',
      industry: 'Healthcare Technology',
      challenge: '12+ month sales cycles involving complex hospital buying and compliance committees.',
      solution: 'Multi-stakeholder account nurture sequences delivering compliance-specific case proof.',
      results: [
        { metric: '-38%', label: 'Sales Cycle Length' },
        { metric: '+190%', label: 'Committee Penetration' },
        { metric: '+125%', label: 'Average Contract ARR' }
      ],
      quote: 'Engaging the entire medical buying committee with personalized role-specific proof points drastically accelerated our closing timeline.',
      author: 'Lisa Thompson, VP of Enterprise Sales',
      featured: false
    },
    {
      company: 'OmniRetail Platform',
      industry: 'Retail Technology',
      challenge: 'Scaling personalized outbound engagement across 5,000+ national retail brands.',
      solution: 'Automated intent cadences with dynamic technographic and localized personalization tokens.',
      results: [
        { metric: '300%', label: 'Coverage Expansion' },
        { metric: '28%', label: 'Cold Reply Rate' },
        { metric: '+$5.2M', label: 'Closed ARR' }
      ],
      quote: 'Automation allowed us to scale bespoke executive messaging without losing human nuance. The revenue outcomes spoke for themselves.',
      author: 'Robert Kim, VP of Marketing Operations',
      featured: false
    }
  ];

  const industries = ['All', 'Enterprise Software', 'Manufacturing', 'Financial Services', 'Cloud Services', 'Healthcare Technology', 'Retail Technology'];

  const filteredCaseStudies = caseStudies.filter(cs => {
    return selectedIndustry === 'All' || cs.industry === selectedIndustry;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Lightfall WebGL Simulation */}
        <section className="relative min-h-0 sm:min-h-[80vh] flex items-center bg-slate-50 pt-28 sm:pt-32 pb-16 lg:py-28 overflow-hidden text-[#161616] border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic LightPillar WebGL Simulation - Desktop Only */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0 opacity-80 overflow-hidden">
            <LightPillar
              topColor="#059669"
              bottomColor="#0284c7"
              intensity={1.2}
              rotationSpeed={0.4}
              interactive={true}
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
                  Verified Client Outcomes
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Proven Enterprise Results <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    Driven by Intent ABM
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Discover how 500+ global brands use DGenz Media to identify high-value accounts, accelerate deal velocity, and maximize closed-won pipeline.
                </p>

                {/* Summary Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="rounded-xl bg-white border border-slate-200 p-3 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-600">+285%</div>
                    <div className="text-[11px] text-slate-600 font-medium">Avg. Engagement</div>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-200 p-3 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-600">+$7.3M</div>
                    <div className="text-[11px] text-slate-600 font-medium">Pipeline Impact</div>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-200 p-3 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-600">-45%</div>
                    <div className="text-[11px] text-slate-600 font-medium">Sales Cycle Length</div>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-200 p-3 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-600">3.4x</div>
                    <div className="text-[11px] text-slate-600 font-medium">Average ROAS</div>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Request Custom Case Study</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={caseStudiesHero} 
                      alt="DGenz Media enterprise case studies" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Filter by Industry */}
        <section className="py-6 bg-white/95 border-b border-slate-200 sticky top-16 z-20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex-shrink-0">
                Industry:
              </span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedIndustry === industry
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Case Studies Grid (Clean White Cards) */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedIndustry === 'All' ? 'Enterprise Success Stories' : `${selectedIndustry} Case Studies`}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Showing {filteredCaseStudies.length} verified customer stories
                </p>
              </div>
            </div>

            {/* Case Studies Cards List */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((cs) => (
                <div 
                  key={cs.company}
                  className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-9 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Pill Badges */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-5">
                      <span className="text-xs font-bold px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {cs.company}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                      {cs.company} ABM Transformation
                    </h3>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-6 text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-slate-900">Challenge: </span>
                        <span className="text-slate-600">{cs.challenge}</span>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-700">Solution: </span>
                        <span className="text-slate-600">{cs.solution}</span>
                      </div>
                    </div>

                    {/* Results Stat Box */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-center">
                      {cs.results.map((res, idx) => (
                        <div key={idx}>
                          <div className="text-lg sm:text-xl font-black text-emerald-700">{res.metric}</div>
                          <div className="text-[11px] font-semibold text-slate-500">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Executive Quote */}
                    <blockquote className="p-4 rounded-2xl bg-slate-100/70 border-l-4 border-emerald-600 text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                      "{cs.quote}"
                      <div className="not-italic font-bold text-slate-900 mt-2 text-[11px]">
                        — {cs.author}
                      </div>
                    </blockquote>
                  </div>

                  {/* CTA Card Footer */}
                  <div className="pt-4 border-t border-slate-100">
                    <ContactForm 
                      type="demo"
                      trigger={
                        <button className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-900 font-bold text-xs transition-all duration-200 cursor-pointer">
                          <span>Request Similar Campaign Blueprint</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
                Let's evaluate your target account list and build a deterministic intent strategy that accelerates your pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="demo"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Schedule Growth Consultation</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer">
                      <span>Request Full Case Study Deck</span>
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

export default CaseStudies;