type FeatureHowItWorksProps = {
  steps: {
    title: string;
    bullets: string[];
    imgAlt: string;
  }[];
};

export default function FeatureHowItWorks({ steps }: FeatureHowItWorksProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-testid="heading-how-it-works">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-6"
              data-testid={`step-${idx + 1}`}
            >
              {/* Step number */}
              <div className="text-6xl font-bold text-[#0B5FFF]/20 mb-4">
                {idx + 1}
              </div>

              {/* Step title */}
              <h3 className="text-xl font-bold mb-4">
                {step.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {step.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start">
                    <span className="text-[#0B5FFF] mr-2">•</span>
                    <span className="text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Screenshot placeholder */}
              <div
                className="aspect-[16/10] rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center"
                role="img"
                aria-label={step.imgAlt}
              >
                <span className="text-slate-400 text-sm">Screenshot</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
