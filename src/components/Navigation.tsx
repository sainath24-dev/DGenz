import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Sparkles, 
  Target, 
  FileText, 
  Monitor, 
  PhoneCall, 
  Layers, 
  Building2, 
  Award, 
  Database, 
  Users, 
  BookOpen, 
  FileCheck2, 
  TrendingUp, 
  ShieldCheck, 
  Newspaper, 
  ArrowRight, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import ContactForm from './ContactForm';
import dgenzLogo from '@/assets/dgenz-media-logo.png';

interface NavItemChild {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

interface NavSection {
  label: string;
  href?: string;
  children: NavItemChild[];
  featured?: {
    tag: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
}

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll detection for slight header shadow adjustments
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMobileSection(null);
  }, [location.pathname]);

  // Click away listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navSections: NavSection[] = [
    {
      label: 'Solutions',
      children: [
        {
          title: 'Lead Generation Strategy',
          description: 'Identify high-intent accounts & buying committees with precision',
          href: '/solutions/lead-generation-strategy',
          icon: Target,
          badge: 'Popular'
        },
        {
          title: 'Content-Driven Lead Gen',
          description: 'Multi-channel content syndication & verified engagement',
          href: '/solutions/content-driven-lead-generation',
          icon: FileText
        },
        {
          title: 'Paid Advertising (PPC & ABM)',
          description: 'Programmatic display, native & CTV targeted at target accounts',
          href: '/solutions/paid-advertising-ppc',
          icon: Monitor
        },
        {
          title: 'Outbound Lead Generation',
          description: 'Multi-touch SDR outreach delivering sales-ready pipeline',
          href: '/solutions/outbound-lead-generation',
          icon: PhoneCall
        },
        {
          title: 'Full-Funnel Marketing',
          description: 'End-to-end account nurturing & pipeline acceleration engine',
          href: '/solutions/full-funnel-marketing-nurturing',
          icon: Layers
        }
      ],
      featured: {
        tag: 'ABM Growth Engine',
        title: 'Accelerate Enterprise Pipeline',
        description: 'See how top B2B teams drive 3.8x ROI with deterministic intent targeting.',
        cta: 'Explore All Solutions',
        href: '/solutions/lead-generation-strategy'
      }
    },
    {
      label: 'Company',
      children: [
        {
          title: 'About Us',
          description: 'Our mission, leadership team, and global enterprise footprint',
          href: '/company/about',
          icon: Building2
        },
        {
          title: 'Why DGenz Media',
          description: 'Enterprise differentiators, speed-to-market & guaranteed accuracy',
          href: '/company/why-dgenz',
          icon: Award,
          badge: '#1 Rated'
        },
        {
          title: 'Our Data',
          description: '415M+ verified decision-makers & real-time intent telemetry graph',
          href: '/company/our-data',
          icon: Database
        },
        {
          title: 'Careers',
          description: 'Join our high-velocity team building the future of B2B growth',
          href: '/company/careers',
          icon: Users,
          badge: 'Hiring'
        }
      ],
      featured: {
        tag: 'Data Accuracy',
        title: '99.2% Verification Standard',
        description: 'Zero third-party cookies needed. Multi-source machine telemetry guarantees delivery.',
        cta: 'Discover Our Data',
        href: '/company/our-data'
      }
    },
    {
      label: 'Resources',
      children: [
        {
          title: 'Resource Library',
          description: 'Comprehensive guides, research whitepapers & strategic playbooks',
          href: '/resource-library',
          icon: BookOpen
        },
        {
          title: 'Case Studies',
          description: 'Verified customer success stories & multi-million pipeline lift metrics',
          href: '/case-studies',
          icon: TrendingUp,
          badge: 'Proof'
        },
        {
          title: 'Blog & Insights',
          description: 'Latest trends, ABM tactical guides & revenue operations analysis',
          href: '/blog',
          icon: FileCheck2
        },
        {
          title: 'Trust Center',
          description: 'SOC 2 compliance, GDPR & CCPA privacy governance frameworks',
          href: '/trust-center',
          icon: ShieldCheck
        },
        {
          title: 'Press & Media',
          description: 'Company announcements, industry awards & press coverage',
          href: '/press',
          icon: Newspaper
        }
      ],
      featured: {
        tag: 'Featured Report',
        title: '2025 B2B Intent Playbook',
        description: 'Download the comprehensive guide to capturing active buying committees.',
        cta: 'Read Case Studies',
        href: '/case-studies'
      }
    }
  ];

  return (
    <header 
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="DGenz Media Home"
          >
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-slate-900 shadow-xs group-hover:scale-103 transition-transform">
              <img 
                src={dgenzLogo} 
                alt="DGenz Media Logo" 
                className="h-8 sm:h-9 w-auto object-contain brightness-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                DGenz<span className="text-emerald-600 font-bold ml-1">Media</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-600 uppercase mt-0.5">
                Demand & Intent Engine
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Bar with Direct Visible Items & Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Direct Link: Home */}
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/' 
                  ? 'text-emerald-700 bg-emerald-50/80 font-bold' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              Home
            </Link>

            {/* Dropdown Sections: Solutions, Company, Resources */}
            {navSections.map((section) => {
              const isOpen = activeDropdown === section.label;
              const hasActiveChild = section.children.some(child => location.pathname === child.href);

              return (
                <div 
                  key={section.label} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(section.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : section.label)}
                    aria-expanded={isOpen}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      isOpen || hasActiveChild
                        ? 'text-emerald-700 bg-emerald-50/80 font-bold'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                    }`}
                  >
                    <span>{section.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                      }`} 
                    />
                  </button>

                  {/* Mega-Dropdown Menu Floating Panel */}
                  {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] xl:w-[640px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-5 grid grid-cols-12 gap-5 backdrop-blur-xl">
                        
                        {/* Links Column (7 or 8 cols) */}
                        <div className="col-span-7 xl:col-span-7 space-y-1">
                          <div className="px-3 pb-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                              {section.label} Capabilities
                            </span>
                            <span className="text-[11px] font-medium text-emerald-700">
                              {section.children.length} Pages
                            </span>
                          </div>

                          {section.children.map((item) => {
                            const ItemIcon = item.icon;
                            const isCurrent = location.pathname === item.href;

                            return (
                              <Link
                                key={item.title}
                                to={item.href}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                                  isCurrent 
                                    ? 'bg-emerald-50 text-emerald-950' 
                                    : 'hover:bg-slate-50 text-slate-900'
                                }`}
                              >
                                <div className={`p-2 rounded-lg flex-shrink-0 transition-colors ${
                                  isCurrent 
                                    ? 'bg-emerald-600 text-white' 
                                    : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-600 group-hover:text-white'
                                }`}>
                                  <ItemIcon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                      {item.title}
                                    </span>
                                    {item.badge && (
                                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Featured Sidebar Promo Card (5 cols) */}
                        {section.featured && (
                          <div className="col-span-5 xl:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-5 rounded-xl border border-slate-800 shadow-md">
                            <div>
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                                <Sparkles className="w-3 h-3 text-emerald-400" />
                                <span>{section.featured.tag}</span>
                              </div>
                              <h4 className="font-bold text-sm text-white mb-2 leading-tight">
                                {section.featured.title}
                              </h4>
                              <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
                                {section.featured.description}
                              </p>
                            </div>

                            <Link
                              to={section.featured.href}
                              className="inline-flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                            >
                              <span>{section.featured.cta}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-white" />
                            </Link>
                          </div>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Link: Trust Center */}
            <Link
              to="/trust-center"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/trust-center' 
                  ? 'text-emerald-700 bg-emerald-50/80 font-bold' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              Trust Center
            </Link>

          </nav>

          {/* Right: Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ContactForm 
              type="general"
              trigger={
                <button 
                  type="button"
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              }
            />

            <ContactForm 
              type="demo"
              trigger={
                <button 
                  type="button"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-102 transition-all cursor-pointer"
                >
                  <span>Book Demo</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              }
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ContactForm 
              type="demo"
              trigger={
                <button 
                  type="button"
                  className="px-3.5 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs sm:hidden cursor-pointer"
                >
                  Demo
                </button>
              }
            />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="px-4 py-6 space-y-4">
            
            {/* Quick Home Link */}
            <Link
              to="/"
              className={`block px-4 py-3 rounded-xl font-bold text-sm ${
                location.pathname === '/' 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-slate-50 text-slate-900 border border-slate-200'
              }`}
            >
              Home
            </Link>

            {/* Expandable Sections (Solutions, Company, Resources) */}
            {navSections.map((section) => {
              const isExpanded = expandedMobileSection === section.label;

              return (
                <div key={section.label} className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setExpandedMobileSection(isExpanded ? null : section.label)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left font-bold text-sm text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span>{section.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-emerald-600' : ''
                      }`} 
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 space-y-1 bg-white border-t border-slate-100">
                      {section.children.map((item) => {
                        const ItemIcon = item.icon;
                        const isCurrent = location.pathname === item.href;

                        return (
                          <Link
                            key={item.title}
                            to={item.href}
                            className={`flex items-center gap-3 p-3 rounded-lg text-xs font-semibold transition-colors ${
                              isCurrent 
                                ? 'bg-emerald-50 text-emerald-800' 
                                : 'hover:bg-slate-50 text-slate-800'
                            }`}
                          >
                            <div className="p-1.5 rounded bg-slate-100 text-slate-700">
                              <ItemIcon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-bold">{item.title}</span>
                                {item.badge && (
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Trust Center */}
            <Link
              to="/trust-center"
              className={`block px-4 py-3 rounded-xl font-bold text-sm ${
                location.pathname === '/trust-center' 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-slate-50 text-slate-900 border border-slate-200'
              }`}
            >
              Trust Center
            </Link>

            {/* Action Buttons in Mobile Drawer */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <ContactForm 
                type="demo"
                trigger={
                  <button 
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    <span>Book Live Demo</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                }
              />

              <ContactForm 
                type="general"
                trigger={
                  <button 
                    type="button"
                    className="w-full flex items-center justify-center py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm border border-slate-200 transition-colors cursor-pointer"
                  >
                    Contact Strategy Pod
                  </button>
                }
              />
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;