/** Ambient background layer — brand-gradient blobs + dot texture. */
export default function BackgroundOverlay() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Brand-gradient atmosphere — same four stops as the snake stroke */}
            <div className="absolute right-[-60px] top-[-80px]  h-[500px] w-[500px] rounded-full blur-[180px]" style={{ background: 'rgba(238, 63, 40, 0.1)' }} />
            <div className="absolute left-[20%]  top-[10%]      h-[420px] w-[420px] rounded-full blur-[200px]" style={{ background: 'rgba(249, 173, 66, 0.1)' }} />
            <div className="absolute left-[-40px] top-[30%]     h-[480px] w-[480px] rounded-full blur-[180px]" style={{ background: 'rgba(40, 222, 180, 0.1)' }} />
            <div className="absolute left-[15%]  bottom-[-60px] h-[400px] w-[400px] rounded-full blur-[160px]" style={{ background: 'rgba(40, 167, 222, 0.1)' }} />
            {/* dot texture */}
            <div
                className="absolute inset-0 opacity-[0.022]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
                    backgroundSize: '22px 22px',
                }}
            />
        </div>
    );
}
