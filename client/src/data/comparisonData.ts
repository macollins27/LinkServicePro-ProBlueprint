export type StateType = "yes" | "partial" | "no";

export interface FeatureDetail {
  state: StateType;
  oneLine: string;
  details: string[];
}

export interface Feature {
  key: string;
  title: string;
  lsp: FeatureDetail;
  other_fsm: FeatureDetail;
  sheets: FeatureDetail;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    key: "project",
    title: "Project Management (multi–work orders)",
    lsp: {
      state: "yes",
      oneLine: "One project → many work orders, estimates, invoices—all linked.",
      details: [
        "Schedule and track multiple tickets under a single project.",
        "Roll-up billing or per-ticket invoicing."
      ]
    },
    other_fsm: {
      state: "partial",
      oneLine: "Tickets exist; true project roll-ups vary by product/plan.",
      details: [
        "Projects spread across modules; linkage is inconsistent.",
        "Roll-ups often manual."
      ]
    },
    sheets: {
      state: "partial",
      oneLine: "Tabs approximate projects; no automatic linkage.",
      details: [
        "Manual copy/paste between tabs.",
        "No project timeline."
      ]
    },
    icon: "ClipboardList"
  },
  {
    key: "labor",
    title: "Employee Labor & Payroll",
    lsp: {
      state: "yes",
      oneLine: "Wages & rules tied to time; project totals and payroll export.",
      details: [
        "Track hours per project, apply overtime rules.",
        "Export or sync to payroll."
      ]
    },
    other_fsm: {
      state: "partial",
      oneLine: "Time capture common; wage rules/payroll export vary by tier.",
      details: [
        "Often requires add-ons.",
        "Totals rarely roll up cleanly at project."
      ]
    },
    sheets: {
      state: "partial",
      oneLine: "Formulas possible; error-prone and manual.",
      details: [
        "No pay rules engine.",
        "No audit trail."
      ]
    },
    icon: "Users"
  },
  {
    key: "gps",
    title: "GPS-Verified Timesheets",
    lsp: {
      state: "yes",
      oneLine: "Geo-verified in/out; hours summed at the project.",
      details: [
        "Location checks at clock events.",
        "Reduces time fraud, improves job costing."
      ]
    },
    other_fsm: {
      state: "partial",
      oneLine: "GPS exists, but project-level roll-ups vary.",
      details: [
        "Geo attached to the person, not the project.",
        "Summaries require exports."
      ]
    },
    sheets: {
      state: "no",
      oneLine: "No GPS verification.",
      details: [
        "Manual entry only.",
        "No location context."
      ]
    },
    icon: "MapPin"
  },
  {
    key: "assets",
    title: "Asset Tracking & Inspection Integrations",
    lsp: {
      state: "yes",
      oneLine: "Property Organizer + Link Inspect Pro tied to jobs/projects.",
      details: [
        "Asset files, photos, and inspections live on the timeline.",
        "Reports attached to work orders."
      ]
    },
    other_fsm: {
      state: "partial",
      oneLine: "Integrations limited or gated; linkage inconsistent.",
      details: [
        "Assets exist, but inspection flows vary.",
        "Cross-module context gets lost."
      ]
    },
    sheets: {
      state: "no",
      oneLine: "No structured assets or inspections.",
      details: [
        "Files live in drives/email.",
        "No audit trail."
      ]
    },
    icon: "Package"
  }
];

export const CONTEXTS = [
  { key: "other_fsm", label: "Other FSM" },
  { key: "sheets", label: "Spreadsheets" }
];

export const STATE_LABELS: Record<StateType, string> = {
  yes: "Included",
  partial: "Partial / workaround",
  no: "Missing"
};
