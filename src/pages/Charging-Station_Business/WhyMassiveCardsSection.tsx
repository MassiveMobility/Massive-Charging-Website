import React from "react";
import WhyMassiveCard from "./WhyMassiveCard";

export default function WhyMassiveCardsSection() {
  const cards = [
    {
      icon: "⚡",
      title: "Deep Industry Expertise & Execution Strength",
      description:
        "Proven, on-ground execution at scale—backed by real network learnings and a future-ready approach.",
      keyPointers: [
        "1000+ charging points deployed",
        "Deep EV market insights from live data",
        "Guidance to avoid tech obsolescence",
      ],
      details: [
        {
          title: "Large-Scale Deployment Experience",
          points: [
            "Successfully deployed 1000+ charging points",
            "Experience deploying 100s of chargers across India",
            "Proven execution capability at scale",
          ],
        },
        {
          title: "Deep EV Market Insights",
          points: [
            "Understanding EV user behavior",
            "Charging patterns & location viability",
            "Demand forecasting from real network data",
            "Continuous learning from live data",
          ],
        },
        {
          title: "Evolving Technology Landscape",
          points: [
            "EV charging is rapidly evolving",
            "Technology obsolescence risk mitigation",
            "Future-ready solution selection",
            "Strategic upgrade planning",
          ],
        },
      ],
    },

    {
      icon: "🔧",
      title: "Vendor & Hardware Expertise",
      description:
        "Confident hardware and vendor decisions—without locking you into a single manufacturer.",
      keyPointers: [
        "Reliability assessment across manufacturers",
        "Hardware-agnostic integration support",
        "Bulk procurement + spec knowledge",
      ],
      details: [
        {
          title: "Manufacturer Reliability Assessment",
          points: [
            "Long-term reliability benchmarking",
            "Performance comparison across vendors",
            "Data-backed hardware recommendations",
          ],
        },
        {
          title: "Hardware-Agnostic Approach",
          points: [
            "Compatibility validation",
            "Smart integration",
            "Performance optimization",
          ],
        },
        {
          title: "Bulk Procurement Knowledge",
          points: [
            "Technical spec expertise",
            "Operational efficiency planning",
            "Scale economics",
          ],
        },
      ],
    },

    {
      icon: "💻",
      title: "In-House Technology & Safety",
      description:
        "A proprietary tech stack paired with strong safety and compliance practices.",
      keyPointers: [
        "In-house monitoring + diagnostics",
        "Performance optimization capabilities",
        "Safety + compliance focus",
      ],
      details: [
        {
          title: "Proprietary Technology Stack",
          points: [
            "Better monitoring control",
            "Advanced diagnostics",
            "Performance optimization tools",
          ],
        },
        {
          title: "Safety Standards",
          points: [
            "Electrical safety focus",
            "Installation compliance",
            "Operational safety protocols",
          ],
        },
      ],
    },

    {
      icon: "📈",
      title: "Commercial & Relationship Advantage",
      description:
        "Better economics and leverage—pricing and ecosystem partnerships that move faster.",
      keyPointers: [
        "Pricing same or lower than alternatives",
        "Value-added services included",
        "Strong OEM + vendor relationships",
      ],
      details: [
        {
          title: "Competitive Pricing",
          points: [
            "Transparent pricing model",
            "Bundled value services",
          ],
        },
        {
          title: "Strong Industry Relationships",
          points: [
            "OEM partnerships",
            "Hardware manufacturer relationships",
            "Ecosystem collaborations",
          ],
        },
      ],
    },

    {
      icon: "🚀",
      title: "Utilization & Revenue Support",
      description:
        "Support beyond installation—maximize utilization and recurring demand.",
      keyPointers: [
        "Utilization optimization",
        "Fleet partnerships",
        "Marketing visibility support",
      ],
      details: [
        {
          title: "Utilization Optimization",
          points: [
            "Network integration",
            "Demand planning",
            "Performance monitoring",
          ],
        },
        {
          title: "Fleet Partnerships",
          points: [
            "Recurring charging demand",
            "Operator collaborations",
          ],
        },
        {
          title: "Visibility & Marketing Support",
          points: [
            "Google listing support",
            "Social media planning",
            "Location visibility enhancement",
          ],
        },
      ],
    },
  ];

 return (
 <section className="relative">

    <div className="container px-6 py-12 md:py-16">
      
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="font-heading text-mt-up-3 text-mcn-text-primary">
          Our Expertise In EV Business
        </h3>
        <p className="mt-3 text-mt-base text-mcn-text-muted">
          Built from real deployments, reliability benchmarking, and operations-led execution.
        </p>
      </div>

      {/* 3-grid, constrained width */}
      <div className="mx-auto mt-12 max-w-5xl grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <WhyMassiveCard key={i} {...card} />
        ))}
      </div>

    </div>
  </section>
);

}
