import { useEffect, useRef, useState } from 'react';

// Path: top-right arm (red) → gentle arc → crossing at center (700,400) → tight left loop (teal) → crossing → gentle arc → bottom-right arm (blue)
const PATH = `
    M 1140 -200
    C 1100 100, 950 220, 800 340
    C 665 430, 558 472, 476 456
    C 398 442, 402 370, 476 350
    C 548 330, 655 382, 700 400
    C 752 424, 930 548, 1140 1000
    `;

// Mobile path: same shape scaled/shifted so the K loop lands at x≈200 (center of 400-wide viewport)
// Original loop center ≈ x:476, y:400  →  remapped to x:200, y:350 inside a 400×700 viewBox
const MOBILE_PATH = `
  M 540 -100
  C 510 60, 390 170, 320 240
  C 250 310, 218 328, 180 318
  C 145 308, 147 268, 180 258
  C 213 248, 263 272, 285 280
  C 310 286, 425 358, 540 520
`;

export default function BrandSnake() {
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
        const segmentLength = length * 0.23;
        const totalDash = length + segmentLength * 2;
        return {
            opacity,
            ...(blur ? { filter: `blur(${blur}px)` } : {}),
            strokeDasharray: `${segmentLength} ${totalDash}`,
            strokeDashoffset: segmentLength + 10,
            animation: 'heroSnake 5.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        };
    };

    const makeMobileAnimStyle = (length: number, opacity: number, blur?: number): React.CSSProperties => {
        if (length === 0) return { opacity: 0 };
        const segmentLength = length * 0.23;
        const totalDash = length + segmentLength * 2;
        return {
            opacity,
            ...(blur ? { filter: `blur(${blur}px)` } : {}),
            strokeDasharray: `${segmentLength} ${totalDash}`,
            strokeDashoffset: segmentLength + 10,
            animation: 'heroSnakeMobile 5.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        };
    };

    return (
        <>
            {/* ── Desktop SVG (hidden on mobile) ── */}
            <svg
                className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1400 800"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <defs>
                    {/*
                      Gradient anchored from path entry (top-right, RED)
                      to path exit (bottom-right, BLUE).
                      The loop (center-left) naturally falls at the teal midpoint.
                    */}
                    <linearGradient
                        id="hero-brand-gradient"
                        x1="1500" y1="-100" x2="1200" y2="1000"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#EE3E28" />
                        <stop offset="38%" stopColor="#F9AC42" />
                        <stop offset="62%" stopColor="#28deb4" />
                        <stop offset="100%" stopColor="#28A6DE" />
                    </linearGradient>
                </defs>

                {/* Glow layer */}
                <path d={PATH} stroke="url(#hero-brand-gradient)" strokeWidth="60" strokeLinecap="round" fill="none" style={makeAnimStyle(pathLength, 0.12, 22)} />
                {/* Mid body */}
                <path d={PATH} stroke="url(#hero-brand-gradient)" strokeWidth="32" strokeLinecap="round" fill="none" style={makeAnimStyle(pathLength, 0.10)} />
                {/* Bright spine */}
                <path d={PATH} stroke="url(#hero-brand-gradient)" strokeWidth="10" strokeLinecap="round" fill="none" style={makeAnimStyle(pathLength, 0.95)} ref={pathRef} />
            </svg>

            {/* ── Mobile SVG (hidden on sm+) ── */}
            <svg
                className="block md:hidden absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 700"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <defs>
                    <linearGradient
                        id="hero-brand-gradient-mobile"
                        x1="540" y1="-100" x2="400" y2="700"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#EE3E28" />
                        <stop offset="38%" stopColor="#F9AC42" />
                        <stop offset="62%" stopColor="#28deb4" />
                        <stop offset="100%" stopColor="#28A6DE" />
                    </linearGradient>
                </defs>

                {/* Glow layer */}
                <path d={MOBILE_PATH} stroke="url(#hero-brand-gradient-mobile)" strokeWidth="45" strokeLinecap="round" fill="none" style={makeMobileAnimStyle(mobilePathLength, 0.12, 18)} />
                {/* Mid body */}
                <path d={MOBILE_PATH} stroke="url(#hero-brand-gradient-mobile)" strokeWidth="24" strokeLinecap="round" fill="none" style={makeMobileAnimStyle(mobilePathLength, 0.10)} />
                {/* Bright spine */}
                <path d={MOBILE_PATH} stroke="url(#hero-brand-gradient-mobile)" strokeWidth="8" strokeLinecap="round" fill="none" style={makeMobileAnimStyle(mobilePathLength, 0.95)} ref={mobilePathRef} />
            </svg>

            {/* Desktop keyframes */}
            {pathLength > 0 && (
                <style>{`
                    @keyframes heroSnake {
                        0%   { stroke-dashoffset: ${pathLength * 0.23 + 20}; opacity: 0; }
                        7%   { opacity: 1; }
                        87%  { opacity: 1; }
                        100% { stroke-dashoffset: ${-(pathLength + pathLength * 0.23 + 20)}; opacity: 0; }
                    }
                `}</style>
            )}

            {/* Mobile keyframes */}
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
        </>
    );
}
