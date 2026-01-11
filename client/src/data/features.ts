import {
  CalendarClock,
  ClipboardList,
  Signature,
  Bell,
  RefreshCw,
  Route as RouteIcon,
  Boxes,
  BarChart3,
  ListChecks
} from "lucide-react";

export type Plan = "Free" | "Starter" | "Essential" | "Premium" | "Platinum";

export type FeatureMeta = {
  key: string;
  label: string;
  slug: string;
  minPlan: Plan;
  blurb?: string;
  Icon: any;
};

export const FEATURE_META: FeatureMeta[] = [
  {
    key: "scheduling",
    label: "Drag-and-drop scheduling (calendar sync)",
    slug: "scheduling",
    minPlan: "Free",
    blurb: "Two-way sync with Google & Apple Calendar.",
    Icon: CalendarClock
  },
  {
    key: "work-orders",
    label: "Work orders with checklists & photos",
    slug: "work-orders",
    minPlan: "Free",
    blurb: "Standardize jobs with checklists and photo notes.",
    Icon: ClipboardList
  },
  {
    key: "estimates-esign",
    label: "Estimates & e-signatures",
    slug: "estimates",
    minPlan: "Free",
    blurb: "Send quotes and get approvals from any device.",
    Icon: Signature
  },
  {
    key: "reminders",
    label: "Automated reminders & messaging",
    slug: "messaging-reminders",
    minPlan: "Starter",
    blurb: "Cut no-shows with SMS/email reminders.",
    Icon: Bell
  },
  {
    key: "recurring",
    label: "Recurring warranty/maintenance visits",
    slug: "recurring",
    minPlan: "Essential",
    blurb: "Plan service agreements and repeating jobs.",
    Icon: RefreshCw
  },
  {
    key: "routing-gps",
    label: "Route optimization & GPS",
    slug: "routing-gps",
    minPlan: "Essential",
    blurb: "Reduce windshield time with optimized routes.",
    Icon: RouteIcon
  },
  {
    key: "inventory-costing",
    label: "Parts inventory & job costing",
    slug: "inventory-costing",
    minPlan: "Premium",
    blurb: "Track parts, costs, and profitability.",
    Icon: Boxes
  },
  {
    key: "analytics",
    label: "Advanced reporting & analytics",
    slug: "analytics",
    minPlan: "Premium",
    blurb: "Dashboards and custom reports.",
    Icon: BarChart3
  },
  {
    key: "custom-checklists",
    label: "Custom checklists & fields",
    slug: "custom-checklists",
    minPlan: "Premium",
    blurb: "Capture exactly the data your team needs.",
    Icon: ListChecks
  }
];
