import { useEffect, useState } from 'react';

// Kept in sync with the heroSnake animation duration in BrandSnake.tsx
const DURATION = 7000;
const FADE_MS  = DURATION * 0.06; // ~420 ms cross-fade

export default function HeroHeadline() {
    // K is the resting state; C appears only during the ¼ → ¾ window of each cycle
    const [showK, setShowK] = useState(true);

    useEffect(() => {
        let t1: ReturnType<typeof setTimeout>;
        let t2: ReturnType<typeof setTimeout>;

        const runCycle = () => {
            t1 = setTimeout(() => setShowK(false), DURATION * 0.25);
            t2 = setTimeout(() => setShowK(true),  DURATION * 0.75);
        };

        runCycle();
        const cycle = setInterval(runCycle, DURATION);
        return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(cycle); };
    }, []);

    const letterTransition: React.CSSProperties = {
        display: 'inline-block',
        transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
    };

    return (
        <div className="w-full h-[70dvh] flex flex-col items-center justify-center gap-5">

            {/* ── Headlines ─────────────────────────────────────────────── */}
            <div className="flex flex-col items-center gap-1">
                <h1
                    className="text-center text-2xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight"
                    style={{ textShadow: '0 1px 12px rgba(255,255,255,0.55)' }}
                >
                    Your Entire Marketplace
                </h1>

                <h1
                    className="text-center text-2xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight"
                    style={{ textShadow: '0 1px 12px rgba(255,255,255,0.55)' }}
                >
                    In One{' '}
                    {/* Fixed-width wrapper keeps "art" from jumping as C↔K swap */}
                    <span style={{ display: 'inline-block', position: 'relative' }}>
                        {/* C — visible when snake is tracing the loop */}
                        <span
                            aria-hidden={showK}
                            style={{
                                ...letterTransition,
                                opacity:   showK ? 0 : 1,
                                transform: showK ? 'translateY(-6px) scale(0.88)' : 'translateY(0) scale(1)',
                                position:  showK ? 'absolute' : 'relative',
                                left: 0,
                            }}
                        >
                            C
                        </span>

                        {/* K — gradient-painted; shown when snake completes the loop */}
                        <span
                            aria-hidden={!showK}
                            style={{
                                ...letterTransition,
                                opacity:   showK ? 1 : 0,
                                transform: showK ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.88)',
                                position:  showK ? 'relative' : 'absolute',
                                left: 0,
                                background: 'linear-gradient(135deg, #EE3E28 0%, #F9AC42 35%, #28deb4 62%, #28A6DE 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0 0 10px rgba(40,222,180,0.4))',
                            }}
                        >
                            K
                        </span>
                    </span>
                    art
                </h1>
            </div>

            {/* ── Sub-text ──────────────────────────────────────────────── */}
            <p
                className="max-w-2xl text-center text-sm md:text-base leading-relaxed font-light"
                style={{ color: 'rgba(60, 90, 88, 0.72)' }}
            >
                Build the next big marketplace or grow your own brand.
                <br />
                Kloud gives ambitious builders every tool they need to own their success.
            </p>

        </div>
    );
}
