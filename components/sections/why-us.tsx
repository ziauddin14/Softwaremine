"use client";

import { motion } from "framer-motion";
import { Workflow, Layers, Zap } from "lucide-react";

const reasons = [
  {
    icon: Workflow,
    title: "Built for Real Workflows",
    description:
      "We design systems around how clinics, institutes, and startups actually operate, not around generic templates.",
  },
  {
    icon: Layers,
    title: "Modern, Scalable Architecture",
    description:
      "From clean frontend experiences to scalable backend structures, every product is built to grow with your business.",
  },
  {
    icon: Zap,
    title: "Fast MVP & Launch Execution",
    description:
      "We help founders and operational businesses move from idea to usable product faster, without sacrificing structure.",
  },
  {
    icon: Layers,
    title: "Industry-Focused Solutions",
    description:
      "We specialize in niche digital systems for healthcare, education, and SaaS environments, where workflows matter more than flashy visuals.",
  },
];

export function WhyUs() {
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
            Why Softwaremine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We build software the way real businesses and founders actually need
            it: practical, scalable, and built for growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
