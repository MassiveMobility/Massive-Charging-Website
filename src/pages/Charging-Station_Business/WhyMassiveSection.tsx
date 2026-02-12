import React from "react";
import WhyMassiveHero from "./WhyMassiveHero";
import WhyMassiveCardsSection from "./WhyMassiveCardsSection";

export default function WhyMassiveSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">

      {/* VERY subtle midnight tint */}
      <div className="pointer-events-none absolute inset-0 bg-[#0f172a]/5" />

      {/* Soft grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15,23,42,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft cyan glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,209,255,0.12), transparent 60%)",
        }}
      />

      {/* Soft green glow */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(30,255,136,0.10), transparent 60%)",
        }}
      />

      <div className="relative">
        <WhyMassiveHero />
        <WhyMassiveCardsSection />
      </div>
    </section>
  );
}
