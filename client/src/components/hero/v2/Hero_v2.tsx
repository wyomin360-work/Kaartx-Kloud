import { useEffect, useRef, useState } from 'react';

export default function HeroV2() {
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }
    }, []);

    const segmentLength = pathLength * 0.22;
    const totalDash = pathLength + segmentLength * 2;

    // Same path repeated for all three layers
    const PATH = `
        M 1500 -60
        C 1240 20,  980 120, 780 260
        C 630 370,  540 450, 520 510
        C 500 575,  530 615, 590 608
        C 660 600,  720 545, 705 480
        C 688 412,  630 388, 570 405
        C 495 427,  460 500, 510 555
        C 560 610,  660 625, 790 595
        C 970 555,  1120 460, 1290 575
        C 1380 635, 1460 640, 1530 610
    `;

    const animStyle = (opacity: number, blur?: number): React.CSSProperties =>
        pathLength > 0
            ? {
                  opacity,
                  ...(blur ? { filter: `blur(${blur}px)` } : {}),
                  strokeDasharray: `${segmentLength} ${totalDash}`,
                  strokeDashoffset: segmentLength + 20,
                  animation: 'heroSnake 5.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
              }
            : { opacity: 0 };

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-white pt-24 md:pb-2 md:pt-32 lg:pb-3 lg:pt-36"
        >
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1400 800"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="hero-brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"   stopColor="#E84832" />
                        <stop offset="30%"  stopColor="#F5A623" />
                        <stop offset="62%"  stopColor="#5ABFAD" />
                        <stop offset="100%" stopColor="#00AEEF" />
                    </linearGradient>
                </defs>

                {/* Glow layer */}
                <path d={PATH} stroke="url(#hero-brand-gradient)"
                    strokeWidth="70" strokeLinecap="round" fill="none"
                    style={animStyle(0.18, 22)} />

                {/* Mid body */}
                <path d={PATH} stroke="url(#hero-brand-gradient)"
                    strokeWidth="38" strokeLinecap="round" fill="none"
                    style={animStyle(0.55)} />

                {/* Bright spine */}
                <path d={PATH} stroke="url(#hero-brand-gradient)"
                    strokeWidth="9" strokeLinecap="round" fill="none"
                    style={animStyle(1)} ref={pathRef} />
            </svg>

            {pathLength > 0 && (
                <style>{`
                    @keyframes heroSnake {
                        0%   { stroke-dashoffset: ${segmentLength + 20}; opacity: 0; }
                        6%   { opacity: 1; }
                        88%  { opacity: 1; }
                        100% { stroke-dashoffset: ${-(pathLength + segmentLength + 20)}; opacity: 0; }
                    }
                `}</style>
            )}

            <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
                <div className="container">
                    <div className="w-full h-[70dvh] flex flex-col mx-auto items-center justify-center">
                        <h1 className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight">Your Entire Marketplace</h1>
                        <h1 className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight">In One Cart</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}