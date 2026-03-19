import React from "react";
import { ArrowRight, Search, Zap } from "lucide-react";

const ElectricDawnBackdrop: React.FC<{ variant?: "dark" | "light" }> = ({
  variant = "dark",
}) => {
  if (variant === "dark") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#121418]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(0,209,255,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(30,255,136,0.08),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />
      </div>
    );
  }
  return null;
};

const RedGlowButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { rightIcon?: React.ReactNode }
> = ({ className = "", children, rightIcon, ...props }) => {
  return (
    <button
      {...props}
      className={
        "group relative inline-flex items-center justify-center gap-2 rounded-mcn-xl px-5 py-3 text-mt-down-1 font-semibold text-mcn-text-inverse " +
        "bg-mcn-red shadow-[0_14px_40px_rgba(229,0,0,0.28)] " +
        "ring-1 ring-[rgba(229,0,0,0.30)] " +
        "transition duration-normal ease-out-standard " +
        "hover:bg-mcn-red-hover hover:shadow-[0_16px_48px_rgba(229,0,0,0.34)] " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-mcn-red " +
        "active:translate-y-[1px] " +
        className
      }
    >
      <span className="pointer-events-none absolute inset-0 rounded-mcn-xl bg-[radial-gradient(70%_80%_at_30%_20%,rgba(255,255,255,0.30),rgba(255,255,255,0)_60%)] opacity-70" />
      <span className="pointer-events-none absolute -inset-0.5 rounded-[22px] bg-[radial-gradient(60%_80%_at_50%_50%,rgba(229,0,0,0.40),rgba(229,0,0,0)_70%)] opacity-60 blur-md transition group-hover:opacity-75" />
      <span className="relative z-10">{children}</span>
      {rightIcon ? (
        <span className="relative z-10 transition group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      ) : null}
    </button>
  );
};

export default function HowItWorksSection() {
  const handleChooseSetup = () => {
    const target = document.getElementById("choose");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#choose";
    }
  };

  return (
    <section id="how-it-works" className="relative min-h-screen overflow-hidden">
      <ElectricDawnBackdrop variant="dark" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-5 font-heading text-[49px] leading-[1.05] tracking-[-0.02em] text-white">
            How It Works
          </h2>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "1) You bring the site",
              body: "A parking bay, a storefront, a society, a highway stop. If EVs pass by, you have a business.",
            },
            {
              title: "2) We deploy the stack",
              body: "Charger hardware + installation + software + payments + monitoring. Built for real operations.",
            },
            {
              title: "3) You earn per session",
              body: "Set tariffs, track usage, and get payouts. We keep the network healthy with support & maintenance.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-[22px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-md"
            >
              <div className="text-mt-up-1 font-semibold text-white">{s.title}</div>
              <div className="mt-2 text-mt-down-1 text-white/80">{s.body}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-md">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-mt-up-2 font-semibold text-white">Ready to become a CPO?</div>
              <div className="mt-2 max-w-xl text-mt-down-1 text-white/80">
                Start with your property type. In minutes you’ll know what to install,
                what it costs, and how it pays back.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-mcn-xl px-5 py-3 text-mt-down-1 font-semibold text-white/90 border border-white/10 bg-white/5">
                <Search size={18} />
                Locate chargers
              </button>
              <RedGlowButton rightIcon={<ArrowRight size={16} />} onClick={handleChooseSetup}>
                Choose a setup
              </RedGlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
