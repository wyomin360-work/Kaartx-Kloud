import {
  ArrowRight,
  MessageCircle,
  BarChart3,
  ShoppingBag,
  Users,
  DollarSign,
  Settings,
  Bell,
  Search,
  Package,
  TrendingUp,
  TrendingDown,
  LayoutDashboard,
  ChevronDown,
  CheckCircle2,
  Clock,
  Globe,
  Smartphone,
  ShoppingCart,
  Activity,
  RefreshCw,
  Heart,
  ChevronLeft,
  Share2,
  Grid3X3,
  User,
  Home,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Hero({ onOpenSignup }: any) {
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>(0.1);
  const subtitleAnimation = useScrollAnimation<HTMLParagraphElement>(0.1);
  const buttonsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const dashboardAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  // Floating Sync Labels Config
  const labels = [
    { text: "Inventory Syncing", target: "web", color: "blue", icon: Package },
    {
      text: "Order Fulfillment",
      target: "app",
      color: "emerald",
      icon: CheckCircle2,
    },
    {
      text: "Payout Management",
      target: "web",
      color: "blue",
      icon: DollarSign,
    },
    {
      text: "Real-time Tracking",
      target: "app",
      color: "emerald",
      icon: Activity,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [webGlow, setWebGlow] = useState(false);
  const [appGlow, setAppGlow] = useState(false);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % labels.length);
    }, 2800);

    return () => clearInterval(cycleInterval);
  }, []);

  // Sync Node Glow with Label Impact (at 2.2s of the 2.8s cycle)
  useEffect(() => {
    const impactTimer = setTimeout(() => {
      if (labels[currentIndex].target === "web") {
        setWebGlow(true);
        setTimeout(() => setWebGlow(false), 800);
      } else {
        setAppGlow(true);
        setTimeout(() => setAppGlow(false), 800);
      }
    }, 2200);

    return () => clearTimeout(impactTimer);
  }, [currentIndex]);

  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(1000);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setVh(window.innerHeight);

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const fadeStart = vh * 0.15;
  const fadeDistance = vh * 0.85;
  const heroOpacity =
    scrollY < fadeStart
      ? 1
      : Math.max(1 - (scrollY - fadeStart) / fadeDistance, 0);

  const heroTranslateY = scrollY * 0.35;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      <div className="premium-grid absolute inset-0 z-0 opacity-40" />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 60% 50%, rgba(37, 99, 235, 0.08), transparent 50%), radial-gradient(circle at 40% 50%, rgba(147, 51, 234, 0.05), transparent 50%)",
        }}
      />

      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-5 md:px-6 lg:flex-row lg:gap-8"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslateY}px)`,
          pointerEvents: heroOpacity < 0.1 ? "none" : "auto",
        }}
      >
        {/* Left Column (Text & CTAs) */}
        <div className="mb-10 flex w-full flex-col text-left lg:mb-0 lg:w-[45%] xl:pr-10">
          <h1
            ref={titleAnimation.ref}
            className={`animate-on-scroll mb-6 font-display text-4xl font-medium leading-[1.1] text-slate-900 sm:text-5xl md:text-[52px] ${titleAnimation.isVisible ? "visible" : ""}`}
            data-testid="text-hero-title"
          >
            Launch your <span className="text-blue-600">multi-vendor</span>{" "}
            <br className="hidden md:block" /> marketplace in days.
          </h1>
          <p
            ref={subtitleAnimation.ref}
            className={`animate-on-scroll stagger-1 mb-10 max-w-lg text-sm font-normal leading-relaxed text-slate-500 sm:text-base ${subtitleAnimation.isVisible ? "visible" : ""}`}
            data-testid="text-hero-subtitle"
          >
            The complete commerce infrastructure for the GCC. Scaling brands and
            marketplaces with automated payouts, unified inventory, and
            localized workflows.
          </p>
          <div
            ref={buttonsAnimation.ref}
            className={`animate-on-scroll stagger-2 flex flex-col items-stretch justify-start gap-4 sm:flex-row sm:items-center ${buttonsAnimation.isVisible ? "visible" : ""}`}
          >
            <Button
              onClick={onOpenSignup}
              size="lg"
              className="group h-14 w-full rounded-full bg-slate-900 px-8 font-bold text-white shadow-xl shadow-slate-200 transition-all hover:scale-[1.02] hover:bg-slate-800 hover:shadow-2xl active:scale-[0.98] sm:w-auto"
              data-testid="button-hero-get-started"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToBooking}
              className="h-14 w-full rounded-full border-slate-200 bg-white px-8 font-bold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
              data-testid="button-hero-whatsapp"
            >
              Talk to Sales
            </Button>
          </div>
        </div>

        {/* Right Column (SaaS Dashboard Mockup) */}
        <div
          ref={dashboardAnimation.ref}
          className={`animate-on-scroll stagger-3 relative h-[700px] w-full md:h-[800px] lg:w-[65%] ${dashboardAnimation.isVisible ? "visible" : ""}`}
        >
          {/* SVG Connection Layer */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 700 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              id="path-web"
              d="M 220 350 Q 320 200 480 200"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.path
              id="path-app"
              d="M 220 350 Q 320 500 480 500"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </svg>

          {/* Floating Label System (Sequential & Coordinated) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.8],
                offsetDistance: ["0%", "5%", "95%", "100%"],
              }}
              transition={{
                duration: 2.8,
                ease: "linear",
                times: [0, 0.1, 0.8, 1],
              }}
              className={`absolute z-40 flex items-center gap-2 whitespace-nowrap rounded-full border-2 bg-white/90 px-3.5 py-2 text-[10px] font-semibold tracking-tight shadow-xl backdrop-blur-md ${
                labels[currentIndex].color === "blue"
                  ? "border-blue-400/30 text-blue-700 shadow-blue-500/20"
                  : "border-emerald-400/30 text-emerald-700 shadow-emerald-500/20"
              }`}
              style={{
                offsetPath: `path("${labels[currentIndex].target === "web" ? "M 220 350 Q 320 200 480 200" : "M 220 350 Q 320 500 480 500"}")`,
                offsetRotate: "0deg",
                boxShadow:
                  labels[currentIndex].color === "blue"
                    ? "0 0 15px rgba(59, 130, 246, 0.3)"
                    : "0 0 15px rgba(16, 185, 129, 0.3)",
              }}
            >
              {(() => {
                const Icon = labels[currentIndex].icon;
                return (
                  <Icon
                    size={12}
                    className={
                      labels[currentIndex].color === "blue"
                        ? "text-blue-500"
                        : "text-emerald-500"
                    }
                  />
                );
              })()}
              {labels[currentIndex].text}
            </motion.div>
          </AnimatePresence>

          {/* NODE 1: Admin Dashboard (High Fidelity) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-[-5%] top-1/2 z-20 w-80 origin-left -translate-y-1/2 scale-90 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f9fa] shadow-2xl sm:scale-100"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-white p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-[10px] font-bold tracking-tighter text-white">
                  K
                </div>
                <span className="text-[10px] font-bold text-slate-900">
                  Kaartx Admin
                </span>
              </div>
              <div className="flex gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
              </div>
            </div>
            <div className="space-y-4 p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 bg-white p-3">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-[9px] font-bold text-[#1e3a3a]">
                      Sales
                    </span>
                    <ShoppingBag size={10} className="text-emerald-500" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-900">
                    OMR 167.620
                  </div>
                  <div className="text-[7px] text-slate-400">Inprocess</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-3">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-[9px] font-bold text-[#1e3a3a]">
                      Orders
                    </span>
                    <ShoppingCart size={10} className="text-emerald-500" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-900">1</div>
                  <div className="text-[7px] text-slate-400">Pending</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-900">
                    Recent Orders
                  </span>
                  <ChevronDown size={10} className="text-slate-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-50 pb-1.5 text-[8px]">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-100 font-bold text-blue-600">
                        P
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">
                          Prince Roy
                        </div>
                        <div className="text-slate-400">KRTX-103775</div>
                      </div>
                    </div>
                    <div className="rounded bg-emerald-50 px-1.5 py-0.5 text-[6px] font-bold uppercase text-emerald-600">
                      Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NODE 2: Client Web (High Fidelity) */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: webGlow ? 1.008 : 1,
              boxShadow: webGlow
                ? "0 0 25px rgba(59, 130, 246, 0.2), 0 10px 25px rgba(0,0,0,0.03)"
                : "0 4px 20px rgba(0,0,0,0.04)",
            }}
            transition={{
              boxShadow: { duration: 0.2 },
              scale: { duration: 0.2 },
              y: { duration: 0.8, delay: 0.8 },
              opacity: { duration: 0.8, delay: 0.8 },
            }}
            className="absolute right-[5%] top-[2%] z-10 w-[420px] transform overflow-hidden rounded-2xl border border-slate-100 bg-white"
          >
            {/* Detailed Web Header */}
            <div className="border-b border-slate-100 p-3">
              <div className="mb-3 flex items-center justify-between px-1">
                <div className="text-xs font-black tracking-tighter text-slate-900">
                  Kaartx
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2.5">
                    <Home size={10} className="text-slate-900" />
                    <Heart size={10} className="text-slate-400" />
                    <Grid3X3 size={10} className="text-slate-400" />
                    <ShoppingCart size={10} className="text-slate-400" />
                    <User size={10} className="text-slate-400" />
                    <Bell size={10} className="text-slate-400" />
                  </div>
                  <div className="relative">
                    <Search
                      size={8}
                      className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <div className="h-5 w-24 rounded-md border border-slate-200 bg-slate-100" />
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-50 py-1 text-center text-[8px] font-bold uppercase tracking-widest text-slate-900">
                The Icons Everyone's Watching
              </div>
            </div>

            {/* Web Product Grid */}
            <div className="bg-[#fafafa] p-3">
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-[3/4] rounded-lg border border-slate-100 bg-white p-1 shadow-sm"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-md bg-slate-50">
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                        <ShoppingBag size={12} className="text-slate-300" />
                      </div>
                      <Heart
                        size={8}
                        className="absolute right-1 top-1 text-slate-300"
                      />
                    </div>
                    <div className="mt-1 space-y-0.5">
                      <div className="h-1.5 w-8 rounded bg-slate-200" />
                      <div className="h-1 w-full rounded bg-slate-100" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center text-[7px] font-bold uppercase tracking-tighter text-slate-400">
                Today's Top Picks
              </div>
            </div>
          </motion.div>

          {/* NODE 3: Mobile App (High Fidelity PDP) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: appGlow ? 1.01 : 1,
              boxShadow: appGlow
                ? "0 0 25px rgba(16, 185, 129, 0.2), 0 10px 25px rgba(0,0,0,0.03)"
                : "0 4px 20px rgba(0,0,0,0.04)",
            }}
            transition={{
              boxShadow: { duration: 0.2 },
              scale: { duration: 0.2 },
              y: { duration: 0.8, delay: 1.1 },
              opacity: { duration: 0.8, delay: 1.1 },
            }}
            className="absolute bottom-[-2%] right-[12%] z-30 w-60 origin-bottom transform overflow-hidden rounded-[2.5rem] border-[5px] border-[#0f172a] bg-white"
          >
            <div className="flex h-full flex-col bg-white pt-2">
              <div className="flex items-center justify-between px-4 py-2">
                <ChevronLeft size={16} className="text-slate-900" />
                <div className="flex items-center gap-3">
                  <Heart size={16} className="text-slate-300" />
                  <div className="relative">
                    <ShoppingCart size={16} className="text-slate-900" />
                    <div className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full border border-white bg-red-500 text-[5px] text-white">
                      1
                    </div>
                  </div>
                  <Share2 size={16} className="text-slate-900" />
                </div>
              </div>

              <div className="px-5 py-2">
                <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-[#fcfcfc]">
                  <div className="relative h-32 w-32 skew-x-6 transform rounded-3xl bg-emerald-500 shadow-xl">
                    <div className="absolute left-2 top-2 text-[8px] font-black uppercase tracking-tighter text-emerald-200">
                      Xocoi
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
                    <div className="h-1 w-1 rounded-full bg-slate-900" />
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-1 w-1 rounded-full bg-slate-200"
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-3 space-y-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-black text-slate-900">
                      Xocoi
                    </span>
                    <ArrowRight size={8} className="text-slate-400" />
                  </div>
                  <h4 className="text-[10px] font-medium leading-tight text-slate-500">
                    XOCOI Sandals
                  </h4>
                  <div className="pt-1">
                    <div className="text-xs font-black text-slate-900">
                      OMR 48.721
                    </div>
                  </div>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2">
                  <div className="flex h-8 flex-col items-center justify-center rounded-lg border border-slate-100">
                    <span className="text-[6px] font-bold uppercase text-slate-300">
                      Color
                    </span>
                    <span className="text-[8px] font-bold text-slate-400">
                      Green
                    </span>
                  </div>
                  <div className="flex h-8 flex-col items-center justify-center rounded-lg border border-slate-100">
                    <span className="text-[6px] font-bold uppercase text-[#2e3192]">
                      Size
                    </span>
                    <span className="text-[8px] font-bold text-[#2e3192]">
                      37
                    </span>
                  </div>
                </div>

                <div className="pb-4">
                  <div className="flex h-10 w-full items-center justify-center rounded-xl bg-[#0f172a] text-[10px] font-black text-white shadow-lg">
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
