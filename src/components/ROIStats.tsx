import { TrendingUp, DollarSign, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ROIStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '32%',
      label: 'lift in engagement',
      description: 'Higher engagement rates across all touchpoints'
    },
    {
      icon: DollarSign,
      value: '17%',
      label: 'increase in pipeline',
      description: 'More qualified opportunities generated'
    },
    {
      icon: Zap,
      value: '28%',
      label: 'faster pipeline velocity',
      description: 'Accelerated deal progression and closure'
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            The fastest path to revenue
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            From awareness to engagement to conversion, the best ABM strategies unify buying journeys 
            across all media channels to amplify growth. See the impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-primary mb-2">{stat.label}</div>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary" onClick={() => window.open('mailto:info@dgenzmedia.com?subject=Demo Request for DGenz Media', '_blank')}>
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ROIStats;