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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/create-marketplace" component={CreateMarketplace}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/careers" component={Careers}/>
      <Route path="/terms" component={TermsOfService}/>
      <Route path="/privacy" component={PrivacyPolicy}/>
      <Route path="/blog/launch-multi-vendor-marketplace-gcc" component={LaunchMarketplaceGCC}/>
      <Route path="/blog/kaartx-kloud-vs-custom-development" component={KaartxVsCustomDev}/>
      <Route path="/blog/marketplace-mistakes-to-avoid" component={MarketplaceMistakes}/>
      <Route path="/blog/how-payout-cycles-work" component={PayoutCycles}/>
      <Route path="/blog/automated-seller-subscriptions" component={SellerSubscriptions}/>
      <Route component={NotFound} />
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
