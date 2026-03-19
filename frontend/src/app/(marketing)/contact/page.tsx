import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact Massive Charging",
  description:
    "Connect with Massive Charging to discuss EV charging deployment scope, operational needs, and launch timelines.",
  path: "/contact"
});

const intakeChecklist = [
  "Target city or region for deployment",
  "Expected charger count and projected utilization",
  "Launch timeline and operational constraints"
];

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title" className="hero">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-title">Start a deployment conversation</h1>
        <p className="lead">
          Share your charging goals and constraints so the team can scope the right rollout strategy.
        </p>
      </section>

      <section aria-labelledby="intake-title" className="surface">
        <h2 id="intake-title">What to include in your request</h2>
        <ul className="checklist">
          {intakeChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
