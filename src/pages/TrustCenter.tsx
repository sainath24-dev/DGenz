import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, ShieldCheck, Lock, FileText, Download } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ContactForm from '@/components/ContactForm';
import trustSecurity from '@/assets/trust-security.jpg';

const TrustCenter = () => {
  const certifications = [
    {
      badge: 'Certified',
      title: 'SOC 2 Type II Attestation',
      description: 'Annual third-party audit verifying our organizational security, availability, and confidential data controls.',
      proof: 'Annual independent CPA audit'
    },
    {
      badge: 'Compliant',
      title: 'GDPR & UK DPA Governance',
      description: 'Full adherence to European and UK data protection mandates with deterministic consent validation and DPO oversight.',
      proof: 'Lawful basis & DPO audited'
    },
    {
      badge: 'Compliant',
      title: 'CCPA / CPRA & US State Privacy',
      description: 'Comprehensive data subject rights workflows honoring opt-out preferences across California, Virginia, and Colorado.',
      proof: 'Automated DSR request portal'
    },
    {
      badge: 'Standardized',
      title: 'ISO / IEC 27001 Alignment',
      description: 'Information security management framework mapped to international standards for enterprise risk management.',
      proof: 'Continuous controls monitoring'
    }
  ];

  const securityPillars = [
    {
      title: 'End-to-End Cryptography',
      description: 'All customer data is encrypted at rest using AES-256 and in transit via TLS 1.3 with strict HSTS policies.',
      specs: [
        'AES-256 encryption at rest with automated KMS key rotation',
        'TLS 1.3 enforced for all web, API, and webhook traffic',
        'Zero cleartext credential or token storage in memory'
      ]
    },
    {
      title: 'Zero-Trust Access & Identity',
      description: 'Strict principle of least privilege access across our entire engineering, cloud, and operational environments.',
      specs: [
        'Mandatory multi-factor authentication (MFA) and hardware keys',
        'Granular role-based access control (RBAC) and audit logging',
        'Single Sign-On (SSO) integration with Okta, Azure AD, Google'
      ]
    },
    {
      title: '24/7 Threat Detection & SIEM',
      description: 'Continuous monitoring, vulnerability management, and rapid incident response protocols.',
      specs: [
        'Automated real-time anomaly detection and intrusion monitoring',
        'Quarterly external penetration tests and vulnerability scans',
        'Sub-30-minute critical incident response SLA'
      ]
    }
  ];

  const governancePractices = [
    {
      title: 'Deterministic Opt-In Sourcing',
      description: 'All intent data and publisher telemetry is collected strictly through vetted corporate networks with verified consent.'
    },
    {
      title: 'Automated Data Hygiene & Deletion',
      description: 'Stale records are automatically purged, and privacy erasure requests are honored across all systems within 48 hours.'
    },
    {
      title: 'Vendor & Supply Chain Audits',
      description: 'Rigorous third-party risk assessment before onboarding any infrastructure or SaaS tooling with mandatory DPAs.'
    },
    {
      title: '99.99% Availability & Disaster Recovery',
      description: 'Multi-region cloud architecture with continuous automated backups, geo-redundancy, and tested recovery failovers.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Lightfall WebGL Simulation */}
        <section className="relative min-h-[85vh] flex items-center bg-slate-50 py-20 lg:py-28 overflow-hidden text-[#161616] border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic LightPillar WebGL Simulation */}
          <div className="absolute inset-0 pointer-events-none opacity-85 overflow-hidden">
            <LightPillar
              topColor="#059669"
              bottomColor="#0284c7"
              intensity={1.2}
              rotationSpeed={0.4}
              interactive={true}
              mixBlendMode="normal"
              className="w-full h-full"
            />
          </div>

          {/* Soft Bottom Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 pointer-events-none z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-xs">
                  Security & Trust Center
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Enterprise-Grade Security <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    & Continuous Compliance
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Your corporate data integrity, confidentiality, and regulatory compliance are our utmost priority. Learn about our encryption standards, certifications, and security protocols.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <ContactForm 
                    type="general"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer">
                        <span>Request SOC 2 Report</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    }
                  />

                  <ContactForm 
                    type="demo"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer">
                        <span>Contact Security Officer</span>
                      </button>
                    }
                  />
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>SOC 2 Type II Independently Audited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Zero Data Leakage Architecture</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={trustSecurity} 
                      alt="DGenz Media enterprise trust and data security" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Security Certifications & Compliance (Clean White Cards) */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Certifications & Governance
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Enterprise Compliance Standards
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We adhere to rigorous industry benchmarks to guarantee your data is processed safely and ethically.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((item) => (
                <div 
                  key={item.title}
                  className="rounded-3xl bg-white border border-slate-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-5">
                      {item.badge}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item.proof}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: Data Protection Framework (Clean White Cards) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Defense in Depth
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Technical Security Architecture
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Multi-layered defenses safeguarding applications, APIs, database clusters, and cloud environments.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {securityPillars.map((pillar) => (
                <div 
                  key={pillar.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {pillar.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Privacy & Governance Principles (Clean White Cards) */}
        <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Operational Integrity
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Privacy Governance Protocols
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Deterministic safeguards ensuring privacy-first data sourcing, storage, and processing.
              </p>
            </div>

            {/* Governance Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {governancePractices.map((practice) => (
                <div 
                  key={practice.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                    {practice.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Security FAQ & Audit Request CTA (Clean White) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Need Our Full Security Package or Vendor Assessment?
              </h2>
              <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
                Our security architecture team is available to complete your vendor questionnaires, provide third-party audit reports, and discuss data protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Request Security Package</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <a 
                  href="mailto:security@dgenzmedia.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer"
                >
                  <span>Email Security Office</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrustCenter;