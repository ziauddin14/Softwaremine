"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Need a Clinic System, Education Platform, or SaaS MVP?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            {
              "Let’s build a modern digital product that fits your workflow, scales with your growth, and feels enterprise-ready from day one.."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group"
              onClick={() => window.open("https://wa.me/923198998086", "_blank")}
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/company/softwaremine-tech/")
              }
            >
              <Calendar className="mr-2 h-4 w-4" />
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
