import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MasterBundle from "./pages/MasterBundle";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import EarningsDisclaimer from "./pages/EarningsDisclaimer";
import NotFound from "./pages/NotFound";
import SeriesHub from "./pages/series/SeriesHub";
import BookPage from "./pages/book/BookPage";
import BundlePage from "./pages/bundles/BundlePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:handle" element={<Product />} />
          <Route path="/master-bundle" element={<MasterBundle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/earnings-disclaimer" element={<EarningsDisclaimer />} />
          {/* TheKnockoutAcademy V2 catalog routes — Session 3
              Invalid seriesId / slug / bundleId render NotFound inline from
              within each page component, so deep links to /book/typo show
              the 404 page without a redirect bounce. */}
          <Route path="/series/:seriesId" element={<SeriesHub />} />
          <Route path="/book/:slug" element={<BookPage />} />
          <Route path="/bundles/:bundleId" element={<BundlePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
