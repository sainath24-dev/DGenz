import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Cookie, FileText } from 'lucide-react';

const Legal = () => {
  const legalPages = [
    {
      title: 'Privacy Policy',
      description: 'Learn how we collect, use, and protect your personal information',
      href: '/legal/privacy-policy',
      icon: Lock,
      lastUpdated: 'Updated monthly'
    },
    {
      title: 'Terms of Service',
      description: 'Terms and conditions for using our ABM platform and services',
      href: '/legal/terms-of-service',
      icon: FileText,
      lastUpdated: 'Updated quarterly'
    },
    {
      title: 'Do Not Sell My Personal Data',
      description: 'Exercise your CCPA rights and control how your data is shared',
      href: '/legal/do-not-sell',
      icon: Shield,
      lastUpdated: 'CCPA Compliance'
    },
    {
      title: 'Cookie Policy',
      description: 'Information about cookies and tracking technologies we use',
      href: '/legal/cookie-policy',
      icon: Cookie,
      lastUpdated: 'Updated regularly'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero text-foreground mb-6">Legal Center</h1>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Your privacy and legal rights matter to us. Find all our legal documents, 
              policies, and compliance information in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {legalPages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Link key={page.title} to={page.href} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border border-border bg-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                            {page.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{page.lastUpdated}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {page.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="bg-muted rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Transparency Commitment</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              At DGenz Media, we believe in complete transparency about how we handle your data 
              and conduct our business. All our legal documents are written in clear, understandable language.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Regular Updates</h3>
                <p className="text-sm text-muted-foreground">
                  We review and update our policies regularly to ensure compliance with latest regulations
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Clear Language</h3>
                <p className="text-sm text-muted-foreground">
                  Our legal documents are written to be understood by everyone, not just lawyers
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Your Rights</h3>
                <p className="text-sm text-muted-foreground">
                  We respect your privacy rights and make it easy to exercise them
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Questions or Concerns?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you have any questions about our legal policies or need assistance with your privacy rights, 
              our legal team is here to help.
            </p>
            <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto">
              <p className="font-medium text-foreground mb-2">Legal Department</p>
              <p className="text-muted-foreground mb-2">
                Email: <a href="mailto:legal@dgenzmedia.com" className="text-primary hover:underline">legal@dgenzmedia.com</a>
              </p>
              <p className="text-muted-foreground mb-2">
                Privacy: <a href="mailto:privacy@dgenzmedia.com" className="text-primary hover:underline">privacy@dgenzmedia.com</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Response time: 1-2 business days
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;