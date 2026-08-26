import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Target, Globe } from 'lucide-react';
import ContactForm from './ContactForm';

const GlobalReachStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Number counter hook
  const useCounter = (endValue: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
      if (startAnimation) {
        const startTime = Date.now();
        const startValue = 0;
        
        const updateCount = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          
          setCount(Math.floor(startValue + (endValue - startValue) * easedProgress));
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };
        
        requestAnimationFrame(updateCount);
      }
    }, [startAnimation, endValue, duration]);

    useEffect(() => {
      if (isVisible) {
        setStartAnimation(true);
      }
    }, [isVisible]);

    return count;
  };

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industryData = [
    { vertical: 'BFSI', companies: 199734, professionals: 5072236 },
    { vertical: 'Manufacturing / Engineering', companies: 1952109, professionals: 8924940 },
    { vertical: 'Healthcare', companies: 186715, professionals: 1608234 },
    { vertical: 'Construction', companies: 386315, professionals: 2708064 },
    { vertical: 'Industrial Chemicals', companies: 66209, professionals: 613599 },
    { vertical: 'Logistics and Transportation', companies: 143405, professionals: 1029487 },
    { vertical: 'Metals and Mining', companies: 87216, professionals: 1342338 },
    { vertical: 'Export Houses', companies: 15799, professionals: 277764 },
    { vertical: 'IT Services', companies: 790734, professionals: 5151494 },
    { vertical: 'Hospitality', companies: 125976, professionals: 1315688 },
    { vertical: 'Media & Entertainment', companies: 163599, professionals: 2351438 },
    { vertical: 'Technology', companies: 177907, professionals: 13175848 }
  ];

  const totalCompanies = industryData.reduce((sum, item) => sum + item.companies, 0);
  const totalProfessionals = industryData.reduce((sum, item) => sum + item.professionals, 0);

  // Animated counters
  const companiesCount = useCounter(4.0, 2500);
  const professionalsCount = useCounter(43.0, 2500);
  const verticalsCount = useCounter(12, 1500);
  const countriesCount = useCounter(100, 2000);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-info/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Global Market <span className="text-primary">Coverage</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Comprehensive database spanning 12 key industry verticals with verified company and professional data
          </p>
        </div>

        {/* Overall Stats with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          <div className="text-center p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 animate-scale-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2 sm:mb-3">
              {companiesCount.toFixed(1)}M
            </div>
            <div className="text-sm sm:text-base font-medium text-muted-foreground">Total Companies</div>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl shadow-accent/10 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/30 transition-all duration-500 animate-scale-in delay-100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent mb-2 sm:mb-3">
              {professionalsCount.toFixed(1)}M
            </div>
            <div className="text-sm sm:text-base font-medium text-muted-foreground">Professionals</div>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl shadow-success/10 hover:shadow-2xl hover:shadow-success/20 hover:border-success/30 transition-all duration-500 animate-scale-in delay-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center shadow-lg">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-success" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-success to-success/80 bg-clip-text text-transparent mb-2 sm:mb-3">{verticalsCount}</div>
            <div className="text-sm sm:text-base font-medium text-muted-foreground">Industry Verticals</div>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl shadow-info/10 hover:shadow-2xl hover:shadow-info/20 hover:border-info/30 transition-all duration-500 animate-scale-in delay-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-info/20 to-info/10 flex items-center justify-center shadow-lg">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-info" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-info to-info/80 bg-clip-text text-transparent mb-2 sm:mb-3">{countriesCount}+</div>
            <div className="text-sm sm:text-base font-medium text-muted-foreground">Countries</div>
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-card border border-border rounded-2xl p-8 animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Industry Coverage Breakdown
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industryData.map((industry, index) => (
              <div key={index} className="p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-semibold text-foreground mb-3">{industry.vertical}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Companies:</span>
                    <span className="font-medium text-primary">{formatNumber(industry.companies)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Professionals:</span>
                    <span className="font-medium text-accent">{formatNumber(industry.professionals)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to tap into this vast network?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start targeting the right professionals in your industry with precision and drive real business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              type="demo" 
              trigger={
                <button className="btn-primary">
                  Explore Industry Data
                </button>
              }
            />
            <ContactForm 
              type="get-started"
              trigger={
                <button className="btn-outline">
                  Request Demo
                </button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachStats;