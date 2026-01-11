import { useNavigate } from "react-router-dom";

interface ButtonProps {
  context: "dark" | "light";
  className?: string;
  dataTestId?: string;
}

export function StartFreeButton({ context, className = "", dataTestId = "cta-start-free" }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', { placement: 'start-free' });
    }
    navigate('/signup');
  };

  const focusRingOffset = context === "dark" 
    ? "focus-visible:ring-offset-slate-900" 
    : "focus-visible:ring-offset-white";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex justify-center px-5 py-3 bg-[#0B5FFF] text-white font-extrabold rounded-none shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF] ${focusRingOffset} ${className}`}
      data-testid={dataTestId}
    >
      Start Free
    </button>
  );
}

export function ViewPricingButton({ context, className = "", dataTestId = "cta-view-pricing" }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', { placement: 'view-pricing' });
    }
    navigate('/pricing');
  };

  const styles = context === "dark"
    ? "bg-transparent text-white ring-2 ring-white hover:bg-white/10 focus-visible:ring-[#0B5FFF]"
    : "bg-transparent text-slate-900 ring-2 ring-slate-300 hover:bg-slate-100 focus-visible:ring-[#0B5FFF]";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex justify-center px-5 py-3 font-extrabold rounded-none focus:outline-none focus-visible:ring-2 ${styles} ${className}`}
      data-testid={dataTestId}
    >
      View Pricing
    </button>
  );
}

interface ButtonsRowProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonsRow({ children, className = "" }: ButtonsRowProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 justify-center ${className}`}>
      {children}
    </div>
  );
}
