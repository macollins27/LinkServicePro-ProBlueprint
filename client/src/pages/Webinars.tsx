import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";

const upcomingWebinars = [
  {
    id: "routing-optimization",
    title: "Route Optimization Masterclass",
    date: "2025-11-15",
    time: "2:00 PM EST",
    duration: "60 minutes",
    description: "Learn advanced strategies for reducing drive time and maximizing technician productivity through intelligent routing.",
  },
  {
    id: "quote-conversion",
    title: "Converting More Quotes to Jobs",
    date: "2025-11-22",
    time: "1:00 PM EST",
    duration: "45 minutes",
    description: "Proven tactics for creating compelling estimates that win more business at higher margins.",
  },
  {
    id: "customer-retention",
    title: "Customer Retention Strategies",
    date: "2025-12-05",
    time: "3:00 PM EST",
    duration: "60 minutes",
    description: "Build loyalty and recurring revenue through exceptional service experiences and smart follow-up.",
  },
];

const pastWebinars = [
  {
    id: "getting-started",
    title: "Getting Started with LinkServicePro",
    date: "2025-10-10",
    duration: "50 minutes",
    description: "A complete walkthrough of setting up your account, adding customers, and scheduling your first jobs.",
  },
  {
    id: "mobile-app-training",
    title: "Mobile App Training for Technicians",
    date: "2025-09-25",
    duration: "40 minutes",
    description: "Everything your field team needs to know to use the mobile app efficiently.",
  },
];

export default function Webinars() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleRegister = (webinarId: string) => {
    console.log(`Registering for webinar: ${webinarId}`);
  };

  const handleWatch = (webinarId: string) => {
    console.log(`Watching recording: ${webinarId}`);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Webinars" }]} />
      </div>

      <PageHeader
        title="Webinars"
        subtitle="Live training and Q&A sessions with field service experts"
      />

      <Section>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming" data-testid="tab-upcoming">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" data-testid="tab-past">
              Past Recordings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid gap-6">
              {upcomingWebinars.map((webinar) => (
                <Card key={webinar.id} data-testid={`card-webinar-${webinar.id}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(webinar.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">{webinar.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleRegister(webinar.id)} data-testid={`button-register-${webinar.id}`}>
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid gap-6">
              {pastWebinars.map((webinar) => (
                <Card key={webinar.id} data-testid={`card-recording-${webinar.id}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(webinar.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">{webinar.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" onClick={() => handleWatch(webinar.id)} data-testid={`button-watch-${webinar.id}`}>
                      Watch Recording
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>
    </div>
  );
}
