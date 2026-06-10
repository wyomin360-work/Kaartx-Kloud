import { useEffect, useRef, useState } from 'react';

// Desktop path: top-right arm → K loop (center-left) → bottom-right arm
const DESKTOP_PATH = `
    M 1140 -200
    C 1100 100, 950 220, 800 340
    C 665 430, 558 472, 476 456
    C 398 442, 402 370, 476 350
    C 548 330, 655 382, 700 400
    C 752 424, 930 548, 1140 1000
    `;

// Mobile path: same shape remapped so K loop lands at x≈200 (center of 400-wide portrait canvas)
const MOBILE_PATH = `
    M 540 -100
    C 510 60, 420 140, 340 230
    C 268 300, 218 328, 180 318
    C 145 308, 147 268, 180 258
    C 213 248, 263 272, 285 280
    C 310 290, 395 355, 540 620
    `;

export default function HeroV2_2() {
    const pathRef = useRef<SVGPathElement>(null);
    const mobilePathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);
    const [mobilePathLength, setMobilePathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }
        if (mobilePathRef.current) {
            setMobilePathLength(mobilePathRef.current.getTotalLength());
        }
    }, []);

    const makeAnimStyle = (length: number, opacity: number, blur?: number): React.CSSProperties => {
        if (length === 0) return { opacity: 0 };
        const seg = length * 0.23;
        const total = length + seg * 2;
        return {
            opacity,
            ...(blur ? { filter: `blur(${blur}px)` } : {}),
            strokeDasharray: `${seg} ${total}`,
            strokeDashoffset: seg + 10,
            animation: 'heroSnake 5.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        };
    };

    const makeMobileAnimStyle = (length: number, opacity: number, blur?: number): React.CSSProperties => {
        if (length === 0) return { opacity: 0 };
        const seg = length * 0.23;
        const total = length + seg * 2;
        return {
            opacity,
            ...(blur ? { filter: `blur(${blur}px)` } : {}),
            strokeDasharray: `${seg} ${total}`,
            strokeDashoffset: seg + 10,
            animation: 'heroSnakeMobile 5.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        };
    };

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-[#fafaf8] h-[100dvh]"
        >
            {/* Background atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.13] blur-[200px]" />
                <div className="absolute right-[-80px] top-[-60px] h-[450px] w-[450px] rounded-full bg-orange-400/[0.09] blur-[160px]" />
                <div className="absolute left-[-60px] bottom-[-40px] h-[400px] w-[400px] rounded-full bg-sky-400/[0.10] blur-[160px]" />
                {/* dot texture */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
                        backgroundSize: '22px 22px',
                    }}
                />
            </div>

            {/* ── Desktop Brand snake (hidden on mobile) ── */}
            <svg
                className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1400 800"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <defs>
                    <linearGradient id="hero-brand-gradient" x1="1500" y1="-100" x2="1200" y2="1000" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#EE3E28" />
                        <stop offset="38%" stopColor="#F9AC42" />
                        <stop offset="62%" stopColor="#28deb4" />
                        <stop offset="100%" stopColor="#28A6DE" />
                    </linearGradient>
                </defs>
                <path d={DESKTOP_PATH} stroke="url(#hero-brand-gradient)" strokeWidth="60" strokeLinecap="round" fill="none" style={makeAnimStyle(pathLength, 0.12, 22)} />
                <path d={DESKTOP_PATH} stroke="url(#hero-brand-gradient)" strokeWidth="32" strokeLinecap="round" fill="none" style={makeAnimStyle(pathLength, 0.10)} />
                <path d={DESKTOP_PATH} stroke="url(#hero-brand-gradient)" strokeWidth="10" strokeLinecap="round" fill="none" style={makeAnimStyle(pathLength, 0.95)} ref={pathRef} />
            </svg>

            {/* ── Mobile Brand snake (hidden on sm+) ── */}
            <svg
                className="block sm:hidden absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 700"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <defs>
                    <linearGradient id="hero-brand-gradient-mobile" x1="540" y1="-100" x2="400" y2="700" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#EE3E28" />
                        <stop offset="38%" stopColor="#F9AC42" />
                        <stop offset="62%" stopColor="#28deb4" />
                        <stop offset="100%" stopColor="#28A6DE" />
                    </linearGradient>
                </defs>
                <path d={MOBILE_PATH} stroke="url(#hero-brand-gradient-mobile)" strokeWidth="45" strokeLinecap="round" fill="none" style={makeMobileAnimStyle(mobilePathLength, 0.12, 18)} />
                <path d={MOBILE_PATH} stroke="url(#hero-brand-gradient-mobile)" strokeWidth="24" strokeLinecap="round" fill="none" style={makeMobileAnimStyle(mobilePathLength, 0.10)} />
                <path d={MOBILE_PATH} stroke="url(#hero-brand-gradient-mobile)" strokeWidth="8" strokeLinecap="round" fill="none" style={makeMobileAnimStyle(mobilePathLength, 0.95)} ref={mobilePathRef} />
            </svg>

            {/* Keyframes */}
            {pathLength > 0 && (
                <style>{`
                    @keyframes heroSnake {
                        0%   { stroke-dashoffset: ${pathLength * 0.23 + 20}; opacity: 0; }
                        7%   { opacity: 1; }
                        87%  { opacity: 1; }
                        100% { stroke-dashoffset: ${-(pathLength + pathLength * 0.23 + 20)}; opacity: 0; }
                    }
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(18px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    .hero-fadein { animation: fadeUp 0.6s ease both; }
                `}</style>
            )}
            {mobilePathLength > 0 && (
                <style>{`
                    @keyframes heroSnakeMobile {
                        0%   { stroke-dashoffset: ${mobilePathLength * 0.23 + 20}; opacity: 0; }
                        7%   { opacity: 1; }
                        87%  { opacity: 1; }
                        100% { stroke-dashoffset: ${-(mobilePathLength + mobilePathLength * 0.23 + 20)}; opacity: 0; }
                    }
                `}</style>
            )}

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 text-center backdrop-blur-sm">
                <div className="w-full h-[70dvh] flex flex-col mx-auto items-center justify-center">
                    <h1 className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight">Your Entire Marketplace</h1>
                    <h1 className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight">In One Cart</h1>
                </div>
                {/* Stats */}
                <div className="hero-fadein mt-14 flex flex-wrap items-center justify-center divide-x divide-black/10" style={{ animationDelay: '0.54s' }}>
                    {[
                        { value: '500+', label: 'Stores' },
                        { value: '10K+', label: 'Products' },
                        { value: 'Fast', label: 'Delivery' },
                    ].map(({ value, label }) => (
                        <div key={label} className="px-7 text-center">
                            <div className="text-2xl font-semibold tracking-[-0.03em] text-[#1a1a18]">{value}</div>
                            <div className="mt-0.5 text-[11px] uppercase tracking-[0.06em] text-neutral-400">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}