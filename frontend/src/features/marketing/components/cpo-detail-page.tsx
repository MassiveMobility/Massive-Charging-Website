import type { CpoScenario } from "@/features/marketing/data/cpo";

import Link from "next/link";

type CpoDetailPageProps = {
  scenario: CpoScenario;
};

/**
 * Detailed CPO route renderer used by /cpo/[...slug].
 */
export function CpoDetailPage({ scenario }: CpoDetailPageProps) {
  return (
    <div className="cpo-detail">
      <section className="cpo-detail__hero">
        <div className="cpo-detail__container">
          <div className="cpo-detail__badge">{scenario.segment}</div>
          <h1 className="cpo-detail__title">{scenario.hero?.title ?? scenario.label}</h1>
          <p className="cpo-detail__description">
            {scenario.hero?.body ??
              "This CPO route is fully migrated with deployment guidance and requirement checkpoints."}
          </p>

          <div className="cpo-detail__cta-row">
            <Link className="cpo-detail__cta cpo-detail__cta--primary" href="/get-chargers">
              {scenario.hero?.actionText ?? "Get Setup Assessment"}
            </Link>
            <Link className="cpo-detail__cta cpo-detail__cta--secondary" href="/cpo">
              Back to CPO Index
            </Link>
          </div>

          {scenario.hero?.trustPill ? <p className="cpo-detail__trust">{scenario.hero.trustPill}</p> : null}
        </div>
      </section>

      {scenario.consideration ? (
        <section className="cpo-detail__section">
          <div className="cpo-detail__container">
            <h2 className="cpo-detail__section-title">{scenario.consideration.title ?? "Considerations"}</h2>
            {scenario.consideration.subtitle ? (
              <p className="cpo-detail__section-description">{scenario.consideration.subtitle}</p>
            ) : null}

            <div className="cpo-detail__card-grid">
              {(scenario.consideration.cards ?? []).map((card) => (
                <article className="cpo-detail__card" key={`${card.title}-${card.text}`}>
                  {card.icon ? <span className="cpo-detail__card-icon">{card.icon}</span> : null}
                  <h3 className="cpo-detail__card-title">{card.title}</h3>
                  <p className="cpo-detail__card-description">{card.text}</p>
                </article>
              ))}
            </div>

            {scenario.consideration.ctaCard ? <p className="cpo-detail__note">{scenario.consideration.ctaCard}</p> : null}
          </div>
        </section>
      ) : null}

      {scenario.connection ? (
        <section className="cpo-detail__section cpo-detail__section--muted">
          <div className="cpo-detail__container">
            <h2 className="cpo-detail__section-title">{scenario.connection.title ?? "Connection checklist"}</h2>
            {scenario.connection.subtitle ? (
              <p className="cpo-detail__section-description">{scenario.connection.subtitle}</p>
            ) : null}

            <div className="cpo-detail__group-grid">
              {(scenario.connection.checkboxGroups ?? []).map((group) => (
                <article className="cpo-detail__group" key={group.label}>
                  <h3 className="cpo-detail__group-title">{group.label}</h3>
                  <ul className="cpo-detail__options">
                    {group.options.map((option) => (
                      <li className="cpo-detail__option" key={option}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="cpo-detail__footer">
              <Link className="cpo-detail__cta cpo-detail__cta--primary" href="/get-chargers">
                Submit Requirement
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
