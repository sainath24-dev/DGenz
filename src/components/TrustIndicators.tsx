import { Users, Globe } from 'lucide-react';
import FloatingLines from '@/components/ui/FloatingLines';

const TrustIndicators = () => {
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

  return (
    <section className="relative py-24 overflow-hidden border-t border-b border-slate-200 bg-white text-slate-900">
      
      {/* Dynamic FloatingLines WebGL Background Simulation from React Bits */}
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

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-white/90 via-transparent to-white/90 pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-white/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Part: Trust Metrics & Global Reach */}
        <div className="text-center mb-16">
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-8 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Trusted by <span className="text-emerald-600 font-black">100+ leading brands</span> to engage over <span className="text-teal-600 font-black">42M professionals</span> globally
          </p>
          
          <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap">
            
            {/* 100+ Brands Clean White Card */}
            <div className="group flex items-center gap-4 px-8 py-4.5 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-black text-slate-900 tracking-tight">100+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500">Leading Brands</div>
              </div>
            </div>
            
            {/* 42M+ Professionals Clean White Card */}
            <div className="group flex items-center gap-4 px-8 py-4.5 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6 text-teal-700" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-black text-slate-900 tracking-tight">42M+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500">Professionals</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Part: Trusted by Industry Leaders & Fast Brand Logo Marquee */}
        <div className="text-center pt-4">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              Trusted by Industry Leaders
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium">
              Join thousands of global companies using our ABM platform to drive pipeline growth
            </p>
          </div>

          {/* Fast Marquee Wrapper with White Gradient Edge Fades */}
          <div 
            className="relative w-full overflow-hidden py-3"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="marquee-track flex gap-8 sm:gap-10 items-center w-max py-2">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`} 
                  className="flex-shrink-0 flex items-center justify-center px-7 py-4 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:scale-108 cursor-pointer"
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

export default TrustIndicators;