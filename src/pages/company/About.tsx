import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Lightfall from '@/components/ui/Lightfall';
import ContactForm from '@/components/ContactForm';
import companyHero from '/assets/img1.jpg';
import executiveTeam from '/assets/img3.jpg';

const About = () => {
  const values = [
    {
      title: 'Precision Targeting',
      tag: '01',
      description: 'We deliver deterministic B2B audience solutions that eliminate wasted spend and maximize enterprise pipeline value.'
    },
    {
      title: 'Strategic Partnership',
      tag: '02',
      description: 'We act as a seamless extension of your revenue architecture, providing continuous optimization and executive strategic alignment.'
    },
    {
      title: 'Data Integrity',
      tag: '03',
      description: 'Zero third-party cookies required. We utilize multi-source verification and machine-verified telemetry to ensure 99%+ deliverability.'
    },
    {
      title: 'Measurable ROI',
      tag: '04',
      description: 'Transparent attribution models directly mapping pipeline lift, deal velocity acceleration, and closed-won ARR to media spend.'
    }
  ];

  const timeline = [
    { year: '2020', title: 'Company Founded', description: 'Established with the mission to modernize B2B account-based marketing through deterministic intent telemetry.' },
    { year: '2021', title: 'Intent Engine Launch', description: 'Engineered proprietary AI intent monitoring platform tracking 10,000+ topic taxonomies in real-time.' },
    { year: '2022', title: 'Global Data Expansion', description: 'Expanded verified audience reach to 42M+ enterprise decision-makers across North America, EMEA, and APAC.' },
    { year: '2023', title: '100+ Enterprise Clients', description: 'Partnered with over 100 enterprise technology and SaaS leaders to accelerate global pipeline creation.' }
  ];

  const stats = [
    { value: '42M+', label: 'Verified Global Contacts' },
    { value: '500K+', label: 'Target Account Profiles' },
    { value: '100+', label: 'Enterprise Clients Scaled' },
    { value: '99.2%', label: 'Data Accuracy Standard' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with WebGL FloatingLines Simulation */}
        <section className="relative min-h-0 sm:min-h-[80vh] flex items-center bg-slate-50 pt-28 sm:pt-32 pb-16 lg:py-28 overflow-hidden text-slate-900 border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic Lightfall WebGL Simulation - Desktop Only */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0 opacity-80 overflow-hidden">
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
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-xs">
                  Company Overview
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Pioneering the Next Era of <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    B2B Account Growth
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  We empower enterprise revenue teams to identify in-market buying committees, execute precision multi-touch acquisition, and convert account engagement into predictable pipeline.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Schedule Strategy Call</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />

                  <a 
                    href="/solutions/lead-generation-strategy"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer"
                  >
                    <span>Our Solutions</span>
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
                    <span>415M+ Verified B2B Decision Makers</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={companyHero} 
                      alt="DGenz Media office and executive team" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Section (Clean White Cards) */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-md">
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
                  Our Mission
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Precision Demand Without Guesswork
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To eliminate wasted advertising spend and accelerate B2B revenue by connecting global enterprise brands with high-intent decision-makers through verified, data-backed demand programs.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-md">
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-4">
                  Our Vision
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  The Global Standard in Buyer Telemetry
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To be the world's most trusted buyer intent platform—delivering deterministic account intelligence and seamless multi-channel execution that revenue teams rely on daily.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Values Section (Clean White Feature Cards) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Guiding Principles
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                These core tenets guide every campaign architecture, data model, and partnership we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div 
                  key={value.title} 
                  className="rounded-3xl bg-white border border-slate-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 font-black text-sm flex items-center justify-center mb-5 border border-slate-200">
                      {value.tag}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline / Journey Section (Wavy Timeline Form) */}
        <section className="py-28 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
          
          {/* Subtle background ambient glow */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Company Milestones
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Journey <span className="text-emerald-700">& Growth</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                From our founding vision to scaling across global markets, explore our continuous trajectory of innovation.
              </p>
            </div>

            {/* Wavy Timeline Track Container */}
            <div className="relative max-w-5xl mx-auto">
              
              {/* Continuous Center Wavy Sine Wave SVG Spine (Desktop) */}
              <svg 
                className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-32 h-[calc(100%-2rem)] pointer-events-none hidden md:block -z-0" 
                preserveAspectRatio="none" 
                viewBox="0 0 120 1000"
              >
                <path 
                  d="M 60 0 C 15 125, 105 125, 60 250 C 15 375, 105 375, 60 500 C 15 625, 105 625, 60 750 C 15 875, 105 875, 60 1000" 
                  fill="none" 
                  stroke="url(#wavy_spine_grad)" 
                  strokeWidth="4" 
                  strokeDasharray="6 6" 
                />
                <defs>
                  <linearGradient id="wavy_spine_grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="35%" stopColor="#14b8a6" />
                    <stop offset="70%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Mobile Vertical Track Line */}
              <div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-sky-500 md:hidden rounded-full" />

              {/* Milestones Alternating List */}
              <div className="space-y-12 md:space-y-20 relative z-10">
                {timeline.map((item, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div 
                      key={item.year}
                      className={`relative flex flex-col md:flex-row items-center ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* 1. Left/Right Content Card (Desktop) */}
                      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-14' : 'md:pl-14'}`}>
                        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer">
                          
                          {/* Top Pill Bar */}
                          <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 mb-4">
                            <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
                              Milestone 0{index + 1}
                            </span>
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                              Year {item.year}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* 2. Center Wavy Milestone Node Badge */}
                      <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center relative group">
                          <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-teal-700 text-white font-black text-xs md:text-sm flex items-center justify-center tracking-tight shadow-inner">
                            {item.year}
                          </div>
                        </div>
                      </div>

                      {/* 3. Empty Spacer for Alternating Layout */}
                      <div className="hidden md:block w-1/2" />

                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Grand Finale CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Accelerate Your Account Growth?
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
                Partner with DGenz Media to build a predictable, high-converting account-based marketing engine for your enterprise.
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
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer">
                      <span>Contact Our Team</span>
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

export default About;