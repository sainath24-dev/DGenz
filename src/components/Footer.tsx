import { useNavigate } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import dgenzLogo from '@/assets/dgenz-media-logo.png';
import ContactForm from '@/components/ContactForm';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = {
    solutions: [
      { name: 'Lead Generation Strategy', href: '/solutions/lead-generation-strategy' },
      { name: 'Content-Driven Lead Gen', href: '/solutions/content-driven-lead-generation' },
      { name: 'Paid Advertising (PPC)', href: '/solutions/paid-advertising-ppc' },
      { name: 'Outbound Lead Generation', href: '/solutions/outbound-lead-generation' },
      { name: 'Full-Funnel Marketing', href: '/solutions/full-funnel-marketing-nurturing' }
    ],
    resources: [
      { name: 'Resource Library', href: '/resource-library' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Glossary', href: '/glossary' },
      { name: 'Press & Media', href: '/press' }
    ],
    company: [
      { name: 'About Us', href: '/company/about' },
      { name: 'Why DGenz Media', href: '/company/why-dgenz' },
      { name: 'Our Data Quality', href: '/company/our-data' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Trust Center', href: '/trust-center' }
    ],
    legal: [
      { name: 'Legal Center', href: '/legal' },
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Terms of Service', href: '/legal/terms-of-service' },
      { name: 'Do Not Sell My Data', href: '/legal/do-not-sell' },
      { name: 'Cookie Policy', href: '/legal/cookie-policy' },
      { name: 'GDPR Compliance', href: '/legal/gdpr-policy' }
    ]
  };

  return (
    <>
      {/* ================= CARBON CTA BANNER (#0f62fe Blue Solid Banner) ================= */}
      <section className="bg-[#0f62fe] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-white/80 block mb-2 tracking-[0.32px]">
              NEXT STEP: CAMPAIGN DEPLOYMENT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
              Ready to accelerate your enterprise pipeline with deterministic intent?
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Connect with our revenue architects to evaluate your target account list against our 42M+ verified decision-maker graph.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <ContactForm 
              type="get-started"
              trigger={
                <button 
                  type="button" 
                  className="inline-flex items-center justify-between gap-4 bg-white text-[#0f62fe] hover:bg-[#f4f4f4] text-sm font-medium tracking-[0.16px] px-6 py-4 rounded-none cursor-pointer transition-colors"
                >
                  <span>Start your campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              }
            />

            <ContactForm 
              type="demo"
              trigger={
                <button 
                  type="button" 
                  className="inline-flex items-center justify-between gap-4 bg-[#002d9c] text-white hover:bg-[#0043ce] border border-transparent text-sm font-normal tracking-[0.16px] px-6 py-4 rounded-none cursor-pointer transition-colors"
                >
                  <span>Schedule consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              }
            />
          </div>
        </div>
      </section>

      {/* ================= CARBON FOOTER (#161616 Charcoal Inverse Canvas) ================= */}
      <footer className="bg-[#161616] text-[#c6c6c6] border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            
            {/* Company Info & Wordmark */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
              <img 
                src={dgenzLogo} 
                alt="DGenz Media" 
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-xs text-[#c6c6c6] leading-relaxed">
                Deterministic B2B demand generation and buyer intent platform delivering qualified pipeline for enterprise revenue teams.
              </p>

              {/* Office Address Tile */}
              <div className="border border-[#262626] bg-[#262626]/40 p-3 text-xs text-[#8c8c8c]">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#0f62fe] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium mb-0.5">Registered Office:</span>
                    <span>2nd Floor, 17-21, St Mark's Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex space-x-2 pt-2">
                <a 
                  href="#" 
                  className="w-8 h-8 border border-[#262626] bg-[#262626]/40 flex items-center justify-center text-[#c6c6c6] hover:text-white hover:border-[#525252] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 border border-[#262626] bg-[#262626]/40 flex items-center justify-center text-[#c6c6c6] hover:text-white hover:border-[#525252] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 border border-[#262626] bg-[#262626]/40 flex items-center justify-center text-[#c6c6c6] hover:text-white hover:border-[#525252] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
                Solutions
              </h3>
              <ul className="space-y-2.5">
                {footerSections.solutions.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-xs text-[#c6c6c6] hover:text-[#0f62fe] transition-colors text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
                Resources
              </h3>
              <ul className="space-y-2.5">
                {footerSections.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-xs text-[#c6c6c6] hover:text-[#0f62fe] transition-colors text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {footerSections.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-xs text-[#c6c6c6] hover:text-[#0f62fe] transition-colors text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
                Legal & Governance
              </h3>
              <ul className="space-y-2.5">
                {footerSections.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-xs text-[#c6c6c6] hover:text-[#0f62fe] transition-colors text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Utility Row */}
          <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8c8c8c]">
            <div>
              © {new Date().getFullYear()} DGENZ MEDIA PVT. LTD. All rights reserved. Built on Carbon Design System.
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => handleLinkClick('/legal/privacy-policy')} className="hover:text-white transition-colors cursor-pointer">
                Privacy
              </button>
              <button onClick={() => handleLinkClick('/legal/terms-of-service')} className="hover:text-white transition-colors cursor-pointer">
                Terms
              </button>
              <button onClick={() => handleLinkClick('/trust-center')} className="hover:text-white transition-colors cursor-pointer">
                Security & Compliance
              </button>
              <button onClick={() => handleLinkClick('/legal/cookie-policy')} className="hover:text-white transition-colors cursor-pointer">
                Cookie Preferences
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;