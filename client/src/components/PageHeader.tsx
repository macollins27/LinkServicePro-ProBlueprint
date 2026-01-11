import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHeader({ title, subtitle, children, className = "" }: PageHeaderProps) {
  return (
    <header className={`py-12 lg:py-16 bg-muted border-b border-border ${className}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="page-title">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg lg:text-xl text-foreground/80 mb-6" data-testid="page-subtitle">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
