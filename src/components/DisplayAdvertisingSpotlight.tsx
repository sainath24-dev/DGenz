import { Target, TrendingUp, BarChart3, ArrowRight, Eye, CheckCircle2, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import realMarketingPhoto from '@/assets/digital-marketing-hero.jpg';

export const DisplayAdvertisingSpotlight = () => {
  const features = [
    {
      icon: Target,
      title: 'Target the right accounts',
      description: 'Leverage intent data to ensure your message is reaching relevant, in-market audiences with precision.'
    },
    {
      icon: TrendingUp,
      title: 'Influence across the funnel',
      description: 'Drive continuous engagement with display ads supporting each stage, from awareness through final decision.'
    },
    {
      icon: BarChart3,
      title: 'Optimize for engagement',
      description: 'Use real-time metrics to refine placements and maximize your return on investment across named accounts.'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Messaging & Target Features (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Monitor className="h-3.5 w-3.5 text-slate-700" />
              <span>ABM Display Advertising</span>
            </div>
            
            {/* Title & Description */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Build the brand with <span className="text-emerald-700">targeted display ads</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Stay top of mind with display ads that capture the attention of key decision-makers across the digital landscape.
              </p>
            </div>

            {/* 3 Clean Bento Feature Cards (Clean Slate Colors) */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-800 shadow-2xs">
                        <Icon className="h-5 w-5 text-slate-700" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-2">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>View ABM Display Advertising</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>

          </div>

          {/* Right Column: Genuine Photo Showcase Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden p-4 sm:p-5">
              
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Targeted Media Placement
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  Tier 1 In-Market Accounts
                </span>
              </div>

              {/* Real High-Resolution Photography */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-200 mb-4">
                <img 
                  src={realMarketingPhoto} 
                  alt="Enterprise business team analyzing targeted display media campaigns" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Metric Pill */}
                <div className="absolute top-3 left-3 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-slate-700" />
                  <span className="text-xs font-bold text-slate-900">8.4x Engagement Lift</span>
                </div>
              </div>

              {/* Clean Multi-Format Badges */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Display Advertising</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Programmatic Native</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-700">Connected TV (CTV)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-700">B2B Video Media</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DisplayAdvertisingSpotlight;