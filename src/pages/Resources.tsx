import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ContactForm from '@/components/ContactForm';
import resourcesOverview from '@/assets/resources-overview.jpg';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'B2B Growth Blog',
      category: 'Insights & Strategy',
      description: 'Actionable frameworks, B2B marketing analysis, and demand generation playbooks from industry practitioners.',
      href: '/blog',
      tag: 'Weekly Insights'
    },
    {
      title: 'Resource Library',
      category: 'Guides & Whitepapers',
      description: 'Comprehensive guides, intent research benchmarks, and operational templates ready for immediate execution.',
      href: '/resource-library',
      tag: 'Free Downloads'
    },
    {
      title: 'Case Studies',
      category: 'Proof & ROI',
      description: 'Documented revenue impact and performance metrics from leading enterprise B2B brand partnerships.',
      href: '/case-studies',
      tag: 'Client Outcomes'
    },
    {
      title: 'ABM Glossary',
      category: 'Definitions & Metrics',
      description: 'Clear, concise definitions of key account-based marketing terms, KPIs, and technology concepts.',
      href: '/glossary',
      tag: 'Knowledge Base'
    },
    {
      title: 'Press & Media',
      category: 'Announcements',
      description: 'Latest company announcements, platform feature releases, leadership updates, and industry awards.',
      href: '/press',
      tag: 'Newsroom'
    },
    {
      title: 'Trust & Security Center',
      category: 'Governance & Privacy',
      description: 'SOC 2 certifications, GDPR compliance documentation, data hygiene standards, and security protocols.',
      href: '/trust-center',
      tag: 'Enterprise Security'
    }
  ];

  const featuredResources = [
    {
      title: 'The Enterprise Guide to Intent-Driven ABM',
      description: 'A comprehensive playbook on building deterministic intent cadences that shorten sales cycles and boost ROI.',
      type: 'Whitepaper',
      readTime: '15 min read'
    },
    {
      title: '2024 Global B2B Buying Committee Benchmarks',
      description: 'Data analysis covering 415M+ decision-makers and the shifting dynamics of enterprise software purchases.',
      type: 'Annual Report',
      readTime: '20 min read'
    },
    {
      title: 'Multi-Touch Pipeline Attribution Playbook',
      description: 'Frameworks to measure closed-loop revenue, CAC payback periods, and content-assisted deal acceleration.',
      type: 'Tactical Guide',
      readTime: '12 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Lightfall WebGL Simulation */}
        <section className="relative min-h-0 sm:min-h-[80vh] flex items-center bg-slate-50 pt-28 sm:pt-32 pb-16 lg:py-28 overflow-hidden text-[#161616] border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic LightPillar Simulation - Desktop Only */}
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
                  Knowledge & Intelligence Hub
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Actionable Resources for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    B2B Revenue Leaders
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Explore our curated repository of playbooks, intent research benchmarks, case studies, and practical guides designed to scale your pipeline.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href="#categories"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer"
                  >
                    <span>Browse Resource Library</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>

                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer">
                        <span>Request Custom Research</span>
                      </button>
                    }
                  />
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Peer-Reviewed Growth Playbooks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Live B2B Buying Committee Telemetry</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={resourcesOverview} 
                      alt="DGenz Media knowledge resources" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Category Directory Section (Clean White Cards) */}
        <section id="categories" className="py-24 bg-[#f8fafc] border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Resource Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Explore by Category
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Choose a dedicated resource track tailored to your strategic priorities and growth stage.
              </p>
            </div>

            {/* Category Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => (
                <Link key={category.title} to={category.href} className="group">
                  <div className="h-full rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                          {category.tag}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {category.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {category.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {category.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* Featured Guides & Reports (Clean White Feature Cards) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Essential Reading
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Featured Playbooks & Reports
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Download our most popular enterprise research papers and operational frameworks.
              </p>
            </div>

            {/* Featured Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div 
                  key={resource.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                        {resource.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {resource.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {resource.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <ContactForm 
                      type="demo"
                      trigger={
                        <button className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-900 font-bold text-xs transition-all duration-200 cursor-pointer">
                          <span>Download Free Whitepaper</span>
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

        {/* Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-slate-900 shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Want Custom Intent Research for Your Industry?
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                Connect with our research and data intelligence team to receive a tailored intent and market opportunity analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="demo"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Request Custom Intent Analysis</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200">
                      <span>Join Resource Newsletter</span>
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

export default Resources;