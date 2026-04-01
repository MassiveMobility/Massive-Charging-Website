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
  "/platform": {
    badge: "Operator Platform",
    title: "White-Label EV Charging Platform for Serious Operators",
    description:
      "A complete software stack for charging station businesses. Manage stations, set tariffs, process payments, and track network performance from a single operator dashboard.",
    primaryCta: {
      href: "/get-chargers",
      label: "Talk to the Platform Team"
    },
    secondaryCta: {
      href: "/for/cpos",
      label: "CPO Overview"
    },
    cardTitle: "What the platform covers",
    cards: [
      {
        title: "Operator dashboard",
        description:
          "Real-time session status, uptime visibility, and station health across your entire network in one view."
      },
      {
        title: "Tariff and billing control",
        description:
          "Configure energy rates, time-of-day pricing, and session caps per station or station group."
      },
      {
        title: "UPI and app payments",
        description:
          "Drivers start sessions via UPI QR scan or the companion app — no separate wallets, no app lock-in."
      },
      {
        title: "White-label driver and operator apps",
        description:
          "Branded mobile apps for both sides of a charging session. Driver app for discovery and payment, operator app for monitoring and control."
      },
      {
        title: "OCPI roaming readiness",
        description:
          "Standards-based interoperability for connecting to partner networks and enabling cross-network charging."
      },
      {
        title: "WhatsApp bot integration",
        description:
          "Session updates, charger status, and support access delivered through WhatsApp without app installation."
      },
      {
        title: "Gridwatch audit layer",
        description:
          "Independent third-party visibility into network uptime, utilisation, and downtime patterns — without relying on operator-reported data."
      },
      {
        title: "Customer support integration",
        description:
          "Support workflows tied to session records so issues are resolved with full transaction context."
      }
    ],
    stepsTitle: "How operators go live",
    steps: [
      {
        title: "1. Register your stations",
        description: "Connect hardware, configure tariffs, and map your station locations in the CMS."
      },
      {
        title: "2. Enable payments and apps",
        description: "Activate UPI QR and branded app flows for drivers. Set payout cycles for your account."
      },
      {
        title: "3. Monitor and iterate",
        description:
          "Track sessions, adjust pricing, and use Gridwatch audit data to maintain consistent uptime and SLA delivery."
      }
    ],
    faqTitle: "Platform FAQ",
    faqs: [
      {
        question: "Is the platform white-label?",
        answer:
          "Yes. Driver and operator apps carry your branding. The underlying infrastructure runs on Massive's platform."
      },
      {
        question: "What payment methods are supported?",
        answer:
          "UPI QR scan and in-app payments are both supported. Operators get clean session records linked to each transaction."
      },
      {
        question: "What is Gridwatch?",
        answer:
          "Gridwatch is third-party audit software for EV charging networks. It provides independent visibility into utilisation, uptime, and downtime so SLA validation does not rely solely on operator-reported data."
      },
      {
        question: "Does the platform support OCPI?",
        answer:
          "Yes. The platform is built with standards-based interoperability for roaming and partner network integration."
      }
    ]
  },
  "/for/cpos": {
    badge: "For Charging Point Operators",
    title: "One Stack for CPOs. From Hardware to Revenue.",
    description:
      "Massive gives CPOs the software, payment rails, and operational infrastructure to build commercially viable charging networks — without assembling separate vendors for each layer.",
    primaryCta: {
      href: "/get-chargers",
      label: "Start a CPO Conversation"
    },
    secondaryCta: {
      href: "/platform",
      label: "See the Platform"
    },
    cardTitle: "What CPOs get with Massive",
    cards: [
      {
        title: "CMS and operator dashboard",
        description:
          "Real-time station management with session logs, tariff control, network health, and payout tracking in one place."
      },
      {
        title: "UPI and app payment rails",
        description:
          "Drivers pay via UPI scan or branded app. Operators see clean, verified session records with payment status."
      },
      {
        title: "Hardware deployment support",
        description:
          "AC and DC charger sourcing, site assessment, and installation coordination — handled as part of the same engagement."
      },
      {
        title: "OCPI-ready network integration",
        description:
          "Connect to partner networks, enable cross-network roaming, and expand effective coverage without separate agreements."
      },
      {
        title: "Gridwatch for network audit",
        description:
          "Independent third-party audit software that tracks utilisation, uptime, and downtime patterns across your network — providing SLA validation without relying on internal data alone."
      },
      {
        title: "Ongoing operations support",
        description:
          "Alerting, escalation workflows, and maintenance coordination to keep uptime consistent after go-live."
      }
    ],
    stepsTitle: "How CPOs deploy with Massive",
    steps: [
      {
        title: "1. Share your site and scale plan",
        description:
          "Tell us about your locations, vehicle mix, power availability, and commercial model."
      },
      {
        title: "2. Deploy the full stack",
        description:
          "Hardware, CMS, payment rails, and monitoring go live together. No piecemeal vendor coordination."
      },
      {
        title: "3. Operate and earn",
        description:
          "Track sessions, manage tariffs, and receive payouts. Gridwatch audit keeps SLA delivery transparent."
      }
    ],
    faqTitle: "CPO FAQ",
    faqs: [
      {
        question: "Can CPOs set their own tariffs?",
        answer:
          "Yes. Tariff and time-of-day pricing are configurable per station through the operator dashboard."
      },
      {
        question: "What payment rails are supported?",
        answer:
          "UPI QR and in-app payments are both supported. Drivers choose their preferred method; operators see unified records."
      },
      {
        question: "Is OCPI roaming available?",
        answer:
          "Yes. OCPI-based interoperability is supported for partner network connections and cross-network charging."
      },
      {
        question: "What is Gridwatch used for?",
        answer:
          "Gridwatch is independent audit software that gives CPOs and their customers transparent visibility into network uptime, utilisation, and SLA performance."
      }
    ]
  },
  "/chargers/dc": {
    badge: "DC Fast Chargers",
    title: "DC Fast Chargers for Commercial and Public Deployments",
    description:
      "DC chargers deliver high-power charging suited to public corridors, commercial station operators, highway stops, and fleet depots. Requirements vary significantly by site, power availability, and vehicle mix — submit a requirement for model-level guidance.",
    primaryCta: {
      href: "/get-chargers",
      label: "Get a DC Charger Assessment"
    },
    secondaryCta: {
      href: "/chargers/dc",
      label: "AC Charger Options"
    },
    cardTitle: "What DC charger selection depends on",
    cards: [
      {
        title: "Power output and load capacity",
        description:
          "DC charger output is matched to your site's available electrical capacity, not applied as a one-size selection. Load assessment comes before hardware specification."
      },
      {
        title: "Connector and vehicle compatibility",
        description:
          "Connector type selection depends on the vehicle mix at your location. A site assessment identifies the right connector configuration before procurement."
      },
      {
        title: "Enclosure rating and cooling",
        description:
          "Outdoor, indoor, and high-ambient deployments each have different IP rating and thermal management requirements. Hardware is selected accordingly."
      },
      {
        title: "Authentication and payment options",
        description:
          "DC stations on the Massive platform support UPI QR, RFID, and app-based session start. Configuration depends on operator preference and driver profile."
      },
      {
        title: "OCPP connectivity and CMS integration",
        description:
          "DC chargers connect to the Massive operator platform for real-time session management, monitoring, tariff control, and reporting."
      },
      {
        title: "Installation and commissioning",
        description:
          "DC deployments require civil work, load calculations, and transformer assessments. Massive coordinates site readiness alongside hardware procurement."
      }
    ],
    stepsTitle: "How DC charger deployments work",
    steps: [
      {
        title: "1. Site and power assessment",
        description:
          "Share your location, electrical infrastructure, and expected vehicle volume. Load and connection feasibility are evaluated first."
      },
      {
        title: "2. Connector and model specification",
        description:
          "Based on vehicle mix and site constraints, the right charger configuration — output, connector, and enclosure — is selected."
      },
      {
        title: "3. Deploy with network integration",
        description:
          "Hardware goes live connected to the operator platform. Sessions, payments, and uptime are managed in real time from go-live."
      }
    ],
    faqTitle: "DC charger FAQ",
    faqs: [
      {
        question: "Do DC deployments need special infrastructure?",
        answer:
          "Yes. DC chargers require dedicated electrical infrastructure including load assessment, transformer capacity review, and civil preparation. A site assessment is required before hardware selection."
      },
      {
        question: "Can DC stations run UPI payments?",
        answer:
          "Yes. DC stations on the Massive platform support UPI QR scan, RFID, and in-app session starts depending on operator configuration."
      },
      {
        question: "What management system do DC chargers connect to?",
        answer:
          "DC chargers connect to Massive's operator platform for real-time monitoring, tariff management, session reporting, and Gridwatch audit visibility."
      },
      {
        question: "Are AC chargers also available?",
        answer:
          "Yes. Massive deploys both AC and DC chargers. AC options are suited to residential, society, and overnight commercial scenarios."
      }
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
