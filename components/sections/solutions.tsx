"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutions } from "@/data/solutions";

export function Solutions() {
  return (
    <section id="solutions" className="py-24 relative bg-soft-section">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Built for Healthcare, Education & AI Automation"
          description="Softwaremine focuses on the industries where operational software makes the biggest difference — not generic templates."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.a
              key={solution.title}
              href={solution.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative block"
            >
              <div className="absolute inset-0 bg-gradient-brand rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl border border-border bg-white shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
