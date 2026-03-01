import React from "react";

const featureTextStyle: React.CSSProperties = {
  fontFamily: "'ITC Avant Garde Gothic Std', sans-serif",
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "32px",
  letterSpacing: "-0.2%",
  color: "#0D0D0D",
};

export default function SecondScroll() {
  return (
    <section
      id="ev-home-charging"
      className="relative min-h-screen bg-[#F5F5F5] overflow-hidden"
    >
      {/* ─── Full-width horizontal red line ─── */}
      <div
        className="absolute left-0 right-0"
        style={{ bottom: "10%", height: "0.6px", backgroundColor: "#F16363" }}
      />
      {/* ─── Clip container: hides everything below the horizontal line ─── */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{ top: "90.1%", backgroundColor: "#F5F5F5" }}
      />

      {/* Lines are rendered inside the right grid wrapper below */}

      {/* ─── Content ─── */}
      <div className="relative z-10 h-full min-h-screen flex items-center">
        <div className="w-full max-w-[1312px] mx-auto px-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            {/* ════ LEFT COLUMN (5 cols) ════ */}
            <div className="xl:col-span-5 flex flex-col">
              {/* One App, Every Network */}
              <div className="flex items-center gap-2">
                <img src="/bolt.png" alt="" className="h-5 w-5" />
                <span
                  style={{
                    fontFamily: "'TT Fors Trial', sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "0.2%",
                    color: "#0D0D0D",
                  }}
                >
                  One App, Every Network
                </span>
              </div>

              {/* Heading */}
              <h2
                className="mt-4"
                style={{
                  fontFamily: "'ITC Avant Garde Gothic Std', sans-serif",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "48px",
                  letterSpacing: "-0.4%",
                  color: "#0D0D0D",
                }}
              >
                Install Your Personal EV
                <br />
                Charger at Home
              </h2>

              {/* Spacer to push arrow + buttons to bottom */}
              <div className="mt-[140px]">
                {/* Arrow */}
                <img src="/arrow_insert.svg" alt="" className="h-30 w-auto" />

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <a
                    href="/ev-charging-station-business#choose"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      borderRadius: "10.72px",
                      padding: "8px 18px",
                      backgroundColor: "#E50000",
                      opacity: 0.99,
                      fontFamily: "'TT Fors Trial', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "26px",
                      letterSpacing: "0.2%",
                      color: "#FFFFFF",
                    }}
                  >
                    Get My Home Charger
                  </a>
                  <a
                    href="/ev-charging-station-business#choose"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      borderRadius: "10.72px",
                      padding: "8px 18px",
                      border: "1.21px solid #F2F2F2",
                      backgroundColor: "#FFFFFF",
                      opacity: 0.99,
                      boxShadow: "0px 1px 17.1px 0px #00000024",
                      fontFamily: "'TT Fors Trial', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "26px",
                      letterSpacing: "0.2%",
                      color: "#0C0C0C",
                    }}
                  >
                    View Installation Guide
                  </a>
                </div>
              </div>
            </div>

            {/* ════ RIGHT COLUMN (7 cols) – 4×2 feature grid ════ */}
            <div className="xl:col-span-7 relative xl:translate-x-20">
              {/* Vertical lines at column boundaries (0%, 25%, 50%, 75%) – bleed top & bottom */}
              {[0, 25, 50, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute hidden xl:block pointer-events-none z-20"
                  style={{
                    left: `${pct}%`,
                    top: "-50vh",
                    bottom: "-50vh",
                    width: "0.4px",
                    backgroundColor: "#F16363",
                  }}
                />
              ))}
              {/* Horizontal middle line */}
              <div
                className="absolute hidden xl:block pointer-events-none z-20"
                style={{
                  top: "42.5%",
                  left: 0,
                  right: 0,
                  height: "0.4px",
                  backgroundColor: "#F16363",
                }}
              />

              <div
                className="grid relative z-10"
                style={{
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gridTemplateRows: "0.85fr 1.15fr",
                  height: "420px",
                }}
              >
                {/* ── Row 1 ── */}
                <div
                  className="overflow-hidden"
                  style={{ borderTop: "0.1px solid #F16363" }}
                >
                  <img
                    src="/InstallTime.svg"
                    alt="Install time – 3-5 days"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <span style={featureTextStyle}>Safe</span>
                </div>
                <div className="w-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/Covergage.svg"
                    alt="Coverage – 1-2 EVs"
                    style={{ width: "110%", height: "100%" }}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <span style={{ ...featureTextStyle, fontSize: "24px" }}>
                    Cost-Effective
                  </span>
                </div>

                {/* ── Row 2 ── */}
                <div className="flex items-center justify-center">
                  <span style={featureTextStyle}>Smart</span>
                </div>
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src="/chargingType.svg"
                    alt="Charging type – AC 7.4-11KW"
                    className="absolute"
                    style={{
                      // top: "-5%",
                      // left: "-8%",
                      width: "116%",
                      // height: "100%",
                      objectFit: "fill",
                    }}
                  />
                </div>
                <div />
                <div className="w-full h-full" style={{}}>
                  <img
                    src="/Monitoring.svg"
                    alt="Monitoring – App+ Alerts"
                    className="w-full"
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile fallback (no lines) ─── */}
      {/* The xl grid above handles desktop; on smaller screens it stacks naturally */}
    </section>
  );
}
