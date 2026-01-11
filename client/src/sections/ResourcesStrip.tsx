import { Link } from "react-router-dom";
import { FileText, Video, Users, BookOpen, HelpCircle } from "lucide-react";

export default function ResourcesStrip() {
  const resources = [
    {
      icon: FileText,
      title: "Templates & Calculators",
      description: "Free tools to get started faster",
      link: "/resources"
    },
    {
      icon: Video,
      title: "10-min Walkthrough",
      description: "Quick product tour",
      link: "/resources/webinars"
    },
    {
      icon: Video,
      title: "Webinar",
      description: "Live demos and Q&A",
      link: "/resources/webinars"
    },
    {
      icon: Users,
      title: "Customer Stories",
      description: "See how others succeed",
      link: "/resources/customer-stories"
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Guides and FAQs",
      link: "/help"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8">
          Resources to Get You Started
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link
                key={index}
                to={resource.link}
                className="bg-white ring-1 ring-slate-200 p-6 hover-elevate active-elevate-2 transition-all group"
                data-testid={`resource-tile-${index}`}
              >
                <Icon 
                  className="h-8 w-8 text-[#0B5FFF] mb-3 group-hover:scale-110 transition-transform" 
                  aria-hidden="true"
                />
                <h3 className="font-bold text-slate-900 mb-1">
                  {resource.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {resource.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
