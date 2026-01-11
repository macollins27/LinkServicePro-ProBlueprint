import { Shield, Clock, Lock, Users } from "lucide-react";
import trustImage from "@assets/generated_images/Field_service_team_at_dispatch_f4f38099.png";

export default function Trust() {
  const trustItems = [
    {
      icon: Clock,
      label: "99.9% uptime",
      testId: "card-trust-uptime",
    },
    {
      icon: Shield,
      label: "SOC 2",
      testId: "card-trust-soc2",
    },
    {
      icon: Lock,
      label: "Data encryption",
      testId: "card-trust-encryption",
    },
    {
      icon: Users,
      label: "Role-based access",
      testId: "card-trust-access",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-trust-heading">
            Trust & Security
          </h2>
          <p className="text-slate-700">Your data is protected by default.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={trustImage} 
            alt="Diverse field service team planning jobs at dispatch center scheduling board" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="bg-white ring-1 ring-slate-200 elev-2 p-5 text-center"
                data-testid={item.testId}
              >
                <div className="w-10 h-10 bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[#0B5FFF]" />
                </div>
                <p className="text-sm font-bold text-slate-900">{item.label}</p>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-slate-600 text-left" data-testid="text-trust-statement">
          Data encrypted at rest and in transit. Regular third-party audits.
        </p>
      </div>
    </section>
  );
}
