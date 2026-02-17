import React from "react";
import { Check, Shield, Zap, BadgePercent } from "lucide-react";

const plans = [
  {
    name: "Elite",
    price: "₹1299",
    original: "₹1399",
    duration: "for 12 months",
    highlight: true,
  },
  {
    name: "Pro",
    price: "₹749",
    original: "₹849",
    duration: "for 6 months",
  },
  {
    name: "Starter",
    price: "₹149",
    original: "₹249",
    duration: "for 1 month",
  },
];

const benefits = [
  {
    title: "10% Flat Cashback",
    desc: "Every time you charge your EV",
    icon: <BadgePercent className="h-5 w-5" />,
  },
  {
    title: "Priority Customer Support",
    desc: "Faster resolution and dedicated help",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Free Session Alerts",
    desc: "Get notified before a session ends",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "VIP Queue Access",
    desc: "Skip the line at premium stations",
    icon: <Check className="h-5 w-5" />,
  },
  {
    title: "Member-Only Deals",
    desc: "Exclusive discounts on accessories",
    icon: <BadgePercent className="h-5 w-5" />,
  },
  {
    title: "Extended Support Hours",
    desc: "Longer hours for priority members",
    icon: <Shield className="h-5 w-5" />,
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(255,190,125,0.20)] blur-[140px]" />
          <div className="absolute -top-10 right-0 h-[420px] w-[620px] bg-gradient-to-r from-[rgba(255,168,110,0.18)] via-[rgba(255,168,110,0.06)] to-transparent blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_20%_20%,rgba(255,180,120,0.15),transparent_60%),radial-gradient(800px_520px_at_80%_10%,rgba(255,220,160,0.10),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 py-20">
          <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">Subscribe to</div>
            <h1 className="mt-1 text-[44px] font-extrabold tracking-[0.12em] text-[#f2c4a0] md:text-[56px]">
              ELITE
            </h1>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/70">
              <Zap className="h-4 w-4" />
              Subscription Plans
              <Zap className="h-4 w-4" />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[28px] border px-6 py-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                  plan.highlight
                    ? "border-[rgba(255,190,125,0.45)] bg-[rgba(17,18,22,0.8)]"
                    : "border-white/15 bg-[rgba(17,18,22,0.65)]"
                }`}
              >
                <div className="text-[28px] font-semibold text-[#f2c4a0]">{plan.price}</div>
                <div className="mt-2 text-sm text-white/45 line-through">{plan.original}</div>
                <div className="mt-3 text-sm text-white/80">{plan.duration}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-white/70">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
              i
            </span>
            <span>Only for Personal Use, Commercial Use is Prohibited</span>
          </div>

          <div className="mt-14 flex items-center justify-center gap-3 text-white/60">
            <Zap className="h-4 w-4" />
            <div className="text-xs uppercase tracking-[0.28em]">Benefits</div>
            <Zap className="h-4 w-4" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[rgba(17,18,22,0.6)] p-6"
              >
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f2c4a0]">
                  {b.icon}
                </div>
                <div>
                  <div className="text-[18px] font-semibold text-white">{b.title}</div>
                  <div className="mt-1 text-sm text-white/60">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="rounded-full bg-gradient-to-r from-[#f2c4a0] via-[#f0b88f] to-[#eaa981] px-10 py-3 text-sm font-semibold text-[#191b21] shadow-[0_16px_40px_rgba(242,196,160,0.25)]">
              JOIN ELITE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
