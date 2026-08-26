import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import HeroVideoBackground from './HeroVideoBackground';

const Hero = () => {
  const navigate = useNavigate();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Track scroll through sticky wrap container
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 35,
    restDelta: 0.001
  });

  // Transform width from floating pill (92% or max-w-6xl) to full screen 100vw
  const pillWidth = useTransform(smoothProgress, [0, 0.85], ['92%', '100%']);
  const pillHeight = useTransform(smoothProgress, [0, 0.85], ['88vh', '100vh']);
  const pillRadius = useTransform(smoothProgress, [0, 0.85], ['2rem', '0rem']);
  const titleScale = useTransform(smoothProgress, [0, 0.85], [0.95, 1.05]);
  const contentY = useTransform(smoothProgress, [0, 0.85], ['0px', '-8px']);

  const steps = [
    { label: 'Identify', id: 'step-1' },
    { label: 'Engage', id: 'step-2' },
    { label: 'Convert', id: 'step-3' },
    { label: 'Scale', id: 'step-4' }
  ];

  return (
    <div ref={wrapRef} className="relative h-[165vh] bg-slate-950">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Animated Expanding Sticky Pill Hero Block */}
        <motion.div
          style={{
            width: pillWidth,
            height: pillHeight,
            borderRadius: pillRadius
          }}
          className="relative max-w-[1400px] mx-auto overflow-hidden border border-slate-700/60 shadow-2xl flex flex-col justify-center items-start px-5 sm:px-10 lg:px-16"
        >
          {/* Background Multi-Video Cycler (vid1 to vid7 with 3.5s crossfade) */}
          <HeroVideoBackground intervalSec={3.5} />

          {/* Hero Content Container - Left-Aligned in One Flow */}
          <motion.div 
            style={{ scale: titleScale, y: contentY }}
            className="relative z-10 max-w-4xl w-full flex flex-col items-start text-left origin-left"
          >
            {/* Process Pipeline Flow */}
            <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-6 text-xs sm:text-sm font-medium">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-slate-800 backdrop-blur-md shadow-xs hover:border-emerald-500 hover:text-emerald-700 transition-all font-semibold">
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 leading-[1.08] mb-8 max-w-3xl">
              From Insight to Impact—
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                Built for B2B
              </span>
            </h1>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <ContactForm 
                type="get-started"
                trigger={
                  <button
                    type="button"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white text-base sm:text-lg bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden cursor-pointer"
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
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-800 hover:text-slate-950 text-base sm:text-lg bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Horizontal Stats Glass Bar - Left Aligned */}
            <div className="w-full max-w-2xl rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-xl p-5 sm:p-6 shadow-xl">
              <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
                <div className="px-2 sm:px-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                    3.8M+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Global Companies
                  </div>
                </div>
                
                <div className="px-2 sm:px-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                    42M+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Professionals
                  </div>
                </div>
                
                <div className="px-2 sm:px-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                    12+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Industry Verticals
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;