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
        <div className="w-full mx-auto px-[80px] min-[1960px]:px-[240px] min-[2400px]:px-[480px]">
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

            {/* ════ RIGHT COLUMN (7 cols) ════ */}
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

      {/* ─── Mobile fallback (no lines) ─── */}
      {/* The xl grid above handles desktop; on smaller screens it stacks naturally */}
    </section>
  );
}
