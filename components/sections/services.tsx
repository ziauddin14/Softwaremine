"use client";

import { motion } from "framer-motion";
import { Activity, GraduationCap, LayoutDashboard, Brain, Rocket } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Clinic Management Systems",
    description:
      "Modern systems for appointments, patient records, clinic dashboards, admin workflows, and daily healthcare operations.",
  },
  {
    icon: GraduationCap,
    title: "Education Management Platforms",
    description:
      "Smart digital platforms for schools, institutes, and academies to manage admissions, student records, attendance, communication, and administration.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms & Dashboards",
    description:
      "Scalable SaaS products with clean architecture, role-based dashboards, subscriptions, user flows, and founder-ready product infrastructure.",
  },
  {
    icon: Brain,
    title: "AI-Powered Integrations",
    description:
      "Intelligent automations, AI-assisted workflows, and smart product features designed to improve speed, efficiency, and user experience.",
  },
  // {
  //   icon: Rocket,
  //   title: "MVP Development for Startups",
  //   description:
  //     "Fast, launch-ready MVPs for founders who need to validate ideas, attract users, and move from concept to product with confidence.",
  // },
];

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
            Custom digital systems and scalable platforms built around real
            business operations.
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
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
