import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="heading-hero text-foreground mb-6">Privacy Policy</h1>
            <p className="text-large text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">1. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-4">Personal Information</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Name, email address, phone number, and company information</li>
                <li>Account credentials and profile information</li>
                <li>Communication preferences and marketing consent</li>
                <li>Payment and billing information for our services</li>
              </ul>

              <h3 className="text-xl font-medium mb-4">Usage Information</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We automatically collect information about how you use our services, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Device information, IP address, and browser type</li>
                <li>Pages visited, time spent on pages, and click patterns</li>
                <li>Referral sources and search terms</li>
                <li>Campaign performance and engagement metrics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">2. How We Use Your Information</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send marketing communications with your consent</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">3. Information Sharing and Disclosure</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may share your information in the following situations:
              </p>
              
              <h3 className="text-xl font-medium mb-4">Service Providers</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may share your information with third-party service providers who perform services on our behalf, 
                including payment processing, data analysis, email delivery, hosting services, and customer service.
              </p>

              <h3 className="text-xl font-medium mb-4">Business Transfers</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may share or transfer your information in connection with, or during negotiations of, 
                any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
              </p>

              <h3 className="text-xl font-medium mb-4">Legal Requirements</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may disclose your information if required to do so by law or in response to valid requests 
                by public authorities, such as a court or government agency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">4. Data Security</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">5. Your Rights and Choices</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Access to the personal information we hold about you</li>
                <li>Correction of inaccurate personal information</li>
                <li>Deletion of your personal information</li>
                <li>Portability of your personal information</li>
                <li>Restriction of processing your personal information</li>
                <li>Objection to processing your personal information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">6. Cookies and Tracking Technologies</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to collect and track information about your 
                use of our services. You can control cookies through your browser settings, but disabling 
                certain cookies may affect the functionality of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">7. International Data Transfers</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We implement appropriate safeguards to ensure your personal information receives adequate protection.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">8. Changes to This Privacy Policy</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">9. Contact Us</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
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

export default PrivacyPolicy;