import { FolderKanban, Trophy, Zap, TrendingUp, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: FolderKanban,
    title: "Get Organized",
    description: "Leads, jobs, and documents in one place.",
    link: "/features/organize",
    accentClass: "accent-border-blueprint",
  },
  {
    icon: Zap,
    title: "Work Smarter",
    description: "Live map, routes, and automated reminders.",
    link: "/features/work-smarter",
    accentClass: "accent-border-teal",
  },
  {
    icon: Trophy,
    title: "Win More Jobs",
    description: "Quotes with e-sign turn into work orders.",
    link: "/features/win-jobs",
    accentClass: "accent-border-amber",
  },
  {
    icon: TrendingUp,
    title: "Boost Profits",
    description: "Real job costing and faster invoicing.",
    link: "/features/boost-profits",
    accentClass: "accent-border-ink",
  },
];

export default function Pillars() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <a
                key={index}
                href={pillar.link}
                className={`card-notch bg-white border border-slate-200 p-6 space-y-4 card-interactive elev-1 hover:elev-2 hover:ring-1 hover:ring-slate-200 block no-underline focus-outline ${pillar.accentClass}`}
                data-testid={`card-pillar-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900" data-testid={`text-pillar-title-${index}`}>
                  {pillar.title}
                </h3>
                <p className="text-slate-700 text-sm" data-testid={`text-pillar-description-${index}`}>
                  {pillar.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-primary font-medium" data-testid={`link-pillar-${index}`}>
                  See features <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
