import React from "react";
import { Download } from "lucide-react";
import FrontPageButton from "../FrontPage/FrontPageButton";
import FastStartsSection from "./FastStartsSection";
import "./UpiChargingPage.css";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

/* ------------------------------------------------------------------ */
/*  Fun Facts Card                                                     */
/* ------------------------------------------------------------------ */

function FunFactsCard() {
  return (
    <div className="fun-facts-card">
      {/* Header */}
      <div className="fun-facts-card__header">
        <div className="fun-facts-card__title">
          <img
            src="/electric_bolt.png"
            alt="bolt"
            width={20}
            height={20}
          />
          <span className="fun-facts-card__title-text">Fun facts</span>
        </div>
        <span className="fun-facts-card__upi-badge">UPI Ready</span>
      </div>

      {/* Stats Grid */}
      <div className="fun-facts-card__stats">
        {/* Stations */}
        <div className="stat-box">
          <div className="stat-box__label">
            <img src="/location_on.svg" alt="location" width={16} height={16} />
            <span className="stat-box__label-text">Stations</span>
          </div>
          <div className="stat-box__value">100+</div>
          <div className="stat-box__hint">Last 7 days</div>
        </div>

        {/* Start time */}
        <div className="stat-box">
          <div className="stat-box__label">
            <img src="/qr_code_scanner.svg" alt="qr" width={16} height={16} />
            <span className="stat-box__label-text">Start time</span>
          </div>
          <div className="stat-box__value">&lt; 20s</div>
          <div className="stat-box__hint">Scan to charge</div>
        </div>

        {/* Payments */}
        <div className="stat-box">
          <div className="stat-box__label">
            <img src="/credit_card.svg" alt="payments" width={16} height={16} />
            <span className="stat-box__label-text">Payments</span>
          </div>
          <div className="stat-box__value">UPI</div>
          <div className="stat-box__hint">No wallets</div>
        </div>

        {/* Secure */}
        <div className="stat-box">
          <div className="stat-box__label">
            <img src="/verified_user.svg" alt="secure" width={16} height={16} />
            <span className="stat-box__label-text">Secure</span>
          </div>
          <div className="stat-box__value">Verified</div>
          <div className="stat-box__hint">Verified Card</div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="fun-facts-card__banner">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2BBCE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <span className="fun-facts-card__banner-text">
          Scan with any UPI app. Confirm &amp; start in seconds.
        </span>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  UPI CHARGING PAGE                                                  */
/* ================================================================== */

export default function UpiChargingPage() {
  return (
    <div className="upi-charging">
      <section className="upi-charging__hero">
        <div className="upi-charging__container">
          <div className="upi-charging__grid">
            {/* Left Column */}
            <div className="upi-charging__left">
              {/* Badge */}
              <div className="upi-charging__badge">
                <span className="upi-charging__badge-dot" />
                <span className="upi-charging__badge-text">
                  Quick on-the-go charging
                </span>
              </div>

              {/* Heading */}
              <h1 className="upi-charging__heading">
                Scan UPI{" "}
                <span className="upi-charging__heading-accent">
                  &amp; Charge EV
                </span>
              </h1>

              {/* Subtitle */}
              <p className="upi-charging__subtitle">
                No app installation required. Pay from any UPI app and start a
                verified charging session in seconds.
              </p>

              {/* Buttons */}
              <div className="upi-charging__buttons">
                <FrontPageButton variant="primary" href="/charging-guide">
                  Get UPI Chargers
                </FrontPageButton>
                <FrontPageButton
                  variant="outline"
                  icon={<Download size={18} />}
                  href={PLAYSTORE_URL}
                >
                  Get 1C EV App
                </FrontPageButton>
              </div>
            </div>

            {/* Right Column */}
            <div className="upi-charging__right">
              <FunFactsCard />
            </div>
          </div>
        </div>
      </section>

      <FastStartsSection />
    </div>
  );
}
