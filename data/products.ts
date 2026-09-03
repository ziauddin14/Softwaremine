import { HeartPulse, GraduationCap, Sparkles, type LucideIcon } from "lucide-react";

export interface Product {
  name: string;
  category: string;
  description: string;
  status: "Coming Soon" | "Live Product";
  features: string[];
  icon: LucideIcon;
  cta: string;
}

export const products: Product[] = [
  {
    name: "CareFlow",
    category: "Healthcare Operations Platform",
    description:
      "A dedicated operations platform for clinics and healthcare providers — appointments, records, and staff workflows in one system.",
    status: "Coming Soon",
    features: [
      "Appointment scheduling",
      "Patient records",
      "Staff & doctor management",
      "Operational dashboards",
    ],
    icon: HeartPulse,
    cta: "Get notified",
  },
  {
    name: "EduFlow",
    category: "Education Management Platform",
    description:
      "An administration platform for schools and institutes to run admissions, attendance, and reporting from a single dashboard.",
    status: "Coming Soon",
    features: [
      "Admissions & student records",
      "Attendance automation",
      "Academic reporting",
      "Staff & communication tools",
    ],
    icon: GraduationCap,
    cta: "Get notified",
  },
  {
    name: "LeadFlow AI",
    category: "AI Lead & Workflow Automation",
    description:
      "An AI automation product for businesses that need to qualify leads, automate follow-ups, and orchestrate repetitive workflows.",
    status: "Coming Soon",
    features: [
      "AI lead qualification",
      "Automated follow-ups",
      "Workflow orchestration",
      "Business intelligence",
    ],
    icon: Sparkles,
    cta: "Get notified",
  },
];
