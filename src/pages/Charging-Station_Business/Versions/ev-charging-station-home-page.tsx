import React from "react";

import { HeroSection } from "./HeroSection";
import RequirementDashboard from "./Requirement_Dashboard";
import { EarningPotentialCalculatorSection } from "./EarningPotentialCalculatorSection";
import { BusinessMenuDashboardSection } from "./BusinessMenuDashboardSection";
import WhyMassiveSection from "./WhyMassiveSection";
import { StatementsSection } from "./StatementsSection";
import { FAQSection } from "./FAQSection";
import HomeSectionEEducation from "../Home/Home_SectionE_Education";


export default function EvChargingStationHomePage() {
  return (
    <div className="min-h-screen bg-mcn-bg text-mcn-text-primary">

      {/* Primary Hero */}
      <HeroSection />
      <WhyMassiveSection />

      {/* Business Menu / Navigation Tiles */}
      <BusinessMenuDashboardSection />

      {/* Requirement Section */}
      <section id="discover-requirement">
        <RequirementDashboard />
      </section>

      <HomeSectionEEducation />

      {/* Earnings Calculator 
      <EarningPotentialCalculatorSection />

      {/* Why Massive (Hero Extension Section) */}
      

      {/* Statements / Trust 
      <StatementsSection /> */}

      {/* FAQs 
      <FAQSection />
*/}
    </div>
  );
}
