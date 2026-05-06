import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, type ReactNode } from "react";
import { Button } from "./ui/button";

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
  "relative h-[260px] w-full overflow-hidden bg-white rounded-xl border border-black/10 sm:h-[400px] md:h-[440px] lg:h-[480px]";

/** Side panels: ~20% shorter image area than center; row uses items-center so they align to the middle card. */
const HERO_SIDE_IMAGE_FRAME =
  "relative h-[208px] w-full overflow-hidden bg-white rounded-xl border border-black/10 sm:h-[320px] md:h-[352px] lg:h-[384px]";

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
    <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:gap-2">
      <div className="flex shrink-0 items-center gap-2">
        {logo}
        <StarRow />
      </div>
      <span className="text-center text-sm font-medium text-slate-600 sm:text-left sm:text-base">
        {score} on {label}
      </span>
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
      className="relative overflow-x-clip overflow-y-visible bg-white pt-12 sm:pt-16 md:pt-24"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-5xl text-center sm:mt-16"
        >
          <h1
            className="mb-7 px-2 font-display text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            data-testid="text-hero-title"
          >
            Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Kaartx
            </span>{" "}
            as your powerful
            <span className="mt-3 block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent sm:mt-4 lg:mt-5">
              B2B/B2C Marketplace Builder
            </span>
          </h1>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Button
              onClick={onOpenSignup}
              size="lg"
              className="h-14 min-w-[220px] rounded-xl bg-blue-500 px-10 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/35"
              data-testid="button-hero-get-started"
            >
              Try for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToBooking}
              className="h-14 rounded-xl border-blue-200 bg-white px-8 text-lg font-semibold text-blue-600 hover:bg-blue-50"
              data-testid="button-hero-whatsapp"
            >
              Contact us
            </Button>
          </div>

          <div
            className="mx-auto mb-16 flex max-w-4xl flex-col flex-wrap items-center justify-center gap-7 border-y border-slate-100 py-9 sm:flex-row sm:gap-12 md:gap-16"
            data-testid="text-hero-subtitle"
          >
            <TrustBadge
              logo={
                <div className="flex h-10 w-16 items-center justify-center rounded-full bg-[#ff492c] text-[11px] font-black text-white">
                  Appstore
                </div>
              }
              score="4.8/5"
              label="Appstore"
            />
            <TrustBadge
              logo={
                <div className="flex h-10 w-16 items-center justify-center rounded-md bg-[#f58220] text-[10px] font-black text-white">
                  Playstore
                </div>
              }
              score="4.7/5"
              label="Playstore"
            />
           
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto mt-4 w-full max-w-4xl sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <StackWindow {...STACK_CENTER} imageAreaClassName={HERO_IMAGE_FRAME} imageObjectFit="contain" objectPosition="object-center" />
        </motion.div>

        {/* Desktop triptych: sides ease further under center after mount; center rises in */}
        <div className="relative mx-auto mt-4 hidden w-full max-w-[min(100%,88rem)] flex-row items-center justify-center overflow-x-hidden px-0 pb-6 sm:flex sm:overflow-x-visible sm:px-2 sm:pb-10 md:px-4">
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[85%] w-[min(100%,72rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(59, 130, 246, 0.2), rgba(125, 211, 252, 0.08) 45%, transparent 72%)",
            }}
            initial={{ opacity: 0.65, scale: 0.92 }}
            animate={{ opacity: [0.65, 0.9, 0.75, 0.65], scale: [0.92, 1, 0.96, 0.92] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="z-10 w-[min(44%,440px)] max-w-[480px] shrink-0"
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.08 }}
          >
            <StackWindow
              {...STACK_LEFT}
              imageAreaClassName={HERO_SIDE_IMAGE_FRAME}
              imageObjectFit="cover"
              objectPosition="object-left"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 28, delay: 0.12 }}
            className="z-30 -mx-5 w-[min(82%,760px)] max-w-[800px] shrink-0 sm:-mx-6 md:w-[min(80%,820px)] md:max-w-[840px] lg:-mx-8 lg:max-w-[880px]"
          >
            <StackWindow
              {...STACK_CENTER}
              imageAreaClassName={HERO_IMAGE_FRAME}
              imageObjectFit="contain"
              objectPosition="object-center"
            />
          </motion.div>

          <motion.div
            className="z-10 w-[min(44%,440px)] max-w-[480px] shrink-0"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.08 }}
          >
            <StackWindow
              {...STACK_RIGHT}
              imageAreaClassName={HERO_SIDE_IMAGE_FRAME}
              imageObjectFit="cover"
              objectPosition="object-right"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
