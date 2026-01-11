import { TrendingDown, Zap, DollarSign } from "lucide-react";

export default function IndustryOutcomes() {
  const outcomes = [
    {
      icon: TrendingDown,
      title: "Fewer no-shows",
      description: "35% reduction with automated reminders",
    },
    {
      icon: Zap,
      title: "Faster approvals",
      description: "2× quicker with mobile e-sign",
    },
    {
      icon: DollarSign,
      title: "Paid within 24 hrs",
      description: "Online payments & deposits",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
                data-testid={`card-outcome-${index}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#0B5FFF]">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
