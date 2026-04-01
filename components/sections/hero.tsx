"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, BarChart3, Sparkles } from "lucide-react"

const floatingCards = [
  { icon: Calendar, label: "Appointments", delay: 0 },
  { icon: Users, label: "Patient Records", delay: 0.1 },
  { icon: BarChart3, label: "Analytics", delay: 0.2 },
  { icon: Sparkles, label: "AI Workflow", delay: 0.3 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Now accepting new projects</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              <span className="text-foreground">AI-Powered Web Platforms for </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Clinics & SaaS Startups
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Softwaremine builds modern clinic systems, SaaS dashboards, MVPs, and AI-powered digital platforms designed for speed, scalability, and real-world workflows.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group"
              >
                View Primecare Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50"
              >
                Start a Project
              </Button>
            </div>
          </motion.div>

          {/* Right visual - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main dashboard card */}
            <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-1 shadow-2xl shadow-primary/10">
              <div className="rounded-xl bg-navy-deep/50 p-6">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Primecare Dashboard</h3>
                      <p className="text-xs text-muted-foreground">Healthcare Platform</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Patients", value: "2,847" },
                    { label: "Appointments", value: "156" },
                    { label: "Revenue", value: "$48.2K" },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-secondary/30 border border-border/30">
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="h-32 rounded-lg bg-secondary/20 border border-border/20 flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="w-6 rounded-t bg-gradient-to-t from-primary/50 to-primary"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + card.delay, duration: 0.5 }}
                className={`absolute ${
                  index === 0 ? "-left-16 top-8" :
                  index === 1 ? "-left-12 bottom-16" :
                  index === 2 ? "-right-12 top-16" :
                  "-right-8 bottom-8"
                }`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: card.delay }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card/90 backdrop-blur-sm shadow-lg"
                >
                  <card.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{card.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
