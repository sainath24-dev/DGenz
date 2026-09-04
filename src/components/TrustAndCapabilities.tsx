import { ArrowRight, ExternalLink, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import businessMeeting from '@/assets/group-diverse-people-having-business-meeting.jpg';
import businessPresentation from '@/assets/businesswoman-presenting-strategies-team.jpg';
import paidMedia from '@/assets/paid-media.jpg';
import outboundMarketing from '@/assets/outbound-marketing.jpg';

const coreSolutions = [
  {
    title: 'Lead Generation Strategy',
    description: 'Elevate your pipeline readiness with deterministic ICP mapping, buying committee discovery, and sales funnel blueprints shaping enterprise growth.',
    image: businessMeeting,
    accentBg: 'bg-[#edf5ff] border-[#d0e2ff]',
    linkText: 'Begin your strategy journey',
    href: '/solutions/lead-generation-strategy'
  },
  {
    title: 'Content-Driven Lead Gen',
    description: 'Develop high-intent qualified pipeline, unlock new enterprise accounts and syndicate whitepapers across 100+ verified technology publisher outlets.',
    image: businessPresentation,
    accentBg: 'bg-[#e6f6f5] border-[#9ef0f0]',
    linkText: 'Start shaping tomorrow',
    href: '/solutions/content-driven-lead-generation'
  },
  {
    title: 'Paid Advertising (PPC)',
    description: 'Explore account-targeted LinkedIn advertising, programmatic display, and search to deepen buying committee reach and high-value conversion.',
    image: paidMedia,
    accentBg: 'bg-[#f6f2ff] border-[#d4bbff]',
    linkText: 'Strengthen your paid media',
    href: '/solutions/paid-advertising-ppc'
  },
  {
    title: 'Outbound Lead Gen',
    description: 'Scale multi-touch executive email and direct-dial phone cadences targeting verified decision makers with real-time CRM synchronization.',
    image: outboundMarketing,
    accentBg: 'bg-[#fff0f5] border-[#ffd6e8]',
    linkText: 'Explore outbound cadences',
    href: '/solutions/outbound-lead-generation'
  }
];

export const TrustAndCapabilities = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#e0e0e0] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* ================= SECTION 1: ENTERPRISE TRUST & SCALE (Royal Blue / Cobalt Accent Section) ================= */}
        <div className="bg-gradient-to-r from-[#0038a8] via-[#0f62fe] to-[#002d9c] text-white p-8 md:p-12 border border-[#002d9c] shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#a6c8ff] block mb-2 tracking-[0.32px] uppercase">
              Enterprise validation & scale
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
              Proven pipeline acceleration across <span className="text-[#a6c8ff]">100+ global brands</span>.
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Our deterministic intent graph continuously evaluates over 42M active B2B business professionals across North America, EMEA, and APAC to isolate real purchase intent.
            </p>
          </div>

          {/* 3-Column Metric Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20 bg-[#001f6e]/70">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20 hover:bg-[#002d9c]/60 transition-colors flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/80 tracking-[0.32px]">Brand Adoption</span>
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-white">100+</div>
                <div className="text-xs text-white/80 mt-1.5">Enterprise B2B leaders deployed</div>
              </div>
            </div>

            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20 hover:bg-[#002d9c]/60 transition-colors flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/80 tracking-[0.32px]">Global Footprint</span>
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-white">42M+</div>
                <div className="text-xs text-white/80 mt-1.5">Verified decision-maker profiles</div>
              </div>
            </div>

            <div className="p-6 md:p-8 hover:bg-[#002d9c]/60 transition-colors flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/80 tracking-[0.32px]">Average Lift</span>
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-white">3.8x</div>
                <div className="text-xs text-white/80 mt-1.5">Qualified pipeline conversion increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: CORE SOLUTIONS (Exact IBM 2-Column Split with 4 Solutions) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Title (4 cols) */}
          <div className="lg:col-span-4">
            <span className="carbon-eyebrow text-[#0f62fe] block mb-2 font-mono">
              Core solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#161616] tracking-tight leading-[1.1]">
              Target precisely, <span className="text-[#0f62fe]">convert consistently</span>
            </h2>
            <p className="text-sm text-[#525252] leading-relaxed mt-4">
              Coordinated multi-channel demand programs engineered to identify and convert high-value accounts at every phase of the buying cycle.
            </p>
          </div>

          {/* Right Column: 4 Solutions in a 2x2 / 4-Col Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {coreSolutions.map((sol, idx) => (
              <div key={idx} className="flex flex-col justify-between">
                <div>
                  {/* Circular Image Container with Soft Tint Border */}
                  <div className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full ${sol.accentBg} border overflow-hidden mb-6 relative group mx-auto sm:mx-0 shadow-xs`}>
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-medium text-[#161616] mb-2 leading-snug">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-4 font-normal">
                    {sol.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <Link 
                  to={sol.href}
                  className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] hover:underline gap-1.5 pt-2 group"
                >
                  <span>{sol.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>

        {/* ================= SECTION 3: ENTERPRISE SCALE (Exact IBM "Inside IBM" 3-Column Subgrid) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-12 border-t border-[#e0e0e0]">
          
          {/* Left Column: Title (4 cols) */}
          <div className="lg:col-span-4">
            <span className="carbon-eyebrow text-[#0f62fe] block mb-2 font-mono">
              Enterprise scale
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#161616] tracking-tight leading-[1.1]">
              Inside our <span className="text-[#0f62fe]">revenue engine</span>
            </h2>
          </div>

          {/* Right Column: 3-Column Subgrid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            
            {/* Col 1: Our data assets */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-medium text-[#161616] mb-2">
                  Our data assets
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed font-normal">
                  Explore our verified graph of 42M+ active B2B business professionals across North America, EMEA, and APAC.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <div>
                  <Link 
                    to="/company/our-data"
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] hover:underline gap-1"
                  >
                    <span>About our data</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/company/why-dgenz"
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] hover:underline gap-1"
                  >
                    <span>Data methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Col 2: Verification & Trust */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-medium text-[#161616] mb-2">
                  Verification & trust
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed font-normal">
                  Inspect our dual-stage verification engine and SLA-backed lead guarantees engineered for zero pipeline waste.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <div>
                  <Link 
                    to="/trust-center"
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] hover:underline gap-1"
                  >
                    <span>Trust Center</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/resources"
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] hover:underline gap-1"
                  >
                    <span>Quality standards</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Col 3: Revenue architects */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-medium text-[#161616] mb-2">
                  Revenue architects
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed font-normal">
                  Work directly with dedicated enterprise campaign strategists to evaluate your TAM and orchestrate multi-touch demand.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <div>
                  <Link 
                    to="/company/about"
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] hover:underline gap-1"
                  >
                    <span>Our team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/case-studies"
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] hover:underline gap-1"
                  >
                    <span>Client case studies</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustAndCapabilities;
