import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABar from "@/components/CTABar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Briefcase, Mail, Phone } from "lucide-react";

export default function About() {
  const leadership = [
    {
      name: "Sarah Mitchell",
      title: "CEO & Co-Founder",
      initials: "SM"
    },
    {
      name: "Mike Rodriguez",
      title: "CTO & Co-Founder",
      initials: "MR"
    },
    {
      name: "Jennifer Park",
      title: "VP of Product",
      initials: "JP"
    },
    {
      name: "David Chen",
      title: "VP of Customer Success",
      initials: "DC"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "LinkServicePro launched to help contractors manage their field service operations.",
      icon: Target
    },
    {
      year: "2021",
      title: "1,000 Customers",
      description: "Reached our first thousand customers across North America.",
      icon: Users
    },
    {
      year: "2023",
      title: "5,000+ Customers",
      description: "Expanded to serve over 5,000 field service businesses nationwide.",
      icon: TrendingUp
    },
    {
      year: "2025",
      title: "Series A Funding",
      description: "Secured Series A funding to accelerate product development and growth.",
      icon: Briefcase
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <PageHeader title="About LinkServicePro" />

      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
            We help field service teams work smarter, not harder. Built by contractors, for contractors.
          </p>
          <p className="text-base lg:text-lg text-foreground/70 mt-4 leading-relaxed">
            We understand the challenges of running a field service business because we've been there. 
            Our platform simplifies scheduling, dispatching, invoicing, and customer communication so you 
            can focus on what you do best—serving your customers.
          </p>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Leadership Team</h2>
            <p className="text-lg text-foreground/70">
              Meet the team building the future of field service management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, index) => (
              <Card key={index} className="text-center" data-testid={`card-leader-${index}`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="text-xl font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Our Journey</h2>
            <p className="text-lg text-foreground/70">
              From startup to industry leader
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row gap-6 items-start"
                data-testid={`milestone-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-md">
                    <milestone.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                  </div>
                  <p className="text-foreground/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
            <p className="text-lg text-foreground/70 mb-6">
              We're always looking for talented individuals who are passionate about helping contractors 
              succeed. Join us in building the future of field service management.
            </p>
            <Button 
              size="lg" 
              className="font-extrabold uppercase tracking-wide text-xs"
              data-testid="button-careers"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-elevate" data-testid="card-contact-support">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Email Support</CardTitle>
                </div>
                <CardDescription>
                  <a 
                    href="mailto:support@linkservicepro.com" 
                    className="text-primary hover:underline"
                    data-testid="link-support-email"
                  >
                    support@linkservicepro.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate" data-testid="card-contact-phone">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Phone Support</CardTitle>
                </div>
                <CardDescription>
                  <a 
                    href="tel:+15551234567" 
                    className="text-primary hover:underline"
                    data-testid="link-support-phone"
                  >
                    (555) 123-4567
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to transform your field service business?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of contractors who trust LinkServicePro to manage their operations.
          </p>
          <CTABar />
        </div>
      </Section>
    </>
  );
}
