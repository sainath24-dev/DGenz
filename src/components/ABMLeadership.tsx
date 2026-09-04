import { Target, TrendingUp, BarChart3, Users, Check, Monitor, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import realMarketingPhoto from '/assets/img2.jpg';

export const ABMLeadership = () => {
  const adFeatures = [
    {
      icon: Target,
      title: 'Buying Group Precision',
      description: 'Zero waste by serving impressions solely to verified decision-makers.',
      accentColor: '#0f62fe'
    },
    {
      icon: TrendingUp,
      title: 'Intent-Triggered Activation',
      description: 'Automatically trigger ad flights when accounts show research spikes.',
      accentColor: '#007d79'
    },
    {
      icon: BarChart3,
      title: 'Full-Funnel Measurement',
      description: 'Direct pipeline attribution and account engagement lift analytics.',
      accentColor: '#8a3ffc'
    }
  ];

  const caseStudies = [
    {
      category: 'Market Intelligence',
      client: 'CloudSec Global',
      title: 'CloudSec Global accelerated Tier-1 pipeline generation by activating real-time intent surges across 42M+ verified decision makers.',
      accentColor: '#0f62fe',
      badgeClass: 'bg-[#edf5ff] text-[#0043ce] border-[#d0e2ff]',
      stat1: {
        value: '99.4%',
        label: 'Deterministic ICP match precision across buying committee members'
      },
      stat2: {
        value: '350%',
        label: 'Average ROI increase documented on qualified enterprise pipeline'
      },
      href: '/case-studies'
    },
    {
      category: 'Targeted Media',
      client: 'Enterprise Networking Corp',
      title: 'Precision programmatic display and LinkedIn advertising captured buying committees during active software evaluation phases.',
      accentColor: '#8a3ffc',
      badgeClass: 'bg-[#f6f2ff] text-[#6929c4] border-[#d4bbff]',
      stat1: {
        value: '8.4x',
        label: 'Higher in-target account CTR compared to standard commercial ad flights'
      },
      stat2: {
        value: '85%',
        label: 'Verified lead quality scoring with deterministic company IP matching'
      },
      href: '/case-studies'
    },
    {
      category: 'Analytics & Attribution',
      client: 'FinTech Systems International',
      title: 'Cross-channel pipeline telemetry unified multi-touch attribution models, accelerating enterprise opportunity progression.',
      accentColor: '#007d79',
      badgeClass: 'bg-[#e6f6f5] text-[#005d5d] border-[#9ef0f0]',
      stat1: {
        value: '4.2x',
        label: 'Pipeline velocity lift shortening enterprise sales cycles from months to weeks'
      },
      stat2: {
        value: '100+',
        label: 'Enterprise deployments validated across North America, EMEA, and APAC'
      },
      href: '/case-studies'
    },
    {
      category: 'Strategic Services',
      client: 'HealthTech Platform',
      title: 'Dedicated revenue architects engineered bespoke qualification filters, delivering sales-ready leads directly into enterprise CRM.',
      accentColor: '#ee538b',
      badgeClass: 'bg-[#fff0f5] text-[#9f1853] border-[#ffd6e8]',
      stat1: {
        value: '86.4%',
        label: 'Direct-dial phone connection accuracy with custom qualification survey'
      },
      stat2: {
        value: '100%',
        label: 'SLA-backed lead replacement guarantee with zero pipeline leakage'
      },
      href: '/case-studies'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#e0e0e0] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* ================= PART 1: ABM DISPLAY ADVERTISING SHOWCASE ================= */}
        <div className="border border-[#e0e0e0] bg-white p-8 md:p-12 text-[#161616] shadow-xs">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="carbon-eyebrow block mb-1">
                  Enterprise Display Media
                </span>
              </div>

              <h2 className="carbon-display-md text-[#161616]">
                Build brand authority with account-targeted display media
              </h2>

              <p className="carbon-body text-[#525252] leading-relaxed font-normal">
                Stay top-of-mind across the entire buying committee with precision-targeted display and native programmatic media delivered exclusively to qualified accounts.
              </p>

              {/* 3 Carbon Feature Tiles with Subtle Accent Hairlines */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {adFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="relative p-4 bg-[#fafbfc] border border-[#e0e0e0] hover:border-[#161616] hover:bg-white transition-all duration-200 flex flex-col justify-between group overflow-hidden"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-75 group-hover:h-[3px] transition-all"
                        style={{ backgroundColor: feature.accentColor }}
                      />
                      <div>
                        <Icon className="w-4 h-4 mb-3" style={{ color: feature.accentColor }} />
                        <h3 className="text-sm font-medium text-[#161616] mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-[#525252] leading-relaxed font-normal">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/solutions/paid-advertising-ppc"
                  className="carbon-btn-primary h-12 px-6 text-sm font-normal inline-flex group"
                >
                  <span>Explore display advertising solutions</span>
                  <ArrowRight className="w-4 h-4 ml-3 flex-shrink-0 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Right Column: 5 cols Media Tile */}
            <div className="lg:col-span-5 border border-[#e0e0e0] bg-[#fafbfc] p-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#e0e0e0] mb-3 text-xs text-[#525252]">
                <span className="font-mono text-[#0f62fe] font-medium">PLACEMENT: TIER 1 ACCOUNTS</span>
                <span className="bg-white border border-[#e0e0e0] px-2 py-0.5 text-[#161616] font-mono text-[11px]">Active Flight</span>
              </div>

              <div className="relative aspect-[4/3] border border-[#e0e0e0] overflow-hidden bg-white mb-4 group">
                <img
                  src={realMarketingPhoto}
                  alt="Enterprise business team analyzing targeted display media campaigns"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#161616]/95 backdrop-blur-xs text-white px-4 py-2.5 flex items-center justify-between text-xs">
                  <span className="text-[#c6c6c6]">Targeting Verification</span>
                  <span className="text-[#4589ff] font-semibold">8.4x Engagement Lift</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#525252]">
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0f62fe] shrink-0" />
                  <span>Programmatic Display</span>
                </div>
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#007d79] shrink-0" />
                  <span>Native Content</span>
                </div>
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8a3ffc] shrink-0" />
                  <span>Connected TV (CTV)</span>
                </div>
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#ee538b] shrink-0" />
                  <span>B2B Video Media</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= PART 2: CASE STUDIES / REAL WORLD RESULTS (Exact IBM Layout) ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-3 border-b border-[#e0e0e0]">
            <div>
              <span className="carbon-eyebrow block mb-1">
                Case studies
              </span>
              <h2 className="carbon-display-md text-[#161616]">
                Real world results
              </h2>
            </div>
            <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0 font-normal">
              Deterministic targeting and multi-channel orchestration yield predictable conversion improvements across core metrics.
            </p>
          </div>

          {/* 4 Case Study Story Cards (Grid of 2x2 with Dual Stats & Story Links) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="relative bg-white border border-[#e0e0e0] hover:border-[#161616] hover:shadow-lg transition-all duration-300 p-6 lg:p-8 flex flex-col justify-between h-full group overflow-hidden"
              >
                {/* Top Accent Hairline */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:h-[4px]"
                  style={{ backgroundColor: cs.accentColor }}
                />

                <div>
                  {/* Category Pill & Client Header */}
                  <div className="flex items-center justify-between gap-3 mb-4 pt-1">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 border ${cs.badgeClass}`}>
                      {cs.category}
                    </span>
                    <span className="text-xs font-mono text-[#8c8c8c]">
                      {cs.client}
                    </span>
                  </div>

                  {/* Story Description */}
                  <p className="text-sm lg:text-base text-[#161616] leading-relaxed font-normal mb-6">
                    {cs.title}
                  </p>

                  {/* Dual Stat Metrics Block (Exact IBM Layout) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#e0e0e0] mb-6">
                    {/* Stat 1 */}
                    <div className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] flex flex-col justify-between">
                      <div className="text-2xl lg:text-3xl font-light text-[#161616] tracking-tight mb-1 group-hover:text-[#0f62fe] transition-colors">
                        {cs.stat1.value}
                      </div>
                      <div className="text-xs text-[#525252] leading-relaxed font-normal">
                        {cs.stat1.label}
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] flex flex-col justify-between">
                      <div className="text-2xl lg:text-3xl font-light text-[#161616] tracking-tight mb-1 group-hover:text-[#0f62fe] transition-colors">
                        {cs.stat2.value}
                      </div>
                      <div className="text-xs text-[#525252] leading-relaxed font-normal">
                        {cs.stat2.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <Link
                  to={cs.href}
                  className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0f62fe] pt-4 border-t border-[#e0e0e0] hover:underline gap-1.5 group/link"
                >
                  <span>Read the client story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ABMLeadership;