import { useNavigate } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import dgenzLogo from '@/assets/dgenz-media-logo.png';
import { GridScan } from '@/components/ui/GridScan';
import ContactForm from '@/components/ContactForm';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = {
    solutions: [
      { name: 'Content-Driven Lead Generation', href: '/solutions/content-driven-lead-generation' },
      { name: 'Full-Funnel Marketing & Nurturing', href: '/solutions/full-funnel-marketing-nurturing' },
      { name: 'Lead Generation Strategy', href: '/solutions/lead-generation-strategy' },
      { name: 'Outbound Lead Generation', href: '/solutions/outbound-lead-generation' },
      { name: 'Paid Advertising & PPC', href: '/solutions/paid-advertising-ppc' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Glossary', href: '/glossary' },
      { name: 'Resource Library', href: '/resources' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Press & News', href: '/press' }
    ],
    company: [
      { name: 'About Us', href: '/company/about' },
      { name: 'Why DGenz Media', href: '/company/why-dgenz' },
      { name: 'Our Data', href: '/company/our-data' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Trust Center', href: '/trust-center' }
    ],
    legal: [
      { name: 'Legal Center', href: '/legal' },
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Terms of Service', href: '/legal/terms-of-service' },
      { name: 'Do Not Sell My Personal Data', href: '/legal/do-not-sell' },
      { name: 'Cookie Policy', href: '/legal/cookie-policy' },
      { name: 'GDPR Policy', href: '/legal/gdpr-policy' }
    ]
  };

  return (
    <>
      {/* Master Interactive GridScan CTA Section */}
      <section className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 flex items-center justify-center py-20 px-4 border-t border-slate-200">
        
        {/* GridScan Background Component */}
        <div className="absolute inset-0 pointer-events-auto opacity-70">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#cbd5e1"
            gridScale={0.1}
            scanColor="#059669"
            scanOpacity={0.6}
            enablePost={false}
            noiseIntensity={0.01}
            scanOnClick={true}
          />
        </div>

        {/* Subtle Light Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80 pointer-events-none" />

        {/* Content Card */}
        <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-md bg-white/95 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-2xl text-slate-900">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Accelerate Growth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Ready to Experience the #1 Rated ABM Platform?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Transform your B2B marketing with intelligent targeting and data-driven insights. Join hundreds of enterprise brands who trust DGenz Media to drive scalable revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* High-Visibility Primary Button */}
            <ContactForm 
              type="demo"
              trigger={
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:scale-102 cursor-pointer">
                  <span>Schedule Live Demo</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              }
            />
            
            {/* High-Visibility Secondary Button */}
            <ContactForm 
              type="get-started"
              trigger={
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-xs cursor-pointer">
                  <span>Get Started Today</span>
                </button>
              }
            />
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-slate-950 text-slate-200 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-1">
              <img 
                src={dgenzLogo}
                alt="DGenz Media" 
                className="h-10 sm:h-12 w-auto mb-4 brightness-110"
              />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The leading B2B account-based marketing platform that unifies buyer intent data, multi-channel targeting, and pipeline acceleration.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">Solutions</h3>
              <ul className="space-y-2.5">
                {footerSections.solutions.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">Resources</h3>
              <ul className="space-y-2.5">
                {footerSections.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">Company</h3>
              <ul className="space-y-2.5">
                {footerSections.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">Legal & Privacy</h3>
              <ul className="space-y-2.5">
                {footerSections.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} DGenz Media Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <button onClick={() => handleLinkClick('/legal/privacy-policy')} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => handleLinkClick('/legal/terms-of-service')} className="hover:text-white transition-colors">
                Terms of Service
              </button>
              <button onClick={() => handleLinkClick('/legal/cookie-policy')} className="hover:text-white transition-colors">
                Cookie Settings
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;