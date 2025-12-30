import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Guides from "./pages/Guides";
import CoopCostBreakdown2025 from "./pages/guides/CoopCostBreakdown2025";
import HowToBuildChickenCoop from "./pages/guides/HowToBuildChickenCoop";
import SmallChickenCoopPlans from "./pages/guides/SmallChickenCoopPlans";
import FourByFourCoopPlans from "./pages/guides/FourByFourCoopPlans";
import ChickenCoopSizeCalculator from "./pages/guides/ChickenCoopSizeCalculator";
import ChickenCoopMaterialsGuide from "./pages/guides/ChickenCoopMaterialsGuide";
import ChickenCoopPermitGuide from "./pages/guides/ChickenCoopPermitGuide";
import PredatorProofCoopGuide from "./pages/guides/PredatorProofCoopGuide";
import ChickenCoopVentilationGuide from "./pages/guides/ChickenCoopVentilationGuide";
import ArizonaChickenCoopGuide from "./pages/guides/ArizonaChickenCoopGuide";
import ExpensiveCoopMistakes from "./pages/guides/ExpensiveCoopMistakes";
import UrbanChickenCoopPlans from "./pages/guides/UrbanChickenCoopPlans";
import RecommendedPlans from "./pages/RecommendedPlans";
import PlanReviews from "./pages/PlanReviews";
import Shop from "./pages/Shop";

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
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/cost-breakdown-2025" element={<CoopCostBreakdown2025 />} />
            <Route path="/guides/how-to-build-chicken-coop" element={<HowToBuildChickenCoop />} />
            <Route path="/guides/small-chicken-coop-plans" element={<SmallChickenCoopPlans />} />
            <Route path="/guides/4x4-chicken-coop-plans" element={<FourByFourCoopPlans />} />
            <Route path="/guides/chicken-coop-size-calculator" element={<ChickenCoopSizeCalculator />} />
            <Route path="/guides/coop-materials-guide" element={<ChickenCoopMaterialsGuide />} />
            <Route path="/guides/coop-permit-guide" element={<ChickenCoopPermitGuide />} />
            <Route path="/guides/predator-proof-coop-guide" element={<PredatorProofCoopGuide />} />
            <Route path="/guides/coop-ventilation-guide" element={<ChickenCoopVentilationGuide />} />
            <Route path="/guides/arizona-chicken-coop-guide" element={<ArizonaChickenCoopGuide />} />
            <Route path="/guides/expensive-coop-mistakes" element={<ExpensiveCoopMistakes />} />
            <Route path="/guides/urban-chicken-coop-plans" element={<UrbanChickenCoopPlans />} />
            <Route path="/recommended-plans" element={<RecommendedPlans />} />
            <Route path="/plan-reviews" element={<PlanReviews />} />
            <Route path="/shop" element={<Shop />} />
            
            {/* Legacy URL Redirects - preserving backlinks from expired domain */}
            <Route path="/simple-chicken-coop-plans-learn-easily-build-chicken-coop" element={<Navigate to="/guides/small-chicken-coop-plans" replace />} />
            <Route path="/how-to-build-a-chicken-coop" element={<Navigate to="/guides/how-to-build-chicken-coop" replace />} />
            <Route path="/chicken-coop-designs" element={<Navigate to="/recommended-plans" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
