import React from "react";
import FrontPageButton from "../FrontPage/FrontPageButton";
import GuideCategoriesSection from "./GuideCategoriesSection";
import "./EVChargingGuidePage.css";

export default function EVChargingGuidePage() {
  const handleExploreGuide = () => {
    const section = document.getElementById("ev-guide-categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="ev-guide">
      <section className="ev-guide__hero">
        <div className="ev-guide__container">
          {/* Badge */}
          <div className="ev-guide__badge">
            <span className="ev-guide__badge-dot" />
            <span className="ev-guide__badge-text">
              Charging Network Is Live
            </span>
          </div>

          {/* Heading */}
          <h1 className="ev-guide__heading">
            Electric Vehicle
            <br />
            <span className="ev-guide__heading-accent">Charging Guide.</span>
          </h1>

          {/* Subtitle */}
          <p className="ev-guide__subtitle">
            Everything you need to know about setting up home, office,
            commercial, and public EV charging infrastructure - simplified and
            practical.
          </p>

          {/* Button */}
          <FrontPageButton variant="primary" onClick={handleExploreGuide}>
            Explore the Guide
          </FrontPageButton>
        </div>
      </section>

      <GuideCategoriesSection />
    </div>
  );
}
