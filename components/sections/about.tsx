"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, Database, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Niche Focused",
    desc: "We specialize in Healthcare, Education & AI Automation.",
  },
  {
    icon: Database,
    title: "Operational Power",
    desc: "Solving real business bottlenecks with code.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable Core",
    desc: "Built to handle your business growth easily.",
  },
  {
    icon: Sparkles,
    title: "Modern & Fast",
    desc: "Using the latest tech for superior speed.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground leading-[1.1] mb-8 text-balance">
              Built for Modern Businesses That Need{" "}
              <span className="text-gradient-brand">
                More Than Just a Website
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Softwaremine is a niche-focused technology partner that helps
                healthcare organizations, educational institutes, and growing
                businesses build modern digital systems that solve real
                operational problems.
              </p>

              <div className="h-px w-20 bg-gradient-brand my-8" />

              <p className="text-lg text-text-secondary leading-relaxed">
                From clinic management dashboards and student administration
                platforms to SaaS products and AI-powered automation, we build
                products that are fast, scalable, and designed around real
                workflows, not just visuals.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Element / Feature Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-white shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-snug">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
