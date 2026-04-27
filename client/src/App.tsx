import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import CreateMarketplace from "@/pages/CreateMarketplace";
import Blog from "@/pages/Blog";
import Careers from "@/pages/Careers";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import LaunchMarketplaceGCC from "@/pages/articles/LaunchMarketplaceGCC";
import KaartxVsCustomDev from "@/pages/articles/KaartxVsCustomDev";
import MarketplaceMistakes from "@/pages/articles/MarketplaceMistakes";
import PayoutCycles from "@/pages/articles/PayoutCycles";
import SellerSubscriptions from "@/pages/articles/SellerSubscriptions";
import Maintenance from "@/pages/Maintenance";

function Router() {
  return (
    <Switch>
      <Route component={Maintenance} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ScrollToTop />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
