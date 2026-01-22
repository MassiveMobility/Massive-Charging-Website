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