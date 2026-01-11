import { useParams, Navigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABar from "@/components/CTABar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { allIndustries } from "@/data/industries";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = allIndustries.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: industry.name }
          ]}
        />
      </div>

      <PageHeader title={industry.name} subtitle={industry.oneLiner} />

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Typical day, streamlined
          </h2>
          <div className="space-y-4 mb-12">
            {industry.workflow.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <div className="flex items-start gap-3 flex-1">
                  <CheckCircle2 className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Jobs you'll run better
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {industry.jobTypes.map((jobType, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80">{jobType}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            What pros like you gain
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {industry.metrics.map((metric, index) => (
              <Card key={index} className="text-center border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Features built for {industry.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {industry.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-primary bg-muted">
            <CardContent className="p-8">
              <div className="mb-4">
                <svg className="w-8 h-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg text-foreground/90 mb-6 italic">
                "{industry.testimonial.quote}"
              </p>
              <div className="text-sm">
                <div className="font-bold text-foreground">{industry.testimonial.author}</div>
                <div className="text-foreground/60">{industry.testimonial.company}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {industry.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-border bg-card">
                <AccordionTrigger className="px-4 hover:no-underline" data-testid={`accordion-faq-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to transform your {industry.name.toLowerCase()} business?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join professionals who are already running smoother operations with LinkServicePro.
          </p>
          <CTABar />
        </div>
      </Section>
    </>
  );
}
