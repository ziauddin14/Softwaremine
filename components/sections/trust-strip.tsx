"use client"

import { motion } from "framer-motion"
import { Activity, GraduationCap, Rocket, Brain } from "lucide-react"

const badges = [
  { icon: Activity, label: "Healthcare Systems" },
  { icon: GraduationCap, label: "Education Platforms" },
  { icon: Rocket, label: "SaaS Products" },
  { icon: Brain, label: "AI Automation" },
]

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border bg-secondary/60 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
        >
          Built for real operational workflows in healthcare, education, and growing businesses.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 group shadow-sm cursor-default"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors duration-300">
                <badge.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
