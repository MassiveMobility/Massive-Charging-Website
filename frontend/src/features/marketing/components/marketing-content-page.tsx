import type { MarketingContent } from "@/features/marketing/data/general-pages";
import type { ReactNode } from "react";

import Link from "next/link";

type MarketingContentPageProps = {
  content: MarketingContent;
  children?: ReactNode;
};

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ContentCta({ href, label, variant }: { href: string; label: string; variant: "primary" | "secondary" }) {
  const className =
    variant === "primary" ? "marketing-content__cta marketing-content__cta--primary" : "marketing-content__cta marketing-content__cta--secondary";

  if (isExternalHref(href)) {
    return (
      <a className={className} href={href} rel="noopener noreferrer" target="_blank">
        {label}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}

/**
 * Shared content-first template used by migrated legacy routes.
 */
export function MarketingContentPage({ content, children }: MarketingContentPageProps) {
  return (
    <div className="marketing-content">
      <section className="marketing-content__hero">
        <div className="marketing-content__container">
          <div className="marketing-content__badge">{content.badge}</div>
          <h1 className="marketing-content__title">{content.title}</h1>
          <p className="marketing-content__description">{content.description}</p>

          {content.primaryCta || content.secondaryCta ? (
            <div className="marketing-content__cta-row">
              {content.primaryCta ? (
                <ContentCta href={content.primaryCta.href} label={content.primaryCta.label} variant="primary" />
              ) : null}
              {content.secondaryCta ? (
                <ContentCta href={content.secondaryCta.href} label={content.secondaryCta.label} variant="secondary" />
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      {content.stats?.length ? (
        <section className="marketing-content__section">
          <div className="marketing-content__container">
            <div className="marketing-content__stats">
              {content.stats.map((stat) => (
                <article className="marketing-content__stat-card" key={`${stat.label}-${stat.value}`}>
                  <p className="marketing-content__stat-label">{stat.label}</p>
                  <p className="marketing-content__stat-value">{stat.value}</p>
                  <p className="marketing-content__stat-note">{stat.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.cards?.length ? (
        <section className="marketing-content__section marketing-content__section--muted">
          <div className="marketing-content__container">
            {content.cardTitle ? <h2 className="marketing-content__section-title">{content.cardTitle}</h2> : null}
            <div className="marketing-content__cards">
              {content.cards.map((card) => (
                <article className="marketing-content__card" key={card.title}>
                  <h3 className="marketing-content__card-title">{card.title}</h3>
                  <p className="marketing-content__card-description">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.steps?.length ? (
        <section className="marketing-content__section">
          <div className="marketing-content__container">
            {content.stepsTitle ? <h2 className="marketing-content__section-title">{content.stepsTitle}</h2> : null}
            <ol className="marketing-content__steps">
              {content.steps.map((step) => (
                <li className="marketing-content__step" key={step.title}>
                  <h3 className="marketing-content__step-title">{step.title}</h3>
                  <p className="marketing-content__step-description">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {content.faqs?.length ? (
        <section className="marketing-content__section marketing-content__section--muted">
          <div className="marketing-content__container">
            {content.faqTitle ? <h2 className="marketing-content__section-title">{content.faqTitle}</h2> : null}
            <div className="marketing-content__faq-list">
              {content.faqs.map((faq) => (
                <article className="marketing-content__faq-item" key={faq.question}>
                  <h3 className="marketing-content__faq-question">{faq.question}</h3>
                  <p className="marketing-content__faq-answer">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {children ? <section className="marketing-content__section">{children}</section> : null}

      {content.note ? (
        <section className="marketing-content__section marketing-content__section--note">
          <div className="marketing-content__container">
            <p className="marketing-content__note">{content.note}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
}
