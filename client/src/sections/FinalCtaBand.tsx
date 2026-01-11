import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function FinalCtaBand() {
  const [email, setEmail] = useState("");
  const [tcpaConsent, setTcpaConsent] = useState(false);

  const reassuranceBullets = [
    "No credit card to start",
    "Import jobs via CSV",
    "Cancel anytime"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email signup:", { email, tcpaConsent });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Reassurance */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
              Start Your Free Trial Today
            </h2>
            <ul className="space-y-3 mb-8">
              {reassuranceBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check 
                    className="h-6 w-6 text-[#0B5FFF] flex-shrink-0 mt-0.5" 
                    aria-hidden="true"
                  />
                  <span className="text-lg text-slate-200">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Email Form */}
          <div className="bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="final-email" className="text-white text-base mb-2 block">
                  Email address
                </Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail 
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" 
                      aria-hidden="true"
                    />
                    <Input
                      id="final-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="pl-10 bg-white text-slate-900"
                      required
                      data-testid="input-final-email"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="tcpa-consent"
                  checked={tcpaConsent}
                  onCheckedChange={(checked) => setTcpaConsent(checked === true)}
                  className="mt-1 border-white data-[state=checked]:bg-[#0B5FFF] data-[state=checked]:border-[#0B5FFF]"
                  data-testid="checkbox-tcpa"
                />
                <Label
                  htmlFor="tcpa-consent"
                  className="text-sm text-slate-300 leading-tight cursor-pointer"
                >
                  I agree to receive promotional messages and understand I can opt out at any time. 
                  Standard message and data rates may apply.
                </Label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0B5FFF] text-white font-extrabold hover:bg-[#0952CC] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2 focus:ring-offset-slate-900 flex-1 text-center"
                  data-testid="button-final-start-free"
                  data-analytics="final_cta_start_free_click"
                >
                  Start Free
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 flex-1 text-center"
                  data-testid="button-final-view-pricing"
                  data-analytics="final_cta_view_pricing_click"
                >
                  View Pricing
                </Link>
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="flex items-center justify-center pt-4">
                <div className="bg-slate-700/50 border border-slate-600 px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
                  <div className="h-6 w-6 bg-slate-600 rounded" aria-hidden="true" />
                  <span>Protected by reCAPTCHA</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
