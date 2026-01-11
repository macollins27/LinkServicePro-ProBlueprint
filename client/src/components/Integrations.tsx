import { ArrowRight } from "lucide-react";
import integrationsImage from "@assets/generated_images/Electrician_working_on_outdoor_panel_d3898d03.png";

export default function Integrations() {
  const accountingIntegrations = [
    { name: "QuickBooks", description: "Sync invoices & payments" },
    { name: "Xero", description: "Sync invoices & payments" },
  ];

  const ecosystemApps = [
    { name: "Zapier", label: "1000+ app connections" },
    { name: "Google Calendar", label: "Schedule sync" },
    { name: "Mailchimp", label: "Email marketing" },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-integrations-heading">
            Integrations
          </h2>
          <p className="text-slate-700">Connect the tools you already use.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={integrationsImage} 
            alt="Electrician working on outdoor electrical panel at commercial building" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        {/* Accounting - Row 1 */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">Accounting</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {accountingIntegrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white ring-1 ring-slate-200 elev-2 hover-elevate"
                data-testid={`card-integration-accounting-${index}`}
              >
                <div className="w-12 h-12 bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-base font-bold text-[#0B5FFF]">{integration.name.substring(0, 2)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 truncate">{integration.name}</h4>
                  <p className="text-sm text-slate-600 truncate" data-testid={`text-integration-description-accounting-${index}`}>
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Apps - Row 2 */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">Ecosystem</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecosystemApps.map((app, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white ring-1 ring-slate-200 elev-2 hover-elevate"
                data-testid={`card-integration-ecosystem-${index}`}
              >
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-slate-700">{app.name.substring(0, 1)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 text-sm truncate">{app.name}</h4>
                  <p className="text-xs text-slate-500 truncate">{app.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-left">
          <a
            href="/integrations"
            className="inline-flex items-center gap-2 text-[#0B5FFF] font-semibold link-underline focus-outline"
            data-testid="link-view-all-integrations"
          >
            View all integrations <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
