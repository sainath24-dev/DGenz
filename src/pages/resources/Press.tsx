import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Download, Mail } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ContactForm from '@/components/ContactForm';
import pressNewsHero from '@/assets/press-news-hero.jpg';

const Press = () => {
  const pressReleases = [
    {
      title: 'DGenz Media Named Top Leader in 2024 ABM Platform Telemetry Index',
      excerpt: 'Recognized for pioneering multi-source intent normalization, high-velocity programmatic execution, and closed-loop ARR attribution.',
      date: 'Dec 15, 2023',
      type: 'Industry Award',
      category: 'Recognition',
      featured: true
    },
    {
      title: 'Enterprise CRM Synchronization Architecture Expanded Across Salesforce & HubSpot',
      excerpt: 'New bidirectional real-time data connectors enable instant pipeline opportunity scoring and automated SDR speed-to-lead routing.',
      date: 'Dec 10, 2023',
      type: 'Product Launch',
      category: 'Product Update',
      featured: true
    },
    {
      title: 'DGenz Media Reports 300% Growth in Enterprise Customer Base for Fiscal Year',
      excerpt: 'Robust annual revenue expansion fueled by surging enterprise demand for deterministic intent data and multi-channel account acquisition.',
      date: 'Nov 30, 2023',
      type: 'Corporate Milestone',
      category: 'Financials',
      featured: false
    },
    {
      title: 'Expansion of Verified Global Audience Graph to 415M+ B2B Decision-Makers',
      excerpt: 'Strategic partnerships with leading international B2B publishers expand account reach across 120+ international markets.',
      date: 'Nov 15, 2023',
      type: 'Network Expansion',
      category: 'Data Graph',
      featured: false
    }
  ];

  const mediaKitItems = [
    {
      title: 'Corporate Fact Sheet & Overview',
      description: 'Key company statistics, leadership bios, product capabilities, and milestones.',
      format: 'PDF (2.4 MB)'
    },
    {
      title: 'Brand Identity & Vector Logos',
      description: 'Official DGenz Media logos, color palette codes, and brand guidelines.',
      format: 'ZIP (8.1 MB)'
    },
    {
      title: 'Executive Leadership Headshots',
      description: 'High-resolution professional portraits of the executive management team.',
      format: 'ZIP (14.2 MB)'
    },
    {
      title: 'Platform UI & Telemetry Visuals',
      description: 'High-resolution interface screenshots and intent graph diagrams.',
      format: 'ZIP (11.5 MB)'
    }
  ];

  const mediaContacts = [
    {
      name: 'Sarah Mitchell',
      title: 'Head of Global Communications',
      email: 'press@dgenzmedia.com'
    },
    {
      name: 'David Chen',
      title: 'VP of Product Marketing',
      email: 'media@dgenzmedia.com'
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
                  Press & Media Room
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  News, Announcements <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    & Corporate Milestones
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Explore official company news, product releases, industry awards, and brand resources from DGenz Media.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href="#media-kit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer"
                  >
                    <span>Download Media Kit</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>

                  <ContactForm 
                    type="general"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer">
                        <span>Contact Press Office</span>
                      </button>
                    }
                  />
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Official Verified Press Releases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Direct Executive Media Access</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={pressNewsHero} 
                      alt="DGenz Media press and media news" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Press Releases & News Grid (Clean White Cards) */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Announcements
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Latest News & Coverage
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Stay informed with our official press releases, corporate announcements, and strategic partnership updates.
              </p>
            </div>

            {/* Releases Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressReleases.map((item) => (
                <div 
                  key={item.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-9 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 mb-4">
                      <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                        {item.type}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span>Read Press Statement</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: Brand Assets & Media Kit (Clean White Cards) */}
        <section id="media-kit" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Brand Resources
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Media Kit & Brand Assets
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Download official brand logos, high-resolution executive portraits, and company fact sheets for editorial use.
              </p>
            </div>

            {/* Media Kit Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {mediaKitItems.map((kit) => (
                <div 
                  key={kit.title}
                  className="rounded-3xl bg-white border border-slate-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                      {kit.format}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {kit.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                      {kit.description}
                    </p>
                  </div>

                  <ContactForm 
                    type="general"
                    trigger={
                      <button className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-900 font-bold text-xs transition-all duration-200 cursor-pointer">
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Kit</span>
                      </button>
                    }
                  />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Media Contact & Spokespeople (Clean White Cards) */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Editorial Inquiries
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Media & Journalist Contacts
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                For interview requests, executive commentary, or market data insights, please contact our PR team.
              </p>
            </div>

            {/* Contacts Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {mediaContacts.map((contact) => (
                <div 
                  key={contact.name}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-lg text-center transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {contact.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4">
                    {contact.title}
                  </div>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{contact.email}</span>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Media Inquiries CTA (Clean White) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Seeking Expert B2B & ABM Commentary?
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
                Our founders and data scientists are available for media panels, podcast interviews, and keynote commentary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Request Executive Interview</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <a 
                  href="mailto:press@dgenzmedia.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer"
                >
                  <span>Email PR Team Directly</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;