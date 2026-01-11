import * as React from "react";
import { Link } from "react-router-dom";
import {
  COMPANY, NAV_GROUPS, SOCIAL, APP_BADGES, SUBSCRIBE,
} from "@/config/footer.config";
import {
  Mail, Phone, MapPin, ArrowRight, ChevronDown,
  Twitter, Linkedin, Youtube, Github, Facebook, Instagram
} from "lucide-react";

const socialIcon = (key: string) => {
  switch (key) {
    case "x": return <Twitter className="h-5 w-5" aria-hidden />;
    case "linkedin": return <Linkedin className="h-5 w-5" aria-hidden />;
    case "youtube": return <Youtube className="h-5 w-5" aria-hidden />;
    case "github": return <Github className="h-5 w-5" aria-hidden />;
    case "facebook": return <Facebook className="h-5 w-5" aria-hidden />;
    case "instagram": return <Instagram className="h-5 w-5" aria-hidden />;
    default: return null;
  }
};

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [msg, setMsg] = React.useState<{ type: "ok" | "err"; text: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) { setMsg({ type: "err", text: SUBSCRIBE.error }); return; }
    setSubmitting(true);
    try {
      const res = await fetch(SUBSCRIBE.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: SUBSCRIBE.source })
      });
      if (!res.ok) throw new Error();
      setMsg({ type: "ok", text: SUBSCRIBE.success });
      track("footer.subscribe", { email_domain: email.split("@")[1] || "" });
      setEmail("");
    } catch {
      setMsg({ type: "err", text: "Something went wrong. Try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer className="relative isolate border-t border-slate-800 bg-slate-900 text-white">
      <div className="container mx-auto max-w-[1526px] px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-semibold">LinkServicePro</span>
            </Link>
            <p className="mt-3 max-w-sm text-white/80">{COMPANY.blurb}</p>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden />
                <a href={`mailto:${COMPANY.supportEmail}`} className="underline underline-offset-4">
                  {COMPANY.supportEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                <a href={`tel:${COMPANY.phone.replace(/\D/g, "")}`} className="hover:underline">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" aria-hidden />
                <span>{COMPANY.addressLines.join(", ")}</span>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label={s.label}
                  data-testid={`link-social-${s.key}`}
                >
                  {socialIcon(s.key)}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold tracking-widest text-white/70">Get product updates</h2>
                <form onSubmit={onSubmit} noValidate aria-describedby="footer-sub-status" className="mt-3 max-w-md">
                  <div className="flex">
                    <label htmlFor="footer-email" className="sr-only">Email</label>
                    <input
                      id="footer-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={submitting}
                      className="w-full rounded-l-md border border-r-0 border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                      placeholder={SUBSCRIBE.placeholder}
                      aria-invalid={msg?.type === "err"}
                      data-testid="input-footer-email"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-r-md bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-60"
                      data-testid="button-footer-subscribe"
                    >
                      {submitting ? "Sending…" : SUBSCRIBE.button}
                    </button>
                  </div>
                  <div id="footer-sub-status" className="mt-2 min-h-[1.25rem]" aria-live="polite">
                    {msg?.type === "ok" && <p className="text-sm text-emerald-400">{msg.text}</p>}
                    {msg?.type === "err" && <p className="text-sm text-rose-400">{msg.text}</p>}
                  </div>
                </form>
              </div>

              <div>
                <h2 className="text-sm font-semibold tracking-widest text-white/70">Get the mobile app</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={APP_BADGES.appStore.href}
                    aria-label={APP_BADGES.appStore.label}
                    target="_blank" rel="noreferrer noopener"
                    className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
                    data-testid="link-app-store"
                  >
                    <AppleBadge />
                  </a>
                  <a
                    href={APP_BADGES.googlePlay.href}
                    aria-label={APP_BADGES.googlePlay.label}
                    target="_blank" rel="noreferrer noopener"
                    className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
                    data-testid="link-google-play"
                  >
                    <PlayBadge />
                  </a>
                </div>
              </div>
            </div>

            <nav aria-label="Footer" className="mt-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {NAV_GROUPS.map((group, idx) => (
                  <FooterGroup key={group.title} title={group.title} defaultOpen={idx < 2}>
                    <ul className="mt-3 space-y-2">
                      {group.links.map((l) => (
                        <li key={l.label}>
                          <FooterLink href={l.href}>{l.label}</FooterLink>
                        </li>
                      ))}
                    </ul>
                  </FooterGroup>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <FooterLink href="/legal/privacy">Privacy</FooterLink>
              <FooterLink href="/legal/terms">Terms</FooterLink>
              <FooterLink href="/legal/sla">SLA</FooterLink>
              <FooterLink href="/legal/refund">Refunds</FooterLink>
              <FooterLink href={COMPANY.statusHref}>Status</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title, children, defaultOpen = false,
}: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <section>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md bg-white/5 px-3 py-2 text-left text-white/90 sm:bg-transparent sm:px-0 sm:py-0"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold tracking-widest">{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform sm:hidden ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      <div className={`sm:block ${open ? "block" : "hidden"}`}>{children}</div>
    </section>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = /^https?:\/\//.test(href);
  const base = "group inline-flex items-center gap-1 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded";
  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={base}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" aria-hidden />
    </a>
  ) : (
    <Link to={href} className={base}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" aria-hidden />
    </Link>
  );
}

function AppleBadge() {
  return (
    <span className="inline-flex items-center gap-3">
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M16.36 1.64c.09 1.04-.36 2.06-1.02 2.81-.73.83-1.9 1.47-3.02 1.38-.1-1.01.37-2.05 1.05-2.8.74-.83 1.98-1.46 2.99-1.39zM20.29 17.5c-.52 1.2-1.16 2.28-1.9 3.33-.99 1.4-2.18 3.12-3.78 3.15-1.59.03-2.1-1.02-3.9-1.02-1.8 0-2.4.99-3.92 1.05-1.55.06-2.73-1.51-3.72-2.9C.96 18.19-.52 13.68 1.6 10.74c1.02-1.46 2.66-2.4 4.5-2.44 1.77-.03 3.45 1.2 3.9 1.2.45 0 2.68-1.48 4.51-1.26.77.03 2.94.31 4.33 2.34-.11.07-2.58 1.51-2.55 4.52.03 3.61 3.19 4.81 3.2 4.81z"/></svg>
      <span className="text-sm">
        <span className="block text-[11px] leading-3 text-white/70">Download on the</span>
        <span className="block text-[15px] font-semibold">App Store</span>
      </span>
    </span>
  );
}

function PlayBadge() {
  return (
    <span className="inline-flex items-center gap-3">
      <svg width="20" height="20" viewBox="0 0 512 512" aria-hidden><path fill="currentColor" d="M325.3 234.3L104.9 13.6C95.5 4.2 80 10.9 80 24v464c0 13.1 15.5 19.8 24.9 10.4l220.4-220.7c5.8-5.8 5.8-15.3 0-21.1zM371.1 208.4l80.4-57.7c10.2-7.3 10.2-22.2 0-29.5l-52.7-37.8c-7.5-5.4-17.7-4.1-23.5 3l-48.6 61.9 44.8 60.1c-.9-.1-.1-.1.0 0zM397.7 303.7l-48.6 61.9 52.8 37.8c7.3 5.2 17.7 4.1 23.5-3l52.7-61.9c10.2-7.3 10.2-22.2 0-29.5l-80.4-57.7 0 0z"/></svg>
      <span className="text-sm">
        <span className="block text-[11px] leading-3 text-white/70">Get it on</span>
        <span className="block text-[15px] font-semibold">Google Play</span>
      </span>
    </span>
  );
}

function track(event: string, payload: Record<string, any>) {
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event, ...payload });
  } catch {}
}
