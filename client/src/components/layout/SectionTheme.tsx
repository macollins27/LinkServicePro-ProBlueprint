import { ReactNode } from "react";

interface SectionThemeProps {
  theme?: "white" | "navy";
  withGrid?: boolean;
  className?: string;
  children: ReactNode;
}

export default function SectionTheme({
  theme = "white",
  withGrid = false,
  className = "",
  children
}: SectionThemeProps) {
  const themeClass = theme === "navy" ? "bg-theme--navy" : "bg-theme--white";
  const gridClass = withGrid ? "bg-grid" : "";
  
  return (
    <div className={`${themeClass} ${gridClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
