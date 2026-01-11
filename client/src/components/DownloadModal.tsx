import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  guideTitle: string;
  guideSlug: string;
}

export default function DownloadModal({ open, onOpenChange, guideTitle, guideSlug }: DownloadModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.role) {
      toast({
        title: "Role Required",
        description: "Please select your role.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive the guide and occasional tips.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send to your CRM/marketing automation
    console.log("Guide download requested:", { ...formData, guideSlug });
    
    toast({
      title: "Thanks — we emailed you the download!",
      description: `Check your inbox for "${guideTitle}".`,
    });
    
    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      consent: false,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="modal-download-guide">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Get Your Free Guide</DialogTitle>
          <DialogDescription className="text-[14px]">
            {guideTitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[14px]">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-guide-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[14px]">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              data-testid="input-guide-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-[14px]">Company *</Label>
            <Input
              id="company"
              type="text"
              placeholder="Smith HVAC & Plumbing"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              data-testid="input-guide-company"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-[14px]">Role *</Label>
            <Select
              value={formData.role}
              onValueChange={(value) => setFormData({ ...formData, role: value })}
              required
            >
              <SelectTrigger id="role" data-testid="select-guide-role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owner">Owner</SelectItem>
                <SelectItem value="dispatcher">Dispatcher</SelectItem>
                <SelectItem value="ops-manager">Operations Manager</SelectItem>
                <SelectItem value="office-admin">Office Admin</SelectItem>
                <SelectItem value="field-tech">Field Technician</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              data-testid="checkbox-guide-consent"
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-[13px] text-slate-600 leading-snug cursor-pointer">
              Send me this guide and occasional field-service tips. I can unsubscribe anytime. *
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              data-testid="button-guide-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              data-testid="button-guide-submit"
            >
              Get the Guide
            </Button>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 leading-snug">
            By requesting this resource, you agree we may email you helpful field-service content and occasional product updates. You can unsubscribe anytime. See{" "}
            <Link to="/legal/privacy" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:outline-none rounded">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/legal/terms" className="text-[#0B5FFF] hover:underline focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:outline-none rounded">
              Terms of Service
            </Link>
            .
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
