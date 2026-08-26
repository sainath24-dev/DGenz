import { Link } from 'react-router-dom';
import { 
  Target, 
  ArrowRight, 
  FileText, 
  Megaphone, 
  Send, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Activity,
  Layers,
  ChevronDown
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

export const EnhancedIntelligentTargeting = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Target Precisely, <span className="text-emerald-700">Convert Consistently</span>
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
                {/* ================= FRONT PRIMARY CARD (Layer 1) ================= */}
                <div className="weather-drawer-front w-full rounded-2xl bg-white border border-slate-200 shadow-md group-hover:shadow-2xl group-hover:border-slate-300 transition-all duration-300 p-5 overflow-hidden flex flex-col justify-between cursor-pointer">
                  
                  {/* Photo Header */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4 border border-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                    
                    {/* Category Tag */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-white/20 text-slate-900 text-xs font-bold shadow-2xs flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-slate-700" />
                      <span>{service.category}</span>
                    </div>

                    {/* Main Stat Overlay */}
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-slate-200 text-right shadow-2xs">
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
                    <Link to={service.href} className="inline-flex items-center">
                      <span>Inspect solution</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] font-semibold text-slate-400 group-hover:text-emerald-600 flex items-center gap-0.5">
                      <span>Telemetry</span>
                      <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                </div>

                {/* ================= BACK EXPANDABLE DRAWER CARD (Layer 2 & 3) ================= */}
                <div className="weather-drawer-back w-[92%] bg-slate-50 text-slate-900 rounded-b-2xl border-x border-b border-slate-200 shadow-xl -mt-2 pt-5 px-4 pb-3">
                  
                  {/* Upper Stats Row (Like Humidity / Air speed) */}
                  <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 text-center">
                    {service.upperStats.map((stat, sIdx) => (
                      <div key={sIdx} className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        <div className="text-[10px] text-slate-500 font-medium">{stat.label}</div>
                        <div className="text-xs font-extrabold text-slate-900 mt-0.5">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Lower Feature Checklist (Like AQI / RealFeel / Pressure) */}
                  <div className="py-2.5 space-y-1.5">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Status Pill (Like Card 3 "Healthy" bar) */}
                  <div className={`w-full py-1.5 rounded-lg ${service.statusBg} text-white text-[11px] font-bold text-center tracking-wide uppercase shadow-sm mt-1`}>
                    {service.statusText}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EnhancedIntelligentTargeting;