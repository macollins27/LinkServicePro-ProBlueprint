import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function FeatureFinalCTA() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("Please agree to the terms before continuing.");
      return;
    }
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0E2A47] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="heading-final-cta">
            Ready to see it in action?
          </h2>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/80 mb-8">
            <span data-testid="text-benefit-1">No credit card to start</span>
            <span className="hidden sm:inline">•</span>
            <span data-testid="text-benefit-2">Import jobs via CSV</span>
            <span className="hidden sm:inline">•</span>
            <span data-testid="text-benefit-3">Cancel anytime</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-slate-900"
                data-testid="input-email-final"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-[#0B5FFF] hover:bg-[#0B5FFF]/90 text-white"
                data-testid="button-start-free-final"
              >
                Start Free
              </Button>
            </div>

            <div className="flex items-start gap-2 text-left">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className="mt-1"
                data-testid="checkbox-consent-final"
              />
              <Label htmlFor="consent" className="text-sm text-white/80 cursor-pointer">
                I agree to receive text messages and marketing communications. Message and data rates may apply. Reply STOP to opt out.
              </Label>
            </div>
          </form>

          <p className="mt-6 text-white/70 text-sm" data-testid="text-unlimited-users-final">
            Unlimited users on paid plans. No per-tech seat fees.
          </p>
        </div>
      </div>
    </section>
  );
}
