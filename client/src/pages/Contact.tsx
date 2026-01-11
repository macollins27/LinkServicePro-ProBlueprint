import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { industryGroups } from "@/data/industries";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  teamSize: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive marketing communications"
  })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      teamSize: "",
      message: "",
      consent: false
    }
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    form.reset();
  };

  const allIndustries = industryGroups.flatMap(group => 
    group.industries.map(industry => ({
      value: industry.slug,
      label: industry.name
    }))
  );

  const teamSizes = [
    { value: "1-5", label: "1-5 employees" },
    { value: "6-15", label: "6-15 employees" },
    { value: "16-50", label: "16-50 employees" },
    { value: "50+", label: "50+ employees" }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <PageHeader 
        title="Get in Touch" 
        subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <Card className="border-chart-2 bg-chart-2/5" data-testid="message-success">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          Thank you for contacting us!
                        </h3>
                        <p className="text-foreground/80">
                          We've received your message and will get back to you within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={() => setIsSubmitted(false)}
                          data-testid="button-send-another"
                        >
                          Send another message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="(555) 123-4567" 
                              {...field} 
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company name" 
                              {...field} 
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-industry">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {allIndustries.map((industry) => (
                                <SelectItem key={industry.value} value={industry.value}>
                                  {industry.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Size</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-team-size">
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {teamSizes.map((size) => (
                                <SelectItem key={size.value} value={size.value}>
                                  {size.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us how we can help..." 
                              className="min-h-[120px]"
                              {...field} 
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-consent"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to receive marketing communications *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full font-extrabold uppercase tracking-wide text-xs"
                      data-testid="button-submit"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              
              <Card className="mb-6">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4" data-testid="contact-email">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                      <a 
                        href="mailto:support@linkservicepro.com" 
                        className="text-primary hover:underline"
                        data-testid="link-contact-email"
                      >
                        support@linkservicepro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-phone">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Sales Phone</h3>
                      <a 
                        href="tel:+15551234567" 
                        className="text-primary hover:underline"
                        data-testid="link-contact-phone"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-address">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                      <p className="text-foreground/70">
                        123 Service Lane<br />
                        Suite 400<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-hours">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                      <p className="text-foreground/70">
                        Monday - Friday<br />
                        8:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Prefer to talk?</CardTitle>
                  <CardDescription>
                    Schedule a personalized demo to see LinkServicePro in action and learn how it can 
                    transform your field service business.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline"
                    className="w-full font-extrabold uppercase tracking-wide text-xs"
                    data-testid="button-schedule-demo"
                  >
                    Schedule a Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
