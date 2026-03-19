import React, { useEffect, useState } from "react";

export default function SecondScroll() {
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

  const desktopSidePaddingClass = isScale125Like
    ? "px-[64px] min-[1960px]:px-[220px] min-[2400px]:px-[440px]"
    : "px-[80px] min-[1960px]:px-[240px] min-[2400px]:px-[480px]";

  const oneAppTextStyle: React.CSSProperties = {
    fontFamily: "'TT Fors Trial', sans-serif",
    fontWeight: 400,
    fontSize: isScale125Like ? "20px" : "26px",
    lineHeight: isScale125Like ? "30px" : "38px",
    letterSpacing: "0.2%",
    color: "#0D0D0D",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "'ITC Avant Garde Gothic Std', sans-serif",
    fontWeight: 600,
    fontSize: isScale125Like ? "48px" : "62px",
    lineHeight: isScale125Like ? "58px" : "74px",
    letterSpacing: "-0.4%",
    color: "#0D0D0D",
  };

  const primaryButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "10.72px",
    padding: isScale125Like ? "9px 18px" : "12px 24px",
    backgroundColor: "#E50000",
    opacity: 0.99,
    fontFamily: "'TT Fors Trial', sans-serif",
    fontWeight: 400,
    fontSize: isScale125Like ? "17px" : "21px",
    lineHeight: isScale125Like ? "26px" : "32px",
    letterSpacing: "0.2%",
    color: "#FFFFFF",
  };

  const secondaryButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "10.72px",
    padding: isScale125Like ? "9px 18px" : "12px 24px",
    border: "1.21px solid #F2F2F2",
    backgroundColor: "#FFFFFF",
    opacity: 0.99,
    boxShadow: "0px 1px 17.1px 0px #00000024",
    fontFamily: "'TT Fors Trial', sans-serif",
    fontWeight: 400,
    fontSize: isScale125Like ? "17px" : "21px",
    lineHeight: isScale125Like ? "26px" : "32px",
    letterSpacing: "0.2%",
    color: "#0C0C0C",
  };

  return (
    <section
      id="ev-home-charging"
      className="relative min-h-screen bg-[#F5F5F5] overflow-hidden"
    >
      {/* Full-width horizontal red line */}
      <div
        className="absolute left-0 right-0"
        style={{ bottom: "10%", height: "0.6px", backgroundColor: "#F16363" }}
      />
      {/* Clip container: hides everything below the horizontal line */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{ top: "90.1%", backgroundColor: "#F5F5F5" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen flex items-center">
        <div className={`w-full mx-auto ${desktopSidePaddingClass}`}>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            {/* Left column */}
            <div className="xl:col-span-5 flex flex-col">
              {/* One App, Every Network */}
              <div className="flex items-center gap-2">
                <img src="/bolt.png" alt="" className="h-5 w-5" />
                <span style={oneAppTextStyle}>One App, Every Network</span>
              </div>

              {/* Heading */}
              <h2 className="mt-4" style={headingStyle}>
                Install Your Personal EV
                <br />
                Charger at Home
              </h2>

              {/* Spacer to push arrow + buttons to bottom */}
              <div style={{ marginTop: isScale125Like ? "132px" : "172px" }}>
                {/* Arrow */}
                <img
                  src="/arrow_insert.svg"
                  alt=""
                  className="w-auto"
                  style={{ height: isScale125Like ? "118px" : "152px" }}
                />

                {/* Buttons */}
                <div
                  className="mt-6 flex flex-wrap items-center"
                  style={{ gap: isScale125Like ? "12px" : "16px" }}
                >
                  <a
                    href="/ev-charging-station-business#choose"
                    style={primaryButtonStyle}
                  >
                    Get My Home Charger
                  </a>
                  <a
                    href="/ev-charging-station-business#choose"
                    style={secondaryButtonStyle}
                  >
                    View Installation Guide
                  </a>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="xl:col-span-7 flex items-center justify-center">
              <img
                src="/Group 27821.svg"
                alt="EV Home Charger"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fallback: xl grid above stacks naturally on smaller screens */}
    </section>
  );
}
