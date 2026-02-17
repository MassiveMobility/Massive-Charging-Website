import React from "react";

export default function WhyMassiveHero({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <section className="relative text-center">


      
    

      <div className="relative container px-6 py-12 md:py-16">


        {/* ===== Title ===== */}
        <h2
          className={[
            "font-heading text-pf-up-4 md:text-pf-up-4 leading-tight",
            isDark ? "text-white" : "text-mcn-text-primary",
          ].join(" ")}
        >
          Why Set Up a Charging Station with{" "}
          <span className="text-mcn-red drop-shadow-[0_0_12px_rgba(229,0,0,0.6)]">
            Massive
          </span>
        </h2>

        {/* ===== Body ===== */}
        <p
          className={[
            "mx-auto mt-6 max-w-2xl font-sans text-pf-up-1",
            isDark ? "text-white/75" : "text-mcn-text-muted",
          ].join(" ")}
        >
          Massive helps you launch, operate, and grow a charging station
          with proven execution, deep EV market understanding,
          reliable vendor selection, strong safety standards,
          and revenue optimization support.
        </p>

        {/* ===== Stats Cards ===== */}
       <div className="mt-8 mx-auto max-w-4xl grid gap-4 md:grid-cols-3">

          {/* 1000+ */}
          <div className="group rounded-mcn-xl bg-mcn-surface3 p-8 shadow-mcn-card transition duration-normal ease-out hover:-translate-y-2 hover:shadow-mcn-overlay">
            <p className="font-heading text-pf-up-2 text-electric-accent-green drop-shadow-[0_0_15px_rgba(30,255,136,0.7)]">
              1000+
            </p>
            <p className="mt-2 text-mt-down-1 text-mcn-text-muted">
              Charging points deployed
            </p>
          </div>

          {/* 100s */}
          <div className="group rounded-mcn-xl bg-mcn-surface3 p-8 shadow-mcn-card transition duration-normal ease-out hover:-translate-y-2 hover:shadow-mcn-overlay">
            <p className="font-heading text-pf-up-2 text-electric-accent-cyan">
              100s
            </p>
            <p className="mt-2 text-mt-down-1 text-mcn-text-muted">
              Chargers deployed across India
            </p>
          </div>

          {/* In-house */}
          <div className="group rounded-mcn-xl bg-mcn-surface3 p-8 shadow-mcn-card transition duration-normal ease-out hover:-translate-y-2 hover:shadow-mcn-overlay">
            <p className="font-heading text-pf-up-2 text-electric-accent-ionBlue">
              In-house
            </p>
            <p className="mt-2 text-mt-down-1 text-mcn-text-muted">
              Software + monitoring stack
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
