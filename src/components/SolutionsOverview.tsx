import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { 
  Target, 
  FileText, 
  Megaphone, 
  Phone, 
  TrendingUp,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const SolutionsOverview = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const solutions = [
    {
      icon: Target,
      title: 'Lead Generation Strategy',
      badge: 'Strategy & ICP',
      description: 'Comprehensive strategy development including ICP creation, funnel mapping, and competitive market analysis.',
      href: '/solutions/lead-generation-strategy'
    },
    {
      icon: FileText,
      title: 'Content-Driven Lead Generation',
      badge: 'Content & Inbound',
      description: 'SEO-optimized content, high-converting lead magnets, and webinar strategies that convert visitors into active leads.',
      href: '/solutions/content-driven-lead-generation'
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising (PPC)',
      badge: 'Multi-Channel PPC',
      description: 'LinkedIn ads, Google PPC, and high-impact programmatic media with precision landing page conversion optimization.',
      href: '/solutions/paid-advertising-ppc'
    },
    {
      icon: Phone,
      title: 'Outbound Lead Generation',
      badge: 'Outbound & SDR',
      description: 'Multi-touch cold email campaigns, LinkedIn prospecting, and dedicated SDR teams for direct C-suite outreach.',
      href: '/solutions/outbound-lead-generation'
    },
    {
      icon: TrendingUp,
      title: 'Full-Funnel Marketing & Nurturing',
      badge: 'Automation & CRM',
      description: 'Marketing automation, predictive lead scoring, CRM pipeline synchronization, and multi-touch revenue analytics.',
      href: '/solutions/full-funnel-marketing-nurturing'
    },
    {
      icon: Layers,
      title: 'Buyer Intent & Intelligence',
      badge: 'Data Intelligence',
      description: 'Real-time B2B buyer intent telemetry, buying committee mapping, and deterministic in-market account discovery.',
      href: '/company/our-data'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our B2B <span className="text-emerald-700">Lead Generation Services</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From ICP strategy development to full-funnel nurturing, DGenz Media provides everything you need to generate qualified leads and fuel your sales pipeline.
          </p>
        </div>

        {/* Focus Blur Interactive Cards Grid */}
        <div 
          className="focus-blur-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isHovered = hoveredIdx === index;
            const isOtherHovered = hoveredIdx !== null && !isHovered;

            return (
              <Link
                key={solution.title}
                to={solution.href}
                onMouseEnter={() => setHoveredIdx(index)}
                className={`focus-card p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isOtherHovered ? 'blur-[4px] opacity-40 scale-[0.96]' : ''
                } ${isHovered ? 'scale-[1.04] shadow-2xl z-10 border-slate-400 bg-white' : ''}`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6 transition-colors" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                      {solution.badge}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center pt-4 border-t border-slate-200/70 text-slate-900 font-semibold text-xs uppercase tracking-wider group-hover:text-emerald-700 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-14">
          <ContactForm 
            type="demo"
            trigger={
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            }
          />
        </div>

      </div>
    </section>
  );
};

export default SolutionsOverview;