import { Link } from "react-router-dom";
import { FileText, Video, HelpCircle } from "lucide-react";

interface Resource {
  icon: typeof FileText;
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
}

export default function IndustryResources() {
  const resources: Resource[] = [
    {
      icon: FileText,
      title: "Free templates",
      description: "Estimate and invoice templates ready to customize",
      linkTo: "/resources/templates",
      linkText: "Browse templates",
    },
    {
      icon: Video,
      title: "Product walkthrough",
      description: "2-minute tour of core features",
      linkTo: "/resources/walkthrough",
      linkText: "Watch video",
    },
    {
      icon: HelpCircle,
      title: "Help center",
      description: "Step-by-step guides and tutorials",
      linkTo: "/help",
      linkText: "Get help",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Helpful resources
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Everything you need to get started
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                data-testid={`card-resource-${index}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#0B5FFF]">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
                <Link
                  to={resource.linkTo}
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#0B5FFF] hover:text-[#0A54E6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 rounded"
                  data-testid={`link-resource-${index}`}
                >
                  {resource.linkText} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
