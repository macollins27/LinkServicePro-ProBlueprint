import { useNavigate } from "react-router-dom";

export default function StickyMobileCTA() {
  const navigate = useNavigate();

  return (
    <div className="sticky-mobile-cta" role="region" aria-label="Quick actions">
      <button
        className="btn-primary-glow flex-1 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5FFF]"
        data-testid="button-sticky-trial"
        onClick={() => navigate("/signup")}
        aria-label="Start free trial"
      >
        Start Free Trial
      </button>
      <button
        className="btn-outline flex-1 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B5FFF]"
        data-testid="button-sticky-demo"
        onClick={() => navigate("/contact")}
        aria-label="Book a demo"
      >
        Book a Demo
      </button>
    </div>
  );
}
