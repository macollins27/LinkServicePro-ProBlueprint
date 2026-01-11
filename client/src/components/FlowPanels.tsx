import { FileText, Clipboard, DollarSign, ArrowRight, CheckCircle2, TrendingDown } from "lucide-react";

export default function FlowPanels() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-flow-heading">
            From Quote to Payment
          </h2>
          <p className="text-lg text-slate-700">
            Turn estimates into work orders and get paid faster.
          </p>
        </div>

        {/* Connecting Flow Line */}
        <div className="mb-8">
          <div className="flow-gradient-line max-w-5xl mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Quote */}
          <div className="flex-1 space-y-4 bg-white elev-1 ring-1 ring-slate-200 p-6 card-interactive" data-testid="panel-quote">
            <div className="w-20 h-20 bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 flex items-center justify-center">
              <FileText className="w-10 h-10 text-[#0B5FFF]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Quote</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Professional estimates with line items and photos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">E-signature approval built-in</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Auto-converts to work orders</span>
              </li>
            </ul>
          </div>

          {/* Work Order */}
          <div className="flex-1 space-y-4 bg-white elev-1 ring-1 ring-slate-200 p-6 card-interactive" data-testid="panel-work-order">
            <div className="w-20 h-20 bg-[#00C2A8]/10 border border-[#00C2A8]/20 flex items-center justify-center">
              <Clipboard className="w-10 h-10 text-[#00C2A8]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Work Order</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Job details and crew assignments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Built-in safety checklists</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Request deposits or partials</span>
              </li>
            </ul>
          </div>

          {/* Invoice & Payment */}
          <div className="flex-1 space-y-4 bg-white elev-1 ring-1 ring-slate-200 p-6 card-interactive" data-testid="panel-invoice">
            <div className="w-20 h-20 bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
              <DollarSign className="w-10 h-10 text-[#F59E0B]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Get Paid</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Auto-generated invoices from work orders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Deposits and partials supported</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingDown className="w-4 h-4 text-chart-3 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Avg. days-to-paid ↓ by 40%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
