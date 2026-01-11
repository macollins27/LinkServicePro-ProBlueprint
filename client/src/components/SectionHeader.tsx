interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionHeader({ title, subtitle, align = "left", as = "h2" }: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const HeadingTag = as;
  
  return (
    <header className={`mb-6 sm:mb-8 ${alignment}`}>
      <HeadingTag className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="section-heading">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-slate-700 max-w-[56ch] mt-2">
          {subtitle}
        </p>
      )}
    </header>
  );
}
