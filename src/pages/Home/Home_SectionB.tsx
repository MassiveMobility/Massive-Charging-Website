import React from "react";

// ✅ Use new PNG image
import HomeCharging from "../../assets/Home-Charging.png";

type FeatureIcon = "bolt" | "shield" | "phone" | "trendDown";

const Icon = ({
  name = "bolt",
  className = "h-4 w-4",
}: {
  name?: FeatureIcon;
  className?: string;
}) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
  };

  switch (name) {
    case "shield":
      return (
        <svg {...common} aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2 4 5v7c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V5l-8-3Z"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="7" y="2" width="10" height="20" rx="2" />
        </svg>
      );
    case "trendDown":
      return (
        <svg {...common} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4c0 6 4 10 10 10h8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6-4 4-6-6" />
        </svg>
      );
    case "bolt":
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
          />
        </svg>
      );
  }
};

type ContentSchema = {
  title: string;
  heading: string;
  body: string;
  badge: string;
  list: { text: string; icon: FeatureIcon }[];
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  image?: { src: string; alt: string };
};

export default function Home_SectionB_NewCard() {
  const content: ContentSchema = {
    title: "EV Home Charging",
    heading: "Install Your Personal EV Charger at Home",
    body: "Safe • Smart • Cost-Effective",
    badge: "Ideal for 1–2 EVs",
    list: [
      { text: "Dedicated AC Charging for Your EV", icon: "bolt" },
      { text: "Certified Safe Installation", icon: "shield" },
      { text: "Smart App-Based Monitoring", icon: "phone" },
      { text: "Lower Cost vs Public Charging", icon: "trendDown" },
    ],
    ctas: {
      primary: { label: "Get My Home Charger", href: "/ev-charging-station-business#choose" },
      secondary: { label: "View Installation Guide", href: "/ev-charging-station-business#choose" },
    },
    image: {
      src: HomeCharging,
      alt: "Home EV charging setup",
    },
  };

  return (
    <section className="container py-8 md:py-10">
      <div
        className="
          relative overflow-hidden rounded-mcn-xl
          bg-[rgba(11,11,12,0.72)] backdrop-blur-mcn
          border border-[rgba(255,255,255,0.16)]
          shadow-[0_22px_70px_rgba(0,0,0,0.35)]
        "
      >
        {/* hairline + ring */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
        <div className="pointer-events-none absolute inset-0 rounded-mcn-xl ring-1 ring-white/10" />

        {/* ✅ Mobile: text → image | Desktop: text → image */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-5 md:p-8 items-stretch">
          {/* TEXT — vertically centered, always left-aligned */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="font-heading text-mt-up-5 tracking-tight text-white">
              {content.title}
            </h2>

            <div className="mt-2 text-mt-up-2 font-semibold text-white/85">
              {content.heading}
            </div>

            <p className="mt-2 max-w-2xl text-mt-up-1 text-white/70">
              {content.body}
            </p>

            <div className="mt-4">
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 font-semibold text-white/75">
                {content.badge}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {content.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-mt-up-0 text-white/80">
                  <Icon name={item.icon} className="h-4 w-4 text-white/70" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={content.ctas.primary.href}
                className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-5 py-2.5 font-semibold text-white shadow-[0_10px_30px_rgba(229,0,0,0.22)] hover:bg-mcn-red-hover"
              >
                {content.ctas.primary.label}
              </a>

              <a
                href={content.ctas.secondary.href}
                className="inline-flex items-center justify-center rounded-mcn-lg border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white hover:bg-white/10"
              >
                {content.ctas.secondary.label}
              </a>
            </div>
          </div>

          {/* IMAGE — product frame (4:5), scaled down on mobile */}
          <div className="w-full md:w-auto flex justify-center">
            <div
              className="
                relative overflow-hidden rounded-mcn-xl
                bg-[rgba(17,17,20,0.86)]
                border border-[rgba(255,255,255,0.12)]
                shadow-[0_18px_50px_rgba(0,0,0,0.55)]
                w-[85%] sm:w-[320px] md:w-[360px]
                aspect-[4/5]
              "
            >
              <img
                src={content.image.src}
                alt={content.image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
