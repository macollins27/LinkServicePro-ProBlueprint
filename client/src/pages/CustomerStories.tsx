import SEO from "@/components/SEO";
import { Users, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function CustomerStories() {
  const stories = [
    {
      company: "BrightPath Cleaning",
      owner: "Maya Lopez",
      trade: "Commercial Cleaning",
      results: [
        "35% faster scheduling with drag-and-drop calendar",
        "Eliminated double-booking completely",
        "Crew utilization improved from 68% to 89%"
      ],
      quote: "We went from spreadsheets and phone tag to a smooth operation in just two weeks. The team picked it up immediately.",
      metric: "8 hrs/week saved on dispatch",
      icon: Clock
    },
    {
      company: "Reliable HVAC Services",
      owner: "Mike Rodriguez",
      trade: "HVAC",
      results: [
        "2× faster estimate approvals with e-signatures",
        "Win rate increased from 45% to 67%",
        "Average sales cycle shortened by 3 days"
      ],
      quote: "Digital signatures and mobile estimates let us close deals on-site. Game changer for our sales process.",
      metric: "2× quicker approvals",
      icon: TrendingUp
    },
    {
      company: "Swift Plumbing Co.",
      owner: "Tom Davidson",
      trade: "Plumbing",
      results: [
        "Average time-to-payment dropped from 18 days to <24 hours",
        "95% of customers now pay within a day",
        "Cash flow stabilized, reduced credit line usage"
      ],
      quote: "Getting paid used to be the hardest part. Now customers click a link and pay instantly. It's that simple.",
      metric: "<24 hr payment time",
      icon: DollarSign
    }
  ];

  return (
    <>
      <SEO
        title="Customer Stories"
        description="Read how contractors like you are saving time, winning more jobs, and getting paid faster with LinkServicePro field service management software."
        canonical="https://linkservicepro.com/resources/customer-stories"
      />

      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Customer Success Stories
            </h1>
            <p className="text-lg text-slate-600">
              Real results from contractors who switched to LinkServicePro
            </p>
          </div>

          <div className="space-y-12">
            {stories.map((story, index) => {
              const Icon = story.icon;
              return (
                <div
                  key={index}
                  className="bg-white ring-1 ring-slate-200 p-8"
                  data-testid={`story-${index}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <Icon 
                      className="h-12 w-12 text-[#0B5FFF] flex-shrink-0" 
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-2xl font-extrabold text-slate-900">
                        {story.company}
                      </h2>
                      <p className="text-slate-600">
                        {story.owner} • {story.trade}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0B5FFF] text-white px-6 py-4 mb-6">
                    <p className="text-xl font-bold">{story.metric}</p>
                  </div>

                  <blockquote className="text-lg text-slate-700 italic mb-6 pl-4 border-l-4 border-[#0B5FFF]">
                    "{story.quote}"
                  </blockquote>

                  <h3 className="font-bold text-slate-900 mb-3">
                    How we measured it:
                  </h3>
                  <ul className="space-y-2">
                    {story.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-[#0B5FFF] rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        <span className="text-slate-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Ready to see similar results in your business?
            </p>
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0B5FFF] text-white font-extrabold hover:bg-[#0952CC] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:ring-offset-2"
              data-testid="button-start-free-stories"
            >
              Start Free Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
