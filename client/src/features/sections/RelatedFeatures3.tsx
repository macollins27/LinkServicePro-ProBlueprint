import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedFeatures3Props {
  features?: { slug: string; title: string; description: string }[];
}

export default function RelatedFeatures3({ features }: RelatedFeatures3Props) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"
      data-testid="related-features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Related features
          </h2>
          <p className="text-lg text-slate-600 mt-2">
            Complete your workflow
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, idx) => (
            <Link
              key={feature.slug}
              to={`/features/${feature.slug}`}
              className="block bg-white ring-1 ring-slate-200 p-6 shadow-sm hover-elevate active-elevate-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-white group no-underline"
              data-testid={`card-related-${idx}`}
            >
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#0B5FFF] transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-700 mb-4">
                {feature.description}
              </p>
              <div className="flex items-center text-[#0B5FFF] font-semibold text-sm">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
