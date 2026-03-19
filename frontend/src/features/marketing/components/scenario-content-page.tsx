import type { CpoScenario } from "@/features/marketing/data/cpo";

import Link from "next/link";

type ScenarioContentPageProps = {
  scenario: CpoScenario;
};

/**
 * Shared renderer for legacy scenario routes such as home-charging and fleet-charging.
 */
export function ScenarioContentPage({ scenario }: ScenarioContentPageProps) {
  const considerationCards = scenario.consideration?.cards ?? [];
  const connectionGroups = scenario.connection?.checkboxGroups ?? [];

  return (
    <div className="scenario-page">
      <section className="scenario-page__hero">
        <div className="scenario-page__container">
          <div className="scenario-page__badge">{scenario.segment}</div>
          <h1 className="scenario-page__title">{scenario.hero?.title ?? scenario.label}</h1>
          <p className="scenario-page__description">
            {scenario.hero?.body ??
              "This route has been migrated with a full scenario plan including setup guidance and requirement capture."}
          </p>

          <div className="scenario-page__cta-row">
            <Link className="scenario-page__cta scenario-page__cta--primary" href="/get-chargers">
              {scenario.hero?.actionText ?? "Get Requirement Assessment"}
            </Link>
            <Link className="scenario-page__cta scenario-page__cta--secondary" href="/charging-station-biz">
              Explore Other Scenarios
            </Link>
          </div>

          {scenario.hero?.trustPill ? <p className="scenario-page__trust">{scenario.hero.trustPill}</p> : null}
        </div>
      </section>

      {scenario.consideration ? (
        <section className="scenario-page__section">
          <div className="scenario-page__container">
            <h2 className="scenario-page__section-title">
              {scenario.consideration.title ?? "Things to consider"}
            </h2>
            {scenario.consideration.subtitle ? (
              <p className="scenario-page__section-description">{scenario.consideration.subtitle}</p>
            ) : null}

            <div className="scenario-page__cards">
              {considerationCards.map((card) => (
                <article className="scenario-page__card" key={`${card.title}-${card.text}`}>
                  {card.icon ? <span className="scenario-page__card-icon">{card.icon}</span> : null}
                  <h3 className="scenario-page__card-title">{card.title}</h3>
                  <p className="scenario-page__card-description">{card.text}</p>
                </article>
              ))}
            </div>

            {scenario.consideration.ctaCard ? <p className="scenario-page__cta-note">{scenario.consideration.ctaCard}</p> : null}
          </div>
        </section>
      ) : null}

      {scenario.connection ? (
        <section className="scenario-page__section scenario-page__section--muted">
          <div className="scenario-page__container">
            <h2 className="scenario-page__section-title">{scenario.connection.title ?? "Connection details"}</h2>
            {scenario.connection.subtitle ? (
              <p className="scenario-page__section-description">{scenario.connection.subtitle}</p>
            ) : null}

            <div className="scenario-page__groups">
              {connectionGroups.map((group) => (
                <article className="scenario-page__group" key={group.label}>
                  <h3 className="scenario-page__group-title">{group.label}</h3>
                  <ul className="scenario-page__option-list">
                    {group.options.map((option) => (
                      <li className="scenario-page__option" key={option}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="scenario-page__footer-cta">
              <Link className="scenario-page__cta scenario-page__cta--primary" href="/get-chargers">
                Submit Requirement
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
