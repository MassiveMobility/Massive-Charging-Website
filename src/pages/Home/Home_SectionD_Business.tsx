import React from "react";

/* ─── styles (kept separate for easy editing) ─── */

const styles = {
  section: {
    position: "relative" as const,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    padding: "80px 0",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    flexWrap: "wrap" as const,
  },

  /* ── Left column ── */
  left: {
    flex: "1 1 440px",
    minWidth: 320,
    maxWidth: 560,
  },
  kicker: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 18,
    border: "1px solid #B5BCC58F",
    padding: "3px 16px",
    fontSize: 14,
    lineHeight: "22px",
    letterSpacing: "0.3%",
    color: "#131313",
    fontWeight: 400,
    marginBottom: 24,
  },
  heading: {
    fontSize: 48,
    fontWeight: 800,
    lineHeight: 1.1,
    color: "#0a0a0a",
    letterSpacing: "-0.02em",
    margin: 0,
  },
  subheading: {
    fontSize: 16,
    lineHeight: 1.6,
    color: "#555",
    marginTop: 16,
    maxWidth: 480,
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 28px",
    borderRadius: 10.72,
    backgroundColor: "#E50000",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: 32,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 28,
    border: "1px solid #ddd",
    padding: "8px 20px",
    fontSize: 14,
    fontWeight: 600,
    color: "#131313",
    marginTop: 20,
    marginLeft: 12,
  },
  badgeIcon: {
    width: 18,
    height: 18,
  },

  /* ── Right column (card flow diagram) ── */
  right: {
    flex: "1 1 500px",
    minWidth: 440,
    position: "relative" as const,
    height: 520,
  },

  /* Feature cards */
  card: {
    position: "absolute" as const,
    width: 190,
    backgroundColor: "transparent",
    borderRadius: 0,
    padding: 0,
    textAlign: "center" as const,
    boxShadow: "none",
  },
  cardIcon: {
    width: 160,
    height: 160,
    margin: "0 auto 12px",
    display: "block",
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#131313",
    lineHeight: 1.4,
  },

  /* Connector SVGs */
  connector: {
    position: "absolute" as const,
    pointerEvents: "none" as const,
  },
};

/* ─── Card positions (matching the Figma diamond/flow layout) ─── */

const cardPositions = {
  siteFeasibility: { top: 139, left: 32 },
  operations: { top: -5, left: 220 },
  chargerHardware: { top: 319, left: 140 },
  billing: { top: 162, left: 310 },
};

/* ─── Connector positions (endpoints touching card edges) ─── */

const connectorPositions = {
  /* Connector 1 (red): Site Feasibility top-right → Operations bottom-left */
  line1: { top: 60, left: 118, width: 90, height: 66 },
  /* Connector 2 (red): Operations right → Billing top-left */
  line2: { top: 118, left: 310, width: 90, height: 66 },
  /* Connector 3 (gray): Site Feasibility bottom → Charger Hardware top */
  line3: { top: 210, left: 166, width: 90, height: 86 },
};

/* ─── Feature Card component ─── */

function FeatureCard({
  icon,
  label,
  style,
}: {
  icon: string;
  label: string;
  style: React.CSSProperties;
}) {
  return (
    <div style={{ ...styles.card, ...style }}>
      <img src={icon} alt={label} style={styles.cardIcon} />
    </div>
  );
}

/* ─── Main Section ─── */

export default function Home_SectionD_Business() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* ── LEFT ── */}
        <div style={styles.left}>
          <div style={styles.kicker}>Setup your charger and earn</div>

          <h2 style={styles.heading}>
            Start Your EV Charging
            <br />
            Business
          </h2>

          <p style={styles.subheading}>
            Covert empty land into EV Charging Station and earn monthly income.
            Get Hardware and Software to run Charging Station.
          </p>

          <div>
            <a href="/ev-charging-station-business" style={styles.ctaButton}>
              Get EV Charging App
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <div style={styles.badge}>
              <svg
                style={styles.badgeIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              ₹ 80,000+ monthly income
            </div>
          </div>
        </div>

        {/* ── RIGHT (flow diagram) ── */}
        <div style={styles.right}>
          {/* Connector lines (behind cards) */}
          <img
            src="/Connector line1.svg"
            alt=""
            style={{
              ...styles.connector,
              top: connectorPositions.line1.top,
              left: connectorPositions.line1.left,
              width: connectorPositions.line1.width,
              height: connectorPositions.line1.height,
            }}
          />
          <img
            src="/Connector line2.svg"
            alt=""
            style={{
              ...styles.connector,
              top: connectorPositions.line2.top,
              left: connectorPositions.line2.left,
              width: connectorPositions.line2.width,
              height: connectorPositions.line2.height,
            }}
          />
          <img
            src="/Connector line3.svg"
            alt=""
            style={{
              ...styles.connector,
              top: connectorPositions.line3.top,
              left: connectorPositions.line3.left,
              width: connectorPositions.line3.width,
              height: connectorPositions.line3.height,
            }}
          />

          {/* Feature cards */}
          <FeatureCard
            icon="/siteFeasibitly.svg"
            label="Site Feasibility & Layout Planning"
            style={{
              top: cardPositions.siteFeasibility.top,
              left: cardPositions.siteFeasibility.left,
            }}
          />
          <FeatureCard
            icon="/operations.svg"
            label="Operations Dashboard & Remote Control"
            style={{
              top: cardPositions.operations.top,
              left: cardPositions.operations.left,
            }}
          />
          <FeatureCard
            icon="/Chargerhardware.svg"
            label="Charger Hardware + Installation Support"
            style={{
              top: cardPositions.chargerHardware.top,
              left: cardPositions.chargerHardware.left,
            }}
          />
          <FeatureCard
            icon="/billingPayments.svg"
            label="Billing, Payments & Settlements"
            style={{
              top: cardPositions.billing.top,
              left: cardPositions.billing.left,
            }}
          />
        </div>
      </div>
    </section>
  );
}
