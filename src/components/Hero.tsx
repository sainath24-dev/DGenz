import { ArrowRight, ChevronRight, Play, Sparkles, ShieldCheck, TrendingUp, Building2, Users2, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import HeroVideoBackground from './HeroVideoBackground';

const Hero = () => {
  const navigate = useNavigate();

  const steps = [
    { label: 'Identify', id: 'step-1' },
    { label: 'Engage', id: 'step-2' },
    { label: 'Convert', id: 'step-3' },
    { label: 'Scale', id: 'step-4' }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-12 border-b border-slate-800 bg-slate-950">
      
      {/* Background Multi-Video Cycler with 100% Pure Video Opacity */}
      <HeroVideoBackground intervalSec={3.5} />

      {/* Hero Content Container - Modern Asymmetric Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Left-Aligned Headline, Flow & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Process Pipeline Flow Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 text-xs sm:text-sm font-semibold">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2 sm:gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/85 border border-white/20 text-white backdrop-blur-xl shadow-lg hover:border-emerald-400 hover:text-emerald-300 hover:bg-slate-900 transition-all font-bold tracking-wide">
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6 drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)]">
              From Insight to Impact—
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 mt-1 drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)]">
                Built for B2B
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-medium leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Precision-targeted B2B demand generation, intent-driven audience discovery, and verified executive pipeline growth across global enterprise buying committees.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <ContactForm 
                type="get-started"
                trigger={
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white text-base sm:text-lg bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2 font-bold">
                      Start Your Campaign
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </button>
                }
              />

              <button
                onClick={() => navigate('/resources')}
                type="button"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white hover:text-emerald-300 text-base sm:text-lg bg-slate-900/80 hover:bg-slate-900 border border-white/25 shadow-xl backdrop-blur-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 gap-2.5 cursor-pointer"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="mt-8 flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Triple-Verified Profiles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>AI Intent Surge Data</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Modern Frosted Glass Stats Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl bg-slate-900/85 border border-white/20 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-white">
              
              {/* Card Header with Live Telemetry Pulse */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Live Enterprise Network
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                  Real-Time Verified
                </span>
              </div>

              {/* Stat 1: Global Companies */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      3.8M+
                    </div>
                    <div className="text-xs font-semibold text-slate-300">
                      Global Companies Covered
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" /> +14%
                </span>
              </div>

              {/* Stat 2: Professionals */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      42M+
                    </div>
                    <div className="text-xs font-semibold text-slate-300">
                      Decision-Maker Profiles
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-500/40">
                  VP+ Tier
                </span>
              </div>

              {/* Stat 3: Industry Verticals */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      12+
                    </div>
                    <div className="text-xs font-semibold text-slate-300">
                      Industry Verticals
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  Global Reach
                </span>
              </div>

              {/* Card Footer Tagline */}
              <div className="pt-2 text-center text-xs font-semibold text-slate-400">
                Deterministic Intent Intelligence • 99.4% Delivery Accuracy
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;