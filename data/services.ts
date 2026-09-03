import { Activity, GraduationCap, LayoutDashboard, Brain, type LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Activity,
    title: "Healthcare Software",
    description:
      "Modern systems for appointments, patient records, clinic dashboards, admin workflows, and daily healthcare operations.",
  },
  {
    icon: GraduationCap,
    title: "Education Platforms",
    description:
      "Smart digital platforms for schools, institutes, and academies to manage admissions, student records, attendance, communication, and administration.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Product Development",
    description:
      "Scalable SaaS products with clean architecture, role-based dashboards, subscriptions, user flows, and founder-ready product infrastructure.",
  },
  {
    icon: Brain,
    title: "AI Integration & Automation",
    description:
      "Intelligent automations, AI-assisted workflows, and smart product features designed to improve speed, efficiency, and user experience.",
  },
];
