"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingTiers } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple Packages, Built to Scale"
          description="Every engagement starts with a conversation — these packages show how scope typically grows from a website to a full software system."
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl border bg-white p-8 flex flex-col h-full ${
                tier.popular
                  ? "border-primary shadow-xl shadow-primary/10 lg:-translate-y-4"
                  : "border-border shadow-sm"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-semibold shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {tier.tagline}
              </p>
              <div className="mb-6">
                <div
                  className={
                    tier.price.length > 15
                      ? "text-2xl font-bold text-foreground"
                      : "text-3xl font-bold text-foreground"
                  }
                >
                  {tier.price}
                </div>
                {tier.priceNote && (
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {tier.priceNote}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={
                  tier.popular
                    ? "w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20"
                    : "w-full"
                }
                variant={tier.popular ? "default" : "outline"}
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
