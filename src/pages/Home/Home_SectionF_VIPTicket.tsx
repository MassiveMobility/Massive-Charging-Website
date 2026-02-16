import React from "react";
import { Link } from "react-router-dom";

function SparkIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l2.5 5 5 2.5-5 2.5L12 18l-2.5-5L4.5 10.5l5-2.5L12 3Z"
      />
    </svg>
  );
}

export default function Home_SectionF_VIPMembership() {
  const content = {
    kicker: "Exclusive Membership",
    heading: "Become an Elite Member",
    description:
      "Premium perks, priority access, and better savings every time you charge.",
    cta: "Get Massive Membership",
    list: [
      "Charging Discounts",
      "Charging Pass",
      "Access to Premium Stations",
      "Points on Each Charge",
      "Discount on Hardware",
    ],
  };

  return (
    <section className="relative w-full bg-[#050607] py-14 md:py-20">
      {/* Subtle premium glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[rgba(255,215,110,0.12)] blur-3xl" />
        <div className="absolute -bottom-48 left-1/4 h-[520px] w-[520px] rounded-full bg-[rgba(255,175,60,0.10)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Kicker */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[rgba(255,215,110,0.12)] px-4 py-1 text-xs font-semibold text-[rgba(255,215,110,0.95)]">
          {content.kicker}
        </div>

        {/* Heading */}
        <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {content.heading}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 md:text-base">
          {content.description}
        </p>

        {/* Benefits grid */}
        <div
          className="
            mx-auto mt-8 grid max-w-3xl gap-3
            sm:grid-cols-2
            [&>*:last-child]:sm:col-span-2
            [&>*:last-child]:sm:justify-self-center
          "
        >
          {content.list.map((item) => (
            <div
              key={item}
              className="
                flex items-center justify-center gap-3
                rounded-2xl bg-white/5 backdrop-blur-mcn
                px-5 py-3
              "
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[rgba(255,215,110,0.14)] text-[rgba(255,215,110,0.95)]">
                <SparkIcon />
              </span>
              <span className="text-sm font-semibold text-white/85">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            to="/plans-offers"
            className="
              inline-flex items-center justify-center rounded-mcn-lg
              px-8 py-3 font-semibold
              text-[#1a1200]
              bg-[linear-gradient(135deg,#FFD36A,#FFB400)]
              shadow-[0_18px_60px_rgba(255,180,0,0.28)]
              transition hover:-translate-y-[1px]
            "
          >
            {content.cta}
          </Link>

          <div className="text-xs text-white/55">
            Instant Activation • Cancel Anytime
          </div>
        </div>
      </div>
    </section>
  );
}