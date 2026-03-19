import React, { useMemo } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CreditCard,
  MapPin,
  QrCode,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

// NOTE:
// - Tailwind is treated as global + absolute (no page-specific CSS).
// - Electric Dawn theme tokens are expressed via cool surfaces + controlled glow.
// - Primary CTA uses a red-glow button (matches your existing mcn.red tokens).

type Stat = { k: string; v: string; hint?: string; icon?: React.ReactNode };

// ✅ UPDATED: supports `href` so it can navigate to PLAYSTORE_URL
type RedGlowButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    rightIcon?: React.ReactNode;
    href?: string;
  };

const RedGlowButton: React.FC<RedGlowButtonProps> = ({
  className = "",
  children,
  rightIcon,
  href,
  ...props
}) => {
  const classes =
    "group relative inline-flex items-center justify-center gap-2 rounded-mcn-xl px-5 py-3 text-mt-down-1 font-semibold text-mcn-text-inverse " +
    "bg-mcn-red shadow-[0_14px_40px_rgba(229,0,0,0.28)] " +
    "ring-1 ring-[rgba(229,0,0,0.30)] " +
    "transition duration-normal ease-out-standard " +
    "hover:bg-mcn-red-hover hover:shadow-[0_16px_48px_rgba(229,0,0,0.34)] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-mcn-red " +
    "active:translate-y-[1px] " +
    className;

  // ✅ NEW: render as <a> when href is provided
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {/* subtle inner highlight */}
        <span className="pointer-events-none absolute inset-0 rounded-mcn-xl bg-[radial-gradient(70%_80%_at_30%_20%,rgba(255,255,255,0.30),rgba(255,255,255,0)_60%)] opacity-70" />
        {/* controlled glow edge */}
        <span className="pointer-events-none absolute -inset-0.5 rounded-[22px] bg-[radial-gradient(60%_80%_at_50%_50%,rgba(229,0,0,0.40),rgba(229,0,0,0)_70%)] opacity-60 blur-md transition group-hover:opacity-75" />
        <span className="relative z-10">{children}</span>
        {rightIcon ? (
          <span className="relative z-10 transition group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        ) : null}
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      {/* subtle inner highlight */}
      <span className="pointer-events-none absolute inset-0 rounded-mcn-xl bg-[radial-gradient(70%_80%_at_30%_20%,rgba(255,255,255,0.30),rgba(255,255,255,0)_60%)] opacity-70" />
      {/* controlled glow edge */}
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

// ✅ UPDATED: supports `href` so it can navigate to PLAYSTORE_URL
type GlowOutlineButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: React.ReactNode;
    href?: string;
  };

const GlowOutlineButton: React.FC<GlowOutlineButtonProps> = ({
  className = "",
  children,
  leftIcon,
  href,
  ...props
}) => {
  const classes =
    "group relative inline-flex items-center justify-center gap-2 rounded-mcn-xl px-5 py-3 text-mt-down-1 font-semibold " +
    "bg-[rgba(255,255,255,0.70)] text-mcn-text-primary " +
    "ring-1 ring-[rgba(13,27,42,0.14)] " +
    "shadow-[0_10px_30px_rgba(13,27,42,0.08)] " +
    "transition duration-normal ease-out-standard " +
    "hover:bg-white hover:shadow-[0_14px_40px_rgba(13,27,42,0.12)] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-mcn-blue " +
    className;

  // ✅ NEW: render as <a> when href is provided
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        <span className="pointer-events-none absolute inset-0 rounded-mcn-xl bg-[radial-gradient(70%_80%_at_20%_20%,rgba(0,209,255,0.18),rgba(0,209,255,0)_55%)] opacity-80" />
        <span className="pointer-events-none absolute -inset-0.5 rounded-[22px] bg-[radial-gradient(70%_80%_at_50%_40%,rgba(30,255,136,0.20),rgba(0,209,255,0.00)_70%)] opacity-50 blur-md transition group-hover:opacity-70" />
        {leftIcon ? <span className="relative z-10">{leftIcon}</span> : null}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      <span className="pointer-events-none absolute inset-0 rounded-mcn-xl bg-[radial-gradient(70%_80%_at_20%_20%,rgba(0,209,255,0.18),rgba(0,209,255,0)_55%)] opacity-80" />
      <span className="pointer-events-none absolute -inset-0.5 rounded-[22px] bg-[radial-gradient(70%_80%_at_50%_40%,rgba(30,255,136,0.20),rgba(0,209,255,0.00)_70%)] opacity-50 blur-md transition group-hover:opacity-70" />
      {leftIcon ? <span className="relative z-10">{leftIcon}</span> : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const StatCard: React.FC<Stat> = ({ k, v, hint, icon }) => {
  return (
      <div className="rounded-mcn-lg border border-[rgba(13,27,42,0.10)] bg-[rgba(255,255,255,0.70)] px-3 py-3 shadow-[0_12px_30px_rgba(13,27,42,0.08)] backdrop-blur-mcn">
      <div className="flex items-center gap-2 text-mt-down-1 text-[rgba(13,27,42,0.70)]">
        <span className="text-[rgba(37,99,235,0.90)]">{icon}</span>
        <span>{k}</span>
      </div>
      <div className="mt-2 text-mt-up-1 font-semibold text-[rgba(13,27,42,0.92)]">
        {v}
      </div>
      {hint ? (
        <div className="mt-1 text-mt-down-2 text-[rgba(13,27,42,0.58)]">
          {hint}
        </div>
      ) : null}
    </div>
  );
};

const ElectricDawnBackdrop: React.FC<{ variant?: "light" | "dark" }> = ({
  variant = "light",
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

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#F4F7FA]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_20%_10%,rgba(0,209,255,0.14),transparent_58%),radial-gradient(1000px_620px_at_85%_15%,rgba(30,255,136,0.12),transparent_60%),radial-gradient(1200px_700px_at_40%_110%,rgba(37,99,235,0.16),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.70),rgba(255,255,255,0.20),rgba(255,255,255,0.65))] opacity-70" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(13,27,42,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,27,42,0.08)_1px,transparent_1px)] [background-size:72px_72px] opacity-[0.18]" />
    </div>
  );
};

const UPIChargingPage: React.FC = () => {
  const stats: Stat[] = useMemo(
    () => [
      { k: "Stations", v: "100+", hint: "UPI-enabled", icon: <MapPin size={16} /> },
      {
        k: "Start time",
        v: "< 20s",
        hint: "scan to charge",
        icon: <QrCode size={16} />,
      },
      {
        k: "Payments",
        v: "UPI",
        hint: "no wallets",
        icon: <CreditCard size={16} />,
      },
      {
        k: "Secure",
        v: "Verified",
        hint: "Verified Card",
        icon: <ShieldCheck size={16} />,
      },
    ],
    []
  );

  const steps = useMemo(
    () => [
      {
        title: "Scan the QR",
        body: "Open any UPI app and scan the charger QR.",
        icon: <QrCode size={18} />,
      },
      {
        title: "Confirm the session",
        body: "Review connector, tariff, and session details before you pay.",
        icon: <Check size={18} />,
      },
      {
        title: "Start charging",
        body: "Power starts instantly and the session status updates live.",
        icon: <BatteryCharging size={18} />,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#F4F7FA] text-[rgba(13,27,42,0.92)]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <ElectricDawnBackdrop variant="light" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* Left */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(13,27,42,0.12)] bg-[rgba(255,255,255,0.72)] px-3 py-1.5 text-mt-down-1 shadow-[0_10px_24px_rgba(13,27,42,0.08)] backdrop-blur-mcn">
                <span className="text-[rgba(30,255,136,0.92)]">
                  <Zap size={16} />
                </span>
                <span className="text-[rgba(13,27,42,0.72)]">
                  Quick on-the-go charging
                </span>
              </div>

              <h1 className="mt-6 font-heading text-pf-up-4 leading-[1.05] tracking-[-0.02em] text-[rgba(13,27,42,0.95)] md:text-pf-up-5">
                Scan UPI &amp; Charge EV
              </h1>
              <p className="mt-6 max-w-xl text-mt-up-1 text-[rgba(13,27,42,0.68)]">
                No app installation required. Pay from any UPI app and start a
                verified charging session in seconds.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <RedGlowButton rightIcon={<ArrowRight size={16} />}>
                  Find UPI chargers
                </RedGlowButton>

                {/* ✅ UPDATED: now uses PLAYSTORE_URL */}
                <GlowOutlineButton
                  href={PLAYSTORE_URL}
                  leftIcon={<Smartphone size={18} />}
                >
                  Get 1C EV App
                </GlowOutlineButton>
              </div>

              <p className="mt-8 max-w-xl text-mt-down-2 text-[rgba(13,27,42,0.55)]">
                *Availability varies by location and connector type.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* controlled glow behind the stats panel */}
                <div className="pointer-events-none absolute -inset-8 rounded-[32px] bg-[radial-gradient(55%_60%_at_30%_25%,rgba(0,209,255,0.18),transparent_60%),radial-gradient(55%_60%_at_70%_35%,rgba(30,255,136,0.14),transparent_62%),radial-gradient(80%_80%_at_50%_70%,rgba(37,99,235,0.18),transparent_65%)] blur-2xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-[rgba(13,27,42,0.12)] bg-[rgba(255,255,255,0.68)] shadow-[0_18px_55px_rgba(13,27,42,0.14)] backdrop-blur-mcn">
                  <div className="flex items-center justify-between border-b border-[rgba(13,27,42,0.10)] px-6 py-5">
                    <div className="flex items-center gap-2 text-mt-down-1 text-[rgba(13,27,42,0.75)]">
                      <span className="text-[rgba(0,209,255,0.95)]">
                        <Zap size={18} />
                      </span>
                      Fast facts
                    </div>
                    <div className="rounded-full bg-[rgba(30,255,136,0.10)] px-3 py-1 text-mt-down-2 font-medium text-[rgba(30,255,136,0.95)]">
                      UPI Ready
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {stats.map((s) => (
                        <StatCard key={s.k} {...s} />
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-2 rounded-mcn-lg border border-[rgba(0,209,255,0.22)] bg-[rgba(0,209,255,0.08)] px-4 py-3 text-mt-down-2 text-[rgba(13,27,42,0.72)]">
                      <span className="text-[rgba(0,209,255,0.95)]">
                        <ShieldCheck size={16} />
                      </span>
                      Scan with any UPI app. Confirm &amp; start in seconds.
                    </div>
                  </div>
                </div>

                {/* bottom label */}
                <div className="mt-6 flex items-center justify-between text-mt-down-2 text-[rgba(13,27,42,0.55)]">
                  <span className="inline-flex items-center gap-2">
                    <BatteryCharging size={14} />
                    UPI-enabled chargers
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} />
                    Discover nearby
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (purposeful dark block) */}
      <section className="relative overflow-hidden">
        <ElectricDawnBackdrop variant="dark" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-20 md:px-6 py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-mt-down-1 text-white backdrop-blur-mcn">
                <span className="text-[rgba(30,255,136,0.95)]">
                  <Zap size={16} />
                </span>
                Charge EV With UPI
              </div>
              <h2 className="mt-6 font-heading text-pf-up-3 tracking-[-0.02em] text-white">
                Built for fast starts,
                <br className="hidden sm:block" />
                not app fatigue.
              </h2>
              <p className="mt-5 max-w-md text-mt-base text-white/80">
                Massive UPI Charging lets you start EV Charger directly from PayTM,
                PhonePay, Gpay, etc allowing you to begin charging session in seconds.
                Skip juggling between apps - charge with UPI.
              </p>

              <div className="mt-5 flex items-center gap-6">
                <GlowOutlineButton leftIcon={<Search size={18} />}>
                  Locate chargers
                </GlowOutlineButton>
                <div className="text-mt-down-1 text-white/80">
                  Works with any UPI app.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-12 md:grid-cols-3">
                {steps.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-[22px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-mt-down-2 text-white/85">
                      <span className="text-[rgba(0,209,255,0.95)]">{s.icon}</span>
                    </div>
                    <div className="mt-5 text-mt-up-1 font-semibold text-white">
                      {s.title}
                    </div>
                    <div className="mt-3 text-mt-down-1 text-white/80">
                      {s.body}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 rounded-[26px] border border-white/10 bg-white/5 p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-mt-up-2 font-semibold text-white">
                      One app to rule them all
                    </div>
                    <div className="mt-3 max-w-xl text-mt-down-1 text-white/80">
                      Skip juggling multiple wallets and fragmented networks. Use the
                      1C EV App for discovery, receipts, and a unified charging history.
                    </div>
                  </div>

                  {/* ✅ UPDATED: now uses PLAYSTORE_URL */}
                  <RedGlowButton
                    href={PLAYSTORE_URL}
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Get 1C EV App
                  </RedGlowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UPIChargingPage;

