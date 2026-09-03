export interface Project {
  name: string;
  category: string;
  description: string;
  tech: string[];
  status: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Primecare",
    category: "Healthcare Operations Platform",
    description:
      "A clinic management platform covering appointment scheduling, patient records, doctor scheduling, and an admin dashboard with analytics — built to show how Softwaremine approaches healthcare-focused digital systems.",
    tech: ["Next.js", "React", "TypeScript"],
    status: "Live Case Study",
    liveUrl: "https://primecarehealth.vercel.app/",
  },
];
