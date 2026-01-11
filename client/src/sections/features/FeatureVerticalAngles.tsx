type FeatureVerticalAnglesProps = {
  verticalAngles: {
    hvac: string;
    plumbing: string;
    electrical: string;
  };
};

export default function FeatureVerticalAngles({ verticalAngles }: FeatureVerticalAnglesProps) {
  const angles = [
    { label: "HVAC", text: verticalAngles.hvac },
    { label: "Plumbing", text: verticalAngles.plumbing },
    { label: "Electrical", text: verticalAngles.electrical }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-testid="heading-vertical-angles">
          Why this matters in the real world
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {angles.map((angle, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-6"
              data-testid={`card-vertical-${angle.label.toLowerCase()}`}
            >
              <div className="font-bold text-[#0B5FFF] mb-3 uppercase text-sm tracking-wide">
                {angle.label}
              </div>
              <p className="text-slate-700 leading-relaxed">
                {angle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
