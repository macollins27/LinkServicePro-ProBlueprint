import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted";
}

export default function Section({ children, className = "", id, background = "default" }: SectionProps) {
  const bgClass = background === "muted" ? "bg-muted" : "";
  
  return (
    <section id={id} className={`py-12 lg:py-20 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}
