import pricingImage from "@assets/generated_images/Business_owner_in_organized_warehouse_9b8d43e0.png";

export default function PricingTeaser() {
  const reassurances = [
    "Keep your data",
    "Unlimited quotes",
    "Support included",
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50" id="pricing">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-pricing-heading">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-700">No contracts. Cancel anytime. No setup fees.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={pricingImage} 
            alt="Field service business owner in organized warehouse with parts inventory" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        {/* CTA Band */}
        <div className="bg-white ring-1 ring-slate-200 elev-2 p-6 sm:p-8 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href="/pricing" className="btn-primary-glow" data-testid="button-view-pricing" data-cta="pricing-view-pricing">
              View Pricing
            </a>
            <a href="/pricing" className="btn btn-outline" data-testid="button-start-free">
              Start Free
            </a>
          </div>

          {/* Reassurance bullets - desktop only */}
          <div className="hidden lg:flex items-center justify-center gap-6 text-sm text-slate-600">
            {reassurances.map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
