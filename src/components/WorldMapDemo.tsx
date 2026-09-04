import { useState } from 'react';
import { 
  Globe, 
  Building2, 
  Users, 
  Layers, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Factory, 
  Briefcase, 
  Landmark, 
  HeartPulse, 
  HardHat, 
  Tv, 
  Truck,
  Flame,
  Radio
} from 'lucide-react';
import { InteractiveGlobe } from '@/components/ui/InteractiveGlobe';
import { WorldMap } from '@/components/ui/world-map';
import ContactForm from '@/components/ContactForm';

type RegionKey = 'all' | 'na' | 'emea' | 'apac' | 'latam';

interface RegionData {
  name: string;
  badge: string;
  companies: string;
  professionals: string;
  countries: string;
  accuracy: string;
  directDial: string;
  deliverySLA: string;
  hubs: string[];
  dots: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
}

const regions: Record<RegionKey, RegionData> = {
  all: {
    name: 'Global Network',
    badge: '100+ Countries',
    companies: '4.0M+',
    professionals: '42.6M+',
    countries: '100+ Nations',
    accuracy: '99.4%',
    directDial: '82.5%',
    deliverySLA: '< 24 Hours',
    hubs: ['New York', 'San Francisco', 'London', 'Frankfurt', 'Singapore', 'Tokyo', 'Sydney', 'São Paulo'],
    dots: [
      { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },
      { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 35.6762, lng: 139.6503 } },
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 1.3521, lng: 103.8198 } },
      { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: -33.8688, lng: 151.2093 } },
      { start: { lat: 50.1109, lng: 8.6821 }, end: { lat: 25.2048, lng: 55.2708 } },
      { start: { lat: 40.7128, lng: -74.006 }, end: { lat: -23.5505, lng: -46.6333 } },
    ]
  },
  na: {
    name: 'North America',
    badge: '18.4M Contacts Available',
    companies: '1.8M+',
    professionals: '18.4M+',
    countries: 'United States & Canada',
    accuracy: '99.6%',
    directDial: '86.4%',
    deliverySLA: '< 12 Hours',
    hubs: ['New York', 'San Francisco', 'Chicago', 'Austin', 'Toronto', 'Seattle'],
    dots: [
      { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 37.7749, lng: -122.4194 } },
      { start: { lat: 41.8781, lng: -87.6298 }, end: { lat: 30.2672, lng: -97.7431 } },
      { start: { lat: 47.6062, lng: -122.3321 }, end: { lat: 43.6532, lng: -79.3832 } },
      { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 40.7128, lng: -74.006 } }
    ]
  },
  emea: {
    name: 'Europe & Middle East',
    badge: '14.2M Contacts Available',
    companies: '1.3M+',
    professionals: '14.2M+',
    countries: '38 Countries (UK, DACH, Nordics, Gulf)',
    accuracy: '99.2%',
    directDial: '81.0%',
    deliverySLA: '< 24 Hours',
    hubs: ['London', 'Frankfurt', 'Paris', 'Amsterdam', 'Dubai', 'Stockholm'],
    dots: [
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 50.1109, lng: 8.6821 } },
      { start: { lat: 50.1109, lng: 8.6821 }, end: { lat: 48.8566, lng: 2.3522 } },
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 52.3676, lng: 4.9041 } },
      { start: { lat: 50.1109, lng: 8.6821 }, end: { lat: 25.2048, lng: 55.2708 } },
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 59.3293, lng: 18.0686 } }
    ]
  },
  apac: {
    name: 'Asia-Pacific',
    badge: '7.8M Contacts Available',
    companies: '720K+',
    professionals: '7.8M+',
    countries: '14 Countries (ANZ, Singapore, Japan, India)',
    accuracy: '98.9%',
    directDial: '78.5%',
    deliverySLA: '< 24 Hours',
    hubs: ['Singapore', 'Tokyo', 'Sydney', 'Mumbai', 'Hong Kong'],
    dots: [
      { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 35.6762, lng: 139.6503 } },
      { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: -33.8688, lng: 151.2093 } },
      { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 19.0760, lng: 72.8777 } }
    ]
  },
  latam: {
    name: 'Latin America',
    badge: '2.2M Contacts Available',
    companies: '210K+',
    professionals: '2.2M+',
    countries: '8 Countries (Brazil, Mexico, Colombia, Chile)',
    accuracy: '98.4%',
    directDial: '74.2%',
    deliverySLA: '< 48 Hours',
    hubs: ['São Paulo', 'Mexico City', 'Bogotá', 'Santiago'],
    dots: [
      { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: 19.4326, lng: -99.1332 } },
      { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: 4.7110, lng: -74.0721 } }
    ]
  }
};

const industriesRow1 = [
  { name: 'Technology & Cloud', icon: Cpu, professionals: '8.4M', companies: '620K', accentColor: '#0f62fe' },
  { name: 'Financial Services', icon: Landmark, professionals: '5.2M', companies: '390K', accentColor: '#007d79' },
  { name: 'Healthcare & Pharma', icon: HeartPulse, professionals: '4.6M', companies: '340K', accentColor: '#ee538b' },
  { name: 'Industrial & Manufacturing', icon: Factory, professionals: '3.8M', companies: '290K', accentColor: '#8a3ffc' },
  { name: 'Professional Services', icon: Briefcase, professionals: '3.4M', companies: '260K', accentColor: '#1192e8' },
  { name: 'Energy & Utilities', icon: Flame, professionals: '1.9M', companies: '180K', accentColor: '#b25e00' }
];

const industriesRow2 = [
  { name: 'Telecom & Networks', icon: Radio, professionals: '1.8M', companies: '160K', accentColor: '#0f62fe' },
  { name: 'Engineering & Construction', icon: HardHat, professionals: '1.5M', companies: '150K', accentColor: '#b25e00' },
  { name: 'Media & Communications', icon: Tv, professionals: '1.4M', companies: '130K', accentColor: '#8a3ffc' },
  { name: 'Logistics & Supply Chain', icon: Truck, professionals: '1.2M', companies: '140K', accentColor: '#007d79' },
  { name: 'Hospitality & Retail', icon: Building2, professionals: '1.1M', companies: '120K', accentColor: '#ee538b' },
  { name: 'Metals & Mining', icon: Layers, professionals: '1.0M', companies: '90K', accentColor: '#1192e8' }
];

export function WorldMapDemo() {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('all');

  const currentData = regions[selectedRegion];
  const is3D = selectedRegion === 'all';

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#e0e0e0] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3 border-b border-[#e0e0e0]">
          <div>
            <span className="carbon-eyebrow text-[#0f62fe] block mb-1 font-mono">
              Deterministic global coverage
            </span>
            <h2 className="carbon-display-md text-[#161616]">
              Global footprint, <span className="text-[#0f62fe]">verified local accuracy</span>
            </h2>
          </div>
          <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0">
            Query 42M+ verified decision-makers across 100+ countries with deterministic verification and SLA guarantees.
          </p>
        </div>

        {/* Tab Strip for Region Selection */}
        <div className="flex flex-wrap items-center justify-start border-b border-[#e0e0e0] mb-8 overflow-x-auto">
          {(Object.keys(regions) as RegionKey[]).map((key) => {
            const isActive = selectedRegion === key;
            const region = regions[key];

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedRegion(key)}
                className={`px-5 py-3.5 text-sm font-normal border-b-2 transition-all ${
                  isActive 
                    ? 'border-[#0f62fe] bg-white text-[#0f62fe] font-medium shadow-xs' 
                    : 'border-transparent text-[#525252] hover:bg-white/60 hover:text-[#161616]'
                }`}
              >
                <span>{region.name}</span>
                <span className="ml-2 text-xs opacity-75 font-mono">
                  ({region.professionals})
                </span>
              </button>
            );
          })}
        </div>

        {/* Master Screen Container (Obsidian Telemetry Console) */}
        <div 
          className="border border-[#1c2840] p-6 lg:p-10 mb-16 relative overflow-hidden bg-[#0d1422] text-white shadow-xl"
        >
          {/* Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c2840] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono px-2 py-0.5 border bg-[#162238] text-[#4589ff] border-[#243452]">
                  {currentData.badge}
                </span>
                <span className="text-xs text-[#8d95a5]">{currentData.countries}</span>
              </div>
              <h3 className="text-2xl font-light tracking-tight text-white">
                {currentData.name} Audience Telemetry
              </h3>
            </div>

            {/* Hubs Badges */}
            <div className="flex items-center flex-wrap gap-1.5 text-xs">
              <span className="mr-1 flex items-center gap-1 text-[#8d95a5]">
                <MapPin className="w-3.5 h-3.5 text-[#4589ff]" />
                Regional Hubs:
              </span>
              {currentData.hubs.slice(0, 4).map((hub) => (
                <span key={hub} className="px-2 py-0.5 border bg-[#162238] border-[#243452] text-[#c6c6c6]">
                  {hub}
                </span>
              ))}
            </div>
          </div>

          {/* Map Display Frame */}
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px]">
            {/* 3D Earth Globe Layer */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              is3D ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
            }`}>
              <InteractiveGlobe className="w-full h-full" />
            </div>

            {/* 2D White Continental Map Layer */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
              !is3D ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
            }`}>
              <WorldMap
                dots={currentData.dots}
                lineColor="#0f62fe"
                variant="dark"
              />

              {/* Back to 3D Earth Button */}
              <div className="absolute bottom-2 right-2 z-20">
                <button
                  type="button"
                  onClick={() => setSelectedRegion('all')}
                  className="inline-flex items-center gap-2 bg-[#162238] hover:bg-[#1c2840] border border-[#243452] text-white text-xs py-2 px-3 transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-[#4589ff]" />
                  <span>Global Globe View</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 Bottom Metric Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#1c2840] divide-[#1c2840] mt-6 pt-6">
            <div className="p-4">
              <div className="text-xs text-[#8d95a5] flex items-center gap-1.5 mb-1">
                <Building2 className="w-3.5 h-3.5 text-[#4589ff]" />
                <span>Verified Accounts</span>
              </div>
              <div className="text-2xl font-light text-white">
                {currentData.companies}
              </div>
              <div className="text-[11px] text-[#8d95a5] mt-0.5">Enterprise & Mid-Market</div>
            </div>

            <div className="p-4 border-l border-[#1c2840]">
              <div className="text-xs text-[#8d95a5] flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-[#4589ff]" />
                <span>Decision Makers</span>
              </div>
              <div className="text-2xl font-light text-white">
                {currentData.professionals}
              </div>
              <div className="text-[11px] text-[#8d95a5] mt-0.5">Buying Committee Leads</div>
            </div>

            <div className="p-4 border-l border-[#1c2840]">
              <div className="text-xs text-[#8d95a5] flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5 text-[#4589ff]" />
                <span>Industry Sectors</span>
              </div>
              <div className="text-2xl font-light text-white">
                12 Verticals
              </div>
              <div className="text-[11px] text-[#8d95a5] mt-0.5">Standardized Taxonomy</div>
            </div>

            <div className="p-4 border-l border-[#1c2840]">
              <div className="text-xs text-[#8d95a5] flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4589ff]" />
                <span>ICP Accuracy</span>
              </div>
              <div className="text-2xl font-light text-[#4589ff]">
                {currentData.accuracy}
              </div>
              <div className="text-[11px] text-[#8d95a5] mt-0.5">Dual-Stage Verified</div>
            </div>
          </div>
        </div>

        {/* ================= INDUSTRY VERTICALS CONTINUOUS DUAL-LOOP MARQUEE ================= */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-[#e0e0e0]">
            <div>
              <span className="carbon-eyebrow text-[#0f62fe] block mb-1 font-mono">
                Taxonomy coverage
              </span>
              <h3 className="carbon-headline text-[#161616]">
                Deep representation across <span className="text-[#0f62fe]">core industry verticals</span>
              </h3>
            </div>
            <p className="text-xs text-[#525252] font-mono tracking-[0.32px] mt-2 md:mt-0">
              12 ACTIVE ENTERPRISE VERTICALS
            </p>
          </div>

          {/* Masked Continuous Dual Marquee Container */}
          <div 
            className="relative w-full overflow-hidden py-2 space-y-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            {/* Loop Row 1: Scrolling Left */}
            <div className="industry-marquee-left flex gap-4 w-max py-1">
              {[...industriesRow1, ...industriesRow1, ...industriesRow1].map((ind, idx) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={`row1-${ind.name}-${idx}`}
                    className="relative w-72 sm:w-80 flex-shrink-0 p-5 bg-white border border-[#e0e0e0] hover:bg-[#fafbfc] hover:border-[#161616] hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden"
                  >
                    {/* Top Accent Hairline */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-75 group-hover:h-[3px] transition-all"
                      style={{ backgroundColor: ind.accentColor }}
                    />

                    <div className="flex items-center justify-between gap-3 mb-3 pt-1">
                      <div 
                        className="w-8 h-8 border border-[#e0e0e0] flex items-center justify-center transition-colors"
                        style={{ backgroundColor: '#f4f4f4' }}
                      >
                        <IndIcon className="w-4 h-4" style={{ color: ind.accentColor }} />
                      </div>
                      <span className="text-xs font-mono text-[#525252]">{ind.companies} Accounts</span>
                    </div>

                    <h4 className="text-sm font-medium text-[#161616] mb-1 group-hover:text-[#0f62fe] transition-colors">
                      {ind.name}
                    </h4>

                    <div className="flex items-baseline gap-1.5 pt-2 border-t border-[#e0e0e0] mt-2">
                      <span className="text-base font-semibold text-[#161616]">{ind.professionals}</span>
                      <span className="text-xs text-[#525252]">verified decision-makers</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Loop Row 2: Scrolling in Opposite Direction (Right) */}
            <div className="industry-marquee-right flex gap-4 w-max py-1">
              {[...industriesRow2, ...industriesRow2, ...industriesRow2].map((ind, idx) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={`row2-${ind.name}-${idx}`}
                    className="relative w-72 sm:w-80 flex-shrink-0 p-5 bg-white border border-[#e0e0e0] hover:bg-[#fafbfc] hover:border-[#161616] hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden"
                  >
                    {/* Top Accent Hairline */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-75 group-hover:h-[3px] transition-all"
                      style={{ backgroundColor: ind.accentColor }}
                    />

                    <div className="flex items-center justify-between gap-3 mb-3 pt-1">
                      <div 
                        className="w-8 h-8 border border-[#e0e0e0] flex items-center justify-center transition-colors"
                        style={{ backgroundColor: '#f4f4f4' }}
                      >
                        <IndIcon className="w-4 h-4" style={{ color: ind.accentColor }} />
                      </div>
                      <span className="text-xs font-mono text-[#525252]">{ind.companies} Accounts</span>
                    </div>

                    <h4 className="text-sm font-medium text-[#161616] mb-1 group-hover:text-[#0f62fe] transition-colors">
                      {ind.name}
                    </h4>

                    <div className="flex items-baseline gap-1.5 pt-2 border-t border-[#e0e0e0] mt-2">
                      <span className="text-base font-semibold text-[#161616]">{ind.professionals}</span>
                      <span className="text-xs text-[#525252]">verified decision-makers</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Custom TAM Request Card (Royal Blue Gradient Banner) */}
        <div className="bg-gradient-to-r from-[#0038a8] via-[#0f62fe] to-[#002d9c] text-white p-8 md:p-12 border border-[#002d9c] shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-white/80 block mb-1 uppercase tracking-wider">
              Custom market sizing
            </span>
            <h3 className="text-2xl font-medium text-white mb-2">
              Request a custom Total Addressable Market (TAM) count
            </h3>
            <p className="text-sm text-white/90 max-w-xl leading-relaxed">
              Receive a comprehensive TAM audit segmented by company headcount, revenue tiers, tech install-base, and geographic parameters.
            </p>
          </div>
          <ContactForm
            type="demo"
            trigger={
              <button
                type="button"
                className="inline-flex items-center justify-between gap-3 bg-white text-[#0f62fe] hover:bg-[#f0f6fc] text-sm font-medium px-6 py-4 shrink-0 cursor-pointer transition-all shadow-md"
              >
                <span>Request TAM Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            }
          />
        </div>

      </div>

      <style>{`
        @keyframes industryMarqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes industryMarqueeRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .industry-marquee-left {
          animation: industryMarqueeLeft 30s linear infinite;
          will-change: transform;
        }
        .industry-marquee-right {
          animation: industryMarqueeRight 30s linear infinite;
          will-change: transform;
        }
        .industry-marquee-left:hover,
        .industry-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default WorldMapDemo;