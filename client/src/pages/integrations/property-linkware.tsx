import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PropertyLinkwarePage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Integrations
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Property Linkware Integration
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Detailed information about Link Inspect Pro and Property Organizer integrations coming soon.
          </p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Link Inspect Pro
            </h2>
            <p className="text-muted-foreground">
              Capture checklists, photos, and markups during inspections. Auto-generate summary reports 
              and send results directly to jobs in LinkServicePro.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Property Organizer
            </h2>
            <p className="text-muted-foreground">
              Manage asset files, photos, and notes by site. View service and inspection history on one 
              timeline. Allow owners and tenants to request and track service.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
