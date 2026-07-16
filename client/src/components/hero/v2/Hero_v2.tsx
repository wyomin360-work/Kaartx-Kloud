import StatsBar from '@/components/StatsBar';
import BrandSnake from './BrandSnake';
import LiquidGlass from './LiquidGlass';
import HeroHeadline from './HeroHeadline';

export default function Hero_V2() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden h-[100dvh]"
        >

            {/* ── Layer 1: Brand snake animation ─────────────────────── */}
            <BrandSnake />

            {/* ── Layer 2: Liquid glass material ─────────────────────── */}
            {/* <LiquidGlass /> */}

            {/* ── Layer 3: Content (etched onto the glass surface) ───── */}
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .hero-fadein { animation: fadeUp 0.6s ease both; }
            `}</style>

            <div className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 sm:px-8 text-center backdrop-blur-sm" style={{ zIndex: 10 }}>
                {/* Headline with animated C→K letter swap */}
                <HeroHeadline />
            </div>

            {/* Stats pinned to bottom of hero */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8" style={{ zIndex: 10 }}>
                <StatsBar />
            </div>
        </section>
    );
}