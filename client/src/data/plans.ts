export interface Plan {
  id: string;
  name: string;
  users: string;
  jobsCap: number;
  price: number;
  overage: number;
  features: string[];
  cta: string;
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    users: "1 user",
    jobsCap: 30,
    price: 0,
    overage: 0,
    features: [
      "Drag-and-drop scheduling",
      "Work orders with photos",
      "Estimates & e-signatures",
      "Invoicing & card payments",
      "Basic reporting"
    ],
    cta: "Start Free"
  },
  {
    id: "starter",
    name: "Starter",
    users: "Unlimited users",
    jobsCap: 50,
    price: 29,
    overage: 0.60,
    features: [
      "Everything in Free",
      "Email reminders",
      "Task management & roles",
      "Priority support"
    ],
    cta: "Start Free"
  },
  {
    id: "essential",
    name: "Essential",
    users: "Unlimited users",
    jobsCap: 150,
    price: 79,
    overage: 0.45,
    features: [
      "Everything in Starter",
      "SMS & email messaging",
      "GPS routing & capacity",
      "Advanced scheduling"
    ],
    cta: "Start Free"
  },
  {
    id: "premium",
    name: "Premium",
    users: "Unlimited users",
    jobsCap: 500,
    price: 179,
    overage: 0.30,
    features: [
      "Everything in Essential",
      "Advanced reporting & dashboards",
      "Custom fields & workflows",
      "API access"
    ],
    cta: "Start Free"
  },
  {
    id: "platinum",
    name: "Platinum",
    users: "Unlimited users",
    jobsCap: Infinity,
    price: 399,
    overage: 0,
    features: [
      "Everything in Premium",
      "Unlimited jobs",
      "White-label options",
      "Dedicated account manager"
    ],
    cta: "Contact Sales"
  }
];

export interface CalculatorInputs {
  jobsPerMonth: number;
  selectedPlanId: string;
  billingCycle: "monthly" | "annual";
  smsPerMonth: number;
  paymentVolumePerMonth: number;
}

export interface CalculatorResults {
  plan: Plan;
  baseFee: number;
  overageJobs: number;
  overageCost: number;
  smsCost: number;
  processingCost: number;
  subtotal: number;
  tax: number;
  monthlyTotal: number;
  annualTotal: number;
  annualSavings: number;
}

const ANNUAL_DISCOUNT = 0.20;
const TAX_RATE = 0.04;
const SMS_RATE = 0.015;
const PROCESSING_RATE = 0.029;
const PROCESSING_FIXED = 0.30;

export function planForJobs(jobsPerMonth: number): Plan {
  for (const plan of PLANS) {
    if (jobsPerMonth <= plan.jobsCap) {
      return plan;
    }
  }
  return PLANS[PLANS.length - 1];
}

export function getPlanById(planId: string): Plan {
  return PLANS.find(p => p.id === planId) || PLANS[0];
}

export function calculatePricing(inputs: CalculatorInputs): CalculatorResults {
  const plan = getPlanById(inputs.selectedPlanId);
  
  // Base fee
  let baseFee = plan.price;
  
  // Overage calculation
  let overageJobs = 0;
  let overageCost = 0;
  
  if (inputs.jobsPerMonth > plan.jobsCap && plan.jobsCap !== Infinity) {
    overageJobs = inputs.jobsPerMonth - plan.jobsCap;
    overageCost = overageJobs * plan.overage;
  }
  
  // SMS cost
  const smsCost = inputs.smsPerMonth * SMS_RATE;
  
  // Processing cost
  const processingCost = (inputs.paymentVolumePerMonth * PROCESSING_RATE) + 
    (inputs.jobsPerMonth * PROCESSING_FIXED);
  
  // Subtotal
  const subtotal = baseFee + overageCost + smsCost + processingCost;
  
  // Tax
  const tax = subtotal * TAX_RATE;
  
  // Monthly total
  const monthlyTotal = subtotal + tax;
  
  // Annual calculations
  let annualTotal = monthlyTotal * 12;
  let annualSavings = 0;
  
  if (inputs.billingCycle === "annual") {
    const annualDiscount = (baseFee * 12) * ANNUAL_DISCOUNT;
    annualTotal = annualTotal - annualDiscount;
    annualSavings = annualDiscount;
  }
  
  return {
    plan,
    baseFee,
    overageJobs,
    overageCost,
    smsCost,
    processingCost,
    subtotal,
    tax,
    monthlyTotal,
    annualTotal,
    annualSavings
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}
