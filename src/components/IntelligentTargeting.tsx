import { Brain, Target, Users, Zap, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IntelligentTargeting = () => {
  const channels = [
    'ABM Content Syndication',
    'ABM Connected TV', 
    'ABM Display Advertising',
    'ABM Audio Advertising',
    'ABM Social Advertising with LinkedIn Ads'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Intelligent targeting and activation<br />that engages your highest-value accounts
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Leverage AI to identify and prioritize your highest-value accounts, then orchestrate targeted campaigns 
            across the channels where they engage most. You'll reach entire buying committees with precision messaging 
            that drives meaningful engagement and accelerates pipeline velocity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">AI-Powered Account Identification</h3>
                <p className="text-muted-foreground">Identify and prioritize your highest-value accounts using advanced AI and intent data.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Multi-Channel Orchestration</h3>
                <p className="text-muted-foreground">Coordinate campaigns across all channels where your accounts engage most effectively.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Buying Committee Engagement</h3>
                <p className="text-muted-foreground">Reach entire buying committees with precision messaging tailored to each stakeholder.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-foreground mb-4">Engage across every channel</h3>
            <div className="space-y-3">
              {channels.map((channel, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground font-medium">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentTargeting;