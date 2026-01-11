import { FileText, HelpCircle, Download, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ResourceDestination {
  key: string;
  title: string;
  blurb: string;
  href: string;
  icon: LucideIcon;
  linkText: string;
}

export const RESOURCES_DESTINATIONS: ResourceDestination[] = [
  {
    key: "blog",
    title: "Blog",
    blurb: "Stories, tips, and product insights.",
    href: "/resources",
    icon: FileText,
    linkText: "Visit blog"
  },
  {
    key: "help",
    title: "Help Desk",
    blurb: "Step-by-step answers to common questions.",
    href: "/help",
    icon: HelpCircle,
    linkText: "Go to help desk"
  },
  {
    key: "guides",
    title: "Free Guides",
    blurb: "Downloadable checklists and playbooks.",
    href: "/guides",
    icon: Download,
    linkText: "Browse guides"
  },
  {
    key: "support",
    title: "Contact Support",
    blurb: "Get help from a human—fast.",
    href: "/contact",
    icon: MessageCircle,
    linkText: "Contact support"
  }
];

export const RESOURCES_HUB_COPY = {
  eyebrow: "Resources",
  title: "All resources, one place",
  support: "From how-to guides to product help and direct support—everything is here.",
  viewAllLink: {
    text: "View all resources",
    href: "/resources"
  }
};
