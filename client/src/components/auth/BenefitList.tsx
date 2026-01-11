export default function BenefitList() {
  const items = [
    { t: "Control your business from the road", s: "Dispatch, quotes with e-sign, and same-day payment in one hub." },
    { t: "Align every tech in real-time", s: "Live board, route changes, and updates across teams instantly." },
    { t: "Reduce no-shows & angry calls", s: "Automated reminders and live ETA messaging." },
    { t: "Get paid faster", s: "Invoices in the field, deposits, and partial payments." },
  ];
  return (
    <div className="h-full flex flex-col justify-center" data-testid="benefit-list">
      <h2 className="text-white text-xl font-semibold mb-4">Welcome to LinkServicePro</h2>
      <ul className="space-y-4">
        {items.map((x) => (
          <li key={x.t} className="flex items-start gap-3">
            <span className="mt-1 h-5 w-5 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-[#0FB36F]">
              ✔
            </span>
            <div>
              <div className="text-white font-medium">{x.t}</div>
              <div className="text-white/70 text-sm">{x.s}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-2">
        <div className="h-8 w-16 rounded bg-white/10 ring-1 ring-white/15" />
        <div className="h-8 w-16 rounded bg-white/10 ring-1 ring-white/15" />
        <div className="h-8 w-16 rounded bg-white/10 ring-1 ring-white/15" />
      </div>
    </div>
  );
}
