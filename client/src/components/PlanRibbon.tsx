import { cn } from "@/lib/utils";

type PlanName =
  | "Free"
  | "Starter"
  | "Essential"
  | "Essential+"
  | "Premium"
  | "Free → Premium"
  | "Email: Starter • SMS: Essential"
  | string;

interface PlanRibbonProps {
  plan: PlanName;
  testId?: string;
}

export function PlanRibbon({ plan, testId }: PlanRibbonProps) {
  // Map plan -> bg/text colors
  // These must visually pop. Use solid-ish backgrounds, not super washed out.
  // Keep text dark enough to read WCAG AA.
  const colorMap: Record<string, { bg: string; text: string }> = {
    "Free":                           { bg: "bg-emerald-100", text: "text-emerald-900" },
    "Starter":                        { bg: "bg-blue-100",    text: "text-blue-900"    },
    "Essential":                      { bg: "bg-emerald-100", text: "text-emerald-900" },
    "Essential+":                     { bg: "bg-violet-100",  text: "text-violet-900"  },
    "Free → Premium":                 { bg: "bg-violet-100",  text: "text-violet-900"  },
    "Premium":                        { bg: "bg-violet-100",  text: "text-violet-900"  },
    "Email: Starter • SMS: Essential": { bg: "bg-blue-100",    text: "text-blue-900"    },
  };

  const colors = colorMap[plan] ?? { bg: "bg-slate-200", text: "text-slate-900" };

  return (
    <div
      className={cn(
        "absolute",
        "-top-2",
        "-right-2",
        "z-20",
        "select-none"
      )}
      aria-label={plan}
    >
      <div
        className={cn(
          "relative",
          colors.bg,
          colors.text,
          "text-[11px]",
          "font-semibold",
          "leading-none",
          "px-2",
          "py-[4px]",
          "rounded-l-md",
          "shadow-md",
          "border border-black/5"
        )}
        data-testid={testId}
      >
        <span className="whitespace-nowrap">{plan}</span>

        {/* angled cut piece on the right */}
        <div
          className={cn(
            "absolute",
            "top-0",
            "right-[-8px]",
            "h-full",
            "w-2",
            colors.bg,
            "border-t border-t-black/5",
            "border-r border-r-black/5",
            "border-b border-b-black/5",
            "origin-left",
            "-skew-y-[20deg]",
            "rounded-tr-[2px]"
          )}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
