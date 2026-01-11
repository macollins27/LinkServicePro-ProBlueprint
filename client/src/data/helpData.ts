export interface Category {
  slug: string;
  name: string;
  blurb: string;
  icon: 'MapPin' | 'ClipboardList' | 'CreditCard' | 'MessageSquare' | 'Users' | 'Settings';
  articles: string[];
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  body: string;
  lastUpdated: string;
  categorySlug: string;
}

export const categories: Category[] = [
  {
    slug: 'scheduling-dispatch',
    name: 'Scheduling & Dispatch',
    blurb: 'Assign jobs, route techs, update ETAs in real time.',
    icon: 'MapPin',
    articles: [
      'schedule-job-assign-tech',
      'route-optimization-basics',
      'on-the-way-message'
    ]
  },
  {
    slug: 'quotes-invoices',
    name: 'Quotes & Invoices',
    blurb: 'Send estimates with e-sign and invoice on-site.',
    icon: 'ClipboardList',
    articles: [
      'send-estimate-esign',
      'collect-deposit'
    ]
  },
  {
    slug: 'payments-billing',
    name: 'Payments & Billing',
    blurb: 'Take deposits, partials, same-day card payments.',
    icon: 'CreditCard',
    articles: [
      'collect-deposit',
      'payment-failed'
    ]
  },
  {
    slug: 'customer-messaging',
    name: 'Customer Messaging',
    blurb: 'Automated reminders, on-my-way texts, follow-ups.',
    icon: 'MessageSquare',
    articles: [
      'on-the-way-message'
    ]
  },
  {
    slug: 'teams-roles',
    name: 'Teams & Roles',
    blurb: 'Unlimited users, permissions, technician access.',
    icon: 'Users',
    articles: [
      'cant-sign-in'
    ]
  },
  {
    slug: 'account-settings',
    name: 'Account & Settings',
    blurb: 'Calendar sync, notifications, company info.',
    icon: 'Settings',
    articles: [
      'cant-sign-in',
      'payment-failed'
    ]
  }
];

export const articles: Article[] = [
  {
    slug: 'schedule-job-assign-tech',
    title: 'How do I schedule a job and assign a tech?',
    summary: 'Drag-and-drop scheduling, calendar sync, job details.',
    lastUpdated: '2025-01-15',
    categorySlug: 'scheduling-dispatch',
    body: `
      <h2>Step 1: Create the job</h2>
      <p>Click "New Job", add customer info, and set time window.</p>
      <h2>Step 2: Assign a technician</h2>
      <p>Drag the job onto a tech in the dispatch board. This will also sync to their mobile app and calendar.</p>
      <h2>Step 3: Confirm with the customer</h2>
      <p>Send the automated confirmation so they get the time and tech name in writing.</p>
    `
  },
  {
    slug: 'route-optimization-basics',
    title: 'How do I optimize routes for same-day jobs?',
    summary: 'Balance distance, promise windows, and skill.',
    lastUpdated: '2025-01-15',
    categorySlug: 'scheduling-dispatch',
    body: `
      <h2>Group calls by area</h2>
      <p>Cluster urgent calls geographically instead of first-in-first-out. This cuts unpaid drive time.</p>
      <h2>Plan a swing tech</h2>
      <p>Keep one tech partially open after 2pm for emergencies so you don't blow up the whole schedule.</p>
      <h2>Send updated ETAs</h2>
      <p>When you re-route, send new ETAs so customers don't call asking "where's my tech?".</p>
    `
  },
  {
    slug: 'on-the-way-message',
    title: 'How do I send an "on the way" message?',
    summary: 'Send tech name, ETA, and photo in one tap.',
    lastUpdated: '2025-01-15',
    categorySlug: 'scheduling-dispatch',
    body: `
      <h2>Why it matters</h2>
      <p>Customers stop calling "Are you still coming?" if they get a live heads-up with a real ETA.</p>
      <h2>How to send it</h2>
      <p>Tap the job, select "On my way", and confirm the message preview with the tech's name and arrival window.</p>
    `
  },
  {
    slug: 'send-estimate-esign',
    title: 'How do I send an estimate for e-signature?',
    summary: 'Good / better / best options and digital sign-off.',
    lastUpdated: '2025-01-15',
    categorySlug: 'quotes-invoices',
    body: `
      <h2>Add line items and photos</h2>
      <p>Attach site photos so the customer remembers what you showed them.</p>
      <h2>Offer 2–3 options</h2>
      <p>Customers convert faster when they pick between clear levels, not "yes / no".</p>
      <h2>Send for signature</h2>
      <p>Hit "Send for e-sign". The customer can approve from their phone and you'll get a timestamped approval.</p>
    `
  },
  {
    slug: 'collect-deposit',
    title: 'How do I collect a deposit or partial payment?',
    summary: 'Take card-on-file or same-day card without sounding pushy.',
    lastUpdated: '2025-01-15',
    categorySlug: 'payments-billing',
    body: `
      <h2>Set expectation early</h2>
      <p>Before work starts, say "We take a 30% deposit to lock in materials and hold the date."</p>
      <h2>Accept card on-site</h2>
      <p>Use the mobile payment screen to charge the deposit or securely store the card-on-file.</p>
      <h2>Send receipt instantly</h2>
      <p>The customer gets a text/email receipt with amount and remaining balance so there's no confusion later.</p>
    `
  },
  {
    slug: 'payment-failed',
    title: 'What if a customer\'s payment fails?',
    summary: 'How to retry without tension.',
    lastUpdated: '2025-01-15',
    categorySlug: 'payments-billing',
    body: `
      <h2>Stay factual, not personal</h2>
      <p>Say "The card didn't go through just now — do you have another you'd like to try?" Keep tone neutral and calm.</p>
      <h2>Offer alternate method</h2>
      <p>You can resend a secure pay link by text/email so they can handle it privately.</p>
      <h2>Document it</h2>
      <p>Always add a quick note on the job so accounting knows what happened.</p>
    `
  },
  {
    slug: 'cant-sign-in',
    title: 'I can\'t sign in',
    summary: 'Password reset, invite links, and access levels.',
    lastUpdated: '2025-01-15',
    categorySlug: 'account-settings',
    body: `
      <h2>Reset your password</h2>
      <p>Use "Forgot password?" on the sign-in screen. Check spam if you don't see the email.</p>
      <h2>New user?</h2>
      <p>Your manager needs to invite you. Each user must have their own login for audit and GPS tracking.</p>
      <h2>Still blocked?</h2>
      <p>Contact support with your name, company, and phone number. We'll confirm access level.</p>
    `
  },
  {
    slug: 'recurring-jobs-maintenance-plans',
    title: 'How do recurring jobs / maintenance plans work?',
    summary: 'Set up automatic repeat visits that bill on schedule.',
    lastUpdated: '2025-01-15',
    categorySlug: 'scheduling-dispatch',
    body: `
      <h2>Create the template</h2>
      <p>Set the service type, frequency (monthly, quarterly, annual), and default duration.</p>
      <h2>Assign to customer</h2>
      <p>Add the recurring plan to the customer profile. The system will auto-generate jobs based on your schedule.</p>
      <h2>Billing automation</h2>
      <p>Link the plan to auto-billing so you charge the card-on-file when each visit is completed.</p>
    `
  }
];

export const popularArticleSlugs = [
  'schedule-job-assign-tech',
  'collect-deposit',
  'send-estimate-esign',
  'recurring-jobs-maintenance-plans',
  'on-the-way-message'
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(art => art.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(art => art.categorySlug === categorySlug);
}
