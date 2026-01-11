import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

export default function HowItWorks3Steps() {
  const steps = [
    {
      number: 1,
      title: "Add job",
      description: "Enter customer and window"
    },
    {
      number: 2,
      title: "Drag to assign",
      description: "We check conflicts and crew load"
    },
    {
      number: 3,
      title: "Customer gets ETA",
      description: "Auto-text and calendar update"
    }
  ];

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50"
      data-testid="section-how-steps"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How it works
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            Three steps to better scheduling
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white ring-1 ring-slate-200 p-6 shadow-sm"
              data-testid={`step-${step.number}`}
            >
              <div className="text-sm font-extrabold text-[#0B5FFF] mb-2">
                Step {step.number}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-700">
                {step.description}
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
