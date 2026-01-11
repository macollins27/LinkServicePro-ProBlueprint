import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, Minus, X, ChevronDown, Info } from "lucide-react";
import {
  headerContent,
  capabilities,
  competitors,
  legalNote,
  ctaContent,
  type CellStatus,
  type Competitor,
} from "@/data/whySwitch";

/**
 * WHY TEAMS SWITCH SECTION
 * 
 * Simplified comparison matrix showing 4 core LinkServicePro differentiators
 * vs. 3 common alternatives (reduced for scannability).
 * 
 * Layout:
 * - Desktop: Sticky header + sticky first column table, all 4 columns visible
 * - Mobile: All 4 columns always visible with horizontal scroll
 * 
 * Features:
 * - Semantic table with proper ARIA
 * - Cell states: ✓ (green), ~ (amber), ✕ (red)
 * - Tooltips portaled to body (never clipped)
 * - Row expanders for details
 * - Analytics tracking
 */

// ============================================================================
// ANALYTICS HELPER
// ============================================================================

function trackWhySwitch(event: string, payload?: Record<string, unknown>) {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", `comparison.${event}`, payload);
  }
}

// ============================================================================
// STATUS STYLING
// ============================================================================

function getStatusIcon(status: CellStatus) {
  switch (status) {
    case "full":
      return Check;
    case "partial":
      return Minus;
    case "missing":
      return X;
  }
}

function getStatusColor(status: CellStatus) {
  switch (status) {
    case "full":
      return "text-green-500";
    case "partial":
      return "text-amber-500";
    case "missing":
      return "text-red-500";
  }
}

// ============================================================================
// STATE CELL COMPONENT
// ============================================================================

interface StateCellProps {
  status: CellStatus;
  tooltip: string;
  srLabel: string;
}

function StateCell({ status, tooltip, srLabel }: StateCellProps) {
  const Icon = getStatusIcon(status);
  const colorClass = getStatusColor(status);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center justify-center p-3">
          <Icon className={`w-5 h-5 ${colorClass}`} aria-hidden="true" />
          <span className="sr-only">{srLabel}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs bg-white text-gray-900 border border-gray-200"
      >
        <p className="text-sm">{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// ============================================================================
// ROW DETAILS COMPONENT
// ============================================================================

interface RowDetailsProps {
  competitorKey: string;
  details: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

function RowDetails({ competitorKey, details, isExpanded, onToggle }: RowDetailsProps) {
  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle}>
      <CollapsibleTrigger asChild>
        <button
          className="text-xs text-[#0B5FFF] hover:text-[#0B5FFF]/80 flex items-center gap-1 mt-2 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] rounded px-2 py-1"
          data-testid={`button-expand-${competitorKey}`}
          aria-expanded={isExpanded}
        >
          What this means
          <ChevronDown
            className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-1">
        {details.map((detail, idx) => (
          <p key={idx} className="text-xs text-white/60">
            • {detail}
          </p>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

// ============================================================================
// COMPARISON ROW COMPONENT
// ============================================================================

interface ComparisonRowProps {
  competitor: Competitor;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function ComparisonRow({
  competitor,
  isExpanded,
  onToggleExpand,
}: ComparisonRowProps) {
  const rowClass = competitor.highlighted
    ? "bg-[#0B5FFF]/10 border-t border-b border-[#0B5FFF]/20"
    : "";

  return (
    <>
      <tr className={rowClass} data-testid={`row-${competitor.key}`}>
        {/* First column: competitor name (sticky, wider - 26-28%) */}
        <th
          scope="row"
          className="sticky left-0 bg-[#0A1326] z-20 px-6 py-4 text-left text-sm font-semibold text-white border-r border-white/10"
          style={{ width: "27%", minWidth: "18ch" }}
        >
          <div className="pr-2">
            <div className="break-words" title={competitor.name}>
              {competitor.name}
            </div>
            {!competitor.highlighted && (
              <RowDetails
                competitorKey={competitor.key}
                details={competitor.details}
                isExpanded={isExpanded}
                onToggle={onToggleExpand}
              />
            )}
          </div>
        </th>

        {/* Capability cells (all 4 always visible) */}
        {capabilities.map((cap) => {
          const cellState = competitor.capabilities[cap.key];
          return (
            <td
              key={cap.key}
              className="border-r border-white/10 text-center"
              data-testid={`cell-${competitor.key}-${cap.key}`}
            >
              {cellState && (
                <StateCell
                  status={cellState.status}
                  tooltip={cellState.tooltip}
                  srLabel={cellState.srLabel}
                />
              )}
            </td>
          );
        })}
      </tr>
    </>
  );
}

// ============================================================================
// COMPARISON TABLE COMPONENT
// ============================================================================

interface ComparisonTableProps {
  expandedRows: Set<string>;
  onToggleRow: (key: string) => void;
}

function ComparisonTable({
  expandedRows,
  onToggleRow,
}: ComparisonTableProps) {
  return (
    <div className="relative">
      {/* Horizontal scroll container with gradient fade */}
      <div
        className="overflow-x-auto"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)",
        }}
      >
        <table className="w-full border-collapse" data-testid="table-comparison">
          <thead>
            <tr>
              {/* Top-left corner cell (sticky, wider - 26-28%) */}
              <th
                scope="col"
                className="sticky left-0 top-0 z-40 bg-[#0A1326] px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white/60 border-r border-b border-white/10"
                style={{ width: "27%", minWidth: "18ch" }}
              >
                Solution
              </th>

              {/* Capability column headers (sticky top, left-aligned with info icons, 2-line max) */}
              {capabilities.map((cap) => (
                <th
                  key={cap.key}
                  scope="col"
                  className="sticky top-0 z-30 bg-[#0A1326] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white/60 border-r border-b border-white/10"
                  data-testid={`header-${cap.key}`}
                >
                  <div className="flex items-start gap-1.5">
                    <span className="flex-1 leading-snug break-words line-clamp-2">{cap.fullLabel}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          className="flex-shrink-0 text-white/40 hover:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] rounded"
                          aria-label={`More info about ${cap.shortLabel}`}
                        >
                          <Info className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="max-w-xs bg-white text-gray-900 border border-gray-200"
                      >
                        <p className="text-sm">{cap.infoTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor) => (
              <ComparisonRow
                key={competitor.key}
                competitor={competitor}
                isExpanded={expandedRows.has(competitor.key)}
                onToggleExpand={() => onToggleRow(competitor.key)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN SECTION COMPONENT
// ============================================================================

export function WhySwitch() {
  // State: just track expanded rows (no column visibility needed with 4 columns)
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  // Handlers
  const handleRowToggle = (key: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedRows(newExpanded);
    trackWhySwitch("row_expand", { row_key: key, expanded: !expandedRows.has(key) });
  };

  const handleCTAClick = (ctaType: "primary" | "secondary") => {
    trackWhySwitch(`cta_${ctaType}`);
  };

  return (
    <TooltipProvider>
      <section
        className="relative bg-[#0A1326] py-16 lg:py-24"
        aria-labelledby="why-switch-heading"
      >
        {/* Faint blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
            linear-gradient(rgba(11, 95, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11, 95, 255, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER BLOCK - LEFT ALIGNED */}
        <div className="max-w-4xl mb-12">
          <p
            className="text-xs uppercase tracking-widest text-white/60 mb-3"
            data-testid="text-eyebrow"
          >
            {headerContent.eyebrow}
          </p>
          <h2
            id="why-switch-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            data-testid="heading-why-switch"
          >
            {headerContent.headline}
          </h2>
          <p className="text-base text-white/60" data-testid="text-supporting">
            {headerContent.supporting}
          </p>
        </div>

        {/* LEGEND - Above table, right-aligned on desktop */}
        <div className="mb-4 flex flex-wrap items-center gap-6 text-sm justify-start lg:justify-end">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
            <span className="text-white/70">Included</span>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="flex items-center gap-2 cursor-help focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] rounded px-1"
                aria-label="More information about partial support"
              >
                <Minus className="w-4 h-4 text-amber-500" aria-hidden="true" />
                <span className="text-white/70">Partial / workaround</span>
                <Info className="w-3 h-3 text-white/40" aria-hidden="true" />
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="max-w-xs bg-white text-gray-900 border border-gray-200"
            >
              <p className="text-sm">
                Partial or requires workarounds. Some steps may be manual or split across tools.
              </p>
            </TooltipContent>
          </Tooltip>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-500" aria-hidden="true" />
            <span className="text-white/70">Missing</span>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="mb-8">
          <ComparisonTable
            expandedRows={expandedRows}
            onToggleRow={handleRowToggle}
          />
        </div>

        {/* LEGAL NOTE */}
        <p className="text-xs text-white/40 mb-8" data-testid="text-legal">
          {legalNote}
        </p>

        {/* CTA BLOCK - CENTERED */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto"
            data-testid="button-cta-primary"
            onClick={() => handleCTAClick("primary")}
          >
            <Link to={ctaContent.primary.link}>{ctaContent.primary.text}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10"
            data-testid="button-cta-secondary"
            onClick={() => handleCTAClick("secondary")}
          >
            <Link to={ctaContent.secondary.link}>{ctaContent.secondary.text}</Link>
          </Button>
        </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
