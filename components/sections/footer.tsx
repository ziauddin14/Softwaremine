"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/profile.php?id=61577453445312", 
    label: "Facebook" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/softwaremine-tech/", 
    label: "LinkedIn" 
  },
  { 
    icon: Mail, 
    href: "mailto:softwaremineagency@gmail.com", 
    label: "Email" 
  },
  { 
    icon: MessageCircle, 
    href: "https://wa.me/923198998086", 
    label: "WhatsApp" 
  },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2.5 justify-center md:justify-start mb-2 group">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
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
                <span className="text-[10px] font-small text-muted-foreground tracking-wider capitalize mt-1 opacity-80">
                  Healthcare, Education & SaaS Systems
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Powered Software Platforms for Clinics, Education & Startups
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border/40 bg-card/30 flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border/20 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Softwaremine. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
