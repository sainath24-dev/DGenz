import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Search, Menu, X, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import dgenzLogo from '@/assets/dgenz-media-logo.png';

interface NavItem {
  label: string;
  href?: string;
  children?: {
    title: string;
    description: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  {
    label: 'Solutions',
    children: [
      {
        title: 'Lead Generation Strategy',
        description: 'ICP development, full sales funnel mapping, and TAM discovery.',
        href: '/solutions/lead-generation-strategy'
      },
      {
        title: 'Content-Driven Lead Gen',
        description: 'Enterprise content syndication and gated whitepaper distribution.',
        href: '/solutions/content-driven-lead-generation'
      },
      {
        title: 'Paid Advertising (PPC)',
        description: 'Precision ABM ad targeting across LinkedIn and high-intent search.',
        href: '/solutions/paid-advertising-ppc'
      },
      {
        title: 'Outbound Lead Generation',
        description: 'High-touch multi-channel cadences with deterministic verification.',
        href: '/solutions/outbound-lead-generation'
      },
      {
        title: 'Full-Funnel Marketing & Nurturing',
        description: 'Multi-touch pipeline acceleration and continuous account scoring.',
        href: '/solutions/full-funnel-marketing-nurturing'
      }
    ]
  },
  {
    label: 'Company',
    children: [
      {
        title: 'About Us',
        description: 'Our mission to modernize B2B enterprise demand generation.',
        href: '/company/about'
      },
      {
        title: 'Why DGenz Media',
        description: 'Deterministic intent intelligence vs. traditional probabilistic data.',
        href: '/company/why-dgenz'
      },
      {
        title: 'Our Data Quality',
        description: 'Triple-verified telemetry across 42M+ global business decision makers.',
        href: '/company/our-data'
      },
      {
        title: 'Careers',
        description: 'Join our team of revenue architects and data engineers.',
        href: '/company/careers'
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        title: 'Resource Library',
        description: 'Guides, research benchmarks, and demand gen playbooks.',
        href: '/resource-library'
      },
      {
        title: 'Case Studies',
        description: 'Real pipeline outcomes from enterprise ABM implementations.',
        href: '/case-studies'
      },
      {
        title: 'Blog & Insights',
        description: 'Analysis on B2B intent algorithms and buyer group dynamics.',
        href: '/blog'
      },
      {
        title: 'Trust Center',
        description: 'SOC2, GDPR, CCPA compliance and enterprise data governance.',
        href: '/trust-center'
      }
    ]
  }
];

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* 1. Carbon Utility Bar (32px height, #f4f4f4 surface, caption typography) */}
      <div className="hidden md:flex h-8 bg-[#f4f4f4] border-b border-[#e0e0e0] px-4 lg:px-8 items-center justify-between text-xs text-[#525252] font-normal tracking-[0.32px]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#525252]">
            <Globe className="w-3.5 h-3.5 text-[#525252]" />
            Global / English
          </span>
          <span className="text-[#8c8c8c]">|</span>
          <span className="text-[#525252]">Enterprise Intent Intelligence Platform</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/trust-center" className="hover:text-[#161616] transition-colors">
            Trust & Compliance
          </Link>
          <ContactForm 
            type="demo"
            trigger={
              <button type="button" className="hover:text-[#161616] transition-colors cursor-pointer">
                Contact Sales
              </button>
            }
          />
          <Link to="/legal" className="hover:text-[#161616] transition-colors">
            Legal
          </Link>
        </div>
      </div>

      {/* 2. Carbon Top Nav (48px height, #ffffff canvas, 1px bottom border #e0e0e0) */}
      <div className="h-14 md:h-12 bg-white border-b border-[#e0e0e0] px-4 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 py-1">
            <img 
              src={dgenzLogo} 
              alt="DGenz Media" 
              className="h-7 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center h-12">
            {navItems.map((item) => {
              const isOpen = activeDropdown === item.label;
              return (
                <div 
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`h-full px-4 inline-flex items-center gap-1.5 text-sm font-normal tracking-[0.16px] transition-colors cursor-pointer border-b-2 ${
                      isOpen 
                        ? 'text-[#0f62fe] border-b-[#0f62fe] bg-[#f4f4f4]' 
                        : 'text-[#161616] border-b-transparent hover:text-[#0f62fe] hover:bg-[#f4f4f4]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0f62fe]' : 'text-[#525252]'}`} />
                  </button>

                  {/* Mega Dropdown Panel */}
                  {isOpen && item.children && (
                    <div 
                      className="absolute top-12 left-0 w-[520px] bg-white border border-[#e0e0e0] p-4 grid grid-cols-1 gap-1 z-50 animate-in fade-in-0 slide-in-from-top-1 duration-150 rounded-none"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="group p-3 hover:bg-[#f4f4f4] transition-colors border-l-2 border-transparent hover:border-l-[#0f62fe] flex flex-col gap-0.5"
                        >
                          <div className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe] transition-colors flex items-center justify-between">
                            <span>{child.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0f62fe]" />
                          </div>
                          <p className="text-xs text-[#525252] leading-relaxed font-normal">
                            {child.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <ContactForm 
            type="get-started"
            trigger={
              <button 
                type="button" 
                className="carbon-btn-primary h-9 md:h-10 px-4 py-2 text-xs md:text-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            }
          />

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#161616] hover:bg-[#f4f4f4] transition-colors cursor-pointer border border-[#e0e0e0]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 bottom-0 bg-white border-b border-[#e0e0e0] z-40 overflow-y-auto p-4 flex flex-col justify-between">
          <div className="space-y-6">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-[#e0e0e0] pb-4">
                <div className="text-xs font-semibold text-[#8c8c8c] uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="space-y-2">
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-[#161616] hover:text-[#0f62fe] transition-colors"
                    >
                      <div className="font-medium">{child.title}</div>
                      <div className="text-xs text-[#525252] mt-0.5">{child.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#e0e0e0] space-y-3">
            <ContactForm
              type="get-started"
              trigger={
                <button type="button" className="w-full carbon-btn-primary justify-center">
                  <span>Start Your Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              }
            />
            <ContactForm
              type="demo"
              trigger={
                <button type="button" className="w-full carbon-btn-tertiary justify-center">
                  <span>Schedule Consultation</span>
                </button>
              }
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;