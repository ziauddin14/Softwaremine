"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business model, workflows, bottlenecks, and goals before writing a single line of code.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System Architecture",
    description:
      "We plan the platform structure, user flows, dashboards, and core features based on real-world usage.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Product Development",
    description:
      "We build the product using modern technologies with a focus on usability, performance, and future scalability.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Growth",
    description:
      "We help you move from development to deployment with a product that is usable, reliable, and ready to evolve.",
  },
];

export function Process() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Build Your Product
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, structured workflow that turns ideas and operational needs
            into modern digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative p-6 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-primary/30">
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
