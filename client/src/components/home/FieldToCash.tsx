import { flowSteps } from "../../data/fieldToCash";
import { Link } from "react-router-dom";
import { Calendar, FileText, CreditCard, RefreshCcw } from "lucide-react";

function IconFor({ name }: { name: "calendar" | "file" | "credit" | "repeat" }) {
  switch (name) {
    case "calendar": return <Calendar className="size-5" aria-hidden />;
    case "file": return <FileText className="size-5" aria-hidden />;
    case "credit": return <CreditCard className="size-5" aria-hidden />;
    case "repeat": return <RefreshCcw className="size-5" aria-hidden />;
  }
}

export default function FieldToCash() {
  return (
    <section className="relative isolate py-14 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Workflow</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-foreground">
            From first call to cash—one clean flow
          </h2>
          <p className="mt-3 text-muted-foreground">
            LinkServicePro unifies the everyday steps contractors actually run: schedule the job, win the work, get paid, and lock in recurring revenue.
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {flowSteps.map((step) => (
            <div
              key={step.key}
              className="rounded-xl border border-card-border bg-card p-5 sm:p-6 flex flex-col"
              data-testid={`step-${step.key}`}
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 rounded-md p-2 bg-primary/10">
                  <IconFor name={step.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.blurb}</p>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[#2D6BFF] mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={step.ctaHref} 
                  className="inline-flex text-[#2D6BFF] hover:text-[#255AE0] underline underline-offset-4 text-sm font-medium"
                  data-testid={`link-${step.key}`}
                >
                  {step.ctaText} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
