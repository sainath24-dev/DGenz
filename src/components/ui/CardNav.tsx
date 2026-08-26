import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import KineticText from './kinetic-text';
import './CardNav.css';

export interface CardNavLink {
  label: string;
  href: string;
  ariaLabel?: string;
  external?: boolean;
}

export interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
}

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  logoHref?: string;
  brandName?: string;
  brandAccent?: string;
  items: CardNavItem[];
  className?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonText?: string;
  ctaElement?: React.ReactNode;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  logoHref = '/',
  brandName,
  brandAccent,
  items,
  className = '',
  baseColor = '#ffffff',
  menuColor = '#0f172a',
  buttonBgColor = '#0f172a',
  buttonTextColor = '#ffffff',
  buttonText = 'Get Started',
  ctaElement
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveItemIndex(null);
    setIsMobileMenuOpen(false);
    setExpandedMobileIndex(null);
  }, [location.pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveItemIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className={`card-nav-container ${className}`}>
      <nav className="card-nav" style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          
          {/* Left: Mobile Hamburger & Logo */}
          <div className="card-nav-left-group">
            <div
              className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }
              }}
              role="button"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              tabIndex={0}
              style={{ color: menuColor }}
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </div>

            <Link 
              to={logoHref} 
              className="logo-container"
              onClick={() => {
                setActiveItemIndex(null);
                setIsMobileMenuOpen(false);
              }}
            >
              <img src={logo} alt={logoAlt} className="card-nav-logo" />
              {(brandName || brandAccent) && (
                <div className="card-nav-brand">
                  {brandName && (
                    <KineticText 
                      text={brandName} 
                      as="span" 
                      className="brand-primary text-slate-900 font-bold" 
                    />
                  )}
                  {brandAccent && (
                    <KineticText 
                      text={brandAccent} 
                      as="span" 
                      className="brand-accent text-emerald-600 font-bold ml-1" 
                    />
                  )}
                  <span className="brand-underline" aria-hidden="true" />
                </div>
              )}
            </Link>
          </div>

          {/* Center: Desktop Navigation with Dedicated Separate Dropdowns */}
          <div className="card-nav-top-menu">
            {(items || []).map((item, idx) => {
              const isOpen = activeItemIndex === idx;

              return (
                <div
                  key={`nav-item-${item.label}-${idx}`}
                  className="card-nav-menu-item-wrapper"
                  onMouseEnter={() => setActiveItemIndex(idx)}
                  onMouseLeave={() => setActiveItemIndex(null)}
                >
                  <button
                    type="button"
                    className={`card-nav-top-menu-btn ${isOpen ? 'active' : ''}`}
                    onClick={() => setActiveItemIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`card-nav-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>

                  {/* Individual Separate Floating Dropdown Card */}
                  {isOpen && (
                    <div
                      className="nav-card-individual-dropdown animate-in fade-in slide-in-from-top-2 duration-150"
                      style={{ backgroundColor: item.bgColor, color: item.textColor }}
                    >
                      <div className="nav-card-label">{item.label}</div>
                      <div className="nav-card-links">
                        {item.links?.map((lnk, i) => {
                          const isExternal = lnk.external || lnk.href.startsWith('http');
                          if (isExternal) {
                            return (
                              <a
                                key={`${lnk.label}-${i}`}
                                className="nav-card-link"
                                href={lnk.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={lnk.ariaLabel || lnk.label}
                                onClick={() => setActiveItemIndex(null)}
                              >
                                <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                <span>{lnk.label}</span>
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={`${lnk.label}-${i}`}
                              className="nav-card-link"
                              to={lnk.href}
                              aria-label={lnk.ariaLabel || lnk.label}
                              onClick={() => setActiveItemIndex(null)}
                            >
                              <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                              <span>{lnk.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: CTA Button */}
          <div className="card-nav-cta-wrapper">
            {ctaElement ? (
              ctaElement
            ) : (
              <button
                type="button"
                className="card-nav-cta-button"
                style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Expandable Drawer */}
        {isMobileMenuOpen && (
          <div className="card-nav-mobile-dropdown animate-in slide-in-from-top duration-200">
            {(items || []).map((item, idx) => {
              const isExpanded = expandedMobileIndex === idx;

              return (
                <div 
                  key={`mobile-${item.label}-${idx}`}
                  className="card-nav-mobile-section"
                  style={{ backgroundColor: item.bgColor, color: item.textColor }}
                >
                  <button
                    type="button"
                    className="card-nav-mobile-header"
                    onClick={() => setExpandedMobileIndex(isExpanded ? null : idx)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`card-nav-chevron ${isExpanded ? 'rotate' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="nav-card-links mobile-links">
                      {item.links?.map((lnk, i) => (
                        <Link
                          key={`mobile-lnk-${lnk.label}-${i}`}
                          className="nav-card-link"
                          to={lnk.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                          <span>{lnk.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
};

export default CardNav;
