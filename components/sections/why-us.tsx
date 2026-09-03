"use client";

import { motion } from "framer-motion";
import { Target, Briefcase, Layers, Palette, Bot, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    icon: Target,
    title: "Niche Understanding",
    description:
      "We specialize in healthcare, education, and AI automation, so we design around how those industries actually operate.",
  },
  {
    icon: Briefcase,
    title: "Business-Driven Development",
    description:
      "Every feature is tied to a real operational outcome, not built for its own sake.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "From clean frontend experiences to scalable backend structures, every product is built to grow with your business.",
  },
  {
    icon: Palette,
    title: "Modern UI/UX",
    description:
      "Clean, fast interfaces that your team will actually want to use every day.",
  },
  {
    icon: Bot,
    title: "AI-Ready",
    description:
      "We build with automation and AI integration in mind from day one, not as an afterthought.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "You work directly with the people building your product — no account managers, no layers.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 relative bg-soft-section">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Why Softwaremine"
          description="We build software the way real businesses actually need it: practical, scalable, and built for growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-border bg-white shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
