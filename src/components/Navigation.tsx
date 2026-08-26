import CardNav, { CardNavItem } from '@/components/ui/CardNav';
import ContactForm from '@/components/ContactForm';
import dgenzLogo from '@/assets/dgenz-media-logo.png';

const Navigation = () => {
  const items: CardNavItem[] = [
    {
      label: 'Solutions',
      bgColor: '#0f172a',
      textColor: '#ffffff',
      links: [
        { label: 'Lead Generation Strategy', href: '/solutions/lead-generation-strategy' },
        { label: 'Content-Driven Lead Gen', href: '/solutions/content-driven-lead-generation' },
        { label: 'Paid Advertising (PPC)', href: '/solutions/paid-advertising-ppc' },
        { label: 'Outbound Lead Gen', href: '/solutions/outbound-lead-generation' },
        { label: 'Full-Funnel Marketing', href: '/solutions/full-funnel-marketing-nurturing' }
      ]
    },
    {
      label: 'Company',
      bgColor: '#1e1b4b',
      textColor: '#ffffff',
      links: [
        { label: 'About Us', href: '/company/about' },
        { label: 'Why DGenz Media', href: '/company/why-dgenz' },
        { label: 'Our Data', href: '/company/our-data' },
        { label: 'Careers', href: '/company/careers' }
      ]
    },
    {
      label: 'Resources',
      bgColor: '#064e3b',
      textColor: '#ffffff',
      links: [
        { label: 'Resource Library', href: '/resource-library' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'Trust Center', href: '/trust-center' }
      ]
    }
  ];

  return (
    <CardNav
      logo={dgenzLogo}
      logoAlt="DGenz Media"
      logoHref="/"
      brandName="DGenz"
      brandAccent="Media"
      items={items}
      baseColor="#ffffff"
      menuColor="#0f172a"
      ctaElement={
        <ContactForm
          type="get-started"
          trigger={
            <button type="button" className="card-nav-cta-button">
              Get Started
            </button>
          }
        />
      }
    />
  );
};

export default Navigation;