import { Folder, FileText, DollarSign, TrendingUp } from "lucide-react";

export default function ProjectsCosting() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-projects-heading">
            Projects & Job Costing
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Track multi-visit projects with documents and see profitability in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-notch bg-white border border-slate-200 elev-1 hover:elev-2 p-6 space-y-3 card-interactive">
            <Folder className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-bold text-slate-900">Multi-Visit Projects</h3>
            <p className="text-sm text-slate-700">
              Group related work orders under one project for better tracking.
            </p>
          </div>

          <div className="card-notch bg-white border border-slate-200 elev-1 hover:elev-2 p-6 space-y-3 card-interactive">
            <FileText className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-bold text-slate-900">Documents & Photos</h3>
            <p className="text-sm text-slate-700">
              Attach permits, contracts, and progress photos to each project.
            </p>
          </div>

          <div className="card-notch bg-white border border-slate-200 elev-1 hover:elev-2 p-6 space-y-3 card-interactive">
            <DollarSign className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-bold text-slate-900">Real-Time Profitability</h3>
            <p className="text-sm text-slate-700">
              See margins as you go, not weeks later in spreadsheets.
            </p>
          </div>
        </div>

        {/* KPI Strip with Colored Metrics */}
        <div className="card-notch bg-white border border-slate-200 elev-1 ring-1 ring-slate-200 p-8" data-testid="kpi-strip">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm text-slate-600 uppercase tracking-wide mb-2">Labor</p>
              <p className="text-3xl font-bold text-slate-900 mb-2" data-testid="text-kpi-labor">
                $8,240
              </p>
              {/* Sparkline Placeholder */}
              <svg className="sparkline mx-auto" viewBox="0 0 48 24" fill="none">
                <polyline
                  points="0,20 12,14 24,18 36,8 48,12"
                  stroke="#64748b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-600 uppercase tracking-wide mb-2">Materials</p>
              <p className="text-3xl font-bold text-slate-900 mb-2" data-testid="text-kpi-materials">
                $3,680
              </p>
              {/* Sparkline Placeholder */}
              <svg className="sparkline mx-auto" viewBox="0 0 48 24" fill="none">
                <polyline
                  points="0,18 12,16 24,14 36,10 48,8"
                  stroke="#64748b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <p className="text-sm text-slate-600 uppercase tracking-wide">Margin</p>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2" data-testid="text-kpi-margin">
                42%
              </p>
              {/* Sparkline Placeholder */}
              <svg className="sparkline mx-auto" viewBox="0 0 48 24" fill="none">
                <polyline
                  points="0,22 12,18 24,14 36,10 48,6"
                  stroke="#16a34a"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
