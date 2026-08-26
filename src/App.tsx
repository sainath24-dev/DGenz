import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LeadGenerationStrategy from "./pages/solutions/LeadGenerationStrategy";
import ContentDrivenLeadGeneration from "./pages/solutions/ContentDrivenLeadGeneration";
import PaidAdvertisingPPC from "./pages/solutions/PaidAdvertisingPPC";
import OutboundLeadGeneration from "./pages/solutions/OutboundLeadGeneration";
import FullFunnelMarketingNurturing from "./pages/solutions/FullFunnelMarketingNurturing";
import Blog from "./pages/resources/Blog";
import Glossary from "./pages/resources/Glossary";
import ResourceLibrary from "./pages/resources/ResourceLibrary";
import CaseStudies from "./pages/resources/CaseStudies";
import Press from "./pages/resources/Press";
import Resources from "./pages/Resources";
import About from "./pages/company/About";
import WhyDGenz from "./pages/company/WhyDGenz";
import OurData from "./pages/company/OurData";

import Careers from "./pages/company/Careers";
import TrustCenter from "./pages/TrustCenter";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import DoNotSell from "./pages/legal/DoNotSell";
import CookiePolicy from "./pages/legal/CookiePolicy";
import GDPRPolicy from "./pages/legal/GDPRPolicy";
import Legal from "./pages/legal/Legal";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions/lead-generation-strategy" element={<LeadGenerationStrategy />} />
          <Route path="/solutions/content-driven-lead-generation" element={<ContentDrivenLeadGeneration />} />
          <Route path="/solutions/paid-advertising-ppc" element={<PaidAdvertisingPPC />} />
          <Route path="/solutions/outbound-lead-generation" element={<OutboundLeadGeneration />} />
          <Route path="/solutions/full-funnel-marketing-nurturing" element={<FullFunnelMarketingNurturing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/press" element={<Press />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/why-dgenz" element={<WhyDGenz />} />
          <Route path="/company/why-insightyr" element={<WhyDGenz />} />
          <Route path="/company/our-data" element={<OurData />} />
          
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/trust-center" element={<TrustCenter />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/do-not-sell" element={<DoNotSell />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal/gdpr-policy" element={<GDPRPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
