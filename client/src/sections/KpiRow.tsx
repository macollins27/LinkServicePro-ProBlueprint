import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function KpiRow() {
  const kpis = [
    {
      icon: TrendingUp,
      metric: "35% faster scheduling",
      description: "Average time saved per dispatch cycle",
      link: "/resources/customer-stories"
    },
    {
      icon: Clock,
      metric: "2× quicker estimate approvals",
      description: "From quote sent to customer signature",
      link: "/resources/customer-stories"
    },
    {
      icon: DollarSign,
      metric: "<24 hr average time-to-pay",
      description: "Invoice delivery to payment received",
      link: "/resources/customer-stories"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className="bg-white ring-1 ring-slate-200 p-6 elev-2"
                data-testid={`kpi-tile-${index}`}
              >
                <Icon 
                  className="h-8 w-8 text-[#0B5FFF] mb-4" 
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {kpi.metric}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {kpi.description}
                </p>
                <Link
                  to={kpi.link}
                  className="text-sm font-semibold text-[#0B5FFF] hover:text-[#0952CC] transition-colors link-underline inline-block"
                  data-testid={`link-kpi-measurement-${index}`}
                >
                  How we measured →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
