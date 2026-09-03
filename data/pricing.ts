export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Business Launch",
    tagline: "A professional, ready-to-launch website for your business.",
    price: "PKR 45,000",
    features: [
      "Up to 5-page responsive website",
      "Home, About, Services & Contact pages",
      "One additional page",
      "WhatsApp integration",
      "Inquiry / contact form",
      "Google Maps integration",
      "Basic SEO",
      "Google Analytics",
      "Deployment",
      "30-day bug support",
      "Delivery in 7–10 working days",
      "50% advance + 50% before launch",
    ],
  },
  {
    name: "Business Growth System",
    tagline: "For businesses ready to run on software, not spreadsheets.",
    price: "PKR 95,000",
    popular: true,
    features: [
      "Everything in Business Launch",
      "Admin dashboard",
      "Lead / inquiry management",
      "Authentication",
      "Database",
      "CRUD functionality",
      "Analytics & reporting",
      "Email notifications",
      "WhatsApp integration",
      "Deployment",
      "60-day bug support",
      "Delivery in 2–4 weeks",
    ],
  },
  {
    name: "AI Automation System",
    tagline: "For businesses ready to automate workflows with AI.",
    price: "Starting from PKR 150,000",
    priceNote:
      "Final price depends on your workflows and integrations, and is confirmed after a discovery session.",
    features: [
      "Workflow discovery & analysis",
      "AI integration",
      "Business process automation",
      "Dashboard where required",
      "API integrations",
      "Testing",
      "Deployment",
      "Delivery in 2–6 weeks",
      "Final custom quote after discovery",
    ],
  },
];
