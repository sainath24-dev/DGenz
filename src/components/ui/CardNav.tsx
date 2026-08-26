import React, { useLayoutEffect, useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
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
  ease?: string;
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
  ease = 'power3.out',
  baseColor = '#ffffff',
  menuColor = '#0f172a',
  buttonBgColor = '#0f172a',
  buttonTextColor = '#ffffff',
  buttonText = 'Get Started',
  ctaElement
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 380;

    const contentEl = navEl.querySelector<HTMLElement>('.card-nav-content');
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      void contentEl.offsetHeight;

      const topBar = 60;
      const padding = 20;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      if (isMobile) {
        return topBar + contentHeight + padding;
      }
      return Math.max(340, topBar + contentHeight + padding);
    }
    return 360;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current.filter(Boolean), { y: 40, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.35,
      ease
    });

    tl.to(
      cardsRef.current.filter(Boolean),
      { y: 0, opacity: 1, duration: 0.3, ease, stagger: 0.06 },
      '-=0.15'
    );

    return tl;
  }, [calculateHeight, ease]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline, items]);

  const openMenu = (idx?: number) => {
    if (typeof idx === 'number') {
      setActiveItemIndex(idx);
    }
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    }
  };

  const closeMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setActiveItemIndex(null);
    setIsHamburgerOpen(false);
    tl.eventCallback('onReverseComplete', () => {
      setIsExpanded(false);
    });
    tl.reverse();
  };

  const toggleMenu = (idx?: number) => {
    if (!isExpanded) {
      openMenu(idx);
    } else {
      if (typeof idx === 'number' && activeItemIndex !== idx) {
        setActiveItemIndex(idx);
      } else {
        closeMenu();
      }
    }
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        if (isExpanded) {
          closeMenu();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded]);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[i] = el;
  };

  return (
    <div 
      className={`card-nav-container ${className}`}
      onMouseLeave={() => {
        if (isExpanded) {
          closeMenu();
        }
      }}
    >
      <nav 
        ref={navRef} 
        className={`card-nav ${isExpanded ? 'open' : ''}`} 
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top">
          <div className="card-nav-left-group">
            <div
              className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
              onClick={() => toggleMenu()}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleMenu();
                }
              }}
              role="button"
              aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              aria-expanded={isExpanded}
              tabIndex={0}
              style={{ color: menuColor }}
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </div>

            <Link to={logoHref} className="logo-container" onClick={closeMenu}>
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

          {/* Direct Visible Menu Items in Navbar */}
          <div className="card-nav-top-menu">
            {(items || []).slice(0, 3).map((item, idx) => (
              <button
                key={`top-nav-${item.label}-${idx}`}
                type="button"
                className={`card-nav-top-menu-btn ${
                  isExpanded && (activeItemIndex === null || activeItemIndex === idx) 
                    ? 'active' 
                    : ''
                }`}
                onClick={() => toggleMenu(idx)}
                onMouseEnter={() => openMenu(idx)}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

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

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className={`nav-card ${activeItemIndex === idx ? 'focused' : ''}`}
              ref={setCardRef(idx)}
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
                        onClick={closeMenu}
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
                      onClick={closeMenu}
                    >
                      <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                      <span>{lnk.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
