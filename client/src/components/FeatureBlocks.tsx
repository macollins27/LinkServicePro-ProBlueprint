import { Link } from "react-router-dom";

interface KPI {
  label: string;
  value: string;
}

interface HowStep {
  step: string;
  desc: string;
}

interface RelatedFeature {
  slug: string;
  name: string;
  hook: string;
}

export function HeroStats({ kpis = [] }: { kpis?: KPI[] }) {
  if (!kpis.length) return null;
  return (
    <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
      {kpis.map((k, i) => (
        <div key={i} className="border border-slate-200 px-3 py-2">
          <div className="font-extrabold text-slate-900">{k.value}</div>
          <div className="text-slate-600">{k.label}</div>
        </div>
      ))}
    </div>
  );
}

export function WhatItDoes({ bullets = [] }: { bullets?: string[] }) {
  return (
    <article className="bg-white ring-1 ring-slate-200 p-6 sm:p-8 elev-2">
      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">What it does</h3>
      <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

export function VisualMock() {
  return (
    <aside className="bg-white ring-1 ring-slate-200 p-6 sm:p-8 elev-2">
      <div className="h-48 bg-slate-100" aria-hidden="true" />
      <p className="text-slate-600 text-sm mt-2">Illustrative mock — replace with final art.</p>
    </aside>
  );
}

export function HowItWorks({ items = [] }: { items?: HowStep[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-8 sm:mt-10">
      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">How it works</h3>
      <ol className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((s, i) => (
          <li key={i} className="bg-white ring-1 ring-slate-200 p-5 elev-2">
            <div className="text-slate-500 text-xs">Step {i + 1}</div>
            <div className="font-extrabold text-slate-900">{s.step}</div>
            <p className="text-slate-700 text-sm">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Proof({ quote, person }: { quote?: string; person?: string }) {
  if (!quote) return null;
  return (
    <section className="mt-8 sm:mt-10">
      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">In the field</h3>
      <blockquote className="bg-white ring-1 ring-slate-200 p-5 elev-2 text-slate-800">
        {quote}
        <footer className="text-sm text-slate-600 mt-2">— {person}</footer>
      </blockquote>
    </section>
  );
}

export function WorksWith({ list = [] }: { list?: string[] }) {
  if (!list.length) return null;
  return (
    <section className="mt-8 sm:mt-10">
      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Works with</h3>
      <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-3">
        {list.map((x) => (
          <div key={x} className="bg-white ring-1 ring-slate-200 p-3 elev-2 text-center text-sm font-semibold text-slate-900">
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Related({ items = [] }: { items?: RelatedFeature[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-8 sm:mt-10">
      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Related features</h3>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((f) => (
          <Link
            key={f.slug}
            to={`/features/${f.slug}`}
            className="bg-white ring-1 ring-slate-200 p-5 elev-2 block hover-elevate active-elevate-2"
            data-testid={`link-related-${f.slug}`}
          >
            <div className="font-extrabold text-slate-900">{f.name}</div>
            <div className="text-slate-700 text-sm">{f.hook}</div>
            <div className="mt-3 inline-flex text-[#0B5FFF] font-semibold link-underline underline-offset-4">
              See how it works →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PainSolve({ pains = [], solves = [] }: { pains?: string[]; solves?: string[] }) {
  if (!pains.length && !solves.length) return null;
  return (
    <section className="mt-8 sm:mt-10">
      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">Why teams switch</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {pains.length > 0 && (
          <div className="bg-white ring-1 ring-slate-200 p-5 elev-2">
            <h4 className="font-extrabold text-slate-900 mb-2 text-red-700">Pain</h4>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              {pains.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}
        {solves.length > 0 && (
          <div className="bg-white ring-1 ring-slate-200 p-5 elev-2">
            <h4 className="font-extrabold text-slate-900 mb-2 text-green-700">Solve</h4>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              {solves.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="mt-10 sm:mt-12 bg-slate-50 px-5 py-6 text-center">
      <div className="text-2xl font-extrabold text-slate-900">Ready to try it?</div>
      <p className="text-slate-700">Simple pricing. No contracts.</p>
      <div className="mt-3 flex flex-wrap justify-center gap-3">
        <Link
          to="/pricing"
          className="px-5 py-3 bg-slate-900 text-white font-extrabold hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
          data-testid="button-cta-pricing"
        >
          View Pricing
        </Link>
        <a
          href="/signup"
          className="px-5 py-3 font-extrabold border border-slate-900 hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF]"
          data-testid="button-cta-signup"
        >
          Start Free
        </a>
      </div>
    </section>
  );
}
