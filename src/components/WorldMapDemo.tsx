import { useState } from 'react';
import { motion } from 'framer-motion';
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
import { Meteors } from '@/components/ui/Meteors';
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
      { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } }, // NY -> London
      { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 35.6762, lng: 139.6503 } }, // SF -> Tokyo
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 1.3521, lng: 103.8198 } }, // London -> Singapore
      { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: -33.8688, lng: 151.2093 } }, // Singapore -> Sydney
      { start: { lat: 50.1109, lng: 8.6821 }, end: { lat: 25.2048, lng: 55.2708 } }, // Frankfurt -> Dubai
      { start: { lat: 40.7128, lng: -74.006 }, end: { lat: -23.5505, lng: -46.6333 } }, // NY -> São Paulo
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
      { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 37.7749, lng: -122.4194 } }, // NY -> SF
      { start: { lat: 41.8781, lng: -87.6298 }, end: { lat: 30.2672, lng: -97.7431 } }, // Chicago -> Austin
      { start: { lat: 47.6062, lng: -122.3321 }, end: { lat: 43.6532, lng: -79.3832 } }, // Seattle -> Toronto
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
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 50.1109, lng: 8.6821 } }, // London -> Frankfurt
      { start: { lat: 50.1109, lng: 8.6821 }, end: { lat: 48.8566, lng: 2.3522 } }, // Frankfurt -> Paris
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 52.3676, lng: 4.9041 } }, // London -> Amsterdam
      { start: { lat: 50.1109, lng: 8.6821 }, end: { lat: 25.2048, lng: 55.2708 } }, // Frankfurt -> Dubai
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 59.3293, lng: 18.0686 } } // London -> Stockholm
    ]
  },
  apac: {
    name: 'Asia-Pacific',
    badge: '8.6M Contacts Available',
    companies: '750K+',
    professionals: '8.6M+',
    countries: '18 Countries (Singapore, Japan, ANZ, India)',
    accuracy: '98.8%',
    directDial: '78.5%',
    deliverySLA: '< 24 Hours',
    hubs: ['Singapore', 'Tokyo', 'Sydney', 'Mumbai', 'Seoul', 'Melbourne'],
    dots: [
      { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 35.6762, lng: 139.6503 } }, // Singapore -> Tokyo
      { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: -33.8688, lng: 151.2093 } }, // Singapore -> Sydney
      { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 1.3521, lng: 103.8198 } }, // Mumbai -> Singapore
      { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 37.5665, lng: 126.9780 } } // Tokyo -> Seoul
    ]
  },
  latam: {
    name: 'Latin America',
    badge: '2.4M Contacts Available',
    companies: '220K+',
    professionals: '2.4M+',
    countries: '12 Countries (Brazil, Mexico, Colombia)',
    accuracy: '98.5%',
    directDial: '74.2%',
    deliverySLA: '< 48 Hours',
    hubs: ['São Paulo', 'Mexico City', 'Bogotá', 'Santiago'],
    dots: [
      { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: -23.5505, lng: -46.6333 } }, // Mexico City -> São Paulo
      { start: { lat: 4.7110, lng: -74.0721 }, end: { lat: -33.4489, lng: -70.6693 } }, // Bogotá -> Santiago
      { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: -34.6037, lng: -58.3816 } } // São Paulo -> Buenos Aires
    ]
  }
};

// Row 1 Verticals (Loops Left)
const industriesRow1 = [
  { name: 'Technology & Cloud', icon: Cpu, professionals: '13.2M', companies: '178K', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200/60' },
  { name: 'Manufacturing & Industrial', icon: Factory, professionals: '8.9M', companies: '1.9M', color: 'text-sky-600', bg: 'bg-sky-50 border-sky-200/60' },
  { name: 'IT & Enterprise Services', icon: Briefcase, professionals: '5.2M', companies: '790K', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200/60' },
  { name: 'BFSI & Fintech', icon: Landmark, professionals: '5.1M', companies: '200K', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200/60' },
  { name: 'Telecommunications', icon: Radio, professionals: '3.4M', companies: '112K', color: 'text-cyan-600', bg: 'bg-cyan-50 border-cyan-200/60' },
  { name: 'Energy & Utilities', icon: Flame, professionals: '1.8M', companies: '95K', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200/60' }
];

// Row 2 Verticals (Loops Right in Opposite Direction)
const industriesRow2 = [
  { name: 'Construction & Real Estate', icon: HardHat, professionals: '2.7M', companies: '386K', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200/60' },
  { name: 'Media & Communications', icon: Tv, professionals: '2.4M', companies: '164K', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200/60' },
  { name: 'Healthcare & Pharma', icon: HeartPulse, professionals: '1.6M', companies: '187K', color: 'text-teal-600', bg: 'bg-teal-50 border-teal-200/60' },
  { name: 'Logistics & Supply Chain', icon: Truck, professionals: '1.0M', companies: '143K', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200/60' },
  { name: 'Hospitality & Retail', icon: Building2, professionals: '1.3M', companies: '126K', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200/60' },
  { name: 'Metals & Mining', icon: Layers, professionals: '1.3M', companies: '87K', color: 'text-slate-600', bg: 'bg-slate-100 border-slate-200' }
];

export function WorldMapDemo() {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('all');

  const currentData = regions[selectedRegion];
  const is3D = selectedRegion === 'all';

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Global Reach, <span className="text-indigo-600">Local Authority</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Connect with 42M+ verified decision-makers across 100+ countries. Select any region below to inspect live audience availability and regional connection routes.
          </p>
        </div>

        {/* Region Selector Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-10">
          {(Object.keys(regions) as RegionKey[]).map((key) => {
            const isActive = selectedRegion === key;
            const region = regions[key];

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedRegion(key)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <span>{region.name}</span>
                <span className={`ml-1.5 sm:ml-2 text-[10px] sm:text-xs py-0.5 px-1.5 rounded-md ${
                  isActive ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {region.professionals}
                </span>
              </button>
            );
          })}
        </div>

        {/* Master Screen Container */}
        <div 
          className={`rounded-2xl sm:rounded-3xl border transition-colors duration-300 p-4 sm:p-10 mb-12 sm:mb-16 relative overflow-hidden ${
            is3D 
              ? 'bg-slate-900 border-slate-800 shadow-2xl text-white' 
              : 'bg-white border-slate-200/90 shadow-xl text-slate-900'
          }`}
        >
          
          {/* Background Meteoroids (Visible in 3D Mode) */}
          <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${is3D ? 'opacity-100' : 'opacity-0'}`}>
            <Meteors number={24} />
          </div>

          {/* Screen Top Status Bar */}
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b mb-8 relative z-10 transition-colors duration-300 ${
            is3D ? 'border-slate-800' : 'border-slate-100'
          }`}>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-md border ${
                  is3D 
                    ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' 
                    : 'bg-indigo-50 text-indigo-700 border-indigo-200/80'
                }`}>
                  <Globe className="w-3.5 h-3.5" />
                  {currentData.badge}
                </span>
                <span className={`text-xs ${is3D ? 'text-slate-500' : 'text-slate-400'}`}>•</span>
                <span className={`text-xs font-semibold ${is3D ? 'text-slate-400' : 'text-slate-600'}`}>
                  {currentData.countries}
                </span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                is3D ? 'text-white' : 'text-slate-900'
              }`}>
                {currentData.name} Audience Availability
              </h3>
            </div>

            {/* Hubs Badges */}
            <div className="flex items-center flex-wrap gap-1.5">
              <span className={`text-xs font-bold mr-1 flex items-center gap-1 ${
                is3D ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <MapPin className={`w-3.5 h-3.5 ${is3D ? 'text-sky-400' : 'text-indigo-600'}`} />
                Active Hubs:
              </span>
              {currentData.hubs.slice(0, 4).map((hub) => (
                <span key={hub} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                  is3D 
                    ? 'bg-slate-900 border-slate-800 text-slate-300' 
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  {hub}
                </span>
              ))}
              {currentData.hubs.length > 4 && (
                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                  is3D ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                }`}>
                  +{currentData.hubs.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Instant 3D ➔ 2D Canvas Layering (0ms delay) */}
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] z-10">
            
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
                lineColor="#2563eb"
                variant="light"
              />

              {/* Back to 3D Earth Button */}
              <div className="absolute bottom-2 right-2 z-20">
                <button
                  type="button"
                  onClick={() => setSelectedRegion('all')}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Back to 3D Earth</span>
                </button>
              </div>
            </div>

          </div>

          {/* 4 Bottom HUD Counters */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 pt-4 sm:pt-6 border-t mt-4 sm:mt-6 relative z-10 transition-colors duration-300 ${
            is3D ? 'border-slate-800/80' : 'border-slate-100'
          }`}>
            
            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${
              is3D ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div className={`flex items-center gap-1.5 sm:gap-2 mb-1 text-[11px] sm:text-xs font-semibold ${is3D ? 'text-slate-400' : 'text-slate-500'}`}>
                <Building2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${is3D ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className="truncate">Verified Accounts</span>
              </div>
              <div className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight ${is3D ? 'text-white' : 'text-slate-900'}`}>
                {currentData.companies}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 truncate">Enterprise & Mid-Market</div>
            </div>

            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${
              is3D ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div className={`flex items-center gap-1.5 sm:gap-2 mb-1 text-[11px] sm:text-xs font-semibold ${is3D ? 'text-slate-400' : 'text-slate-500'}`}>
                <Users className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${is3D ? 'text-sky-400' : 'text-sky-600'}`} />
                <span className="truncate">Decision-Makers</span>
              </div>
              <div className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight ${is3D ? 'text-sky-400' : 'text-indigo-600'}`}>
                {currentData.professionals}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 truncate">C-Suite, VP & Directors</div>
            </div>

            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${
              is3D ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div className={`flex items-center gap-1.5 sm:gap-2 mb-1 text-[11px] sm:text-xs font-semibold ${is3D ? 'text-slate-400' : 'text-slate-500'}`}>
                <Layers className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${is3D ? 'text-purple-400' : 'text-purple-600'}`} />
                <span className="truncate">Industry Verticals</span>
              </div>
              <div className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight ${is3D ? 'text-white' : 'text-slate-900'}`}>
                12
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 truncate">Standardized NAICS/SIC</div>
            </div>

            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${
              is3D ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200/80'
            }`}>
              <div className={`flex items-center gap-1.5 sm:gap-2 mb-1 text-[11px] sm:text-xs font-semibold ${is3D ? 'text-slate-400' : 'text-slate-500'}`}>
                <ShieldCheck className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${is3D ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className="truncate">Compliance</span>
              </div>
              <div className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight ${is3D ? 'text-emerald-400' : 'text-emerald-600'}`}>
                100%
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 truncate">GDPR & CCPA Compliant</div>
            </div>

          </div>

        </div>

        {/* Industry Verticals Intelligence Section: Dual Opposite Loop Marquees */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Audience Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Deep Coverage Across Key Verticals
            </h3>
          </div>

          {/* Masked Marquee Container with Smooth Edge Fades */}
          <div 
            className="relative w-full overflow-hidden py-2 space-y-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            
            {/* Loop Row 1: Moving Left */}
            <div className="animate-marquee-left flex gap-5 py-1">
              {[...industriesRow1, ...industriesRow1, ...industriesRow1].map((ind, idx) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={`row1-${ind.name}-${idx}`}
                    className="w-72 sm:w-80 flex-shrink-0 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${ind.bg}`}>
                        <IndIcon className={`w-4 h-4 ${ind.color}`} />
                      </div>
                      <span className="text-xs font-bold text-slate-500">{ind.companies} Accounts</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {ind.name}
                    </h4>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-slate-900">{ind.professionals}</span>
                      <span className="text-xs text-slate-500 font-medium">verified contacts</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Loop Row 2: Moving in Opposite Direction (Right) */}
            <div className="animate-marquee-right flex gap-5 py-1">
              {[...industriesRow2, ...industriesRow2, ...industriesRow2].map((ind, idx) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={`row2-${ind.name}-${idx}`}
                    className="w-72 sm:w-80 flex-shrink-0 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${ind.bg}`}>
                        <IndIcon className={`w-4 h-4 ${ind.color}`} />
                      </div>
                      <span className="text-xs font-bold text-slate-500">{ind.companies} Accounts</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {ind.name}
                    </h4>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-slate-900">{ind.professionals}</span>
                      <span className="text-xs text-slate-500 font-medium">verified contacts</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom Call to Action Card */}
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Looking for Custom Audience Counts?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Request a free custom Total Addressable Market (TAM) analysis filtered by your exact titles, regions, and tech stack criteria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactForm
              type="get-started"
              trigger={
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Request Custom TAM Count</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default WorldMapDemo;