import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

interface HowItWorks3Props {
  steps: { title: string; desc: string }[];
  heading?: string;
  subheading?: string;
}

export default function HowItWorks3({ steps, heading, subheading }: HowItWorks3Props) {
  if (!steps || steps.length === 0) {
    return null;
  }

  const defaultHeading = "How it works";
  const defaultSubheading = `${steps.length} steps to get started`;

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50"
      data-testid="how-steps"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {heading || defaultHeading}
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            {subheading || defaultSubheading}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white ring-1 ring-slate-200 p-6 shadow-sm"
              data-testid={`step-${idx + 1}`}
            >
              <div className="text-sm font-extrabold text-[#0B5FFF] mb-2">
                Step {idx + 1}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-700">
                {step.desc}
              </p>
            </div>
          ))}
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
