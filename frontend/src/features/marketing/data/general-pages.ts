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
  "/chargers/ac": {
    badge: "AC Chargers",
    title: "AC EV Chargers — 3.3 kW to 22 kW",
    description:
      "Massive's AC charger range covers residential, workplace, and commercial charging from 3.3 kW to 22 kW. All models use Type-2 connectors, natural air cooling, and OCPP 1.6J / OCPP 2.0.1 for CMS integration.",
    primaryCta: {
      href: "/get-chargers",
      label: "Get an AC Charger Assessment"
    },
    secondaryCta: {
      href: "/chargers/dc",
      label: "DC Fast Chargers"
    },
    cardTitle: "AC charger range",
    cards: [
      {
        title: "3.3 kW — home and light commercial",
        description:
          "Single-phase 230V, 16A. IEC 60309 industrial socket and 3-pin domestic socket. OCPP 1.6J, app authentication, remote on/off, UPI payment. Natural air cooling, wall mounting, ABS enclosure."
      },
      {
        title: "7.4 kW — residential and workplace",
        description:
          "Single-phase 180–275V, 32A. Type-2 connector. IP65, IK10. OCPP 1.6J / OCPP 2.0.1. App, QR code, and RFID authentication. Natural air cooling. 280×235×100mm, 5.5kg. Wall / pedestal mounted."
      },
      {
        title: "7.4 kW dual gun — shared workplace charging",
        description:
          "Three-phase 415V, 32A. Two Type-2 connectors. 15 kW total rated output. OCPP 1.6J, app and UPI authentication. Natural air cooling. Wall mounting."
      },
      {
        title: "22 kW — commercial and fleet",
        description:
          "Three-phase 350–460V, 32A per phase. Type-2 connector, Mode 3. IP65, IK10. OCPP 1.6J / OCPP 2.0.1. App, QR code, and RFID authentication. Natural air cooling. 280×235×100mm, 5.5kg."
      },
      {
        title: "OCPP 1.6J and OCPP 2.0.1 on all models",
        description:
          "All AC chargers connect to Massive's operator CMS via OCPP for real-time session management, tariff control, remote start/stop, and UPI payment activation."
      },
      {
        title: "Site assessment before installation",
        description:
          "AC charger selection depends on single vs three-phase supply, load availability, and parking layout. Massive assesses site readiness before specifying and installing hardware."
      }
    ],
    stepsTitle: "How AC charger deployments work",
    steps: [
      {
        title: "1. Assess site power and layout",
        description:
          "Single-phase sites suit 3.3–7.4 kW models. Three-phase supply enables 22 kW and dual-gun configurations. Load capacity and wiring condition are assessed first."
      },
      {
        title: "2. Select model and connector",
        description:
          "Model is selected based on vehicle type, dwell time, and required throughput. All 4W EVs use Type-2 connectors. Domestic socket models suit home and light commercial."
      },
      {
        title: "3. Deploy with CMS and UPI active",
        description:
          "Charger goes live connected to the operator platform. Sessions, tariff, remote control, and UPI payments are active from commissioning."
      }
    ],
    faqTitle: "AC charger FAQ",
    faqs: [
      {
        question: "What connector do AC chargers use?",
        answer:
          "4W models use Type-2 (IEC 62196-2). The 3.3 kW LEVAC model also includes an IEC 60309 industrial socket and a 3-pin domestic socket for broader compatibility."
      },
      {
        question: "Do AC chargers support UPI payments?",
        answer:
          "Yes. All models with app connectivity support UPI payment. No hardware changes are required to enable UPI on existing AC chargers connected to the Massive CMS."
      },
      {
        question: "What is the difference between 7.4 kW single and dual gun?",
        answer:
          "The single-gun model is single-phase and charges one vehicle at 7.4 kW. The dual-gun model is three-phase with a 15 kW total output shared across two simultaneous sessions."
      },
      {
        question: "Are Type-6/7 chargers for 2W/3W in this range?",
        answer:
          "No. Type-6 and Type-7 chargers for 2W and 3W EVs are a separate category. See the Type-6/7 charger range for those models."
      }
    ]
  },
  "/chargers/type-6-7": {
    badge: "Type-6/7 Chargers",
    title: "Type-6 and Type-7 Chargers for 2W and 3W EVs",
    description:
      "Massive's Type-6/7 charger range is built for new-generation electric two-wheelers and three-wheelers. Type-6 connectors (IEC 62196-2-6 / IS 17017-2-6) at 3 kW and 12 kW — significantly reducing charge times for 2W and 3W fleets.",
    primaryCta: {
      href: "/get-chargers",
      label: "Get a Type-6/7 Assessment"
    },
    secondaryCta: {
      href: "/chargers/ac",
      label: "AC Chargers for 4W"
    },
    cardTitle: "Type-6/7 range",
    cards: [
      {
        title: "3 kW Type-6 — single gun",
        description:
          "Single-phase 230V input (165–264V range). Output: 40–58V DC, 0–50A. CC-CV charging profile. Power factor >0.99 (APFC). Efficiency >92% (peak >96%). IP54, forced air cooling. OCPP 1.6J. App, QR code, RFID authentication. Wall mount and stand. IS-17017-25 compliant."
      },
      {
        title: "12 kW Type-6/7",
        description:
          "Higher-output model for faster 2W and 3W charging. Contact us for full technical specifications and deployment guidance."
      },
      {
        title: "Type-6 connector standard",
        description:
          "Type-6 connector conforms to IEC 62196-2-6 and IS 17017-2-6. Regulatory compliance per IS-17017-25. Designed specifically for Indian 2W and 3W EV connector standards."
      },
      {
        title: "LFP battery chemistry compatible",
        description:
          "The 3 kW Type-6 model is designed for LFP cell chemistry with passive cell balancing — aligned with the battery types common in current Indian 2W and 3W EVs."
      },
      {
        title: "ESD and surge protection",
        description:
          "15 kV air discharge and 8 kV contact discharge ESD immunity. 1 kV surge protection for common and differential mode. Residual current protection: 6 mA DC, 30 mA AC."
      },
      {
        title: "CMS and payment integration",
        description:
          "OCPP 1.6J for CMS connectivity. GSM, WiFi, and Ethernet communication options. App, QR code, and RFID authentication supported. OTA updates enabled."
      }
    ],
    stepsTitle: "Deploying Type-6/7 chargers",
    steps: [
      {
        title: "1. Identify your vehicle fleet",
        description:
          "Confirm the 2W or 3W vehicle types and battery chemistry at your site. Most current Indian 2W EVs use LFP batteries compatible with the Type-6 specification."
      },
      {
        title: "2. Select power level",
        description:
          "3 kW suits single-vehicle or overnight scenarios. 12 kW suits faster turnaround at commercial or fleet locations."
      },
      {
        title: "3. Deploy with CMS integration",
        description:
          "Charger connects to the Massive CMS via OCPP. QR-based or app-based session start, UPI or RFID payment, and remote monitoring active from commissioning."
      }
    ],
    faqTitle: "Type-6/7 FAQ",
    faqs: [
      {
        question: "Which vehicles use Type-6/7 connectors?",
        answer:
          "Type-6 and Type-7 connectors are used by Indian electric two-wheelers and three-wheelers. They differ from the Type-2 connectors used by 4W EVs."
      },
      {
        question: "What is the output voltage range of the 3 kW model?",
        answer:
          "The 3 kW Type-6 model outputs 40–58V DC at 0–50A, using a CC-CV charging profile. It accepts single-phase 230V input with a range of 165–264V."
      },
      {
        question: "Is the Type-6 connector IS 17017 compliant?",
        answer:
          "Yes. The Type-6 connector conforms to IEC 62196-2-6 and IS 17017-2-6. The charger meets IS-17017-25 regulatory requirements."
      }
    ]
  },
  "/manufacturing": {
    badge: "EV Charger Manufacturing",
    title: "EV Chargers Manufactured for Indian Conditions",
    description:
      "Massive manufactures AC, Type-6/7, and DC EV chargers from 3 kW to 240 kW — designed for residential, workplace, commercial, and public charging deployments across 2W, 3W, and 4W segments.",
    primaryCta: {
      href: "/get-chargers",
      label: "Get a Hardware Quote"
    },
    secondaryCta: {
      href: "/chargers/ac",
      label: "Browse AC Chargers"
    },
    cardTitle: "Three charger categories",
    cards: [
      {
        title: "AC chargers — 3.3 kW to 22 kW",
        description:
          "Designed for residential, workplace, and commercial environments. Type-2 and domestic socket connectors. OCPP 1.6J / OCPP 2.0.1. Natural air cooling. Wall and pedestal mounting options."
      },
      {
        title: "Type-6/7 chargers — 3 kW and 12 kW",
        description:
          "Built for new-generation 2W and 3W EVs. Type-6 connector (IEC 62196-2-6 / IS 17017-2-6). Significantly reduces charge times for two-wheeler and three-wheeler fleets."
      },
      {
        title: "DC fast chargers — 30 kW to 240 kW",
        description:
          "Engineered for public stations, commercial operators, highway corridors, and fleet depots. CCS-2 connectors, forced air cooling, dual-gun configurations, OCPP 1.6J / OCPP 2.0.1."
      },
      {
        title: "Third-party hardware also supported",
        description:
          "Massive quality-checks and deploys third-party charger hardware in addition to its own manufactured range. OCPP-compatible hardware from other manufacturers can be integrated into the CMS."
      },
      {
        title: "CMS integration on all models",
        description:
          "Every manufactured charger connects to Massive's operator CMS via OCPP for real-time session management, tariff control, UPI payments, and Gridwatch audit visibility."
      },
      {
        title: "IS 17017 compliance",
        description:
          "Manufactured chargers reference IS 17017 standards for safety, metering, and connector compliance — covering relevant BIS requirements for the Indian market."
      }
    ],
    stepsTitle: "From hardware to running station",
    steps: [
      {
        title: "1. Select category and power level",
        description:
          "Choose based on vehicle segment (2W, 3W, or 4W), charging scenario (home, depot, public), and available electrical infrastructure."
      },
      {
        title: "2. Site assessment and specification",
        description:
          "Massive coordinates load assessment, connector selection, and mounting requirements before hardware supply and installation."
      },
      {
        title: "3. Deploy with CMS and payments active",
        description:
          "Hardware goes live connected to the operator CMS with UPI, OCPI roaming, and Gridwatch audit configured from day one."
      }
    ],
    faqTitle: "Manufacturing FAQ",
    faqs: [
      {
        question: "Does Massive manufacture all its own chargers?",
        answer:
          "Massive manufactures its own AC, Type-6/7, and DC charger range. It also quality-checks and deploys compatible third-party hardware where required."
      },
      {
        question: "Which standards do the chargers comply with?",
        answer:
          "Manufactured chargers reference IS 17017 series standards. Type-6 connectors conform to IEC 62196-2-6 and IS 17017-2-6. DC chargers support DIN SPEC 70121 and ISO 15118 for high-level communication."
      },
      {
        question: "Can chargers be supplied without CMS integration?",
        answer:
          "Hardware can be supplied standalone, but all manufactured models are designed to connect to an OCPP-compatible CMS. Integration with Massive's platform or a third-party CMS is supported."
      }
    ]
  },
  "/marketplace": {
    badge: "EV Chargers Marketplace",
    title: "Source EV Chargers for Any Deployment Scenario",
    description:
      "Browse Massive's AC, Type-6/7, and DC charger range — from 3.3 kW home chargers to 240 kW public fast chargers. All models connect to the Massive CMS with OCPP and support UPI payments.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Charger Quote"
    },
    secondaryCta: {
      href: "/chargers/dc",
      label: "DC Fast Chargers"
    },
    cardTitle: "Browse by category",
    cards: [
      {
        title: "AC chargers",
        description:
          "3.3 kW to 22 kW for residential, workplace, and commercial charging. Type-2 connectors, natural air cooling, wall or pedestal mounting, OCPP 1.6J / 2.0.1."
      },
      {
        title: "Type-6/7 chargers",
        description:
          "3 kW and 12 kW for 2W and 3W EVs. Type-6 connector (IEC 62196-2-6), forced air cooling, wall mount and stand options, OCPP 1.6J."
      },
      {
        title: "DC fast chargers",
        description:
          "30 kW to 240 kW for public corridors, commercial stations, and fleet depots. CCS-2, dual-gun configurations, forced air cooling, OCPP 1.6J / 2.0.1."
      },
      {
        title: "CMS and payments on every charger",
        description:
          "All models connect to Massive's operator platform via OCPP. UPI Direct Charging and RFID authentication are supported across the range."
      }
    ],
    stepsTitle: "How to source chargers",
    steps: [
      {
        title: "1. Identify your scenario",
        description:
          "Home, residential society, commercial site, fleet depot, or public corridor — each scenario has a recommended charger category and power range."
      },
      {
        title: "2. Submit a requirement",
        description:
          "Share site details, vehicle types, and power availability. Massive recommends the right model, connector, and configuration."
      },
      {
        title: "3. Receive with installation",
        description:
          "Hardware is supplied with site assessment, installation, CMS configuration, and commissioning — not as a standalone box."
      }
    ]
  },
  "/franchise": {
    badge: "EV Charging Franchise",
    title: "Start Your EV Charging Station with Massive",
    description:
      "Three franchise models for operating an EV charging station under the Massive Charging brand — from a complete turnkey station with infrastructure development to a charger-supply-only arrangement.",
    primaryCta: {
      href: "/get-chargers",
      label: "Enquire About a Franchise"
    },
    secondaryCta: {
      href: "/ev-charging-station-business",
      label: "Charging Station Business"
    },
    stats: [
      { label: "Total investment", value: "₹6.5 Lakhs", note: "Model 1 — complete bundle with infra" },
      { label: "Monthly profit", value: "₹30K–40K", note: "after power and admin costs" },
      { label: "Breakeven", value: "20–24 months", note: "based on franchise economics model" }
    ],
    cardTitle: "Three franchise models",
    cards: [
      {
        title: "Model 1 — Complete bundle (₹6 lakhs)",
        description:
          "25 AC 3.3 kW chargers (SIM/WiFi) + electricity connection liaisoning + infrastructure development. Includes franchisee fee, marketing material, training, 45-day operations handholding, and fleet partnerships. Total: ₹6,50,000."
      },
      {
        title: "Model 2 — Chargers only (10+ units)",
        description:
          "Franchisee fee ₹35,000. Charger pricing negotiated by dealer. Includes marketing kit, brand kit, full training, and 30-day operations handholding."
      },
      {
        title: "Model 3 — Chargers only (fewer than 10)",
        description:
          "No franchisee fee. Charger pricing negotiated by dealer. Includes marketing kit, brand kit, and full training on how to run the station."
      },
      {
        title: "What every model includes",
        description:
          "Marketing material (illuminated board, flex, posters, brochures, flyers, stickers, social media promotion), brand kit, and complete training on station operations."
      },
      {
        title: "Remote charger management",
        description:
          "Start and stop charging remotely via the 1C app. UPI payment enabled on all chargers. Auto-price calculator based on energy consumed. 4G LTE / WiFi connectivity."
      },
      {
        title: "Fleet partnerships included",
        description:
          "Fleet partnerships are provided complimentary with Model 1 — giving your station access to demand from fleet operators from day one."
      }
    ],
    stepsTitle: "How to get started",
    steps: [
      {
        title: "1. Choose your model",
        description:
          "Select the complete bundle (Model 1) for a turnkey station including infrastructure, or the charger-only models if you already have a site and electrical setup."
      },
      {
        title: "2. Complete setup with Massive's support",
        description:
          "Massive coordinates electrical liaisoning, infrastructure development, charger installation, and CMS configuration. Marketing material and brand kit are provided."
      },
      {
        title: "3. Go live and earn",
        description:
          "Accept UPI payments, manage your station remotely via app, and receive payouts. Operations executive on-site support provided for the first 30–45 days."
      }
    ],
    faqTitle: "Franchise FAQ",
    faqs: [
      {
        question: "What are the monthly running costs?",
        answer:
          "Based on the Model 1 economics: monthly power costs ₹80,000–₹90,000 and monthly admin costs ₹30,000, against average monthly revenue of ₹1,50,000."
      },
      {
        question: "Is electrical infrastructure included in Model 1?",
        answer:
          "Yes. Model 1 includes electricity connection liaisoning and infrastructure development at ₹2,50,000 as part of the total ₹6,50,000 investment."
      },
      {
        question: "What charger type does the franchise model use?",
        answer:
          "The franchise model is built on AC 3.3 kW chargers with SIM or WiFi connectivity, UPI payment, remote start/stop, and 1C app integration."
      },
      {
        question: "Is training provided?",
        answer:
          "Yes. Complete training on how to run the station is included in all three models. Model 1 and Model 2 also include an operations executive for on-site handholding."
      }
    ]
  },
  "/gridwatch": {
    badge: "Gridwatch",
    title: "Independent Audit Software for EV Charging Networks",
    description:
      "Gridwatch is third-party audit software for EV charging networks, providing independent visibility into utilisation, uptime, and downtime. It enables transparent SLA validation without relying solely on operator-reported data.",
    primaryCta: {
      href: "/get-chargers",
      label: "Talk to Us About Gridwatch"
    },
    secondaryCta: {
      href: "/for/cpos",
      label: "CPO Partnership Overview"
    },
    cardTitle: "What Gridwatch provides",
    cards: [
      {
        title: "Validate uptime claims independently",
        description:
          "Independent verification of reported uptime data instead of relying only on operator dashboards. Applicable for CPOs auditing their own network and for OEMs auditing third-party CPO performance."
      },
      {
        title: "Detect downtime patterns",
        description:
          "Identify recurring faults, location-specific failures, and underperforming chargers through data analysis — before they become customer-facing problems."
      },
      {
        title: "SLA benchmarking",
        description:
          "Measure actual network performance against agreed service-level commitments. Provides objective evidence for SLA reviews and dispute resolution."
      },
      {
        title: "Corridor-level reliability reports",
        description:
          "Assess charging reliability across key routes and high-traffic highway clusters. Identify gaps in coverage and underperforming stations on critical corridors."
      },
      {
        title: "Customer experience protection",
        description:
          "Flag risk areas before they impact end users and brand perception — whether for a CPO, a vehicle OEM relying on third-party networks, or a fleet operator."
      },
      {
        title: "Revenue leakage detection",
        description:
          "Identify under-billing, failed sessions, or settlement inefficiencies affecting revenue realization across the network."
      },
      {
        title: "AC vs DC usage trends",
        description:
          "Understand charging preference patterns across slow and fast charging environments to shape infrastructure investment decisions."
      },
      {
        title: "Model-wise behaviour analysis",
        description:
          "Charging patterns segmented by vehicle model to support product planning, battery strategy, and range communication."
      }
    ],
    stepsTitle: "How Gridwatch fits your operations",
    steps: [
      {
        title: "1. Connect your network via OCPI",
        description:
          "Gridwatch receives session and status data through OCPI — no operator dashboard access required. Independent data path ensures audit integrity."
      },
      {
        title: "2. Monitor uptime and utilisation continuously",
        description:
          "Real-time and historical visibility into station availability, session completion rates, and fault frequency across all connected sites."
      },
      {
        title: "3. Report against SLA commitments",
        description:
          "Generate corridor-level and network-level reliability reports to validate SLA delivery to customers, investors, or OEM partners."
      }
    ],
    faqTitle: "Gridwatch FAQ",
    faqs: [
      {
        question: "Is Gridwatch hardware or software?",
        answer:
          "Software only. Gridwatch is a third-party audit software product for EV charging networks. It receives data through OCPI and does not require any hardware installation."
      },
      {
        question: "Who uses Gridwatch?",
        answer:
          "CPOs use it to validate their own network's SLA delivery. Vehicle OEMs use it to audit the reliability of third-party CPOs in their charging ecosystem. Fleet operators use it to verify uptime on contracted charging infrastructure."
      },
      {
        question: "How is Gridwatch different from an operator's own CMS dashboard?",
        answer:
          "Gridwatch is independent — it does not rely on operator-reported data. This makes it useful for transparent SLA validation between parties who have different interests in the reported uptime figures."
      }
    ]
  },
  "/for/evse-manufacturers-installers": {
    badge: "For EVSE Manufacturers & Installers",
    title: "Go to Market as a Complete EV Charging Partner",
    description:
      "Massive gives charger manufacturers and installation partners direct access to live EV projects, pan-India EPC execution capability, and a white-label CMS with OCPI, UPI, and WhatsApp — so you can offer clients hardware, installation, and software as a single package.",
    primaryCta: {
      href: "/get-chargers",
      label: "Explore a Partnership"
    },
    secondaryCta: {
      href: "/platform",
      label: "See the CMS Platform"
    },
    cardTitle: "Three partnership offerings",
    cards: [
      {
        title: "Direct access to live EV projects",
        description:
          "Access to active opportunities across enterprise fleets, residential developers, corporate campuses, and public sector deployments. Jointly positioned project submissions combining your hardware with Massive's EPC execution and software — instead of competing as a standalone hardware vendor."
      },
      {
        title: "Pan-India EPC and installation capability",
        description:
          "Site assessment, end-to-end installation, commissioning, and preventive and corrective maintenance programs under a single accountable partner. Pre-integration testing, coordinated firmware updates, and a defined fault escalation matrix with SLA-governed response times."
      },
      {
        title: "White-label CMS with OCPI, UPI, and WhatsApp",
        description:
          "Custom-branded CMS platform (OCPP 1.6J and 2.1) enabling you to launch and manage charging networks under your own identity. Companion apps for EV users, operators, and network owners. OCPI roaming readiness, UPI Direct Charging, and WhatsApp bot integration included."
      }
    ],
    stepsTitle: "How the partnership works",
    steps: [
      {
        title: "1. Define your partnership scope",
        description:
          "Identify which combination applies — project access, EPC support, CMS white-labelling, or all three. Massive aligns to your current go-to-market model."
      },
      {
        title: "2. Position as an integrated solution",
        description:
          "Joint submissions position your hardware alongside Massive's installation and software as a complete charger + EPC + CMS offering — increasing competitiveness in enterprise and government tenders."
      },
      {
        title: "3. Deploy and support together",
        description:
          "Massive handles commissioning, CMS integration, and ongoing maintenance. You retain hardware supply and brand presence while clients receive end-to-end accountability."
      }
    ],
    faqTitle: "EVSE partnership FAQ",
    faqs: [
      {
        question: "Does Massive work with third-party charger hardware?",
        answer:
          "Yes. Massive quality-checks and deploys third-party hardware as well as its own manufactured range. OCPP 1.6J and 2.1 compatible hardware can be integrated into the CMS."
      },
      {
        question: "What types of projects does Massive have in its pipeline?",
        answer:
          "Enterprise fleets, residential developers, commercial campuses, and public sector deployments. Joint participation in project discussions is available to hardware partners."
      },
      {
        question: "Can the CMS be deployed under the hardware partner's brand?",
        answer:
          "Yes. The white-label CMS is deployed under your brand with full control over users, stations, and pricing. Driver and operator apps carry your identity."
      },
      {
        question: "What protocols does the CMS support?",
        answer:
          "The CMS supports OCPP 1.6J and OCPP 2.1 for charger integration, and OCPI for roaming. UPI Direct Charging and WhatsApp bot integration are included as standard."
      }
    ]
  },
  "/for/oems": {
    badge: "For Vehicle OEMs",
    title: "Four-Layer Charging Ecosystem for EV OEMs",
    description:
      "Massive gives vehicle OEMs a structured charging partner across four layers — national infrastructure execution, OEM app integration, multi-CPO roaming access, and independent SLA monitoring through Gridwatch.",
    primaryCta: {
      href: "/get-chargers",
      label: "Start an OEM Conversation"
    },
    secondaryCta: {
      href: "/gridwatch",
      label: "About Gridwatch"
    },
    stats: [
      { label: "Network sessions", value: "3,20,000+", note: "completed on Massive's live network" },
      { label: "SLA-driven uptime", value: "99.95%", note: "structured monitoring and maintenance" },
      { label: "Network growth", value: "20% M-o-M", note: "month-on-month session volume growth" }
    ],
    cardTitle: "The four-layer OEM framework",
    cards: [
      {
        title: "Layer 1 — National infrastructure execution",
        description:
          "Pan-India AC and DC deployment across urban, highway, and semi-urban markets. Covers dealer and service bay setup, home charger pre-delivery installation, fleet depot electrification, and structured AMC with performance tracking. Single accountable partner for deployment, monitoring, and ongoing operations."
      },
      {
        title: "Layer 2 — OEM app and digital enablement",
        description:
          "Direct API integration to embed charging capabilities into your existing mobile app. Real-time availability sync, in-app UPI payment processing without external redirection, and a fully white-labelled charging experience aligned to your brand."
      },
      {
        title: "Layer 3 — Multi-CPO integration layer",
        description:
          "Expand charging footprint through one structured OCPI integration — not multiple parallel builds. Access chargers across different operators through a unified backend. No CMS replacement required. Single roaming interface for cross-network access, authentication, and session visibility."
      },
      {
        title: "Layer 4 — Gridwatch independent SLA monitoring",
        description:
          "Gridwatch is third-party audit software for EV charging networks. It validates CPO uptime claims, detects downtime patterns, benchmarks actual performance against SLA commitments, and generates corridor-level reliability reports — protecting your brand from unreliable third-party network claims."
      },
      {
        title: "Home and dealer charging enablement",
        description:
          "Coordination of site inspection, electrical readiness, and charger installation before vehicle handover. Installation of charging points at dealerships, workshops, and service bays for display vehicles and service operations."
      },
      {
        title: "Charging analytics for product planning",
        description:
          "AC vs DC usage trends, public vs home charging split, charging heatmaps, and model-wise behaviour analysis — data to shape product planning, infrastructure strategy, and battery or range decisions."
      }
    ],
    stepsTitle: "How OEM partnerships work",
    steps: [
      {
        title: "1. Scope infrastructure and app needs",
        description:
          "Define the geographic rollout plan, vehicle segments, and which layers — infrastructure, app integration, roaming, or Gridwatch — are relevant to your OEM programme."
      },
      {
        title: "2. Deploy infrastructure and integrate apps",
        description:
          "Charging infrastructure is deployed in parallel with API integration into the OEM app. Home charger installation, dealer setup, and roaming access go live together."
      },
      {
        title: "3. Monitor SLA with Gridwatch",
        description:
          "Gridwatch provides independent visibility into network uptime and utilisation across all CPOs in your ecosystem — without relying on operator-reported data."
      }
    ],
    faqTitle: "OEM partnership FAQ",
    faqs: [
      {
        question: "Does app integration require replacing the existing OEM app?",
        answer:
          "No. Charging is embedded into your existing mobile application via direct API integration. The charging experience is white-labelled under your brand."
      },
      {
        question: "How does multi-CPO roaming work?",
        answer:
          "One OCPI integration connects your app to multiple CPO networks. Drivers see live availability and charge on any connected network — managed through a single roaming interface."
      },
      {
        question: "What is Gridwatch used for in an OEM context?",
        answer:
          "Gridwatch independently validates the uptime and reliability of CPOs in your charging ecosystem — protecting your brand from claims that rely solely on operator-reported data."
      },
      {
        question: "Can Massive handle dealer network charging rollout?",
        answer:
          "Yes. Dealer and service bay charging setup, home charger pre-delivery installation, and fleet depot electrification are all covered under the national infrastructure layer."
      }
    ]
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
  },
  "/chargers/dc/60-dual-gun": {
    badge: "DC Fast Charger",
    title: "60kW Dual-Gun DC Fast Charger",
    description:
      "A 60 kW dual-gun DC fast charger built for commercial stations, fleet depots, and highway corridors. CCS-2 connectors, 30-minute battery backup, and OCPP 2.0.1 — fully integrated with the Massive operator platform.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/chargers/dc",
      label: "All DC Chargers"
    },
    stats: [
      { label: "Output power", value: "60 kW", note: "split across 2 CCS-2 guns" },
      { label: "Protection rating", value: "IP55", note: "dust-tight, water-jet resistant" },
      { label: "Battery backup", value: "30 minutes", note: "integrated UPS for session continuity" }
    ],
    cardTitle: "Key capabilities",
    cards: [
      {
        title: "Dual CCS-2 guns",
        description:
          "Two simultaneous charging outputs. Each gun delivers up to 200A at 100–1000V DC, allowing two 4W EVs to charge concurrently."
      },
      {
        title: "30-minute battery backup",
        description:
          "Integrated UPS keeps active sessions running through brief power interruptions — preserving revenue and user trust at critical charging points."
      },
      {
        title: "Wide operating range",
        description:
          "Rated for -25°C to +75°C — broader than the standard DC range. Suited for outdoor deployments from hill stations to coastal sites."
      },
      {
        title: "OCPP 1.6J & OCPP 2.0.1",
        description:
          "Connects to any OCPP-compatible CMS. ISO 15118 and DIN SPEC 70121 high-level communication enable Plug & Charge capability."
      },
      {
        title: "UPI Direct Charging",
        description:
          "Supports QR-based UPI payment with no hardware changes or CMS migration required. RFID authentication also supported."
      },
      {
        title: "Forced air cooling",
        description:
          "Active thermal management maintains continuous output across ambient temperatures. Sized for always-on commercial operation."
      }
    ],
    faqTitle: "60kW Charger FAQ",
    faqs: [
      {
        question: "What connector type does the 60kW model use?",
        answer:
          "The 60kW model uses CCS-2 (Combined Charging System, Type 2) connectors — the standard DC fast-charging connector for 4W EVs in India."
      },
      {
        question: "What is the input power requirement?",
        answer:
          "The charger requires a 415V three-phase AC supply. Site electrical infrastructure must be assessed before installation."
      },
      {
        question: "Does this charger support Plug & Charge?",
        answer:
          "Yes. The 60kW model supports ISO 15118 and DIN SPEC 70121 high-level communication, enabling Plug & Charge capability for compatible vehicles."
      },
      {
        question: "What happens during a power cut?",
        answer:
          "The integrated 30-minute battery backup maintains active charging sessions through brief outages, avoiding mid-session disconnects."
      }
    ]
  },
  "/chargers/dc/120-dual-gun": {
    badge: "DC Fast Charger",
    title: "120kW Dual-Gun DC Fast Charger",
    description:
      "A 120 kW dual-gun DC fast charger for high-throughput public stations, fleet depots, and highway corridors. CCS-2 connectors, 250A per gun, and OCPP 2.0.1 — with Plug & Charge readiness via ISO 15118.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/chargers/dc",
      label: "All DC Chargers"
    },
    stats: [
      { label: "Output power", value: "120 kW", note: "split across 2 CCS-2 guns" },
      { label: "Max current", value: "250A per gun", note: "at 350–1000V DC output" },
      { label: "Protection rating", value: "IP54", note: "dust and splash protected" }
    ],
    cardTitle: "Key capabilities",
    cards: [
      {
        title: "Dual CCS-2 guns at 250A",
        description:
          "Two simultaneous outputs at up to 250A per gun across a 350–1000V DC range, supporting fast turnaround for high-traffic locations."
      },
      {
        title: "ISO 15118 Plug & Charge ready",
        description:
          "High-level communication via ISO 15118 and DIN SPEC 70121 enables Plug & Charge for supported vehicles — no RFID or app required."
      },
      {
        title: "OCPP 1.6J & OCPP 2.0.1",
        description:
          "Full CMS interoperability with any OCPP-compatible platform. Integrates with Massive's operator platform for remote management and revenue collection."
      },
      {
        title: "UPI Direct Charging",
        description:
          "QR-based UPI payment and RFID authentication supported — no hardware modification required for UPI activation."
      },
      {
        title: "Forced air cooling",
        description:
          "Active thermal management for continuous operation. Rated for -25°C to +55°C ambient range."
      },
      {
        title: "Gridwatch audit visibility",
        description:
          "Sessions at this charger are independently audited by Gridwatch — uptime, utilisation, and downtime data visible to operators without relying on CMS-reported figures."
      }
    ],
    faqTitle: "120kW Charger FAQ",
    faqs: [
      {
        question: "What is the maximum current output per gun?",
        answer:
          "Each CCS-2 gun delivers up to 250A at 350–1000V DC output range."
      },
      {
        question: "What input supply does this charger require?",
        answer:
          "The 120kW model requires a 350–460V three-phase AC supply. Site electrical assessment is recommended before installation."
      },
      {
        question: "Does it support both RFID and UPI charging?",
        answer:
          "Yes. RFID authentication and QR-based UPI Direct Charging are both supported natively."
      }
    ]
  },
  "/chargers/dc/180-dual-gun": {
    badge: "DC Fast Charger",
    title: "180kW Dual-Gun DC Fast Charger",
    description:
      "A 180 kW dual-gun DC fast charger for high-throughput public corridors and large fleet operations. CCS-2 connectors, OCPP 2.0.1, ISO 15118 Plug & Charge ready — designed for operators who need serious throughput.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/chargers/dc",
      label: "All DC Chargers"
    },
    stats: [
      { label: "Output power", value: "180 kW", note: "split across 2 CCS-2 guns" },
      { label: "Max current", value: "150A per gun", note: "at 350–1000V DC output" },
      { label: "Operating range", value: "-25°C to +55°C", note: "outdoor and indoor rated" }
    ],
    cardTitle: "Key capabilities",
    cards: [
      {
        title: "180kW total output",
        description:
          "180 kW split across two CCS-2 guns at 150A per gun. Suited for operators where speed and throughput drive return on investment."
      },
      {
        title: "ISO 15118 Plug & Charge ready",
        description:
          "ISO 15118 and DIN SPEC 70121 high-level communication enable Plug & Charge. Session starts automatically when a compatible vehicle connects."
      },
      {
        title: "OCPP 1.6J & OCPP 2.0.1",
        description:
          "Connects to any OCPP-compatible CMS. Full integration with Massive's operator platform for real-time session data, tariff control, and OCPI roaming."
      },
      {
        title: "UPI Direct Charging",
        description:
          "QR-based UPI payment supported at the charger. No hardware changes or CMS migration required to activate."
      },
      {
        title: "IP54 enclosure",
        description:
          "Dust-tight and splash-protected enclosure. Suitable for covered outdoor installations and indoor fleet depots."
      },
      {
        title: "Forced air cooling",
        description:
          "Active thermal management for continuous high-power output. Supports -25°C to +55°C ambient range."
      }
    ],
    faqTitle: "180kW Charger FAQ",
    faqs: [
      {
        question: "What is the difference between the 180kW and 240kW models?",
        answer:
          "Both models share the same enclosure dimensions (1850×1064×790mm), connector type (CCS-2), and current output (150A/gun). The 240kW model delivers higher total power for faster simultaneous charging."
      },
      {
        question: "What input supply does the 180kW charger require?",
        answer:
          "350–460V three-phase AC supply. Site electrical infrastructure must be confirmed before installation."
      },
      {
        question: "Does this charger support OCPI roaming?",
        answer:
          "Yes. When integrated with the Massive CMS, OCPI 2.2.1 roaming allows drivers from partner networks to authenticate and pay — without requiring a separate account."
      }
    ]
  },
  "/chargers/dc/240-dual-gun": {
    badge: "DC Fast Charger",
    title: "240kW Dual-Gun DC Fast Charger",
    description:
      "Massive's highest-power dual-gun DC fast charger. 240 kW total output with CCS-2 connectors, ISO 15118 Plug & Charge, OCPP 2.0.1, and OCPI 2.2.1 roaming — for operators building premium public charging destinations.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/chargers/dc",
      label: "All DC Chargers"
    },
    stats: [
      { label: "Output power", value: "240 kW", note: "split across 2 CCS-2 guns" },
      { label: "Max current", value: "150A per gun", note: "at 350–1000V DC output" },
      { label: "Protocol", value: "OCPP 2.0.1", note: "with ISO 15118 Plug & Charge" }
    ],
    cardTitle: "Key capabilities",
    cards: [
      {
        title: "240kW total output",
        description:
          "The highest-power model in the Massive DC range. 240 kW across two CCS-2 guns enables the shortest charge times for high-dwell-time commercial stations."
      },
      {
        title: "ISO 15118 Plug & Charge ready",
        description:
          "ISO 15118 and DIN SPEC 70121 high-level communication. Compatible vehicles authenticate and start charging automatically — no interaction required."
      },
      {
        title: "OCPI 2.2.1 roaming",
        description:
          "Integrated with Massive's OCPI 2.2.1 roaming layer. Drivers from partner networks can charge and pay without a separate account or app."
      },
      {
        title: "OCPP 1.6J & OCPP 2.0.1",
        description:
          "Full interoperability with any OCPP-compatible CMS. Supports advanced features including smart charging profiles and remote diagnostics."
      },
      {
        title: "UPI Direct Charging",
        description:
          "QR-based UPI payment at the charger face. No hardware changes required — works alongside RFID and app-based authentication."
      },
      {
        title: "Gridwatch audit visibility",
        description:
          "Independent uptime and utilisation data from Gridwatch — not dependent on CMS-reported figures. Used for SLA validation and operator reporting."
      }
    ],
    faqTitle: "240kW Charger FAQ",
    faqs: [
      {
        question: "What is the per-gun current output on the 240kW model?",
        answer:
          "Each CCS-2 gun delivers up to 150A at 350–1000V DC output — the same as the 180kW model, with higher total power across both guns."
      },
      {
        question: "Is this charger suitable for public highway corridors?",
        answer:
          "Yes. The 240kW model is designed for high-throughput public corridors and premium commercial stations where dwell time and session revenue per bay are critical."
      },
      {
        question: "What size enclosure does the 240kW model use?",
        answer:
          "The enclosure measures 1850×1064×790mm and weighs under 350kg. The same form factor as the 180kW model."
      }
    ]
  },
  "/chargers/ac/7-4-kw": {
    badge: "AC EV Charger",
    title: "7.4kW Single-Phase AC Charger",
    description:
      "A 7.4 kW single-phase AC charger for home, residential society, and commercial installations. Type-2 connector, OCPP 1.6J / OCPP 2.0.1, IP65 rated — fully managed via the Massive operator platform.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/chargers/ac",
      label: "All AC Chargers"
    },
    stats: [
      { label: "Output power", value: "7.4 kW", note: "single-phase, 32A" },
      { label: "Protection rating", value: "IP65 / IK10", note: "dust-tight, jet-wash resistant" },
      { label: "Weight", value: "5.5 kg", note: "wall-mount compact form factor" }
    ],
    cardTitle: "Key features",
    cards: [
      {
        title: "Type-2 connector",
        description:
          "Mode 3 Type-2 connector for compatibility with all modern 4W EVs sold in India. Single-phase input at 180–275V, 32A."
      },
      {
        title: "IP65 & IK10 rated",
        description:
          "Fully sealed against dust ingress and water jets. IK10 impact resistance makes it suitable for semi-public and commercial environments."
      },
      {
        title: "OCPP 1.6J & OCPP 2.0.1",
        description:
          "Connects to any OCPP-compatible CMS. Full session management, tariff control, and remote diagnostics via the Massive operator platform."
      },
      {
        title: "Multiple authentication methods",
        description:
          "App-based, QR code, and RFID authentication all supported. UPI Direct Charging enabled for pay-per-session operation."
      },
      {
        title: "Compact form factor",
        description:
          "280×235×100mm enclosure, 5.5kg. Wall-mount installation for home garages, residential parking bays, and commercial car parks."
      },
      {
        title: "Natural air cooling",
        description:
          "Passive thermal management — no moving parts, no noise. Suitable for enclosed parking structures and residential settings."
      }
    ],
    faqTitle: "7.4kW Charger FAQ",
    faqs: [
      {
        question: "What input supply does the 7.4kW charger need?",
        answer:
          "Single-phase supply at 180–275V, 32A. Compatible with standard domestic and commercial single-phase infrastructure."
      },
      {
        question: "How long does it take to charge an EV at 7.4kW?",
        answer:
          "Charge time depends on the vehicle battery capacity. A 30 kWh battery charges from 20% to 80% in approximately 3–4 hours at 7.4kW."
      },
      {
        question: "Is the 7.4kW charger suitable for outdoor installation?",
        answer:
          "Yes. IP65 and IK10 ratings make it suitable for outdoor wall mounting, covered car parks, and open residential bays."
      }
    ]
  },
  "/chargers/ac/22-kw": {
    badge: "AC EV Charger",
    title: "22kW Three-Phase AC Charger",
    description:
      "A 22 kW three-phase AC charger for commercial premises, workplace charging, and high-dwell-time public bays. Type-2 Mode 3, OCPP 1.6J / OCPP 2.0.1, IP65 rated — managed via the Massive operator platform.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/chargers/ac",
      label: "All AC Chargers"
    },
    stats: [
      { label: "Output power", value: "22 kW", note: "three-phase, 32A/phase" },
      { label: "Protection rating", value: "IP65 / IK10", note: "dust-tight, jet-wash resistant" },
      { label: "Weight", value: "5.5 kg", note: "same compact body as 7.4kW model" }
    ],
    cardTitle: "Key features",
    cards: [
      {
        title: "Type-2 Mode 3 connector",
        description:
          "Three-phase Type-2 Mode 3 charging. Input at 350–460V, 32A per phase. Compatible with EVs that accept three-phase AC charging."
      },
      {
        title: "IP65 & IK10 rated",
        description:
          "Sealed against dust and water jets. IK10 impact resistance. Suitable for commercial car parks, workplaces, and covered outdoor bays."
      },
      {
        title: "OCPP 1.6J & OCPP 2.0.1",
        description:
          "Full CMS interoperability. Connects to Massive's operator platform for session management, tariff control, and remote diagnostics."
      },
      {
        title: "Multiple authentication methods",
        description:
          "App, QR code, and RFID authentication supported. UPI Direct Charging enabled for pay-per-session commercial operation."
      },
      {
        title: "Compact shared form factor",
        description:
          "280×235×100mm, 5.5kg — same enclosure dimensions as the 7.4kW model. Simplifies multi-bay installations with consistent mounting."
      },
      {
        title: "Natural air cooling",
        description:
          "Passive cooling — no fan noise, no moving parts. Suitable for office buildings, hotels, and enclosed parking structures."
      }
    ],
    faqTitle: "22kW Charger FAQ",
    faqs: [
      {
        question: "What input supply does the 22kW charger need?",
        answer:
          "Three-phase supply at 350–460V, 32A per phase. Three-phase infrastructure is required at the installation site."
      },
      {
        question: "Which vehicles can use the 22kW three-phase charger?",
        answer:
          "Any EV with an onboard AC charger that accepts three-phase input via Type-2 Mode 3. Not all EVs have three-phase onboard chargers — some will charge at their onboard charger limit rather than the full 22kW."
      },
      {
        question: "Is this charger suitable for workplace and commercial deployment?",
        answer:
          "Yes. The 22kW model is designed for commercial premises, office car parks, hotels, and high-dwell-time public bays where faster AC charging improves bay turnover."
      }
    ]
  },
  "/chargers/type-6-7/3-kw": {
    badge: "Type-6 EV Charger",
    title: "3kW Type-6 Charger for 2W & 3W EVs",
    description:
      "A 3 kW DC charger with a Type-6 connector (IEC 62196-2-6 / IS 17017-2-6) for electric two-wheelers and three-wheelers. CC-CV charging profile, OCPP 1.6J, and LFP battery compatible — deployed across home, fleet, and commercial 2W/3W sites.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/chargers/type-6-7",
      label: "All Type-6/7 Chargers"
    },
    stats: [
      { label: "Output power", value: "3 kW", note: "CC-CV charging, 0–50A" },
      { label: "Output voltage", value: "40–58V DC", note: "matched to 2W/3W battery range" },
      { label: "Operating temp", value: "0°C to +55°C", note: "forced air cooling" }
    ],
    cardTitle: "Key features",
    cards: [
      {
        title: "Type-6 connector (IEC 62196-2-6)",
        description:
          "Conforms to IEC 62196-2-6 and IS 17017-2-6 — the connector standard for Indian electric two-wheelers and three-wheelers. Not compatible with 4W Type-2 infrastructure."
      },
      {
        title: "CC-CV charging profile",
        description:
          "Constant-current / constant-voltage charging profile. Output adjusts automatically between 0–50A as the battery reaches full charge."
      },
      {
        title: "LFP battery compatible",
        description:
          "Output range of 40–58V DC is matched to LFP (lithium iron phosphate) battery packs commonly used in Indian 2W and 3W EVs."
      },
      {
        title: "OCPP 1.6J CMS integration",
        description:
          "Connects to the Massive CMS via OCPP 1.6J. Session management, QR-based authentication, and remote monitoring available from commissioning."
      },
      {
        title: "IS-17017-25 compliant",
        description:
          "Meets IS-17017-25 regulatory requirements applicable to this charger category in the Indian market."
      },
      {
        title: "IP54 enclosure",
        description:
          "Dust and splash protected. Suitable for semi-outdoor installations at fleet depots, roadside bays, and residential properties."
      }
    ],
    faqTitle: "3kW Type-6 Charger FAQ",
    faqs: [
      {
        question: "Is this charger compatible with all Indian 2-wheelers?",
        answer:
          "The Type-6 connector (IEC 62196-2-6) is designed for Indian 2W and 3W EVs. Compatibility with specific vehicle models depends on the vehicle's onboard charging inlet — confirm before ordering."
      },
      {
        question: "What input supply does the 3kW Type-6 charger need?",
        answer:
          "Single-phase 230V AC, with an input range of 165–264V. Compatible with standard domestic supply."
      },
      {
        question: "What is the charging time for a typical 2-wheeler?",
        answer:
          "At 3 kW, a typical 2W EV battery (2–3 kWh) charges from 20% to 80% in approximately 45–90 minutes, depending on the vehicle's battery capacity and state."
      },
      {
        question: "Can this charger be used at a fleet depot for multiple vehicles?",
        answer:
          "Yes. Multiple units can be installed at a fleet depot and managed centrally via OCPP through the Massive CMS."
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
