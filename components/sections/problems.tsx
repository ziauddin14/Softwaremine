"use client";

import { motion } from "framer-motion";
import { X, Check, Activity, Bot, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const healthcareData = {
  icon: Activity,
  title: "For Healthcare",
  problems: [
    "Manual patient records",
    "Appointment scheduling confusion",
    "No centralized system",
    "Limited analytics",
    "Poor patient experience",
  ],
  solutions: [
    "Smart clinic management platforms",
    "Automated scheduling",
    "Digital patient records",
    "Operational dashboards",
    "Better patient workflows",
  ],
};

const educationData = {
  icon: GraduationCap,
  title: "For Education",
  problems: [
    "Manual student records",
    "Messy admissions process",
    "Attendance tracking challenges",
    "No centralized admin system",
    "Inefficient academic workflows",
  ],
  solutions: [
    "Education management platforms",
    "Digital admissions & records",
    "Attendance automation",
    "Centralized admin dashboards",
    "Streamlined academic operations",
  ],
};

const automationData = {
  icon: Bot,
  title: "For Growing Businesses",
  problems: [
    "Spreadsheet-dependent operations",
    "Repetitive admin work",
    "Disconnected tools",
    "No visibility into operations",
  ],
  solutions: [
    "AI-powered workflow automation",
    "Connected business systems",
    "Custom dashboards & reporting",
    "Scalable software architecture",
  ],
};

export function Problems() {
  return (
    <section className="py-24 relative bg-soft-section">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="The Problems We Solve"
          description="We help operational businesses replace chaos, bottlenecks, and manual work with scalable digital systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {[healthcareData, educationData, automationData].map((data, index) => (
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex h-full"
            >
              <div className="relative rounded-2xl border border-border bg-white shadow-sm overflow-hidden flex flex-col w-full h-full">
                {/* Header */}
                <div className="p-6 border-b border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <data.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {data.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border flex-grow">
                  {/* Problems */}
                  <div className="p-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                      Problems
                    </h4>
                    <ul className="space-y-3">
                      {data.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {problem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="p-6 border-t md:border-t-0 md:border-l border-border">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                      Softwaremine's Solutions
                    </h4>
                    <ul className="space-y-3">
                      {data.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
