import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

interface IndustryFinalCTAProps {
  slug: string;
}

export default function IndustryFinalCTA({ slug }: IndustryFinalCTAProps) {
  const [email, setEmail] = useState("");
  const [tcpaAccepted, setTcpaAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !tcpaAccepted) return;
    
    // Handle form submission
    console.log("Form submitted:", { email, tcpaAccepted, slug });
  };

  const trustBullets = [
    "No credit card to start",
    "Import jobs via CSV",
    "Cancel anytime",
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0E2A47] to-[#1A3A5F]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Start managing jobs in minutes
          </h2>
          <p className="mt-3 text-lg text-slate-200">
            Join thousands of contractors who schedule, dispatch, and get paid faster
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-email-final-cta"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:border-white focus:ring-white"
            />
            <Button
              type="submit"
              size="lg"
              disabled={!tcpaAccepted}
              data-testid="button-get-started-final-cta"
              data-analytics={`industry_final_cta_submit:${slug}`}
              className="bg-[#0B5FFF] hover:bg-[#0A54E6] text-white font-semibold"
            >
              Get started free
            </Button>
          </div>

          {/* TCPA Checkbox */}
          <div className="mt-4 max-w-xl mx-auto">
            <label className="flex items-start gap-3 cursor-pointer group">
              <Checkbox
                checked={tcpaAccepted}
                onCheckedChange={(checked) => setTcpaAccepted(checked as boolean)}
                data-testid="checkbox-tcpa"
                className="mt-0.5 border-white/30 data-[state=checked]:bg-[#0B5FFF] data-[state=checked]:border-[#0B5FFF]"
              />
              <span className="text-xs text-slate-300 leading-relaxed">
                I agree to receive promotional communications from LinkServicePro. Message frequency varies. Reply STOP to opt-out. Standard message and data rates may apply.
              </span>
            </label>
          </div>

          {/* reCAPTCHA placeholder */}
          <div className="mt-4 max-w-xl mx-auto">
            <div className="h-20 rounded bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-xs text-slate-400">reCAPTCHA placeholder</span>
            </div>
          </div>
        </form>

        {/* Trust Bullets */}
        <div className="flex flex-wrap justify-center gap-6">
          {trustBullets.map((bullet, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-sm text-slate-200">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
