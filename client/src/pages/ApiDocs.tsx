import { Code, Key, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABar from "@/components/CTABar";

export default function ApiDocs() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "API Docs" }]} />
      </div>

      <PageHeader
        title="API Documentation"
        subtitle="Integrate and automate your field service operations"
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className="text-foreground/80 mb-4">
              The LinkServicePro API allows you to programmatically access and manage your field service data. 
              Build custom integrations, automate workflows, and extend the platform to fit your unique business needs.
            </p>
            <p className="text-foreground/80">
              Our REST API uses standard HTTP methods and returns JSON responses. All requests must be authenticated 
              using API keys.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Key className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Authentication</h2>
            </div>
            <p className="text-foreground/80 mb-4">
              All API requests require an API key sent in the Authorization header:
            </p>
            <Card>
              <CardContent className="p-4">
                <pre className="text-sm overflow-x-auto">
                  <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                </pre>
              </CardContent>
            </Card>
            <p className="text-foreground/80 mt-4">
              Generate your API key from <strong>Settings → Integrations → API</strong> in your LinkServicePro dashboard.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Rate Limits</h2>
            </div>
            <p className="text-foreground/80 mb-4">
              API requests are limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li><strong>Standard Plan:</strong> 1,000 requests per hour</li>
              <li><strong>Professional Plan:</strong> 5,000 requests per hour</li>
              <li><strong>Enterprise Plan:</strong> 20,000 requests per hour</li>
            </ul>
            <p className="text-foreground/80 mt-4">
              Rate limit information is included in response headers:
            </p>
            <Card className="mt-4">
              <CardContent className="p-4">
                <pre className="text-sm overflow-x-auto">
                  <code>{`X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4987
X-RateLimit-Reset: 1635724800`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Example Endpoints</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>List Customers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Request</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`GET https://api.linkservicepro.com/v1/customers
Authorization: Bearer YOUR_API_KEY`}</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Response</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`{
  "customers": [
    {
      "id": "cust_abc123",
      "name": "John Smith",
      "email": "john@example.com",
      "phone": "555-1234",
      "address": "123 Main St, Austin, TX 78701"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 50
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Create a Job</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Request</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`POST https://api.linkservicepro.com/v1/jobs
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "customer_id": "cust_abc123",
  "service_type": "HVAC Maintenance",
  "scheduled_date": "2025-11-15T14:00:00Z",
  "technician_id": "tech_xyz789",
  "notes": "Annual maintenance check"
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Response</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`{
  "id": "job_def456",
  "customer_id": "cust_abc123",
  "service_type": "HVAC Maintenance",
  "scheduled_date": "2025-11-15T14:00:00Z",
  "technician_id": "tech_xyz789",
  "status": "scheduled",
  "created_at": "2025-10-23T18:30:00Z"
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get Job Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Request</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`GET https://api.linkservicepro.com/v1/jobs/job_def456
Authorization: Bearer YOUR_API_KEY`}</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Response</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`{
  "id": "job_def456",
  "customer": {
    "id": "cust_abc123",
    "name": "John Smith",
    "phone": "555-1234"
  },
  "service_type": "HVAC Maintenance",
  "scheduled_date": "2025-11-15T14:00:00Z",
  "technician": {
    "id": "tech_xyz789",
    "name": "Mike Johnson"
  },
  "status": "scheduled",
  "notes": "Annual maintenance check",
  "created_at": "2025-10-23T18:30:00Z",
  "updated_at": "2025-10-23T18:30:00Z"
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Update Job Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Request</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`PATCH https://api.linkservicepro.com/v1/jobs/job_def456
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "status": "completed"
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Response</p>
                    <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                      <code>{`{
  "id": "job_def456",
  "status": "completed",
  "updated_at": "2025-11-15T16:45:00Z"
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="pt-8">
            <CTABar
              primaryText="Request API Access"
              secondaryText="View Full Documentation"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
