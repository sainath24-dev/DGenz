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
  ChevronRight
} from 'lucide-react';

export const SolutionsOverview = () => {
  const solutions = [
    {
      icon: Target,
      title: 'Lead Generation Strategy',
      badge: 'Strategy & ICP',
      description: 'Comprehensive account targeting architecture including deterministic ICP development, funnel economics, and TAM prioritization.',
      href: '/solutions/lead-generation-strategy'
    },
    {
      icon: FileText,
      title: 'Content-Driven Lead Generation',
      badge: 'Syndication & Inbound',
      description: 'Educational asset syndication across verified industry channels that converts technical researchers into sales opportunities.',
      href: '/solutions/content-driven-lead-generation'
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising (PPC)',
      badge: 'Precision Paid Media',
      description: 'Account-matched LinkedIn advertising and Google Search PPC campaigns managed for high-intent pipeline ROI.',
      href: '/solutions/paid-advertising-ppc'
    },
    {
      icon: Phone,
      title: 'Outbound Lead Generation',
      badge: 'Direct Outreach',
      description: 'Verified decision-maker outreach cadences and bespoke buying group coordination delivered directly to your sales team.',
      href: '/solutions/outbound-lead-generation'
    },
    {
      icon: TrendingUp,
      title: 'Full-Funnel Marketing & Nurturing',
      badge: 'Pipeline Acceleration',
      description: 'Multi-touch engagement workflows, predictive intent scoring, CRM pipeline synchronization, and real-time conversion metrics.',
      href: '/solutions/full-funnel-marketing-nurturing'
    },
    {
      icon: Layers,
      title: 'Buyer Intent & Telemetry',
      badge: 'Data Intelligence',
      description: 'Deterministic buyer intent signals across 42M+ decision makers that isolate active accounts before they contact sales.',
      href: '/company/our-data'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#e0e0e0] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carbon Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#e0e0e0]">
          <div>
            <span className="carbon-eyebrow block mb-1">
              Comprehensive capabilities
            </span>
            <h2 className="carbon-display-md text-[#161616]">
              Engineered demand generation solutions
            </h2>
          </div>
          <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0">
            Modular enterprise programs that operate independently or synthesize into a single full-funnel revenue engine.
          </p>
        </div>

        {/* Carbon 3x2 Grid (Flat 0px Cards with 1px Hairlines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;

            return (
              <Link
                key={solution.title}
                to={solution.href}
                className="carbon-feature-card flex flex-col justify-between group cursor-pointer border border-[#e0e0e0] hover:border-[#161616] transition-colors"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center text-[#161616] group-hover:bg-[#0f62fe] group-hover:text-white group-hover:border-[#0f62fe] transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-normal px-2.5 py-1 bg-[#f4f4f4] border border-[#e0e0e0] text-[#525252]">
                      {solution.badge}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-normal text-[#161616] mb-2 group-hover:text-[#0f62fe] transition-colors leading-snug">
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-[#525252] leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>
                
                {/* Action Link */}
                <div className="flex items-center justify-between pt-3 border-t border-[#e0e0e0] text-[#0f62fe] text-xs font-medium group-hover:underline">
                  <span>Explore solution details</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-12 pt-8 border-t border-[#e0e0e0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#525252]">
            Need a tailored multi-channel demand program for your sales pipeline?
          </div>
          <ContactForm 
            type="demo"
            trigger={
              <button 
                type="button" 
                className="carbon-btn-primary"
              >
                <span>Schedule architecture consultation</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            }
          />
        </div>

      </div>
    </section>
  );
};

export default SolutionsOverview;