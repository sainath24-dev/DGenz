import { Link } from 'react-router-dom';
import { 
  Users, 
  Globe, 
  Target, 
  ArrowRight, 
  FileText, 
  Megaphone, 
  Send, 
  Check, 
  TrendingUp
} from 'lucide-react';
import businessMeeting from '@/assets/group-diverse-people-having-business-meeting.jpg';
import businessPresentation from '@/assets/businesswoman-presenting-strategies-team.jpg';
import paidMedia from '@/assets/paid-media.jpg';
import outboundMarketing from '@/assets/outbound-marketing.jpg';

const services = [
  {
    category: 'Strategic Foundation',
    icon: Target,
    title: 'Lead Generation Strategy',
    description: 'Build your precision lead generation strategy from the ground up with deterministic ICP mapping and sales funnel architecture.',
    image: businessMeeting,
    mainStat: '99.4%',
    statLabel: 'ICP match precision',
    href: '/solutions/lead-generation-strategy',
    upperStats: [
      { label: 'Turnaround', value: '< 24 Hours' },
      { label: 'Coverage', value: 'Full-funnel' }
    ],
    features: [
      'Ideal Customer Profile (ICP)',
      'Sales funnel blueprint',
      'TAM market discovery'
    ]
  },
  {
    category: 'Content Marketing',
    icon: FileText,
    title: 'Content-Driven Lead Gen',
    description: 'Generate high-intent qualified leads through multi-format content syndication, whitepaper hubs, and verified educational distribution.',
    image: businessPresentation,
    mainStat: '3.8x',
    statLabel: 'Conversion lift',
    href: '/solutions/content-driven-lead-generation',
    upperStats: [
      { label: 'Syndication', value: '100+ Outlets' },
      { label: 'Format', value: 'Whitepapers & Tech' }
    ],
    features: [
      'Content syndication network',
      'Gated whitepaper distribution',
      'Automated nurture scoring'
    ]
  },
  {
    category: 'Paid Media',
    icon: Megaphone,
    title: 'Paid Advertising (PPC)',
    description: 'Account-targeted LinkedIn advertising and Google Search campaigns engineered specifically to capture active in-market enterprise prospects.',
    image: paidMedia,
    mainStat: '8.4x',
    statLabel: 'In-target CTR',
    href: '/solutions/paid-advertising-ppc',
    upperStats: [
      { label: 'Channels', value: 'LinkedIn & Search' },
      { label: 'Optimization', value: 'Real-time AI' }
    ],
    features: [
      'Account-targeted advertising',
      'Programmatic ABM display',
      'Landing page CRO testing'
    ]
  },
  {
    category: 'Outbound Sales',
    icon: Send,
    title: 'Outbound Lead Gen',
    description: 'High-touch multi-channel cadences across verified decision-maker buying committees with CRM integration.',
    image: outboundMarketing,
    mainStat: '4.2x',
    statLabel: 'Pipeline velocity',
    href: '/solutions/outbound-lead-generation',
    upperStats: [
      { label: 'Direct contacts', value: '86.4% Verified' },
      { label: 'Integration', value: 'Direct CRM sync' }
    ],
    features: [
      'Multi-touch executive email',
      'LinkedIn social outreach',
      'Buying group matrix'
    ]
  }
];

export const TrustAndCapabilities = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= SECTION 1: ENTERPRISE TRUST & SCALE ================= */}
        <div className="border border-slate-200 bg-slate-50/60 p-8 md:p-12 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="carbon-eyebrow block mb-2">
              Enterprise validation & scale
            </span>
            <h2 className="carbon-display-md text-[#161616] mb-4">
              Proven pipeline acceleration across 100+ global brands.
            </h2>
            <p className="carbon-body text-slate-600">
              Our deterministic intent graph continuously evaluates over 42M active B2B business professionals across North America, EMEA, and APAC to isolate real purchase intent.
            </p>
          </div>

          {/* 3-Column Metric Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white">
            <div className="p-6 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 tracking-[0.32px]">Brand Adoption</span>
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-3xl font-light text-[#161616]">100+</div>
              <div className="text-xs text-slate-500 mt-1">Enterprise B2B leaders deployed</div>
            </div>

            <div className="p-6 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 tracking-[0.32px]">Global Footprint</span>
                <Globe className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-3xl font-light text-[#161616]">42M+</div>
              <div className="text-xs text-slate-500 mt-1">Verified decision-maker profiles</div>
            </div>

            <div className="p-6 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 tracking-[0.32px]">Average Lift</span>
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-3xl font-light text-blue-600">3.8x</div>
              <div className="text-xs text-slate-500 mt-1">Qualified pipeline conversion increase</div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: CORE CAPABILITIES GRID ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200">
            <div>
              <span className="carbon-eyebrow block mb-1">
                Core solutions
              </span>
              <h2 className="carbon-display-md text-[#161616]">
                Target precisely, convert consistently
              </h2>
            </div>
            <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0">
              Coordinated multi-channel demand programs engineered to identify and convert high-value accounts at every phase of the buying cycle.
            </p>
          </div>

          {/* 4-Up Carbon Feature Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div 
                  key={service.title} 
                  className="carbon-feature-card flex flex-col justify-between group bg-white border border-[#e0e0e0] hover:border-[#161616] transition-colors"
                >
                  <div>
                    {/* Square Flat Image Frame (0px corners) */}
                    <div className="relative aspect-[16/10] mb-4 border border-[#e0e0e0] overflow-hidden bg-[#f4f4f4]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300" 
                      />
                      
                      {/* Metric Badge */}
                      <div className="absolute bottom-0 right-0 bg-[#161616] text-white px-3 py-1 text-right">
                        <div className="text-xs font-semibold">{service.mainStat}</div>
                        <div className="text-[9px] text-[#c6c6c6]">{service.statLabel}</div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-1.5 text-xs text-[#525252] mb-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#0f62fe]" />
                      <span>{service.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-[#161616] mb-2 group-hover:text-[#0f62fe] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#525252] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature List */}
                    <div className="pt-3 border-t border-[#e0e0e0] space-y-1.5 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#525252]">
                          <Check className="w-3.5 h-3.5 text-[#0f62fe] flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <Link 
                    to={service.href}
                    className="inline-flex items-center justify-between text-xs font-medium text-[#0f62fe] pt-3 border-t border-[#e0e0e0] group-hover:underline"
                  >
                    <span>Inspect methodology</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustAndCapabilities;
