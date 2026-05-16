import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Lightbulb, Cloud, Store, LayoutDashboard, 
  BarChart3, Smartphone, ShieldCheck, ChevronDown,
  Users, ShoppingCart, Settings, RotateCcw,
  ShoppingBag, Download, Package, Activity, MonitorSmartphone, LayoutGrid
} from "lucide-react";
import { Button } from "./ui/button";




// --- MAIN ECOSYSTEM GENERATOR ---
function LiveEcosystemGenerator() {
  const [activeIdea, setActiveIdea] = useState<number | null>(null);
  const [activeTheme, setActiveTheme] = useState<number>(0);
  const [pulseKey, setPulseKey] = useState<number>(0);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    const runSequence = () => {
      setActiveTheme(0);
      setActiveIdea(null);
      
      // Idea 1: Pharmacy
      timeouts.push(setTimeout(() => setActiveIdea(0), 500));
      timeouts.push(setTimeout(() => { setActiveIdea(null); setActiveTheme(1); setPulseKey(Date.now()); }, 3000));

      // Idea 2: Food Delivery
      timeouts.push(setTimeout(() => setActiveIdea(1), 5500));
      timeouts.push(setTimeout(() => { setActiveIdea(null); setActiveTheme(2); setPulseKey(Date.now()+1); }, 8000));

      // Idea 3: B2B Wholesale
      timeouts.push(setTimeout(() => setActiveIdea(2), 10500));
      timeouts.push(setTimeout(() => { setActiveIdea(null); setActiveTheme(3); setPulseKey(Date.now()+2); }, 13000));

      // Idea 4: Fashion
      timeouts.push(setTimeout(() => setActiveIdea(3), 15500));
      timeouts.push(setTimeout(() => { setActiveIdea(null); setActiveTheme(4); setPulseKey(Date.now()+3); }, 18000));

      // Idea 5: Digital
      timeouts.push(setTimeout(() => setActiveIdea(4), 20500));
      timeouts.push(setTimeout(() => { setActiveIdea(null); setActiveTheme(5); setPulseKey(Date.now()+4); }, 23000));
    };

    runSequence();
    const interval = setInterval(runSequence, 26000);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const ideas = [
    { title: "Pharmacy Ecommerce", desc: "Healthcare Platform", icon: ShieldCheck, color: "text-emerald-600 bg-emerald-100", border: "border-emerald-200", shadow: "shadow-emerald-500/30", startY: -100 },
    { title: "Food Delivery", desc: "Logistics App", icon: Smartphone, color: "text-orange-600 bg-orange-100", border: "border-orange-200", shadow: "shadow-orange-500/30", startY: 0 },
    { title: "B2B Wholesale", desc: "Global Marketplace", icon: Store, color: "text-blue-600 bg-blue-100", border: "border-blue-200", shadow: "shadow-blue-500/30", startY: 100 },
    { title: "Fashion Retail", desc: "Clothing Brand", icon: ShoppingBag, color: "text-rose-600 bg-rose-100", border: "border-rose-200", shadow: "shadow-rose-500/30", startY: -50 },
    { title: "Digital Products", desc: "Software Sales", icon: Download, color: "text-purple-600 bg-purple-100", border: "border-purple-200", shadow: "shadow-purple-500/30", startY: 50 },
  ];

  const themes = [
    { // 0: Default
      border: "rgba(226, 232, 240, 0.8)",
      shadow: "0px 40px 80px -20px rgba(0,0,0,0.15)",
      pulse: "bg-slate-400",
      accent: "bg-slate-800",
      accentText: "text-slate-800",
      title: "Kaartx Infrastructure",
      sidebarBg: "bg-slate-50/50",
      metrics: ["$0.00", "0", "$0.00"],
      chart: "from-slate-50 to-slate-100",
      mobileLayout: "standard",
      mobileTitle: "App Preview",
      transactions: [
        { id: "#TRX-001", store: "Pharmacy Station", amount: "$1,299", status: "Completed", color: "text-emerald-700 bg-emerald-50 ring-emerald-200" },
        { id: "#TRX-002", store: "Fresh Foods Inc", amount: "$145", status: "Processing", color: "text-blue-700 bg-blue-50 ring-blue-200" },
        { id: "#TRX-003", store: "Global Meds", amount: "$320", status: "Completed", color: "text-emerald-700 bg-emerald-50 ring-emerald-200" },
        { id: "#TRX-004", store: "Urban Grocers", amount: "$89", status: "Pending", color: "text-amber-700 bg-amber-50 ring-amber-200" },
      ]
    },
    { // 1: Pharmacy
      border: "rgba(16, 185, 129, 0.6)",
      shadow: "0px 20px 80px -10px rgba(16, 185, 129, 0.25)",
      pulse: "bg-emerald-500",
      accent: "bg-emerald-600",
      accentText: "text-emerald-700",
      title: "PharmaCare Operations",
      sidebarBg: "bg-emerald-50/30",
      metrics: ["$244.5K", "1,840", "$45.20"],
      chart: "from-emerald-50 to-teal-50",
      mobileLayout: "grid",
      mobileTitle: "Patient Portal",
      transactions: [
        { id: "#RX-8921", store: "Dr. Smith Clinic", amount: "$450", status: "Dispensed", color: "text-emerald-700 bg-emerald-50 ring-emerald-200" },
        { id: "#RX-8922", store: "City Hospital", amount: "$1,200", status: "Processing", color: "text-teal-700 bg-teal-50 ring-teal-200" },
        { id: "#RX-8923", store: "Walk-in Patient", amount: "$45", status: "Completed", color: "text-emerald-700 bg-emerald-50 ring-emerald-200" },
        { id: "#RX-8924", store: "Care Center", amount: "$890", status: "Pending", color: "text-amber-700 bg-amber-50 ring-amber-200" },
      ]
    },
    { // 2: Food Delivery
      border: "rgba(249, 115, 22, 0.6)",
      shadow: "0px 20px 80px -10px rgba(249, 115, 22, 0.25)",
      pulse: "bg-orange-500",
      accent: "bg-orange-600",
      accentText: "text-orange-700",
      title: "CraveDelivery Fleet",
      sidebarBg: "bg-orange-50/30",
      metrics: ["$89.2K", "4,200", "$21.50"],
      chart: "from-orange-50 to-amber-50",
      mobileLayout: "standard",
      mobileTitle: "Rider App",
      transactions: [
        { id: "#ORD-401", store: "Burger Joint", amount: "$24.50", status: "Delivered", color: "text-orange-700 bg-orange-50 ring-orange-200" },
        { id: "#ORD-402", store: "Sushi Express", amount: "$89.00", status: "On Route", color: "text-amber-700 bg-amber-50 ring-amber-200" },
        { id: "#ORD-403", store: "Pizza Hut", amount: "$45.20", status: "Cooking", color: "text-blue-700 bg-blue-50 ring-blue-200" },
        { id: "#ORD-404", store: "Taco Stand", amount: "$15.00", status: "Pending", color: "text-slate-700 bg-slate-50 ring-slate-200" },
      ]
    },
    { // 3: B2B Wholesale
      border: "rgba(59, 130, 246, 0.6)",
      shadow: "0px 20px 80px -10px rgba(59, 130, 246, 0.25)",
      pulse: "bg-blue-500",
      accent: "bg-blue-600",
      accentText: "text-blue-700",
      title: "GlobalB2B Network",
      sidebarBg: "bg-blue-50/30",
      metrics: ["$1.2M", "340", "$3,500"],
      chart: "from-blue-50 to-indigo-50",
      mobileLayout: "list",
      mobileTitle: "Vendor Terminal",
      transactions: [
        { id: "#INV-9001", store: "TechCorp Inc", amount: "$12,400", status: "Paid", color: "text-blue-700 bg-blue-50 ring-blue-200" },
        { id: "#INV-9002", store: "MegaRetailers", amount: "$45,000", status: "Net 30", color: "text-indigo-700 bg-indigo-50 ring-indigo-200" },
        { id: "#INV-9003", store: "Global Supply", amount: "$8,900", status: "Paid", color: "text-blue-700 bg-blue-50 ring-blue-200" },
        { id: "#INV-9004", store: "Local Dist", amount: "$3,200", status: "Overdue", color: "text-red-700 bg-red-50 ring-red-200" },
      ]
    },
    { // 4: Fashion Retail
      border: "rgba(244, 63, 94, 0.6)",
      shadow: "0px 20px 80px -10px rgba(244, 63, 94, 0.25)",
      pulse: "bg-rose-500",
      accent: "bg-rose-600",
      accentText: "text-rose-700",
      title: "StyleHouse Boutique",
      sidebarBg: "bg-rose-50/30",
      metrics: ["$125K", "8,900", "$145.00"],
      chart: "from-rose-50 to-pink-50",
      mobileLayout: "grid",
      mobileTitle: "Storefront UI",
      transactions: [
        { id: "#ORD-881", store: "Summer Collection", amount: "$240", status: "Shipped", color: "text-rose-700 bg-rose-50 ring-rose-200" },
        { id: "#ORD-882", store: "Accessories", amount: "$45", status: "Processing", color: "text-pink-700 bg-pink-50 ring-pink-200" },
        { id: "#ORD-883", store: "Winter Coats", amount: "$590", status: "Delivered", color: "text-rose-700 bg-rose-50 ring-rose-200" },
        { id: "#ORD-884", store: "Footwear", amount: "$120", status: "Pending", color: "text-amber-700 bg-amber-50 ring-amber-200" },
      ]
    },
    { // 5: Digital Products
      border: "rgba(168, 85, 247, 0.6)",
      shadow: "0px 20px 80px -10px rgba(168, 85, 247, 0.25)",
      pulse: "bg-purple-500",
      accent: "bg-purple-600",
      accentText: "text-purple-700",
      title: "CloudSoft Downloads",
      sidebarBg: "bg-purple-50/30",
      metrics: ["$450K", "12,400", "$89.99"],
      chart: "from-purple-50 to-fuchsia-50",
      mobileLayout: "list",
      mobileTitle: "Customer Portal",
      transactions: [
        { id: "#DL-001", store: "Pro License", amount: "$299", status: "Active", color: "text-purple-700 bg-purple-50 ring-purple-200" },
        { id: "#DL-002", store: "Cloud Storage", amount: "$15/mo", status: "Subscribed", color: "text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-200" },
        { id: "#DL-003", store: "Design Assets", amount: "$49", status: "Downloaded", color: "text-purple-700 bg-purple-50 ring-purple-200" },
        { id: "#DL-004", store: "API Access", amount: "$890", status: "Renewing", color: "text-blue-700 bg-blue-50 ring-blue-200" },
      ]
    }
  ];

  const activeT = themes[activeTheme];

  return (
    <div className="relative mx-auto flex h-[650px] w-full items-center justify-center pt-4 perspective-[1000px]">
      
      {/* Background Soft Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

      {/* Entering Idea */}
      <AnimatePresence>
        {activeIdea !== null && (
          <motion.div
            key={activeIdea}
            initial={{ x: -750, y: ideas[activeIdea].startY, opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ 
              x: [-750, -300, 0, 0], 
              y: [ideas[activeIdea].startY, ideas[activeIdea].startY * 0.5, 0, 0], 
              opacity: [0, 1, 1, 0], 
              scale: [0.8, 1, 1.2, 0.2], 
              rotate: [-15, 5, 0, 0] 
            }}
            transition={{ 
              duration: 2.5, 
              times: [0, 0.3, 0.8, 1],
              ease: "easeInOut",
            }}
            className={`absolute left-1/2 top-1/2 z-50 flex items-center gap-3 rounded-xl border bg-white/95 p-2.5 shadow-2xl backdrop-blur-md ${ideas[activeIdea].border}`}
            style={{ marginLeft: '-70px', marginTop: '-30px' }}
          >
            {(() => {
               const Icon = ideas[activeIdea].icon;
               return (
                 <div className={`flex h-10 w-10 items-center justify-center rounded-lg shadow-lg ${ideas[activeIdea].color} ${ideas[activeIdea].shadow}`}>
                   <Icon className="h-5 w-5" />
                 </div>
               );
            })()}
            <div className="pr-2">
              <div className="whitespace-nowrap text-[13px] font-bold text-slate-800">{ideas[activeIdea].title}</div>
              <div className="whitespace-nowrap text-[11px] text-slate-500">{ideas[activeIdea].desc}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Central Application Window */}
      <motion.div 
        layout
        animate={{
          boxShadow: activeT.shadow,
          borderColor: activeT.border
        }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex h-[540px] w-full max-w-[1050px] overflow-hidden rounded-[24px] bg-white"
        style={{ borderWidth: "2px" }}
      >
        {/* Pulse Wave Center on each Idea arrival */}
        <AnimatePresence mode="wait">
          {pulseKey > 0 && (
            <motion.div
              key={`pulse-${pulseKey}`}
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 6, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`absolute left-1/2 top-1/2 z-40 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] ${activeT.pulse}`}
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <motion.div 
          layout
          className={`relative w-[220px] shrink-0 border-r border-slate-100 transition-colors duration-700 ${activeT.sidebarBg} flex flex-col p-5`}
        >
          <div className="mb-8 flex items-center gap-3 px-1">
            <motion.div 
              layout
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-md ${activeT.accent} text-white transition-colors duration-700`}
            >
              <Cloud className="h-4 w-4" />
            </motion.div>
            <span className="text-[17px] font-extrabold tracking-tight text-slate-800">Kaartx</span>
          </div>
          <div className="space-y-2">
            {[
              { icon: LayoutDashboard, label: "Overview", active: true },
              { icon: ShoppingCart, label: "Orders", active: false },
              { icon: Users, label: "Customers", active: false },
              { icon: Store, label: "Products", active: false },
              { icon: Settings, label: "Settings", active: false },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-3 rounded-xl px-3.5 py-3 transition-colors ${item.active ? `bg-white shadow-sm ring-1 ring-slate-200/50 ${activeT.accentText}` : 'text-slate-500 hover:bg-slate-100/50'}`}>
                <item.icon className={`h-4 w-4 shrink-0 ${item.active ? '' : 'text-slate-400'}`} />
                <span className={`text-[13px] font-bold ${item.active ? '' : 'text-slate-500'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Dashboard Area */}
        <div className="flex min-w-0 flex-1 flex-col bg-white p-7">
           
           {/* Header */}
           <div className="mb-8 flex w-full items-center justify-between">
              <div>
                <motion.h2 
                  key={activeT.title}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[24px] font-extrabold tracking-tight text-slate-800"
                >
                  {activeT.title}
                </motion.h2>
                <p className="mt-1.5 text-[14px] font-medium text-slate-500">Live infrastructure overview for your ecosystem.</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[12px] font-bold text-slate-600 shadow-sm">
                   Last 30 Days <ChevronDown className="h-4 w-4" />
                 </div>
                 <div className={`h-10 w-10 rounded-full bg-gradient-to-tr ${activeT.chart} shadow-sm ring-2 ring-slate-50`} />
              </div>
           </div>

           {/* Metrics */}
           <div className="mb-6 grid h-[100px] grid-cols-3 gap-5">
              <div className={`rounded-xl border border-slate-100 p-4 shadow-sm transition-colors duration-700 ${activeT.sidebarBg}`}>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">Gross Volume</div>
                <div className="flex items-end gap-2">
                  <motion.div key={activeT.metrics[0]} initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }} className="text-3xl font-black text-slate-900">{activeT.metrics[0]}</motion.div>
                </div>
              </div>
              <div className={`rounded-xl border border-slate-100 p-4 shadow-sm transition-colors duration-700 ${activeT.sidebarBg}`}>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">Active Nodes</div>
                <div className="flex items-end gap-2">
                  <motion.div key={activeT.metrics[1]} initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }} className="text-3xl font-black text-slate-900">{activeT.metrics[1]}</motion.div>
                </div>
              </div>
              <div className={`rounded-xl border border-slate-100 p-4 shadow-sm transition-colors duration-700 ${activeT.sidebarBg}`}>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">Avg. Transaction</div>
                <div className="flex items-end gap-2">
                  <motion.div key={activeT.metrics[2]} initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }} className="text-3xl font-black text-slate-900">{activeT.metrics[2]}</motion.div>
                </div>
              </div>
           </div>

           {/* Transactions & Mobile View Container */}
           <div className="flex min-h-0 flex-1 gap-6">
              <div className="flex flex-[2] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.02]">
                <div className="mb-4 text-[14px] font-extrabold text-slate-800">Recent Activity</div>
                <div className="flex flex-1 flex-col gap-3.5">
                  {activeT.transactions.map((order, i) => (
                     <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100/60 bg-slate-50/50 p-3 transition-colors hover:bg-slate-50">
                       <div className="flex items-center gap-4">
                         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/50">
                           <ShoppingCart className="h-4 w-4 text-slate-400" />
                         </div>
                         <div>
                           <div className="text-[13px] font-bold text-slate-800">{order.store}</div>
                           <div className="text-[11px] font-semibold text-slate-500">{order.id}</div>
                         </div>
                       </div>
                       <div className="flex items-center gap-4">
                         <div className="text-[13px] font-black text-slate-700">{order.amount}</div>
                         <div className={`rounded-md px-2.5 py-1 text-[10px] font-bold ring-1 ${order.color}`}>
                           {order.status}
                         </div>
                       </div>
                     </div>
                  ))}
                </div>
              </div>

              <div className={`relative flex w-[180px] shrink-0 flex-col items-center overflow-hidden rounded-2xl border border-slate-100 transition-colors duration-700 ${activeT.sidebarBg} p-4`}>
                 <div className="mb-4 w-full text-center text-[11px] font-bold uppercase tracking-widest text-slate-500">{activeT.mobileTitle}</div>
                 
                 <div className="flex w-full flex-1 flex-col rounded-[22px] border-[5px] border-slate-200/80 bg-white p-2.5 shadow-md">
                   <div className="mx-auto mb-2.5 h-[3px] w-10 rounded-full bg-slate-200" />
                   
                   <div className="mb-3.5 flex items-center justify-between px-1">
                     <div className="h-3 w-3 rounded-full bg-slate-200" />
                     <div className="h-2 w-14 rounded-full bg-slate-200" />
                     <div className="h-3 w-3 rounded-full bg-slate-200" />
                   </div>

                   {activeT.mobileLayout === 'standard' && (
                     <>
                       <div className={`relative mb-4 flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br transition-colors duration-700 ${activeT.chart}`}>
                         <Smartphone className={`h-8 w-8 opacity-70 ${activeT.accentText}`} />
                       </div>
                       <div className="flex flex-1 flex-col space-y-3 px-1 pb-2">
                         <div className="space-y-2">
                           <div className="h-3 w-[85%] rounded-full bg-slate-700" />
                           <div className="h-3 w-[60%] rounded-full bg-slate-300" />
                         </div>
                         <div className={`mt-auto flex h-8 w-full items-center justify-center rounded-lg shadow-sm transition-colors duration-700 ${activeT.accent}`}>
                           <div className="h-1.5 w-10 rounded-full bg-white/90" />
                         </div>
                       </div>
                     </>
                   )}

                   {activeT.mobileLayout === 'grid' && (
                     <>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                           <div className={`h-12 rounded-lg bg-gradient-to-br transition-colors duration-700 ${activeT.chart}`} />
                           <div className={`h-12 rounded-lg bg-gradient-to-br transition-colors duration-700 ${activeT.chart}`} />
                           <div className={`h-12 rounded-lg bg-gradient-to-br transition-colors duration-700 ${activeT.chart}`} />
                           <div className={`h-12 rounded-lg bg-gradient-to-br transition-colors duration-700 ${activeT.chart}`} />
                        </div>
                        <div className="mt-auto space-y-2 px-1 pb-2">
                          <div className="h-2 w-full rounded-full bg-slate-200" />
                          <div className="h-2 w-[70%] rounded-full bg-slate-200" />
                        </div>
                     </>
                   )}

                   {activeT.mobileLayout === 'list' && (
                     <>
                        <div className="space-y-2 mb-4">
                           <div className="flex items-center gap-2">
                              <div className={`h-8 w-8 rounded-lg shrink-0 bg-gradient-to-br transition-colors duration-700 ${activeT.chart}`} />
                              <div className="space-y-1.5 flex-1">
                                <div className="h-2 w-full rounded-full bg-slate-200" />
                                <div className="h-2 w-[60%] rounded-full bg-slate-100" />
                              </div>
                           </div>
                           <div className="flex items-center gap-2">
                              <div className={`h-8 w-8 rounded-lg shrink-0 bg-gradient-to-br transition-colors duration-700 ${activeT.chart}`} />
                              <div className="space-y-1.5 flex-1">
                                <div className="h-2 w-full rounded-full bg-slate-200" />
                                <div className="h-2 w-[80%] rounded-full bg-slate-100" />
                              </div>
                           </div>
                        </div>
                        <div className={`mt-auto flex h-8 w-full items-center justify-center rounded-lg shadow-sm transition-colors duration-700 ${activeT.accent}`}>
                           <div className="h-1.5 w-10 rounded-full bg-white/90" />
                        </div>
                     </>
                   )}
                 </div>
              </div>
           </div>

        </div>
      </motion.div>


    </div>
  );
}

export default function Hero({ onOpenSignup }: { onOpenSignup?: () => void }) {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-24 md:pb-2 md:pt-32 lg:pb-3 lg:pt-36"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* MOBILE TITLE */}
        <div className="mb-8 block w-full text-left sm:text-center lg:hidden">
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl lg:leading-[1.1]">
            Build and Scale Your Own <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Commerce Ecosystem.</span>
          </h1>
        </div>

        {/* DESKTOP TOP TITLE (Line 1) */}
        <div className="hidden lg:block w-full mb-2 relative z-20">
           <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl lg:leading-[1.1]">
             Build and Scale Your Own
           </h1>
        </div>

        {/* TWO COLUMN ROW */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-0 relative">
          
          {/* LEFT: TEXT & BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex w-full flex-col items-start text-left lg:w-[45%] xl:w-[40%] relative z-0"
          >
             {/* DESKTOP TITLE PART 2 */}
             <div className="mb-8 hidden lg:block w-full">
                <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl lg:leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Commerce<br />Ecosystem.</span>
                </h1>
             </div>

            <div className="flex w-full flex-col">
              <p className="max-w-md text-lg leading-relaxed  pt-10 text-slate-900 sm:text-xl lg:pl-2">
                Launch branded marketplaces, seller platforms, mobile commerce apps, and multi-vendor operations from one powerful infrastructure platform.
              </p>

              <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row lg:pl-2">
                <Button
                  onClick={onOpenSignup}
                  className="h-14 rounded-xl bg-slate-900 px-8 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30 sm:w-auto"
                >
                  Start Building
                </Button>
                <Button
                  onClick={scrollToBooking}
                  variant="outline"
                  className="h-14 rounded-xl border-slate-200 bg-white px-8 text-base font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50 sm:w-auto"
                >
                  Book a Demo
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-500 lg:pl-2">
                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100/50">
                   <ShieldCheck className="h-4 w-4" />
                 </div>
                 <span>Trusted scalable infrastructure.</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: DESIGN */}
          <div className="relative z-10 flex w-full flex-col lg:w-[65%] xl:w-[70%] lg:-mt-4">
             <div className="relative mx-auto flex w-full justify-center">
               <LiveEcosystemGenerator />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
