import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABarProps {
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export default function CTABar({
  primaryText = "GET STARTED FREE",
  secondaryText = "Book a Demo",
  onPrimaryClick,
  onSecondaryClick,
  className = ""
}: CTABarProps) {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <Button
        size="lg"
        className="font-extrabold uppercase tracking-wide text-xs"
        onClick={onPrimaryClick || (() => navigate("/signup"))}
        data-testid="button-cta-primary"
        data-cta="cta-bar-primary"
      >
        {primaryText}
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="font-extrabold uppercase tracking-wide text-xs"
        onClick={onSecondaryClick || (() => navigate("/contact"))}
        data-testid="button-cta-secondary"
        data-cta="cta-bar-secondary"
      >
        {secondaryText}
      </Button>
    </div>
  );
}
