import { Globe, MessageSquare, Bell, Star } from "lucide-react";

export default function CustomerXP() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Testimonial - Flipped to left with Teal Accent */}
          <div className="card-notch bg-white border-t border-r border-b border-slate-200 border-l-[3px] border-l-[#00C2A8] elev-2 ring-1 ring-slate-200 p-8" data-testid="testimonial-card">
            <div className="space-y-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-slate-900 italic">
                "Our customers love the portal. They can see everything in real time and we cut phone
                calls in half."
              </blockquote>
              <div className="pt-4 border-t border-slate-200">
                <p className="font-bold text-slate-900">Mike Rodriguez</p>
                <p className="text-sm text-slate-600">Owner, Rodriguez HVAC</p>
              </div>
            </div>
          </div>

          {/* Right: Content - Flipped to right */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-customer-heading">
              Keep customers in the loop.
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Customer Portal</p>
                  <p className="text-sm text-muted-foreground">
                    Customers view quotes, invoices, and job history online.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Text and email customers from the job screen</p>
                  <p className="text-sm text-muted-foreground">
                    Send updates and receive replies directly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Automated Reminders</p>
                  <p className="text-sm text-muted-foreground">
                    Reduce no-shows with appointment confirmations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Review Requests</p>
                  <p className="text-sm text-muted-foreground">
                    Build your reputation with post-job review links.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
