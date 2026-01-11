import scheduleImg from "@assets/generated_images/Dispatcher_coordinating_schedules_with_tablet_176e4cbb.png";
import quoteImg from "@assets/generated_images/Contractor_consulting_homeowner_with_tablet_42e35f6b.png";
import invoiceImg from "@assets/generated_images/Technician_customer_completing_payment_transaction_7ab756bb.png";
import recurringImg from "@assets/generated_images/Technician_reviewing_maintenance_plan_customers_e6b8b303.png";

export type FlowStep = {
  key: "schedule" | "quote" | "invoice" | "recurring";
  title: string;
  blurb: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  img: { src: string; alt: string };
  icon: "calendar" | "file" | "credit" | "repeat";
};

export const flowSteps: FlowStep[] = [
  {
    key: "schedule",
    title: "Schedule & Dispatch",
    blurb: "Assign jobs in minutes, route crews, and keep the day on track.",
    description: "Smart scheduling tools help you coordinate your entire team from one dashboard. Drag-and-drop appointments, assign the right crew to each job, and optimize routes to minimize drive time. Your team sees updates instantly on their mobile devices.",
    features: [
      "Visual calendar with drag-and-drop job assignment",
      "GPS-optimized routing to reduce drive time",
      "Real-time crew notifications and job updates"
    ],
    ctaText: "Explore Scheduling",
    ctaHref: "/features/scheduling-dispatch",
    img: { src: scheduleImg, alt: "Dispatcher coordinating schedules with team" },
    icon: "calendar",
  },
  {
    key: "quote",
    title: "Estimates & Quotes",
    blurb: "Create clean, professional estimates and get approvals fast.",
    description: "Build detailed estimates on-site with customizable templates and your service catalog. Customers can review, approve, and sign quotes right from their phone or email. Convert approved estimates into scheduled jobs with one click.",
    features: [
      "Pre-built templates for common services",
      "Digital signatures and instant customer approval",
      "One-click conversion from quote to scheduled job"
    ],
    ctaText: "Build Better Quotes",
    ctaHref: "/features/estimates-quotes",
    img: { src: quoteImg, alt: "Contractor presenting estimate to homeowner" },
    icon: "file",
  },
  {
    key: "invoice",
    title: "Invoicing & Payments",
    blurb: "Invoice the same day and collect payments without the paper chase.",
    description: "Send professional invoices the moment the job is done. Accept credit cards, ACH transfers, or cash with built-in payment processing. Automated reminders help you get paid faster while reducing no-shows and late payments.",
    features: [
      "Mobile payment processing at the job site",
      "Automated payment reminders and follow-ups",
      "Full payment history and accounting integration"
    ],
    ctaText: "See Invoicing",
    ctaHref: "/features/invoicing-payments",
    img: { src: invoiceImg, alt: "Technician and customer completing payment" },
    icon: "credit",
  },
  {
    key: "recurring",
    title: "Maintenance Plans",
    blurb: "Turn one-offs into predictable revenue with recurring visits.",
    description: "Create service agreements that bring customers back automatically. Schedule seasonal maintenance, track contract terms, and bill recurring services on autopilot. Build steady, predictable cash flow while strengthening customer relationships.",
    features: [
      "Automated scheduling for recurring service visits",
      "Contract management with renewal reminders",
      "Recurring billing with automatic payment collection"
    ],
    ctaText: "Maintenance Plans",
    ctaHref: "/features/maintenance-plans",
    img: { src: recurringImg, alt: "Technician reviewing maintenance plan with customers" },
    icon: "repeat",
  },
];
