/**
 * LiquidGlass
 * A full-screen frosted glass overlay inspired by Apple's liquid glass material.
 * Sits between the background animation and foreground content so everything
 * beneath reads as if it's running behind a pane of wet, curved glass.
 *
 * Layers (bottom → top):
 *   1. Primary glass  – backdrop-filter blur + saturate + brightness
 *   2. Top specular   – bright 1.5 px line at the very top edge (glass rim)
 *   3. Upper face     – diffuse highlight band fading down
 *   4. Edge glints    – left/right thin highlights (refracted light from sides)
 *   5. Iridescent tint – brand-coloured chromatic sheen (screen blend)
 *   6. Vignette       – soft radial darkening at corners for depth/curvature
 */
export default function LiquidGlass() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 6 }}
        >
            {/* ── 1. Primary glass material ────────────────────────────── */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backdropFilter: 'blur(9px) saturate(1.55) brightness(1.05)',
                    WebkitBackdropFilter: 'blur(9px) saturate(1.55) brightness(1.05)',
                    background: 'linear-gradient(152deg, rgba(255,255,255,0.44) 0%, rgba(245,253,255,0.16) 48%, rgba(255,255,255,0.30) 100%)',
                    willChange: 'transform',
                }}
            />

            {/* ── 2. Top specular rim ──────────────────────────────────── */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '4%',
                    right: '4%',
                    height: '1.5px',
                    background:
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 15%, rgba(255,255,255,0.98) 42%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.98) 58%, rgba(255,255,255,0.55) 85%, transparent 100%)',
                }}
            />

            {/* ── 3. Upper face diffuse highlight ─────────────────────── */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background:
                        'linear-gradient(180deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.07) 55%, transparent 100%)',
                }}
            />

            {/* ── 4a. Left edge glint ──────────────────────────────────── */}
            <div
                style={{
                    position: 'absolute',
                    top: '8%',
                    bottom: '8%',
                    left: 0,
                    width: '90px',
                    background:
                        'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)',
                }}
            />

            {/* ── 4b. Right edge glint ─────────────────────────────────── */}
            <div
                style={{
                    position: 'absolute',
                    top: '8%',
                    bottom: '8%',
                    right: 0,
                    width: '90px',
                    background:
                        'linear-gradient(270deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)',
                }}
            />

            {/* ── 5. Brand iridescent chromatic tint ──────────────────── */}
            {/* A very subtle brand-colour wash that makes the glass feel
                alive — like it's refracting the colours from behind it.  */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(108deg, rgba(238,62,40,0.022) 0%, rgba(249,172,66,0.014) 25%, rgba(40,222,180,0.022) 62%, rgba(40,166,222,0.018) 100%)',
                    mixBlendMode: 'screen',
                }}
            />

            {/* ── 6. Depth vignette ─────────────────────────────────────── */}
            {/* Slight edge darkening imitates the curvature of a glass lens. */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse 105% 85% at 50% 38%, transparent 45%, rgba(0,0,0,0.04) 100%)',
                }}
            />
        </div>
    );
}
