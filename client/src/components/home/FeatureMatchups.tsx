import React from "react";
import { Link } from "react-router-dom";
import { Check, Minus, X, ClipboardList, Users, MapPin, Package } from "lucide-react";
import { FEATURES, CONTEXTS, STATE_LABELS, type StateType, type Feature } from "@/data/comparisonData";

type ContextKey = "other_fsm" | "sheets";

const ICON_MAP = {
  ClipboardList,
  Users,
  MapPin,
  Package
};

export default function FeatureMatchups() {
  const [activeContext, setActiveContext] = React.useState<ContextKey>("other_fsm");
  const [expandedCards, setExpandedCards] = React.useState<Set<string>>(new Set());

  const toggleCard = (key: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const lspWins = FEATURES.filter(f => f.lsp.state === "yes").length;
  const contextWins = FEATURES.filter(f => f[activeContext].state === "yes").length;
  const activeContextLabel = CONTEXTS.find(c => c.key === activeContext)?.label || "";

  return (
    <section className="relative bg-[#0A1326] py-16 sm:py-20" style={{
      backgroundImage: `
        linear-gradient(rgba(10, 19, 38, 0.96), rgba(10, 19, 38, 0.96)),
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.04) 19px, rgba(255,255,255,0.04) 20px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.04) 19px, rgba(255,255,255,0.04) 20px)
      `,
      backgroundSize: "100% 100%, 20px 20px, 20px 20px"
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
            See it in one table
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Teams Switch
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl">
            Projects with real dollars, hours, assets, and conversations—kept in one place so work flows and cash lands sooner.
          </p>
        </header>

        {/* Context Switcher */}
        <div role="tablist" aria-label="Comparison context" className="flex items-center gap-2 mb-6">
          {CONTEXTS.map((ctx, idx) => (
            <button
              key={ctx.key}
              role="tab"
              type="button"
              aria-selected={activeContext === ctx.key}
              aria-controls="feature-cards"
              onClick={() => setActiveContext(ctx.key as ContextKey)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  const nextIdx = (idx + 1) % CONTEXTS.length;
                  setActiveContext(CONTEXTS[nextIdx].key as ContextKey);
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  const prevIdx = (idx - 1 + CONTEXTS.length) % CONTEXTS.length;
                  setActiveContext(CONTEXTS[prevIdx].key as ContextKey);
                } else if (e.key === "Home") {
                  e.preventDefault();
                  setActiveContext(CONTEXTS[0].key as ContextKey);
                } else if (e.key === "End") {
                  e.preventDefault();
                  setActiveContext(CONTEXTS[CONTEXTS.length - 1].key as ContextKey);
                }
              }}
              className={`
                rounded-lg px-4 py-2 text-sm font-medium transition-colors
                focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0A1326]
                ${activeContext === ctx.key
                  ? "bg-white/15 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90"
                }
              `}
              data-testid={`pill-${ctx.key}`}
            >
              {ctx.label}
            </button>
          ))}
        </div>

        {/* Score Strip */}
        <div className="mb-8 text-sm text-white/80">
          <span className="font-semibold text-emerald-400">LinkServicePro: {lspWins}/4 wins</span>
          {" vs. "}
          <span className="text-white/60">{activeContextLabel}: {contextWins}/4</span>
        </div>

        {/* Feature Cards */}
        <div id="feature-cards" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.key}
              feature={feature}
              context={activeContext}
              isExpanded={expandedCards.has(feature.key)}
              onToggle={() => toggleCard(feature.key)}
            />
          ))}
        </div>

        {/* Pricing Callout */}
        <div className="mb-8 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-600/20 px-2 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">
              Unlimited users on paid plans
            </span>
            <span className="text-white/40">•</span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-600/20 px-2 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">
              Job-based pricing
            </span>
          </div>
          <p className="text-sm text-white/70">
            Grow crews without per-seat math; pricing aligns to work, not headcount.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Link
            to="/signup"
            className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-[#0A1326]"
            data-testid="link-cta-primary"
          >
            Get Started Free
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 focus:ring-offset-[#0A1326]"
            data-testid="link-cta-secondary"
          >
            Talk to an expert
          </Link>
        </div>

        {/* Footnote */}
        <p className="text-xs text-white/50 text-center">
          Generic comparisons reflect common patterns; availability varies by vendor/version.
        </p>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  context,
  isExpanded,
  onToggle
}: {
  feature: Feature;
  context: ContextKey;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP];
  const contextData = feature[context];
  const detailsId = `details-${feature.key}`;

  return (
    <article className="rounded-lg border border-white/10 bg-white/5 p-4">
      {/* Feature Title */}
      <div className="flex items-start gap-3 mb-4">
        {Icon && (
          <div className="flex-shrink-0 mt-0.5">
            <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
        )}
        <h3 className="text-base font-semibold text-white leading-snug">
          {feature.title}
        </h3>
      </div>

      {/* LSP Row */}
      <div className="mb-3 flex items-start gap-2">
        <StateIcon state="yes" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white mb-1">LinkServicePro</p>
          <p className="text-sm text-white/80">{feature.lsp.oneLine}</p>
        </div>
      </div>

      {/* Context Row */}
      <div className="mb-4 flex items-start gap-2">
        <StateIcon state={contextData.state} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white mb-1">
            {CONTEXTS.find(c => c.key === context)?.label}
          </p>
          <p className="text-sm text-white/80">{contextData.oneLine}</p>
        </div>
      </div>

      {/* Disclosure Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        className="text-xs font-medium text-blue-400 hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
        data-testid={`button-toggle-${feature.key}`}
      >
        {isExpanded ? "Hide details" : "Show details"}
      </button>

      {/* Details (Expanded) */}
      {isExpanded && (
        <div id={detailsId} className="mt-4 pt-4 border-t border-white/10 space-y-3">
          {/* LSP Details */}
          <div>
            <p className="text-xs font-semibold text-white/90 mb-2">LinkServicePro</p>
            <ul className="space-y-1">
              {feature.lsp.details.map((detail, idx) => (
                <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Context Details */}
          <div>
            <p className="text-xs font-semibold text-white/90 mb-2">
              {CONTEXTS.find(c => c.key === context)?.label}
            </p>
            <ul className="space-y-1">
              {contextData.details.map((detail, idx) => (
                <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                  <span className={contextData.state === "no" ? "text-rose-400" : "text-amber-400"} aria-hidden="true">
                    •
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

function StateIcon({ state }: { state: StateType }) {
  const label = STATE_LABELS[state];
  
  if (state === "yes") {
    return (
      <div className="flex-shrink-0 mt-0.5">
        <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </div>
    );
  }
  
  if (state === "partial") {
    return (
      <div className="flex-shrink-0 mt-0.5">
        <Minus className="h-4 w-4 text-amber-400" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </div>
    );
  }
  
  return (
    <div className="flex-shrink-0 mt-0.5">
      <X className="h-4 w-4 text-rose-400" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
