import React from 'react';

interface BrandItem {
  name: string;
  renderLogo: () => React.ReactNode;
}

const brandLogos: BrandItem[] = [
  {
    name: 'Google',
    renderLogo: () => (
      <svg className="h-6 w-auto" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
    )
  },
  {
    name: 'Microsoft',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 23 23">
          <path fill="#F25022" d="M1 1h10v10H1z"/>
          <path fill="#00A4EF" d="M1 12h10v10H1z"/>
          <path fill="#7FBA00" d="M12 1h10v10H12z"/>
          <path fill="#FFB900" d="M12 12h10v10H12z"/>
        </svg>
        <span className="text-sm font-bold text-[#737373] tracking-tight">Microsoft</span>
      </div>
    )
  },
  {
    name: 'Oracle',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="text-lg font-black tracking-widest text-[#F80000] uppercase font-sans">
          ORACLE
        </span>
      </div>
    )
  },
  {
    name: 'Adobe',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="h-5 w-auto fill-[#FF0000]" viewBox="0 0 30 26">
          <polygon points="19,0 30,0 30,26"/>
          <polygon points="11.1,0 0,0 0,26"/>
          <polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 11.3,20.8"/>
        </svg>
        <span className="text-sm font-bold text-[#FF0000] tracking-tight">Adobe</span>
      </div>
    )
  },
  {
    name: 'IBM',
    renderLogo: () => (
      <div className="flex items-center">
        <svg className="h-5 w-auto fill-[#0F62FE]" viewBox="0 0 32 13">
          <path d="M0 0h6.4v1.6H0zm0 3.2h6.4v1.6H0zm0 3.2h6.4v1.6H0zm0 3.2h6.4v1.6H0zm0 3.2h6.4v1.6H0zM8.5 0h10.7c2.1 0 3.7 1.2 3.7 3.2 0 1.2-.6 2.1-1.6 2.7 1.3.5 2.1 1.6 2.1 3 0 2.2-1.7 3.6-4.2 3.6H8.5V0zm15 0h8.5v12.5h-8.5V0z"/>
        </svg>
      </div>
    )
  },
  {
    name: 'Intel',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="text-lg font-bold tracking-tight text-[#0071C5] lowercase font-sans">
          intel<span className="text-xs font-normal align-super">®</span>
        </span>
      </div>
    )
  },
  {
    name: 'Dell Technologies',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="text-base font-black tracking-widest text-[#007DB8] uppercase font-sans">
          DELL
        </span>
      </div>
    )
  },
  {
    name: 'Cisco',
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <svg className="h-5 w-auto fill-[#1BA0D7]" viewBox="0 0 24 24">
          <path d="M12 0c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1s-1-.4-1-1V1c0-.6.4-1 1-1zm5 4c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1s-1-.4-1-1V5c0-.6.4-1 1-1zm-10 0c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1s-1-.4-1-1V5c0-.6.4-1 1-1zm15 2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1s-1-.4-1-1V7c0-.6.4-1 1-1zM2 6c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1s-1-.4-1-1V7c0-.6.4-1 1-1zM0 12h24v2H0v-2zm12 12c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 .6-.4 1-1 1zm-5-4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1zm10 0c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1zm-15-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 .6-.4 1-1 1zm20 0c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 .6-.4 1-1 1z"/>
        </svg>
        <span className="text-xs font-bold text-[#1BA0D7] tracking-wider uppercase">CISCO</span>
      </div>
    )
  },
  {
    name: 'AMD',
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <svg className="h-5 w-auto fill-[#ED1C24]" viewBox="0 0 24 24">
          <path d="M0 0v24h24V0H0zm6.857 6.857h10.286v10.286H6.857V6.857zM20.571 3.429H3.429v17.143h17.143V3.429z"/>
        </svg>
        <span className="text-base font-black text-[#ED1C24] tracking-tight">AMD</span>
      </div>
    )
  },
  {
    name: 'SAP',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="text-xs font-black tracking-widest text-white bg-[#008FD3] px-2.5 py-1 rounded-none font-sans uppercase">
          SAP
        </span>
      </div>
    )
  },
  {
    name: 'Zoom',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="text-lg font-bold tracking-tight text-[#2D8CFF] lowercase font-sans">
          zoom
        </span>
      </div>
    )
  },
  {
    name: 'Fujitsu',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="text-sm font-bold tracking-wider text-[#E60012] uppercase font-sans">
          FUJITSU
        </span>
      </div>
    )
  }
];

const BrandLogos = () => {
  return (
    <section className="py-12 bg-[#f4f4f4] border-b border-[#e0e0e0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carbon Eyebrow + Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e0e0e0]">
          <div>
            <span className="carbon-eyebrow block mb-1">
              Enterprise customer ecosystem
            </span>
            <h2 className="text-xl md:text-2xl font-light text-[#161616] tracking-tight">
              Trusted by global revenue and demand marketing teams
            </h2>
          </div>
          <p className="text-xs text-[#525252] tracking-[0.32px] mt-2 md:mt-0 font-mono">
            42M+ PROFILES VALIDATED
          </p>
        </div>

        {/* Scrolling Marquee of Authentic Brand Logos */}
        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          <div className="marquee-track flex gap-4 items-center w-max py-2">
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="carbon-logo-tile h-16 w-44 bg-white border border-[#e0e0e0] rounded-none px-5 py-3 flex items-center justify-center transition-all hover:border-[#161616] hover:bg-white cursor-pointer group shadow-none"
                title={brand.name}
              >
                <div className="flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                  {brand.renderLogo()}
                </div>
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
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: brandFastMarquee 28s linear infinite;
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