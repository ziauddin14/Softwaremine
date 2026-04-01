"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Calendar,
  Users,
  Clock,
  LayoutDashboard,
  LineChart,
} from "lucide-react";

const features = [
  { icon: Calendar, text: "Smart Appointment Scheduling" },
  { icon: Users, text: "Patient Records Management" },
  { icon: Clock, text: "Doctor Scheduling System" },
  { icon: LayoutDashboard, text: "Admin Dashboard" },
  { icon: LineChart, text: "Analytics Overview" },
];

export function Primecare() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="text-sm font-medium text-primary">
              Featured Product
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Primecare – Clinic Management Platform
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Primecare Health showcases how Softwaremine builds
            healthcare-focused digital systems with practical workflows and
            scalable architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-1 shadow-2xl shadow-primary/10">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-lg opacity-50" />

              <div className="relative rounded-xl bg-background/80 p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">P</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Primecare</h3>
                    <p className="text-xs text-muted-foreground">
                      Admin Dashboard
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Today's Appointments", value: "24" },
                    { label: "Active Patients", value: "1,847" },
                    { label: "Available Doctors", value: "12" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-secondary/30 border border-border/30"
                    >
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-xl font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Schedule preview */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Upcoming Appointments
                  </p>
                  {[
                    {
                      time: "09:00 AM",
                      patient: "John Smith",
                      type: "Checkup",
                    },
                    {
                      time: "10:30 AM",
                      patient: "Sarah Wilson",
                      type: "Follow-up",
                    },
                    {
                      time: "02:00 PM",
                      patient: "Mike Johnson",
                      type: "Consultation",
                    },
                  ].map((apt, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 border border-border/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-primary font-medium">
                          {apt.time}
                        </span>
                        <span className="text-sm text-foreground">
                          {apt.patient}
                        </span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {apt.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-card/30 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.text}
                  </span>
                  <Check className="w-5 h-5 text-primary ml-auto" />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 w-full sm:w-auto group"
              >
                View Live Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group w-full sm:w-auto"
              >
                Discuss a Similar System
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
