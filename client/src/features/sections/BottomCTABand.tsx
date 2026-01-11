import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

interface BottomCTABandProps {
  variant?: "light" | "dark";
  title?: string;
  subtitle?: string;
}

export default function BottomCTABand({ 
  variant = "light",
  title = "Take control of your field operations",
  subtitle = "Start Free. No credit card. Full product for 14 days."
}: BottomCTABandProps) {
  const isDark = variant === "dark";
  
  return (
    <section 
      className={`px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center ${
        isDark 
          ? 'bg-gradient-to-br from-[#0B5FFF] to-blue-600 text-white' 
          : 'bg-white text-slate-900'
      }`}
      data-testid="bottom-cta"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-extrabold mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {title}
        </h2>
        <p className={`text-xl mb-8 ${
          isDark ? 'text-blue-100' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
        
        <ButtonsRow className="justify-center">
          <StartFreeButton context={variant} />
          <ViewPricingButton context={variant} />
        </ButtonsRow>
      </div>
    </section>
  );
}
