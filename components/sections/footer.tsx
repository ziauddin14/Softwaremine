"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { navLinks, whatsappUrl } from "@/data/navigation";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { products } from "@/data/products";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61577453445312",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/softwaremine-tech/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:softwaremineagency@gmail.com",
    label: "Email",
  },
  {
    icon: MessageCircle,
    href: whatsappUrl,
    label: "WhatsApp",
  },
];

const footerColumns = [
  {
    title: "Navigation",
    links: navLinks.map((link) => ({ label: link.label, href: link.href })),
  },
  {
    title: "Solutions",
    links: solutions.map((s) => ({ label: s.title, href: s.href })),
  },
  {
    title: "Services",
    links: services.map((s) => ({ label: s.title, href: "#services" })),
  },
  {
    title: "Products",
    links: products.map((p) => ({ label: p.name, href: "#products" })),
  },
];

export function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-border bg-soft-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4 group">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-border">
                <img
                  src="/logo.jpeg"
                  alt="Softwaremine Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold text-foreground leading-none">
                  Softwaremine
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-wider capitalize mt-1">
                  Software Systems, SaaS &amp; AI Automation
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              We build modern software systems, SaaS products, and AI-powered
              automation for healthcare, education, and growing businesses.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-white flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Softwaremine. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
