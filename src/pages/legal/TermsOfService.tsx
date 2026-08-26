import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="heading-hero text-foreground mb-6">Terms of Service</h1>
            <p className="text-large text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">1. Acceptance of Terms</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                By accessing and using DGenz Media's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">2. Description of Service</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                DGenz Media provides account-based marketing (ABM) solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>AI-powered intent data and insights</li>
                <li>Content syndication services</li>
                <li>Display advertising campaigns</li>
                <li>Connected TV and audio advertising</li>
                <li>LinkedIn advertising management</li>
                <li>Measurement and analytics tools</li>
                <li>CRM and marketing automation integrations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">3. User Accounts and Registration</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                To access certain features of our services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">4. Acceptable Use Policy</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, threatening, abusive, or defamatory content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Use our services for any unlawful or fraudulent purposes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">5. Payment Terms</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our services are provided on a subscription or project basis. Payment terms include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Fees are due and payable according to the agreed payment schedule</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>Price changes will be communicated with advance notice</li>
                <li>Additional charges may apply for usage exceeding plan limits</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">6. Intellectual Property Rights</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services are owned by DGenz Media 
                and are protected by copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Copy, modify, or distribute our proprietary content</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Remove or alter any proprietary notices</li>
                <li>Use our trademarks without written permission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">7. Data and Privacy</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed 
                by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">8. Service Availability</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                While we strive to provide continuous service, we do not guarantee that our services will be 
                available at all times. We may suspend or discontinue services for maintenance, updates, 
                or other operational reasons.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">9. Limitation of Liability</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, DGenz Media shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to loss of 
                profits, data, or business opportunities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">10. Termination</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Your access to our services will cease immediately</li>
                <li>We may delete your account and associated data</li>
                <li>Outstanding fees remain due and payable</li>
                <li>Certain provisions of these Terms will survive termination</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">11. Changes to Terms</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material 
                changes. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">12. Contact Information</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-medium text-foreground mb-2">DGENZ MEDIA PVT. LTD.</p>
                <p className="text-muted-foreground mb-2">
                  Email: legal@dgenzmedia.com
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

export default TermsOfService;