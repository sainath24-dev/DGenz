
import { useState } from 'react';
import { Users, Building, Globe, TrendingUp, MapPin, BarChart3, Eye, Target } from 'lucide-react';

const AudienceReach = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const globalStats = [
    { label: 'Total Contacts', value: '148M', icon: Users, color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/20' },
    { label: 'Companies', value: '3.8M', icon: Building, color: 'text-success', bg: 'bg-success/5', border: 'border-success/20' },
    { label: 'Decision Makers', value: '122M', icon: TrendingUp, color: 'text-accent', bg: 'bg-accent/5', border: 'border-accent/20' },
    { label: 'Industry Verticals', value: '12+', icon: Globe, color: 'text-info', bg: 'bg-info/5', border: 'border-info/20' }
  ];

  const regionData = [
    { name: 'North America', percentage: 29, contacts: '43.0M', color: 'hsl(var(--primary))', gradient: 'from-primary to-primary-light', id: 'na' },
    { name: 'Asia', percentage: 22, contacts: '32.6M', color: 'hsl(var(--success))', gradient: 'from-success to-success', id: 'asia' },
    { name: 'Europe', percentage: 20, contacts: '29.6M', color: 'hsl(var(--warning))', gradient: 'from-warning to-warning', id: 'europe' },
    { name: 'Africa', percentage: 9, contacts: '13.3M', color: 'hsl(var(--destructive))', gradient: 'from-destructive to-destructive', id: 'africa' },
    { name: 'Oceania', percentage: 8, contacts: '11.8M', color: 'hsl(var(--accent))', gradient: 'from-accent to-accent-light', id: 'oceania' },
    { name: 'Middle East', percentage: 8, contacts: '11.8M', color: 'hsl(var(--info))', gradient: 'from-info to-info', id: 'middle-east' },
    { name: 'South America', percentage: 4, contacts: '5.9M', color: 'hsl(var(--primary-light))', gradient: 'from-primary-light to-primary', id: 'south-america' }
  ];

  const sectorData = [
    { industry: 'Manufacturing / Engineering', totalCompanies: '13.58M', cxoCount: '141K', decisionMakers: '7.55M', small: '9.01M', medium: '403K', midMarket: '94K', large: '39K' },
    { industry: 'Healthcare & Life Sciences', totalCompanies: '1.72M', cxoCount: '102K', decisionMakers: '1.60M', small: '4.02M', medium: '103K', midMarket: '18K', large: '10K' },
    { industry: 'Construction & Real Estate', totalCompanies: '578K', cxoCount: '87K', decisionMakers: '782K', small: '3.62M', medium: '142K', midMarket: '21K', large: '12K' },
    { industry: 'BFSI', totalCompanies: '552K', cxoCount: '94K', decisionMakers: '399K', small: '179K', medium: '47K', midMarket: '15K', large: '13K' },
    { industry: 'Metals and Mining', totalCompanies: '467K', cxoCount: '45K', decisionMakers: '282K', small: '409K', medium: '45K', midMarket: '7K', large: '6K' },
    { industry: 'Media & Entertainment', totalCompanies: '384K', cxoCount: '42K', decisionMakers: '366K', small: '1.41M', medium: '66K', midMarket: '10K', large: '3K' },
    { industry: 'IT Services & Technology', totalCompanies: '251K', cxoCount: '402K', decisionMakers: '538K', small: '1.56M', medium: '395K', midMarket: '96K', large: '58K' },
    { industry: 'Logistics and Transportation', totalCompanies: '171K', cxoCount: '48K', decisionMakers: '815K', small: '1.91M', medium: '146K', midMarket: '25K', large: '12K' },
    { industry: 'Hospitality', totalCompanies: '146K', cxoCount: '61K', decisionMakers: '646K', small: '3.61M', medium: '84K', midMarket: '11K', large: '6K' },
    { industry: 'Export Houses', totalCompanies: '99K', cxoCount: '29K', decisionMakers: '460K', small: '606K', medium: '56K', midMarket: '7K', large: '3K' },
    { industry: 'Industrial Chemicals', totalCompanies: '38K', cxoCount: '37K', decisionMakers: '183K', small: '508K', medium: '52K', midMarket: '7K', large: '4K' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Global <span className="text-primary">Audience Reach</span> & Data Intelligence
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Access 148M+ professionals across 12+ industry verticals worldwide with our comprehensive B2B database 
            and advanced targeting capabilities.
          </p>
        </div>

        {/* Enhanced Global Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {globalStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`${stat.bg} rounded-2xl p-6 border ${stat.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group bg-card`}>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-card rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border ${stat.border}`}>
                    <IconComponent className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Audience Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive World Map */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                Global Reach
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                Hover to explore
              </div>
            </div>
            
            {/* Enhanced Donut Chart */}
            <div className="relative h-96 flex items-center justify-center">
              <svg width="384" height="384" className="drop-shadow-lg">
                {/* Outer Ring */}
                <circle cx="192" cy="192" r="144" fill="none" stroke="#f1f5f9" strokeWidth="2" />
                
                {/* Donut Segments */}
                {regionData.map((region, index) => {
                  const startAngle = regionData.slice(0, index).reduce((sum, r) => sum + (r.percentage * 3.6), 0);
                  const endAngle = startAngle + (region.percentage * 3.6);
                  const largeArc = region.percentage > 50 ? 1 : 0;
                  
                  const x1 = 192 + 108 * Math.cos((startAngle - 90) * Math.PI / 180);
                  const y1 = 192 + 108 * Math.sin((startAngle - 90) * Math.PI / 180);
                  const x2 = 192 + 108 * Math.cos((endAngle - 90) * Math.PI / 180);
                  const y2 = 192 + 108 * Math.sin((endAngle - 90) * Math.PI / 180);
                  
                  const isHovered = hoveredRegion?.id === region.id;
                  
                  return (
                    <g key={region.id}>
                      <path
                        d={`M 192 192 L ${x1} ${y1} A 108 108 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={region.color}
                        className="cursor-pointer transition-all duration-300"
                        style={{
                          filter: isHovered ? 'brightness(1.1) drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          transformOrigin: '192px 192px'
                        }}
                        onMouseEnter={() => setHoveredRegion(region)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setActiveRegion(region)}
                      />
                      
                      {/* Region Labels */}
                      {region.percentage > 8 && (
                        <text
                          x={192 + 72 * Math.cos((startAngle + region.percentage * 1.8 - 90) * Math.PI / 180)}
                          y={192 + 72 * Math.sin((startAngle + region.percentage * 1.8 - 90) * Math.PI / 180)}
                          textAnchor="middle"
                          className="text-xs font-semibold fill-white pointer-events-none"
                        >
                          {region.percentage}%
                        </text>
                      )}
                    </g>
                  );
                })}
                
                {/* Enhanced Center */}
                <circle cx="192" cy="192" r="60" fill="url(#centerGradient)" className="drop-shadow-md" />
                <defs>
                  <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8fafc" />
                  </linearGradient>
                </defs>
                <text x="192" y="180" textAnchor="middle" className="text-xl font-bold fill-foreground">148M</text>
                <text x="192" y="200" textAnchor="middle" className="text-sm fill-muted-foreground">Contacts</text>
                <text x="192" y="216" textAnchor="middle" className="text-xs fill-muted-foreground">Worldwide</text>
              </svg>
              
              {/* Hover Tooltip */}
              {hoveredRegion && (
                <div className="absolute top-4 right-4 bg-card rounded-lg shadow-lg p-3 border border-border pointer-events-none">
                  <div className="font-semibold text-foreground">{hoveredRegion.name}</div>
                  <div className="text-sm text-muted-foreground">{hoveredRegion.contacts} contacts</div>
                  <div className="text-xs text-primary">{hoveredRegion.percentage}% of total</div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Regional List */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              Regional Insights
            </h3>
            
            <div className="space-y-3">
              {regionData.map((region) => (
                <div 
                  key={region.id} 
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeRegion?.id === region.id 
                      ? 'bg-card border-primary/30 shadow-md' 
                      : 'bg-card/80 border-border hover:bg-card hover:shadow-md'
                  }`}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setActiveRegion(region)}
                >
                  {/* Progress Bar Background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${region.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-10`}
                    style={{ width: `${region.percentage}%` }}
                  />
                  
                  <div className="relative p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${region.gradient} shadow-sm`}
                      />
                      <div>
                        <span className="font-semibold text-foreground text-lg">{region.name}</span>
                        <div className="text-sm text-muted-foreground">{region.contacts} contacts</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">{region.percentage}%</div>
                      <div className="text-xs text-muted-foreground">market share</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {activeRegion && (
              <div className={`mt-6 p-4 rounded-xl bg-gradient-to-r ${activeRegion.gradient} text-white`}>
                <h4 className="font-bold text-lg mb-1">{activeRegion.name} Spotlight</h4>
                <p className="text-white/90">
                  {activeRegion.percentage}% of our global reach with {activeRegion.contacts} verified contacts
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceReach;
