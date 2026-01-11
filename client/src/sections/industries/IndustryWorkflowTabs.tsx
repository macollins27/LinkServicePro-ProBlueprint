import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, MessageSquare, CreditCard } from "lucide-react";

interface WorkflowTab {
  id: string;
  label: string;
  icon: typeof Calendar;
  title: string;
  description: string;
  bullets: string[];
}

interface IndustryWorkflowTabsProps {
  slug: string;
}

export default function IndustryWorkflowTabs({ slug }: IndustryWorkflowTabsProps) {
  const [activeTab, setActiveTab] = useState("scheduling");

  const tabs: WorkflowTab[] = [
    {
      id: "scheduling",
      label: "Scheduling",
      icon: Calendar,
      title: "Drag-and-drop scheduling",
      description: "Book jobs, assign crews, and sync calendars in real-time",
      bullets: [
        "Two-way Google/Apple Calendar sync",
        "Color-coded job types and priorities",
        "Capacity planning and crew assignments",
      ],
    },
    {
      id: "estimates",
      label: "Estimates",
      icon: FileText,
      title: "Fast estimates with e-sign",
      description: "Send professional quotes that customers can approve instantly",
      bullets: [
        "Line-item pricing with photos",
        "Mobile e-signature collection",
        "Automatic follow-ups and reminders",
      ],
    },
    {
      id: "messaging",
      label: "Messaging",
      icon: MessageSquare,
      title: "Two-way SMS & email",
      description: "Keep customers informed without phone tag",
      bullets: [
        "Automated appointment reminders",
        "Real-time job status updates",
        "Customer portal for self-service",
      ],
    },
    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
      title: "Get paid faster",
      description: "Collect deposits and final payments online",
      bullets: [
        "Card payments with 2.9% + 30¢ processing",
        "Partial payments and deposits",
        "Automatic invoice-to-payment conversion",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            End-to-end field service workflows
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Everything you need from first call to final payment
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent h-auto p-0">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  data-testid={`tab-${tab.id}`}
                  data-analytics={`industry_tab_view:${slug}:${tab.id}`}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 bg-white data-[state=active]:bg-[#0B5FFF] data-[state=active]:text-white data-[state=active]:border-[#0B5FFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-8 focus:outline-none"
            >
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {tab.title}
                  </h3>
                  <p className="mt-3 text-lg text-slate-600">
                    {tab.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tab.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#0B5FFF]" />
                        </div>
                        <span className="text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  role="img"
                  aria-label={`${tab.title} feature preview`}
                  className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg flex items-center justify-center"
                >
                  <span className="text-slate-400 text-sm">Feature Preview</span>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
