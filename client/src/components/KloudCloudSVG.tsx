import React from 'react';

interface KloudCloudSVGProps {
    activeColor: string | null;
    centerRef: React.RefObject<SVGSVGElement>;
    label?: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function KloudCloudSVG({ activeColor, centerRef, label, className, style }: KloudCloudSVGProps) {
    const isAct = !!activeColor;
    const strokeColor = isAct ? activeColor : '#cbd5e1';
    const strokeDasharray = isAct ? 'none' : '3,3';
    const extrusionColor = isAct ? activeColor : '#e2e8f0';
    const extrusionOpacity = isAct ? 0.35 : 0.5;
    
    // Cloud remains dynamically colored based on hover/active state
    const cloudStrokeColor = isAct ? activeColor : '#94a3b8';
    const cloudFillColor = isAct ? activeColor : '#edf0f7';
    const cloudFillOpacity = isAct ? 0.15 : 1.0;
    const cloudExtrusionColor = isAct ? activeColor : '#cbd5e1';
    const cloudExtrusionOpacity = isAct ? 0.75 : 0.85;

    // Pin base and cap
    const pinBaseColor = isAct ? activeColor : '#cbd5e1';
    const pinEllipseColor = isAct ? '#ffffff' : '#f8fafc';

    return (
        <svg
            ref={centerRef}
            width="100%"
            height="100%"
            viewBox="124 76 352 224"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`pulse-core w-full max-w-[280px] h-auto select-none pointer-events-none ${className || ''}`}
            style={style}
        >
            <defs>
                <style>{`
                    .transition-all-colors {
                        transition: fill 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                                    stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                                    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                                    fill-opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                `}</style>
                <linearGradient id="topCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
            </defs>

            {/* ==================== 3D CARD SIDE (EXTRUSION) ==================== */}
            {Array.from({ length: 17 }).map((_, i) => {
                const yOffset = 180 + (16 - i);
                return (
                    <g key={i} transform={`matrix(0.866, 0.5, -0.866, 0.5, 300, ${yOffset})`}>
                        <rect
                            x="-100"
                            y="-100"
                            width="200"
                            height="200"
                            rx="16"
                            fill={extrusionColor}
                            opacity={extrusionOpacity}
                            className="transition-all-colors"
                        />
                    </g>
                );
            })}

            {/* ==================== 3D OUTLINES (BOTTOM & EDGES) ==================== */}
            {/* Bottom face outline */}
            <g transform="matrix(0.866, 0.5, -0.866, 0.5, 300, 196)">
                <rect
                    x="-100"
                    y="-100"
                    width="200"
                    height="200"
                    rx="16"
                    fill="none"
                    stroke={strokeColor}
                    strokeDasharray={strokeDasharray}
                    strokeWidth="1.8"
                    className="transition-all-colors"
                />
            </g>
            {/* Vertical corner edges */}
            <line x1="126.8" y1="180" x2="126.8" y2="196" stroke={strokeColor} strokeDasharray={strokeDasharray} strokeWidth="1.8" className="transition-all-colors" />
            <line x1="473.2" y1="180" x2="473.2" y2="196" stroke={strokeColor} strokeDasharray={strokeDasharray} strokeWidth="1.8" className="transition-all-colors" />
            <line x1="300" y1="280" x2="300" y2="296" stroke={strokeColor} strokeDasharray={strokeDasharray} strokeWidth="1.8" className="transition-all-colors" />

            {/* ==================== TOP SURFACE ==================== */}
            <g transform="matrix(0.866, 0.5, -0.866, 0.5, 300, 180)">
                <rect
                    x="-100"
                    y="-100"
                    width="200"
                    height="200"
                    rx="16"
                    fill="url(#topCardGrad)"
                    stroke={strokeColor}
                    strokeWidth="1.8"
                    strokeDasharray="3,3"
                    className="transition-all-colors"
                />
            </g>

            {/* ==================== CORNER PINS / RIVETS ==================== */}
            <path d="M 150 180 A 4 2.2 0 0 0 158 180 L 158 182 A 4 2.2 0 0 1 150 182 Z" fill={pinBaseColor} className="transition-all-colors" />
            <ellipse cx="154" cy="180" rx="4" ry="2.2" fill={pinEllipseColor} stroke={pinBaseColor} strokeWidth="1" className="transition-all-colors" />

            <path d="M 442 180 A 4 2.2 0 0 0 450 180 L 450 182 A 4 2.2 0 0 1 442 182 Z" fill={pinBaseColor} className="transition-all-colors" />
            <ellipse cx="446" cy="180" rx="4" ry="2.2" fill={pinEllipseColor} stroke={pinBaseColor} strokeWidth="1" className="transition-all-colors" />

            <path d="M 296 96 A 4 2.2 0 0 0 304 96 L 304 98 A 4 2.2 0 0 1 296 98 Z" fill={pinBaseColor} className="transition-all-colors" />
            <ellipse cx="300" cy="96" rx="4" ry="2.2" fill={pinEllipseColor} stroke={pinBaseColor} strokeWidth="1" className="transition-all-colors" />

            <path d="M 296 264 A 4 2.2 0 0 0 304 264 L 304 266 A 4 2.2 0 0 1 296 266 Z" fill={pinBaseColor} className="transition-all-colors" />
            <ellipse cx="300" cy="264" rx="4" ry="2.2" fill={pinEllipseColor} stroke={pinBaseColor} strokeWidth="1" className="transition-all-colors" />

            {/* ==================== CLOUD ICON (3D) + LABEL ==================== */}
            <g transform="matrix(0.866, 0.5, -0.866, 0.5, 300, 180)">
                <g transform="translate(0,-1) scale(1.7) translate(-12,-12)" fill={cloudExtrusionColor} opacity={cloudExtrusionOpacity} className="transition-all-colors">
                    <path d="M19.35,10.04C18.67,6.59,15.64,4,12,4C9.11,4,6.6,5.64,5.35,8.04C2.34,8.36,0,10.91,0,14c0,3.31,2.69,6,6,6h13c2.76,0,5,-2.24,5,-5C24,12.36,21.95,10.22,19.35,10.04z" />
                </g>
                <g transform="translate(0,-4) scale(1.7) translate(-12,-12)" fill={cloudFillColor} fillOpacity={cloudFillOpacity} stroke={cloudStrokeColor} strokeDasharray="1.4,1.4" strokeWidth="1.4" className="transition-all-colors">
                    <path d="M19.35,10.04C18.67,6.59,15.64,4,12,4C9.11,4,6.6,5.64,5.35,8.04C2.34,8.36,0,10.91,0,14c0,3.31,2.69,6,6,6h13c2.76,0,5,-2.24,5,-5C24,12.36,21.95,10.22,19.35,10.04z" />
                </g>
                <text x="0" y="32" textAnchor="middle" fill="#131742" fontFamily="'Outfit', 'Inter', monospace, sans-serif" fontWeight="bold" fontSize="11" letterSpacing="1">{label || 'KAARTX KLOUD'}</text>
            </g>
        </svg>
    );
}
