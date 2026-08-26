import { TrendingUp, DollarSign, Target, Users, ArrowUp, BarChart3 } from 'lucide-react';
import roiMeasurement from '@/assets/roi-measurement.jpg';

const EnhancedROIStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "387%",
      label: "Average ROI Increase",
      description: "Compared to traditional marketing approaches",
      color: "text-success"
    },
    {
      icon: DollarSign,
      value: "$4.8M",
      label: "Average Pipeline Generated",
      description: "Per customer in first 12 months",
      color: "text-primary"
    },
    {
      icon: Target,
      value: "73%",
      label: "Higher Conversion Rate",
      description: "From target accounts vs. cold outreach",
      color: "text-accent"
    },
    {
      icon: Users,
      value: "5.2x",
      label: "More Engaged Accounts",
      description: "Across the entire buying committee",
      color: "text-info"
    }
  ];

  const customerResults = [
    {
      company: "TechCorp Solutions",
      industry: "Software",
      pipeline: "$12.3M",
      roi: "520%",
      timeframe: "18 months"
    },
    {
      company: "Global Manufacturing Inc",
      industry: "Manufacturing",
      pipeline: "$8.7M",
      roi: "340%",
      timeframe: "12 months"
    },
    {
      company: "Financial Services Pro",
      industry: "FinTech",
      pipeline: "$15.2M",
      roi: "680%",
      timeframe: "24 months"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ROI Measurement Visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Transparent ROI measurement you can <span className="text-primary">trust</span>
            </h3>
            <p className="text-muted-foreground">
              Our closed-loop attribution model tracks every touchpoint from first engagement 
              to closed deal, giving you complete visibility into campaign performance and ROI.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-medium text-foreground">Multi-touch attribution across all channels</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium text-foreground">Real-time pipeline and revenue tracking</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium text-foreground">Account-level journey mapping</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <div className="w-2 h-2 bg-info rounded-full"></div>
                <span className="font-medium text-foreground">Executive-ready reporting and dashboards</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={roiMeasurement} 
              alt="ROI measurement dashboard showing attribution analytics and performance metrics"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2">
              <ArrowUp className="w-4 h-4" />
              Live Attribution
            </div>
          </div>
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to achieve similar results?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join hundreds of B2B companies already driving measurable growth with DGenz Media
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent">
              Get Your ROI Forecast
            </button>
            <button className="btn-outline">
              View More Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedROIStats;