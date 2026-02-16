import React from "react";
import {
  Zap,
  MapPin,
  Power,
  CreditCard,
  Users,
  BatteryCharging,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";

import appMockup from "../../assets/1cMockupA_23.png";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

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
    "group relative inline-flex items-center justify-center gap-2 rounded-mcn-xl px-5 py-2.5 text-mt-down-1 font-semibold text-mcn-text-inverse " +
    "bg-mcn-red shadow-[0_14px_40px_rgba(229,0,0,0.28)] " +
    "ring-1 ring-[rgba(229,0,0,0.30)] " +
    "transition duration-normal ease-out-standard " +
    "hover:bg-mcn-red-hover hover:shadow-[0_16px_48px_rgba(229,0,0,0.34)] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-mcn-red " +
    "active:translate-y-[1px] " +
    className;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        <span className="pointer-events-none absolute inset-0 rounded-mcn-xl bg-[radial-gradient(70%_80%_at_30%_20%,rgba(255,255,255,0.30),rgba(255,255,255,0)_60%)] opacity-70" />
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

export default function EVChargingAppSection() {
  // ✅ using the imported image directly
  const imageSrc = appMockup;

  return (
    <section className="relative w-full bg-mcn-ink-surface py-8 md:py-10">
      {/* Optional: keep the electric glow, but apply it to the SECTION background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(980px_560px_at_20%_10%,rgba(0,209,255,0.12),transparent_60%),radial-gradient(860px_520px_at_88%_22%,rgba(30,255,136,0.10),transparent_62%),radial-gradient(1100px_720px_at_40%_115%,rgba(37,99,235,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.08]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-10">
          {/* LEFT */}
          <div className="flex min-h-full flex-1 flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-mcn-ink-glass px-3 py-1.5 text-sm font-semibold tracking-wide text-mcn-ink-text-secondary backdrop-blur-mcn">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)]">
                <Zap size={16} className="text-[rgba(0,209,255,0.95)]" />
              </span>
              EV Charging App
            </div>

            <h3 className="mt-4 font-heading font-semibold text-mcn-ink-text-primary text-[30px] leading-[1.08] md:text-[38px] md:leading-[1.06] lg:text-[46px] lg:leading-[1.04]">
              Get 1C Charging App
            </h3>

            <div className="mt-3 font-semibold text-mcn-ink-text-primary text-[17px] leading-[1.25] md:text-[20px] lg:text-[23px]">
              One App For All Activities
            </div>

            <p className="mt-2 max-w-[62ch] text-mt-base leading-7 text-mcn-ink-text-muted">
              Control all charging activities from single app in your phone.
            </p>

            <div className="my-5 h-px w-full bg-mcn-ink-stroke-softer" />

            <ul className="grid gap-3 text-mt-base text-mcn-ink-text-secondary">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-mcn-lg bg-[rgba(255,255,255,0.06)]">
                  <MapPin size={19} className="text-[rgba(30,255,136,0.90)]" />
                </span>
                Locate Chargers
              </li>

              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-mcn-lg bg-[rgba(255,255,255,0.06)]">
                  <Power size={19} className="text-[rgba(0,209,255,0.90)]" />
                </span>
                Start &amp; Stop
              </li>

              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-mcn-lg bg-[rgba(255,255,255,0.06)]">
                  <CreditCard size={19} className="text-[rgba(37,99,235,0.92)]" />
                </span>
                Pay for Charging
              </li>

              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-mcn-lg bg-[rgba(255,255,255,0.06)]">
                  <Users size={19} className="text-[rgba(255,255,255,0.82)]" />
                </span>
                Join Community
              </li>

              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-mcn-lg bg-[rgba(255,255,255,0.06)]">
                  <BatteryCharging size={19} className="text-[rgba(30,255,136,0.90)]" />
                </span>
                Battery Health
              </li>
            </ul>

            <div className="mt-6">
              <RedGlowButton
                href={PLAYSTORE_URL}
                rightIcon={<ArrowRight size={18} />}
              >
                Get EV Charging App
              </RedGlowButton>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-[360px] lg:w-[420px]">
            <div
              className={[
                "aspect-[2/3] w-full",
                "max-h-[320px] sm:max-h-[360px] md:max-h-none",
                "overflow-hidden rounded-mcn-2xl",
                "shadow-[0_18px_50px_rgba(0,0,0,0.40)]",
              ].join(" ")}
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="1C EV Charging App"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center bg-mcn-ink-glass backdrop-blur-mcn">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_520px_at_30%_20%,rgba(0,209,255,0.12),transparent_60%),radial-gradient(620px_440px_at_75%_30%,rgba(30,255,136,0.10),transparent_62%)]" />
                  <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] opacity-[0.10]" />

                  <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] text-mcn-ink-text-secondary">
                      <ImageIcon size={20} />
                    </span>
                    <div className="text-sm font-semibold text-mcn-ink-text-primary">
                      App Screenshot
                    </div>
                    <div className="text-xs leading-5 text-mcn-ink-text-faint">
                      Add an image to replace this glass placeholder.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* /right */}
        </div>
      </div>
    </section>
  );
}
