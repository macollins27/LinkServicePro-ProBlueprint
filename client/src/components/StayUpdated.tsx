import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import updatesImage from "@assets/generated_images/Landscaper_on_break_at_truck_bffdab9b.png";

export default function StayUpdated() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast({
      title: "You're subscribed!",
      description: "Check your email to confirm your subscription.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" data-testid="text-newsletter-heading">
            Stay Updated
          </h2>
          <p className="text-slate-700">Get product tips and updates.</p>
        </header>

        <div className="mb-6 lg:mb-8">
          <img 
            src={updatesImage} 
            alt="Landscaping professional relaxing on break at company service truck" 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover ring-1 ring-slate-200"
          />
        </div>

        <div className="bg-white ring-1 ring-slate-200 elev-2 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent text-slate-900"
              data-testid="input-newsletter-email"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="btn-primary-glow min-w-[120px]"
              data-testid="button-newsletter-subscribe"
              disabled={isSubmitting}
            >
              {isSubmitting ? "..." : "Subscribe"}
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
