import React from "react";
import FrontPageButton from "../FrontPage/FrontPageButton";
import StepCard from "./StepCard";
import OneAppBanner from "./OneAppBanner";
import "./FastStartsSection.css";

export default function FastStartsSection() {
  return (
    <section className="fast-starts">
      <div className="fast-starts__container">
        <div className="fast-starts__grid">
          {/* Left Column */}
          <div className="fast-starts__left">
            {/* Badge */}
            <div className="upi-charging__badge">
              <span className="upi-charging__badge-dot" />
              <span className="upi-charging__badge-text">
                Charge EV with UPI
              </span>
            </div>

            {/* Heading */}
            <h2 className="fast-starts__heading">
              Build for fast starts, not app fatigue.
            </h2>

            {/* Description */}
            <p className="fast-starts__description">
              Massive UPI Charging lets you start EV Charger directly
              allowing you to begin charging session in seconds.
            </p>

            {/* Buttons */}
            <div className="upi-charging__buttons">
              <FrontPageButton variant="primary" href="/charging-guide">
                Locate chargers
              </FrontPageButton>
              <FrontPageButton variant="outline">
                Works with any UPI app
              </FrontPageButton>
            </div>
          </div>

          {/* Right Column – Step Cards + Banner */}
          <div className="fast-starts__right">
            <div className="fast-starts__right-content">
              <div className="fast-starts__steps">
                <StepCard
                  icon="/qrBox.svg"
                  title="Scan the QR"
                  description="Open any UPI app and scan the charger QR."
                />
                <StepCard
                  icon="/checked.svg"
                  title="Confirm the session"
                  description="Review connectors, tariff, and session details before you pay."
                />
                <StepCard
                  icon="/scooter.svg"
                  title="Start Charging"
                  description="Power starts instantly and the session status"
                />
              </div>
              <OneAppBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
