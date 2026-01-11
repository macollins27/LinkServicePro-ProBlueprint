import { useState } from "react";
import { Check } from "lucide-react";
import { StartFreeButton, ViewPricingButton, ButtonsRow } from "@/components/Buttons";

export default function MiniDemoLead() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [companyError, setCompanyError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError(false);
    setCompanyError(false);

    // Validate
    if (!email) {
      setEmailError(true);
      return;
    }
    if (!company) {
      setCompanyError(true);
      return;
    }

    // Analytics
    if (window.gtag) {
      window.gtag('event', 'cta_click', { placement: 'mini-demo' });
      window.gtag('event', 'form_submit', { 
        source: 'scheduling',
        email: email,
        company: company
      });
    }

    // In a real app, this would send to backend
    console.log('Form submission:', { email, company });
    
    setSubmitted(true);
  };

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50"
      data-testid="section-mini-demo-lead"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            See it on your schedule in under 2 minutes
          </h2>
          <p className="text-lg text-slate-600">
            Get your login and start scheduling today
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: 16:9 image placeholder */}
          <div className="bg-white ring-1 ring-slate-200 p-4 shadow-sm">
            <div 
              className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="text-slate-400 text-center px-4">
                <svg 
                  className="w-16 h-16 mx-auto mb-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <p className="text-sm font-medium">
                  Live scheduling demo
                </p>
              </div>
            </div>
          </div>

          {/* Right: Lead form */}
          <div className="bg-white ring-1 ring-slate-200 p-6 sm:p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="mini-demo-email" 
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Work email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="mini-demo-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false);
                    }}
                    required
                    aria-invalid={emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    className={`w-full border ${
                      emailError ? 'border-red-500' : 'border-slate-300'
                    } px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent`}
                    placeholder="you@company.com"
                    data-testid="input-mini-email"
                  />
                  {emailError && (
                    <p id="email-error" className="text-sm text-red-600 mt-1">
                      Email is required
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label 
                    htmlFor="mini-demo-company" 
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Company <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="mini-demo-company"
                    type="text"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                      setCompanyError(false);
                    }}
                    required
                    aria-invalid={companyError}
                    aria-describedby={companyError ? "company-error" : undefined}
                    className={`w-full border ${
                      companyError ? 'border-red-500' : 'border-slate-300'
                    } px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent`}
                    placeholder="Your Company LLC"
                    data-testid="input-mini-company"
                  />
                  {companyError && (
                    <p id="company-error" className="text-sm text-red-600 mt-1">
                      Company is required
                    </p>
                  )}
                </div>

                <p className="text-sm text-slate-600 mb-6">
                  We'll email your login in seconds.
                </p>

                <ButtonsRow>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-5 py-3 bg-[#0B5FFF] text-white font-extrabold rounded-none shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-white"
                    data-testid="button-mini-submit"
                  >
                    Start Free
                  </button>
                  <ViewPricingButton context="light" />
                </ButtonsRow>
              </form>
            ) : (
              <div className="text-center py-8">
                <Check className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <p className="text-xl font-semibold text-slate-900 mb-2">
                  Check your email!
                </p>
                <p className="text-slate-700">
                  We'll email your login in seconds.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
