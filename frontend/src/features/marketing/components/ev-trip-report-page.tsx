"use client";

import { useState } from "react";

type Episode = {
  id: number;
  insights: string[];
  paragraphs: string[];
  title: string;
};

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
    <section className="trip-report-legacy">
      <header className="trip-report-legacy__hero">
        <div className="trip-report-legacy__container">
          <div className="trip-report-legacy__badge">EV Journey Report</div>
          <h1>Noida to Vrindavan to Kundli with MG Windsor EV</h1>
          <p>
            Field-report style summary of charger discovery, reliability, and operational reality across a multi-stop EV journey.
          </p>

          <div className="trip-report-legacy__vehicle-card">
            <h2>Vehicle Snapshot</h2>
            <div className="trip-report-legacy__vehicle-grid">
              <div>
                <span>Vehicle</span>
                <strong>MG Windsor EV</strong>
              </div>
              <div>
                <span>Battery Capacity</span>
                <strong>38 kWh</strong>
              </div>
              <div>
                <span>Estimated Range</span>
                <strong>220-300 km</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="trip-report-legacy__tabs" role="tablist" aria-label="Trip report episodes">
        <div className="trip-report-legacy__container">
          {episodes.map((episode, index) => (
            <button
              aria-selected={index === activeEpisodeIndex}
              className={`trip-report-legacy__tab ${index === activeEpisodeIndex ? "trip-report-legacy__tab--active" : ""}`}
              key={episode.id}
              onClick={() => setActiveEpisodeIndex(index)}
              role="tab"
              type="button"
            >
              Episode {episode.id}
            </button>
          ))}
        </div>
      </div>

      <div className="trip-report-legacy__container trip-report-legacy__content-wrap">
        <article className="trip-report-legacy__content" role="tabpanel">
          <h2>{activeEpisode.title}</h2>
          <div className="trip-report-legacy__paragraphs">
            {activeEpisode.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="trip-report-legacy__insights">
            <h3>Key insights</h3>
            <ul>
              {activeEpisode.insights.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
          </section>

          <div className="trip-report-legacy__pager">
            <button
              disabled={activeEpisodeIndex === 0}
              onClick={() => setActiveEpisodeIndex((current) => Math.max(0, current - 1))}
              type="button"
            >
              Previous
            </button>
            <button
              disabled={activeEpisodeIndex === episodes.length - 1}
              onClick={() => setActiveEpisodeIndex((current) => Math.min(episodes.length - 1, current + 1))}
              type="button"
            >
              Next
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
