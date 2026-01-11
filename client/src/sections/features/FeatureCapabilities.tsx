type FeatureCapabilitiesProps = {
  capabilities: {
    id: string;
    title: string;
    bullets: string[];
  }[];
};

export default function FeatureCapabilities({ capabilities }: FeatureCapabilitiesProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-testid="heading-capabilities">
          What you can do
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((capability, idx) => (
            <div
              key={idx}
              id={capability.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:hover:shadow-sm p-6"
              data-testid={`capability-${capability.id}`}
            >
              <h3 className="text-xl font-bold mb-3">
                {capability.title}
              </h3>
              <ul className="space-y-2">
                {capability.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start">
                    <span className="text-[#0B5FFF] mr-2">•</span>
                    <span className="text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
