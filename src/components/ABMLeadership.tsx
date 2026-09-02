import { Target, TrendingUp, BarChart3, Users, Check, Monitor, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import realMarketingPhoto from '/assets/img2.jpg';

export const ABMLeadership = () => {
  const adFeatures = [
    {
      icon: Target,
      title: 'Buying Group Precision',
      description: 'Zero waste by serving impressions solely to verified decision-makers.'
    },
    {
      icon: TrendingUp,
      title: 'Intent-Triggered Activation',
      description: 'Automatically trigger ad flights when accounts show research spikes.'
    },
    {
      icon: BarChart3,
      title: 'Full-Funnel Measurement',
      description: 'Direct pipeline attribution and account engagement lift analytics.'
    }
  ];

  const stats = [
    { metric: '350%', label: 'Average ROI Increase', description: 'Documented return on marketing investment' },
    { metric: '85%', label: 'Verified Lead Quality', description: 'Deterministic ICP fit scoring' },
    { metric: '4.2x', label: 'Pipeline Velocity Lift', description: 'Accelerated enterprise sales cycles' },
    { metric: '100+', label: 'Enterprise Deployments', description: 'Validated by global revenue leaders' }
  ];

  const achievements = [
    {
      icon: Target,
      title: 'Deterministic Intent Intelligence',
      description: 'Isolate active account research patterns across 42M+ verified decision makers in real time.',
      category: 'Market Intelligence',
      benefits: ['Multi-source intent correlation', '99.4% precision ICP match', 'Buying group member mapping']
    },
    {
      icon: Monitor,
      title: 'Precision Account-Based Advertising', 
      description: 'Deliver targeted media to buying committees on high-authority business networks.',
      category: 'Targeted Media',
      benefits: ['LinkedIn & search orchestration', 'Deterministic company IP matching', '3.8x higher engagement rate']
    },
    {
      icon: BarChart3,
      title: 'Revenue & Pipeline Attribution',
      description: 'Cross-channel telemetry measuring account progression, influence, and pipeline revenue.',
      category: 'Analytics & Attribution',
      benefits: ['Multi-touch attribution models', 'Opportunity pipeline reporting', 'Predictive account scoring']
    },
    {
      icon: Users,
      title: 'Dedicated Campaign Architecture',
      description: 'Work directly with dedicated enterprise revenue architects and campaign strategists.',
      category: 'Strategic Services',
      benefits: ['Dedicated client architect team', 'SLA-backed lead delivery', 'Custom qualification questions']
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#bfe3e5] via-[#cbdcf7] to-[#b8d1f7] border-b border-[#a0beee] text-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================= PART 1: ABM DISPLAY ADVERTISING SHOWCASE ================= */}
        <div className="border border-[#e0e0e0] bg-white p-8 md:p-12 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#525252] tracking-[0.16px]">
                <Monitor className="h-3.5 w-3.5 text-[#0f62fe]" />
                <span className="font-medium">Enterprise Display Media</span>
              </div>

              <h2 className="carbon-display-md text-[#161616]">
                Build brand authority with account-targeted display media
              </h2>

              <p className="carbon-body text-[#525252]">
                Stay top-of-mind across the entire buying committee with precision-targeted display and native programmatic media delivered exclusively to qualified accounts.
              </p>

              {/* 3 Carbon Feature Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {adFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] flex flex-col justify-between">
                      <div>
                        <Icon className="w-4 h-4 text-[#0f62fe] mb-3" />
                        <h3 className="text-sm font-medium text-[#161616] mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-[#525252] leading-relaxed">
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
                  className="carbon-btn-primary text-xs"
                >
                  <span>Explore display advertising solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Column: 5 cols Media Tile */}
            <div className="lg:col-span-5 border border-[#e0e0e0] bg-[#f4f4f4] p-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#e0e0e0] mb-3 text-xs text-[#525252]">
                <span className="font-mono">PLACEMENT: TIER 1 ACCOUNTS</span>
                <span className="bg-white border border-[#e0e0e0] px-2 py-0.5 text-[#161616]">Active</span>
              </div>

              <div className="relative aspect-[4/3] border border-[#e0e0e0] overflow-hidden bg-white mb-4">
                <img 
                  src={realMarketingPhoto} 
                  alt="Enterprise business team analyzing targeted display media campaigns" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#161616] text-white px-4 py-2 flex items-center justify-between text-xs">
                  <span>Targeting Verification</span>
                  <span className="text-[#0f62fe] font-semibold">8.4x Engagement Lift</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#525252]">
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0f62fe] shrink-0" />
                  <span>Programmatic Display</span>
                </div>
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0f62fe] shrink-0" />
                  <span>Native Content</span>
                </div>
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0f62fe] shrink-0" />
                  <span>Connected TV (CTV)</span>
                </div>
                <div className="p-2 bg-white border border-[#e0e0e0] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0f62fe] shrink-0" />
                  <span>B2B Video Media</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= PART 2: ENTERPRISE ROI & CATEGORY LEADERSHIP ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#a0beee]">
            <div>
              <span className="carbon-eyebrow block mb-1">
                Category leadership & outcomes
              </span>
              <h2 className="carbon-display-md text-[#161616]">
                Measurable performance across all core metrics
              </h2>
            </div>
            <p className="carbon-body-sm text-[#525252] max-w-md mt-2 md:mt-0">
              Deterministic targeting and multi-channel orchestration yield predictable conversion improvements.
            </p>
          </div>

          {/* 4 Impact Stat Tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e0e0e0] bg-white mb-10 shadow-sm">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`p-6 border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors ${
                  index % 2 === 0 ? 'border-r' : 'lg:border-r'
                } ${index < 2 ? 'border-b lg:border-b-0' : ''} ${index === 2 ? 'lg:border-r' : ''}`}
              >
                <div className="text-3xl lg:text-4xl font-light text-[#161616] tracking-tight mb-1">
                  {stat.metric}
                </div>
                <div className="text-xs font-semibold text-[#161616] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#525252]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index} 
                  className="carbon-feature-card flex flex-col justify-between group bg-white border border-[#e0e0e0] hover:border-[#161616] transition-colors"
                >
                  <div>
                    <div className="text-[11px] font-mono text-[#8c8c8c] mb-3">
                      {achievement.category}
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center text-[#0f62fe] shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-normal text-[#161616]">
                          {achievement.title}
                        </h3>
                        <p className="text-xs text-[#525252] leading-relaxed mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#e0e0e0] space-y-2 mt-4">
                    {achievement.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#525252]">
                        <Check className="w-3.5 h-3.5 text-[#0f62fe] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ABMLeadership;