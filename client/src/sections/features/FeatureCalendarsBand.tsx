import { Badge } from "@/components/ui/badge";

export default function FeatureCalendarsBand() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-4">
            <Badge variant="outline" className="text-sm" data-testid="badge-google-calendar-band">
              Google Calendar
            </Badge>
            <Badge variant="outline" className="text-sm" data-testid="badge-apple-calendar-band">
              Apple Calendar
            </Badge>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Your team already runs on Google Calendar and Apple Calendar. We sync both in real time so nobody says "Wait, where am I going?"
          </p>
        </div>
      </div>
    </section>
  );
}
