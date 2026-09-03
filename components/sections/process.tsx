"use client";

import { motion } from "framer-motion";
import { Search, ClipboardList, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your business model, workflows, bottlenecks, and goals before writing a single line of code.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Plan",
    description:
      "We map the platform structure, user flows, dashboards, and core features based on real-world usage.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "We design clean, usable interfaces that match how your team actually works, not generic templates.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Build",
    description:
      "We build the product using modern technologies with a focus on usability, performance, and future scalability.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Improve",
    description:
      "We help you move from development to deployment, then keep improving the product as your business evolves.",
  },
];

export function Process() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="How We Work"
          description="A simple, structured workflow that turns ideas and operational needs into modern digital products."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-11 left-full w-full h-px bg-border z-0" />
              )}

              <div className="relative p-6 rounded-2xl border border-border bg-white shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary/25">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
