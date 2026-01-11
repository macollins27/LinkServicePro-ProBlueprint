import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

interface PainSolveProps {
  pains: string[];
  solves: string[];
  heading?: string;
  subheading?: string;
}

export default function PainSolve({ pains, solves, heading, subheading }: PainSolveProps) {
  if (!pains || !solves || pains.length === 0) {
    return null;
  }

  const defaultHeading = "Common problems, solved";
  const defaultSubheading = "Field service challenges paired with proven solutions";

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"
      data-testid="pain-solve"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            {heading || defaultHeading}
          </h2>
          <p className="text-lg text-slate-600">
            {subheading || defaultSubheading}
          </p>
        </div>

        {/* Pain → Solve Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Pains Column */}
          <div>
            <h3 className="text-xl font-extrabold text-red-700 mb-4">
              Pain
            </h3>
            <ul 
              className="space-y-3"
              aria-label="Common scheduling problems"
            >
              {pains.map((pain, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                  <span className="text-slate-700">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solves Column */}
          <div>
            <h3 className="text-xl font-extrabold text-emerald-700 mb-4">
              Solve
            </h3>
            <ul 
              className="space-y-3"
              aria-label="How LinkServicePro solves these problems"
            >
              {solves.map((solve, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">{solve}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <ButtonsRow className="justify-center">
          <StartFreeButton context="light" />
          <ViewPricingButton context="light" />
        </ButtonsRow>
      </div>
    </section>
  );
}
