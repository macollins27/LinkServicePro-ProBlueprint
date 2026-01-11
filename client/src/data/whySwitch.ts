// ============================================================================
// WHY TEAMS SWITCH - COMPARISON TABLE DATA
// ============================================================================

/**
 * Feature differentiation matrix for LinkServicePro vs. common alternatives.
 * Focuses on 4 core differentiators with 3 competitor rows for maximum scannability.
 */

// ============================================================================
// HEADER CONTENT
// ============================================================================

export const headerContent = {
  eyebrow: "See it in one table",
  headline: "Why Teams Switch",
  supporting:
    "Projects with real dollars, hours, assets, and conversations—kept in one place so work flows and cash lands sooner.",
} as const;

// ============================================================================
// CAPABILITY (COLUMN) DEFINITIONS
// ============================================================================

export const capabilities = [
  {
    key: "project_management" as const,
    shortLabel: "Projects",
    fullLabel: "Project Management (multi-work orders)",
    infoTooltip: "One project → many work orders, estimates, invoices—all linked.",
  },
  {
    key: "employee_labor_payroll" as const,
    shortLabel: "Labor",
    fullLabel: "Employee Labor & Payroll",
    infoTooltip: "Wages + pay rules tied to time; project totals and payroll export.",
  },
  {
    key: "gps_timesheets" as const,
    shortLabel: "GPS Time",
    fullLabel: "GPS-Verified Timesheets",
    infoTooltip: "Geo-verified in/out; hours summed at the project.",
  },
  {
    key: "asset_inspection_integrations" as const,
    shortLabel: "Assets",
    fullLabel: "Asset Tracking & Inspection Integrations",
    infoTooltip: "Property Organizer + Link Inspect Pro linked to projects/jobs.",
  },
] as const;

// Type alias for capability keys (type-safe)
export type CapabilityKey = (typeof capabilities)[number]["key"];

// ============================================================================
// CELL STATUS TYPES
// ============================================================================

export type CellStatus = "full" | "partial" | "missing";

export interface CellState {
  status: CellStatus;
  tooltip: string; // Explains why this status for this competitor
  srLabel: string; // Screen reader text (e.g., "Included", "Partial", "Missing")
}

// ============================================================================
// COMPETITOR (ROW) DEFINITION
// ============================================================================

export interface Competitor {
  key: string;
  name: string;
  highlighted: boolean; // LinkServicePro is highlighted
  capabilities: Record<CapabilityKey, CellState>;
  details: string[]; // For "What this means" expander (2 bullets)
}

// ============================================================================
// COMPETITOR DATA
// ============================================================================

export const competitors: Competitor[] = [
  // -----------------------------------------------
  // LINKSERVICEPRO (all ✓)
  // -----------------------------------------------
  {
    key: "linkservicepro",
    name: "LinkServicePro",
    highlighted: true,
    capabilities: {
      project_management: {
        status: "full",
        tooltip: "One project → many work orders, estimates, invoices—all linked.",
        srLabel: "Included",
      },
      employee_labor_payroll: {
        status: "full",
        tooltip: "Wages + pay rules tied to time; project totals and payroll export.",
        srLabel: "Included",
      },
      gps_timesheets: {
        status: "full",
        tooltip: "Geo-verified in/out; hours summed at the project.",
        srLabel: "Included",
      },
      asset_inspection_integrations: {
        status: "full",
        tooltip: "Property Organizer + Link Inspect Pro linked to projects/jobs.",
        srLabel: "Included",
      },
    },
    details: [], // No expander for highlighted row
  },

  // -----------------------------------------------
  // OTHER FSM SOFTWARE (generic)
  // -----------------------------------------------
  {
    key: "other_fsm",
    name: "Other FSM Software",
    highlighted: false,
    capabilities: {
      project_management: {
        status: "partial",
        tooltip: "Most FSM platforms focus on tickets, not true multi-work-order projects.",
        srLabel: "Partial",
      },
      employee_labor_payroll: {
        status: "partial",
        tooltip: "Basic time tracking exists; full payroll integration varies by plan.",
        srLabel: "Partial",
      },
      gps_timesheets: {
        status: "partial",
        tooltip: "GPS tracking available; project-level accumulation inconsistent.",
        srLabel: "Partial",
      },
      asset_inspection_integrations: {
        status: "partial",
        tooltip: "Limited integrations; asset linkage to projects varies.",
        srLabel: "Partial",
      },
    },
    details: [
      "Most FSM platforms focus on tickets, not true multi-work-order projects.",
      "Limited integrations and inconsistent project-level data make growth tracking harder.",
    ],
  },

  // -----------------------------------------------
  // SPREADSHEETS (Excel/Sheets)
  // -----------------------------------------------
  {
    key: "spreadsheets",
    name: "Spreadsheets (Excel/Sheets)",
    highlighted: false,
    capabilities: {
      project_management: {
        status: "partial",
        tooltip: "Tabs can approximate projects; no true linkage between work orders.",
        srLabel: "Partial",
      },
      employee_labor_payroll: {
        status: "partial",
        tooltip: "Formulas work for hours; no automated pay rules or payroll export.",
        srLabel: "Partial",
      },
      gps_timesheets: {
        status: "missing",
        tooltip: "No geo verification capability.",
        srLabel: "Missing",
      },
      asset_inspection_integrations: {
        status: "missing",
        tooltip: "No structured assets or inspection data integration.",
        srLabel: "Missing",
      },
    },
    details: [
      "Spreadsheets require manual effort to link jobs, hours, and assets—easy to lose sync.",
      "No geo-verified timesheets or structured inspection data means field teams use workarounds.",
    ],
  },
];

// ============================================================================
// LEGAL NOTE
// ============================================================================

export const legalNote =
  "Generic rows reflect common patterns; availability varies by vendor/version.";

// ============================================================================
// CTA CONTENT
// ============================================================================

export const ctaContent = {
  primary: {
    text: "Get Started Free",
    link: "/signup",
  },
  secondary: {
    text: "Talk to an expert",
    link: "/contact",
  },
} as const;
