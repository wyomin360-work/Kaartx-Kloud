import { 
  Star,
  Monitor, Shirt, ShoppingCart, Gamepad2, 
  Smartphone, Globe, Building2,
  Cloud, Cpu, Zap, Database, Truck, Code, Boxes,
  Coffee, Heart, BookOpen, Wrench, Store, LayoutDashboard,
  User, Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, type ReactNode } from "react";
import { Button } from "./ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import hero203511 from "@heroimages/Screenshot from 2026-04-29 20-35-11.png";
import hero203531 from "@heroimages/Screenshot from 2026-04-29 20-35-31.png";
import hero203548 from "@heroimages/Screenshot from 2026-04-29 20-35-48.png";
import hero203601 from "@heroimages/Screenshot from 2026-04-29 20-36-01.png";
import hero203631 from "@heroimages/Screenshot from 2026-04-29 20-36-31.png";

/** All screenshots in repo root `heroimages/` (bundled URLs). */
export const HERO_SCREENSHOTS = [
  hero203511,
  hero203531,
  hero203548,
  hero203601,
  hero203631,
] as const;

/** Three-window hero: catalog / storefront / checkout. */
const STACK_LEFT = {
  src: hero203631,
  urlHint: "kaartx — catalog",
  alt: "Kaartx categories",
};
const STACK_CENTER = {
  src: hero203511,
  urlHint: "kaartx kloud — storefront",
  alt: "Kaartx storefront",
};
const STACK_RIGHT = {
  src: hero203548,
  urlHint: "kaartx — checkout",
  alt: "Kaartx cart",
};

/** Center / mobile: full screenshot strip height. */
const HERO_IMAGE_FRAME =
  "relative h-[200px] w-full overflow-hidden bg-white rounded-xl border border-black/10 sm:h-[300px] md:h-[340px] lg:h-[360px]";

/** Side panels: ~20% shorter image area than center; row uses items-center so they align to the middle card. */
const HERO_SIDE_IMAGE_FRAME =
  "relative h-[160px] w-full overflow-hidden bg-white rounded-xl border border-black/10 sm:h-[240px] md:h-[272px] lg:h-[288px]";

const HERO_DOT_CLOUD_COUNT = 96;

/** Dots drift from a loose field into soft “cloud” puffs (Kloud), hold, then scatter again. */
function HeroDotCloudBackdrop() {
  const dots = useMemo(
    () =>
      Array.from({ length: HERO_DOT_CLOUD_COUNT }, (_, i) => {
        const scatterL = ((i * 37 + (i * i) % 17) % 880) / 10 + 3;
        const scatterT = ((i * 59 + (i * 23) % 19) % 820) / 10 + 5;
        const hubs = [
          { lx: 36, ty: 46 },
          { lx: 48, ty: 42 },
          { lx: 58, ty: 48 },
          { lx: 46, ty: 56 },
        ] as const;
        const hub = hubs[i % 4];
        const cloudL = Math.min(93, Math.max(7, hub.lx + Math.sin(i * 0.52) * 18));
        const cloudT = Math.min(90, Math.max(10, hub.ty + Math.cos(i * 0.44) * 14 + (i % 4) * 2.5));
        return {
          scatterL,
          scatterT,
          cloudL,
          cloudT,
          duration: 14 + (i % 9) * 0.35,
          delay: (i % 18) * 0.08,
          sizePx: 2 + (i % 3),
        };
      }),
    [],
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-sky-500/[0.42] shadow-[0_0_6px_rgba(14,165,233,0.25)]"
          style={{
            width: d.sizePx,
            height: d.sizePx,
            left: `${d.scatterL}%`,
            top: `${d.scatterT}%`,
          }}
          animate={{
            left: [`${d.scatterL}%`, `${d.cloudL}%`, `${d.cloudL}%`, `${d.scatterL}%`],
            top: [`${d.scatterT}%`, `${d.cloudT}%`, `${d.cloudT}%`, `${d.scatterT}%`],
            scale: [1, 1.35, 1.2, 1],
            opacity: [0.22, 0.55, 0.5, 0.22],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
            times: [0, 0.32, 0.52, 1],
          }}
        />
      ))}
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-[1.125rem] sm:w-[1.125rem]"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function TrustBadge({
  logo,
  score,
  label,
}: {
  logo: ReactNode;
  score: string;
  label: string;
}) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="flex shrink-0 items-center justify-center">
        {logo}
      </div>
      <div className="flex flex-col justify-center gap-0.5">
        <StarRow />
        <span className="text-left text-sm font-medium text-slate-600">
          {score} on {label}
        </span>
      </div>
    </div>
  );
}

/** Large “Kloud” filled with a tight dot halftone (reads as many dots forming the word). */
function KloudDotWordmark() {
  const dotGridStyle = {
    backgroundImage:
      "radial-gradient(circle at 50% 50%, rgb(14 165 233) 1.35px, transparent 1.4px), radial-gradient(circle at 50% 50%, rgb(56 189 248) 0.85px, transparent 0.9px)",
    backgroundSize: "5px 5px, 3px 3px",
    backgroundPosition: "0 0, 2.5px 2.5px",
    WebkitBackgroundClip: "text" as const,
    backgroundClip: "text" as const,
  };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[min(100%,28rem)] shrink-0 px-2 text-center md:mx-0 md:max-w-none md:text-left"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="font-display pointer-events-none absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(3rem,14vw,7.5rem)] font-black leading-none tracking-tighter text-sky-400/30 blur-md md:left-0 md:translate-x-0"
        aria-hidden
      >
        Kloud
      </span>
      <span
        className="font-display relative block whitespace-nowrap text-[clamp(3rem,14vw,7.5rem)] font-black leading-none tracking-tighter text-transparent"
        style={dotGridStyle}
        data-testid="text-kloud-wordmark"
      >
        Kloud
      </span>
      {/* Extra floating specks around the word for a denser “cloud of dots” feel */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible" aria-hidden>
        {[
          [12, 8, 0.35],
          [88, 18, 0.28],
          [6, 72, 0.32],
          [94, 65, 0.25],
          [48, 4, 0.3],
          [52, 96, 0.28],
        ].map(([lx, ty, op], i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-sky-500"
            style={{
              left: `${lx}%`,
              top: `${ty}%`,
              opacity: op,
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [op, op + 0.25, op] }}
            transition={{
              duration: 3.2 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function StackWindow({
  src,
  alt,
  objectPosition = "object-center",
  imageAreaClassName,
  imageObjectFit = "contain",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  /** When set, replaces default aspect/min-height mobile frame (e.g. desktop triptych). */
  imageAreaClassName?: string;
  /** All images use cover to fill the view completely. */
  imageObjectFit?: "contain" | "cover";
}) {
  const frameClass =
    imageAreaClassName ??
    "relative aspect-[16/11] w-full min-h-[220px] overflow-hidden bg-white sm:min-h-[260px] md:min-h-[280px]";

  const objectFitClass = imageObjectFit === "cover" ? "object-cover" : "object-contain";

  return (
    <div className={frameClass}>
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${objectFitClass} ${objectPosition}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

const HEX_MAP: Record<string, string> = {
  indigo: "#4f46e5",
  violet: "#7c3aed",
  emerald: "#10b981",
  sky: "#0ea5e9",
  blue: "#3b82f6",
  teal: "#14b8a6",
  purple: "#9333ea",
};

const SOLID_COLOR_MAP: Record<string, string> = {
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  emerald: "bg-emerald-500",
  sky: "bg-sky-500",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  purple: "bg-purple-500",
};

function MiniStorefront({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-1 w-full h-full p-2">
      <div className="flex items-center justify-between border-b border-slate-100 pb-1">
        <div className={`w-12 h-2 rounded-sm ${SOLID_COLOR_MAP[color]} opacity-60`} />
        <div className="flex gap-1">
           <div className="w-3 h-1.5 rounded-sm bg-slate-200" />
           <div className="w-3 h-1.5 rounded-sm bg-slate-200" />
        </div>
      </div>
      <div className="w-full h-8 rounded-md mt-1 relative overflow-hidden" style={{ background: `linear-gradient(90deg, ${HEX_MAP[color]}33, ${HEX_MAP[color]}0D)` }}>
         <div className={`absolute left-2 top-2 w-1/3 h-1.5 rounded-sm ${SOLID_COLOR_MAP[color]} opacity-50`} />
         <div className={`absolute left-2 top-4 w-1/4 h-1.5 rounded-sm ${SOLID_COLOR_MAP[color]} opacity-30`} />
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-1.5 flex-1">
        {[1,2,3].map(i => <div key={i} className="bg-slate-100 rounded-md h-full w-full" />)}
      </div>
    </div>
  )
}

function MiniAdminPanel({ color }: { color: string }) {
  return (
    <div className="flex w-full h-full p-1.5 gap-1.5 bg-slate-50">
      <div className="w-1/4 h-full bg-white border border-slate-200/60 rounded flex flex-col gap-1.5 p-1.5 shadow-sm">
        <div className={`w-full h-2 rounded-sm ${SOLID_COLOR_MAP[color]} opacity-60 mb-1`} />
        {[1,2,3,4].map(i => <div key={i} className="w-full h-1.5 rounded-[1px] bg-slate-100" />)}
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex justify-between items-center bg-white border border-slate-200/60 rounded p-1 shadow-sm h-5">
          <div className="w-1/3 h-1.5 rounded-[1px] bg-slate-200" />
          <div className="w-4 h-4 rounded-full bg-slate-100" />
        </div>
        <div className="flex gap-1.5 h-10">
          <div className="flex-1 rounded bg-white border border-slate-200/60 shadow-sm flex items-end p-1">
             <div className={`w-full h-[60%] ${SOLID_COLOR_MAP[color]} opacity-40 rounded-[2px]`} />
          </div>
          <div className="flex-[1.5] rounded bg-white border border-slate-200/60 shadow-sm flex items-end p-1 gap-0.5">
             {[30, 60, 40, 80, 50, 70].map((h, i) => <div key={i} className={`flex-1 ${SOLID_COLOR_MAP[color]} opacity-50 rounded-[1px]`} style={{ height: `${h}%` }} />)}
          </div>
        </div>
        <div className="flex-1 bg-white border border-slate-200/60 rounded shadow-sm flex flex-col gap-1 p-1">
           <div className="w-1/4 h-1.5 rounded-[1px] bg-slate-200" />
           <div className="w-full h-1 rounded-[1px] bg-slate-100" />
           <div className="w-full h-1 rounded-[1px] bg-slate-100" />
        </div>
      </div>
    </div>
  )
}

function MiniMobileApp({ color }: { color: string }) {
  return (
    <div className="flex justify-center items-center w-full h-full py-1.5 bg-slate-50/50">
      <div className="w-16 sm:w-20 h-full bg-white border-[3px] border-slate-800 rounded-xl sm:rounded-[1.25rem] shadow-md flex flex-col overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-slate-800 rounded-b-md z-10" />
        <div className={`h-8 sm:h-10 w-full ${SOLID_COLOR_MAP[color]} opacity-20`} />
        <div className="flex-1 flex flex-col gap-1.5 p-1.5">
          <div className="w-full h-8 sm:h-10 rounded-md bg-slate-100 flex items-center justify-center">
             <div className="w-1/2 h-1.5 bg-slate-200 rounded-full" />
          </div>
          <div className="flex gap-1.5">
            <div className="w-1/2 h-8 sm:h-10 rounded-md bg-slate-100" />
            <div className="w-1/2 h-8 sm:h-10 rounded-md bg-slate-100" />
          </div>
        </div>
        <div className="h-4 sm:h-5 border-t border-slate-100 flex justify-around items-center px-1">
          {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-200" />)}
        </div>
      </div>
    </div>
  )
}

const RAW_INPUTS = [
  { icon: ShoppingCart, title: 'Grocery Store', top: 15, delay: 0, duration: 12 },
  { icon: Shirt, title: 'Fashion Brand', top: 28, delay: -10, duration: 12 },
  { icon: Building2, title: 'B2B Supplier', top: 41, delay: -8, duration: 12 },
  { icon: Coffee, title: 'Restaurant', top: 54, delay: -6, duration: 12 },
  { icon: Monitor, title: 'Electronics', top: 67, delay: -4, duration: 12 },
  { icon: Heart, title: 'Pharmacy', top: 80, delay: -2, duration: 12 },
];

const STRUCTURED_OUTPUTS = [
  { type: 'mobile', title: 'Grocery App', subtitle: 'Mobile iOS', color: 'emerald', delay: 0, duration: 12 },
  { type: 'storefront', title: 'Fashion Web', subtitle: 'Storefront', color: 'violet', delay: -10, duration: 12 },
  { type: 'admin', title: 'B2B Dashboard', subtitle: 'Admin Panel', color: 'indigo', delay: -8, duration: 12 },
  { type: 'mobile', title: 'Food Delivery', subtitle: 'Delivery App', color: 'teal', delay: -6, duration: 12 },
  { type: 'storefront', title: 'Tech Store', subtitle: 'Marketplace', color: 'blue', delay: -4, duration: 12 },
  { type: 'admin', title: 'Pharmacy B2B', subtitle: 'Vendor System', color: 'rose', delay: -2, duration: 12 },
];

function getColor(name: string) {
  return HEX_MAP[name] || "#3b82f6";
}

function MultiVendorAnimation() {
  return (
    <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:w-[900px] xl:w-[1000px] lg:h-[650px] xl:h-[700px] flex items-center justify-center pointer-events-none select-none overflow-visible lg:translate-x-[5%] xl:translate-x-[10%]">
       
       {/* Left Side Label */}
       <div className="absolute top-20 left-4 hidden lg:flex items-center gap-3 z-0 opacity-80">
          <div className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-white/60 px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm backdrop-blur-sm">Business Types</div>
          <div className="h-[1px] w-16 bg-slate-300" />
       </div>

       {/* Showcase Container Panel */}
       <div className="absolute top-[30px] bottom-[30px] right-0 w-[420px] xl:w-[460px] bg-slate-50/70 border border-slate-200/80 rounded-l-3xl backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.06)] hidden lg:flex flex-col p-6 xl:p-8 z-20 border-r-0 pointer-events-auto">
          <div className="flex items-center gap-3 mb-5 xl:mb-6 border-b border-slate-200/80 pb-4 shrink-0">
             <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
             <div className="text-[10px] xl:text-[11px] font-black uppercase tracking-widest text-slate-700 whitespace-nowrap">Generated Commerce Applications</div>
          </div>
          <div className="grid grid-cols-2 gap-4 xl:gap-5 w-full">
             {STRUCTURED_OUTPUTS.map((p, i) => (
                <StaticStructuredOutput key={`out-${i}`} type={p.type} title={p.title} subtitle={p.subtitle} color={p.color} delay={p.delay} duration={p.duration} index={i} />
             ))}
          </div>
       </div>

       {RAW_INPUTS.map((p, i) => (
         <RawInput key={`raw-${i}`} icon={p.icon} title={p.title} top={p.top} delay={p.delay} duration={p.duration} />
       ))}

       <div className="absolute top-1/2 left-[15%] z-30 flex h-64 w-64 lg:h-[300px] lg:w-[300px] xl:h-[320px] xl:w-[320px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
         {/* Label */}
         <div className="absolute -top-6 lg:-top-8 text-[9px] lg:text-[11px] font-black uppercase tracking-widest text-blue-600 bg-white/95 px-4 py-1.5 rounded-full border border-blue-200/60 shadow-lg backdrop-blur-md whitespace-nowrap z-40">Kaartx Kloud Infrastructure </div>
         
         <motion.div className="absolute inset-[-10%] rounded-full bg-blue-500/10 blur-[40px]" animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
         <motion.div className="absolute inset-[10%] rounded-full bg-sky-400/20 blur-2xl" animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
         
         <div className="relative flex h-48 w-48 lg:h-[220px] lg:w-[220px] xl:h-[240px] xl:w-[240px] flex-col items-center justify-center rounded-full border border-slate-200/80 bg-white/95 p-4 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
           <motion.div className="absolute inset-[-10%] rounded-full border-[2px] border-dashed border-sky-400/40" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
           <motion.div className="absolute inset-[-20%] rounded-full border border-blue-300/30" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
           <motion.div className="absolute inset-[-30%] rounded-full border-[2px] border-dotted border-indigo-400/20" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} />
           
           <div className="z-20 flex flex-col items-center justify-center text-center gap-3 lg:gap-4">
             <div className="flex h-16 w-16 lg:h-16 lg:w-16 xl:h-20 xl:w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-blue-600 via-blue-500 to-sky-400 text-white shadow-2xl shadow-blue-500/40">
               <Cloud className="h-8 w-8 xl:h-10 xl:w-10" />
             </div>
             <div>
               <div className="text-sm lg:text-xl font-black tracking-tight text-slate-800 leading-none mt-1">Kaartx Kloud</div>

             </div>
           </div>
         </div>
       </div>

    </div>
  )
}

function RawInput({ icon: Icon, title, top, delay, duration }: any) {
  return (
    <motion.div
      className="absolute z-10 flex items-center gap-2 lg:gap-3"
      initial={{ left: "-25%", top: `${top}%`, opacity: 0, scale: 0.6, x: "-50%", y: "-50%" }}
      animate={{ 
         left: ["-25%", "-10%", "5%", "15%"], 
         top: [`${top}%`, `${top}%`, "50%", "50%"], 
         opacity: [0, 1, 1, 0], 
         scale: [0.6, 1, 0.8, 0.2] 
      }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut", times: [0, 0.1, 0.85, 1] }}
    >
      <div className="flex h-7 w-7 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-200/80 shadow-sm text-slate-500 relative">
        <User className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
        <div className="absolute -top-1 -right-1 bg-amber-100 text-amber-500 rounded-full p-0.5 shadow-sm border border-amber-200">
           <Lightbulb className="h-2 w-2" />
        </div>
      </div>
      <div className="relative rounded-lg border border-slate-200/60 bg-white/95 px-2.5 py-1.5 shadow-sm backdrop-blur-sm flex items-center gap-2">
        {/* Chat bubble tail */}
        <div className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-slate-200/60 bg-white/95" />
        <div className="flex items-center gap-1.5 relative z-10 text-[9px] lg:text-[10px] font-bold text-slate-700">
           <Icon className="h-3 w-3 text-blue-500" />
           <span>{title}</span>
        </div>
      </div>
    </motion.div>
  )
}

function StaticStructuredOutput({ type, title, subtitle, color, delay, duration, index }: any) {
  const startX = index % 2 === 0 ? -480 : -700;
  
  return (
    <motion.div
      className="flex flex-col w-full h-[136px] xl:h-[160px] origin-center z-10 relative"
      initial={{ opacity: 0, x: startX, scale: 0.2 }}
      animate={{ 
         opacity: [0, 1, 1, 0], 
         x: [startX, 0, 0, 0], 
         scale: [0.2, 1, 1, 0.95] 
      }}
      transition={{ 
         duration, 
         repeat: Infinity, 
         delay, 
         ease: "easeOut", 
         times: [0, 0.15, 0.9, 1] 
      }}
    >
      <motion.div 
         className="flex flex-col w-full h-full rounded-xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/50 backdrop-blur-md overflow-hidden cursor-pointer"
         whileHover={{ y: -4, scale: 1.02 }}
         transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col px-2 py-1.5 border-b border-slate-100/80 bg-slate-50/80 shrink-0">
        <div className="flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full ${SOLID_COLOR_MAP[color]}`} />
           <div className="text-[10px] font-bold text-slate-800 tracking-tight truncate leading-none">{title}</div>
        </div>
        <div className="text-[8px] text-slate-500 font-bold uppercase tracking-wider mt-1 ml-4">{subtitle}</div>
      </div>
      <div className="flex-1 bg-white relative overflow-hidden">
        {type === 'storefront' && <MiniStorefront color={color} />}
        {type === 'admin' && <MiniAdminPanel color={color} />}
        {type === 'mobile' && <MiniMobileApp color={color} />}
      </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero({ onOpenSignup }: { onOpenSignup?: () => void }) {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-x-clip overflow-y-visible bg-white pt-12 sm:pt-16 md:pt-24 pb-5"
    >
      {/* Soft animated backdrop — slow gradient drift + floating orbs (standard landing-page motion) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute inset-0 bg-white"
          animate={{
            background: [
              "radial-gradient(ellipse 92% 72% at 50% 100%, rgba(56, 189, 248, 0.14), transparent 58%), radial-gradient(ellipse 56% 46% at 50% 0%, rgba(147, 197, 253, 0.12), transparent 55%)",
              "radial-gradient(ellipse 92% 72% at 48% 99%, rgba(56, 189, 248, 0.16), transparent 58%), radial-gradient(ellipse 56% 46% at 52% 1%, rgba(147, 197, 253, 0.14), transparent 55%)",
              "radial-gradient(ellipse 92% 72% at 52% 101%, rgba(56, 189, 248, 0.15), transparent 58%), radial-gradient(ellipse 56% 46% at 48% -1%, rgba(147, 197, 253, 0.13), transparent 55%)",
              "radial-gradient(ellipse 92% 72% at 50% 100%, rgba(56, 189, 248, 0.14), transparent 58%), radial-gradient(ellipse 56% 46% at 50% 0%, rgba(147, 197, 253, 0.12), transparent 55%)",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-[18%] top-[22%] h-[min(55vw,28rem)] w-[min(70vw,36rem)] rounded-full bg-sky-300/25 blur-3xl"
          animate={{ x: [0, 28, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-[12%] top-[35%] h-[min(50vw,26rem)] w-[min(65vw,34rem)] rounded-full bg-blue-200/30 blur-3xl"
          animate={{ x: [0, -22, 0], y: [0, 14, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <HeroDotCloudBackdrop />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center mt-12 sm:mt-16 md:mt-20 lg:pb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl text-left"
          >
            <h1
              className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
              data-testid="text-hero-title"
            >
              Choose{" "}
              <span className="gradient-text">
                Kaartx Kloud
              </span>{" "}
              as your powerful commerce infrastructure platform
            </h1>

            <p className="mb-8 text-lg text-slate-600 sm:text-xl max-w-xl">
              Launch your own marketplace or SaaS applications in minutes. Kaartx Kloud powers vendors, storefronts, and commerce infrastructure with a scalable ecosystem.
            </p>

            <div className="mb-10 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onOpenSignup}
                size="lg"
                className="h-14 w-full sm:w-auto min-w-[200px] rounded-xl bg-blue-500 px-8 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/35"
                data-testid="button-hero-get-started"
              >
                Try for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToBooking}
                className="h-14 w-full sm:w-auto min-w-[160px] rounded-xl border-blue-200 bg-white px-8 text-lg font-semibold text-blue-600 hover:bg-blue-50"
                data-testid="button-hero-whatsapp"
              >
                Contact us
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-2xl lg:max-w-none mt-8 lg:mt-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
             <MultiVendorAnimation />
             <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-100/40 to-sky-100/40 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
