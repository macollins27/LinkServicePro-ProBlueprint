import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success";
  className?: string;
}

export default function Pill({ children, variant = "default", className = "" }: PillProps) {
  const variantStyles = {
    default: "bg-muted text-foreground/80 border-border",
    primary: "bg-primary/10 text-primary border-primary/20",
    success: "bg-chart-2/10 text-chart-2 border-chart-2/20"
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
