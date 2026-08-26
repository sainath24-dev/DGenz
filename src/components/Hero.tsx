import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import LightPillar from '@/components/ui/LightPillar';

const Hero = () => {
  const navigate = useNavigate();

  const steps = [
    { label: 'Identify', id: 'step-1' },
    { label: 'Engage', id: 'step-2' },
    { label: 'Convert', id: 'step-3' },
    { label: 'Scale', id: 'step-4' }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      {/* Dynamic WebGL 3D Light Pillar Background - Emerald & Teal Glow on White */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <LightPillar
          topColor="#059669"
          bottomColor="#10b981"
          intensity={1.05}
          rotationSpeed={0.25}
          glowAmount={0.007}
          pillarWidth={3.2}
          pillarHeight={0.45}
          noiseIntensity={0.25}
          mixBlendMode="normal"
          quality="high"
        />
      </div>

      {/* Subtle Light Ambient Radial Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.12] sm:leading-[1.08] mb-6 max-w-4xl pt-2 sm:pt-4">
          From Insight to Impact—
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
            Built for B2B
          </span>
        </h1>

        {/* Process Pipeline Flow */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-10 text-xs sm:text-sm font-medium">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-1.5 sm:gap-3">
              <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-white/90 border border-slate-200 text-slate-800 backdrop-blur-md shadow-xs hover:border-emerald-500 hover:text-emerald-700 transition-all font-semibold text-xs sm:text-sm">
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto mb-10 sm:mb-16">
          <ContactForm 
            type="get-started"
            trigger={
              <button
                type="button"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-white text-base sm:text-lg bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden cursor-pointer"
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
            className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-slate-800 hover:text-slate-950 text-base sm:text-lg bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span>Learn More</span>
          </button>
        </div>

        {/* Horizontal Stats Glass Bar */}
        <div className="w-full max-w-3xl mx-auto rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-xl p-4 sm:p-7 shadow-xl">
          <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
            <div className="px-1 sm:px-4">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                3.8M+
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-500 mt-1 truncate">
                Global Companies
              </div>
            </div>
            
            <div className="px-1 sm:px-4">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                42M+
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-500 mt-1 truncate">
                Professionals
              </div>
            </div>
            
            <div className="px-1 sm:px-4">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                12+
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-500 mt-1 truncate">
                Industry Verticals
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;