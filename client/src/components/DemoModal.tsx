import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companySize: "",
    industry: "",
    timeframe: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send to your CRM/marketing automation
    console.log("Demo request submitted:", formData);
    
    toast({
      title: "Demo Requested!",
      description: "We'll contact you within 24 hours to schedule your demo.",
    });
    
    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      phone: "",
      companySize: "",
      industry: "",
      timeframe: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="modal-demo-request">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Demo</DialogTitle>
          <DialogDescription>
            See how LinkServicePro can transform your field service business. Fill out the form
            below and we'll schedule a personalized demo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-demo-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              data-testid="input-demo-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              data-testid="input-demo-phone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companySize">Company Size *</Label>
            <Select
              value={formData.companySize}
              onValueChange={(value) => setFormData({ ...formData, companySize: value })}
              required
            >
              <SelectTrigger id="companySize" data-testid="select-demo-company-size">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5 employees</SelectItem>
                <SelectItem value="6-20">6-20 employees</SelectItem>
                <SelectItem value="21-50">21-50 employees</SelectItem>
                <SelectItem value="51-100">51-100 employees</SelectItem>
                <SelectItem value="100+">100+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry *</Label>
            <Select
              value={formData.industry}
              onValueChange={(value) => setFormData({ ...formData, industry: value })}
              required
            >
              <SelectTrigger id="industry" data-testid="select-demo-industry">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="hvac">HVAC</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="landscaping">Landscaping</SelectItem>
                <SelectItem value="cleaning">Cleaning</SelectItem>
                <SelectItem value="painting">Painting</SelectItem>
                <SelectItem value="roofing">Roofing</SelectItem>
                <SelectItem value="contracting">General Contracting</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeframe">Buying Timeframe *</Label>
            <Select
              value={formData.timeframe}
              onValueChange={(value) => setFormData({ ...formData, timeframe: value })}
              required
            >
              <SelectTrigger id="timeframe" data-testid="select-demo-timeframe">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Ready to buy now</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">1-3 months</SelectItem>
                <SelectItem value="6-months">3-6 months</SelectItem>
                <SelectItem value="exploring">Just exploring</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              data-testid="button-demo-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 font-extrabold uppercase tracking-wide text-xs"
              data-testid="button-demo-submit"
            >
              Request Demo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
