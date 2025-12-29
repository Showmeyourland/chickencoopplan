import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import CoopCostBreakdown2025 from "./pages/guides/CoopCostBreakdown2025";
import UltimateChickenCoopGuide from "./pages/guides/UltimateChickenCoopGuide";
import ChickenCoopPlansGuide from "./pages/guides/ChickenCoopPlansGuide";
import ChickenCoopCostGuide from "./pages/guides/ChickenCoopCostGuide";
import ChickenCareBasics from "./pages/guides/ChickenCareBasics";
import CoopBuildingGuide from "./pages/guides/CoopBuildingGuide";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guides/coop-cost-breakdown-2025" element={<CoopCostBreakdown2025 />} />
            <Route path="/ultimate-chicken-coop-guide" element={<UltimateChickenCoopGuide />} />
            <Route path="/chicken-coop-plans-guide" element={<ChickenCoopPlansGuide />} />
            <Route path="/chicken-coop-cost-guide" element={<ChickenCoopCostGuide />} />
            <Route path="/chicken-care-basics" element={<ChickenCareBasics />} />
            <Route path="/coop-building-guide" element={<CoopBuildingGuide />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
