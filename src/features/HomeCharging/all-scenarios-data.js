// src/features/HomeCharging/data.js

export const landingContent = {
  hero: {
    title: "Turn Your Home Parking Into EV Charging",
    body: "If you have home parking with electricity, you can install EV charging at home. This lets you charge your EV safely and conveniently at your own place.",
    trustPill: "Massive Charging Network provides the charger and complete setup.",
    actionText: "Check Home Charging Options"
  },
  consideration: {
    title: "Things to Consider Before Installing EV Charging",
    subtitle: "You don’t need to know everything — just a few basics:",
    cards: [
      {
        title: "Parking Space",
        text: "How many EVs can be parked at your home? (1 car / 2 cars / more)",
        icon: "🚗" 
      },
      {
        title: "Power Availability",
        text: "Existing electricity connection at your home vs Possibility of power upgrade.",
        icon: "⚡"
      },
      {
        title: "Type of EV",
        text: "2-wheeler, 4-wheeler, or both?",
        icon: "🛵"
      },
      {
        title: "Usage Expectation",
        text: "Only for personal charging vs Family/Guests usage.",
        icon: "👥"
      },
      {
        title: "Scalability",
        text: "Start small, upgrade or downgrade anytime. The setup grows with you.",
        icon: "📈"
      }
    ],
    ctaCard: "📌 Based on these factors, a single charging point or a small home charging station can be set up."
  },
  connection: {
    title: "Talk to Massive Charging Network",
    subtitle: "Fill in a few details and we’ll guide you.",
    checkboxGroups: [
      { label: "I am a:", options: ["Home Owner", "Restaurant", "Shop / Commercial", "Other"] },
      { label: "EV Type:", options: ["2-Wheeler", "4-Wheeler", "Both"] },
      { label: "Vehicles to Charge:", options: ["1 vehicle", "Up to 5", "10+", "50+"] },
      { label: "Available Space:", options: ["Small (Home)", "Medium", "Large"] },
      { label: "Power Availability:", options: ["Existing connection", "Can upgrade", "Not sure"] }
    ]
  }
};

// src/features/HomeCharging/apartment-resident-data.js

export const apartmentResidentContent = {
  hero: {
    title: "Install EV Charging in Your Parking Slot",
    body: "If you have an assigned parking slot with power, you can install EV charging. This removes dependence on public chargers.",
    trustPill: "Massive Charging Network provides compliant slot‑based charging solutions.",
    actionText: "Explore Slot Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Check these basics before proceeding:",
    cards: [
      {
        title: "Assigned Parking Availability",
        text: "Ensure you have a dedicated parking slot allocated to you.",
        icon: "🅿️" 
      },
      {
        title: "Society Permissions",
        text: "You may need approval or an NOC from your RWA/Management.",
        icon: "📝"
      },
      {
        title: "Power Access at Slot",
        text: "Check if there is an existing power point or meter room nearby.",
        icon: "⚡"
      },
      {
        title: "EV Type and Daily Usage",
        text: "Determine if you need a simple socket (2W) or a fast charger (4W).",
        icon: "🚗"
      }
    ],
    ctaCard: "👉 Check slot‑based charging feasibility."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Requirement Snapshot",
    // We keep the structure identical so the form works, but these labels fit the context
    checkboxGroups: [
      { label: "I am a:", options: ["Tenant", "Owner", "RWA Official"] }, 
      { label: "EV Type:", options: ["2-Wheeler", "4-Wheeler", "Both"] },
      { label: "Vehicles to Charge:", options: ["1 vehicle", "2 vehicles"] },
      { label: "Parking Type:", options: ["Open Slot", "Basement Slot", "Stilt Parking"] },
      { label: "Power Source:", options: ["Society Meter", "Personal Meter", "Not Sure"] }
    ]
  }
};




export const apartmentSocietyContent = {
  hero: {
    title: "Set Up EV Charging for Your Society",
    body: "If your society has parking and electricity, you can set up EV charging. This supports residents and future EV adoption.",
    trustPill: "Massive Charging Network provides shared, scalable charging systems.",
    actionText: "Assess Society Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Key factors for society-wide implementation:",
    cards: [
      {
        title: "Number of Parking Slots",
        text: "Assess total parking capacity to determine charging potential.",
        icon: "🅿️" 
      },
      {
        title: "Common Power Infrastructure",
        text: "Check availability of community power load for shared charging.",
        icon: "⚡"
      },
      {
        title: "Expected Resident EV Adoption",
        text: "Estimate how many residents plan to buy EVs soon.",
        icon: "👥"
      },
      {
        title: "Shared vs Reserved Chargers",
        text: "Decide between dedicated slots or a common charging pool.",
        icon: "🔄"
      },
      {
        title: "Phased Deployment Possible",
        text: "You don't need to do it all at once; start small and scale up.",
        icon: "📈"
      }
    ],
    ctaCard: "👉 Assess EV charging readiness for your society."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Parking Count",
    checkboxGroups: [
      { label: "I am a:", options: ["RWA Member", "Secretary", "Facility Manager"] },
      { label: "Current EVs:", options: ["None", "1-5", "5-20", "20+"] },
      { label: "Total Parking Slots:", options: ["<50", "50-100", "100-500", "500+"] },
      { label: "Deployment Preference:", options: ["Shared Area", "Designated Slots", "Both"] },
      { label: "Power Source:", options: ["Common Meter", "New Connection", "Not Sure"] }
    ]
  }
};

export const gatedCommunityContent = {
  hero: {
    title: "Enable EV Charging Across Your Community",
    body: "If your community has common parking and power, you can install EV chargers. This adds long‑term value and sustainability.",
    trustPill: "Massive Charging Network delivers community‑scale infrastructure.",
    actionText: "Plan Community Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Planning for a large spread-out community:",
    cards: [
      {
        title: "Community Size and Parking Zones",
        text: "Identify key zones where residents park most frequently.",
        icon: "🏘️" 
      },
      {
        title: "Centralized vs Distributed Chargers",
        text: "Decide between a central hub or chargers at every cluster.",
        icon: "📍"
      },
      {
        title: "Power Availability and Load Planning",
        text: "Ensure the grid can handle multiple chargers simultaneously.",
        icon: "🔌"
      },
      {
        title: "Long‑term Scalability",
        text: "Plan infrastructure that allows easy addition of future points.",
        icon: "📅"
      }
    ],
    ctaCard: "👉 Plan EV charging for your community."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Community Size",
    checkboxGroups: [
      { label: "I am a:", options: ["Builder", "Community Manager", "Residents Association"] },
      { label: "Property Type:", options: ["Villas", "Row Houses", "Mixed Usage"] },
      { label: "Community Size:", options: ["<50 Units", "50-200 Units", "200+ Units"] },
      { label: "Available Common Area:", options: ["Clubhouse", "Visitor Parking", "Gate Area"] },
      { label: "Timeline:", options: ["Immediate", "Planning Phase", "Future Expansion"] }
    ]
  }
};

export const pgCoLivingContent = {
  hero: {
    title: "Offer EV Charging at Your Property",
    body: "If tenants park at your property, you can offer EV charging. This improves occupancy and tenant convenience.",
    trustPill: "Massive Charging Network provides compact, landlord‑friendly setups.",
    actionText: "Check Property Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Simple amenities that attract tenants:",
    cards: [
      {
        title: "Tenant Vehicle Count",
        text: "How many tenants currently own or plan to own EVs?",
        icon: "🛵" 
      },
      {
        title: "Shared Parking Space",
        text: "Is there enough space to designate a charging spot?",
        icon: "🅿️"
      },
      {
        title: "Power Availability",
        text: "Can your existing connection support an extra load?",
        icon: "⚡"
      },
      {
        title: "Simple, Low‑maintenance Setup",
        text: "Focus on rugged units that require minimal supervision.",
        icon: "🛠️"
      }
    ],
    ctaCard: "👉 Check feasibility for your property."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Property Size",
    checkboxGroups: [
      { label: "I am a:", options: ["PG Owner", "Property Manager", "Landlord"] },
      { label: "Tenant Profile:", options: ["Students", "Professionals", "Mixed"] },
      { label: "Vehicle Types:", options: ["Mostly 2-Wheelers", "Cars", "Both"] },
      { label: "Parking Capacity:", options: ["Small (1-5)", "Medium (5-15)", "Large (15+)"] },
      { label: "Power Setup:", options: ["Domestic Meter", "Commercial Meter", "Not Sure"] }
    ]
  }
};

export const retailShopContent = {
  hero: {
    title: "Add EV Charging for Your Customers",
    body: "If customers park outside your shop, you can offer EV charging. This increases footfall and dwell time.",
    trustPill: "Massive Charging Network provides simple retail charging setups.",
    actionText: "Explore Retail Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Turn parking into footfall:",
    cards: [
      {
        title: "Parking Visibility",
        text: "Can drivers easily see the charger from the road?",
        icon: "👀" 
      },
      {
        title: "Customer Wait Time",
        text: "Does your business naturally encourage 15-30 min stops?",
        icon: "⏳"
      },
      {
        title: "Power Access",
        text: "Is the power source close to the parking area?",
        icon: "🔌"
      },
      {
        title: "Single‑point Installation",
        text: "A standalone charger is often enough to start.",
        icon: "📍"
      }
    ],
    ctaCard: "👉 Explore EV charging for your shop."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Parking Info",
    checkboxGroups: [
      { label: "I am a:", options: ["Shop Owner", "Franchise Owner", "Commercial Tenant"] },
      { label: "Shop Type:", options: ["Grocery/Retail", "Salon/Services", "Showroom"] },
      { label: "Parking Type:", options: ["Store Front", "Basement", "Street Side"] },
      { label: "Daily Footfall:", options: ["<50", "50-100", "100+"] },
      { label: "Power Connection:", options: ["Existing", "Need Upgrade", "Not Sure"] }
    ]
  }
};

export const restaurantCafeContent = {
  hero: {
    title: "Let Customers Charge While They Dine",
    body: "If customers park at your restaurant, you can install EV charging. This keeps customers longer at your location.",
    trustPill: "Massive Charging Network manages the charging setup end‑to‑end.",
    actionText: "Add Charging for Diners"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Enhancing the customer experience:",
    cards: [
      {
        title: "Average Dining Time",
        text: "Matches perfectly with EV charging times (45-90 mins).",
        icon: "🍽️" 
      },
      {
        title: "Parking Capacity",
        text: "How many dedicated spots can be electrified?",
        icon: "🚗"
      },
      {
        title: "Power Availability",
        text: "Ensure kitchen load + charging load is balanced.",
        icon: "⚡"
      },
      {
        title: "Customer Experience Focus",
        text: "Charging should be seamless and app-based.",
        icon: "✨"
      }
    ],
    ctaCard: "👉 Add EV charging to your restaurant."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Parking Info",
    checkboxGroups: [
      { label: "I am a:", options: ["Restaurant Owner", "Café Manager", "Chain Operator"] },
      { label: "Location Type:", options: ["Highway Side", "City Center", "Mall/Complex"] },
      { label: "Avg Customer Time:", options: ["<30 Mins", "30-60 Mins", "60+ Mins"] },
      { label: "Parking Spots:", options: ["1-5", "5-10", "10+"] },
      { label: "Power Backup:", options: ["Yes (DG)", "Inverter", "None"] }
    ]
  }
};

export const mallCommercialContent = {
  hero: {
    title: "Install EV Charging in Your Parking Area",
    body: "If your mall has parking and power, you can offer EV charging. This creates a new service and revenue stream.",
    trustPill: "Massive Charging Network provides multi‑charger systems.",
    actionText: "Assess Mall Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Scale and revenue considerations:",
    cards: [
      {
        title: "Parking Capacity",
        text: "Assess volume to determine the number of charging points.",
        icon: "🏢" 
      },
      {
        title: "Peak Footfall Hours",
        text: "Ensure infrastructure handles weekend peak loads.",
        icon: "👥"
      },
      {
        title: "Power Infrastructure",
        text: "Commercial grade power connections are required.",
        icon: "⚡"
      },
      {
        title: "Revenue‑sharing Models",
        text: "Turn parking spots into profit centers.",
        icon: "💰"
      }
    ],
    ctaCard: "👉 Assess charging potential for your property."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Parking Count",
    checkboxGroups: [
      { label: "I am a:", options: ["Mall Manager", "Property Developer", "Facility Head"] },
      { label: "Property Size:", options: ["Small Complex", "Mid-size Mall", "Large Mall"] },
      { label: "Parking Capacity:", options: ["<100", "100-500", "500-1000", "1000+"] },
      { label: "Charging Model:", options: ["Free Amenity", "Paid Service", "Hybrid"] },
      { label: "Installation Area:", options: ["Premium Parking", "General Parking", "Basement"] }
    ]
  }
};

export const fleetOperatorContent = {
  hero: {
    title: "Charge Your EV Fleet at Your Depot",
    body: "If your fleet parks at a depot with power, you can install EV charging. This reduces charging cost and vehicle downtime.",
    trustPill: "Massive Charging Network provides fleet‑ready charging solutions.",
    actionText: "Plan Fleet Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Operational efficiency is key:",
    cards: [
      {
        title: "Fleet Size",
        text: "Number of vehicles determines the charger count.",
        icon: "🚚" 
      },
      {
        title: "Charging Schedules",
        text: "Do vehicles charge overnight or need quick top-ups?",
        icon: "⏰"
      },
      {
        title: "Power Capacity",
        text: "High-load connections needed for simultaneous charging.",
        icon: "⚡"
      },
      {
        title: "Expansion Planning",
        text: "Infrastructure should grow as your fleet grows.",
        icon: "📈"
      }
    ],
    ctaCard: "👉 Plan depot charging for your fleet."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Fleet Size",
    checkboxGroups: [
      { label: "I am a:", options: ["Fleet Owner", "Logistics Manager", "Transport Head"] },
      { label: "Vehicle Type:", options: ["2W (Delivery)", "3W (Cargo)", "4W (Cabs/Trucks)"] },
      { label: "Fleet Size:", options: ["<10", "10-50", "50-100", "100+"] },
      { label: "Depot Status:", options: ["Owned", "Leased", "Public Parking"] },
      { label: "Charging Window:", options: ["Overnight", "Daytime Breaks", "24x7"] }
    ]
  }
};

export const fuelPumpHighwayContent = {
  hero: {
    title: "Add EV Charging at Your Location",
    body: "If vehicles stop at your site, you can offer EV charging. This prepares your business for the EV transition.",
    trustPill: "Massive Charging Network provides highway‑ready fast chargers.",
    actionText: "Explore Highway Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Transitioning to the future of fuel:",
    cards: [
      {
        title: "Stop Duration",
        text: "Highways require fast charging (DC) for quick turnaround.",
        icon: "⏱️" 
      },
      {
        title: "Highway Access",
        text: "Easy entry and exit from the main road is crucial.",
        icon: "🛣️"
      },
      {
        title: "Power Availability",
        text: "High-tension connections are often needed for DC chargers.",
        icon: "⚡"
      },
      {
        title: "Fast‑charging Requirements",
        text: "Investing in higher capacity hardware for future-proofing.",
        icon: "🚀"
      }
    ],
    ctaCard: "👉 Explore EV charging for your site."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Site Info",
    checkboxGroups: [
      { label: "I am a:", options: ["Pump Owner", "Land Owner", "Highway Developer"] },
      { label: "Location:", options: ["National Highway", "State Highway", "City Outskirts"] },
      { label: "Space Available:", options: ["1-2 Bays", "3-5 Bays", "Large Area"] },
      { label: "Amenities:", options: ["Restrooms", "Food Court", "Convenience Store"] },
      { label: "Power Status:", options: ["Commercial HT", "Commercial LT", "Not Sure"] }
    ]
  }
};

export const hospitalInstitutionContent = {
  hero: {
    title: "Provide EV Charging for Visitors",
    body: "If visitors park at your facility, you can offer EV charging. This improves accessibility and convenience.",
    trustPill: "Massive Charging Network provides reliable, compliant systems.",
    actionText: "Evaluate Facility Charging"
  },
  consideration: {
    title: "Things to Keep in Mind",
    subtitle: "Reliability and care:",
    cards: [
      {
        title: "Visitor Parking Volume",
        text: "Estimate daily traffic to size the installation.",
        icon: "🏥" 
      },
      {
        title: "Reliability Needs",
        text: "Critical infrastructure requires 99% uptime guarantees.",
        icon: "🛡️"
      },
      {
        title: "Power Redundancy",
        text: "Ensure charging doesn't interfere with critical facility loads.",
        icon: "🔋"
      },
      {
        title: "Public Access Management",
        text: "Controlled access for doctors vs general public.",
        icon: "🚧"
      }
    ],
    ctaCard: "👉 Evaluate EV charging for your facility."
  },
  connection: {
    title: "Connect With Massive",
    subtitle: "Basic Details + Facility Type",
    checkboxGroups: [
      { label: "I am a:", options: ["Admin", "Facility Manager", "Director"] },
      { label: "Institution Type:", options: ["Hospital", "University", "Government Office"] },
      { label: "Visitor Volume:", options: ["Moderate", "High", "Very High"] },
      { label: "User Base:", options: ["Staff Only", "Visitors Only", "Mixed"] },
      { label: "Parking Area:", options: ["Open Ground", "Multi-level", "Basement"] }
    ]
  }
};

