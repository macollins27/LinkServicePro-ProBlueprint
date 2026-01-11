import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PLANS, calculatePricing, formatCurrency, type CalculatorInputs } from "@/data/plans";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PricingCalculatorModal({ open, onOpenChange }: Props) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    jobsPerMonth: 100,
    selectedPlanId: "essential",
    billingCycle: "monthly",
    smsPerMonth: 200,
    paymentVolumePerMonth: 10000
  });

  const results = calculatePricing(inputs);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (open) {
      document.dispatchEvent(new CustomEvent('analytics', {
        detail: { event: 'pricing_calculator_open' }
      }));
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('analytics', {
      detail: { event: 'pricing_calculator_submit', data: inputs }
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="dialog-pricing-calculator">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold">Pricing Calculator</DialogTitle>
          <DialogDescription>
            Calculate your estimated monthly cost based on your usage
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Jobs Per Month */}
          <div>
            <Label htmlFor="jobs-per-month" className="text-base font-semibold">
              Expected jobs per month
            </Label>
            <Input
              id="jobs-per-month"
              type="number"
              min="0"
              max="10000"
              value={inputs.jobsPerMonth}
              onChange={(e) => handleInputChange("jobsPerMonth", parseInt(e.target.value) || 0)}
              className="mt-2"
              data-testid="input-jobs-per-month"
            />
          </div>

          {/* Plan Selection */}
          <div>
            <Label htmlFor="plan-select" className="text-base font-semibold">
              Select plan
            </Label>
            <Select
              value={inputs.selectedPlanId}
              onValueChange={(value) => handleInputChange("selectedPlanId", value)}
            >
              <SelectTrigger id="plan-select" className="mt-2" data-testid="select-plan">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PLANS.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id}>
                    {plan.name} - ${plan.price}/mo (
                    {plan.jobsCap === Infinity ? "Unlimited" : `${plan.jobsCap} jobs`})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Billing Cycle */}
          <div>
            <Label className="text-base font-semibold mb-3 block">
              Billing cycle
            </Label>
            <RadioGroup
              value={inputs.billingCycle}
              onValueChange={(value) => handleInputChange("billingCycle", value as "monthly" | "annual")}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" data-testid="radio-monthly" />
                <Label htmlFor="monthly" className="font-normal cursor-pointer">
                  Monthly
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="annual" id="annual" data-testid="radio-annual" />
                <Label htmlFor="annual" className="font-normal cursor-pointer">
                  Annual (save 20%)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* SMS Per Month */}
          <div>
            <Label htmlFor="sms-per-month" className="text-base font-semibold">
              SMS messages per month
            </Label>
            <Input
              id="sms-per-month"
              type="number"
              min="0"
              max="100000"
              value={inputs.smsPerMonth}
              onChange={(e) => handleInputChange("smsPerMonth", parseInt(e.target.value) || 0)}
              className="mt-2"
              data-testid="input-sms-per-month"
            />
            <p className="text-sm text-slate-600 mt-1">
              Estimated at $0.015 per message
            </p>
          </div>

          {/* Payment Volume */}
          <div>
            <Label htmlFor="payment-volume" className="text-base font-semibold">
              Monthly payment volume ($)
            </Label>
            <Input
              id="payment-volume"
              type="number"
              min="0"
              max="10000000"
              value={inputs.paymentVolumePerMonth}
              onChange={(e) => handleInputChange("paymentVolumePerMonth", parseInt(e.target.value) || 0)}
              className="mt-2"
              data-testid="input-payment-volume"
            />
            <p className="text-sm text-slate-600 mt-1">
              Processing: 2.9% + $0.30 per transaction
            </p>
          </div>

          {/* Results */}
          <div className="border-t pt-6 space-y-3 bg-slate-50 -mx-6 px-6 -mb-6 pb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Estimated Cost Breakdown
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700">Base plan fee ({results.plan.name})</span>
                <span className="font-semibold" data-testid="result-base-fee">
                  {formatCurrency(results.baseFee)}
                </span>
              </div>

              {results.overageJobs > 0 && (
                <div className="flex justify-between">
                  <span className="text-slate-700">
                    Job overage ({results.overageJobs} jobs × ${results.plan.overage})
                  </span>
                  <span className="font-semibold" data-testid="result-overage">
                    {formatCurrency(results.overageCost)}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-slate-700">
                  SMS messaging ({inputs.smsPerMonth} msgs)
                </span>
                <span className="font-semibold" data-testid="result-sms">
                  {formatCurrency(results.smsCost)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-700">
                  Payment processing
                </span>
                <span className="font-semibold" data-testid="result-processing">
                  {formatCurrency(results.processingCost)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-700">Tax (4%)</span>
                <span className="font-semibold" data-testid="result-tax">
                  {formatCurrency(results.tax)}
                </span>
              </div>

              <div className="flex justify-between pt-3 border-t-2 border-slate-300">
                <span className="font-bold text-slate-900">Monthly Total</span>
                <span className="font-bold text-lg text-slate-900" data-testid="result-monthly-total">
                  {formatCurrency(results.monthlyTotal)}
                </span>
              </div>

              {inputs.billingCycle === "annual" && (
                <>
                  <div className="flex justify-between">
                    <span className="text-green-700 font-semibold">Annual savings (20% discount)</span>
                    <span className="font-semibold text-green-700" data-testid="result-annual-savings">
                      -{formatCurrency(results.annualSavings)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">Annual Total</span>
                    <span className="font-bold text-lg text-slate-900" data-testid="result-annual-total">
                      {formatCurrency(results.annualTotal)}
                    </span>
                  </div>
                </>
              )}
            </div>

            <p className="text-xs text-slate-600 mt-4 pt-4 border-t">
              <strong>Note:</strong> Unlimited users on all paid plans. SMS and processing billed at pass-through rates. 
              Overage charges apply when job count exceeds plan limit.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
