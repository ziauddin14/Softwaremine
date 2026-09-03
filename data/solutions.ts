import { Activity, GraduationCap, Bot, type LucideIcon } from "lucide-react";

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  href: string;
}

export const solutions: Solution[] = [
  {
    icon: Activity,
    title: "Healthcare",
    description:
      "Systems for clinics and healthcare organizations that reduce administrative load and improve patient experience.",
    points: [
      "Appointment scheduling",
      "Patient records & history",
      "Clinic operations dashboards",
      "Administrative workflows",
    ],
    href: "#work",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital operations for schools and institutes, from admissions to day-to-day administration.",
    points: [
      "Student records & admissions",
      "Attendance tracking",
      "Reporting & communication",
      "Administrative dashboards",
    ],
    href: "#services",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Workflow automation and AI integrations that remove repetitive work and surface business intelligence.",
    points: [
      "Lead & workflow automation",
      "Intelligent assistants",
      "AI integrations",
      "Business intelligence dashboards",
    ],
    href: "#products",
  },
];
