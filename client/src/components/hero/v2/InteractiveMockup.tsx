import { useState, useEffect, useRef } from 'react';
import { 
  Database, 
  Search, 
  Check, 
  Globe, 
  Sliders, 
  ArrowRight,
  TrendingUp,
  CreditCard,
  Percent,
  FileCheck,
  Plus,
  Settings,
  User,
  ShieldCheck,
  Zap,
  ArrowRightLeft
} from 'lucide-react';

interface TabContent {
  id: string;
  name: string;
  automationTitle: string;
  automationIcon: React.ReactNode;
  automationSteps: Array<{ label: string; status: 'check' | 'loading' | 'pending' }>;
  actionPillLabel: string;
  actionPillIcon: React.ReactNode;
  actionPillBg: string;
}

export default function InteractiveMockup() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const SPREADSHEET_ROWS = [
    { name: 'Al-Khobar Wholesale', location: 'Saudi Arabia', flag: '🇸🇦', sku: 1420, revenue: '$48,250', stripe: 'Active', vat: '15% VAT' },
    { name: 'Dubai Smart Logistics', location: 'United Arab Emirates', flag: '🇦🇪', sku: 890, revenue: '$32,100', stripe: 'Active', vat: '5% VAT' },
    { name: 'Oasis Digital Hub', location: 'United Arab Emirates', flag: '🇦🇪', sku: 540, revenue: '$19,800', stripe: 'Active', vat: '5% VAT' },
    { name: 'Riyadh Consumer Goods', location: 'Saudi Arabia', flag: '🇸🇦', sku: 2100, revenue: '$85,400', stripe: 'Active', vat: '15% VAT' },
    { name: 'Jeddah Tech Plaza', location: 'Saudi Arabia', flag: '🇸🇦', sku: 310, revenue: '$12,500', stripe: 'Pending', vat: 'Pending' },
    { name: 'Gulf Trade Connect', location: 'Oman', flag: '🇴🇲', sku: 720, revenue: '$28,900', stripe: 'Active', vat: 'Exempt' },
  ];

  const tabs: TabContent[] = [
    {
      id: 'sourcing',
      name: 'Vendor Sourcing',
      automationTitle: 'Sourcing Engine Automations',
      automationIcon: <Database className="h-4.5 w-4.5 text-sky-500" />,
      automationSteps: [
        { label: 'GCC Region check: Saudi Arabia & UAE', status: 'check' },
        { label: 'Category matching: Consumer Electronics', status: 'check' },
        { label: 'Verify active Stripe Connect accounts', status: 'check' },
        { label: 'Audit vendor trade compliance logs', status: 'loading' },
      ],
      actionPillLabel: 'Import GCC Vendor',
      actionPillIcon: <Plus className="h-3.5 w-3.5" />,
      actionPillBg: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      id: 'payouts',
      name: 'Split Payments',
      automationTitle: 'Split Settlement Engine',
      automationIcon: <Percent className="h-4.5 w-4.5 text-orange-500" />,
      automationSteps: [
        { label: 'Apply platform transaction fee split (15%)', status: 'check' },
        { label: 'Calculate vendor settlement split (85%)', status: 'check' },
        { label: 'Verify instant payout bank route mapping', status: 'check' },
        { label: 'Process automated stripe split transfer', status: 'loading' },
      ],
      actionPillLabel: 'Trigger Instant Split',
      actionPillIcon: <Zap className="h-3.5 w-3.5" />,
      actionPillBg: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      id: 'compliance',
      name: 'GCC Compliance',
      automationTitle: 'VAT compliance checker',
      automationIcon: <FileCheck className="h-4.5 w-4.5 text-emerald-500" />,
      automationSteps: [
        { label: 'Apply 15% VAT rate for Saudi Arabia orders', status: 'check' },
        { label: 'Apply 5% VAT rate for UAE orders', status: 'check' },
        { label: 'Verify ZATCA cryptographic invoice signature', status: 'check' },
        { label: 'Generate local tax authority receipts', status: 'loading' },
      ],
      actionPillLabel: 'Stamp ZATCA Invoice',
      actionPillIcon: <ShieldCheck className="h-3.5 w-3.5" />,
      actionPillBg: 'bg-emerald-600 hover:bg-emerald-700'
    },
    {
      id: 'subscriptions',
      name: 'Seller Subscriptions',
      automationTitle: 'Billing Templates Engine',
      automationIcon: <CreditCard className="h-4.5 w-4.5 text-purple-500" />,
      automationSteps: [
        { label: 'Verify vendor tier: Enterprise Pro', status: 'check' },
        { label: 'Apply monthly subscription fee ($49)', status: 'check' },
        { label: 'Set custom transaction cap (1.5% maximum)', status: 'check' },
        { label: 'Debit merchant connected stripe account', status: 'loading' },
      ],
      actionPillLabel: 'Charge Monthly Subs',
      actionPillIcon: <CreditCard className="h-3.5 w-3.5" />,
      actionPillBg: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, tabs.length]);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setIsPaused(true);
  };

  const currentContent = tabs[activeTab];

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 mt-8 mb-16 select-none">
      
      {/* ── Pills Selector Container (Premium glassmorphic navigation bar) ── */}
      <div className="relative w-full max-w-xl mx-auto mb-8 select-none p-1.5 rounded-full border border-slate-200/80 bg-slate-100/50 backdrop-blur-md shadow-xs flex items-center justify-between gap-1 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1">
          {tabs.map((tab, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 cursor-pointer border-0 shrink-0 select-none ${
                  isActive 
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60 font-bold' 
                    : 'bg-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
        {isPaused && (
          <button 
            onClick={() => setIsPaused(false)}
            className="px-3.5 py-2 rounded-full text-[10px] font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors border-0 bg-transparent shrink-0 cursor-pointer"
            title="Resume auto-play cycles"
          >
            <Sliders className="h-3 w-3" /> Auto
          </button>
        )}
      </div>

      {/* ── Glassmorphic outer border container ── */}
      <div className="relative rounded-[2.5rem] bg-white/40 backdrop-blur-md p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 overflow-hidden">
        
        {/* Inner white Browser mockup sheet */}
        <div className="rounded-[1.75rem] border border-slate-200/70 bg-white shadow-xs overflow-hidden min-h-[460px] flex flex-col relative z-10">
          
          {/* Browser Header Chrome */}
          <div className="flex items-center justify-between border-b border-slate-200/50 px-4.5 py-3.5 bg-slate-50/50">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            
            {/* Address Bar */}
            <div className="flex items-center gap-1 rounded-md border border-slate-200/60 bg-white px-4 py-0.5 text-[9px] font-medium text-slate-450 w-1/3 justify-center shadow-xs">
              <span className="text-emerald-500 font-semibold">https://</span>
              <span className="text-slate-650 font-semibold">console.kaartx.com</span>
              <span className="text-slate-400">/dashboard/{currentContent.id}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-500">
                <Settings className="h-3 w-3" />
              </div>
            </div>
          </div>

          {/* Browser Body Area */}
          <div className="flex-1 p-5 relative overflow-hidden flex flex-col min-h-[390px] justify-between">
            
            {/* ── Background Layer: Rich Spreadsheet Table ── */}
            <div className="absolute inset-0 px-6 py-5 opacity-25 select-none pointer-events-none z-0">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-slate-200 text-[9px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                    <th className="py-2 px-3 w-8"><div className="h-3 w-3 rounded border border-slate-350" /></th>
                    <th className="py-2 px-3 w-1/4">Vendor Account</th>
                    <th className="py-2 px-3">GCC Sourcing</th>
                    <th className="py-2 px-3">Stripe Connect</th>
                    <th className="py-2 px-3">SKU Count</th>
                    <th className="py-2 px-3">Monthly Volume</th>
                    <th className="py-2 px-3">VAT Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[10px] text-slate-500 font-medium">
                  {SPREADSHEET_ROWS.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-3"><div className="h-3 w-3 rounded border border-slate-250" /></td>
                      <td className="py-3 px-3 font-semibold text-slate-700 flex items-center gap-2 truncate">
                        <span className="w-4.5 h-4.5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500 shrink-0">{row.name.charAt(0)}</span>
                        <span className="truncate">{row.name}</span>
                      </td>
                      <td className="py-3 px-3 truncate">
                        <span className="inline-flex items-center gap-1">
                          <span>{row.flag}</span>
                          <span className="truncate">{row.location}</span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                          row.stripe === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-750 border border-amber-100'
                        }`}>
                          {row.stripe}
                        </span>
                      </td>
                      <td className="py-3 px-3">{row.sku} SKU</td>
                      <td className="py-3 px-3 font-semibold text-slate-700">{row.revenue}</td>
                      <td className="py-3 px-3 text-slate-450">{row.vat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Translucent overlay covering the background spreadsheet to prevent text clashes */}
            <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px] z-10 pointer-events-none" />

            {/* ── Foreground Layer: Floating Interactive Cards (Centered & Spaced) ── */}
            <div className="relative z-20 flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-4 max-w-4xl mx-auto w-full">
              
              {/* Card A: Sourcing / Action checklist panel */}
              <div className="w-full max-w-[340px] rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-5 text-left transform hover:scale-[1.01] transition-all duration-300">
                
                {/* Automation header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-6.5 w-6.5 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      {currentContent.automationIcon}
                    </div>
                    <span className="text-xs font-bold text-slate-800 tracking-tight">{currentContent.automationTitle}</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/50">
                    Auto Active
                  </span>
                </div>

                {/* Steps Loop */}
                <div className="space-y-2.5">
                  {currentContent.automationSteps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center justify-between text-[10px] font-semibold text-slate-650 p-2.5 rounded-xl border transition-all duration-300 ${
                        idx === 3 
                          ? 'bg-slate-50/50 border-dashed border-slate-200' 
                          : 'bg-slate-50/80 border-slate-100/60'
                      }`}
                    >
                      <span className="truncate pr-1">{step.label}</span>
                      
                      {step.status === 'check' && (
                        <span className="flex items-center justify-center h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[9px] font-bold shrink-0 shadow-xs">
                          ✓
                        </span>
                      )}

                      {step.status === 'loading' && (
                        <span className="flex items-center justify-center h-4 w-4 rounded-full bg-white border border-slate-200 shrink-0 relative shadow-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-800 animate-ping" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>

              {/* Card B: Connected Action Pill */}
              <div className="flex items-center gap-4.5 shrink-0 transform hover:scale-[1.02] transition-all duration-300">
                
                {/* SVG Dotted Line vector connector */}
                <div className="hidden md:block w-16 h-8 relative">
                  <svg className="absolute inset-0 w-full h-full overflow-visible" fill="none">
                    <path 
                      d="M0,15 C25,15 25,0 50,0" 
                      stroke="#cbd5e1" 
                      strokeWidth="2" 
                      strokeDasharray="4,4" 
                    />
                    <polygon points="50,-3 56,0 50,3" fill="#cbd5e1" />
                  </svg>
                </div>
                
                {/* Action button card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center gap-3 w-44">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center">Outcome</span>
                  
                  <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-md">
                    {currentContent.actionPillIcon}
                  </div>
                  
                  <button className={`w-full py-2.5 rounded-xl text-[10px] font-bold tracking-tight shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer border-0 ${currentContent.actionPillBg} text-white`}>
                    {currentContent.actionPillLabel}
                  </button>
                </div>

              </div>

            </div>

            {/* Bottom notification bar */}
            <div className="relative z-20 border-t border-slate-100 pt-3 flex items-center justify-between text-[10px] text-slate-400">
              <span>Audited securely by Kloud platform logic in real time.</span>
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                Crypto Verified <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
