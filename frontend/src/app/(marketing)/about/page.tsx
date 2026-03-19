import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "About Massive Charging",
  description:
    "Learn how Massive Charging approaches EV charging deployment with reliability-first design, operational clarity, and long-term scalability.",
  path: "/about"
});

const operatingPrinciples = [
  "Reliability-first infrastructure planning for real-world charging demand",
  "Operational transparency through clear ownership and measurable service levels",
  "Future-ready architecture that supports growth in sites, fleets, and workflows"
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="hero">
        <p className="eyebrow">About</p>
        <h1 id="about-title">Built for dependable EV charging operations</h1>
        <p className="lead">
          Massive Charging focuses on delivering charging experiences that stay fast, reliable, and easy
          to operate as demand grows.
        </p>
      </section>

      <section aria-labelledby="principles-title" className="surface">
        <h2 id="principles-title">Operating principles</h2>
        <ul className="checklist">
          {operatingPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
