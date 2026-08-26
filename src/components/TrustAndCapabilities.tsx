import { Link } from 'react-router-dom';
import { 
  Users, 
  Globe, 
  Target, 
  ArrowRight, 
  FileText, 
  Megaphone, 
  Send, 
  CheckCircle2, 
  ChevronDown 
} from 'lucide-react';
import FloatingLines from '@/components/ui/FloatingLines';
import businessMeeting from '@/assets/group-diverse-people-having-business-meeting.jpg';
import businessPresentation from '@/assets/businesswoman-presenting-strategies-team.jpg';
import paidMedia from '@/assets/paid-media.jpg';
import outboundMarketing from '@/assets/outbound-marketing.jpg';

const logos = [
  { name: 'Oracle', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/oracle.svg', color: '#F80000' },
  { name: 'Microsoft', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg', color: '#00A4EF' },
  { name: 'Adobe', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg', color: '#FF0000' },
  { name: 'Dell Technologies', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dell.svg', color: '#007DB8' },
  { name: 'Fujitsu', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fujitsu.svg', color: '#E60012' },
  { name: 'Intel', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intel.svg', color: '#0071C5' },
  { name: 'LogMeIn', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/logmein.svg', color: '#45B8AC' },
  { name: 'AMD', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amd.svg', color: '#ED1C24' },
  { name: 'Cisco', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cisco.svg', color: '#1BA0D7' },
  { name: 'SAP', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sap.svg', color: '#0FAAFF' },
  { name: 'Zoom', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg', color: '#2D8CFF' },
  { name: 'Google', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg', color: '#4285F4' }
];

const services = [
  {
    category: 'Strategic Foundation',
    icon: Target,
    title: 'Lead Generation Strategy',
    description: 'Build your lead generation strategy from the ground up with ICP development and sales funnel mapping.',
    image: businessMeeting,
    mainStat: '99.4%',
    statLabel: 'ICP Match Rate',
    href: '/solutions/lead-generation-strategy',
    upperStats: [
      { label: 'Audit Turnaround', value: '< 24 Hours' },
      { label: 'Pipeline Coverage', value: 'Full-Funnel' }
    ],
    features: [
      'Ideal Customer Profile (ICP)',
      'Sales Funnel Blueprint',
      'TAM Market Discovery'
    ],
    statusText: 'Enterprise Strategy',
    statusBg: 'bg-emerald-600'
  },
  {
    category: 'Content Marketing',
    icon: FileText,
    title: 'Content-Driven Lead Gen',
    description: 'Generate qualified leads through strategic content syndication, whitepapers, and gated educational resources.',
    image: businessPresentation,
    mainStat: '3.8x',
    statLabel: 'Conversion Lift',
    href: '/solutions/content-driven-lead-generation',
    upperStats: [
      { label: 'Publisher Network', value: '100+ Outlets' },
      { label: 'Asset Formats', value: 'Whitepaper & Tech' }
    ],
    features: [
      'Content Syndication',
      'Gated Whitepaper Hubs',
      'Automated Lead Nurture'
    ],
    statusText: 'High-Intent Inbound',
    statusBg: 'bg-sky-600'
  },
  {
    category: 'Paid Media',
    icon: Megaphone,
    title: 'Paid Advertising (PPC)',
    description: 'Targeted LinkedIn ads and Google PPC campaigns engineered to capture in-market enterprise prospects.',
    image: paidMedia,
    mainStat: '8.4x',
    statLabel: 'In-Target CTR',
    href: '/solutions/paid-advertising-ppc',
    upperStats: [
      { label: 'Target Channels', value: 'LinkedIn & Search' },
      { label: 'Bid Optimization', value: 'Real-time AI' }
    ],
    features: [
      'Account-Targeted Ads',
      'Programmatic Native',
      'Landing Page CRO'
    ],
    statusText: 'Active In-Market',
    statusBg: 'bg-indigo-600'
  },
  {
    category: 'Outbound Sales',
    icon: Send,
    title: 'Outbound Lead Gen',
    description: 'Cold email and LinkedIn prospecting campaigns that identify and engage verified decision-makers.',
    image: outboundMarketing,
    mainStat: '4.2x',
    statLabel: 'Pipeline Velocity',
    href: '/solutions/outbound-lead-generation',
    upperStats: [
      { label: 'Verified Contacts', value: '86.4% Direct' },
      { label: 'CRM Handoff', value: 'Instant Sync' }
    ],
    features: [
      'Multi-Touch Cold Email',
      'LinkedIn Outreach',
      'Buying Group Mapping'
    ],
    statusText: 'Decision-Makers',
    statusBg: 'bg-emerald-700'
  }
];

export const TrustAndCapabilities = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-t border-b border-slate-200 bg-white text-slate-900">
      
      {/* Unified Dynamic FloatingLines WebGL Background Simulation from React Bits */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-75">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[8, 12, 16]}
          lineDistance={[6, 5, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={['#059669', '#10b981', '#0284c7', '#6366f1']}
          mixBlendMode="normal"
        />
      </div>

      {/* Subtle light vignette overlays */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-white/90 via-transparent to-white/90 pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-white/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        
        {/* ================= SECTION 1: TRUST INDICATORS & GLOBAL REACH ================= */}
        <div>
          {/* Top Headline & Trust Metric Pills */}
          <div className="text-center mb-16">
            <p className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed tracking-tight px-2">
              Trusted by <span className="text-emerald-600 font-black">100+ leading brands</span> to engage over <span className="text-teal-600 font-black">42M professionals</span> globally
            </p>
            
            <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
              {/* 100+ Brands Clean White Card */}
              <div className="group flex items-center gap-3.5 sm:gap-4 px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 w-full sm:w-auto">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-700" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">100+</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500">Leading Brands</div>
                </div>
              </div>
              
              {/* 42M+ Professionals Clean White Card */}
              <div className="group flex items-center gap-3.5 sm:gap-4 px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 w-full sm:w-auto">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-teal-700" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">42M+</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500">Professionals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by Industry Leaders & Fast Brand Logo Marquee */}
          <div className="text-center pt-2">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                Trusted by Industry Leaders
              </h3>
              <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium">
                Join thousands of global companies using our ABM platform to drive pipeline growth
              </p>
            </div>

            {/* Fast Marquee Wrapper with White Gradient Edge Fades */}
            <div 
              className="relative w-full overflow-hidden py-2"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              <div className="marquee-track flex gap-8 sm:gap-10 items-center w-max py-2">
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div 
                    key={`${logo.name}-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center px-7 py-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-slate-300 transition-all duration-300 hover:scale-105 cursor-pointer"
                    title={logo.name}
                  >
                    <div 
                      className="h-8 w-28 sm:w-32 transition-transform duration-300"
                      style={{
                        WebkitMask: `url(${logo.url}) no-repeat center / contain`,
                        mask: `url(${logo.url}) no-repeat center / contain`,
                        backgroundColor: logo.color
                      }}
                      aria-label={logo.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft elegant separator line */}
        <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* ================= SECTION 2: OUR CORE CAPABILITIES ================= */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <span>Our Core Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              Target Precisely, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">Convert Consistently</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our multi-channel ABM solutions work together seamlessly to identify, engage, and convert high-value accounts at every stage of the buying journey.
            </p>
          </div>

          {/* Expandable Layered Drawer Cards Grid with Uiverse Hover Physics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div 
                  key={service.title} 
                  className="weather-drawer-container group relative flex flex-col items-center w-full"
                >
                  {/* ================= FRONT PRIMARY CARD (Layer 1 - Clean White) ================= */}
                  <Link 
                    to={service.href}
                    className="weather-drawer-front w-full rounded-2xl bg-white border border-slate-200 shadow-md group-hover:shadow-xl group-hover:border-slate-300 transition-all duration-300 p-5 overflow-hidden flex flex-col justify-between cursor-pointer block text-left"
                  >
                    {/* Photo Header */}
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4 border border-slate-100">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      
                      {/* Category Tag */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-xs flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-slate-700" />
                        <span>{service.category}</span>
                      </div>

                      {/* Main Stat Overlay */}
                      <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-slate-200 text-right shadow-xs">
                        <div className="text-sm font-extrabold text-emerald-700">{service.mainStat}</div>
                        <div className="text-[10px] text-slate-600 font-medium">{service.statLabel}</div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-3">
                        {service.description}
                      </p>
                    </div>

                    {/* View Details Link + Hover Drawer Indicator */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      <span className="inline-flex items-center">
                        <span>Inspect solution</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 group-hover:text-emerald-600 flex items-center gap-0.5">
                        <span>Telemetry</span>
                        <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                      </span>
                    </div>

                  </Link>

                  {/* ================= BACK EXPANDABLE DRAWER CARD (Layer 2 & 3) ================= */}
                  <div className="weather-drawer-back w-[92%] bg-slate-50 text-slate-900 rounded-b-2xl border-x border-b border-slate-200 shadow-xl -mt-2 pt-5 px-4 pb-3">
                    
                    {/* Upper Stats Row */}
                    <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 text-center">
                      {service.upperStats.map((stat, sIdx) => (
                        <div key={sIdx} className="p-2 rounded-lg bg-white border border-slate-200">
                          <div className="text-[10px] text-slate-500 font-medium">{stat.label}</div>
                          <div className="text-xs font-extrabold text-slate-900 mt-0.5">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Lower Feature Checklist */}
                    <div className="py-2.5 space-y-1.5">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Status Pill */}
                    <div className={`w-full py-1.5 rounded-lg ${service.statusBg} text-white text-[11px] font-bold text-center tracking-wide uppercase shadow-xs mt-1`}>
                      {service.statusText}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes brandFastMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee-track {
          animation: brandFastMarquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustAndCapabilities;
