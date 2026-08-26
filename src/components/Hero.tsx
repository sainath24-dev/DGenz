import { ArrowRight, ChevronRight, Play } from 'lucide-react';
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
    <section className="relative min-h-[88vh] sm:min-h-[90vh] flex flex-col justify-center items-start overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 border-b border-slate-200">
      
      {/* Background Multi-Video Cycler with Mobile Fallback & Autoplay */}
      <HeroVideoBackground intervalSec={3.5} />

      {/* Hero Content Container - Responsive Left-Aligned Layout */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-start text-left">
        
        {/* Process Pipeline Flow */}
        <div className="flex flex-wrap items-center justify-start gap-1.5 sm:gap-3 mb-5 sm:mb-6 text-xs sm:text-sm font-medium">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-1.5 sm:gap-3">
              <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-white/90 border border-slate-200 text-slate-800 backdrop-blur-md shadow-xs hover:border-emerald-500 hover:text-emerald-700 transition-all font-semibold">
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-600 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.1] sm:leading-[1.08] mb-6 sm:mb-8 max-w-3xl">
          From Insight to Impact—
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
            Built for B2B
          </span>
        </h1>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-5 w-full sm:w-auto mb-10 sm:mb-12">
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

        {/* Horizontal Stats Glass Bar - Responsive */}
        <div className="w-full max-w-2xl rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-xl p-4 sm:p-6 shadow-xl">
          <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
            <div className="px-1.5 sm:px-4">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                3.8M+
              </div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-500 mt-0.5 sm:mt-1">
                Global Companies
              </div>
            </div>
            
            <div className="px-1.5 sm:px-4">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                42M+
              </div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-500 mt-0.5 sm:mt-1">
                Professionals
              </div>
            </div>
            
            <div className="px-1.5 sm:px-4">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                12+
              </div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-500 mt-0.5 sm:mt-1">
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