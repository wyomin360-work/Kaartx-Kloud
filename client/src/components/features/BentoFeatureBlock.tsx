import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function BentoFeatureBlock({
  icon: Icon,
  title,
  description,
  gradientClass,
  index,
  visible,
  stagger,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass: string;
  index: number;
  visible: boolean;
  stagger: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[9rem] flex-col justify-between text-center p-4 transition-all duration-300 sm:min-h-[10.5rem] sm:p-5",
        "bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.75)]",
        gradientClass,
        "animate-on-scroll",
        stagger,
        visible ? "visible" : "",
      )}
      data-testid={`card-feature-${index}`}
    >
      <div 
        className="shadow-[0_4px_20px_rgba(0,0,0,0.06)] mx-auto flex h-10 w-10 items-center justify-center bg-white/95 sm:h-12 sm:w-12 backdrop-blur-sm"
        style={{ borderRadius: "43% 57% 68% 32% / 46% 38% 62% 54%" }}
      >
        <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
      </div>
      <div className="mt-3">
        <h3 className="mb-1.5 text-base font-bold leading-snug text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="text-xs font-medium leading-relaxed text-muted-foreground sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
