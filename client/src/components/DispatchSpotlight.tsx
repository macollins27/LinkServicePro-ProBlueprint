import { MapPin, Navigation, Clock } from "lucide-react";

export default function DispatchSpotlight() {
  return (
    <section className="py-16 lg:py-24 spot-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" data-testid="text-dispatch-heading">
              Scheduling & Dispatch
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 border border-primary/20 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-medium">Drag-and-drop schedule</p>
                  <p className="text-sm text-slate-700">
                    Move jobs around your calendar in seconds.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 border border-primary/20 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-medium">Live GPS + route optimization</p>
                  <p className="text-sm text-slate-700">
                    See crews in real time and plan efficient routes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 border border-primary/20 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-medium">Capacity view reduces overtime</p>
                  <p className="text-sm text-slate-700">
                    Balance workload across your team.
                  </p>
                </div>
              </li>
            </ul>

            {/* Stat Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white elev-1 ring-1 ring-slate-200 p-4 text-center">
                <div className="flex items-center justify-center gap-1 text-chart-2 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-xs font-bold">↓18%</span>
                </div>
                <p className="text-xs text-slate-600">Drive Time</p>
              </div>
              <div className="bg-white elev-1 ring-1 ring-slate-200 p-4 text-center">
                <div className="flex items-center justify-center gap-1 text-chart-3 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-xs font-bold">+1.3</span>
                </div>
                <p className="text-xs text-slate-600">Jobs/Tech/Day</p>
              </div>
              <div className="bg-white elev-1 ring-1 ring-slate-200 p-4 text-center">
                <div className="flex items-center justify-center gap-1 text-[#0B5FFF] mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-xs font-bold">96%</span>
                </div>
                <p className="text-xs text-slate-600">On-Time</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Mock - Enlarged with Frame */}
          <div className="relative">
            <div
              className="card-notch bg-white border border-slate-200 elev-2 ring-1 ring-slate-200 p-10 relative"
              aria-hidden="true"
              data-testid="dispatch-mock"
            >
              <div className="space-y-6">
                {/* Map representation */}
                <div className="h-72 bg-muted border border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5" />
                  
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                    <path
                      d="M 50 50 Q 150 100, 250 80 T 350 150"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8 4"
                    />
                  </svg>

                  {/* GPS Pins */}
                  <div className="absolute top-12 left-12">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute top-24 left-40">
                    <MapPin className="w-8 h-8 text-chart-2" />
                  </div>
                  <div className="absolute top-32 right-20">
                    <MapPin className="w-8 h-8 text-chart-3" />
                  </div>
                </div>

                {/* ETA Badges */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="card-notch bg-background border border-border p-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-xs text-foreground/60 mb-1">
                      <Clock className="w-3 h-3" />
                      <span>ETA</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">9:15 AM</p>
                  </div>
                  <div className="card-notch bg-background border border-border p-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-xs text-foreground/60 mb-1">
                      <Navigation className="w-3 h-3" />
                      <span>Distance</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">4.2 mi</p>
                  </div>
                  <div className="card-notch bg-background border border-border p-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-xs text-foreground/60 mb-1">
                      <Clock className="w-3 h-3" />
                      <span>Time</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">12 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
