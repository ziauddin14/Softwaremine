"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, BarChart3, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/data/navigation";

const floatingCards = [
  { icon: Calendar, label: "Appointments", delay: 0 },
  { icon: Users, label: "Patient Records", delay: 0.1 },
  { icon: BarChart3, label: "Analytics", delay: 0.2 },
  { icon: Sparkles, label: "AI Workflow", delay: 0.3 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Software Systems &amp; AI Automation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-balance">
              <span className="text-foreground">Build Systems, </span>
              <span className="text-gradient-brand">Not Just Websites.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Softwaremine builds modern software systems, SaaS products, and
              AI-powered automation for healthcare, education, and growing
              businesses — designed for real operations, not just visuals.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group cursor-pointer"
              >
                <a href="#contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border bg-white hover:bg-muted cursor-pointer"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              Prefer to talk first?{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Book a free strategy call on WhatsApp
              </a>
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
            <div className="relative rounded-2xl border border-border bg-card p-1 shadow-2xl shadow-primary/10">
              <div className="rounded-xl bg-secondary p-6">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Primecare Dashboard
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Healthcare Platform
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Patients", value: "2,847" },
                    { label: "Appointments", value: "156" },
                    { label: "Revenue", value: "$48.2K" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-white border border-border"
                    >
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="h-32 rounded-lg bg-white border border-border flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="w-6 rounded-t bg-gradient-to-t from-primary/60 to-accent"
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
                  index === 0
                    ? "-left-16 top-8"
                    : index === 1
                      ? "-left-12 bottom-16"
                      : index === 2
                        ? "-right-12 top-16"
                        : "-right-8 bottom-8"
                }`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: card.delay,
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white/95 backdrop-blur-sm shadow-lg"
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
  );
}
