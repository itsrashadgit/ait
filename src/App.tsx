// https://calendly.com/aromait/
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/modals/ScrollToTop";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";

import CloudSolutions from "./pages/features/CloudSolutions";
import CustomDevelopment from "./pages/features/CustomDevelopment";
import CyberSecurity from "./pages/features/CyberSecurity";
import ITConsultingFeatures from "./pages/features/ITConsulting";
import PerformanceOptimization from "./pages/features/PerformanceOptimization";
import TeamCollaboration from "./pages/features/TeamCollaboration";

import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import DataManagement from "./pages/services/DataManagement";
import SystemIntegration from "./pages/services/SystemIntegration";
import BusinessIntelligence from "./pages/services/BusinessIntelligence";
import ITConsultingService from "./pages/services/ITConsulting";


import CaseStudies from "./pages/CaseStudies";
import Careers from "./pages/Careers";

import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL Features "*" ROUTE */}
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/custom-development" element={<CustomDevelopment />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/it-consulting-features" element={<ITConsultingFeatures />} />
          <Route path="/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/team-collaboration" element={<TeamCollaboration />} />
          {/* ADD ALL Services "*" ROUTE */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/data-management" element={<DataManagement />} />
          <Route path="/system-integration" element={<SystemIntegration />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/it-consulting" element={<ITConsultingService />} />
          
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
