"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, Clock, LayoutDashboard, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { whatsappUrl } from "@/data/navigation";

const features = [
  { icon: Calendar, text: "Smart Appointment Scheduling" },
  { icon: Users, text: "Patient Records Management" },
  { icon: Clock, text: "Doctor Scheduling System" },
  { icon: LayoutDashboard, text: "Admin Dashboard" },
  { icon: LineChart, text: "Analytics Overview" },
];

export function SelectedWork() {
  const project = projects[0];

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Real Systems We've Built"
          description="A look at how Softwaremine turns operational problems into working software."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl border border-border bg-card p-1 shadow-2xl shadow-primary/10">
              <div className="relative rounded-xl bg-secondary p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
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
                      className="p-3 rounded-lg bg-white border border-border"
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
                    { time: "09:00 AM", patient: "John Smith", type: "Checkup" },
                    { time: "10:30 AM", patient: "Sarah Wilson", type: "Follow-up" },
                    { time: "02:00 PM", patient: "Mike Johnson", type: "Consultation" },
                  ].map((apt, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-white border border-border"
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

          {/* Case study details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <Badge variant="outline" className="border-primary/25 bg-primary/10 text-primary mb-4">
              {project.status}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {project.name} — {project.category}
            </h3>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-border bg-secondary text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-4 p-3 rounded-xl border border-border bg-white hover:border-primary/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border bg-white hover:bg-muted w-full sm:w-auto group"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              )}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group w-full sm:w-auto"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Discuss a Similar System
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
