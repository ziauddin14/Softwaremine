"use client";

import { motion } from "framer-motion";
import { X, Check, Building2, Rocket, GraduationCap } from "lucide-react";

const clinicData = {
  icon: Building2,
  title: "For Clinics",
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

const startupData = {
  icon: Rocket,
  title: "For SaaS Startups",
  problems: [
    "No technical team",
    "Slow MVP development",
    "Weak architecture",
    "Scaling issues",
  ],
  solutions: [
    "Fast MVP development",
    "Scalable SaaS architecture",
    "AI-powered features",
    "Modern web platforms",
  ],
};
const educationData = {
  icon: GraduationCap,
  title: "For Educational Institutes",
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

export function Problems() {
  return (
    <section className="py-24 relative bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Problems We Solve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help operational businesses and product founders replace chaos,
            bottlenecks, and manual work with scalable digital systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {[clinicData, startupData, educationData].map((data, index) => (
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden flex flex-col w-full h-full">
                {/* Header */}
                <div className="p-6 border-b border-border/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <data.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {data.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/30 flex-grow">
                  {/* Problems */}
                  <div className="p-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                      Problems
                    </h4>
                    <ul className="space-y-3">
                      {data.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {problem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="p-6 border-t md:border-t-0 md:border-l border-border/30">
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
