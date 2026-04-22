import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, MessageCircle, BarChart3, ShoppingBag, Users, DollarSign,
  Settings, Bell, Search, Package, TrendingUp, TrendingDown,
  LayoutDashboard, ChevronDown, CheckCircle2, Clock
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroProps {
  onOpenSignup?: () => void;
}

export default function Hero({ onOpenSignup }: HeroProps) {
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>(0.1);
  const subtitleAnimation = useScrollAnimation<HTMLParagraphElement>(0.1);
  const buttonsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const dashboardAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(1000);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setVh(window.innerHeight);

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const fadeStart = vh * 0.15;
  const fadeDistance = vh * 0.85;
  const heroOpacity = scrollY < fadeStart
    ? 1
    : Math.max(1 - (scrollY - fadeStart) / fadeDistance, 0);

  const heroTranslateY = scrollY * 0.35;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 scroll-mt-20">
       <div 
        className="absolute inset-0 bg-grid-pattern z-0" 
        style={{
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />
 
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-12 sm:py-20 md:py-32 w-full z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslateY}px)`,
          pointerEvents: heroOpacity < 0.1 ? 'none' : 'auto'
        }}
      >
        {/* Left Column (Text & CTAs) */}
        <div className="w-full lg:w-[45%] text-left xl:pr-10 mb-10 lg:mb-0 flex flex-col">
          <h1
            ref={titleAnimation.ref}
            className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] dark:text-foreground mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
            data-testid="text-hero-title"
          >
            Launch your own <span className="gradient-text">marketplace or branded store</span> in days, not months
          </h1>
          <p
            ref={subtitleAnimation.ref}
            className={`text-sm sm:text-base md:text-lg text-slate-500 dark:text-muted-foreground mb-8 sm:mb-10 max-w-xl font-medium animate-on-scroll stagger-1 ${subtitleAnimation.isVisible ? 'visible' : ''}`}
            data-testid="text-hero-subtitle"
          >
            Complete GCC-ready commerce platform for brands and marketplaces — with product management, subscriptions, automated payouts, and scalable workflows.
          </p>
          <div
            ref={buttonsAnimation.ref}
            className={`flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center animate-on-scroll stagger-2 ${buttonsAnimation.isVisible ? 'visible' : ''}`}
          >
            <Button
              onClick={onOpenSignup}
              size="lg"
              className="group text-sm sm:text-base px-6 py-5 rounded-xl font-bold bg-[#2563EB] hover:bg-[#1D4ED8] hover:scale-[1.02] shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              data-testid="button-hero-get-started"
            >
              <span>Start Building</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToBooking}
              className="backdrop-blur-sm text-[#1E293B] dark:text-foreground text-sm sm:text-base px-6 py-5 rounded-xl font-semibold border-2 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.02] transition-all w-full sm:w-auto"
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Talk to Sales
            </Button>
          </div>
        </div>

        {/* Right Column (SaaS Dashboard Mockup) */}
        <div
          ref={dashboardAnimation.ref}
          className={`w-full lg:w-[55%] relative animate-on-scroll stagger-3 ${dashboardAnimation.isVisible ? 'visible' : ''}`}
        >
          {/* Decorative background blur behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem] -z-10" />

          <div className="w-full bg-[#1E293B] border border-slate-700 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden transform-gpu hover:shadow-playful transition-shadow duration-500">
            {/* Sidebar (Desktop only) */}
            <div className="hidden md:flex w-56 flex-col text-slate-300 p-4 border-r border-slate-700 shrink-0">
              <div className="flex items-center gap-2 mb-8 px-2 text-white">
                <div className="w-8 h-8 rounded bg-[#2563EB] flex items-center justify-center font-bold text-sm shadow-md">K</div>
                <span className="font-bold text-base tracking-tight">Kaartx Kloud</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 bg-[#2563EB]/20 text-blue-400 rounded-lg cursor-pointer transition-colors active:scale-95">
                  <LayoutDashboard size={18} />
                  <span className="text-sm font-semibold">Dashboard</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors active:scale-95">
                  <ShoppingBag size={18} />
                  <span className="text-sm font-medium">Orders</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors active:scale-95">
                  <Package size={18} />
                  <span className="text-sm font-medium">Products</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors active:scale-95">
                  <Users size={18} />
                  <span className="text-sm font-medium">Customers</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors active:scale-95">
                  <BarChart3 size={18} />
                  <span className="text-sm font-medium">Analytics</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-2 border-t border-slate-700 pt-4">
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors active:scale-95">
                  <Settings size={18} />
                  <span className="text-sm font-medium">Settings</span>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 bg-slate-50 flex flex-col h-[520px] overflow-hidden">
              {/* Topbar */}
              <div className="h-[60px] bg-white border-b border-[#E2E8F0] flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-4 text-slate-400 w-full max-w-sm">
                  <Search size={18} />
                  <span className="text-sm border-r border-[#E2E8F0] pr-4 py-1">Search orders...</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="relative cursor-pointer group">
                    <Bell size={18} className="text-slate-500 group-hover:text-slate-800 transition-colors" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 cursor-pointer hover:ring-2 hover:ring-blue-100 transition-all"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 overflow-y-auto no-scrollbar">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h2 className="text-base font-bold text-[#1E293B]">Store Overview</h2>
                    <p className="text-xs text-slate-500 mt-1">Your store's performance today</p>
                  </div>
                  <button className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all active:scale-95">
                    View Report
                  </button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md transition-all cursor-default">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-slate-100 rounded-md text-slate-600">
                        <DollarSign size={18} />
                      </div>
                      <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        <TrendingUp size={14} className="mr-1" />
                        +12.5%
                      </span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium mb-1 line-clamp-1">Total Revenue</div>
                      <div className="text-base font-bold text-[#1E293B]">OMR 2,450.00</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md transition-all cursor-default">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-slate-100 rounded-md text-slate-600">
                        <ShoppingBag size={18} />
                      </div>
                      <span className="flex items-center text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded">
                        <TrendingDown size={14} className="mr-1" />
                        -2.3%
                      </span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium mb-1 line-clamp-1">Active Orders</div>
                      <div className="text-base font-bold text-[#1E293B]">142 pending</div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders List */}
                <div className="bg-white rounded-lg border border-[#E2E8F0] shadow-sm">
                  <div className="p-4 border-b border-[#E2E8F0] flex justify-between items-center">
                    <h3 className="text-sm font-bold text-[#1E293B]">Recent Orders</h3>
                    <button className="p-1 hover:bg-slate-100 rounded text-slate-500 transition-colors">
                      <ChevronDown size={18} />
                    </button>
                  </div>
                  <div className="p-2 flex flex-col">
                    <div className="flex justify-between items-center group cursor-pointer p-2 rounded-md hover:bg-slate-50 transition-colors">
                      <div className="flex gap-3 items-center">
                        <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-[#1E293B]">
                          <Package size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">#12459</div>
                          <div className="text-xs text-slate-500">Ahmed M. • Muscat</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#1E293B]">OMR 145.00</div>
                        <div className="text-xs font-medium text-emerald-600 flex items-center justify-end gap-1 mt-0.5">
                          <CheckCircle2 size={12} />
                          <span>Delivered</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center group cursor-pointer p-2 rounded-md hover:bg-slate-50 transition-colors">
                      <div className="flex gap-3 items-center">
                        <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-[#1E293B]">
                          <Package size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">#12458</div>
                          <div className="text-xs text-slate-500">Fatima S. • Salalah</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#1E293B]">OMR 89.50</div>
                        <div className="text-xs font-medium text-amber-600 flex items-center justify-end gap-1 mt-0.5">
                          <Clock size={12} />
                          <span>Processing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
