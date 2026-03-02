import React from "react";

/* ─── styles (kept separate for easy editing) ─── */

// 80,240, 480

const styles = {
  section: {
    position: "relative" as const,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    padding: "80px 0",
  },
  container: {
    margin: "0 auto",
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
    borderRadius: 10.72,
    border: "1px solid #ddd",
    padding: "12px 28px",
    fontSize: 14,
    fontWeight: 600,
    color: "#131313",
    marginTop: 20,
    marginLeft: -4, // Slight left offset to align with button
  },
  badgeIcon: {
    width: 18,
    height: 18,
  },
};

/* ─── Main Section ─── */

export default function Home_SectionD_Business() {
  return (
    <section style={styles.section}>
      <div className="sectiond-container" style={styles.container}>
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
            <a href="https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN" target="_blank" rel="noopener noreferrer" style={styles.ctaButton}>
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

        {/* ── RIGHT ── */}
        <div
          style={{
            flex: "1 1 500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/Group 27823.svg"
            alt="EV Charging Business"
            style={{ width: "100%", maxWidth: 520, height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
