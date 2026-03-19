export type MarketingStat = {
  label: string;
  value: string;
  note: string;
};

export type MarketingCard = {
  title: string;
  description: string;
};

export type MarketingStep = {
  title: string;
  description: string;
};

export type MarketingFaq = {
  question: string;
  answer: string;
};

export type MarketingContent = {
  badge: string;
  title: string;
  description: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  stats?: MarketingStat[];
  cardTitle?: string;
  cards?: MarketingCard[];
  stepsTitle?: string;
  steps?: MarketingStep[];
  faqTitle?: string;
  faqs?: MarketingFaq[];
  note?: string;
};

/**
 * Centralized content model for non-dynamic migrated routes.
 */
export const marketingPageContent: Record<string, MarketingContent> = {
  "/upi-charging": {
    badge: "UPI Charging",
    title: "Scan UPI and Start EV Charging in Seconds",
    description:
      "No app lock-in. Drivers scan, pay, and charge with existing UPI apps while operators get verified sessions and clean reconciliation.",
    primaryCta: {
      href: "/get-chargers",
      label: "Get UPI Chargers"
    },
    secondaryCta: {
      href: "/charging-guide",
      label: "Read Charging Guide"
    },
    stats: [
      { label: "Session Start", value: "< 20 sec", note: "scan to charge flow" },
      { label: "Payment Rails", value: "UPI Native", note: "no separate wallet" },
      { label: "Settlement Clarity", value: "Daily", note: "structured payout records" }
    ],
    cardTitle: "Why operators prefer UPI-first charging",
    cards: [
      {
        title: "Lower friction at station",
        description: "Drivers start sessions quickly without creating new accounts."
      },
      {
        title: "Faster issue resolution",
        description: "Transactions are traceable through a single payment identity."
      },
      {
        title: "Cleaner accounting",
        description: "Unified session and payment logs simplify reconciliation."
      }
    ],
    stepsTitle: "How the flow works",
    steps: [
      { title: "1. Driver scans station QR", description: "Station context and tariff are loaded instantly." },
      { title: "2. UPI payment is authorized", description: "Session starts only after verified payment intent." },
      { title: "3. Session summary is generated", description: "Units, duration, and amount are stored for records." }
    ],
    faqTitle: "UPI charging FAQ",
    faqs: [
      {
        question: "Do drivers need the Massive app to pay?",
        answer: "No. Any UPI app can start and pay for a charging session."
      },
      {
        question: "Can this work for AC and DC stations?",
        answer: "Yes. UPI flow can be attached to both AC and DC station types."
      }
    ]
  },
  "/ev-charging-shop": {
    badge: "EV Charging Shop",
    title: "EV Charging Shop Is Being Built for Practical Buying Decisions",
    description:
      "The shop route is now a complete migration page with category-level guidance for chargers, connectors, installation kits, and warranty planning.",
    primaryCta: {
      href: "/charging-guide",
      label: "Compare Charger Categories"
    },
    secondaryCta: {
      href: "/get-chargers",
      label: "Request a Recommendation"
    },
    cardTitle: "What this storefront will support",
    cards: [
      {
        title: "Use-case first discovery",
        description: "Choose products by home, fleet, or public-station requirements."
      },
      {
        title: "Connector and safety clarity",
        description: "Every listing includes connector compatibility and install readiness."
      },
      {
        title: "Operations-aware bundles",
        description: "Hardware, software, and maintenance bundles for long-term uptime."
      }
    ],
    stepsTitle: "Planned buying journey",
    steps: [
      { title: "1. Choose your setup type", description: "Home, residential, commercial, or fleet." },
      { title: "2. Match hardware and capacity", description: "Select by vehicle mix and charging window." },
      { title: "3. Confirm installation scope", description: "Finalize electrical and site dependencies." }
    ]
  },
  "/plans-offers": {
    badge: "Pricing and Offers",
    title: "Pricing Plans Designed for EV Charging Operations",
    description:
      "Transparent plans for personal charging users, station operators, and network partners with clear cost-to-value alignment.",
    primaryCta: {
      href: "/get-chargers",
      label: "Get a Custom Quote"
    },
    secondaryCta: {
      href: "/ev-charging-station-business",
      label: "Explore Business Setup"
    },
    stats: [
      { label: "Starter", value: "Entry Plan", note: "for pilots and small setups" },
      { label: "Growth", value: "Operator Plan", note: "for active station businesses" },
      { label: "Scale", value: "Enterprise Plan", note: "for multi-site management" }
    ],
    cardTitle: "What every plan can include",
    cards: [
      {
        title: "Tariff and payout controls",
        description: "Configure pricing and monitor payout cycles from one dashboard."
      },
      {
        title: "Operational support options",
        description: "Choose self-managed, managed, or hybrid support models."
      },
      {
        title: "Analytics and reporting",
        description: "Track utilization, session quality, and growth trends over time."
      }
    ],
    faqTitle: "Pricing FAQ",
    faqs: [
      {
        question: "Do plans differ for AC and DC setups?",
        answer: "Yes. Hardware profile and power requirement influence pricing."
      },
      {
        question: "Can plans be upgraded later?",
        answer: "Yes. Migration path from pilot to multi-site setups is supported."
      }
    ]
  },
  "/charging-guide": {
    badge: "Charging Guide",
    title: "EV Charging Guide for Drivers, Owners, and Operators",
    description:
      "Browse practical guidance on charging standards, infrastructure planning, and real deployment scenarios with machine-readable, crawlable content.",
    primaryCta: {
      href: "/charging-guide/ev-cars",
      label: "Browse EV Cars"
    },
    secondaryCta: {
      href: "/get-chargers",
      label: "Ask an Expert"
    },
    cardTitle: "Guide categories",
    cards: [
      {
        title: "Vehicle-specific charging",
        description: "Connector types, battery behavior, and charging windows by model."
      },
      {
        title: "Infrastructure basics",
        description: "AC/DC choices, power upgrades, and deployment checklists."
      },
      {
        title: "Field learnings",
        description: "Operational insights from real-world station and trip scenarios."
      }
    ],
    stepsTitle: "How to use this guide",
    steps: [
      { title: "1. Start from your use case", description: "Home charging, station business, or fleet operations." },
      { title: "2. Compare charger options", description: "Filter by vehicle segment and connector compatibility." },
      { title: "3. Move to implementation", description: "Use route-specific forms to plan deployment." }
    ]
  },
  "/ev-charging-station-business": {
    badge: "Charging Station Business",
    title: "Start and Operate an EV Charging Station Business",
    description:
      "Build a practical charging business with setup planning, charger selection, software stack, payment rails, and operational handoff.",
    primaryCta: {
      href: "/charging-station-biz",
      label: "Choose Business Scenario"
    },
    secondaryCta: {
      href: "/get-chargers",
      label: "Get Requirement Assessment"
    },
    stats: [
      { label: "Deployment Model", value: "AC or DC", note: "site and traffic dependent" },
      { label: "Operations Stack", value: "End-to-End", note: "hardware, software, support" },
      { label: "Rollout Style", value: "Phased", note: "start small and scale reliably" }
    ],
    cardTitle: "Business stack included",
    cards: [
      {
        title: "Site and feasibility planning",
        description: "Land, parking layout, and power-readiness evaluation."
      },
      {
        title: "Software and payment systems",
        description: "Session management, QR payments, dashboards, and reporting."
      },
      {
        title: "Lifecycle support",
        description: "Installation, maintenance workflows, and uptime management."
      }
    ],
    stepsTitle: "Launch sequence",
    steps: [
      { title: "1. Select scenario", description: "Choose residential, commercial, fleet, or corridor model." },
      { title: "2. Finalize infra plan", description: "Decide charger mix, load strategy, and process design." },
      { title: "3. Go live with monitoring", description: "Track sessions, payouts, and station reliability." }
    ],
    note: "Earning potential depends on location quality, utilization, tariff, and uptime discipline."
  }
};

export function getMarketingPageContent(routePath: string): MarketingContent {
  const content = marketingPageContent[routePath];

  if (!content) {
    throw new Error(`Missing marketing page content for route: ${routePath}`);
  }

  return content;
}
