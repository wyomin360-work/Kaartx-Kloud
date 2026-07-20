import { useState, useEffect, useRef } from 'react';
import {
    Database,
    Percent,
    Truck,
    CreditCard,
    Users,
    Cpu,
    ExternalLink,
    Sparkles,
    CheckCircle2,
    Cloud
} from 'lucide-react';
import KloudCloudSVG from './KloudCloudSVG';


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
            icon: <Database className="h-5 w-5 text-sky-500" />,
            color: 'border-slate-100/80 bg-white/80',
            gradientStop: '#28A6DE'
        },
        {
            id: 'payouts',
            label: 'Split Settlements',
            description: 'Automated vendor splits',
            icon: <Percent className="h-5 w-5 text-amber-500" />,
            color: 'border-slate-100/80 bg-white/80',
            gradientStop: '#F9AC42'
        },
        {
            id: 'delivery',
            label: 'Delivery & Logistics',
            description: 'GCC custom shipping routes',
            icon: <Truck className="h-5 w-5 text-[#28deb4]" />,
            color: 'border-slate-100/80 bg-white/80',
            gradientStop: '#28deb4'
        },
        {
            id: 'payments',
            label: 'Payment Gateways',
            description: 'Multi-currency checkout',
            icon: <CreditCard className="h-5 w-5 text-rose-500" />,
            color: 'border-slate-100/80 bg-white/80',
            gradientStop: '#EE3E28'
        },
        {
            id: 'sellers',
            label: 'Seller Dashboard',
            description: 'Vendor onboarding & KYC',
            icon: <Users className="h-5 w-5 text-purple-500" />,
            color: 'border-slate-100/80 bg-white/80',
            gradientStop: '#8B5CF6'
        }
    ];

    const outputs: OutputCard[] = [
        { id: 'oman', title: 'Oman Fashion Hub', niche: 'Lifestyle Marketplace', metric: 'OMR 12,850/mo', status: 'live' },
        { id: 'riyadh', title: 'Riyadh Tech Plaza', niche: 'Consumer Electronics', metric: 'SAR 85,400/mo', status: 'active' },
        { id: 'dubai', title: 'Dubai Grocery Net', niche: 'Hyperlocal Delivery', metric: 'AED 43,100/mo', status: 'synced' },
        { id: 'india', title: 'The Indian Store', niche: 'Lifestyle Marketplace', metric: '₹ 43,100/mo', status: 'live' }
    ];

    const [coords, setCoords] = useState<{
        inputs: Record<string, { x: number; y: number }>;
        outputs: Record<string, { x: number; y: number }>;
        centerLeft: { x: number; y: number };
        centerRight: { x: number; y: number };
    }>({
        inputs: {},
        outputs: {},
        centerLeft: { x: 0, y: 0 },
        centerRight: { x: 0, y: 0 }
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<SVGSVGElement>(null);
    const inputRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const outputRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const updateCoords = () => {
        if (!containerRef.current || !centerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const centerRect = centerRef.current.getBoundingClientRect();

        const centerLeft = {
            x: centerRect.left - containerRect.left,
            y: centerRect.top - containerRect.top + centerRect.height / 2
        };
        const centerRight = {
            x: centerRect.right - containerRect.left,
            y: centerRect.top - containerRect.top + centerRect.height / 2
        };

        const inputsData: Record<string, { x: number; y: number }> = {};
        inputs.forEach(item => {
            const el = inputRefs.current[item.id];
            if (el) {
                const rect = el.getBoundingClientRect();
                inputsData[item.id] = {
                    x: rect.right - containerRect.left,
                    y: rect.top - containerRect.top + rect.height / 2
                };
            }
        });

        const outputsData: Record<string, { x: number; y: number }> = {};
        outputs.forEach(item => {
            const el = outputRefs.current[item.id];
            if (el) {
                const rect = el.getBoundingClientRect();
                outputsData[item.id] = {
                    x: rect.left - containerRect.left,
                    y: rect.top - containerRect.top + rect.height / 2
                };
            }
        });

        setCoords({
            inputs: inputsData,
            outputs: outputsData,
            centerLeft,
            centerRight
        });
    };

    useEffect(() => {
        updateCoords();

        const observer = new ResizeObserver(() => {
            updateCoords();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        window.addEventListener('resize', updateCoords);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateCoords);
        };
    }, []);

    useEffect(() => {
        updateCoords();
    }, [hoveredInput, activeInput]);

    const getConnectorColor = (inputId: string) => {
        if (hoveredInput === inputId || activeInput === inputId) {
            const matched = inputs.find(i => i.id === inputId);
            return matched ? matched.gradientStop : '#c8caccff';
        }
        return '#c8caccff';
    };

    const isAnyFocused = hoveredInput !== null || activeInput !== null;

    return (
        <div ref={containerRef} className="w-full max-w-5xl mx-auto px-4 mt-20 relative">

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
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.025); }
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

            {/* Connection lines SVG overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" fill="none">
                {inputs.map(item => {
                    const start = coords.inputs[item.id];
                    const end = coords.centerLeft;
                    if (!start || !end) return null;

                    const cp1x = start.x + (end.x - start.x) / 2;
                    const cp1y = start.y;
                    const cp2x = start.x + (end.x - start.x) / 2;
                    const cp2y = end.y;

                    return (
                        <path
                            key={`line-in-${item.id}`}
                            d={`M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`}
                            stroke={getConnectorColor(item.id)}
                            strokeWidth={hoveredInput === item.id || activeInput === item.id ? '1.5' : '1'}
                            className={hoveredInput === item.id || activeInput === item.id ? 'flow-line-active' : 'flow-line'}
                        />
                    );
                })}

                {outputs.map(out => {
                    const start = coords.centerRight;
                    const end = coords.outputs[out.id];
                    if (!start || !end) return null;

                    const cp1x = start.x + (end.x - start.x) / 2;
                    const cp1y = start.y;
                    const cp2x = start.x + (end.x - start.x) / 2;
                    const cp2y = end.y;

                    const isFocused = hoveredInput
                        ? inputs.find(i => i.id === hoveredInput)?.gradientStop
                        : activeInput
                        ? inputs.find(i => i.id === activeInput)?.gradientStop
                        : null;

                    let strokeColor = '#28deb4'; // default for oman (idx 0)
                    if (out.id === 'riyadh') strokeColor = '#28A6DE';
                    if (out.id === 'dubai') strokeColor = '#F9AC42';
                    if (out.id === 'india') strokeColor = '#9442f9cb';

                    if (isFocused) {
                        strokeColor = isFocused;
                    }

                    return (
                        <path
                            key={`line-out-${out.id}`}
                            d={`M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`}
                            stroke={strokeColor}
                            strokeWidth="1"
                            className="flow-line"
                        />
                    );
                })}
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-0 items-center justify-center">

                {/* ── COLUMN 1: Operational Inputs ── */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5 z-10">
                    <div className="text-center lg:text-left mb-2 px-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Input Channels</span>
                        <h4 className="text-sm font-semibold text-slate-800">Operational Ingestion</h4>
                    </div>
                    {inputs.map((item) => {
                        const isFocused = hoveredInput === item.id || activeInput === item.id;
                        const opacityClass = isAnyFocused
                            ? (isFocused ? 'opacity-100 scale-[1.015] border-slate-350 bg-white shadow-xs' : 'opacity-35')
                            : 'opacity-100';

                        return (
                            <div
                                key={item.id}
                                ref={(el) => {
                                    inputRefs.current[item.id] = el;
                                }}
                                className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${item.color} ${opacityClass}`}
                                onMouseEnter={() => setHoveredInput(item.id)}
                                onMouseLeave={() => setHoveredInput(null)}
                                onClick={() => setActiveInput(activeInput === item.id ? null : item.id)}
                            >
                                <div className="p-2 rounded-xl bg-white shadow-2xs border border-slate-100/80 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-slate-900 tracking-tight leading-snug">{item.label}</p>
                                    <p className="text-[10px] text-slate-400 font-light mt-0.5 leading-none">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── COLUMN 2: Left Converging Connectors Spacer ── */}
                <div className="hidden lg:block col-span-1" />

                {/* ── COLUMN 3: The Kaartx Kloud Engine Core ── */}
                <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center p-5">
                    <KloudCloudSVG
                        activeColor={
                            hoveredInput
                                ? inputs.find(i => i.id === hoveredInput)?.gradientStop || null
                                : activeInput
                                ? inputs.find(i => i.id === activeInput)?.gradientStop || null
                                : null
                        }
                        centerRef={centerRef}
                    />
                    <KloudCloudSVG
                        activeColor={
                            hoveredInput
                                ? inputs.find(i => i.id === hoveredInput)?.gradientStop || null
                                : activeInput
                                ? inputs.find(i => i.id === activeInput)?.gradientStop || null
                                : null
                        }
                        centerRef={centerRef}
                    />
                    <KloudCloudSVG
                        activeColor={
                            hoveredInput
                                ? inputs.find(i => i.id === hoveredInput)?.gradientStop || null
                                : activeInput
                                ? inputs.find(i => i.id === activeInput)?.gradientStop || null
                                : null
                        }
                        centerRef={centerRef}
                    />
                </div>

                {/* ── COLUMN 4: Right Diverging Connectors Spacer ── */}
                <div className="hidden lg:block col-span-1" />

                {/* ── COLUMN 5: Managed Marketplace Storefronts (Outputs) ── */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5 z-10">
                    <div className="text-center lg:text-left mb-2 px-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Output Hubs</span>
                        <h4 className="text-sm font-semibold text-slate-800">Managed Storefronts</h4>
                    </div>
                    {outputs?.map((out) => (
                        <div
                            key={out.id}
                            ref={(el) => {
                                outputRefs.current[out.id] = el;
                            }}
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

            </div>

        </div>
    );
}
