"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/products";

export function Products() {
  return (
    <section id="products" className="py-24 relative bg-soft-section">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="A Growing Product Ecosystem"
          description="Alongside custom projects, we're building focused SaaS products for the industries we know best."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <Badge
                  variant="outline"
                  className="border-primary/25 bg-primary/10 text-primary"
                >
                  {product.status}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-4">
                {product.category}
              </p>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {feature}
                  </li>
                ))}
              </ul>

              <span className="text-sm font-medium text-muted-foreground pt-4 border-t border-border">
                {product.cta} — {product.status.toLowerCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
