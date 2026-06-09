import { useEffect, useRef, useState } from 'react';

export default function HeroV2() {
    const pathRef = useRef<SVGPathElement>(null);
    const glowPathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }
    }, []);

    const segmentLength = pathLength * 0.3;

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-white pt-24 md:pb-2 md:pt-32 lg:pb-3 lg:pt-36"
        >
            {/* Animated gradient snake stroke */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1400 800"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="hero-brand-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E84832" />
                        <stop offset="28%" stopColor="#F5A623" />
                        <stop offset="55%" stopColor="#5ABFAD" />
                        <stop offset="100%" stopColor="#00AEEF" />
                    </linearGradient>
                    <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="12" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Glow layer — softer, wider, behind */}
                <path
                    ref={glowPathRef}
                    d="M 1500 -100 C 1200 50, 900 200, 700 380 C 550 500, 380 540, 340 440 C 280 300, 450 220, 600 320 C 750 420, 680 560, 480 560 C 250 560, 50 720, -200 900"
                    stroke="url(#hero-brand-gradient)"
                    strokeWidth="50"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.25"
                    style={pathLength > 0 ? {
                        strokeDasharray: `${segmentLength} ${pathLength + segmentLength}`,
                        strokeDashoffset: segmentLength + 20,
                        animation: 'heroSnakeTravel 3.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                        filter: 'blur(16px)',
                    } : { opacity: 0 }}
                />

                {/* Main crisp stroke */}
                <path
                    ref={pathRef}
                    d="M 1500 -100 C 1200 50, 900 200, 700 380 C 550 500, 380 540, 340 440 C 280 300, 450 220, 600 320 C 750 420, 680 560, 480 560 C 250 560, 50 720, -200 900"
                    stroke="url(#hero-brand-gradient)"
                    strokeWidth="32"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                    style={pathLength > 0 ? {
                        strokeDasharray: `${segmentLength} ${pathLength + segmentLength}`,
                        strokeDashoffset: segmentLength + 20,
                        animation: 'heroSnakeTravel 3.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                    } : { opacity: 0 }}
                />
            </svg>

            {pathLength > 0 && (
                <style>{`
                    @keyframes heroSnakeTravel {
                        from {
                            stroke-dashoffset: ${segmentLength + 20};
                        }
                        to {
                            stroke-dashoffset: ${-(pathLength + 20)};
                        }
                    }
                `}</style>
            )}

            <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
                <div className="container ">
                   <div className=" w-full h-[70dvh] flex flex-col mx-auto item-center justify-center">
                     <h1 className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight">Your Entire Marketplace </h1>
                    <h1 className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight">In One Cart</h1>
                   </div>
                </div>  
            </div>
        </section>
    );
}