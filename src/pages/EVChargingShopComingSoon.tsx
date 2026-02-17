import React from "react";

const EVChargingShopComingSoon = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#121418] text-white flex items-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_10%,rgba(0,209,255,0.14),transparent_60%),radial-gradient(900px_520px_at_85%_20%,rgba(30,255,136,0.12),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.18),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.00),rgba(255,255,255,0.04))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-20">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            EV Charging Shop
          </div>
          <h1 className="mt-5 text-[48px] font-extrabold leading-tight tracking-tight text-white">
            Coming Soon
          </h1>
          <p className="mt-4 text-[18px] text-white/70">
            We’re building a focused marketplace for chargers, accessories, and installation kits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EVChargingShopComingSoon;
