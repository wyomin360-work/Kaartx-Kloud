import BrandSnake from './BrandSnake';
import LiquidGlass from './LiquidGlass';

export default function HeroV2_2() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-[#fafaf8] h-[100dvh]"
        >
            {/* ── Layer 0: Background atmosphere ─────────────────────── */}
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

            {/* ── Layer 1: Brand snake animation ─────────────────────── */}
            <BrandSnake />

            {/* ── Layer 2: Liquid glass material ─────────────────────── */}
            <LiquidGlass />

            {/* ── Layer 3: Content (etched onto the glass surface) ───── */}
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .hero-fadein { animation: fadeUp 0.6s ease both; }
            `}</style>

            <div className="relative flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 text-center" style={{ zIndex: 10 }}>
                <div className="w-full h-[70dvh] flex flex-col mx-auto items-center justify-center">
                    {/* Text sits on the glass — slight text-shadow for the "etched" feel */}
                    <h1
                        className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight"
                        style={{ textShadow: '0 1px 12px rgba(255,255,255,0.55)' }}
                    >
                        Your Entire Marketplace
                    </h1>
                    <h1
                        className="text-center text-xl md:text-5xl lg:text-6xl font-medium leading-tight"
                        style={{ textShadow: '0 1px 12px rgba(255,255,255,0.55)' }}
                    >
                        In One Cart
                    </h1>
                </div>

                {/* Stats */}
                <div
                    className="hero-fadein mt-6 sm:mt-14 flex flex-wrap items-center justify-center divide-x divide-black/10"
                    style={{ animationDelay: '0.54s' }}
                >
                    {[
                        { value: '500+', label: 'Stores' },
                        { value: '10K+', label: 'Products' },
                        { value: 'Fast', label: 'Delivery' },
                    ].map(({ value, label }) => (
                        <div key={label} className="px-4 sm:px-7 text-center">
                            <div className="text-lg sm:text-2xl font-semibold tracking-[-0.03em] text-[#1a1a18]">{value}</div>
                            <div className="mt-0.5 text-[10px] sm:text-[11px] uppercase tracking-[0.06em] text-neutral-400">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}