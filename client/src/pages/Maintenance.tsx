import logoImage from '@assets/kloud_plain_blue_1770616738294.png';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col justify-between p-8 md:p-16 font-sans selection:bg-black selection:text-white overflow-hidden">

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[14vw] md:text-[16vw] leading-[0.85] font-black tracking-tighter text-[#111111] uppercase select-none">
          SITE<br />
          UPGRADE
        </h1>
      </div>

      {/* ── Footer ── */}
      <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-md">
          <p className="text-xl md:text-2xl font-medium text-[#111111] mb-4">
            We're giving the landing page <br className="hidden md:block" /> a little makeover.
          </p>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Come back later for the big reveal.<br />
            The dashboard and all active marketplaces<br />
            remain fully operational.
          </p>
        </div>

        <div className="flex flex-col items-end gap-5 text-right">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300">Contact</p>
            <p className="text-sm font-bold text-[#111111]">official@kloud.kaartx.com</p>
            <p className="text-sm font-bold text-[#111111]">+968 9820 9353</p>
          </div>
          <div className="grayscale opacity-30">
            <img src={logoImage} alt="Kloud" className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
