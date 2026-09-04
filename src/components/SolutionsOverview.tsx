import { Link } from 'react-router-dom';
import { 
  Target, 
  FileText, 
  Megaphone, 
  Send, 
  Filter, 
  ArrowRight,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import ContactForm from './ContactForm';

const solutions = [
  {
    icon: Target,
    title: 'Lead Generation Strategy',
    description: 'Empirical TAM analysis, ICP scoring criteria, and sales funnel mapping to establish a predictable pipeline engine.',
    href: '/solutions/lead-generation-strategy',
    badge: 'Strategic'
  },
  {
    icon: FileText,
    title: 'Content-Driven Lead Gen',
    description: 'Syndicate high-value whitepapers and reports across validated publisher networks with guaranteed lead delivery.',
    href: '/solutions/content-driven-lead-generation',
    badge: 'Syndication'
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising (PPC)',
    description: 'Hyper-targeted LinkedIn campaigns and Google Search engineered specifically for enterprise account engagement.',
    href: '/solutions/paid-advertising-ppc',
    badge: 'Media'
  },
  {
    icon: Send,
    title: 'Outbound Lead Gen',
    description: 'Multi-touch outbound email and LinkedIn cadences targeting verified decision-maker buying committees with CRM integration.',
    href: '/solutions/outbound-lead-generation',
    badge: 'Outreach'
  },
  {
    icon: Filter,
    title: 'Full-Funnel Marketing',
    description: 'Unified account-based marketing orchestration from top-of-funnel intent capture to closed-won revenue acceleration.',
    href: '/solutions/full-funnel-marketing-nurturing',
    badge: 'Omnichannel'
  },
  {
    icon: TrendingUp,
    title: 'Precision Account Scoring',
    description: 'Algorithmic qualification scoring evaluating firmographic match, tech install-base, and active research surge intensity.',
    href: '/solutions/lead-generation-strategy',
    badge: 'Telemetry'
  }
];

export const SolutionsOverview = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200 text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <span className="carbon-eyebrow block mb-1 text-slate-500">
              Capabilities directory
            </span>
            <h2 className="carbon-display-md text-[#161616]">
              Comprehensive B2B revenue infrastructure
            </h2>
          </div>
          <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0">
            A complete suite of demand generation engines built for enterprise marketing and sales development teams.
          </p>
        </div>

        {/* 6-Card Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;

            return (
              <Link
                key={solution.title}
                to={solution.href}
                className="carbon-feature-card flex flex-col justify-between group cursor-pointer bg-white border border-[#e0e0e0] hover:border-[#161616] transition-colors"
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
                  <h3 className="text-lg font-medium text-[#161616] mb-2 group-hover:text-[#0f62fe] transition-colors leading-snug">
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
        <div className="mt-12 pt-8 border-t border-[#e5ceae] flex flex-col sm:flex-row items-center justify-between gap-4">
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