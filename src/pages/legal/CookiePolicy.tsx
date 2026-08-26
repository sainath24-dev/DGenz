import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="heading-hero text-foreground mb-6">Cookie Policy</h1>
            <p className="text-large text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">What Are Cookies</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and to 
                provide information to website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">How We Use Cookies</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                DGenz Media uses cookies and similar tracking technologies to enhance your experience 
                on our website and services. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To provide personalized content and advertisements</li>
                <li>To improve our services and user experience</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium mb-4">Essential Cookies</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These cookies are necessary for the website to function and cannot be switched off. 
                They are usually set in response to actions made by you, such as setting your privacy 
                preferences, logging in, or filling in forms.
              </p>

              <h3 className="text-xl font-medium mb-4">Analytics Cookies</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously. We use services like Google Analytics to gather 
                this data.
              </p>

              <h3 className="text-xl font-medium mb-4">Functional Cookies</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These cookies enable enhanced functionality and personalization, such as remembering 
                your preferences, language settings, and providing personalized content.
              </p>

              <h3 className="text-xl font-medium mb-4">Marketing Cookies</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These cookies are used to deliver advertisements more relevant to you and your interests. 
                They may be set through our site by our advertising partners to build a profile of your 
                interests and show you relevant ads on other sites.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Third-Party Cookies</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may use third-party services that place cookies on your device. These include:
              </p>
              
              <h3 className="text-xl font-medium mb-4">Google Analytics</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We use Google Analytics to analyze website usage and improve our services. 
                Google Analytics uses cookies to collect information about how you use our website.
              </p>

              <h3 className="text-xl font-medium mb-4">Social Media Platforms</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our website may include social media features from platforms like LinkedIn, Twitter, 
                and Facebook. These features may collect information about your IP address and page visits.
              </p>

              <h3 className="text-xl font-medium mb-4">Advertising Partners</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We work with advertising partners who may place cookies to deliver targeted advertisements 
                based on your browsing behavior and interests.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium mb-4">Browser Settings</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete cookies when you close your browser</li>
              </ul>

              <h3 className="text-xl font-medium mb-4">Cookie Consent Banner</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                When you first visit our website, you'll see a cookie consent banner. You can manage 
                your preferences through this banner or update them at any time using our cookie 
                preference center.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Opt-Out Options</h2>
              
              <h3 className="text-xl font-medium mb-4">Google Analytics Opt-Out</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser 
                Add-on, available at: 
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline ml-1">
                  tools.google.com/dlpage/gaoptout
                </a>
              </p>

              <h3 className="text-xl font-medium mb-4">Advertising Opt-Out</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You can opt out of interest-based advertising by visiting:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Network Advertising Initiative: <a href="http://optout.networkadvertising.org" className="text-primary hover:underline">optout.networkadvertising.org</a></li>
                <li>Digital Advertising Alliance: <a href="http://optout.aboutads.info" className="text-primary hover:underline">optout.aboutads.info</a></li>
                <li>European Interactive Digital Advertising Alliance: <a href="http://youronlinechoices.eu" className="text-primary hover:underline">youronlinechoices.eu</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Impact of Disabling Cookies</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Please note that disabling cookies may affect the functionality of our website. 
                Some features may not work properly if cookies are disabled:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Login functionality may be impaired</li>
                <li>Personalized content may not be available</li>
                <li>Website preferences may not be saved</li>
                <li>Analytics data may not be collected</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Updates to This Policy</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or applicable laws. We will post the updated policy on our website and update the 
                "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-medium text-foreground mb-2">DGENZ MEDIA PVT. LTD.</p>
                <p className="text-muted-foreground mb-2">
                  Email: privacy@dgenzmedia.com
                </p>
                <p className="text-muted-foreground">
                  Address: 2nd Floor, 17-21, St Mark's Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;