import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Search } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ContactForm from '@/components/ContactForm';
import glossaryInfographic from '@/assets/glossary-infographic.jpg';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const glossaryTerms = [
    {
      term: 'Account-Based Marketing (ABM)',
      definition: 'A focused growth strategy in which marketing and sales teams collaborate to target high-value enterprise accounts as individual markets.',
      category: 'Strategy'
    },
    {
      term: 'Intent Data',
      definition: 'Behavioral intelligence that indicates when target accounts and buying committees are actively researching specific products or problem spaces online.',
      category: 'Data'
    },
    {
      term: 'Buying Committee',
      definition: 'The multi-stakeholder group within an enterprise (economic buyer, technical evaluator, executive sponsor) who collectively evaluate and approve purchases.',
      category: 'Sales'
    },
    {
      term: 'Account Intelligence',
      definition: 'Unified firmographic, technographic, and intent telemetry providing deep visibility into an account’s tech stack, leadership shifts, and budget readiness.',
      category: 'Data'
    },
    {
      term: 'Programmatic B2B Advertising',
      definition: 'Algorithmic media buying that delivers personalized banner, video, and connected TV ads strictly to IP addresses and employees of target accounts.',
      category: 'Advertising'
    },
    {
      term: 'Sales Development Representative (SDR)',
      definition: 'Outbound sales specialists responsible for researching target accounts, executing personalized cadences, and booking qualified executive appointments.',
      category: 'Sales'
    },
    {
      term: 'Marketing Qualified Account (MQA)',
      definition: 'An account displaying statistically significant engagement and intent surges across multiple stakeholders, qualifying it for sales outreach.',
      category: 'Marketing'
    },
    {
      term: 'Sales Qualified Opportunity (SQO)',
      definition: 'A vetted enterprise opportunity where budget, authority, need, and buying timeline (BANT / MEDDPICC) have been confirmed by sales.',
      category: 'Sales'
    },
    {
      term: 'Customer Acquisition Cost (CAC)',
      definition: 'The comprehensive cost incurred to acquire a single closed-won customer, including marketing media spend, agency retainers, and sales headcount.',
      category: 'Metrics'
    },
    {
      term: 'Lifetime Value (LTV)',
      definition: 'The projected gross margin and cumulative revenue generated throughout the entire multi-year lifecycle of an enterprise customer relationship.',
      category: 'Metrics'
    },
    {
      term: 'Multi-Touch Attribution',
      definition: 'A scientific measurement framework allocating pipeline and closed-won revenue credit across every digital and human touchpoint in the buyer journey.',
      category: 'Analytics'
    },
    {
      term: 'Demand Generation',
      definition: 'The holistic strategy of creating market awareness, capturing active commercial intent, and accelerating high-intent pipeline across the entire funnel.',
      category: 'Marketing'
    },
    {
      term: 'Dynamic Account Scoring',
      definition: 'Algorithmic models that dynamically rank accounts based on a combination of ICP fit, real-time intent spikes, and cross-channel engagement velocity.',
      category: 'Marketing'
    },
    {
      term: 'Marketing Automation Platform (MAP)',
      definition: 'Enterprise software (HubSpot, Marketo, Pardot) that automates lead nurturing workflows, scoring models, and bidirectional CRM synchronization.',
      category: 'Technology'
    },
    {
      term: 'Customer Relationship Management (CRM)',
      definition: 'The core system of record (Salesforce, HubSpot) managing customer data, sales opportunity stages, deal forecasts, and contact histories.',
      category: 'Technology'
    },
    {
      term: 'Account Penetration Rate',
      definition: 'The percentage of stakeholders within a target account’s buying committee who have engaged with marketing content or sales outreach.',
      category: 'Metrics'
    },
    {
      term: 'Lookalike Account Modeling',
      definition: 'A reporting model that assigns fractional revenue credit to each marketing and sales touchpoint across the complete buyer journey.',
      category: 'Data & Analytics'
    },
    {
      term: 'Sales Qualified Lead (SQL)',
      definition: 'A prospect vetted by sales that meets deterministic BANT or MEDDIC criteria and is prepared for direct pipeline opportunity creation.',
      category: 'Lead Generation'
    },
    {
      term: 'Account Scoring',
      definition: 'A dynamic composite ranking combining firmographic fit, engagement volume, and intent surge activity into an actionable priority index.',
      category: 'Data & Analytics'
    }
  ];

  const categories = ['All', 'Strategy', 'Data & Analytics', 'Advertising', 'Lead Generation'];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const alphabeticalTerms = filteredTerms.sort((a, b) => a.term.localeCompare(b.term));

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
                  ABM & Intent Glossary
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  The Definitive Vocabulary <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    Of B2B Account Growth
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Master the key terminology, metrics, and strategic concepts powering modern account-based marketing, intent data, and pipeline engineering.
                </p>

                {/* Search Bar */}
                <div className="pt-2 max-w-lg">
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search ABM terms, definitions..."
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
                    <span>{glossaryTerms.length} Verified Technical Definitions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Updated for Modern MarTech Stacks</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={glossaryInfographic} 
                      alt="DGenz Media ABM glossary and knowledge base" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Category Filter Bar */}
        <section className="py-6 bg-white/95 border-b border-slate-200 sticky top-16 z-20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
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
          </div>
        </section>

        {/* Section 3: Glossary Terms Directory (Clean White Cards) */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedCategory === 'All' ? 'Glossary Terms' : `${selectedCategory} Terms`} ({alphabeticalTerms.length})
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Alphabetical listing of core industry definitions
                </p>
              </div>
            </div>

            {/* Terms Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alphabeticalTerms.map((term) => (
                <div 
                  key={term.term}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
                      {term.category}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                      {term.term}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {term.definition}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Turn ABM Strategy Into Pipeline Velocity
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
                Connect with our team to apply these frameworks to your target accounts and accelerate your B2B revenue engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="demo"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Schedule Strategy Consultation</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer">
                      <span>Request Growth Assessment</span>
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

export default Glossary;