import { 
  Star,
  Monitor, Shirt, ShoppingCart, Gamepad2, 
  Globe, Building2,
  Cloud, Cpu, Zap, Database, Truck, Code, Boxes,
  Coffee, Heart, BookOpen, Wrench, Store, LayoutDashboard,
  User, Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, type ComponentType, type ReactNode } from "react";
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
  rose: "#f43f5e",
};

const SOLID_COLOR_MAP: Record<string, string> = {
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  emerald: "bg-emerald-500",
  sky: "bg-sky-500",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  purple: "bg-purple-500",
  rose: "bg-rose-500",
};

function MiniStorefront({ color, sourceTitle }: { color: string; sourceTitle?: string }) {
  const accent = getColor(color);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white">
      <div className="flex h-5 shrink-0 items-center gap-1 border-b border-slate-100 bg-white px-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        <div className="ml-1 h-1.5 flex-1 rounded-full bg-slate-100" />
      </div>
      <div
        className="relative flex h-12 shrink-0 flex-col justify-center overflow-hidden px-2"
        style={{ background: `linear-gradient(135deg, ${accent}24, ${accent}08 58%, #ffffff)` }}
      >
        <div className="h-1.5 w-16 max-w-[70%] rounded-full" style={{ backgroundColor: `${accent}80` }} />
        <div className="mt-1 h-1 w-10 rounded-full bg-white/80" />
        <div className="absolute right-2 top-2 grid h-8 w-8 grid-cols-2 gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="rounded-sm bg-white/75 shadow-sm" />
          ))}
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-1 p-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex min-h-0 flex-col overflow-hidden rounded bg-slate-50 ring-1 ring-slate-100">
            <div className="flex-1" style={{ background: `linear-gradient(145deg, ${accent}${i === 1 ? "30" : "1F"}, #f8fafc)` }} />
            <div className="space-y-0.5 p-1">
              <div className="h-1 rounded-full bg-slate-200" />
              <div className="h-1 w-2/3 rounded-full bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-4 shrink-0 items-center justify-between border-t border-slate-100 px-2">
        <span className="truncate text-[6px] font-black uppercase tracking-wide text-slate-400">{sourceTitle ?? "Store"}</span>
        <span className="h-1.5 w-5 rounded-full" style={{ backgroundColor: accent }} />
      </div>
    </div>
  )
}

function MiniAdminPanel({ color, sourceTitle }: { color: string; sourceTitle?: string }) {
  const accent = getColor(color);

  return (
    <div className="flex h-full w-full overflow-hidden bg-slate-50">
      <div className="flex w-[22%] shrink-0 flex-col gap-1 border-r border-slate-200/70 bg-white p-1">
        <div className="mb-1 h-2 rounded-sm" style={{ backgroundColor: accent }} />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-1.5 rounded-sm bg-slate-100" />
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 p-1.5">
        <div className="flex h-5 shrink-0 items-center justify-between rounded bg-white px-1.5 shadow-sm ring-1 ring-slate-100">
          <div className="h-1.5 w-12 max-w-[55%] rounded-full bg-slate-200" />
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: `${accent}26` }} />
        </div>
        <div className="grid h-9 shrink-0 grid-cols-3 gap-1">
          {[58, 74, 42].map((h, i) => (
            <div key={i} className="flex items-end rounded bg-white p-1 shadow-sm ring-1 ring-slate-100">
              <div className="w-full rounded-sm" style={{ height: `${h}%`, backgroundColor: `${accent}${i === 1 ? "8A" : "55"}` }} />
            </div>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-0.5 rounded bg-white p-1 shadow-sm ring-1 ring-slate-100">
          <div className="mb-0.5 flex items-center justify-between">
            <span className="h-1.5 w-8 rounded-full bg-slate-200" />
            <span className="h-1.5 w-3 rounded-full" style={{ backgroundColor: `${accent}70` }} />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="grid grid-cols-[1fr_0.7fr_0.45fr] gap-1">
              <span className="h-1 rounded-full bg-slate-100" />
              <span className="h-1 rounded-full bg-slate-100" />
              <span className="h-1 rounded-full" style={{ backgroundColor: `${accent}${i === 0 ? "55" : "24"}` }} />
            </div>
          ))}
        </div>
        <span className="truncate pl-0.5 text-[6px] font-black uppercase tracking-wide text-slate-400">{sourceTitle ?? "Admin"}</span>
      </div>
    </div>
  )
}

function MiniMobileApp({ color, dense, sourceTitle }: { color: string; dense?: boolean; sourceTitle?: string }) {
  const accent = SOLID_COLOR_MAP[color] ?? SOLID_COLOR_MAP.sky;
  const accentHex = getColor(color);

  if (dense) {
    return (
      <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-white">
        <div className="flex h-5 shrink-0 items-center justify-between px-2 text-[6px] font-black text-slate-700">
          <span>9:41</span>
          <span className="h-1.5 w-5 rounded-full bg-slate-200" />
        </div>
        <div
          className="mx-1.5 flex h-10 shrink-0 items-end justify-between rounded-lg px-2 pb-2"
          style={{ background: `linear-gradient(135deg, ${accentHex}30, ${accentHex}0D)` }}
        >
          <div>
            <div className="h-1.5 w-12 rounded-full" style={{ backgroundColor: accentHex }} />
            <div className="mt-1 h-1 w-8 rounded-full bg-white/90" />
          </div>
          <div className="h-5 w-5 rounded-full bg-white/70 shadow-sm" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-1 p-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex min-h-0 flex-col rounded bg-slate-50 p-1 ring-1 ring-slate-100">
              <div className="flex-1 rounded-sm" style={{ backgroundColor: `${accentHex}${i === 0 ? "38" : "20"}` }} />
              <div className="mt-1 h-1 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
        <div className="flex h-5 shrink-0 items-center justify-around border-t border-slate-100 px-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-1.5 rounded-full ${i === 1 ? "w-5" : "w-1.5"}`} style={{ backgroundColor: i === 1 ? accentHex : "#cbd5e1" }} />
          ))}
        </div>
        <span className="sr-only">{sourceTitle}</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-full py-1.5 bg-slate-50/50">
      <div className="w-16 sm:w-20 h-full bg-white border-[3px] border-slate-800 rounded-xl sm:rounded-[1.25rem] shadow-md flex flex-col overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-slate-800 rounded-b-md z-10" />
        <div className={`h-8 sm:h-10 w-full ${accent} opacity-20`} />
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

type CommerceFlowItem = {
  icon: ComponentType<{ className?: string }>;
  inputTitle: string;
  top: number;
  delay: number;
  duration: number;
  type: "mobile" | "storefront" | "admin";
  outputTitle: string;
  subtitle: string;
  color: string;
};

const COMMERCE_FLOW_ITEMS: CommerceFlowItem[] = [
  { icon: ShoppingCart, inputTitle: "Grocery Store", top: 15, delay: 0, duration: 12, type: "mobile", outputTitle: "Grocery App", subtitle: "Mobile iOS", color: "emerald" },
  { icon: Shirt, inputTitle: "Fashion Brand", top: 28, delay: -10, duration: 12, type: "storefront", outputTitle: "Fashion Web", subtitle: "Storefront", color: "violet" },
  { icon: Building2, inputTitle: "B2B Supplier", top: 41, delay: -8, duration: 12, type: "admin", outputTitle: "B2B Dashboard", subtitle: "Admin Panel", color: "indigo" },
  { icon: Coffee, inputTitle: "Restaurant", top: 54, delay: -6, duration: 12, type: "mobile", outputTitle: "Food Delivery", subtitle: "Delivery App", color: "teal" },
  { icon: Monitor, inputTitle: "Electronics", top: 67, delay: -4, duration: 12, type: "storefront", outputTitle: "Tech Store", subtitle: "Marketplace", color: "blue" },
  { icon: Heart, inputTitle: "Pharmacy", top: 80, delay: -2, duration: 12, type: "admin", outputTitle: "Pharmacy B2B", subtitle: "Vendor System", color: "rose" },
];

function getColor(name: string) {
  return HEX_MAP[name] || "#3b82f6";
}

function MultiVendorAnimation() {
  return (
    <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:w-[1040px] xl:w-[1160px] lg:h-[650px] xl:h-[700px] flex items-center justify-center pointer-events-none select-none overflow-visible lg:translate-x-[1%] xl:translate-x-[2%]">
       
       {/* Left Side Label */}
       <div className="absolute top-20 left-4 hidden lg:flex items-center gap-3 z-0 opacity-80">
          <div className="text-[11px] font-black uppercase tracking-widest text-slate-500 bg-white/60 px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm backdrop-blur-sm">Business Types</div>
          <div className="h-[1px] w-16 bg-slate-300" />
       </div>

       {/* Showcase: wider portrait handset; fixed 2×3 grid — no inner scroll */}
       <div className="pointer-events-none absolute inset-y-5 right-0 z-20 hidden lg:flex xl:inset-y-4 xl:right-1 items-center justify-center">
          <div className="aspect-[11.8/19.5] h-[min(682px,calc(100%-1.5rem))] w-auto min-w-[350px] max-h-[94%] shrink-0 xl:min-w-[390px]">
            <div className="pointer-events-auto relative flex h-full w-full min-h-0 flex-col overflow-hidden rounded-[1.85rem] border-[3px] border-zinc-900 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 p-[3px] shadow-[0_24px_55px_rgba(0,0,0,0.28)] ring-1 ring-black/25">
              <div
                className="pointer-events-none absolute left-0 top-[22%] z-40 h-9 w-[2px] -translate-x-[3px] rounded-l-sm bg-gradient-to-b from-zinc-500 to-zinc-800 shadow-sm"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-0 top-[32%] z-40 h-14 w-[2px] -translate-x-[3px] rounded-l-sm bg-gradient-to-b from-zinc-500 to-zinc-800 shadow-sm"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute right-0 top-[26%] z-40 h-16 w-[2px] translate-x-[3px] rounded-r-sm bg-gradient-to-b from-zinc-500 to-zinc-800 shadow-sm"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-1/2 top-[5px] z-30 h-[6px] w-[min(34%,4.25rem)] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)]"
                aria-hidden
              />
              <div className="mx-[3px] mb-[3px] mt-[12px] flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.45rem] bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]">
                <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-2.5 py-1.5">
                  <span className="text-[10px] font-semibold tabular-nums text-slate-900">9:41</span>
                  <div className="flex items-center gap-1 text-slate-800" aria-hidden>
                    <div className="flex items-end gap-px pb-px">
                      {[3, 4, 5, 6].map((h) => (
                        <span key={h} className="block w-px rounded-sm bg-current" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    <div className="ml-0.5 flex h-2.5 w-3.5 items-center rounded-[3px] border border-current/45 p-px">
                      <span className="block h-full w-[55%] rounded-[1px] bg-emerald-500" />
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 border-b border-slate-200/90 bg-slate-50/95 px-3 py-2.5 backdrop-blur-sm">
                  <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.65)]" />
                  <p className="min-w-0 flex-1 text-[9px] font-black uppercase leading-snug tracking-[0.12em] text-slate-700">
                    Ideas converted to apps
                  </p>
                </div>
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-gradient-to-b from-slate-50/95 to-white px-3 py-3">
                  <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-2">
                    {COMMERCE_FLOW_ITEMS.map((p, i) => (
                      <StaticStructuredOutput
                        key={`out-${i}`}
                        type={p.type}
                        title={p.outputTitle}
                        subtitle={p.subtitle}
                        sourceTitle={p.inputTitle}
                        icon={p.icon}
                        color={p.color}
                        delay={p.delay}
                        duration={p.duration}
                        index={i}
                        compact
                        phoneTile
                      />
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 justify-center bg-white px-2 pb-2 pt-1">
                  <div className="h-1 w-[4.25rem] rounded-full bg-slate-900/15" aria-hidden />
                </div>
              </div>
            </div>
          </div>
       </div>

       {COMMERCE_FLOW_ITEMS.map((p, i) => (
         <RawInput key={`raw-${i}`} icon={p.icon} title={p.inputTitle} top={p.top} delay={p.delay} duration={p.duration} color={p.color} />
       ))}

       <div className="absolute top-1/2 left-[11%] z-30 flex h-64 w-64 sm:left-[12%] lg:left-[13%] lg:h-[300px] lg:w-[300px] xl:left-[14%] xl:h-[320px] xl:w-[320px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
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

function RawInput({
  icon: Icon,
  title,
  top,
  delay,
  duration,
  color,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  top: number;
  delay: number;
  duration: number;
  color: string;
}) {
  const accent = getColor(color);

  return (
    <motion.div
      className="absolute z-10 flex items-center gap-2 lg:gap-3"
      initial={{ left: "-25%", top: `${top}%`, opacity: 0, scale: 0.6, x: "-50%", y: "-50%" }}
      animate={{ 
         left: ["-25%", "-10%", "5%", "13%", "13%"],
         top: [`${top}%`, `${top}%`, "50%", "50%", "50%"],
         opacity: [0, 1, 1, 1, 0],
         scale: [0.6, 1, 0.88, 0.56, 0.12],
      }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut", times: [0, 0.1, 0.72, 0.86, 1] }}
    >
      <motion.div
        className="flex h-7 w-7 lg:h-8 lg:w-8 shrink-0 items-center justify-center rounded-full border bg-slate-50 shadow-sm text-slate-500 relative"
        animate={{
          borderColor: ["rgba(226,232,240,0.8)", "rgba(226,232,240,0.8)", accent, accent, "rgba(226,232,240,0)"],
          boxShadow: [
            "0 1px 2px rgba(15,23,42,0.08)",
            "0 1px 2px rgba(15,23,42,0.08)",
            `0 0 0 5px ${accent}1F, 0 8px 24px ${accent}30`,
            `0 0 0 12px ${accent}12, 0 12px 32px ${accent}36`,
            `0 0 0 18px ${accent}00`,
          ],
        }}
        transition={{ duration, repeat: Infinity, delay, ease: "easeInOut", times: [0, 0.1, 0.72, 0.86, 1] }}
      >
        <User className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
        <div className="absolute -top-1 -right-1 bg-amber-100 text-amber-500 rounded-full p-0.5 shadow-sm border border-amber-200">
           <Lightbulb className="h-2 w-2" />
        </div>
      </motion.div>
      <motion.div
        className="relative rounded-lg border border-slate-200/60 bg-white/95 px-2.5 py-1.5 shadow-sm backdrop-blur-sm flex items-center gap-2"
        animate={{
          y: [0, 0, -1, -3, -8],
          borderColor: ["rgba(226,232,240,0.6)", "rgba(226,232,240,0.6)", `${accent}55`, `${accent}80`, "rgba(226,232,240,0)"],
          boxShadow: [
            "0 1px 2px rgba(15,23,42,0.08)",
            "0 1px 2px rgba(15,23,42,0.08)",
            `0 10px 26px ${accent}20`,
            `0 14px 36px ${accent}28`,
            `0 0 0 ${accent}00`,
          ],
        }}
        transition={{ duration, repeat: Infinity, delay, ease: "easeInOut", times: [0, 0.1, 0.72, 0.86, 1] }}
      >
        {/* Chat bubble tail */}
        <div className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-slate-200/60 bg-white/95" />
        <div className="flex items-center gap-1.5 relative z-10 text-[9px] lg:text-[10px] font-bold text-slate-700">
           <Icon className="h-3 w-3 text-blue-500" />
           <span>{title}</span>
        </div>
        <motion.span
          className="absolute -right-3 -top-3 rounded-full bg-blue-600 px-1.5 py-0.5 text-[7px] font-black uppercase tracking-wide text-white shadow-lg shadow-blue-500/30"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0, 0, 0, 1, 0], scale: [0.7, 0.7, 0.7, 1, 0.78] }}
          transition={{ duration, repeat: Infinity, delay, ease: "easeInOut", times: [0, 0.1, 0.72, 0.86, 1] }}
        >
          Build
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

function StaticStructuredOutput({
  type,
  title,
  subtitle,
  sourceTitle,
  icon: Icon,
  color,
  delay,
  duration,
  index,
  compact,
  phoneTile,
}: {
  type: string;
  title: string;
  subtitle: string;
  sourceTitle?: string;
  icon?: ComponentType<{ className?: string }>;
  color: string;
  delay: number;
  duration: number;
  index: number;
  compact?: boolean;
  /** Fills a grid cell inside the handset — no fixed row height, no scroll */
  phoneTile?: boolean;
}) {
  const startX = compact ? -160 - index * 24 : index % 2 === 0 ? -480 : -700;
  const accent = getColor(color);
  const dot = SOLID_COLOR_MAP[color] ?? SOLID_COLOR_MAP.sky;

  if (compact) {
    const tileHeight = phoneTile ? "h-full min-h-0" : "h-[88px]";

    return (
      <motion.div
        className={`relative z-10 w-full shrink-0 origin-center ${phoneTile ? "h-full min-h-0" : ""}`}
        initial={{ opacity: 0, x: startX, scale: 0.86 }}
        animate={{
          opacity: [0, 1, 1, 0],
          x: [startX, 0, 0, 0],
          scale: [0.86, 1.02, 1, 0.98],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
          times: [0, 0.24, 0.9, 1],
        }}
      >
        <motion.div
          className={`flex w-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md ${tileHeight}`}
          animate={{
            borderColor: ["rgba(226,232,240,0.8)", "rgba(226,232,240,0.8)", `${accent}55`, "rgba(226,232,240,0.8)"],
            boxShadow: [
              "0 1px 2px rgba(15,23,42,0.06)",
              `0 12px 28px ${accent}20`,
              `0 10px 24px ${accent}18`,
              "0 1px 2px rgba(15,23,42,0.06)",
            ],
          }}
          whileHover={{ y: -2 }}
          transition={{ duration, repeat: Infinity, delay, ease: "easeInOut", times: [0, 0.24, 0.9, 1] }}
        >
          <div className="relative h-[66%] min-h-0 shrink-0 overflow-hidden border-b border-slate-100 bg-slate-50/70">
            {type === "storefront" && <MiniStorefront color={color} sourceTitle={sourceTitle} />}
            {type === "admin" && <MiniAdminPanel color={color} sourceTitle={sourceTitle} />}
            {type === "mobile" && <MiniMobileApp color={color} dense sourceTitle={sourceTitle} />}
          </div>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-0.5 px-2 py-1.5 sm:px-2.5">
            {sourceTitle && Icon && (
              <div className="flex min-w-0 items-center gap-1.5 text-[7px] font-black uppercase leading-tight tracking-wide text-slate-400">
                <Icon className="h-2.5 w-2.5 shrink-0 text-slate-400" />
                <span className="truncate">{sourceTitle}</span>
              </div>
            )}
            <div className="flex min-w-0 items-center gap-1">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
              <span
                className={`truncate font-bold leading-tight tracking-tight text-slate-800 ${phoneTile ? "text-[9px]" : "text-[10px]"}`}
              >
                {title}
              </span>
            </div>
            <span
              className={`truncate pl-2.5 font-bold uppercase leading-tight tracking-wide text-slate-500 ${phoneTile ? "text-[7px]" : "text-[7px]"}`}
            >
              {subtitle}
            </span>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative z-10 flex h-[136px] w-full origin-center flex-col xl:h-[160px]"
      initial={{ opacity: 0, x: startX, scale: 0.2 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [startX, 0, 0, 0],
        scale: [0.2, 1, 1, 0.95],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeOut",
        times: [0, 0.15, 0.9, 1],
      }}
    >
      <motion.div
        className="flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm backdrop-blur-md hover:shadow-xl hover:shadow-slate-200/50"
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex shrink-0 flex-col border-b border-slate-100/80 bg-slate-50/80 px-2 py-1.5">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${dot}`} />
            <div className="truncate text-[10px] font-bold leading-none tracking-tight text-slate-800">
              {title}
            </div>
          </div>
          <div className="mt-1 text-[8px] font-bold uppercase tracking-wider text-slate-500 ml-4">
            {subtitle}
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden bg-white">
          {type === "storefront" && <MiniStorefront color={color} />}
          {type === "admin" && <MiniAdminPanel color={color} />}
          {type === "mobile" && <MiniMobileApp color={color} />}
        </div>
      </motion.div>
    </motion.div>
  );
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/85 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm shadow-sky-100/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.75)]" />
              Commerce infrastructure for modern marketplaces
            </div>

            <h1
              className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-[#111827] sm:text-5xl lg:text-[3.45rem] xl:text-6xl"
              data-testid="text-hero-title"
            >
              Choose{" "}
              <span className="gradient-text">
                Kaartx Kloud
              </span>{" "}
              as your powerful commerce infrastructure platform
            </h1>

            <div className="mt-7 max-w-2xl space-y-4 text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl sm:leading-9">
              <p>
                Launch your own marketplace or SaaS applications in minutes. Kaartx Kloud powers vendors, storefronts, and commerce infrastructure with a scalable ecosystem.
              </p>
            </div>

          

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button
                onClick={onOpenSignup}
                size="lg"
                className="h-14 w-full min-w-[200px] rounded-xl bg-blue-500 px-8 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/35 sm:w-auto"
                data-testid="button-hero-get-started"
              >
                Try for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToBooking}
                className="h-14 w-full min-w-[160px] rounded-xl border-blue-200 bg-white px-8 text-lg font-semibold text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:shadow-blue-100/80 sm:w-auto"
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
