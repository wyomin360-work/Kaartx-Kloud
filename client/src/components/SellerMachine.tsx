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
    const [scrollActiveInput, setScrollActiveInput] = useState<string | null>(null);
    const [scrollStep, setScrollStep] = useState<number>(0);
    const [isPinned, setIsPinned] = useState<boolean>(false);
    const [isNearCenter, setIsNearCenter] = useState<boolean>(false);
    
    const isPinnedRef = useRef<boolean>(false);
    const scrollStepRef = useRef<number>(0);
    const stepTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const touchStartRef = useRef<number | null>(null);
    const deltaAccumulatorRef = useRef<number>(0);
    const resetAccumulatorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isAnimatingRef = useRef<boolean>(false);
    const isNearCenterRef = useRef<boolean>(false);

    const stepToFeature: Record<number, string | null> = {
        0: null,
        1: 'inventory',
        2: 'payouts',
        3: 'delivery',
        4: 'payments',
        5: 'sellers',
        6: null
    };

    useEffect(() => {
        scrollStepRef.current = scrollStep;
        setScrollActiveInput(stepToFeature[scrollStep]);
    }, [scrollStep]);

    useEffect(() => {
        isPinnedRef.current = isPinned;
        if (!isPinned) {
            deltaAccumulatorRef.current = 0;
        }
    }, [isPinned]);

    useEffect(() => {
        isNearCenterRef.current = isNearCenter;
    }, [isNearCenter]);

    useEffect(() => {
        if (!containerRef.current) return;
        const sectionEl = containerRef.current.closest('section');
        if (!sectionEl) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsNearCenter(entry.isIntersecting);
            },
            {
                // Trigger when the section enters viewport relative to top navbar (approx 80px)
                rootMargin: "-20px 0px 0px 0px"
            }
        );
        observer.observe(sectionEl);
        return () => observer.disconnect();
    }, []);

    const WHEEL_THRESHOLD = 35;
    const TOUCH_THRESHOLD = 400; // Increased swipe distance to prevent accidental touch triggers

    const triggerCenteringScroll = () => {
        if (!containerRef.current) return;
        const sectionEl = containerRef.current.closest('section');
        if (!sectionEl) return;

        const rect = sectionEl.getBoundingClientRect();
        
        // Dynamic sticky navbar check
        const navbar = document.querySelector('header') || document.querySelector('nav');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

        // Align top of section with bottom of sticky navbar
        const targetScrollY = window.scrollY + rect.top - navbarHeight;

        isAnimatingRef.current = true;
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });

        setTimeout(() => {
            isAnimatingRef.current = false;
        }, 600); // Lock out resets during transition duration
    };

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!containerRef.current) return;
            const currentIsPinned = isPinnedRef.current;
            const currentScrollStep = scrollStepRef.current;
            const currentIsNearCenter = isNearCenterRef.current;

            if (currentIsPinned) {
                let shouldPrevent = true;
                
                // Clear reset timer and reset accumulator if user stops scrolling for 150ms
                if (resetAccumulatorTimeoutRef.current) {
                    clearTimeout(resetAccumulatorTimeoutRef.current);
                }
                resetAccumulatorTimeoutRef.current = setTimeout(() => {
                    deltaAccumulatorRef.current = 0;
                }, 150);

                deltaAccumulatorRef.current += e.deltaY;
                const stepThreshold = 100; // Increased scrolling step transition threshold for smoothness

                if (stepTimeoutRef.current) {
                    e.preventDefault();
                    return;
                }

                if (deltaAccumulatorRef.current > stepThreshold) {
                    deltaAccumulatorRef.current = 0;
                    stepTimeoutRef.current = setTimeout(() => {
                        stepTimeoutRef.current = null;
                    }, 100); // Fluid 100ms cooldown
                    
                    if (currentScrollStep < 6) {
                        setScrollStep(prev => prev + 1);
                    } else {
                        isPinnedRef.current = false;
                        setIsPinned(false);
                        shouldPrevent = false; // Allow this unpinning scroll tick to pass through
                    }
                } else if (deltaAccumulatorRef.current < -stepThreshold) {
                    deltaAccumulatorRef.current = 0;
                    stepTimeoutRef.current = setTimeout(() => {
                        stepTimeoutRef.current = null;
                    }, 100); // Fluid 100ms cooldown

                    if (currentScrollStep > 0) {
                        setScrollStep(prev => prev - 1);
                    } else {
                        isPinnedRef.current = false;
                        setIsPinned(false);
                        shouldPrevent = false; // Allow this unpinning scroll tick to pass through
                    }
                }

                if (shouldPrevent) {
                    e.preventDefault();
                }
            } else {
                // Accumulate delta when unpinned in center zone to trigger pinning smoothly
                const sectionEl = containerRef.current.closest('section');
                const sectionRect = sectionEl ? sectionEl.getBoundingClientRect() : null;
                const navbar = document.querySelector('header') || document.querySelector('nav');
                const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

                if (sectionRect && currentIsNearCenter && !isAnimatingRef.current) {
                    // Lock in when the top of the feature section touches or is close to the navbar
                    const isNearTrigger = sectionRect.top <= navbarHeight + 150 && sectionRect.top >= navbarHeight - 250;
                    
                    if (isNearTrigger) {
                        deltaAccumulatorRef.current += e.deltaY;
                        const pinThreshold = 120; // Increased pinning activation threshold

                        if (deltaAccumulatorRef.current > pinThreshold && currentScrollStep < 6) {
                            e.preventDefault();
                            deltaAccumulatorRef.current = 0;
                            isPinnedRef.current = true;
                            setIsPinned(true);
                            triggerCenteringScroll();
                        } else if (deltaAccumulatorRef.current < -pinThreshold && currentScrollStep > 0) {
                            e.preventDefault();
                            deltaAccumulatorRef.current = 0;
                            isPinnedRef.current = true;
                            setIsPinned(true);
                            triggerCenteringScroll();
                        }
                    } else {
                        deltaAccumulatorRef.current = 0;
                    }
                }
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 1) {
                touchStartRef.current = e.touches[0].clientY;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!containerRef.current || touchStartRef.current === null) return;
            const currentY = e.touches[0].clientY;
            const deltaY = touchStartRef.current - currentY; 

            const currentIsPinned = isPinnedRef.current;
            const currentScrollStep = scrollStepRef.current;
            const currentIsNearCenter = isNearCenterRef.current;

            if (currentIsPinned) {
                let shouldPrevent = true;
                
                if (stepTimeoutRef.current) {
                    e.preventDefault();
                    return;
                }

                if (deltaY > TOUCH_THRESHOLD) { // swipe up -> scroll down
                    stepTimeoutRef.current = setTimeout(() => {
                        stepTimeoutRef.current = null;
                    }, 100); // 100ms touch cooldown
                    if (currentScrollStep < 6) {
                        setScrollStep(prev => prev + 1);
                        touchStartRef.current = currentY;
                    } else {
                        isPinnedRef.current = false;
                        setIsPinned(false);
                        shouldPrevent = false;
                    }
                } else if (deltaY < -TOUCH_THRESHOLD) { // swipe down -> scroll up
                    stepTimeoutRef.current = setTimeout(() => {
                        stepTimeoutRef.current = null;
                    }, 100); // 100ms touch cooldown
                    if (currentScrollStep > 0) {
                        setScrollStep(prev => prev - 1);
                        touchStartRef.current = currentY;
                    } else {
                        isPinnedRef.current = false;
                        setIsPinned(false);
                        shouldPrevent = false;
                    }
                }

                if (shouldPrevent) {
                    e.preventDefault();
                }
            } else {
                const sectionEl = containerRef.current.closest('section');
                const sectionRect = sectionEl ? sectionEl.getBoundingClientRect() : null;
                const navbar = document.querySelector('header') || document.querySelector('nav');
                const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

                if (sectionRect && currentIsNearCenter && !isAnimatingRef.current) {
                    const isNearTrigger = sectionRect.top <= navbarHeight + 150 && sectionRect.top >= navbarHeight - 250;
                    
                    if (isNearTrigger) {
                        if (deltaY > TOUCH_THRESHOLD && currentScrollStep < 6) {
                            e.preventDefault();
                            isPinnedRef.current = true;
                            setIsPinned(true);
                            triggerCenteringScroll();
                        } else if (deltaY < -TOUCH_THRESHOLD && currentScrollStep > 0) {
                            e.preventDefault();
                            isPinnedRef.current = true;
                            setIsPinned(true);
                            triggerCenteringScroll();
                        }
                    }
                }
            }
        };

        const handleTouchEnd = () => {
            touchStartRef.current = null;
        };

        const handleScrollReset = () => {
            if (isAnimatingRef.current) return;
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            if (rect.bottom < 0 || rect.top > viewportHeight) {
                isPinnedRef.current = false;
                setIsPinned(false);
                setScrollStep(rect.top > viewportHeight ? 0 : 6);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        window.addEventListener('scroll', handleScrollReset, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('scroll', handleScrollReset);
            if (stepTimeoutRef.current) {
                clearTimeout(stepTimeoutRef.current);
                stepTimeoutRef.current = null;
            }
            if (resetAccumulatorTimeoutRef.current) {
                clearTimeout(resetAccumulatorTimeoutRef.current);
                resetAccumulatorTimeoutRef.current = null;
            }
        };
    }, []);

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
        centerLeft: { x: number; y: number }[];
        centerRight: { x: number; y: number }[];
    }>({
        inputs: {},
        outputs: {},
        centerLeft: Array(5).fill({ x: 0, y: 0 }),
        centerRight: Array(5).fill({ x: 0, y: 0 })
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const centerRefs = [
        useRef<SVGSVGElement>(null),
        useRef<SVGSVGElement>(null),
        useRef<SVGSVGElement>(null),
        useRef<SVGSVGElement>(null),
        useRef<SVGSVGElement>(null)
    ];
    const inputRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const outputRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const staticCoordsRef = useRef<{
        inputs: Record<string, { x: number; y: number }>;
        outputs: Record<string, { x: number; y: number }>;
    }>({
        inputs: {},
        outputs: {}
    });

    const updateStaticCoords = () => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();

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

        staticCoordsRef.current = {
            inputs: inputsData,
            outputs: outputsData
        };
    };

    const updateCoords = () => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();

        const centerLeft = centerRefs.map(ref => {
            if (!ref.current) return { x: 0, y: 0 };
            const rect = ref.current.getBoundingClientRect();
            return {
                x: rect.left - containerRect.left,
                y: rect.top - containerRect.top + rect.height / 2
            };
        });

        const centerRight = centerRefs.map(ref => {
            if (!ref.current) return { x: 0, y: 0 };
            const rect = ref.current.getBoundingClientRect();
            return {
                x: rect.right - containerRect.left,
                y: rect.top - containerRect.top + rect.height / 2
            };
        });

        setCoords({
            inputs: staticCoordsRef.current.inputs,
            outputs: staticCoordsRef.current.outputs,
            centerLeft,
            centerRight
        });
    };

    useEffect(() => {
        updateStaticCoords();
        updateCoords();

        const observer = new ResizeObserver(() => {
            updateStaticCoords();
            updateCoords();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        const handleResizeOrScroll = () => {
            updateStaticCoords();
            updateCoords();
        };

        window.addEventListener('resize', handleResizeOrScroll);
        window.addEventListener('scroll', handleResizeOrScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResizeOrScroll);
            window.removeEventListener('scroll', handleResizeOrScroll);
        };
    }, []);

    useEffect(() => {
        let startTime = performance.now();
        let frameId: number;
        
        const animate = (time: number) => {
            updateCoords();
            if (time - startTime < 400) {
                frameId = requestAnimationFrame(animate);
            }
        };
        
        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [hoveredInput, activeInput, scrollActiveInput]);

    const activeFeatureId = hoveredInput || activeInput || scrollActiveInput;

    const getConnectorColor = (inputId: string) => {
        if (activeFeatureId === inputId) {
            const matched = inputs.find(i => i.id === inputId);
            return matched ? matched.gradientStop : '#c8caccff';
        }
        return '#c8caccff';
    };

    const isAnyFocused = activeFeatureId !== null;

    const getInputTargetCoord = (inputId: string) => {
        if (!isAnyFocused) return coords.centerLeft[2];
        const idx = inputs.findIndex(i => i.id === inputId);
        if (idx !== -1) {
            return coords.centerLeft[idx] || coords.centerLeft[2];
        }
        return coords.centerLeft[2];
    };

    const getOutputTargetCoord = (outputId: string) => {
        if (!isAnyFocused) return coords.centerRight[2];
        const activeCardIdx = activeFeatureId
            ? inputs.findIndex(i => i.id === activeFeatureId)
            : 2;
        return coords.centerRight[activeCardIdx] || coords.centerRight[2];
    };

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
                    const end = getInputTargetCoord(item.id);
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
                            strokeWidth={activeFeatureId === item.id ? '1.5' : '1'}
                            className={activeFeatureId === item.id ? 'flow-line-active' : 'flow-line'}
                        />
                    );
                })}

                {outputs.map(out => {
                    const start = getOutputTargetCoord(out.id);
                    const end = coords.outputs[out.id];
                    if (!start || !end) return null;

                    const cp1x = start.x + (end.x - start.x) / 2;
                    const cp1y = start.y;
                    const cp2x = start.x + (end.x - start.x) / 2;
                    const cp2y = end.y;

                    const activeColor = activeFeatureId
                        ? inputs.find(i => i.id === activeFeatureId)?.gradientStop
                        : null;

                    const strokeColor = activeColor || '#c8caccff';
                    const strokeWidth = isAnyFocused ? '1.5' : '1';
                    const className = isAnyFocused ? 'flow-line-active' : 'flow-line';

                    return (
                        <path
                            key={`line-out-${out.id}`}
                            d={`M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`}
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            className={className}
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
                        const isFocused = activeFeatureId === item.id;
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
                <div className="col-span-1 lg:col-span-2 flex items-center justify-center p-5 h-[340px] relative">
                    <div className="relative w-full max-w-[280px] h-[224px] flex items-center justify-center">
                        {[
                            { id: 'inventory', label: 'INVENTORY HUB' },
                            { id: 'payouts', label: 'SETTLEMENT CORE' },
                            { id: 'delivery', label: 'LOGISTICS PATH' },
                            { id: 'payments', label: 'TRANSACTIONS' },
                            { id: 'sellers', label: 'SELLER DASHBOARD' }
                        ].map((module, idx) => {
                            const isFocused = activeFeatureId === module.id;
                            
                            // Determine color
                            let activeColor: string | null = null;
                            if (isFocused) {
                                activeColor = inputs.find(i => i.id === module.id)?.gradientStop || null;
                            }

                            // Determine translateY positions:
                            // Collapsed: -16px, -8px, 0px, 8px, 16px
                            // Expanded: -100px, -50px, 0px, 50px, 100px
                            // If this card is hovered/active, we elevate it up by -20px for a 3D float look
                            const collapsedOffset = (idx - 2) * 8;
                            let expandedOffset = (idx - 2) * 52;
                            if (isFocused) {
                                expandedOffset -= 20;
                            }
                            const offset = isAnyFocused ? expandedOffset : collapsedOffset;

                            // Stacking order (zIndex):
                            // Top card in stack (idx 0) gets highest zIndex so it overlays cards below it.
                            // Active card floats to absolute front (zIndex 50).
                            const zIndex = isFocused ? 50 : 30 - idx;
                            const opacity = isAnyFocused ? (isFocused ? 1 : 0.35) : 1;

                            const style: React.CSSProperties = {
                                position: 'absolute',
                                transform: `translateY(${offset}px)`,
                                zIndex,
                                opacity,
                                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            };

                            return (
                                <div key={module.id} style={style}>
                                    <KloudCloudSVG
                                        activeColor={activeColor}
                                        centerRef={centerRefs[idx]}
                                        label={isAnyFocused ? module.label : 'KAARTX KLOUD'}
                                    />
                                </div>
                            );
                        })}
                    </div>
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
