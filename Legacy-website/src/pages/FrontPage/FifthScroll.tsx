import React from "react";
import "./FifthScroll.css";

const CHIPS = ["Costs", "Infrastructure", "Charging Types", "Best Practices"];

export default function FifthScroll() {
  return (
    <section id="ev-charging-guide" className="fifth-scroll">
      <div className="fifth-scroll__container">
        <div className="fifth-scroll__grid">
          {/* Left Column */}
          <div className="fifth-scroll__left">
            <div className="fifth-scroll__vehicle-chip">
              <span className="fifth-scroll__vehicle-chip-text">2W, 3W, 4W</span>
            </div>

            <h2 className="fifth-scroll__heading">
              Own an EV or Planning to Buy One?
            </h2>

            <p className="fifth-scroll__subheading">
              Confused about Charging Cost &amp; Required Infrastructure?
            </p>

            <p className="fifth-scroll__description">
              Get Detailed Charging Guide for your Vehicles
            </p>

            <div className="fifth-scroll__chips">
              {CHIPS.map((chip) => (
                <span key={chip} className="fifth-scroll__chip">
                  <span className="fifth-scroll__chip-text">{chip}</span>
                </span>
              ))}
            </div>

            <div className="fifth-scroll__cta">
              <a href="/charging-guide" className="fifth-scroll__cta-button">
                Explore Charging Guide
              </a>
            </div>
          </div>

          {/* Right Column – Product Manual */}
          <div className="fifth-scroll__right">
            <img
              src="/product manual.svg"
              alt="EV Charging Product Manual"
              className="fifth-scroll__manual-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
