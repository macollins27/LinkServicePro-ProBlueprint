import { useState, useEffect, useRef } from "react";
import { StartFreeButton } from "@/components/Buttons";

interface StickyBottomCTAProps {
  featureName: string;
}

export default function StickyBottomCTA({ featureName }: StickyBottomCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Show after 50% scroll
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50) {
        setIsVisible(true);
      }
    };

    // Hide when bottom CTA is visible
    const bottomCTA = document.querySelector('[data-testid="section-bottom-cta"]');
    if (bottomCTA) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(false);
            }
          });
        },
        { threshold: 0.1 }
      );
      observerRef.current.observe(bottomCTA);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-3 shadow-lg z-50"
      role="region"
      aria-label="Quick actions"
      data-testid="sticky-cta"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-extrabold text-slate-900">
            {featureName}
          </div>
          <div className="text-sm text-slate-700">
            Free forever. No credit card.
          </div>
        </div>
        <StartFreeButton context="light" dataTestId="button-sticky-start" />
      </div>
    </div>
  );
}
