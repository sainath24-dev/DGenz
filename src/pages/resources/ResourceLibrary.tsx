import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Search, Download } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ContactForm from '@/components/ContactForm';
import resourceLibraryHero from '/assets/img3.jpg';

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const resources = [
    {
      title: 'The Complete Guide to Account-Based Marketing',
      description: 'A comprehensive 50-page guide covering everything from ABM strategy development to execution and measurement.',
      type: 'Whitepaper',
      category: 'Strategy',
      downloadUrl: '#',
      pages: '52 pages',
      featured: true
    },
    {
      title: 'Intent Data Playbook: From Signals to Pipeline',
      description: 'Learn how to operationalize intent data across marketing and sales teams for maximum pipeline velocity.',
      type: 'Playbook',
      category: 'Intent Data',
      downloadUrl: '#',
      pages: '38 pages',
      featured: true
    },
    {
      title: 'B2B Lead Generation Benchmark Report 2024',
      description: 'Comprehensive industry benchmarks on conversion rates, CAC payback periods, and channel performance across 500+ B2B brands.',
      type: 'Report',
      category: 'Benchmarks',
      downloadUrl: '#',
      pages: '44 pages',
      featured: false
    },
    {
      title: 'Target Account Selection & Tiering Matrix',
      description: 'A customizable spreadsheet model and framework for defining, scoring, and tiering your target account lists.',
      type: 'Template',
      category: 'Strategy',
      downloadUrl: '#',
      pages: 'Spreadsheet Template',
      featured: false
    },
    {
      title: 'Multi-Touch Attribution Framework for B2B',
      description: 'How to build and implement multi-touch attribution models to accurately measure marketing ROI and deal velocity.',
      type: 'Whitepaper',
      category: 'Analytics',
      downloadUrl: '#',
      pages: '36 pages',
      featured: false
    },
    {
      title: 'Content Syndication ROI Calculator & Strategy Guide',
      description: 'Maximize lead quality and cost efficiency from third-party publishing networks with our verified lead capture framework.',
      type: 'Guide',
      category: 'Lead Gen',
      downloadUrl: '#',
      pages: '28 pages',
      featured: false
    }
  ];

  const categories = ['All', 'Strategy', 'Intent Data', 'Benchmarks', 'Analytics', 'Lead Gen'];
  const types = ['All', 'Whitepaper', 'Playbook', 'Report', 'Template', 'Guide'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with LightPillar WebGL Simulation */}
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-slate-50 via-slate-100/60 to-white py-20 lg:py-28 overflow-hidden text-slate-900 border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic LightPillar WebGL Simulation */}
          <div className="absolute inset-0 pointer-events-none opacity-85 overflow-hidden">
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
                  Resource Library
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Whitepapers, Playbooks <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    & Tactical Frameworks
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Access our full library of peer-reviewed B2B growth whitepapers, intent benchmark reports, and operational templates ready for immediate execution.
                </p>

                {/* Search Bar */}
                <div className="pt-2 max-w-lg">
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search whitepapers, reports, guides..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Free Downloadable Resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Updated for 2024 B2B Buying Cycles</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={resourceLibraryHero} 
                      alt="DGenz Media resource library" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Filters Bar */}
        <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-20 backdrop-blur-md bg-white/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex-shrink-0">
                  Category:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Type Filter Select */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Format:</span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Resources Grid (Clean White Cards) */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Available Publications ({filteredResources.length})
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Instant access to verified methodologies and templates
                </p>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div 
                  key={resource.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                        {resource.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {resource.pages}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
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
                          <span>Download Free Resource</span>
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

        {/* Section 4: Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Need a Custom ABM Audit or Framework?
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
                Connect directly with our revenue architects to evaluate your funnel metrics and build custom account acquisition templates.
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
                      <span>Request Custom Templates</span>
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

export default ResourceLibrary;