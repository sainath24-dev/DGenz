const BrandLogos = () => {
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
    <section className="py-16 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Header */}
        <div className="text-center mb-10 group">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2.5 transition-transform duration-300 group-hover:-translate-y-0.5">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium transition-colors duration-300 group-hover:text-slate-700">
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
          <div className="marquee-track flex gap-8 sm:gap-12 items-center w-max py-2">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 hover:bg-slate-100/80 shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer"
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
          animation: brandFastMarquee 18s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandLogos;