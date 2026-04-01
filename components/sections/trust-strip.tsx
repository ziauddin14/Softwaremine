"use client"

import { motion } from "framer-motion"
import { Activity, BookOpen, Rocket, Brain } from "lucide-react"

const badges = [
  { icon: Activity, label: "Clinic Systems" },
  { icon: BookOpen, label: "Education Platforms" },
  { icon: Rocket, label: "SaaS MVPs" },
  { icon: Brain, label: "AI Integrations" },
]

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border/30 bg-secondary/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground/80 mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
        >
          Built for real operational workflows in healthcare, education, and startup environments.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-md hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group shadow-sm hover:shadow-primary/5 cursor-default"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                <badge.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
