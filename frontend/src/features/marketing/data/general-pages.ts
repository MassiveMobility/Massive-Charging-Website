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
    badge: "EV Charging Management Platform",
    title: "EV Charging Management Platform for Scalable Charging Networks",
    description:
      "Manage chargers, users, pricing, payments and analytics with Massive Charging's EV charging management platform for commercial networks.",
    primaryCta: {
      href: "/get-chargers",
      label: "Book a Demo"
    },
    secondaryCta: {
      href: "/for/cpos",
      label: "Talk to an EV Charging Expert"
    },
    stats: [
      { label: "Sessions completed", value: "3,20,000+", note: "across live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" },
      { label: "Monthly energy", value: "150+ MWh", note: "growing 20% month-on-month" }
    ],
    cardTitle: "Complete Charger Visibility & Control",
    cards: [
      {
        title: "Monitor Every Charger. Control Every Session.",
        description:
          "Real-time visibility into charger health, availability, sessions and power output. Identify faults faster, initiate or stop sessions remotely, maintain better control over site performance. Less manual intervention, faster issue resolution, stronger network reliability."
      },
      {
        title: "Pricing, Access & Payments—Your Business Model",
        description:
          "Configure per-location tariffs, time-of-use pricing, user-based access rules and payment workflows. Support public charging, fleet charging, captive charging and commercial destination charging without workarounds. Your software adapts to your business model, not the reverse."
      },
      {
        title: "Data That Drives Decisions",
        description:
          "Track utilization, performance trends, usage patterns and revenue by location and tariff. Understand which chargers work, which locations underperform, where to expand next. Make deployment decisions backed by real operating data instead of guesses."
      },
      {
        title: "Built for Growth",
        description:
          "Manage hundreds of chargers from one dashboard without architectural compromises. Add locations, add chargers, add users without system rebuilds. Scale from pilot deployments to multi-city networks without changing the core platform."
      },
      {
        title: "OCPP Integration & Interoperability",
        description:
          "OCPP 1.6J and OCPP 2.0.1 support means compatibility with 90%+ of commercial chargers. Connect hardware from multiple manufacturers into one management layer without lock-in or vendor dependency."
      },
      {
        title: "UPI Direct Charging",
        description:
          "App-free, instant digital transactions via QR codes. No hardware changes, firmware upgrades, or CMS migration needed on existing chargers. Integration with Paytm EV Charging opens access to 30cr+ users."
      },
      {
        title: "OCPI 2.2.1 Roaming & Partnerships",
        description:
          "Enable partner network roaming with automatic authentication and tariff application. Support fleet platforms, charging aggregators and partner CPOs without CMS replacement. Expand your network reach without operational silos."
      },
      {
        title: "Gridwatch—Independent Network Audit",
        description:
          "Third-party monitoring validates utilization, uptime and downtime independently. Transparent SLA validation and corridor-level reliability reports build investor confidence and identify optimization opportunities."
      }
    ],
    stepsTitle: "How It Works",
    steps: [
      {
        title: "1. Connect Your Chargers",
        description:
          "Integrate via OCPP 1.6J or OCPP 2.0.1. Register stations, map locations, configure tariffs. Connect via WiFi, GSM, or Ethernet. Compatible with 90%+ of commercial chargers."
      },
      {
        title: "2. Configure Operations & Payments",
        description:
          "Set pricing policies, user access rules and payment workflows. Enable UPI Direct, configure settlement cycles, set up branded apps. Test end-to-end flows before launch."
      },
      {
        title: "3. Monitor, Optimize & Scale",
        description:
          "Track live sessions, adjust tariffs in real-time, receive fault alerts. Use data to identify optimization opportunities and expansion decisions. Scale to new locations with standardized processes."
      }
    ],
    faqTitle: "Platform FAQ",
    faqs: [
      {
        question: "What is an EV charging management platform?",
        answer:
          "It's the software layer that controls complete charging operations—from monitoring charger health and managing sessions, to configuring pricing, processing payments, managing user access and analyzing performance. It's the backbone that turns hardware into a managed business."
      },
      {
        question: "How is this different from a charger app?",
        answer:
          "A charger app is what users see. The management platform is what operators need—the backend system that controls operations, business logic, user access, charger status, pricing rules, payments, reporting and network visibility."
      },
      {
        question: "Who should use this platform?",
        answer:
          "Charge point operators building public networks, fleet operators managing captive charging, property owners deploying chargers across commercial assets, and any business operating EV charging at commercial scale who needs centralized control and visibility."
      },
      {
        question: "Can it handle multi-site operations?",
        answer:
          "Yes, completely. The platform is built to manage chargers and operations across multiple locations while giving operators centralized visibility, unified reporting and consistent control—whether you have 3 sites or 30."
      },
      {
        question: "Does it help with pricing and payments?",
        answer:
          "Yes. Managing chargers is only half the job. The platform gives you commercial controls for tariffs, pricing policies, payment workflows, user access and subscription models so you can run charging as a viable, profitable business."
      },
      {
        question: "Can I integrate with existing systems?",
        answer:
          "Yes. The platform supports OCPP for charger integration and OCPI for roaming network partnerships, making it interoperable with existing infrastructure and partner networks without CMS replacement."
      },
      {
        question: "Is the platform scalable?",
        answer:
          "Yes. Designed to scale from pilot deployments to large multi-city networks without needing system rebuilds or migrations. As you add more chargers, locations and complexity, the platform maintains performance and visibility."
      },
      {
        question: "Can I customize pricing and tariffs?",
        answer:
          "Completely. Set per-station, per-charger, or network-wide tariffs. Support time-of-day pricing, vehicle-segment pricing, promotional windows, subscription models and user-based access rules."
      }
    ]
  },
  "/for/cpos": {
    badge: "EV Charging Management System for CPOs",
    title: "EV Charging Management System Built for Charge Point Operators",
    description:
      "Run, monitor and scale your EV charging network with a powerful EV charging management system for charge point operators.",
    primaryCta: {
      href: "/get-chargers",
      label: "Book a Demo"
    },
    secondaryCta: {
      href: "/platform",
      label: "Explore Platform Features"
    },
    stats: [
      { label: "Network sessions", value: "3,20,000+", note: "completed on Massive's live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" },
      { label: "Paytm reach", value: "30cr+ users", note: "via OCPI integration with Paytm EV Charging" }
    ],
    cardTitle: "Four Core Capabilities Every Charging Network Requires",
    cards: [
      {
        title: "Real-Time Charger Visibility",
        description:
          "Know what's happening on your network at any moment. Monitor charger health, session activity, energy output and fault events in real-time. Uptime is revenue. When a charger goes down, you need to know before your users do."
      },
      {
        title: "Flexible Tariff & Pricing Control",
        description:
          "Every deployment demands different commercial logic. Public charging has different pricing than destination charging. Partner networks need different access controls than private fleets. Configure tariffs, define who pays what, and support the commercial structure behind each deployment without workarounds."
      },
      {
        title: "Session & User Management",
        description:
          "Control who uses which charger, when they can charge, and how much they pay. Support roaming networks, fleet management, subscriber models or public-access charging—all from one operational interface."
      },
      {
        title: "Network Intelligence & Reporting",
        description:
          "Performance data is only valuable if you can act on it. Track utilization, identify underperforming sites, understand charging behavior and plan expansion with clarity. Better data drives better network decisions."
      },
      {
        title: "Built on OCPP—For Network Freedom",
        description:
          "Interoperability matters. A lot. If your CPO platform is tied to one charger manufacturer, you lose flexibility. Massive Charging is built to support OCPP-based operations, meaning you can integrate chargers from multiple manufacturers, scale without lock-in, and maintain consistency across mixed deployments."
      },
      {
        title: "Remote Monitoring & Uptime Management",
        description:
          "Charger downtime isn't just an operational problem—it's a revenue problem. Get real-time charger health tracking, remote operational control, fault detection and alerting, plus historical performance data to understand reliability trends and plan preventative maintenance."
      },
      {
        title: "Tariff, Pricing & Access Management",
        description:
          "Your software should match how you make money. Define per-location pricing, set time-of-use tariffs, control access by user type, membership or subscription, and support roaming partner networks. Whether your network is open, restricted, partner-led or multi-site, you have the commercial controls to align operations with revenue."
      },
      {
        title: "Designed to Scale with Your Growth",
        description:
          "A charging platform that works for 5 chargers might buckle at 50. Massive Charging is designed for CPO growth—centralized management of hundreds of chargers, consistent oversight, flexible infrastructure, and performance stability as complexity increases without losing visibility or control."
      }
    ],
    stepsTitle: "How It Works",
    steps: [
      {
        title: "1. Share Your Network Plan",
        description:
          "Tell us about your locations, network size, commercial model, and growth timeline. We assess feasibility, opportunity, and the right operational approach for your deployment."
      },
      {
        title: "2. Get Visibility and Control",
        description:
          "Connect your chargers (or deploy new ones) into one unified operating layer. Access real-time monitoring, tariff management, user control, and payment flows from a single platform."
      },
      {
        title: "3. Scale with Confidence",
        description:
          "As your network grows, the platform scales with you. Maintain operational clarity, manage complex pricing scenarios, and make better decisions about optimization and expansion based on network data."
      }
    ],
    faqTitle: "CPO Platform FAQ",
    faqs: [
      {
        question: "What is a charge point operator platform?",
        answer:
          "A charge point operator platform is the software used to manage EV charging stations, monitor uptime, control sessions, configure tariffs, handle users and analyse network performance. It's the operational backbone for running charging infrastructure."
      },
      {
        question: "What's the difference between EV charging CMS and CPO software?",
        answer:
          "They're closely related. EV charging CMS typically refers to the management software itself, while CPO software emphasizes the operator-facing business layer—the controls CPOs need to run operations, manage revenue, scale networks and make strategic decisions."
      },
      {
        question: "Why is OCPP important for charge point operators?",
        answer:
          "OCPP creates interoperability between chargers and management platforms. This gives CPOs the freedom to integrate chargers from different manufacturers, scale without being locked into one hardware supplier, and maintain consistency across mixed deployments."
      },
      {
        question: "Who needs dedicated CPO software?",
        answer:
          "Any organization operating public, semi-public, partner-led or private charging networks benefits from dedicated software—especially when managing multiple chargers or expanding across locations. Manual processes and fragmented tools become untenable at scale."
      },
      {
        question: "Can this platform grow with my network?",
        answer:
          "Yes. Massive Charging is designed for networks that grow from a few chargers to hundreds. The platform maintains operational clarity, control and performance as complexity increases—it scales with you, not against you."
      },
      {
        question: "Does it support different charging business models?",
        answer:
          "Yes. The platform supports public charging, destination charging, partner networks, fleet management, subscription models and private deployments. Configure tariffs, access controls and pricing to match your specific business model."
      },
      {
        question: "How long does implementation take?",
        answer:
          "For existing networks, CMS activation typically takes 2–4 weeks. For new deployments, expect 3–6 months for site assessment, permitting, installation, and commissioning (varies by location and infrastructure readiness)."
      },
      {
        question: "What about chargers from different manufacturers?",
        answer:
          "Our OCPP support means you can integrate chargers from multiple manufacturers into one management layer. You're never locked into a single hardware vendor, giving you negotiating power and deployment flexibility."
      }
    ]
  },
  "/chargers/dc": {
    badge: "DC Fast Chargers",
    title: "DC Fast Chargers for Commercial EV Charging | Massive Charging",
    description:
      "Deploy reliable DC fast chargers for fleets, highways and commercial locations with integrated software and deployment support.",
    primaryCta: {
      href: "/get-chargers",
      label: "Request a Quote"
    },
    secondaryCta: {
      href: "/for/cpos",
      label: "Talk to a Deployment Specialist"
    },
    cardTitle: "Building reliable DC charging",
    cards: [
      {
        title: "Why DC fast chargers matter for commercial charging",
        description:
          "When charging demand is high, speed matters. DC fast chargers are ideal for locations where vehicle turnaround, driver convenience and operational efficiency are critical. For fleets, that means reducing charging downtime and improving vehicle readiness. For highways and transit corridors, it means enabling faster top-ups for drivers on the move. For commercial sites, it means offering a stronger charging experience where speed directly affects usability and throughput."
      },
      {
        title: "DC chargers for fleets, highways and commercial sites",
        description:
          "Massive Charging supports DC charger deployments across a wide range of commercial use cases. For fleet operators, DC fast charging helps maintain vehicle availability and improve charging efficiency across working vehicles. For highway and intercity locations, it supports fast charging demand from long-distance EV traffic. For commercial sites such as business parks, retail destinations, fuel-adjacent sites and hospitality properties, DC chargers create a stronger infrastructure offering and a more practical charging experience for users who need faster sessions."
      },
      {
        title: "More than hardware: a complete commercial charging solution",
        description:
          "A DC charger should not be evaluated only by power output. Commercial success depends on the full deployment environment around the charger. Massive Charging combines charger deployment support with software integration, charger monitoring and operational visibility. This helps businesses manage not just installation, but also how the charger performs once it is live. From charger oversight to charging operations, the solution is designed to support uptime, usability and long-term growth."
      },
      {
        title: "Built for uptime and operational confidence",
        description:
          "In commercial charging, charger reliability is not optional. Downtime affects utilisation, revenue and customer trust. Massive Charging helps businesses deploy DC charging infrastructure with the operational layer needed to support monitoring, issue visibility and more consistent performance. For operators and site owners, that means better confidence in day-to-day charger availability and stronger control over live charging assets."
      },
      {
        title: "Software-integrated DC charging",
        description:
          "Hardware works best when it is connected to a software layer that gives operators visibility and control. Our DC charger deployments can be aligned with the Massive Charging platform so businesses can manage charger status, monitor usage, control sessions and support commercial charging operations through one connected environment. This makes DC charging more manageable for businesses that want both physical infrastructure and operational control."
      },
      {
        title: "Choosing the right DC charging setup",
        description:
          "The right DC charger depends on your deployment model, expected usage and commercial objectives. A fleet depot has different charging requirements from a highway corridor. A destination site has different user behaviour from a public fast charging point. Massive Charging helps businesses evaluate the right deployment approach based on operational needs, charging demand and long-term commercial goals."
      },
      {
        title: "Why businesses choose Massive Charging for DC fast charging",
        description:
          "Massive Charging combines charger deployment understanding with platform capability. That means businesses can evaluate DC chargers not as isolated hardware purchases, but as part of a larger charging operation. Our approach is suited to organisations that want reliable charging infrastructure, stronger visibility after deployment and a more scalable foundation for future expansion."
      }
    ],
    faqTitle: "DC Fast Charger FAQ",
    faqs: [
      {
        question: "What is a DC fast charger?",
        answer:
          "A DC fast charger delivers high-speed charging by supplying direct current to the vehicle battery, making it suitable for applications where faster charging is important."
      },
      {
        question: "Who should install a commercial DC charger?",
        answer:
          "DC chargers are well suited for fleets, highway locations, public charging networks, fuel-adjacent sites and commercial properties where faster charging improves throughput and user convenience."
      },
      {
        question: "Are DC chargers suitable for fleet depots?",
        answer:
          "Yes. DC charging can be a strong fit for fleets that need quicker turnaround and better vehicle readiness, especially in operational environments with high utilisation."
      },
      {
        question: "Can DC chargers be integrated with charging management software?",
        answer:
          "Yes. DC chargers become more effective in commercial environments when integrated with a platform that supports monitoring, control and network operations."
      },
      {
        question: "How do I choose the right DC charger for my site?",
        answer:
          "The right option depends on vehicle mix, charging demand, dwell time, site power availability and the commercial model of the location. Massive Charging can help assess the best-fit deployment approach."
      },
      {
        question: "What are the key benefits of DC fast charging?",
        answer:
          "DC fast charging reduces charging times significantly compared to AC charging, improving vehicle turnaround and utilisation. This is especially valuable for commercial locations, fleets and highway corridors where charging speed directly impacts operational efficiency."
      },
      {
        question: "Can I manage multiple DC chargers from a single dashboard?",
        answer:
          "Yes. The Massive Charging platform provides unified visibility across all your DC chargers with real-time status, session monitoring, utilisation analytics and remote control capabilities."
      },
      {
        question: "What deployment support is included?",
        answer:
          "Massive Charging provides site assessment, electrical feasibility analysis, deployment planning, installation coordination, software integration and commissioning support. Get guidance on DC charger selection, deployment planning and software-backed operations."
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
    badge: "EVSE Partnership for Manufacturers & Installers",
    title: "EVSE Partnership for Manufacturers & Installers | Massive Charging",
    description:
      "Access EV charging projects, pan-India EPC execution, and white-label EV CMS through one EVSE partnership with Massive Charging.",
    primaryCta: {
      href: "/get-chargers",
      label: "Partner with Massive Charging"
    },
    secondaryCta: {
      href: "/platform",
      label: "Discuss a Joint Go-to-Market Model"
    },
    stats: [
      { label: "Live stations", value: "50+", note: "across India's major corridors" },
      { label: "Monthly energy", value: "150+ MWh", note: "dispensed through network" },
      { label: "Uptime guarantee", value: "99.95%", note: "SLA-backed operations" }
    ],
    cardTitle: "Turn charger supply into complete deployment value",
    cards: [
      {
        title: "Access live EV charging opportunities without building the full pipeline alone",
        description:
          "One of the biggest barriers for EVSE manufacturers and installers is access to serious, live deployment opportunities. Massive Charging's partner deck explicitly highlights participation in enterprise, fleet, real estate, and government projects, along with access to Massive Charging's demand pipeline and ongoing project discussions. Instead of approaching the market as a standalone charger vendor, you can position your business as part of an integrated EV charging solution that includes hardware, EPC execution, and software."
      },
      {
        title: "Pan-India execution that supports your hardware in the field",
        description:
          "Winning a project is one thing. Delivering it consistently is another. Massive Charging's offering includes site assessment, end-to-end installation, preventive and corrective maintenance, national-scale AC and DC deployment, technical support, and CMS integration under one accountable execution model. That matters because infrastructure performance is judged in the field, not in a catalogue. A reliable execution partner helps protect brand reputation, speed up commissioning, and reduce post-installation friction."
      },
      {
        title: "Add software value, not just hardware value",
        description:
          "The strongest commercial differentiation comes from software. Massive Charging's white-label EV CMS can be positioned as a branded digital network layer for partners that want to launch and manage charging operations under their own identity. That gives EVSE manufacturers and installers a clearer path to recurring value. Instead of stopping at hardware sales and installation revenue, they can participate in the software, network, and user experience layer that drives charging utilisation and long-term stickiness."
      },
      {
        title: "Support partners across hardware categories and deployment types",
        description:
          "Massive Charging's charger ecosystem approach is relevant across multiple hardware categories. Support for AC chargers, Type-6/7 chargers for 2W and 3W ecosystems, and DC fast chargers for higher-power use cases. Third-party hardware can be quality-checked and deployed where needed. That makes the partnership useful not only for charger manufacturers with a fixed portfolio, but also for installers and ecosystem partners who need flexibility across customer segments, site conditions, and vehicle categories."
      },
      {
        title: "Why manufacturers and installers work with Massive Charging",
        description:
          "Massive Charging gives EVSE partners a more expandable commercial model. You bring hardware and technical depth. Massive brings live market access, execution capability, a managed CMS layer, and an operating ecosystem that already serves 2W, 3W, and 4W charging with live infrastructure and structured monitoring. That proof makes the partnership proposition more credible because it is not theory—it is built on live operational experience."
      }
    ],
    stepsTitle: "How It Works",
    steps: [
      {
        title: "Discuss partnership scope and opportunities",
        description:
          "Define which combination applies—project access, EPC support, CMS white-labelling, or all three. Massive aligns to your current go-to-market model and identifies joint opportunities."
      },
      {
        title: "Position as an integrated solution",
        description:
          "Joint project submissions position your hardware alongside Massive's installation and software as a complete charger + EPC + CMS offering, increasing competitiveness in enterprise and government tenders."
      },
      {
        title: "Deploy and operate together",
        description:
          "Massive handles commissioning, CMS integration, and ongoing maintenance. You retain hardware supply and brand presence while clients receive end-to-end accountability."
      }
    ],
    faqTitle: "EVSE Partnership FAQ",
    faqs: [
      {
        question: "Who is this page for?",
        answer:
          "This page is for EVSE manufacturers, charger installers, system integrators, and ecosystem partners that want access to projects, execution capability, and a white-label software layer."
      },
      {
        question: "Can Massive Charging help us access active projects?",
        answer:
          "Yes. Massive Charging specifically highlights access to live EV charging infrastructure projects and Massive Charging's demand pipeline across enterprise, fleet, real estate, and government opportunities."
      },
      {
        question: "Do you provide only installation support or full project execution?",
        answer:
          "Massive Charging's proposition covers site assessment, installation, commissioning, maintenance, technical support, CMS integration, and SLA-backed operations."
      },
      {
        question: "Can we launch charging software under our own brand?",
        answer:
          "Yes. The white-label EV CMS is positioned as a custom-branded platform that enables operators and OEMs to launch and manage charging networks under their own identity."
      },
      {
        question: "Do you support OCPP and roaming integration?",
        answer:
          "Yes. The CMS references OCPP 1.6J and 2.1 support and a roaming-ready OCPI architecture for broader cross-network access."
      }
    ]
  },
  "/for/oems": {
    badge: "EV Charging Ecosystem Partner for OEMs",
    title: "EV Charging Ecosystem Partner for OEMs | Massive Charging",
    description:
      "Support vehicle sales with charging infrastructure, OEM app integration, multi-CPO access, and analytics from Massive Charging.",
    primaryCta: {
      href: "/get-chargers",
      label: "Talk to the OEM Solutions Team"
    },
    secondaryCta: {
      href: "/platform",
      label: "Explore an OEM Charging Integration"
    },
    stats: [
      { label: "Live stations", value: "50+", note: "across India's corridors" },
      { label: "Monthly growth", value: "20% M-o-M", note: "session volume growth" },
      { label: "Average uptime", value: "99.95%", note: "SLA-driven operations" }
    ],
    cardTitle: "Support vehicle sales with a charging ecosystem your customers can actually use",
    cards: [
      {
        title: "Layer 1: National charging infrastructure execution",
        description:
          "OEMs need charging readiness wherever vehicles are sold, delivered, serviced, and operated. Massive Charging's first layer focuses on pan-India AC and DC deployment, urban and highway corridor coverage, dealer and fleet electrification, SLA-driven uptime, and one accountable partner for deployment and operations. This includes home charger pre-delivery installation, dealer and service-bay charging setup, fleet depot electrification, and annual maintenance management."
      },
      {
        title: "Layer 2: Charging inside the OEM app, not outside it",
        description:
          "A modern EV customer expects charging to feel like part of the ownership experience, not a disconnected third-party step. Massive Charging's OEM app charging integration layer includes API integration into the OEM app, real-time availability sync, payment integration including UPI, and a white-labelled charging experience aligned to the OEM's own interface and brand. Massive should not be framed as just another backend provider, but as the ecosystem layer that helps OEMs own the charging journey in their own digital environment."
      },
      {
        title: "Layer 3: Multi-CPO integration without forcing a CMS rebuild",
        description:
          "No OEM wants to build a full charging network from scratch before it can offer meaningful customer access. Massive Charging addresses that through a multi-CPO aggregation layer built on OCPI roaming enablement. Integration across multiple CPOs through one backend connection, no need to replace existing CMS infrastructure, and faster rollout compared with building a proprietary network. A single roaming interface for authentication, session visibility, and cross-network access."
      },
      {
        title: "Layer 4: Independent SLA monitoring and charging analytics",
        description:
          "Charging access is important, but charging quality matters just as much. Massive Charging extends the proposition beyond connectivity through an independent monitoring and analytics layer. Gridwatch as a third-party audit software for EV charging networks provides independent visibility into utilisation, uptime, and downtime without relying only on operator-reported data. Validation of CPO uptime claims, downtime detection, SLA benchmarking, corridor-level reliability reporting, and customer experience protection."
      },
      {
        title: "Built for the realities of vehicle growth in India",
        description:
          "As EV sales grow, OEM charging needs become more complex. Customers need confidence before delivery. Dealers need functional charging for display and service. Fleets need depot infrastructure. Drivers need discoverable public charging. Massive Charging's four-layer framework is built to answer those realities through one coordinated partner rather than a patchwork of vendors, operators, and software stacks."
      },
      {
        title: "Why OEMs choose Massive Charging",
        description:
          "OEMs do not need another fragmented charging relationship. They need a partner that can connect infrastructure, digital experience, network access, and performance visibility in a way that supports vehicle adoption and protects brand trust. Massive Charging positions itself exactly in that role: a structured ecosystem partner with live operations, multi-layer charging capability, partner integrations, and a clear path from infrastructure readiness to charging intelligence."
      }
    ],
    stepsTitle: "How It Works",
    steps: [
      {
        title: "Define charging ecosystem needs and layers",
        description:
          "Identify your geographic rollout plan, vehicle segments, and which layers—infrastructure, app integration, roaming, or analytics—are relevant to your OEM programme."
      },
      {
        title: "Deploy infrastructure and integrate apps",
        description:
          "Charging infrastructure is deployed in parallel with API integration into the OEM app. Home charger installation, dealer setup, multi-CPO access, and Gridwatch monitoring go live together."
      },
      {
        title: "Monitor quality and scale with insights",
        description:
          "Gridwatch provides independent visibility into network quality and utilisation across all CPOs in your ecosystem. Use charging analytics to understand usage patterns and inform product planning."
      }
    ],
    faqTitle: "OEM Charging Partner FAQ",
    faqs: [
      {
        question: "What does Massive Charging offer vehicle OEMs?",
        answer:
          "Massive Charging offers infrastructure deployment, home and dealer charging enablement, OEM app integration, multi-CPO access, and independent charging analytics."
      },
      {
        question: "Can charging be embedded inside the OEM's own app?",
        answer:
          "Yes. The OEM deck specifically describes API integration, real-time availability sync, in-app payment including UPI, and a white-labelled charging experience aligned to the OEM's app."
      },
      {
        question: "Do OEMs need to build their own charging network first?",
        answer:
          "No. Massive Charging's multi-CPO aggregation layer is designed to provide access across multiple operators without requiring an OEM to replace existing systems or build a proprietary network from day one."
      },
      {
        question: "Can Massive support home charger installation before vehicle delivery?",
        answer:
          "Yes. The infrastructure layer includes home charger pre-delivery installation along with dealer, service-bay, and fleet depot charging enablement."
      },
      {
        question: "Can Massive help validate network quality and uptime?",
        answer:
          "Yes. The Gridwatch layer is positioned for independent SLA monitoring, downtime analysis, reliability reporting, and charging analytics to protect customer experience and brand trust."
      }
    ]
  },
  "/for/fleet-operators": {
    badge: "EV Charging Solutions for Fleet Operators",
    title: "EV Charging Solutions for Fleet Operators | Massive Charging",
    description:
      "Build reliable fleet charging with captive infrastructure, roaming access, UPI payments, and fleet wallet controls from Massive Charging.",
    primaryCta: {
      href: "/get-chargers",
      label: "Talk to a Fleet Charging Expert"
    },
    secondaryCta: {
      href: "/platform",
      label: "Plan Your Fleet Charging Setup"
    },
    stats: [
      { label: "Active stations", value: "50+", note: "across India's fleet corridors" },
      { label: "Monthly sessions", value: "3,20,000+", note: "completed on Massive's live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" }
    ],
    cardTitle: "Fleet charging without the complexity",
    cards: [
      {
        title: "Captive charging infrastructure that works like fleet infrastructure should",
        description:
          "Fleet charging cannot be treated like generic public charging rollout. Your vehicles have route commitments, charging windows, utilisation targets, and operational dependencies. Massive Charging positions itself as a captive charging infrastructure partner rather than just a charger vendor. The offering includes site assessment, end-to-end installation, preventive and corrective maintenance, national-scale AC and DC deployment capability, and a single accountable partner for commissioning, CMS integration, maintenance, and support."
      },
      {
        title: "Build the right charging mix for your fleet",
        description:
          "Every fleet has a different charging profile. Some require overnight AC charging at depots. Others need fast top-ups during operational shifts. Some mixed fleets need both. Massive Charging supports AC chargers from 3.3 kW to 22 kW, Type-6/7 chargers for new-age EV 2-wheelers and 3-wheelers, and DC chargers from 30 kW to 180 kW. That flexibility allows fleet operators to plan infrastructure around dwell time, vehicle type, turnaround expectations, and site constraints."
      },
      {
        title: "Give your fleet access from day one, not after a long rollout cycle",
        description:
          "Electrification delays often come from limited charging access in early stages. Massive Charging addresses that by combining captive deployment with immediate access to live operational and partner networks. For a fleet operator, vehicles do not have to wait for every depot or route node to be fully built before they can begin charging reliably. You can start with structured access and expand into deeper infrastructure over time."
      },
      {
        title: "Remove friction for drivers and fleet teams",
        description:
          "A fleet charging experience should be easy to use in the field. Massive Charging supports QR-based or deep-link-enabled charging through UPI, removing mandatory app downloads for basic charging access. It also supports charger discovery and session initiation through a WhatsApp interface, lowering the learning curve for new drivers and simplifying first-time charging."
      },
      {
        title: "Get fleet-level visibility, controls, and billing discipline",
        description:
          "Infrastructure without control creates leakage. Massive Charging's fleet management and corporate wallet capabilities help enterprise operators maintain charging discipline across vehicles, drivers, sites, and budgets. Centralized dashboard for vehicle-wise charging activity, energy consumption, and cost allocation, along with vehicle- and driver-level controls, dedicated corporate wallets with configurable spend limits, GST-compliant invoicing, and usage analytics for utilisation and charging efficiency."
      },
      {
        title: "Why fleet operators choose Massive Charging",
        description:
          "Fleet operators need charging partners who understand throughput, uptime, cost control, and rollout discipline. Massive Charging combines infrastructure execution, software integration, network access, and billing visibility in one operating model. Instead of piecing together hardware vendors, EPC teams, software providers, roaming integrations, and finance workflows, fleet operators work with one partner that aligns charging to operations."
      }
    ],
    stepsTitle: "How It Works",
    steps: [
      {
        title: "Share your fleet charging plan",
        description:
          "Tell us about your vehicle fleet, locations, charging windows, utilisation targets, and growth plans. We assess feasibility and design the right infrastructure and access strategy for your deployment."
      },
      {
        title: "Get visibility and control",
        description:
          "Connect your infrastructure into a unified operating layer. Access real-time monitoring, fleet controls, driver management, corporate wallets, and payment flows from a single platform."
      },
      {
        title: "Scale with confidence",
        description:
          "As your fleet grows, the charging infrastructure and software scale with you. Maintain operational clarity, control costs, and make better decisions about optimization and expansion based on charging data."
      }
    ],
    faqTitle: "Fleet Charging FAQ",
    faqs: [
      {
        question: "What does Massive Charging offer fleet operators?",
        answer:
          "Massive Charging offers captive charging infrastructure deployment, multi-network charging access, UPI and WhatsApp-based charging journeys, and fleet management controls such as dashboards, wallets, driver permissions, and reporting."
      },
      {
        question: "Can Massive Charging support depot charging as well as on-road charging access?",
        answer:
          "Yes. The fleet proposition combines captive charging infrastructure with access to Massive Charging's live network and partner networks, so fleets can build depot charging while also enabling network-based charging access from day one."
      },
      {
        question: "Do drivers need to download an app to start charging?",
        answer:
          "Not always. Massive Charging supports UPI-based charging flows and WhatsApp-led charging access designed to reduce friction and simplify session initiation."
      },
      {
        question: "Can charging be controlled at vehicle or driver level?",
        answer:
          "Yes. The fleet management layer supports tag-based access and session authorization using vehicle ID, RFID, or registered driver credentials."
      },
      {
        question: "Does Massive Charging support enterprise billing and wallet controls?",
        answer:
          "Yes. Corporate wallets, spend controls, GST-compliant invoicing, and usage analytics are part of the fleet offering."
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
  },
  "/home-charging": {
    badge: "Home EV Charging Solutions",
    title: "Home EV Charging Solutions | Massive Charging",
    description:
      "Install a safe, reliable home EV charger with Massive Charging. Get site assessment, electrical readiness, installation, and ongoing support.",
    primaryCta: {
      href: "/get-chargers",
      label: "Book a Home Charging Consultation"
    },
    secondaryCta: {
      href: "/get-chargers",
      label: "Request Installation Support"
    },
    stats: [
      { label: "Live stations", value: "50+", note: "across residential and commercial locations" },
      { label: "Monthly sessions", value: "3,20,000+", note: "completed on Massive's live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" }
    ],
    cardTitle: "Safe, reliable, ready home charging",
    cards: [
      {
        title: "Home charging should feel effortless, not uncertain",
        description:
          "For most EV owners, home is the most important charging location. It is where convenience matters most, and where the charging experience needs to be dependable every single day. Massive Charging's home charging proposition is presented as an end-to-end enablement service, including coordination of site inspection, electrical readiness, and charger installation before vehicle handover, coupled with structured annual maintenance support and uptime management."
      },
      {
        title: "Safe charging starts with the right installation",
        description:
          "A home charger should inspire confidence, not workarounds. Normal sockets and improvised charging arrangements are not built for sustained EV load. Continuous 10–15A draw on a normal socket can cause overheating risk, insulation damage, short-circuit risk, and possible fire. Proper home charging requires industrial-grade charging equipment supported by RCCB, MCB, proper earthing, and professionally managed installation."
      },
      {
        title: "Choose the right charger for your home and vehicle",
        description:
          "Massive Charging's AC chargers are available in 3.3 kW, 7.4 kW, 11 kW, 15 kW, and 22 kW variants, and are designed for residential and workplace environments. The right charger is chosen based on vehicle type, charging pattern, available electrical load, and installation conditions at the property. A home charging setup that is sized correctly, installed correctly, and easier to depend on every day."
      },
      {
        title: "Home charger installation before delivery makes ownership easier",
        description:
          "Home charger pre-delivery installation is explicitly described as coordination of site inspection, electrical readiness, and charger installation before the vehicle reaches the customer. New EV owners do not want to receive the vehicle first and then spend days figuring out charging. They want the home setup to be ready when the vehicle arrives. Massive Charging can own that expectation by positioning the service around speed, planning, and a smoother ownership start."
      },
      {
        title: "Support does not end after installation",
        description:
          "Home charging is more valuable when the owner knows there is support behind it. The promise is not just installation—it is continuity. If the charging point is part of a daily routine, then maintenance, service response, and operational confidence matter. Massive Charging is a long-term home charging partner rather than a one-time installer, with AMC and uptime management with defined service timelines and performance tracking."
      },
      {
        title: "Built by a company that understands live charging operations",
        description:
          "Massive Charging is not just selling a residential device. It is coming from a live charging operations background that spans software, electronics, deployment, and on-ground charging infrastructure across multiple vehicle categories. Customers are not dealing with a reseller that only ships a box—they are dealing with an EV charging company that understands installation, performance, support, and charging behaviour in real operating environments."
      }
    ],
    stepsTitle: "How It Works",
    steps: [
      {
        title: "Site assessment and electrical readiness",
        description:
          "Tell us about your home, parking setup, available electrical connection, and EV type. We assess electrical feasibility, power availability, and any upgrades needed."
      },
      {
        title: "Choose the right charger and plan installation",
        description:
          "Based on your site assessment, we recommend the right charger (3.3–22 kW). Installation is coordinated before your vehicle arrives, with full commissioning and safety validation."
      },
      {
        title: "Go live with ongoing support",
        description:
          "Your home charger goes live with all safety checks complete. Structured maintenance, service response, and uptime management provide confidence in daily operation."
      }
    ],
    faqTitle: "Home Charging FAQ",
    faqs: [
      {
        question: "What does Massive Charging offer for home charging?",
        answer:
          "Massive Charging offers home charger pre-delivery installation, site inspection, electrical readiness checks, charger installation, and ongoing maintenance-oriented support as part of its home and dealer charging enablement model."
      },
      {
        question: "Which chargers are suitable for home use?",
        answer:
          "Massive Charging's AC chargers are available in 3.3 kW, 7.4 kW, 11 kW, 15 kW, and 22 kW configurations for residential and workplace environments. The right option depends on the vehicle, electrical setup, and charging pattern at home."
      },
      {
        question: "Why not charge from a normal socket?",
        answer:
          "Sustained EV load on ordinary sockets can create overheating, insulation damage, short-circuit risk, and possible fire. Proper EV charging hardware, RCCB and MCB protection, proper earthing, and professional installation are the safer alternative."
      },
      {
        question: "Can the home charger be installed before I receive my vehicle?",
        answer:
          "Yes. Home charger pre-delivery installation is explicitly part of Massive Charging's enablement offering, with site inspection and electrical readiness planned before vehicle handover."
      },
      {
        question: "Does Massive Charging provide support after installation?",
        answer:
          "Yes. The offering includes AMC and uptime management with structured service timelines and performance tracking."
      },
      {
        question: "Can Massive Charging install only its own chargers?",
        answer:
          "Third-party hardware can also be quality-checked and deployed where required."
      }
    ]
  },
  "/society-charging": {
    badge: "Society EV Charging Solutions",
    title: "Society EV Charging Solutions for Apartments & RWAs | Massive Charging",
    description:
      "Set up EV charging in your apartment society or gated community with Massive Charging. Shared chargers, slot-based setups, installation, software, and support.",
    primaryCta: {
      href: "/get-chargers",
      label: "Talk to a Society Charging Expert"
    },
    secondaryCta: {
      href: "/get-chargers",
      label: "Assess EV Charging for Your Society"
    },
    stats: [
      { label: "Live stations", value: "50+", note: "across India's residential communities" },
      { label: "Monthly sessions", value: "3,20,000+", note: "completed on Massive's live network" },
      { label: "Average uptime", value: "99.95%", note: "structured monitoring and maintenance" }
    ],
    cardTitle: "Society charging made practical and scalable",
    cards: [
      {
        title: "Society charging should be planned, not improvised",
        description:
          "As EV adoption grows, residential communities are becoming one of the most important charging environments. Residents want the convenience of charging where they already park. RWAs and builders want a solution that supports current demand without creating long-term operational confusion. Society charging should not be approached as an ad hoc electrical add-on. It should be treated as a proper EV charging setup with the right hardware, site assessment, installation planning, and operating system behind it."
      },
      {
        title: "Support both individual slot charging and shared community charging",
        description:
          "Not every residential property needs the same model. Some societies want chargers installed in designated resident parking slots. Others prefer shared chargers in common areas. Some larger communities may need a combination of both as EV adoption rises across the property. Massive does not force one deployment model—it helps residential communities choose the right setup based on parking layout, electrical readiness, and resident usage."
      },
      {
        title: "End-to-end installation and execution for residential properties",
        description:
          "Residential properties do not want a fragmented model where one vendor sells hardware, another handles installation, and nobody owns post-installation support. Massive Charging provides site assessment, end-to-end installation, maintenance programs, national-scale AC and DC deployment capability, technical support and integration, and one accountable partner for operations."
      },
      {
        title: "Residential hardware that fits everyday charging needs",
        description:
          "Most society charging deployments are built around dependable AC charging rather than purely fast-charging infrastructure. Massive's AC chargers are available in 3.3 kW, 7.4 kW, 11 kW, 15 kW, and 22 kW variants, specifically designed for residential and workplace environments. Massive positions itself as the partner that helps determine the right charger mix based on parking type, electrical capacity, expected resident usage, and future expansion needs."
      },
      {
        title: "Software makes society charging easier to manage",
        description:
          "Hardware alone does not make residential charging easy to operate. The software layer matters just as much when multiple residents, multiple chargers, and different access conditions need to be managed over time. Massive's CMS provides control over users, stations, and pricing, along with dedicated apps for EV users, station operators, and network owners to manage sessions, monitor performance, and control operations. It also includes customer support integration, OCPI-ready architecture, UPI direct charging, and WhatsApp bot integration to lower user friction."
      },
      {
        title: "Reduce friction for residents from day one",
        description:
          "A good society charging experience should feel simple to the people using it. Massive focuses on UPI direct charging for app-free, instant transactions and WhatsApp bot integration for charger discovery and session initiation. Society charging is not only about infrastructure deployment—it is about reducing everyday friction for residents and improving adoption inside the community."
      },
      {
        title: "A future-ready amenity for modern residential communities",
        description:
          "EV charging is quickly becoming part of what residents expect from modern residential infrastructure. Society charging supports current residents and future EV adoption, while adding long-term value for the community. Society charging is not just a technical installation—it is a property-level upgrade that improves convenience for current residents and makes the community more prepared for the way mobility is changing."
      }
    ],
    stepsTitle: "How It Works",
    steps: [
      {
        title: "Assess your society's charging needs and site readiness",
        description:
          "Tell us about your property layout, parking structure, electrical infrastructure, and resident EV adoption expectations. We assess whether slot-based charging, shared systems, or a combination makes sense for your community."
      },
      {
        title: "Plan installation and commission the system",
        description:
          "Based on site assessment, we recommend the right charger mix and deployment model. Installation is handled end-to-end with electrical integration, commissioning, and safety validation. The software platform is configured for your community's operating needs."
      },
      {
        title: "Go live with ongoing support and management",
        description:
          "Your charging system goes live with resident access, payments, and management through digital interfaces. Structured maintenance, technical support, and uptime monitoring provide confidence in daily operations and future growth."
      }
    ],
    faqTitle: "Society Charging FAQ",
    faqs: [
      {
        question: "Can an apartment society set up EV charging for residents?",
        answer:
          "Yes. If the society has parking and electricity, it can set up EV charging to enable residents to charge and support future EV adoption."
      },
      {
        question: "What is the difference between slot-based charging and shared society charging?",
        answer:
          "Slot-based charging is installed in individual resident parking slots with power. Shared society charging uses common area chargers for community access. The right model depends on parking structure and resident needs—some societies use both."
      },
      {
        question: "Does Massive Charging handle installation as well as chargers?",
        answer:
          "Yes. Massive provides site assessment, end-to-end installation, maintenance programs, technical integration, and one accountable partner for operations from start to finish."
      },
      {
        question: "Which chargers are suitable for residential societies?",
        answer:
          "Massive's AC chargers range from 3.3 kW to 22 kW and are designed for residential and workplace environments. The right charger depends on parking conditions, electrical capacity, and expected resident usage."
      },
      {
        question: "Can charging in the society be managed digitally?",
        answer:
          "Yes. Massive's software provides control over users, stations, and pricing, along with apps for residents and operators, UPI direct charging, and WhatsApp bot integration to manage access and payments."
      },
      {
        question: "Can this work for gated communities as well as apartment societies?",
        answer:
          "Yes. Massive supports both apartment societies and gated communities, positioning the offer as scalable charging infrastructure that adds long-term value for residents."
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
