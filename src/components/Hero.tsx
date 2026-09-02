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
    <section className="relative min-h-[88vh] flex flex-col justify-center items-start overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 border-b border-[#e0e0e0]">
      
      {/* Madison Logic Scraped Video Background Layer */}
      <HeroVideoBackground />

      {/* Carbon Hero Grid Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-start text-left">
        
        {/* Sentence Case Eyebrow / Pipeline Strip */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-6 text-sm text-[#525252] font-normal tracking-[0.16px]">
          <span className="text-[#0f62fe] font-medium">Pipeline methodology:</span>
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2">
              <span className="text-[#161616] hover:text-[#0f62fe] transition-colors">
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#8c8c8c] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Carbon Display-XL Headline with Signature Weight 300 */}
        <h1 className="carbon-display-xl text-[#161616] max-w-4xl mb-6">
          Deterministic intent intelligence engineered for enterprise B2B revenue.
        </h1>

        {/* Carbon Lead Body */}
        <p className="carbon-body-lg text-[#525252] max-w-3xl mb-10">
          Unify multi-source buyer intent telemetry, account-based orchestration, and verified decision-maker networks to generate qualified enterprise opportunities with predictable ROI.
        </p>

        {/* Carbon CTA Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto mb-14">
          <ContactForm 
            type="get-started"
            trigger={
              <button
                type="button"
                className="carbon-btn-primary h-12 px-6 text-sm font-normal cursor-pointer"
              >
                <span>Start your campaign</span>
                <ArrowRight className="w-4 h-4 ml-3" />
              </button>
            }
          />

          <button
            onClick={() => navigate('/resources')}
            type="button"
            className="carbon-btn-tertiary h-12 px-6 text-sm font-normal cursor-pointer"
          >
            <span>Explore data methodology</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Carbon 4-Column Stat Tile Grid (0px corners, 1px hairlines) */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#e0e0e0] bg-white/95 backdrop-blur-sm">
          <div className="p-6 border-r border-b md:border-b-0 border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors">
            <div className="text-3xl lg:text-4xl font-light text-[#161616] tracking-tight">
              3.8M+
            </div>
            <div className="text-xs text-[#525252] tracking-[0.32px] mt-1">
              Global Verified Companies
            </div>
          </div>
          
          <div className="p-6 border-r-0 md:border-r border-b md:border-b-0 border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors">
            <div className="text-3xl lg:text-4xl font-light text-[#161616] tracking-tight">
              42M+
            </div>
            <div className="text-xs text-[#525252] tracking-[0.32px] mt-1">
              Active Decision Makers
            </div>
          </div>
          
          <div className="p-6 border-r border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors">
            <div className="text-3xl lg:text-4xl font-light text-[#161616] tracking-tight">
              99.4%
            </div>
            <div className="text-xs text-[#525252] tracking-[0.32px] mt-1">
              Deterministic ICP Match
            </div>
          </div>

          <div className="p-6 hover:bg-[#f4f4f4] transition-colors">
            <div className="text-3xl lg:text-4xl font-light text-[#161616] tracking-tight">
              12+
            </div>
            <div className="text-xs text-[#525252] tracking-[0.32px] mt-1">
              Enterprise Verticals
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;