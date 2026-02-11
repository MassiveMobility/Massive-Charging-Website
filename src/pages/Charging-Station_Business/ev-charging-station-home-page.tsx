import React from "react";

import { HeroSection } from "./HeroSection";
import RequirementDashboard from "./Requirement_Dashboard"; // <-- NEW
import { EarningPotentialCalculatorSection } from "./EarningPotentialCalculatorSection";
import { BusinessMenuDashboardSection } from "./BusinessMenuDashboardSection";
import { WhyMassiveSection } from "./WhyMassiveSection";
import { StatementsSection } from "./StatementsSection";
import { FAQSection } from "./FAQSection";

export default function EvChargingStationHomePage() {
  return (
    <div className="min-h-screen bg-mcn-bg text-mcn-text-primary">
      {/* Hero */}
      <HeroSection />

      {/* Quick menu / tiles section (as you had) */}
      <BusinessMenuDashboardSection />

      {/* Discover Requirement (Requirement Dashboard) */}
      <section id="discover-requirement">
        <RequirementDashboard />
      </section>

      {/* Optional calculator (keep/remove as you like) */}
      <EarningPotentialCalculatorSection />

      {/* Trust + brand */}
      <WhyMassiveSection />
      <StatementsSection />

      {/* FAQs */}
      <FAQSection />
    </div>
  );
}
