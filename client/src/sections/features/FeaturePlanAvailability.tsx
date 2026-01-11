import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plan } from "@/data/features";

type FeaturePlanAvailabilityProps = {
  minPlanLabel: Plan;
  planNotes: string;
};

export default function FeaturePlanAvailability({ minPlanLabel, planNotes }: FeaturePlanAvailabilityProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
            <h2 className="text-2xl font-bold mb-4" data-testid="heading-plan-availability">
              What plan do I need?
            </h2>
            
            <p className="text-slate-700 mb-6">
              <span className="font-semibold">{minPlanLabel}</span> and above.{" "}
              <span>{planNotes}</span>
            </p>

            <div className="flex items-center gap-4 mb-6">
              <Badge 
                variant={minPlanLabel === "Free" ? "outline" : "secondary"}
                className="text-sm"
                data-testid="badge-min-plan-availability"
              >
                {minPlanLabel}
              </Badge>
              <Button 
                variant="outline"
                data-testid="button-see-pricing-availability"
              >
                See full pricing
              </Button>
            </div>

            <p className="text-sm text-slate-600 border-t border-slate-200 pt-4">
              Works with Google Calendar and Apple Calendar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
