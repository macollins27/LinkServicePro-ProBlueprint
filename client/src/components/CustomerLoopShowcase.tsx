import customerImage from "@assets/generated_images/Customer_reading_helpful_SMS_update_8b508795.png";

export default function CustomerLoopShowcase() {
  const benefits = [
    {
      title: "Customer Portal",
      body: "Customers view quotes, invoices, and job history online.",
      color: "#0B5FFF",
    },
    {
      title: "Text & email from the job screen",
      body: "Send updates and receive replies directly.",
      color: "#00C2A8",
    },
    {
      title: "Automated Reminders",
      body: "Reduce no-shows with confirmations and ETAs.",
      color: "#111827",
    },
    {
      title: "Review Requests",
      body: "Build reputation with post-job review links.",
      color: "#F59E0B",
    },
  ];

  const chips = ["−50% call volume", "Read rate 98%", "Replies in minutes"];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 spot-bg overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="heading-customer-loop">
            Customer Communication
          </h2>
          <p className="text-slate-700">Keep customers informed, reduce calls, build reputation.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={customerImage} 
            alt="Satisfied customer reading helpful SMS update from service provider" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* LEFT: benefits + stats */}
        <article className="bg-white ring-1 ring-slate-200 elev-2 p-6 md:p-8">
          <ul className="space-y-4">
            {benefits.map((b, idx) => (
              <li key={b.title} className="flex items-start gap-3" data-testid={`benefit-item-${idx}`}>
                <span
                  className="mt-1 h-4 w-4"
                  aria-hidden="true"
                  style={{ background: b.color }}
                />
                <div>
                  <div className="font-semibold text-slate-900">{b.title}</div>
                  <div className="text-slate-700">{b.body}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c, idx) => (
              <span
                key={c}
                className="px-2.5 py-1 text-xs border border-slate-300 text-slate-800"
                data-testid={`stat-chip-${idx}`}
              >
                {c}
              </span>
            ))}
          </div>

          <a
            href="/features#customer-experience"
            className="mt-6 inline-flex items-center font-semibold link-underline text-[#0B5FFF]"
            data-testid="link-customer-tools"
          >
            See customer tools →
          </a>

          {/* Testimonial */}
          <blockquote className="mt-6 p-5 bg-white ring-1 ring-slate-200" data-testid="testimonial-card">
            <div className="text-amber-500" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="mt-2 text-slate-800">
              "Our customers love the portal. They can see everything in real
              time and we cut phone calls in half."
            </p>
            <footer className="mt-3 text-sm">
              <span className="font-semibold text-slate-900">Mike Rodriguez</span>{" "}
              · Owner, Rodriguez HVAC
            </footer>
          </blockquote>
        </article>

        {/* RIGHT: live conversation command card */}
        <div className="relative bg-white ring-1 ring-slate-200 elev-2 p-5 overflow-visible" style={{ backgroundColor: '#ffffff' }}>
          {/* decorative halo */}
          <div
            className="absolute -inset-6 -z-10 rounded-none blur-2xl opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(11,95,255,.25), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Conversation header */}
          <header className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 grid place-items-center bg-[#0B5FFF] text-white text-xs font-bold">
                MR
              </span>
              <div>
                <div className="font-semibold text-slate-900">Mike R.</div>
                <div className="text-slate-500 text-xs">Customer • 555-0134</div>
              </div>
            </div>
            <span className="text-slate-500 text-xs">Job #1047 • Today</span>
          </header>

          {/* Thread */}
          <div className="mt-4 space-y-3">
            {/* Reminder bubble */}
            <Bubble side="left">
              <p className="text-slate-800">
                Reminder: Your tech is on the way. ETA <strong>9:15 AM</strong>.
                Reply 1 to confirm or 2 to reschedule.
              </p>
            </Bubble>

            {/* Customer reply */}
            <Bubble side="right" accent="#00C2A8">
              <p className="text-slate-800">1 — confirmed. Gate code 4729.</p>
            </Bubble>

            {/* Portal link */}
            <Bubble side="left">
              <p className="text-slate-800">
                View your job details anytime:
                <br />
                <span className="inline-block mt-1 px-2 py-1 text-xs border border-slate-300">
                  customer.linkservicepro.com/1047
                </span>
              </p>
            </Bubble>

            {/* Pay link */}
            <Bubble side="left">
              <p className="text-slate-800">
                Invoice ready. Pay securely here:
                <span className="ml-2 px-2 py-1 text-xs bg-[#0B5FFF] text-white">
                  Pay $269
                </span>
              </p>
            </Bubble>

            {/* Review toast */}
            <div className="review-toast" role="status" aria-live="polite" data-testid="review-toast">
              <div className="flex items-center gap-2">
                <span className="text-amber-500" aria-label="5 stars">★★★★★</span>
                <div className="text-slate-800 text-sm">
                  How did we do? Share a quick review.
                </div>
              </div>
              <span className="mt-2 inline-block px-3 py-1.5 text-xs font-extrabold text-white rounded-none bg-[#0B5FFF]" aria-hidden="true">
                Leave a review
              </span>
            </div>
          </div>

          {/* Composer (mock) */}
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
            <div className="border border-slate-300 px-3 py-2 text-sm text-slate-600" aria-hidden="true">
              Type a message…
            </div>
            <span className="px-3 py-2 text-sm font-extrabold bg-slate-900 text-white rounded-none" aria-hidden="true">
              Send
            </span>
          </div>

          <p className="sr-only">
            The animated elements are decorative. All key information is also
            shown as text.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ side = "left", accent = "#0B5FFF", children }: { side?: "left" | "right"; accent?: string; children: React.ReactNode }) {
  const isRight = side === "right";
  return (
    <div
      className={[
        "max-w-[90%] md:max-w-[80%] px-3 py-2 text-sm ring-1 ring-slate-200 bg-white",
        isRight ? "ml-auto chat-pop-right" : "chat-pop-left",
      ].join(" ")}
      style={{ borderLeft: isRight ? "none" : `3px solid ${accent}`, borderRight: isRight ? `3px solid ${accent}` : "none" }}
    >
      {children}
    </div>
  );
}
