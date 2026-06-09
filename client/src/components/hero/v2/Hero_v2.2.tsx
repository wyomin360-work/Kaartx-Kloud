import { useEffect, useRef, useState } from 'react';

export default function HeroV2_2() {
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }
    }, []);

    const segmentLength = pathLength * 0.23;
    const totalDash = pathLength + segmentLength * 2;

const PATH = `
    M 1650 -40

  
    C 1500 20, 1360 80, 1220 160

   
    C 1100 230, 1040 320, 1100 390
    C 1170 470, 1280 450, 1310 370
    C 1340 290, 1240 240, 1140 280

   
    C 980 340, 820 430, 700 520

  
    C 620 580, 610 670, 690 700
    C 780 735, 860 670, 845 590
    C 830 520, 740 500, 660 540

   
    C 560 600, 520 650, 480 700
    C 380 790, 240 820, 80 760

   
    C -40 710, -120 620, -70 550
    C -10 470, 90 500, 120 580
    C 150 650, 70 710, -30 700

   
    C -150 620, -220 500, -180 350
    C -130 180, -60 60, 50 -40

   
    C 140 -120, 260 -90, 280 20
    C 300 120, 210 170, 130 130
    C 40 90, 30 10, 100 -40

   
    C 260 -110, 500 -80, 760 20
    C 980 110, 1200 160, 1450 120
    C 1600 95, 1750 20, 1850 -40
`;


    const animStyle = (opacity: number, blur?: number): React.CSSProperties =>
        pathLength > 0
            ? {
                opacity,
                ...(blur ? { filter: `blur(${blur}px)` } : {}),
                strokeDasharray: `${segmentLength} ${totalDash}`,
                strokeDashoffset: segmentLength + 10,
                animation: 'heroSnake 8.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
            }
            : { opacity: 0 };

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

            {/* Brand snake */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1400 800"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <defs>
                    <linearGradient id="hero-brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EE3E28" />
                        <stop offset="50%" stopColor="#F9AC42" />
                        <stop offset="72%" stopColor="#28deb4ff" />
                        <stop offset="100%" stopColor="#28A6DE" />
                    </linearGradient>
                </defs>
                <path d={PATH} stroke="url(#hero-brand-gradient)" strokeWidth="52" strokeLinecap="round" fill="none" style={animStyle(0.12, 20)} />
                <path d={PATH} stroke="url(#hero-brand-gradient)" strokeWidth="26" strokeLinecap="round" fill="none" style={animStyle(0.10)} />
                <path d={PATH} stroke="url(#hero-brand-gradient)" strokeWidth="8" strokeLinecap="round" fill="none" style={animStyle(0.95)} ref={pathRef} />
            </svg>

            {pathLength > 0 && (
                <style>{`
                    @keyframes heroSnake {
                        0%   { stroke-dashoffset: ${segmentLength + 20}; opacity: 0; }
                        7%   { opacity: 1; }
                        87%  { opacity: 1; }
                        100% { stroke-dashoffset: ${-(pathLength + segmentLength + 20)}; opacity: 0; }
                    }
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(18px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    .hero-fadein { animation: fadeUp 0.6s ease both; }
                `}</style>
            )}

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 text-center backdrop-blur-md">
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