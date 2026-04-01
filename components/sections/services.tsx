"use client"

import { motion } from "framer-motion"
import { Building2, LayoutDashboard, Brain, Rocket } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Clinic Management Systems",
    description: "Modern digital systems for managing patients, appointments, doctor schedules, and clinic operations.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",
    description: "Scalable dashboards and web applications designed for startups and growing businesses.",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    description: "Smart automation, AI workflows, and intelligent features built directly into your software.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Launch your startup idea quickly with a clean, scalable product foundation.",
  },
]

export function Services() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Build
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From clinic management to SaaS platforms, we build software that works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
