export type EvCarItem = {
  id: string;
  manufacturer: string;
  name: string;
  variant: string;
  price: string;
  battery: string;
  claimedRange: string;
  connector: string;
  guideSlug: string;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideArticle = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  updatedAt: string;
  deck: string;
  keyTakeaways: string[];
  sections: GuideSection[];
};

/**
 * Lightweight EV catalogue for migrated guide routes.
 * This can be replaced with CMS or API data in later phases.
 */
export const evCarCatalogue: EvCarItem[] = [
  {
    id: "car-001",
    manufacturer: "Tata",
    name: "Nexon EV",
    variant: "Long Range",
    price: "INR 16.99L onwards",
    battery: "40.5 kWh",
    claimedRange: "465 km",
    connector: "CCS2",
    guideSlug: "nexon-ev-home-and-fast-charging-guide"
  },
  {
    id: "car-002",
    manufacturer: "MG",
    name: "Windsor EV",
    variant: "Essence",
    price: "INR 14.49L onwards",
    battery: "38 kWh",
    claimedRange: "332 km",
    connector: "CCS2",
    guideSlug: "mg-windsor-ev-practical-charging-playbook"
  },
  {
    id: "car-003",
    manufacturer: "BYD",
    name: "Atto 3",
    variant: "Dynamic",
    price: "INR 24.99L onwards",
    battery: "60.5 kWh",
    claimedRange: "521 km",
    connector: "CCS2",
    guideSlug: "atto-3-public-and-home-charging-checklist"
  },
  {
    id: "car-004",
    manufacturer: "Mahindra",
    name: "XUV400",
    variant: "EL Pro",
    price: "INR 15.49L onwards",
    battery: "39.4 kWh",
    claimedRange: "456 km",
    connector: "CCS2",
    guideSlug: "xuv400-cost-and-charging-cycle-optimization"
  },
  {
    id: "car-005",
    manufacturer: "Hyundai",
    name: "Ioniq 5",
    variant: "RWD",
    price: "INR 45.95L onwards",
    battery: "72.6 kWh",
    claimedRange: "631 km",
    connector: "CCS2",
    guideSlug: "ioniq5-long-distance-fast-charging-strategy"
  },
  {
    id: "car-006",
    manufacturer: "Kia",
    name: "EV6",
    variant: "GT Line",
    price: "INR 60.95L onwards",
    battery: "77.4 kWh",
    claimedRange: "708 km",
    connector: "CCS2",
    guideSlug: "ev6-highway-charging-window-planning"
  }
];

export const chargingGuideArticles: GuideArticle[] = [
  {
    slug: "nexon-ev-home-and-fast-charging-guide",
    title: "Nexon EV Home and Fast Charging Guide",
    category: "Vehicle Charging Guide",
    readingTime: "7 min read",
    updatedAt: "March 2026",
    deck: "A practical plan for balancing home charging, public fast charging, and monthly cost efficiency.",
    keyTakeaways: [
      "Use home AC charging as your default base-load strategy.",
      "Reserve DC fast charging for travel and urgent top-ups.",
      "Track charge windows to avoid peak tariff periods."
    ],
    sections: [
      {
        heading: "Charging behavior that improves battery health",
        paragraphs: [
          "A stable daily routine with moderate charge bands usually gives better long-term battery behavior than repeated deep cycles.",
          "For city usage, many owners keep daily charging in practical ranges and avoid unnecessary 100% holds."
        ]
      },
      {
        heading: "Home setup requirements",
        paragraphs: [
          "Dedicated earthing, correct breaker sizing, and safe cable routing are core requirements before installing a private charger.",
          "When load is shared with other appliances, a basic load planning step prevents nuisance tripping."
        ],
        bullets: [
          "Dedicated MCB and RCCB protection",
          "Weather-protected cable and connector handling",
          "Metering plan for billing visibility"
        ]
      }
    ]
  },
  {
    slug: "mg-windsor-ev-practical-charging-playbook",
    title: "MG Windsor EV Practical Charging Playbook",
    category: "Vehicle Charging Guide",
    readingTime: "9 min read",
    updatedAt: "March 2026",
    deck: "Lessons from mixed city and highway usage with focus on charger discovery and confidence during long routes.",
    keyTakeaways: [
      "Plan primary and fallback chargers for every long route.",
      "Validate charger reliability before committing long stops.",
      "Use route-based planner tools to reduce operational friction."
    ],
    sections: [
      {
        heading: "Pre-trip charging checks",
        paragraphs: [
          "Before departure, shortlist stations by distance and likely reliability instead of depending on one listing source.",
          "A two-option fallback strategy lowers range anxiety and supports better route discipline."
        ]
      },
      {
        heading: "On-route charging decisions",
        paragraphs: [
          "When multiple stations are available, prefer stations with better access and predictable wait times over nominally shorter distance.",
          "Station uptime and queue behavior often matter more than catalog listing density."
        ]
      }
    ]
  },
  {
    slug: "atto-3-public-and-home-charging-checklist",
    title: "Atto 3 Public and Home Charging Checklist",
    category: "Vehicle Charging Guide",
    readingTime: "8 min read",
    updatedAt: "March 2026",
    deck: "How to align home charging and public sessions while maintaining practical travel readiness.",
    keyTakeaways: [
      "Home charging covers routine usage efficiently.",
      "Fast charging should be planned around trip windows.",
      "Session logs help estimate monthly charging spend accurately."
    ],
    sections: [
      {
        heading: "Home charging baseline",
        paragraphs: [
          "Use a predictable overnight schedule where possible to maintain consistency and reduce operational effort.",
          "Document your average weekly units to improve budget visibility."
        ]
      },
      {
        heading: "Public charging triggers",
        paragraphs: [
          "Use public sessions when route distance and available buffer require quick energy intake.",
          "Avoid last-minute charging dependence by planning in advance."
        ]
      }
    ]
  },
  {
    slug: "xuv400-cost-and-charging-cycle-optimization",
    title: "XUV400 Cost and Charging Cycle Optimization",
    category: "Charging Economics",
    readingTime: "6 min read",
    updatedAt: "March 2026",
    deck: "A cost-focused guide to charge timing, tariff impact, and usage forecasting.",
    keyTakeaways: [
      "Charge timing directly influences monthly spend.",
      "Simple weekly reviews can reveal avoidable cost spikes.",
      "Operational consistency beats ad-hoc charging behavior."
    ],
    sections: [
      {
        heading: "Cost drivers to monitor",
        paragraphs: [
          "Most cost differences come from charge timing, public-session frequency, and unplanned route top-ups.",
          "Tracking these factors weekly helps maintain predictable spend."
        ],
        bullets: ["Off-peak vs peak session split", "Public charging frequency", "Average unit consumption per week"]
      }
    ]
  },
  {
    slug: "ioniq5-long-distance-fast-charging-strategy",
    title: "Ioniq 5 Long Distance Fast Charging Strategy",
    category: "Trip Planning",
    readingTime: "10 min read",
    updatedAt: "March 2026",
    deck: "How to sequence charging stops for corridor travel with minimal idle time and safer fallback options.",
    keyTakeaways: [
      "Build route plans around high-confidence stations.",
      "Keep one backup station for every major stop.",
      "Use charging windows that align with meal and rest breaks."
    ],
    sections: [
      {
        heading: "Corridor planning framework",
        paragraphs: [
          "Route plans work best when every major stop has a fallback option in the same corridor.",
          "A planned stop with known amenities can reduce both delay and driver fatigue."
        ]
      }
    ]
  },
  {
    slug: "ev6-highway-charging-window-planning",
    title: "EV6 Highway Charging Window Planning",
    category: "Trip Planning",
    readingTime: "8 min read",
    updatedAt: "March 2026",
    deck: "A practical charging-window model for highway routes where speed, station reliability, and queue risk matter.",
    keyTakeaways: [
      "Do not wait for low battery before planning the next stop.",
      "Highway chargers should be chosen for reliability first.",
      "Short, planned top-ups are often better than one delayed long stop."
    ],
    sections: [
      {
        heading: "Choosing highway stops",
        paragraphs: [
          "Pick stations that combine reliable hardware, predictable access, and basic facilities.",
          "Route continuity and confidence are usually more valuable than marginal tariff differences."
        ]
      }
    ]
  }
];

export const chargingGuideArticleBySlug = Object.fromEntries(
  chargingGuideArticles.map((article) => [article.slug, article])
) as Record<string, GuideArticle>;
