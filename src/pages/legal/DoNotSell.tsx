import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const DoNotSell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="heading-hero text-foreground mb-6">Do Not Sell My Personal Data</h1>
            <p className="text-large text-muted-foreground">
              Your privacy rights under the California Consumer Privacy Act (CCPA)
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Your Rights Under CCPA</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Under the California Consumer Privacy Act (CCPA), California residents have the right to 
                request that businesses not sell their personal information. DGenz Media respects 
                your privacy rights and provides this mechanism to exercise your "Do Not Sell" rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">What Constitutes a "Sale"</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Under CCPA, "sale" is broadly defined and includes sharing personal information with 
                third parties for monetary or other valuable consideration. This may include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Sharing data with advertising partners for targeted advertising</li>
                <li>Providing customer information to marketing service providers</li>
                <li>Data sharing arrangements that provide business value</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                DGenz Media is committed to protecting your privacy. We want you to know:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>We do not sell personal information of consumers we know are under 16 years old</li>
                <li>We provide clear opt-out mechanisms for data sales</li>
                <li>We will not discriminate against you for exercising your CCPA rights</li>
                <li>We maintain reasonable security measures to protect your personal information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">How to Exercise Your Rights</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                To request that we not sell your personal information, you can:
              </p>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-4">Submit a Request</h3>
                <p className="text-muted-foreground mb-4">
                  Click the button below to submit a "Do Not Sell My Personal Information" request:
                </p>
                <Button 
                  className="btn-accent"
                  onClick={() => window.open('mailto:privacy@dgenzmedia.com?subject=Do Not Sell My Personal Information Request', '_blank')}
                >
                  Submit Do Not Sell Request
                </Button>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-4">Contact Us Directly</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> privacy@dgenzmedia.com
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Subject Line:</strong> "Do Not Sell My Personal Information"
                </p>
                <p className="text-muted-foreground">
                  <strong>Phone:</strong> Include your contact information in your email for verification
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Information We May Need</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                To process your request, we may need the following information to verify your identity:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Full name and email address</li>
                <li>Company name (if applicable)</li>
                <li>Phone number</li>
                <li>Description of your relationship with DGenz Media</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Response Timeline</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We will acknowledge receipt of your request within 10 business days and provide a 
                substantive response within 45 days. If we need additional time, we will inform you 
                of the reason and extension period in writing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Verification Process</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                To protect your privacy, we must verify your identity before processing your request. 
                We may ask for additional information or documentation to confirm you are the person 
                making the request.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">No Discrimination</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We will not discriminate against you for exercising your CCPA rights. We will not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Deny you goods or services</li>
                <li>Charge you different prices or rates</li>
                <li>Provide you a different level or quality of goods or services</li>
                <li>Suggest that you may receive different pricing or quality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Questions or Concerns</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If you have questions about this policy or need assistance with your request:
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

export default DoNotSell;