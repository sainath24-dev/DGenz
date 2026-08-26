import { Building, Heart, DollarSign, Cog, Monitor, ShoppingCart, Users, Zap } from 'lucide-react';

const IndustrySection = () => {
  const industries = [
    { icon: Building, name: 'Telecommunications' },
    { icon: Heart, name: 'Healthcare' },
    { icon: DollarSign, name: 'Financial services' },
    { icon: Cog, name: 'Manufacturing' },
    { icon: Monitor, name: 'Enterprise technology' },
    { icon: ShoppingCart, name: 'Retail & Ecommerce' },
    { icon: Users, name: 'Human resources technology & services' },
    { icon: Zap, name: 'Energy' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Smarter ABM for every industry
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            B2B marketers worldwide trust Madison Logic to tackle challenges and seize opportunities 
            across 129 industries to drive growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-lg bg-background border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground text-sm leading-relaxed group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">129 industries</span> served worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;