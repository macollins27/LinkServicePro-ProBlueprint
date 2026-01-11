interface IntegrationsStripProps {
  integrations?: string[];
}

export default function IntegrationsStrip({ integrations }: IntegrationsStripProps) {
  const defaultIntegrations = [
    "QuickBooks",
    "Xero",
    "iOS/Android",
    "SMS/Email",
    "Google Calendar",
    "Zapier"
  ];

  const items = integrations && integrations.length > 0 ? integrations : defaultIntegrations;

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50"
      data-testid="integrations-strip"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Works with
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            Integrates with the tools you already use
          </p>
        </div>

        {/* Integration chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((integration) => (
            <div
              key={integration}
              className="bg-white ring-1 ring-slate-200 px-4 py-2 font-semibold text-slate-900 shadow-sm"
              data-testid={`chip-integration-${integration.toLowerCase().replace(/\//g, '-').replace(/\s/g, '-')}`}
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
