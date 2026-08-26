import { useMemo } from 'react';
import { Target, TrendingUp, BarChart3, Users, CheckCircle2, Monitor, ArrowRight, Award, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hyperspeed } from '@/components/ui/Hyperspeed';
import realMarketingPhoto from '@/assets/digital-marketing-hero.jpg';

export const ABMLeadership = () => {
  const hyperspeedOptions = useMemo(() => ({
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 16,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 140,
    speedUp: 1.8,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 28,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5] as [number, number],
    lightStickHeight: [1.3, 1.7] as [number, number],
    movingAwaySpeed: [60, 80] as [number, number],
    movingCloserSpeed: [-120, -160] as [number, number],
    carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
    carLightsRadius: [0.05, 0.14] as [number, number],
    carWidthPercentage: [0.3, 0.5] as [number, number],
    carShiftX: [-0.6, 0.6] as [number, number],
    carFloorSeparation: [0, 4] as [number, number],
    colors: {
      roadColor: 0xf8fafc,
      islandColor: 0xf1f5f9,
      background: 0xffffff,
      shoulderLines: 0x059669,
      brokenLines: 0x0284c7,
      leftCars: [0x059669, 0x10b981, 0x34d399],
      rightCars: [0x0284c7, 0x6366f1, 0x818cf8],
      sticks: 0x059669
    }
  }), []);

  const adFeatures = [
    {
      icon: Target,
      title: 'Target the right accounts',
      description: 'Leverage intent data to ensure your message is reaching relevant, in-market audiences.'
    },
    {
      icon: TrendingUp,
      title: 'Influence across the funnel',
      description: 'Drive continuous engagement with display ads supporting each stage, from awareness through decision.'
    },
    {
      icon: BarChart3,
      title: 'Optimize for engagement',
      description: 'Use real-time metrics to refine placements and maximize your return on investment across accounts.'
    }
  ];

  const stats = [
    { metric: '350%', label: 'Average ROI Increase', description: 'Higher returns on marketing investment' },
    { metric: '85%', label: 'Lead Quality Score', description: 'Better qualified prospects' },
    { metric: '4.2x', label: 'Conversion Rate', description: 'Faster sales cycles' },
    { metric: '100+', label: 'Enterprise Clients', description: 'Trusted by industry leaders' }
  ];

  const achievements = [
    {
      icon: Target,
      title: '#1 Buyer Intent Data',
      description: 'Ensure your ads reach the right decision-makers at the right time with market-leading intent data.',
      category: 'Marketing Account Intelligence',
      benefits: ['Real-time intent signals', '95% accuracy rate', '360° prospect view']
    },
    {
      icon: TrendingUp,
      title: '#1 ABM Advertising', 
      description: 'Engage buying groups with personalized ads tailored to their needs at every stage on their trusted channels.',
      category: 'Account-Based Advertising',
      benefits: ['Multi-channel reach', 'Personalized messaging', '3x higher engagement']
    },
    {
      icon: BarChart3,
      title: '#1 ABM Data Analytics',
      description: 'Access cross-channel insights to measure impact on pipeline and revenue, and refine strategies to maximize ROI.',
      category: 'Account-Based Analytics',
      benefits: ['Pipeline attribution', 'ROI optimization', 'Predictive insights']
    },
    {
      icon: Users,
      title: '#1 Client Support',
      description: 'Collaborate closely with best-in-class experts to innovate ABM strategies and accelerate conversion.',
      category: 'Account-Based Orchestration Platforms',
      benefits: ['Dedicated success team', '24/7 support', 'Strategic guidance']
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 overflow-hidden border-b border-slate-200">
      
      {/* Shared Hyperspeed Background Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* Light Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ================= PART 1: ABM DISPLAY ADVERTISING SPOTLIGHT ================= */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Original Crisp White Card */}
          <div className="lg:col-span-7 space-y-6 bg-white p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl text-slate-900">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Monitor className="h-3.5 w-3.5 text-slate-700" />
              <span>ABM Display Advertising</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Build the brand with <span className="text-emerald-700">targeted display ads</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Stay top of mind with display ads that capture the attention of key decision-makers across the digital landscape.
            </p>

            {/* 3 Bento Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {adFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-2.5 sm:mb-3 text-slate-800 shadow-2xs">
                        <Icon className="w-4 h-4 text-slate-700" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>View ABM Display Advertising</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Original Crisp White Media Card */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xl text-slate-900">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Targeted Media Placement
              </span>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                Tier 1 In-Market Accounts
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 mb-4">
              <img 
                src={realMarketingPhoto} 
                alt="Enterprise business team analyzing targeted display media campaigns" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-slate-700" />
                <span className="text-xs font-bold text-slate-900">8.4x Engagement Lift</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Display Advertising</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Programmatic Native</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Connected TV (CTV)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">B2B Video Media</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= PART 2: INDUSTRY RECOGNITION & ABM LEADERSHIP ================= */}
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-slate-700" />
              <span>Industry Recognition</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              Leading the Future of <span className="text-emerald-700">Account-Based Marketing</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Recognized as the #1 platform across multiple ABM categories, delivering exceptional results for enterprise clients worldwide.
            </p>
          </div>

          {/* 4 Impact Stats Cards (Original Crisp White Cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-md text-slate-900"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-1.5">
                  {stat.metric}
                </div>
                <div className="font-bold text-slate-800 text-sm sm:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Achievements Cards (Original Crisp White Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index} 
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl text-slate-900 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      {achievement.category}
                    </div>

                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 space-y-2 mt-4">
                    {achievement.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700">{benefit}</span>
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