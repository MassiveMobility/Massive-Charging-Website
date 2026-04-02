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
    badge: "EV CMS & Apps",
    title: "White-Label EV Charging Platform Built for Real Operations",
    description:
      "Massive's operator CMS is a live, commercially deployed software stack — managing sessions, payments, uptime, and tariffs across 50+ stations with 99.95% average uptime and 3,20,000+ completed sessions.",
    primaryCta: {
      href: "/get-chargers",
      label: "Talk to the Platform Team"
    },
    secondaryCta: {
      href: "/for/cpos",
      label: "CPO Partnership Overview"
    },
    stats: [
      { label: "Sessions completed", value: "3,20,000+", note: "across live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" },
      { label: "Monthly energy", value: "150+ MWh", note: "growing 20% month-on-month" }
    ],
    cardTitle: "What the platform covers",
    cards: [
      {
        title: "Real-time monitoring and control",
        description:
          "Session status, station health, and fault alerts across your full network — visible from a single operator dashboard."
      },
      {
        title: "Tariff management",
        description:
          "Configure pricing per station, set time-of-day rates, and manage revenue with full tariff control in the CMS."
      },
      {
        title: "UPI Direct Charging",
        description:
          "Enables app-free, instant digital transactions. No wallet preload or registration steps required for basic charging access — no hardware changes, firmware upgrades, or CMS migration needed."
      },
      {
        title: "WhatsApp Bot Integration",
        description:
          "Streamlines charger discovery and session initiation through WhatsApp. Lower entry barriers increase the likelihood of successful first charging experience."
      },
      {
        title: "White-label companion apps",
        description:
          "Dedicated apps for EV users, station operators, and network owners under your brand — managing sessions, monitoring performance, and controlling operations."
      },
      {
        title: "OCPI 2.2.1 roaming",
        description:
          "Standards-based roaming integration to connect with external CPOs, aggregators, and fleet platforms without CMS replacement."
      },
      {
        title: "Load balancing",
        description:
          "Scalable architecture prevents electrical overload, improves energy optimisation, and protects uptime at multi-charger sites."
      },
      {
        title: "Gridwatch — independent network audit",
        description:
          "Third-party audit software providing independent visibility into utilisation, uptime, and downtime. Validates SLA claims without relying solely on operator-reported data."
      }
    ],
    stepsTitle: "How operators go live",
    steps: [
      {
        title: "1. Connect your hardware",
        description:
          "Integrate chargers via OCPP 1.6J or OCPP 2.1. Register stations, map locations, and configure tariffs in the CMS."
      },
      {
        title: "2. Enable payments and apps",
        description:
          "Activate UPI Direct and branded app flows for drivers. Install QR codes and configure payment settlement cycles."
      },
      {
        title: "3. Monitor and manage",
        description:
          "Track live sessions, adjust tariffs, receive fault alerts, and use Gridwatch audit data to validate uptime against SLA commitments."
      }
    ],
    faqTitle: "Platform FAQ",
    faqs: [
      {
        question: "Is the CMS white-label?",
        answer:
          "Yes. Driver and operator apps are deployed under your brand. The underlying infrastructure is Massive's platform."
      },
      {
        question: "Which OCPP versions are supported?",
        answer:
          "The CMS supports OCPP 1.6J and OCPP 2.1, enabling integration with a wide range of AC and DC charger hardware."
      },
      {
        question: "What is Gridwatch?",
        answer:
          "Gridwatch is third-party audit software for EV charging networks. It provides independent visibility into utilisation, uptime, and downtime — enabling transparent SLA validation without relying solely on operator-reported data."
      },
      {
        question: "Does the platform support OCPI roaming?",
        answer:
          "Yes. The platform uses OCPI 2.2.1 for standards-based roaming integration with partner networks, aggregators, and fleet platforms."
      },
      {
        question: "Can UPI be enabled on existing hardware?",
        answer:
          "Yes. UPI Direct Charging is enabled via OCPI integration. No hardware changes, firmware upgrades, or CMS migration are required on existing infrastructure."
      }
    ]
  },
  "/for/cpos": {
    badge: "For Charging Point Operators",
    title: "Improve Charger Economics Across Your CPO Network",
    description:
      "Massive partners with CPOs to improve charger-level unit economics across revenue, capex efficiency, and uptime governance — through a five-layer operational framework already deployed across 50+ stations.",
    primaryCta: {
      href: "/get-chargers",
      label: "Start a CPO Conversation"
    },
    secondaryCta: {
      href: "/platform",
      label: "See the Platform"
    },
    stats: [
      { label: "Network sessions", value: "3,20,000+", note: "completed on Massive's live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" },
      { label: "Paytm reach", value: "30cr+ users", note: "via OCPI integration with Paytm EV Charging" }
    ],
    cardTitle: "Five layers of CPO support",
    cards: [
      {
        title: "Layer 1 — Increase charger utilisation",
        description:
          "OCPI integration with Paytm EV Charging expands visibility across Paytm's 30cr user base. UPI Direct Charging enables app-free sessions — no hardware changes, firmware upgrades, or CMS migration required."
      },
      {
        title: "Layer 2 — CMS software control",
        description:
          "White-label EV CMS supporting OCPP 1.6J and OCPP 2.1. Includes companion apps for users, operators, and network owners; integrated payment gateway (UPI, cards, wallets); load balancing; and OCPI 2.2.1 roaming for access to partner networks and aggregators."
      },
      {
        title: "Layer 3 — Hardware cost optimisation",
        description:
          "Massive aggregates hardware demand across multiple CPO and OEM projects to negotiate better pricing, enforce stronger SLA terms, and benchmark real-world performance across charger brands."
      },
      {
        title: "Layer 4 — Installation and maintenance",
        description:
          "End-to-end site assessment, installation, and preventive and corrective maintenance programs. Single accountable partner covering commissioning, CMS integration, and ongoing support — eliminating multi-vendor fragmentation."
      },
      {
        title: "Layer 5 — Gridwatch independent audit",
        description:
          "Gridwatch is third-party audit software for EV charging networks. It provides independent visibility into utilisation, uptime, and downtime — validating OEM uptime claims, detecting downtime patterns, benchmarking against SLA commitments, and generating corridor-level reliability reports."
      },
      {
        title: "National-scale deployment capability",
        description:
          "Pan-India execution covering urban, highway, and semi-urban markets with both AC and DC charger installations. Structured rollout processes ensure speed, standardisation, and quality control."
      }
    ],
    stepsTitle: "How CPOs engage with Massive",
    steps: [
      {
        title: "1. Share your network and scale plan",
        description:
          "Tell us about your locations, vehicle segments, current hardware stack, and commercial model."
      },
      {
        title: "2. Activate the layers that apply",
        description:
          "UPI and OCPI can be enabled on existing infrastructure. CMS migration, hardware, and maintenance support are available where needed."
      },
      {
        title: "3. Operate with full visibility",
        description:
          "Track sessions, manage tariffs, receive payouts, and use Gridwatch audit data to validate uptime against SLA commitments."
      }
    ],
    faqTitle: "CPO FAQ",
    faqs: [
      {
        question: "Can UPI be enabled on existing chargers without hardware changes?",
        answer:
          "Yes. UPI Direct Charging is enabled via OCPI integration. No hardware changes, firmware upgrades, or CMS migration are required."
      },
      {
        question: "Which OCPP versions does the CMS support?",
        answer:
          "The white-label EV CMS supports OCPP 1.6J and OCPP 2.1, covering the majority of commercially deployed AC and DC charger hardware."
      },
      {
        question: "How does OCPI roaming work for CPOs?",
        answer:
          "The platform uses OCPI 2.2.1 for session-level interoperability — enabling real-time authentication, tariff application, and settlement with partner networks, aggregators, and fleet platforms without replacing your CMS."
      },
      {
        question: "What is Gridwatch?",
        answer:
          "Gridwatch is third-party audit software for EV charging networks. It provides independent visibility into utilisation, uptime, and downtime — enabling transparent SLA validation without relying solely on operator-reported data."
      }
    ]
  },
  "/chargers/dc": {
    badge: "DC Fast Chargers",
    title: "DC Fast Chargers — 30 kW to 240 kW for Commercial Deployments",
    description:
      "Massive deploys DC fast chargers from 30 kW to 240 kW for public stations, commercial operators, highway corridors, and fleet depots. All models use CCS-2 connectors, forced air cooling, and OCPP 1.6J / OCPP 2.0.1 for CMS integration.",
    primaryCta: {
      href: "/get-chargers",
      label: "Get a DC Charger Assessment"
    },
    secondaryCta: {
      href: "/ev-charging-station-business",
      label: "Charging Station Business"
    },
    cardTitle: "DC charger range — at a glance",
    cards: [
      {
        title: "30 kW — single and dual gun",
        description:
          "Entry-level DC fast charging for commercial stations with moderate traffic. Dual-gun models serve two vehicles simultaneously from a shared power module."
      },
      {
        title: "60 kW dual gun",
        description:
          "Three-phase 415V input, dual CCS-2 guns, 100–1000Vdc output, max 200A per gun. IP55 enclosure, forced air cooling, operating range -25°C to 75°C (de-rated above 55°C). Dynamic power sharing between guns."
      },
      {
        title: "120 kW dual gun",
        description:
          "Three-phase 350–460V input, dual CCS-2 guns, 100–1000Vdc output, max 250A. IP54 enclosure, forced air cooling, operating range -25°C to 55°C. Dimensions: 1725×500×700mm, weight under 350 kg."
      },
      {
        title: "180 kW and 240 kW dual gun",
        description:
          "High-power configurations on a shared platform. Three-phase 350–460V input, dual CCS-2 guns, 100–1000Vdc output, max 150A per gun. IP54 enclosure, forced air cooling. Dimensions: 1850×1064×790mm, weight under 350 kg."
      },
      {
        title: "CMS integration via OCPP 1.6J / OCPP 2.0.1",
        description:
          "All DC chargers connect to the Massive operator platform via OCPP 1.6J or OCPP 2.0.1 — enabling real-time session management, tariff control, reporting, and Gridwatch audit visibility."
      },
      {
        title: "Authentication and payment options",
        description:
          "Session start via mobile app, UPI QR code, RFID card, or password login. DC stations on the Massive platform support UPI Direct Charging with no hardware modifications required."
      },
      {
        title: "Display and interface",
        description:
          "Models from 60 kW and above include a 10-inch TFT touch screen with session status, state-of-charge indicator, and error display. Emergency stop push button on all models."
      },
      {
        title: "Site assessment before specification",
        description:
          "DC deployments require three-phase power infrastructure, load calculations, and civil preparation. Massive coordinates site readiness, electrical assessment, and commissioning as part of deployment."
      }
    ],
    stepsTitle: "How DC charger deployments work",
    steps: [
      {
        title: "1. Site and power assessment",
        description:
          "Share your location, electrical supply (three-phase availability), and expected vehicle volume. Load feasibility and transformer capacity are assessed first."
      },
      {
        title: "2. Model selection based on requirements",
        description:
          "Power output (30–240 kW), number of guns, and enclosure rating are selected based on your vehicle mix, site constraints, and traffic profile."
      },
      {
        title: "3. Deploy with full network integration",
        description:
          "Hardware goes live connected to the operator platform via OCPP. Sessions, UPI payments, uptime monitoring, and Gridwatch audit run from day one."
      }
    ],
    faqTitle: "DC charger FAQ",
    faqs: [
      {
        question: "What connector type do Massive DC chargers use?",
        answer:
          "All Massive DC chargers in the 60–240 kW range use CCS-2 (Combined Charging System Type 2) connectors, compatible with current-generation 4W EVs in India."
      },
      {
        question: "What are the infrastructure requirements for DC charging?",
        answer:
          "DC chargers require three-phase electrical supply (typically 350–460V), dedicated load capacity, and civil preparation. A site assessment is conducted before hardware specification."
      },
      {
        question: "Which OCPP versions are supported?",
        answer:
          "DC chargers on the Massive platform support OCPP 1.6J and OCPP 2.0.1, with communication via WiFi, GSM (2G/3G/4G), or Ethernet."
      },
      {
        question: "Can DC stations accept UPI payments?",
        answer:
          "Yes. DC stations on the Massive platform support UPI Direct Charging via QR code — no hardware changes required on existing infrastructure."
      },
      {
        question: "Are AC chargers also available?",
        answer:
          "Yes. Massive deploys AC chargers at 3.3, 7.4, 11, 15, and 22 kW for residential, workplace, and overnight commercial scenarios."
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
  },
  "/for/fleet-operators": {
    badge: "For Fleet Operators",
    title: "Captive EV Charging Infrastructure for Commercial Fleets",
    description:
      "Massive deploys and operates charging infrastructure for commercial fleets — covering site assessment, installation, CMS integration, payments, fleet controls, and ongoing maintenance under a single accountable partnership.",
    primaryCta: {
      href: "/get-chargers",
      label: "Start a Fleet Conversation"
    },
    secondaryCta: {
      href: "/platform",
      label: "See the Platform"
    },
    stats: [
      { label: "Network sessions", value: "3,20,000+", note: "completed on Massive's live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" },
      { label: "Deployment scale", value: "Pan-India", note: "urban, highway, and semi-urban markets" }
    ],
    cardTitle: "Four pillars of fleet charging support",
    cards: [
      {
        title: "Captive charging infrastructure",
        description:
          "End-to-end site assessment, installation, and maintenance under one accountable partner — eliminating multi-vendor fragmentation. We don't just deploy chargers; we protect your fleet operations."
      },
      {
        title: "Multiple network access from day one",
        description:
          "Immediate connectivity to Massive's live operational network plus roaming access to partner networks — your drivers gain meaningful charging coverage without waiting for new infrastructure rollout."
      },
      {
        title: "UPI Direct and WhatsApp charging",
        description:
          "QR-based or deep-link UPI charging eliminates mandatory app downloads. WhatsApp session initiation reduces the learning curve and increases the likelihood of a successful first charging experience."
      },
      {
        title: "Centralized fleet dashboard",
        description:
          "Monitor vehicle-wise charging activity, energy consumption, and cost allocation across all locations from a unified interface."
      },
      {
        title: "Vehicle and driver-level controls",
        description:
          "Tag-based access control enabling session authorization by vehicle ID, RFID card, or registered driver credentials."
      },
      {
        title: "Corporate wallets and GST invoicing",
        description:
          "Dedicated enterprise wallets with configurable spending limits and automated billing cycles. GST-compliant invoicing with session-level breakdown for accounting, reimbursement, and audit purposes."
      }
    ],
    stepsTitle: "How fleet deployments work",
    steps: [
      {
        title: "1. Site assessment and planning",
        description:
          "Comprehensive assessment of depot or parking locations — identifying optimal charger placement, load capacity, and grid integration requirements."
      },
      {
        title: "2. Deploy hardware and software together",
        description:
          "AC or DC chargers installed with full CMS integration, payment activation, and fleet controls configured. Single accountable partner for commissioning and go-live."
      },
      {
        title: "3. Operate with full visibility",
        description:
          "Track sessions by vehicle and driver, manage corporate wallets, review GST invoices, and monitor utilisation patterns through the fleet dashboard."
      }
    ],
    faqTitle: "Fleet charging FAQ",
    faqs: [
      {
        question: "Can access be restricted to authorised vehicles and drivers only?",
        answer:
          "Yes. Tag-based access control supports session authorization by vehicle ID, RFID card, or registered driver credentials."
      },
      {
        question: "Is GST-compliant invoicing available?",
        answer:
          "Yes. Consolidated GST-compliant invoices with session-level breakdown are available for accounting, reimbursement, and audit purposes."
      },
      {
        question: "Can fleet drivers charge on networks outside the depot?",
        answer:
          "Yes. Roaming access to partner networks is available from day one through Massive's OCPI integration — no separate infrastructure deployment required."
      },
      {
        question: "What charger types are available for fleet depots?",
        answer:
          "Both AC (3.3–22 kW) and DC (30–240 kW) chargers are deployed based on vehicle type, dwell time, and power availability at the site."
      }
    ]
  }
};

export function getMarketingPageContent(routePath: string): MarketingContent {
  const content = marketingPageContent[routePath];

  if (!content) {
    throw new Error(`Missing marketing page content for route: ${routePath}`);
  }

  return content;
}
