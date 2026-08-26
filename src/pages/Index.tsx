import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustAndCapabilities from '@/components/TrustAndCapabilities';
import { WorldMapDemo } from '@/components/WorldMapDemo';
import InteractiveContentSyndication from '@/components/InteractiveContentSyndication';
import SolutionsOverview from '@/components/SolutionsOverview';
import ABMLeadership from '@/components/ABMLeadership';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TrustAndCapabilities />
        <InteractiveContentSyndication />
        <SolutionsOverview />
        <WorldMapDemo />
        <ABMLeadership />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
