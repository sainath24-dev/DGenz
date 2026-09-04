import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import HeroVideoBackground from './HeroVideoBackground';

const Hero = () => {
  const navigate = useNavigate();

  const steps = [
    { label: 'Identify intent signals', id: 'step-1' },
    { label: 'Map buying committees', id: 'step-2' },
    { label: 'Orchestrate precision touchpoints', id: 'step-3' },
    { label: 'Scale enterprise pipeline', id: 'step-4' }
  ];

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden pt-32 sm:pt-36 pb-20 sm:pb-24 border-b border-[#e0e0e0] bg-white">

      {/* High-Fidelity Video Layer (Vibrant & rich on the right side) */}
      <HeroVideoBackground />

      {/* Hero Content Container centered on global 7xl grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start text-left">

        {/* Upper Hero Copy */}
        <div className="max-w-4xl w-full flex flex-col items-start text-left mb-14 sm:mb-16">

          {/* Workflow Sequence Strip */}
          <div className="hidden sm:flex flex-wrap items-center justify-start gap-2 text-xs sm:text-sm text-[#525252] font-normal tracking-[0.16px] mb-6">
            <span className="text-[#0f62fe] font-medium font-mono">Workflow:</span>
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center gap-2">
                <span className="text-[#161616] hover:text-[#0f62fe] transition-colors font-medium">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#8c8c8c] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Display Headline - Expansive and Commanding Scale */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal text-[#161616] max-w-4xl mb-6 leading-[1.08] tracking-tight">
            Deterministic intent intelligence engineered for <span className="text-[#0f62fe]">enterprise B2B revenue</span>.
          </h1>

          {/* Lead Body */}
          <p className="text-base sm:text-lg lg:text-xl text-[#525252] max-w-2xl mb-10 leading-relaxed font-normal">
            Unify multi-source buyer intent signals, account-based orchestration, and verified decision-maker networks to generate qualified enterprise opportunities with predictable ROI.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-5 w-full sm:w-auto">
            <ContactForm
              type="get-started"
              trigger={
                <button
                  type="button"
                  className="bg-[#0f62fe] hover:bg-[#0353e9] active:bg-[#002d9c] text-white min-h-[48px] sm:min-h-[52px] px-6 sm:px-7 text-sm sm:text-base font-normal cursor-pointer transition-colors inline-flex items-center justify-center sm:justify-between gap-4"
                >
                  <span>Start your campaign</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </button>
              }
            />

            <button
              onClick={() => navigate('/resources')}
              type="button"
              className="min-h-[48px] sm:min-h-[52px] px-6 sm:px-7 text-sm sm:text-base font-normal cursor-pointer bg-white border border-[#0f62fe] text-[#0f62fe] hover:bg-[#edf5ff] transition-colors inline-flex items-center justify-center sm:justify-between gap-4"
            >
              <span>Explore data methodology</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* 4-Column Stat Tile Grid with IBM Color Accents */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#e0e0e0] bg-white text-[#161616] shadow-sm">
          <div className="relative p-6 sm:p-7 border-r border-b md:border-b-0 border-[#e0e0e0] hover:bg-[#fafbfc] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0f62fe] opacity-80 group-hover:h-[3px] transition-all" />
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-light text-[#161616] tracking-tight group-hover:text-[#0f62fe] transition-colors">
              3.8M+
            </div>
            <div className="text-xs sm:text-sm text-[#525252] tracking-[0.32px] mt-2 font-normal">
              Global Verified Companies
            </div>
          </div>

          <div className="relative p-6 sm:p-7 border-r-0 md:border-r border-b md:border-b-0 border-[#e0e0e0] hover:bg-[#fafbfc] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#007d79] opacity-80 group-hover:h-[3px] transition-all" />
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-light text-[#161616] tracking-tight group-hover:text-[#007d79] transition-colors">
              42M+
            </div>
            <div className="text-xs sm:text-sm text-[#525252] tracking-[0.32px] mt-2 font-normal">
              Active Decision Makers
            </div>
          </div>

          <div className="relative p-6 sm:p-7 border-r border-[#e0e0e0] hover:bg-[#fafbfc] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0f62fe] opacity-100 group-hover:h-[3px] transition-all" />
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-light text-[#0f62fe] tracking-tight font-normal">
              99.4%
            </div>
            <div className="text-xs sm:text-sm text-[#525252] tracking-[0.32px] mt-2 font-normal">
              Deterministic ICP Match
            </div>
          </div>

          <div className="relative p-6 sm:p-7 hover:bg-[#fafbfc] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#8a3ffc] opacity-80 group-hover:h-[3px] transition-all" />
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-light text-[#161616] tracking-tight group-hover:text-[#8a3ffc] transition-colors">
              12+
            </div>
            <div className="text-xs sm:text-sm text-[#525252] tracking-[0.32px] mt-2 font-normal">
              Enterprise Verticals
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;