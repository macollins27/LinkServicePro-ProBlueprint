export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  html?: string;
  content?: string;
  category: 'Operations' | 'Sales' | 'Product' | 'Finance' | 'People' | string;
  tags: string[];
  author: {
    name: string;
    role?: string;
    avatarUrl?: string;
  };
  cover?: { alt: string };
  publishedAt: string;
  updatedAt?: string;
  readMinutes: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dispatch-board-scale-beyond-5-techs",
    title: "How to build a dispatch board that survives past 5 techs",
    excerpt: "Most shops fall apart after 4–5 techs because the owner is still playing air-traffic control from their phone. Here's how to structure live dispatch, routing, and job status so you aren't fielding 'Where's my guy?' calls all afternoon.",
    category: "Operations",
    tags: ["dispatch", "scheduling", "capacity"],
    author: {
      name: "Maxwell Collins",
      role: "Founder, LinkServicePro"
    },
    cover: {
      alt: "Whiteboard dispatch schedule replaced with live map and job status"
    },
    publishedAt: "2025-01-03T10:00:00Z",
    updatedAt: "2025-01-03T10:00:00Z",
    readMinutes: 8,
    html: `
      <p>When you're under 5 field techs, "dispatch" is usually you texting people and praying nothing overlaps. After that, the chaos tax hits: double-booked calls, unpaid windshield time, and customers calling every 20 minutes asking, "Where is he?"</p>

      <h2>The Breaking Point</h2>
      
      <p>At 4-5 techs, you can still juggle everything in your head. You know who's good with furnaces, who lives near the industrial park, who can't be trusted to upsell. But add one more person and the whole system collapses.</p>
      
      <p>The problem isn't your memory—it's that you're the single point of failure. Every routing decision flows through you. Every status update requires your input. You're not running dispatch, you're being dispatch.</p>

      <h2>How to Structure Live Dispatch</h2>
      
      <p>We'll break down three critical systems:</p>

      <h3>1. Group jobs by geography, not by first-come-first-serve</h3>
      
      <p>Stop dispatching based on who called first. Start clustering work by location. If you've got three calls in the same zip code, that's a route. Send one tech through all three instead of ping-ponging across town.</p>
      
      <p>This isn't complicated—it's just a map view of your open jobs and a willingness to tell early callers, "We can be there this afternoon" instead of "We'll squeeze you in somehow."</p>

      <h3>2. Stop promising exact arrival windows</h3>
      
      <p>You can't promise "10:30am" when the previous job might run long. Instead, promise tiers: 8-10am, 10-12pm, 1-3pm. This gives you flexibility to route efficiently without disappointing customers.</p>
      
      <p>The key phrase: "You're in our 10-12 window. You'll get a text when we're 20 minutes out." Now the customer isn't sitting by the window for two hours, and you're not scrambling to hit an impossible target.</p>

      <h3>3. Stop techs from self-assigning after-hours cash work</h3>
      
      <p>If your techs can take jobs off the books, you don't have a business—you have a referral service. Every job goes through your dispatch system. Every payment runs through your books. No exceptions.</p>
      
      <p>This requires two things: clear policy and live visibility. If you can't see location, status, and work-in-progress at a glance, you're dispatching blind.</p>

      <h2>What Live Job Status Actually Means</h2>
      
      <p>Live status isn't just a nice-to-have. It's how you stop being the answering service. When a customer calls asking "Where's my guy?", you should be able to see:</p>
      
      <ul>
        <li>Current job status (scheduled, en route, on site, complete)</li>
        <li>Actual location via GPS</li>
        <li>Estimated completion time based on job type</li>
        <li>Next job in the queue</li>
      </ul>
      
      <p>Better yet, the customer should be able to check this themselves through an automated text or portal. Every time you answer a status question manually, you're doing work the system should handle.</p>

      <h2>The Real Goal: Operating Without You</h2>
      
      <p>You know you've built a real dispatch system when you can take a sick day and the wheels don't fall off. Jobs get routed. Customers get updates. Work gets done. That's not luck—that's structure.</p>
      
      <p>If you can't see location, status, and work-in-progress at a glance, you're dispatching blind. Fix that first, everything else gets easier.</p>
    `
  },
  {
    slug: "get-faster-approvals-with-e-sign-estimates",
    title: "Get faster approvals using e-sign estimates (without sounding pushy)",
    excerpt: "Stop waiting three days for 'let me talk to my wife.' If your estimate isn't easy to approve from a phone, you're feeding your competitor. Here's how to structure mobile quotes that close same-day.",
    category: "Sales",
    tags: ["estimates", "e-signatures", "close-rate"],
    author: {
      name: "Maxwell Collins",
      role: "Founder, LinkServicePro"
    },
    cover: {
      alt: "Customer signing an estimate on their phone"
    },
    publishedAt: "2025-01-05T14:30:00Z",
    updatedAt: "2025-01-05T14:30:00Z",
    readMinutes: 7,
    html: `
      <p>Homeowners ghost because you're giving them homework. They have to dig up an email, open a PDF, print it, sign it, scan it, send it back. That's friction. Friction kills approval speed.</p>

      <h2>The Real Problem With PDF Estimates</h2>
      
      <p>You're standing in someone's basement, furnace is shot, you've explained the options. They say "sounds good, send me the quote and I'll get back to you."</p>
      
      <p>Three days later: nothing. You follow up. They say "Oh yeah, I meant to look at that." Another two days. Now your parts quote has expired and you're starting over.</p>
      
      <p>This isn't customer indecision—it's process friction. You made it hard to say yes.</p>

      <h2>How to Make Mobile Quotes That Close</h2>
      
      <p>You fix this by removing every step between "send quote" and "approved." Here's the structure that works:</p>

      <h3>Send the quote as a clean mobile link</h3>
      
      <p>Not an attachment. A link they can tap from the text you send while standing in their driveway. It opens in their phone browser. No app to download. No login to create. Just: tap, read, approve.</p>

      <h3>Show problem → fix → price in plain language</h3>
      
      <p>Don't bury the solution in contractor jargon. Use this format:</p>
      
      <ul>
        <li><strong>What's wrong:</strong> "Your heat exchanger has a crack. This creates a carbon monoxide risk."</li>
        <li><strong>What we'll do:</strong> "Replace the furnace with a 96% efficiency model, same-day install."</li>
        <li><strong>What it costs:</strong> "$4,800 installed, includes 10-year parts warranty."</li>
      </ul>
      
      <p>Clear. Direct. No fluff.</p>

      <h3>Give them an "Approve & Schedule" button</h3>
      
      <p>Not "Review and let us know." Not "Print, sign, and return." One button: <strong>Approve & Schedule</strong>.</p>
      
      <p>When they tap it, two things happen:</p>
      <ol>
        <li>They sign with their finger (legal e-signature, takes 5 seconds)</li>
        <li>They pick a time slot from your available schedule</li>
      </ol>
      
      <p>Now you've got a signed agreement and a locked-in install date. No phone tag. No "I'll call you back." Done.</p>

      <h2>The Psychology of Easy Approval</h2>
      
      <p>You're not being aggressive. You're being easy to hire. There's a difference.</p>
      
      <p>Aggressive is: "I need an answer today or the price goes up."</p>
      
      <p>Easy is: "Here's the quote on your phone. Approve it whenever you're ready, and pick a time that works for you."</p>
      
      <p>One creates pressure. The other removes barriers. Customers appreciate not having to dig through email or wait for business hours to make a decision.</p>

      <h2>What About "Let Me Talk to My Spouse"?</h2>
      
      <p>You'll still hear this. But now the conversation is:</p>
      
      <blockquote>
        <p>"No problem. I just sent the quote to your phone. You can both look at it tonight, and approve it from wherever you are. It'll hold your spot on the schedule."</p>
      </blockquote>
      
      <p>You've made it easy for them to review together without needing you to come back or send another email. The quote is always accessible. The approval takes 30 seconds. You've removed the friction.</p>

      <h2>Bottom Line</h2>
      
      <p>If your estimate requires a laptop, a printer, or "I'll get to it later," you're losing to whoever makes it easy. Send a mobile link. Make approval one tap. Get back to work.</p>
    `
  },
  {
    slug: "route-optimization-same-day-service",
    title: "Route optimization basics for same-day service calls",
    excerpt: "You're losing money every time a tech drives 25 minutes in the wrong direction because 'that job felt urgent.' You can't kill windshield time completely, but you can stop lighting two hours a day on fire.",
    category: "Operations",
    tags: ["routing", "gps", "efficiency"],
    author: {
      name: "Operations Desk",
      role: "Field Success, LinkServicePro"
    },
    cover: {
      alt: "Technician route visualized on a live map"
    },
    publishedAt: "2025-01-07T09:00:00Z",
    updatedAt: "2025-01-07T09:00:00Z",
    readMinutes: 6,
    html: `
      <p>Routing mistakes don't just cost gas. They cost daylight.</p>
      
      <p>In same-day service—plumbing leak, no-heat call, electrical short—routing is triage. You're balancing urgency, geography, and revenue. Get it wrong and your techs spend half their day driving instead of working.</p>

      <h2>The Hidden Cost of Bad Routing</h2>
      
      <p>Let's say your tech drives an extra 25 minutes to a "hot" call that could have waited. That's 50 minutes round trip. Do that twice a day and you've burned 1.5 billable hours on windshield time.</p>
      
      <p>Over a week: 7.5 hours. Over a year: 390 hours of drive time that could have been revenue. That's $30k+ in lost billing, per tech, assuming a $75/hour service rate.</p>
      
      <p>You can't eliminate drive time. But you can stop hemorrhaging money on bad routing decisions.</p>

      <h2>Three Rules Profitable Shops Follow</h2>

      <h3>1. Cluster geographically whenever possible</h3>
      
      <p>Stop routing first-come-first-serve. Start looking at the map. If you have three calls in the same area, that's a route. Send one tech through all three.</p>
      
      <p>The customer who called first might wait an extra hour. That's fine. You're not a hospital—you're optimizing for total throughput, not individual call time.</p>
      
      <p>Key phrase for the customer: "We've got you scheduled for this afternoon. You'll get a text 20 minutes before arrival." They don't need to know they weren't first in line. They need to know you're coming.</p>

      <h3>2. Always know who's rolling and where they'll land next</h3>
      
      <p>You can't route intelligently if you don't know where everyone is. Live GPS tracking isn't about spying on techs—it's about answering two questions instantly:</p>
      
      <ul>
        <li>Who's closest to the new call?</li>
        <li>Who's about to finish and needs their next job?</li>
      </ul>
      
      <p>Without this, you're guessing. With it, you're dispatching based on real data. The difference is 30-60 minutes per day, per tech.</p>

      <h3>3. Stop letting "loudest caller" outrank "highest-ticket work"</h3>
      
      <p>Urgency is real. A burst pipe needs immediate response. But "I've been waiting since this morning" doesn't automatically beat a $2,500 HVAC install that's ready to go.</p>
      
      <p>You need a simple priority system:</p>
      <ul>
        <li><strong>Emergency (safety risk):</strong> Dispatch immediately</li>
        <li><strong>High-value committed work:</strong> Protect the revenue</li>
        <li><strong>Standard service calls:</strong> Route by geography and availability</li>
      </ul>
      
      <p>You can still be responsive without letting panic run your schedule. The key is having a system, not just reacting to whoever yells loudest.</p>

      <h2>What "Route Optimization" Actually Means</h2>
      
      <p>It's not complex software. It's three things:</p>
      
      <ol>
        <li>A map view of your open jobs and tech locations</li>
        <li>The ability to drag-and-drop assignments based on proximity</li>
        <li>Automatic notifications so techs know what's next without calling you</li>
      </ol>
      
      <p>You're not trying to build NASA-level logistics. You're trying to stop sending people in circles.</p>

      <h2>The Real Goal</h2>
      
      <p>Perfect routing is impossible. But wasting two hours a day on preventable drive time is inexcusable. Get a map. Cluster jobs. Know where your people are. That's 90% of the win.</p>
      
      <p>The rest is just not letting urgency override geography unless it's actually an emergency.</p>
    `
  },
  {
    slug: "take-deposits-and-partial-payments-without-chaos",
    title: "How to take deposits and partial payments without drama",
    excerpt: "You're not a bank. Stop floating material costs on jobs that might reschedule twice. Here's how to ask for money upfront and still sound professional.",
    category: "Finance",
    tags: ["payments", "billing", "cashflow"],
    author: {
      name: "Maxwell Collins",
      role: "Founder, LinkServicePro"
    },
    cover: {
      alt: "Customer making a card deposit from phone"
    },
    publishedAt: "2025-01-09T11:15:00Z",
    updatedAt: "2025-01-09T11:15:00Z",
    readMinutes: 5,
    html: `
      <p>Contractors get shy about deposits because they're afraid to sound "money hungry." But here's reality: You're buying parts. You're blocking crew time. You're saying no to other work.</p>
      
      <p>If the customer reschedules twice or ghosts completely, you're holding the bag. That's not sustainable.</p>

      <h2>Why Deposits Aren't Optional</h2>
      
      <p>A deposit isn't about trust—it's about commitment. When someone gives you money upfront, they're telling you: "This job matters. I'm ready."</p>
      
      <p>Without a deposit, you're at the mercy of whoever called you. They can cancel, reschedule, or "need to think about it" while you've already ordered custom parts and turned down other work.</p>
      
      <p>That's a business risk you don't need to take.</p>

      <h2>The Simple Script That Works</h2>
      
      <p>Here's how to ask for a deposit without sounding apologetic:</p>
      
      <blockquote>
        <p>"We can lock in your spot for Thursday and secure the parts with a $250 deposit. That comes off the final balance."</p>
      </blockquote>
      
      <p>Clean. Calm. Professional. No apology. No lengthy explanation. You're stating how you do business.</p>
      
      <p>Notice what this doesn't say:</p>
      <ul>
        <li>❌ "We usually ask for a deposit..."</li>
        <li>❌ "Is it okay if we take a deposit?"</li>
        <li>❌ "Some customers prefer to put down a deposit..."</li>
      </ul>
      
      <p>You're not asking permission. You're explaining the process.</p>

      <h2>How Much to Charge Upfront</h2>
      
      <p>Standard rule: 50% for jobs over $500, or the full cost of materials if they're custom/non-returnable.</p>
      
      <p>For smaller service calls (under $500), you can skip the deposit and just collect payment on completion. The risk is manageable.</p>
      
      <p>For larger projects ($2,000+), consider breaking it into milestones:</p>
      <ul>
        <li>50% to start (covers materials and secures the schedule)</li>
        <li>25% at midpoint (keeps cash flow healthy)</li>
        <li>25% on completion (final payment for finished work)</li>
      </ul>

      <h3>When to Collect the Deposit</h3>
      
      <p>Immediately after they approve the quote. Not "I'll send you an invoice later." Right then, while you're on site or on the phone.</p>
      
      <p>The process:</p>
      <ol>
        <li>Customer approves the quote</li>
        <li>You send a payment link or run their card on the spot</li>
        <li>They receive a receipt showing deposit amount and balance due</li>
        <li>Job gets scheduled with deposit confirmed</li>
      </ol>
      
      <p>This takes 60 seconds and eliminates the "I'll get you that deposit next week" runaround.</p>

      <h2>What About Refunds?</h2>
      
      <p>Have a clear policy:</p>
      
      <blockquote>
        <p>"Deposits are refundable up to 24 hours before the scheduled start. After that, the deposit covers our scheduling commitment and any materials already ordered."</p>
      </blockquote>
      
      <p>This protects you from last-minute cancellations while still being fair to customers who need to change plans early.</p>

      <h2>Partial Payments for Long Jobs</h2>
      
      <p>If a job runs multiple days, don't wait until the end to collect. Break it into phases:</p>
      
      <ul>
        <li><strong>Day 1:</strong> Collect deposit</li>
        <li><strong>Day 3:</strong> Collect progress payment</li>
        <li><strong>Final day:</strong> Collect balance</li>
      </ul>
      
      <p>This keeps cash flowing and prevents the nightmare scenario where you've done $10k of work and the customer suddenly has "cash flow issues."</p>

      <h2>Bottom Line</h2>
      
      <p>You're not a bank. You're not financing their project. Collect deposits to protect your time, your crew, and your cash flow. Anyone who balks at a reasonable deposit probably wasn't going to be a good customer anyway.</p>
    `
  },
  {
    slug: "maintenance-plans-that-people-renew",
    title: "Maintenance plans people actually renew (not 'yeah maybe later')",
    excerpt: "Most 'maintenance plans' are just a coupon stapled to a fridge magnet. That's not recurring revenue. Here's how to pitch repeat service so customers feel protected, not upsold.",
    category: "Sales",
    tags: ["recurring", "contracts", "membership"],
    author: {
      name: "Field Growth Team",
      role: "Customer Success, LinkServicePro"
    },
    cover: {
      alt: "Technician explaining a seasonal maintenance plan to a homeowner"
    },
    publishedAt: "2025-01-11T16:00:00Z",
    updatedAt: "2025-01-11T16:00:00Z",
    readMinutes: 9,
    html: `
      <p>Recurring work is stability. You can't scale crew wages off random emergencies forever.</p>
      
      <p>But most maintenance plans fail because they're pitched as "discounts" instead of "protection." Customers don't renew because they never understood what they were buying.</p>

      <h2>Why Most Plans Don't Stick</h2>
      
      <p>You've seen this: Customer signs up for the annual HVAC tune-up, you service their furnace once, send a renewal notice, and... nothing. No response. No renewal. Back to emergency-only calls.</p>
      
      <p>The problem? You sold them a transaction, not a relationship. They saw it as "10% off filters" instead of "we keep your system from dying in January."</p>

      <h2>Make the Plan About Risk, Not Savings</h2>
      
      <p>People buy insurance to avoid disaster. Your maintenance plan is insurance. Position it that way.</p>
      
      <p>Don't say: <em>"Sign up for our annual plan and save 10% on service."</em></p>
      
      <p>Say: <em>"This keeps you from losing heat on a holiday weekend when every other contractor is booked solid and charging emergency rates."</em></p>
      
      <h3>How to Frame Protection by Trade</h3>
      
      <p><strong>HVAC:</strong> "This keeps you from losing heat on a holiday weekend when every other contractor is booked solid and charging emergency rates."</p>
      
      <p><strong>Electrical:</strong> "This keeps the city from red-tagging your panel during a home sale inspection."</p>
      
      <p><strong>Plumbing:</strong> "This keeps drain backups from becoming drywall damage and a $15,000 insurance claim."</p>
      
      <p><strong>Pest Control:</strong> "This keeps one mouse from becoming an infestation that shuts down your restaurant for a week."</p>
      
      <p>Notice the pattern: You're not selling maintenance. You're selling avoided chaos.</p>

      <h2>What to Include in the Plan</h2>
      
      <p>Your plan should have clear deliverables, not vague promises. Here's what actually drives renewals:</p>

      <h3>1. Scheduled visits (not "on-demand service")</h3>
      
      <p>Example: "Two seasonal check-ups per year—spring and fall—automatically scheduled. We call you to confirm, you don't have to remember."</p>
      
      <p>The key word: <strong>automatically</strong>. You own the calendar. They don't have to think about it.</p>

      <h3>2. Priority response for emergencies</h3>
      
      <p>"If your system goes down, plan members get same-day or next-day service. Non-members wait in line."</p>
      
      <p>This is huge. When their furnace dies on Christmas Eve, they want the crew that shows up to be <em>your</em> crew.</p>

      <h3>3. Parts/labor discount on repairs</h3>
      
      <p>"Plan members get 15% off any repair work. If your blower motor dies, that's $180 back in your pocket."</p>
      
      <p>This is where the "savings" pitch works—but only <em>after</em> you've established the protection angle.</p>

      <h3>4. No trip charge (or discounted diagnostics)</h3>
      
      <p>"If something breaks, we come diagnose it for free. Non-members pay $95 just for us to show up."</p>
      
      <p>Over the course of a year, this alone can justify the plan cost.</p>

      <h2>Pricing That Actually Gets Renewals</h2>
      
      <p>Don't price too low. If your plan costs $99/year, customers assume it's not worth much. If it costs $400/year, they think twice before walking away.</p>
      
      <p>Standard pricing model:</p>
      <ul>
        <li><strong>Single system (furnace or AC):</strong> $199-$249/year</li>
        <li><strong>Both heating & cooling:</strong> $349-$399/year</li>
        <li><strong>Commercial/multi-unit:</strong> Custom, but typically $600+/year</li>
      </ul>
      
      <p>The plan should pay for itself with one emergency call. Make that math obvious to the customer.</p>

      <h2>How to Pitch It Without Sounding Pushy</h2>
      
      <p>You're not upselling—you're offering protection. The pitch happens naturally at the end of a service call:</p>
      
      <blockquote>
        <p>"Your system's running fine now, but furnaces don't last forever. A lot of our customers join our maintenance plan so we catch small issues before they become expensive ones. It's $229 a year, covers two check-ups, and you get priority service if anything breaks. Want me to set that up for you?"</p>
      </blockquote>
      
      <p>Short. Clear. No pressure. If they say no, you drop it. If they say "tell me more," you explain the protection angle.</p>

      <h2>Renewals: The Part Most People Screw Up</h2>
      
      <p>Don't wait until the plan expires to ask for renewal. Start the conversation 60 days out:</p>
      
      <ol>
        <li><strong>60 days before expiration:</strong> Send a reminder email showing what they've saved/avoided this year</li>
        <li><strong>30 days before:</strong> Call them directly. "Your plan renews next month. Should we keep you on the schedule?"</li>
        <li><strong>At expiration:</strong> Auto-renew if you have card on file, or send final notice</li>
      </ol>
      
      <p>The key: Show value. If they used priority service twice and got a repair discount once, remind them. Numbers make renewals easy.</p>

      <h2>Bottom Line</h2>
      
      <p>Customers buy prevention if you translate it into avoided chaos. Not just "10% off filters." Protection. Priority. Peace of mind. That's what drives recurring revenue.</p>
    `
  },
  {
    slug: "stop-babysitting-your-techs-all-day",
    title: "How to stop babysitting your techs all day (without losing control)",
    excerpt: "If you're still calling every tech 10 times a day, you don't have a field team. You have errands. Here's how to hand off responsibility without burning quality.",
    category: "People",
    tags: ["techs", "accountability", "roles"],
    author: {
      name: "Maxwell Collins",
      role: "Founder, LinkServicePro"
    },
    cover: {
      alt: "Dispatcher checking a live job status board instead of texting the crew every 15 min"
    },
    publishedAt: "2025-01-13T08:45:00Z",
    updatedAt: "2025-01-13T08:45:00Z",
    readMinutes: 7,
    html: `
      <p>There's a point where the business can't run through your throat anymore. Every "status check?" call is telling you the system is missing.</p>
      
      <p>If you're calling every tech 10 times a day, you don't have a field team. You have errands. And you're the scheduler, dispatcher, quality control, and customer service—all at once.</p>

      <h2>Why You're Still Micromanaging</h2>
      
      <p>It's not because your techs are incompetent. It's because you haven't built the systems that let them operate independently.</p>
      
      <p>Without live job status, you <em>have</em> to call them. Without clear workflows, you <em>have</em> to walk them through every decision. Without role-based access, you <em>have</em> to be the gatekeeper for every piece of information.</p>
      
      <p>You're not micromanaging because you want to. You're micromanaging because the alternative is chaos.</p>

      <h2>What You Actually Need</h2>

      <h3>1. Live job status without needing a text</h3>
      
      <p>You should be able to open your dispatch screen and see:</p>
      <ul>
        <li>Who's assigned to what job</li>
        <li>Current status (scheduled, en route, on site, complete)</li>
        <li>Time on site vs. estimated completion</li>
        <li>GPS location (so you know they're actually there)</li>
      </ul>
      
      <p>When a customer calls asking "Where's my tech?", you shouldn't need to text anyone. You should be able to say: "He's on site now, finishing up. Should be wrapping in about 20 minutes."</p>
      
      <p>That's not surveillance. That's operational visibility.</p>

      <h3>2. Role-based access so techs see what they need</h3>
      
      <p>Your lead tech doesn't need to see payroll. Your new helper doesn't need access to all customer pricing history. Your office admin doesn't need to change job statuses.</p>
      
      <p>Role-based access means:</p>
      <ul>
        <li><strong>Techs:</strong> See their own schedule, job details, customer notes. Can update job status and submit invoices.</li>
        <li><strong>Dispatchers:</strong> See all jobs, all techs, can reassign work and communicate with field.</li>
        <li><strong>Office/Admin:</strong> Handle billing, customer service, reporting. Can't mess with dispatch.</li>
        <li><strong>Owner:</strong> See everything, including profitability, wage tracking, and performance metrics.</li>
      </ul>
      
      <p>When people only have access to what they need, you stop worrying about who might break something.</p>

      <h3>3. A clean workflow everyone follows</h3>
      
      <p>If every job follows the same path, you don't need to explain the process every time. The workflow should be:</p>
      
      <ol>
        <li><strong>Assigned:</strong> Tech gets notification, sees job details</li>
        <li><strong>En Route:</strong> Tech marks status, customer gets automatic text</li>
        <li><strong>On Site:</strong> Tech starts work, timer tracks labor hours</li>
        <li><strong>Work Complete:</strong> Tech submits photos, notes, and invoice</li>
        <li><strong>Paid:</strong> Payment collected, job closed</li>
      </ol>
      
      <p>If your system enforces this workflow, techs can't skip steps. They can't forget to update status. They can't close a job without submitting an invoice.</p>
      
      <p>That's not babysitting—that's structure.</p>

      <h2>How to Stop Being the Bottleneck</h2>
      
      <p>The goal isn't to eliminate communication. It's to eliminate unnecessary check-ins. Here's what that looks like:</p>

      <h3>Before (micromanaging):</h3>
      <ul>
        <li>8:00am: "Did you get the job details?"</li>
        <li>9:30am: "Are you on site yet?"</li>
        <li>11:00am: "How's it going?"</li>
        <li>1:00pm: "Did they approve the quote?"</li>
        <li>3:00pm: "Is it done?"</li>
        <li>4:30pm: "Did you collect payment?"</li>
      </ul>

      <h3>After (systems-driven):</h3>
      <ul>
        <li>You see job assigned → en route → on site → complete on your dashboard</li>
        <li>Customer gets automatic updates at each stage</li>
        <li>Tech submits invoice and payment confirmation through the system</li>
        <li>You only get involved if something goes wrong or a decision is needed</li>
      </ul>
      
      <p>That's how you protect quality without being on the radio 12 hours a day.</p>

      <h2>What About Quality Control?</h2>
      
      <p>You still care about quality. You just don't need to be physically present to ensure it. Here's how you maintain standards without hovering:</p>
      
      <ul>
        <li><strong>Photo requirements:</strong> Techs submit before/after photos for every job. You can review these later.</li>
        <li><strong>Customer feedback:</strong> Automatic post-job survey. You see ratings and comments without asking.</li>
        <li><strong>Random spot checks:</strong> Occasionally call a customer after job completion. Not every time, just enough to keep standards high.</li>
        <li><strong>Performance metrics:</strong> Track completion time, customer ratings, revenue per job. Patterns tell you who needs coaching.</li>
      </ul>
      
      <p>Quality doesn't require constant supervision. It requires clear expectations and accountability.</p>

      <h2>Bottom Line</h2>
      
      <p>If you can't take a day off without everything falling apart, you don't have a business—you have a job. Build systems that let your team operate independently. Give them the tools, the visibility, and the structure to succeed without you.</p>
      
      <p>That's how you scale.</p>
    `
  },
  {
    slug: "how-to-get-paid-same-day",
    title: "How to get paid the same day you do the work",
    excerpt: "Waiting 14 days to get paid for a job that already burned fuel, labor, and parts is insane. You can fix this with two tweaks to how you present the invoice and how you collect on site.",
    category: "Finance",
    tags: ["invoicing", "collections", "cashflow"],
    author: {
      name: "Field Billing Ops",
      role: "Payments Advisor, LinkServicePro"
    },
    cover: {
      alt: "Field tech taking card payment in the driveway"
    },
    publishedAt: "2025-01-15T13:20:00Z",
    updatedAt: "2025-01-15T13:20:00Z",
    readMinutes: 6,
    html: `
      <p>Cash dragging 2+ weeks will quietly kill you. You've already spent the money—on parts, labor, fuel, insurance. Now you're waiting for the customer to remember to pay you?</p>
      
      <p>That's not a business model. That's a hope-and-pray strategy.</p>

      <h2>Why Same-Day Payment Matters</h2>
      
      <p>Every day payment is delayed is a day you're financing someone else's expenses. You can't pay your techs with "I'll get you that check next week." You can't buy parts with promises.</p>
      
      <p>Contractors who consistently get paid same-day have better cash flow, lower stress, and fewer awkward collection calls. The fix isn't complicated—it's just a shift in process.</p>

      <h2>Three Rules for Same-Day Payment</h2>

      <h3>1. Show the invoice on site, not "we'll email you later"</h3>
      
      <p>Don't leave without presenting the invoice. Not a verbal estimate. Not "I'll send you something tomorrow." The actual invoice, right there, on your phone or tablet.</p>
      
      <p>The customer sees:</p>
      <ul>
        <li>Itemized work completed</li>
        <li>Parts used with costs</li>
        <li>Labor hours</li>
        <li>Total due</li>
      </ul>
      
      <p>You walk them through it in 90 seconds. They ask questions. You answer. Then you collect payment.</p>
      
      <p>If you leave without showing the invoice, the urgency disappears. "I'll pay it when I get the email" means "I'll pay it whenever I remember, maybe."</p>

      <h3>2. Give them tap-to-pay or card-on-file, not "mail a check"</h3>
      
      <p>Checks take days to arrive, days to clear, and sometimes never show up. Stop accepting checks unless you absolutely have to.</p>
      
      <p>Offer:</p>
      <ul>
        <li><strong>Card on site:</strong> Tap reader or manual entry. Payment processed in 10 seconds.</li>
        <li><strong>Card on file:</strong> Collected during booking, charged when work is complete.</li>
        <li><strong>ACH/Bank transfer:</strong> For larger commercial jobs, if needed.</li>
      </ul>
      
      <p>The easier you make it to pay, the faster you get paid. A tap reader costs $50. Waiting two weeks for a check costs $2,000 in cash flow strain.</p>

      <h3>3. Get a signature confirming work is complete</h3>
      
      <p>Before you collect payment, get the customer to confirm:</p>
      <blockquote>
        <p>"Work is complete and I'm satisfied with the service."</p>
      </blockquote>
      
      <p>This does two things:</p>
      <ol>
        <li>Protects you from chargebacks or disputes ("They charged me but never finished!")</li>
        <li>Creates a clean handoff—work done, payment collected, job closed</li>
      </ol>
      
      <p>Digital signature takes 5 seconds. It's not red tape—it's documentation that the job is finished.</p>

      <h2>How to Handle "Can I Pay You Later?"</h2>
      
      <p>Sometimes they'll ask to pay later. Not because they don't have money—they just forgot their wallet, or want to use a different card, or need to check with their spouse.</p>
      
      <p>Your response:</p>
      
      <blockquote>
        <p>"No problem. I can send you a payment link right now. You can pay from your phone whenever you're ready. Just need it settled by end of day so we can close out the job."</p>
      </blockquote>
      
      <p>Key phrase: <strong>"by end of day."</strong> Not "whenever." You're being flexible while still setting a clear deadline.</p>
      
      <p>If they push back, you have a decision: Do you trust them, or do you walk the job? For most established customers, sending a payment link is fine. For new customers or high-dollar work, you hold firm on same-day payment.</p>

      <h2>What About Net-30 or Commercial Terms?</h2>
      
      <p>Commercial clients will ask for Net-30. That's standard in some industries. But don't offer it to residential customers or small businesses unless they specifically request it <em>and</em> you've verified their creditworthiness.</p>
      
      <p>If you do extend terms:</p>
      <ul>
        <li>Require a credit application</li>
        <li>Set a clear payment schedule</li>
        <li>Charge late fees after the deadline (1.5% per month is standard)</li>
        <li>Stop work for repeat late payers</li>
      </ul>
      
      <p>But for 95% of service calls, same-day payment should be the default. You're not a financing company.</p>

      <h2>The Psychology of On-Site Collection</h2>
      
      <p>You're not chasing money. You're finishing the job. Payment is the final step, just like cleanup and equipment storage.</p>
      
      <p>When you frame it that way, customers don't feel pressured. They feel like this is just how business works—which it is.</p>
      
      <blockquote>
        <p>"Alright, work's complete. Let me get you the invoice and we'll get you all set."</p>
      </blockquote>
      
      <p>Calm. Professional. Expected. Not "Uh, so... do you think you could maybe pay today?"</p>

      <h2>Bottom Line</h2>
      
      <p>Show the invoice on site. Take card payment or send a mobile link. Get a signature. That's it. Three steps and you're paid the same day you do the work.</p>
      
      <p>Stop financing your customers' lives. Get paid, close the job, move on.</p>
    `
  },
  {
    slug: "track-profit-per-crew-without-spreadsheets",
    title: "How to track profit per crew without living in spreadsheets",
    excerpt: "Most owners can't tell you which crew is actually profitable. They just know who complains the loudest. That's a problem. Here's how to track cost vs revenue by technician and stop guessing.",
    category: "Finance",
    tags: ["reporting", "profitability", "wages"],
    author: {
      name: "Operations Desk",
      role: "Field Success, LinkServicePro"
    },
    cover: {
      alt: "Simple profitability dashboard by crew"
    },
    publishedAt: "2025-01-17T10:10:00Z",
    updatedAt: "2025-01-17T10:10:00Z",
    readMinutes: 10,
    html: `
      <p>You don't need a CPA to know who's bleeding you. You need four numbers: labor cost, material cost, revenue collected, and time spent. When you look at that per crew, two things happen:</p>
      
      <ol>
        <li>You stop rewarding "busy" and start rewarding "profitable"</li>
        <li>You stop underpricing repeat work because "the guys like that customer"</li>
      </ol>
      
      <p>Data kills guesswork. Guesswork kills margin.</p>

      <h2>Why Most Owners Can't Answer This Question</h2>
      
      <p>Ask yourself: Which of your techs is the most profitable?</p>
      
      <p>If your answer is "Well, Tony does the most jobs..." or "Mike's been here the longest..." or "I think Sarah brings in more revenue..."—you're guessing.</p>
      
      <p>The problem isn't that you're bad at math. It's that you don't have the data in one place. Labor costs live in payroll. Material costs live in receipts. Revenue lives in your invoicing system. Time tracking lives... nowhere, probably.</p>
      
      <p>Without clean data, you can't make good decisions. You end up promoting people based on seniority or personality instead of profitability. That's how good businesses stay small.</p>

      <h2>The Four Numbers That Matter</h2>

      <h3>1. Labor cost per job</h3>
      
      <p>Not just what you pay the tech. The <em>actual</em> cost:</p>
      <ul>
        <li>Hourly wage or salary</li>
        <li>Payroll taxes (7.65% FICA minimum)</li>
        <li>Workers' comp insurance</li>
        <li>Benefits (health insurance, PTO, etc.)</li>
      </ul>
      
      <p>If you're paying a tech $25/hour, the real cost is closer to $35/hour once you factor everything in. That's what you need to track per job.</p>

      <h3>2. Material cost per job</h3>
      
      <p>This one's easier: What did you spend on parts, supplies, and consumables for this job?</p>
      
      <p>The key is tracking it <em>per job</em>, not just looking at your total material spend for the month. If you can't tie a receipt to a specific job, you can't measure profitability accurately.</p>

      <h3>3. Revenue actually collected</h3>
      
      <p>Not invoiced. <strong>Collected.</strong></p>
      
      <p>If you billed $2,000 but only collected $1,500 because the customer "forgot" to pay the balance, your revenue for that job is $1,500. Track what actually hits your bank account, not what you hoped to collect.</p>

      <h3>4. Time on site vs. time driving</h3>
      
      <p>Billable time is on-site work. Non-billable time is windshield time. You need to know the ratio.</p>
      
      <p>If a tech spends 4 hours on site and 3 hours driving, that's a problem. You're paying for 7 hours but only billing for 4. That math doesn't work long-term.</p>

      <h2>How to Actually Track This (Without Spreadsheets)</h2>
      
      <p>You need a system that captures these four numbers automatically:</p>

      <h3>Labor tracking:</h3>
      <ul>
        <li>Tech clocks in/out per job (or you track start/end time)</li>
        <li>System calculates labor cost based on their hourly rate + burden</li>
        <li>Time on site vs. drive time is logged automatically via GPS</li>
      </ul>

      <h3>Material tracking:</h3>
      <ul>
        <li>Tech logs parts used during the job (either manually or via barcode scan)</li>
        <li>System pulls cost from your parts inventory or receipt uploads</li>
        <li>Material cost gets tied to that specific job number</li>
      </ul>

      <h3>Revenue tracking:</h3>
      <ul>
        <li>Invoice is created and payment is collected (ideally on-site)</li>
        <li>System records actual payment received, not just invoice total</li>
        <li>If partial payment, it tracks balance due and collection status</li>
      </ul>

      <h3>Profitability calculation:</h3>
      <p><strong>Profit = Revenue Collected - (Labor Cost + Material Cost)</strong></p>
      
      <p>Your system should calculate this automatically for every job. Then roll it up by tech, by week, by month. That's how you see patterns.</p>

      <h2>What the Data Actually Tells You</h2>

      <h3>Scenario 1: High revenue, low profit</h3>
      
      <p>Tech brings in $8,000/week in revenue but profit is only $1,200. Why?</p>
      
      <p>Possible causes:</p>
      <ul>
        <li>Too much drive time (inefficient routing)</li>
        <li>Overusing expensive parts when cheaper options exist</li>
        <li>Taking too long on jobs (slow work pace or poor planning)</li>
        <li>Underpricing estimates (not charging enough for labor)</li>
      </ul>
      
      <p>Without data, you'd think this tech is a star. With data, you see they're barely breaking even.</p>

      <h3>Scenario 2: Lower revenue, higher profit margin</h3>
      
      <p>Tech brings in $5,000/week but profit is $2,500. That's a 50% margin. Why?</p>
      
      <p>Possible causes:</p>
      <ul>
        <li>Efficient routing (less drive time, more billable hours)</li>
        <li>Smart parts selection (using stock inventory, not custom orders)</li>
        <li>Fast, competent work (gets jobs done on time or ahead)</li>
        <li>Good at upselling (adds value without bloating costs)</li>
      </ul>
      
      <p>This tech is your model. You want more people like them, not more people who look "busy."</p>

      <h2>How to Use This Data to Make Decisions</h2>

      <h3>1. Stop rewarding "busy" and start rewarding "profitable"</h3>
      
      <p>The tech who does 30 jobs a week but only clears $500 in profit is less valuable than the tech who does 15 jobs and clears $2,000.</p>
      
      <p>Pay bonuses based on profitability, not activity. That changes behavior fast.</p>

      <h3>2. Identify training needs</h3>
      
      <p>If a tech's material costs are consistently high, maybe they're not selecting the right parts. If their labor costs are high, maybe they need process training. If their drive time is high, maybe they need routing help.</p>
      
      <p>Data shows you where to focus coaching.</p>

      <h3>3. Stop underpricing jobs</h3>
      
      <p>If you're consistently seeing 20% margins when you thought you were hitting 40%, your pricing is wrong. The data forces you to confront reality and adjust rates accordingly.</p>

      <h3>4. Know when to let someone go</h3>
      
      <p>If a tech is consistently unprofitable after training, coaching, and process changes... they're costing you money. That's not mean—it's math.</p>

      <h2>Bottom Line</h2>
      
      <p>You can't manage what you don't measure. Track labor cost, material cost, revenue collected, and time spent. Do it per job, per tech, per week.</p>
      
      <p>When you have that data, you stop guessing and start making decisions that actually improve margin. That's how you grow without going broke.</p>
    `
  }
];

export function getFeaturedPost(): BlogPost {
  return blogPosts[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllCategories(posts: BlogPost[]): string[] {
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags);
}
