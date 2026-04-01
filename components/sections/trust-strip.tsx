"use client"

import { motion } from "framer-motion"
import { Zap, Brain, Layers, Rocket } from "lucide-react"

const badges = [
  { icon: Layers, label: "Next.js" },
  { icon: Brain, label: "AI Integrations" },
  { icon: Zap, label: "Modern SaaS Architecture" },
  { icon: Rocket, label: "Fast MVP Development" },
]

export function TrustStrip() {
  return (
    <section className="py-16 border-y border-border/30 bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-10"
        >
          Helping clinics and startups turn ideas into real software products.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
