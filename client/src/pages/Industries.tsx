import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABar from "@/components/CTABar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { industryGroups } from "@/data/industries";

export default function Industries() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Industries" }]} />
      </div>

      <PageHeader
        title="Built for the trades that keep things running."
        subtitle="Every industry has its own rhythm. LinkServicePro adapts to yours."
      >
        <CTABar className="mt-6" />
      </PageHeader>

      {industryGroups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          background={index % 2 === 0 ? "default" : "muted"}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              {group.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.industries.map((industry) => (
              <Card
                key={industry.slug}
                className="hover-elevate transition-all"
                data-testid={`card-industry-${industry.slug}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{industry.name}</CardTitle>
                  <CardDescription className="text-base">
                    {industry.oneLiner}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium link-underline focus-outline"
                    data-testid={`link-industry-${industry.slug}`}
                  >
                    See how it works
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ))}

      <Section background="muted">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to run jobs like a pro?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of field service professionals who streamlined their operations with LinkServicePro.
          </p>
          <CTABar />
        </div>
      </Section>
    </>
  );
}
