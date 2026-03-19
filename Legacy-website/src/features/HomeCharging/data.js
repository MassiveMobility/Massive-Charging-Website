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