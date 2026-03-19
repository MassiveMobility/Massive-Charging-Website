import React, { useEffect, useState } from "react";

export default function Home_SectionD_Business() {
  const [isScale125Like, setIsScale125Like] = useState(false);

  useEffect(() => {
    const updateDesktopScale = () => {
      const width = window.innerWidth;
      setIsScale125Like(width >= 1280 && width <= 1700);
    };

    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);
    return () => window.removeEventListener("resize", updateDesktopScale);
  }, []);

  const sectionStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    padding: isScale125Like ? "74px 0" : "102px 0",
  };

  const containerStyle: React.CSSProperties = {
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: isScale125Like ? 40 : 56,
    flexWrap: "wrap",
  };

  const leftStyle: React.CSSProperties = {
    flex: "1 1 440px",
    minWidth: 320,
    maxWidth: isScale125Like ? 560 : 680,
  };

  const kickerStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 18,
    border: "1px solid #B5BCC58F",
    padding: isScale125Like ? "4px 16px" : "5px 20px",
    fontSize: isScale125Like ? 15 : 18,
    lineHeight: isScale125Like ? "22px" : "26px",
    letterSpacing: "0.3%",
    color: "#131313",
    fontWeight: 400,
    marginBottom: isScale125Like ? 24 : 30,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: isScale125Like ? 50 : 68,
    fontWeight: 800,
    lineHeight: isScale125Like ? 1.08 : 1.06,
    color: "#0a0a0a",
    letterSpacing: "-0.02em",
    margin: 0,
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: isScale125Like ? 17 : 21,
    lineHeight: isScale125Like ? 1.6 : 1.7,
    color: "#555",
    marginTop: isScale125Like ? 16 : 20,
    maxWidth: isScale125Like ? 470 : 600,
  };

  const ctaButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isScale125Like ? "11px 26px" : "15px 34px",
    borderRadius: 10.72,
    backgroundColor: "#E50000",
    color: "#ffffff",
    fontSize: isScale125Like ? 16 : 20,
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: isScale125Like ? 26 : 36,
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 10.72,
    border: "1px solid #ddd",
    padding: isScale125Like ? "11px 24px" : "15px 32px",
    fontSize: isScale125Like ? 15 : 18,
    fontWeight: 600,
    color: "#131313",
    marginTop: isScale125Like ? 18 : 24,
    marginLeft: -4,
  };

  const badgeIconStyle: React.CSSProperties = {
    width: isScale125Like ? 18 : 22,
    height: isScale125Like ? 18 : 22,
  };

  const rightStyle: React.CSSProperties = {
    flex: "1 1 500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const rightImageStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: isScale125Like ? 540 : 650,
    height: "auto",
  };

  return (
    <section style={sectionStyle}>
      <div className="sectiond-container" style={containerStyle}>
        <div style={leftStyle}>
          <div style={kickerStyle}>Setup your charger and earn</div>

          <h2 style={headingStyle}>
            Start Your EV Charging
            <br />
            Business
          </h2>

          <p style={subheadingStyle}>
            Covert empty land into EV Charging Station and earn monthly income.
            Get Hardware and Software to run Charging Station.
          </p>

          <div>
            <a
              href="https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaButtonStyle}
            >
              Get EV Charging App
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={badgeStyle}>
              <svg
                style={badgeIconStyle}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Rs 80,000+ monthly income
            </div>
          </div>
        </div>

        <div style={rightStyle}>
          <img
            src="/Group 27823.svg"
            alt="EV Charging Business"
            style={rightImageStyle}
          />
        </div>
      </div>
    </section>
  );
}
