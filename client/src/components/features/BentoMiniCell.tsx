import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function BentoMiniCell({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "group flex min-h-[4.5rem] flex-col items-center justify-center gap-1.5 px-2 py-3 text-center transition-all duration-300",
        "bg-[rgba(255,255,255,0.45)] hover:bg-[rgba(255,255,255,0.85)] hover:z-10 hover:scale-110 hover:rounded-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <Icon
        className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-primary"
        strokeWidth={1.75}
      />
      <span className="max-w-[5.5rem] text-[10px] font-medium leading-tight text-slate-600 transition-colors group-hover:text-slate-900 sm:max-w-none sm:text-[11px]">
        {label}
      </span>
    </button>
  );
}
