import { ExternalLink, ArrowRight, ChevronRight, Target, FileText, Megaphone, Send, Filter, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const capabilities = [
  {
    category: 'Strategic Foundation',
    icon: Target,
    accentColor: '#0f62fe',
    badgeClass: 'bg-[#edf5ff] text-[#0043ce] border-[#d0e2ff]',
    title: 'Explore how precision ICP mapping turns cold account lists into sales-ready pipeline blueprints',
    metric: '99.4%',
    metricLabel: 'Deterministic ICP precision match verified across 42M+ decision makers',
    href: '/solutions/lead-generation-strategy'
  },
  {
    category: 'Content Syndication',
    icon: FileText,
    accentColor: '#007d79',
    badgeClass: 'bg-[#e6f6f5] text-[#005d5d] border-[#9ef0f0]',
    title: 'Multi-channel content syndication delivers verified decision-maker engagements with guaranteed lead volume',
    metric: '3.8x Lift',
    metricLabel: 'Qualified pipeline conversion increase across gated whitepapers and research reports',
    href: '/solutions/content-driven-lead-generation'
  },
  {
    category: 'Paid Advertising (PPC)',
    icon: Megaphone,
    accentColor: '#8a3ffc',
    badgeClass: 'bg-[#f6f2ff] text-[#6929c4] border-[#d4bbff]',
    title: 'Targeted programmatic display and LinkedIn ads capture buying committees during active evaluation',
    metric: '8.4x',
    metricLabel: 'Higher in-target account CTR compared to generic commercial ad flights',
    href: '/solutions/paid-advertising-ppc'
  },
  {
    category: 'Outbound Sales Engine',
    icon: Send,
    accentColor: '#ee538b',
    badgeClass: 'bg-[#fff0f5] text-[#9f1853] border-[#ffd6e8]',
    title: 'High-touch executive email and direct-dial phone cadences shorten enterprise sales cycles',
    metric: '86.4%',
    metricLabel: 'Direct-dial phone connection accuracy with instant CRM synchronization',
    href: '/solutions/outbound-lead-generation'
  },
  {
    category: 'Full-Funnel Orchestration',
    icon: Filter,
    accentColor: '#1192e8',
    badgeClass: 'bg-[#edf5ff] text-[#00539a] border-[#bae6fd]',
    title: 'Unified account-based marketing orchestration from top-of-funnel intent capture to closed-won revenue',
    metric: 'Zero Waste',
    metricLabel: '100% SLA-backed lead replacement guarantee ensuring zero budget leakage',
    href: '/solutions/full-funnel-marketing-nurturing'
  },
  {
    category: 'Predictive Scoring',
    icon: TrendingUp,
    accentColor: '#b25e00',
    badgeClass: 'bg-[#fff8e1] text-[#8e4b00] border-[#ffe082]',
    title: 'Algorithmic qualification scoring evaluates firmographic match, tech install-base, and active surges',
    metric: '4.2x',
    metricLabel: 'Faster pipeline velocity from initial contact capture to opportunity creation',
    href: '/solutions/lead-generation-strategy'
  }
];

export const SolutionsOverview = () => {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#e0e0e0] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= 2-COLUMN SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-3 border-b border-[#e0e0e0]">
          <div>
            <span className="carbon-eyebrow block mb-1">
              Capabilities directory
            </span>
            <h2 className="carbon-display-md text-[#161616]">
              Comprehensive B2B revenue infrastructure
            </h2>
          </div>
          <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0 font-normal">
            Deterministic demand engines and verified decision-maker networks delivering documented conversion lift across every stage of the pipeline.
          </p>
        </div>

        {/* ================= IBM SMARTER IMPACT 6-CARD GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.href}
                className="bg-white border border-[#e0e0e0] hover:border-[#161616] hover:shadow-md transition-all flex flex-col justify-between h-full group cursor-pointer overflow-hidden"
              >
                {/* Upper Area: Category Badge + Icon + Story Headline */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 border ${item.badgeClass}`}>
                      {item.category}
                    </span>
                    <Icon className="w-4 h-4" style={{ color: item.accentColor }} />
                  </div>

                  <h3 className="text-base lg:text-lg font-medium text-[#161616] leading-snug group-hover:text-[#0f62fe] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Metric Block (Light Gray bg #f4f4f4 - Exact IBM Pattern) */}
                <div className="bg-[#f4f4f4] p-6 border-t border-[#e0e0e0] flex flex-col justify-between min-h-[135px]">
                  <div>
                    <div className="text-xl sm:text-2xl font-light text-[#161616] tracking-tight mb-1 group-hover:text-[#0f62fe] transition-colors">
                      {item.metric}
                    </div>
                    <div className="text-xs text-[#525252] leading-relaxed font-normal">
                      {item.metricLabel}
                    </div>
                  </div>

                  <div className="flex justify-end pt-3">
                    <ExternalLink className="w-4 h-4 text-[#0f62fe] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ================= BOTTOM ROYAL BLUE CTA ROW ================= */}
        <div className="mt-12 bg-gradient-to-r from-[#0038a8] via-[#0f62fe] to-[#002d9c] text-white p-6 sm:p-8 border border-[#002d9c] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-white/80 block mb-1 uppercase tracking-wider">
              Tailored Architecture
            </span>
            <h3 className="text-lg sm:text-xl font-medium text-white">
              Need a custom multi-channel demand program for your sales pipeline?
            </h3>
          </div>
          <ContactForm
            type="demo"
            trigger={
              <button
                type="button"
                className="inline-flex items-center justify-between gap-3 bg-white text-[#0f62fe] hover:bg-[#f0f6fc] text-sm font-medium px-6 py-3.5 shrink-0 cursor-pointer transition-all shadow-md"
              >
                <span>Schedule architecture consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            }
          />
        </div>

      </div>
    </section>
  );
};

export default SolutionsOverview;