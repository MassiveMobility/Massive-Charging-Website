import React from "react";
import "./SixthScroll.css";

const PERKS = [
  "Points on Each Charge",
  "Charging Discounts",
  "Charging Pass",
  "Access to Premium Stations",
  "Discount on Hardware",
];

export default function SixthScroll() {
  return (
    <section id="exclusive-membership" className="sixth-scroll">
      <div className="sixth-scroll__card">
        {/* Badge pill with sparkle */}
        <div className="sixth-scroll__top-bar">
          <div className="sixth-scroll__badge-wrapper">
            <img src="/Flare.svg" alt="" className="sixth-scroll__sparkle" />
            <div className="sixth-scroll__badge">
              <span className="sixth-scroll__badge-text">Exclusive Membership</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="sixth-scroll__heading">
          <span className="sixth-scroll__heading-white">Become an </span>
          <span className="sixth-scroll__heading-gold">Elite Member</span>
        </h2>

        {/* Subtitle with bolt icon */}
        <div className="sixth-scroll__subtitle">
          <span className="sixth-scroll__subtitle-text">
            Premium perks, priority access, and better savings
          </span>
          <img
            src="/Group 27792.svg"
            alt="Bolt"
            className="sixth-scroll__bolt-icon"
            loading="lazy"
          />
          <span className="sixth-scroll__subtitle-text">
            every time you charge.
          </span>
        </div>

        {/* Perk chips */}
        <div className="sixth-scroll__perks">
          {PERKS.map((perk) => (
            <div key={perk} className="sixth-scroll__perk">
              <span className="sixth-scroll__perk-text">{perk}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="/plans-offers" className="sixth-scroll__cta">
          <span className="sixth-scroll__cta-text">Get Massive Membership</span>
        </a>
      </div>
    </section>
  );
}
