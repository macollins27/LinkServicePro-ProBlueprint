export default function TrustBullets({
  className = "",
  variant = "dark" as "dark" | "light"
}) {
  const base = variant === "light" ? "text-slate-700" : "text-white/85";
  return (
    <ul className={`${className} space-y-1 text-xs leading-snug ${base}`} data-testid="trust-bullets">
      <li className="flex gap-2">
        <span className="text-[#0FB36F] font-bold">✔</span> No credit card required
      </li>
      <li className="flex gap-2">
        <span className="text-[#0FB36F] font-bold">✔</span> Cancel anytime
      </li>
      <li className="flex gap-2">
        <span className="text-[#0FB36F] font-bold">✔</span> Unlimited users on paid plans
      </li>
      <li className="flex gap-2">
        <span className="text-[#0FB36F] font-bold">✔</span> Works with Google & Apple Calendar
      </li>
    </ul>
  );
}
