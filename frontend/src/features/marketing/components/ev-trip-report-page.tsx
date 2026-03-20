"use client";

import { useState } from "react";

type Episode = {
  id: number;
  insights: string[];
  paragraphs: string[];
  title: string;
};

const routeStops = ["Noida Sector 61", "Vrindavan (Omaxe, near Prem Mandir)", "Kundli"] as const;

const episodes: Episode[] = [
  {
    id: 1,
    insights: [
      "App data quality varies heavily across charging networks.",
      "Station reliability checks are mandatory before long routes.",
      "Starting a charging session still has avoidable friction points."
    ],
    paragraphs: [
      "Before the journey, we tested multiple charging apps around Noida and found major mismatch in charger visibility and real-world availability.",
      "Some stations listed as active were offline, and charger naming in apps did not always match physical labels.",
      "Statiq had better reliability than several alternatives, while Plugshare showed many user-listed locations that were unusable in practice."
    ],
    title: "Episode 1: Pre-trip validation and charger discovery"
  },
  {
    id: 2,
    insights: [
      "Trip-planner routes reduce distraction while driving.",
      "Station quality matters more than station count.",
      "Restaurant + charger co-location creates strong business value."
    ],
    paragraphs: [
      "During highway travel, route-level charger planning worked better than searching nearest stations at each moment.",
      "Several chargers looked premium but were faulted or overpriced; practical uptime turned out to be the deciding factor.",
      "Charging breaks mapped naturally with meal stops, validating retail and hospitality use cases for station deployment."
    ],
    title: "Episode 2: On-route charging and stop quality"
  },
  {
    id: 3,
    insights: [
      "Offline/community chargers represent a large integration opportunity.",
      "Session visibility across app, charger, and car should be standardized.",
      "Corridor charging still needs stronger consistency at scale."
    ],
    paragraphs: [
      "In Vrindavan, we found functional chargers that were not discoverable in default views of mainstream apps.",
      "Operational control in some locations remained manual, indicating a strong need for digitization and CMS onboarding.",
      "Return-leg charging succeeded, but intermittent station visibility reinforced the need for better network reliability."
    ],
    title: "Episode 3: Community charging gaps and return journey"
  }
];

/**
 * Legacy narrative EV trip report with episode tabs and long-form insights.
 */
export function EvTripReportPage() {
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);
  const activeEpisode = episodes[activeEpisodeIndex] ?? episodes[0];

  if (!activeEpisode) {
    return null;
  }

  return (
    <section className="trip-report">
      <div className="trip-report__container">
        <header className="trip-report__hero">
          <div className="trip-report__badge">EV Journey Report</div>
          <h1 className="trip-report__title">Noida to Vrindavan to Kundli with MG Windsor EV</h1>
          <p className="trip-report__description">
            Field-report style summary of charger discovery, reliability, and operational reality across a multi-stop EV journey.
          </p>
          <p className="trip-report__description">
            Vehicle: MG Windsor EV | Battery: 38 kWh | Estimated Range: 220-300 km
          </p>
          <p className="trip-report__description">
            Route: {routeStops.join(" -> ")}
          </p>

          <div className="trip-report__episode-tabs" role="tablist" aria-label="Trip report episodes">
            {episodes.map((episode, index) => (
              <button
                aria-selected={index === activeEpisodeIndex}
                className={`trip-report__episode-tab ${index === activeEpisodeIndex ? "trip-report__episode-tab--active" : ""}`}
                key={episode.id}
                onClick={() => setActiveEpisodeIndex(index)}
                role="tab"
                type="button"
              >
                Episode {episode.id}
              </button>
            ))}
          </div>
        </header>

        <article className="trip-report__episode-body" role="tabpanel">
          <h2 className="trip-report__episode-title">{activeEpisode.title}</h2>
          {activeEpisode.paragraphs.map((paragraph) => (
            <p className="trip-report__episode-summary" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <h3 className="trip-report__insights-title">Key insights</h3>
          <ul className="trip-report__insights">
            {activeEpisode.insights.map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
