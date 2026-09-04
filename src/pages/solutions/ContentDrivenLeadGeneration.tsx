import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { FloatingLines } from '@/components/ui/FloatingLines';
import { LiquidEther } from '@/components/ui/LiquidEther';
import ContactForm from '@/components/ContactForm';
import contentDrivenHero from '@/assets/content-driven-hero.jpg';
import blogHero from '@/assets/blog-hero.jpg';
import resourceLibraryHero from '@/assets/resource-library-hero.jpg';
import contentSyndicationInfo from '@/assets/content-syndication-infographic.jpg';
import caseStudiesHero from '@/assets/case-studies-hero.jpg';

const ContentDrivenLeadGeneration = () => {
  const features = [
    {
      title: 'SEO for Lead Generation',
      description: 'Comprehensive keyword architecture, search intent mapping, and high-ranking technical content.',
      benefits: [
        'Target bottom-of-funnel high-intent search queries',
        'Optimize content for search engine visibility & snippets',
        'Build compound organic authority that continuously captures MQLs'
      ]
    },
    {
      title: 'Content Marketing & Editorial Management',
      description: 'Strategic thought-leadership publication and narrative design engineered to educate buying committees.',
      benefits: [
        'Consistent C-suite thought leadership positioning',
        'Educational whitepapers and articles solving ICP pain points',
        'Multi-touchpoint buyer journey acceleration cadences'
      ]
    },
    {
      title: 'Gated Assets & Research Reports',
      description: 'High-value eBooks, original industry research benchmarks, and data reports that capture qualified leads.',
      benefits: [
        'Proprietary industry benchmark reports driving C-level opt-ins',
        'Interactive ROI calculators and decision frameworks',
        'High-converting lead capture gates with CRM enrichment'
      ]
    },
    {
      title: 'Landing Pages & Capture Optimization',
      description: 'High-converting modular landing pages designed for friction-free lead capture and maximum conversion.',
      benefits: [
        'Rigorous A/B tested copy, hero layouts, and proof points',
        'Mobile-first responsive architecture with micro-interactions',
        'Real-time behavioral telemetry and drop-off analytics'
      ]
    },
    {
      title: 'Multi-Channel Content Syndication',
      description: 'Strategic distribution across 100+ premium B2B editorial publications and niche executive networks.',
      benefits: [
        'Guaranteed lead delivery matching strict ICP criteria',
        'Amplified distribution across verified enterprise networks',
        '100% compliant, opt-in deterministic lead generation'
      ]
    }
  ];

  const contentFormats = [
    { 
      title: 'SEO Research & Blog Content', 
      desc: 'High-intent search articles engineered for organic conversion and thought leadership.',
      image: blogHero,
      tag: 'Organic Search',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      turnaround: 'Weekly Cadence',
      deliverables: [
        'Comprehensive keyword gap analysis & search intent map',
        'Expert-written 2,500+ word pillar assets with technical schematics',
        'Internal link architecture and schema markup integration'
      ],
      btnColor: 'bg-emerald-600'
    },
    { 
      title: 'eBooks & Executive Whitepapers', 
      desc: 'Comprehensive research publications driving qualified enterprise downloads.',
      image: resourceLibraryHero,
      tag: 'Gated Assets',
      badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      turnaround: '2-3 Weeks',
      deliverables: [
        'Original B2B research design & quantitative data synthesis',
        'Professional publication layout with bespoke infographics',
        'Gated landing page with progressive profile capture forms'
      ],
      btnColor: 'bg-indigo-600'
    },
    { 
      title: 'B2B Case Studies & Proof Stories', 
      desc: 'Customer success narratives demonstrating ROI to remove pipeline friction.',
      image: caseStudiesHero,
      tag: 'Social Proof',
      badge: 'bg-sky-50 text-sky-800 border-sky-200',
      turnaround: '10 Days',
      deliverables: [
        'Executive interview recordings & qualitative extract',
        'Data-backed challenge, solution, and measurable ROI metrics',
        'Multi-format slide decks, web modules, and 1-page PDF leave-behinds'
      ],
      btnColor: 'bg-sky-600'
    },
    { 
      title: 'Syndicated Content & Infographics', 
      desc: 'Visual data stories syndicated across premium B2B media networks.',
      image: contentSyndicationInfo,
      tag: 'Omni Distribution',
      badge: 'bg-purple-50 text-purple-800 border-purple-200',
      turnaround: 'Guaranteed SLAs',
      deliverables: [
        'B2B editorial placement across vetted publishing networks',
        'Deterministic lead delivery with job title & company size verification',
        'CRM-ready lead batches with full engagement attribution'
      ],
      btnColor: 'bg-purple-600'
    }
  ];

  const process = [
    { step: '01', title: 'Content & Topic Ideation', description: 'Map buyer questions, competitive gaps, and high-intent commercial keywords.' },
    { step: '02', title: 'Expert Content Production', description: 'Draft technical, authoritative assets written by vetted industry subject-matter experts.' },
    { step: '03', title: 'Design & Gate Optimization', description: 'Engineer sleek landing pages and high-converting asset packaging with clear value propositions.' },
    { step: '04', title: 'Syndication & Amplification', description: 'Distribute across multi-channel networks to capture verified opt-in leads directly into your CRM.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with WebGL FloatingLines Simulation */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-slate-50 via-slate-100/60 to-white py-20 lg:py-28 overflow-hidden text-slate-900 border-b border-slate-200">
          
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
              linesGradient={['#059669', '#8b5cf6', '#10b981', '#06b6d4', '#3b82f6']}
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
                  Content Marketing & Syndication
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Content-Driven Lead Gen <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    That Educates & Converts
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Turn your expertise into a steady stream of enterprise leads with high-value whitepapers, research reports, and verified publisher syndication.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Launch Content Campaign</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Vetted B2B Publisher Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>100% Opt-In & Intent Verified</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Genuine Stock Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={contentDrivenHero} 
                      alt="Business presentation showcasing content marketing strategy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Core Strategic Pillars with Curved Gradient Cards */}
        <section className="py-24 bg-gradient-to-b from-[#dbe8f5] via-[#ede3d4] to-[#e2f1e8] border-b border-[#c2ded0] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Content Strategy Modules
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                High-Impact Content <span className="text-emerald-700">Capabilities</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Every piece of content is engineered with clear intent data, technical rigor, and conversion mechanics to turn casual readers into qualified pipeline.
              </p>
            </div>

            {/* Curved Gradient Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const gradients = [
                  { from: '#064e3b', to: '#047857', badge: 'bg-emerald-500/20 text-emerald-300', metric: '300%', stat: 'SEO Traffic Lift' },
                  { from: '#1e1b4b', to: '#4338ca', badge: 'bg-indigo-500/20 text-indigo-300', metric: '4.8x', stat: 'Editorial Authority' },
                  { from: '#0f172a', to: '#0284c7', badge: 'bg-sky-500/20 text-sky-300', metric: '25%+', stat: 'Gated CVR' },
                  { from: '#311042', to: '#7e22ce', badge: 'bg-purple-500/20 text-purple-300', metric: '99.2%', stat: 'Form Completion' },
                  { from: '#065f46', to: '#0d9488', badge: 'bg-teal-500/20 text-teal-300', metric: '100+', stat: 'Media Publications' }
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
                          fill={`url(#paint_cd_grad_${index})`} 
                          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                        />
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" y2="128" x2="354.142" y1="128" x1="0" id={`paint_cd_grad_${index}`}>
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

        {/* Section 3: High-Converting Content Formats with 3D Flip / Reveal Cards */}
        <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Asset Portfolio
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Content Asset Formats <span className="text-emerald-700">& Deliverables</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                From technical whitepapers to syndicated interactive graphics, explore our high-converting content deliverables.
              </p>
            </div>

            {/* 3D Flip / Reveal Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentFormats.map((format) => (
                <div key={format.title} className="flip-consulting-card">
                  
                  {/* Front Face */}
                  <div className="first-face p-5 bg-white border border-slate-200 shadow-md rounded-3xl">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-4 border border-slate-100">
                      <img 
                        src={format.image} 
                        alt={format.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-2xs">
                        <span>{format.tag}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5">
                        {format.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {format.desc}
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
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border ${format.badge}`}>
                          {format.turnaround}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mt-3 mb-4">
                        {format.title} Scope
                      </h4>
                      <div className="space-y-3 text-xs text-slate-700">
                        {format.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`w-full py-2.5 rounded-xl ${format.btnColor} text-white text-xs font-bold text-center tracking-wide uppercase shadow-sm`}>
                      Asset Blueprint Ready
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Combined Process & Grand Finale CTA with LiquidEther */}
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
            
            {/* Subsection 1: Content Production Process */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
                Our Content Generation Process
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A systematic workflow designed to turn ideas into revenue-generating content assets
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
                  Ready to Scale Your Content-Driven Pipeline?
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Let's engineer a bespoke content marketing engine that elevates brand authority and delivers qualified sales leads continuously.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                        <span>Start Content Strategy</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />

                  <ContactForm 
                    type="general"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200">
                        <span>Request Content Sample</span>
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

export default ContentDrivenLeadGeneration;