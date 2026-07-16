import { useState } from 'react';
import { 
    Database, 
    Percent, 
    Truck, 
    CreditCard, 
    Users, 
    Cpu, 
    ExternalLink, 
    Sparkles,
    CheckCircle2
} from 'lucide-react';

interface InputCard {
    id: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    gradientStop: string;
}

interface OutputCard {
    id: string;
    title: string;
    niche: string;
    metric: string;
    status: 'active' | 'synced' | 'live';
}

export default function SellerMachine() {
    const [hoveredInput, setHoveredInput] = useState<string | null>(null);
    const [activeInput, setActiveInput] = useState<string | null>(null);

    const inputs: InputCard[] = [
        { 
            id: 'inventory', 
            label: 'Inventory Sourcing', 
            description: 'Global supplier & SKU sync', 
            icon: <Database className="h-5 w-5" />, 
            color: 'text-sky-500 border-sky-100 bg-sky-50/40 hover:bg-sky-50/80',
            gradientStop: '#28A6DE'
        },
        { 
            id: 'payouts', 
            label: 'Split Settlements', 
            description: 'Automated vendor splits', 
            icon: <Percent className="h-5 w-5" />, 
            color: 'text-amber-500 border-amber-100 bg-amber-50/40 hover:bg-amber-50/80',
            gradientStop: '#F9AC42'
        },
        { 
            id: 'delivery', 
            label: 'Delivery & Logistics', 
            description: 'GCC custom shipping routes', 
            icon: <Truck className="h-5 w-5" />, 
            color: 'text-[#28deb4] border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50/60',
            gradientStop: '#28deb4'
        },
        { 
            id: 'payments', 
            label: 'Payment Gateways', 
            description: 'Multi-currency checkout', 
            icon: <CreditCard className="h-5 w-5" />, 
            color: 'text-rose-500 border-rose-100 bg-rose-50/40 hover:bg-rose-50/80',
            gradientStop: '#EE3E28'
        },
        { 
            id: 'sellers', 
            label: 'Seller Dashboard', 
            description: 'Vendor onboarding & KYC', 
            icon: <Users className="h-5 w-5" />, 
            color: 'text-purple-500 border-purple-100 bg-purple-50/40 hover:bg-purple-50/80',
            gradientStop: '#8B5CF6'
        }
    ];

    const outputs: OutputCard[] = [
        { id: 'oman', title: 'Oman Fashion Hub', niche: 'Lifestyle Marketplace', metric: 'OMR 12,850/mo', status: 'live' },
        { id: 'riyadh', title: 'Riyadh Tech Plaza', niche: 'Consumer Electronics', metric: 'SAR 85,400/mo', status: 'active' },
        { id: 'dubai', title: 'Dubai Grocery Net', niche: 'Hyperlocal Delivery', metric: 'AED 43,100/mo', status: 'synced' }
    ];

    const getConnectorColor = (inputId: string) => {
        if (hoveredInput === inputId || activeInput === inputId) {
            const matched = inputs.find(i => i.id === inputId);
            return matched ? matched.gradientStop : '#cbd5e1';
        }
        return '#e2e8f0';
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 mt-20">
            
            {/* Inline Animation styles for SVG paths */}
            <style>{`
                @keyframes dash-flow {
                    from { stroke-dashoffset: 24; }
                    to { stroke-dashoffset: 0; }
                }
                .flow-line {
                    stroke-dasharray: 4, 4;
                    animation: dash-flow 2.2s linear infinite;
                    transition: stroke 0.3s ease, stroke-width 0.3s ease;
                }
                .flow-line-active {
                    stroke-dasharray: 4, 4;
                    animation: dash-flow 1.1s linear infinite;
                    stroke-width: 1.5px;
                }
                @keyframes core-pulse {
                    0%, 100% { transform: scale(1); box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); }
                    50% { transform: scale(1.02); box-shadow: 0 20px 50px rgba(40, 222, 180, 0.12); }
                }
                .pulse-core {
                    animation: core-pulse 4s ease-in-out infinite;
                }
                @keyframes orb-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .spin-orb {
                    animation: orb-spin 10s linear infinite;
                }
            `}</style>

            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-0 items-center justify-center">
                
                {/* ── COLUMN 1: Operational Inputs (Sellers Operations) ── ColSpan 2 ── */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5 z-10">
                    <div className="text-center lg:text-left mb-2 px-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Input Channels</span>
                        <h4 className="text-sm font-semibold text-slate-800">Operational Ingestion</h4>
                    </div>
                    {inputs.map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${item.color} ${
                                hoveredInput === item.id || activeInput === item.id 
                                ? 'shadow-md scale-[1.02] border-slate-300 bg-white' 
                                : 'border-slate-100 bg-white/70 shadow-xs'
                            }`}
                            onMouseEnter={() => setHoveredInput(item.id)}
                            onMouseLeave={() => setHoveredInput(null)}
                            onClick={() => setActiveInput(activeInput === item.id ? null : item.id)}
                        >
                            <div className="p-2 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold text-slate-900 tracking-tight leading-snug">{item.label}</p>
                                <p className="text-[10px] text-slate-400 font-light mt-0.5 leading-none">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── COLUMN 2: Left Converging Connectors ── ColSpan 1 ── */}
                <div className="hidden lg:block col-span-1 h-[360px] relative pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 200" fill="none" preserveAspectRatio="none">
                        {/* Line 1: Sourcing (Top) */}
                        <path 
                            d="M 0 20 C 50 20, 50 100, 100 100" 
                            stroke={getConnectorColor('inventory')} 
                            strokeWidth={hoveredInput === 'inventory' || activeInput === 'inventory' ? '1.5' : '1'} 
                            className={hoveredInput === 'inventory' || activeInput === 'inventory' ? 'flow-line-active' : 'flow-line'} 
                        />
                        {/* Line 2: Payouts */}
                        <path 
                            d="M 0 60 C 50 60, 50 100, 100 100" 
                            stroke={getConnectorColor('payouts')} 
                            strokeWidth={hoveredInput === 'payouts' || activeInput === 'payouts' ? '1.5' : '1'} 
                            className={hoveredInput === 'payouts' || activeInput === 'payouts' ? 'flow-line-active' : 'flow-line'} 
                        />
                        {/* Line 3: Delivery (Center) */}
                        <path 
                            d="M 0 100 L 100 100" 
                            stroke={getConnectorColor('delivery')} 
                            strokeWidth={hoveredInput === 'delivery' || activeInput === 'delivery' ? '1.5' : '1'} 
                            className={hoveredInput === 'delivery' || activeInput === 'delivery' ? 'flow-line-active' : 'flow-line'} 
                        />
                        {/* Line 4: Payments */}
                        <path 
                            d="M 0 140 C 50 140, 50 100, 100 100" 
                            stroke={getConnectorColor('payments')} 
                            strokeWidth={hoveredInput === 'payments' || activeInput === 'payments' ? '1.5' : '1'} 
                            className={hoveredInput === 'payments' || activeInput === 'payments' ? 'flow-line-active' : 'flow-line'} 
                        />
                        {/* Line 5: Sellers (Bottom) */}
                        <path 
                            d="M 0 180 C 50 180, 50 100, 100 100" 
                            stroke={getConnectorColor('sellers')} 
                            strokeWidth={hoveredInput === 'sellers' || activeInput === 'sellers' ? '1.5' : '1'} 
                            className={hoveredInput === 'sellers' || activeInput === 'sellers' ? 'flow-line-active' : 'flow-line'} 
                        />
                    </svg>
                </div>

                {/* ── COLUMN 3: The Kaartx Kloud Engine Core ── ColSpan 2 ── */}
                <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center py-6 lg:py-0 z-20 px-4">
                    <div className="pulse-core py-8 px-6 rounded-[2.5rem] bg-white border border-slate-200/70 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-md flex flex-col items-center justify-center w-56 text-center relative overflow-hidden">
                        {/* Background subtle brand gradient glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/90 to-emerald-50/15 pointer-events-none" />
                        
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest z-10 font-mono">Consolidated By</span>
                        
                        {/* Centered concentric circles and spinning gradient orb */}
                        

                        <div className="z-10">
                            <h3 className="text-xs font-black text-slate-950 uppercase tracking-wider font-mono">Kaartx Kloud</h3>
                            <div className="inline-flex items-center gap-1.5 mt-1.5 px-3 py-1 rounded-full bg-emerald-50/70 border border-emerald-100/60">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[8px] text-emerald-600 uppercase font-mono tracking-wider font-bold">Synchronized</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── COLUMN 4: Right Diverging Connectors ── ColSpan 1 ── */}
                <div className="hidden lg:block col-span-1 h-[360px] relative pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 200" fill="none" preserveAspectRatio="none">
                        {/* Line to Oman Hub */}
                        <path 
                            d="M 0 100 C 50 100, 50 40, 100 40" 
                            stroke={hoveredInput ? inputs.find(i => i.id === hoveredInput)?.gradientStop || '#28deb4' : activeInput ? inputs.find(i => i.id === activeInput)?.gradientStop || '#28deb4' : '#28deb4'} 
                            strokeWidth="1" 
                            className="flow-line" 
                        />
                        {/* Line to Riyadh Tech */}
                        <path 
                            d="M 0 100 L 100 100" 
                            stroke={hoveredInput ? inputs.find(i => i.id === hoveredInput)?.gradientStop || '#28A6DE' : activeInput ? inputs.find(i => i.id === activeInput)?.gradientStop || '#28A6DE' : '#28A6DE'} 
                            strokeWidth="1" 
                            className="flow-line" 
                        />
                        {/* Line to Dubai Grocery */}
                        <path 
                            d="M 0 100 C 50 100, 50 160, 100 160" 
                            stroke={hoveredInput ? inputs.find(i => i.id === hoveredInput)?.gradientStop || '#F9AC42' : activeInput ? inputs.find(i => i.id === activeInput)?.gradientStop || '#F9AC42' : '#F9AC42'} 
                            strokeWidth="1" 
                            className="flow-line" 
                        />
                    </svg>
                </div>

                {/* ── COLUMN 5: Managed Marketplace Storefronts (Outputs) ── ColSpan 2 ── */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5 z-10">
                    <div className="text-center lg:text-left mb-2 px-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Output Hubs</span>
                        <h4 className="text-sm font-semibold text-slate-800">Managed Storefronts</h4>
                    </div>
                    {outputs.map((out) => (
                        <div 
                            key={out.id}
                            className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-md flex items-center justify-between"
                        >
                            <div className="space-y-0.5">
                                <span className="text-[8px] font-mono tracking-widest uppercase text-slate-400">Deployed Hub</span>
                                <h5 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">{out.title}</h5>
                                <p className="text-[10px] text-slate-400 font-light">{out.niche}</p>
                            </div>
                            <div className="text-right flex flex-col items-end gap-1.5">
                                <span className="text-[10px] font-bold text-slate-900 bg-slate-50 border border-slate-100 rounded-lg px-2 py-1 shadow-2xs font-mono">{out.metric}</span>
                                <div className="flex items-center gap-1">
                                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                                    <span className="text-[8px] text-slate-500 uppercase font-mono tracking-wider">{out.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom secure verification trace */}
            <div className="mt-10 border-t border-slate-100 pt-4 flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#28deb4]" />
                    Interactive: Hover or click left input operations to highlight system ingestion flow.
                </span>
                <span className="font-semibold text-slate-700 flex items-center gap-1.5 cursor-pointer hover:text-slate-900 transition-colors">
                    GCC Deployment Cluster <ExternalLink className="h-3 w-3 text-slate-400" />
                </span>
            </div>

        </div>
    );
}
