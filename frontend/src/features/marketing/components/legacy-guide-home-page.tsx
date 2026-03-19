"use client";

import { useMemo, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

type GuideLandingVehicle = {
  id: string;
  manufacturer: string;
  name: string;
  variant: string;
  price: string;
  battery: string;
  claimedRange: string;
  realRange: string;
  connector: string;
  guideSlug: string | null;
};

type GuideLandingArticle = {
  slug: string;
  title: string;
};

type GuideArticlesByCategory = {
  "CAT_003": GuideLandingArticle[];
  "CAT_004": GuideLandingArticle[];
  "CAT_005": GuideLandingArticle[];
};

type LegacyGuideHomePageProps = {
  articlesByCategory: GuideArticlesByCategory;
  vehicles: GuideLandingVehicle[];
};

const categories = [
  { id: "CAT_002", name: "e-Vehicles Charging Guide" },
  { id: "CAT_003", name: "EV Charging 101" },
  { id: "CAT_004", name: "Trip Reports" },
  { id: "CAT_005", name: "Charging Stations" }
] as const;

/**
 * Legacy guide home recreated for Next.js while keeping centralized theme styles.
 */
export function LegacyGuideHomePage({ articlesByCategory, vehicles }: LegacyGuideHomePageProps) {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("CAT_002");
  const [toast, setToast] = useState("");

  const selectedVehicle =
    vehicles.find((vehicle) => vehicle.id === selectedVehicleId) ?? null;

  const searchResults = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();
    if (normalizedQuery.length < 2) {
      return [];
    }

    return vehicles
      .filter((vehicle) => {
        const text = `${vehicle.manufacturer} ${vehicle.name} ${vehicle.variant}`.toLowerCase();
        return text.includes(normalizedQuery);
      })
      .slice(0, 6);
  }, [searchTerm, vehicles]);

  const openVehicleGuide = (vehicle: GuideLandingVehicle) => {
    if (!vehicle.guideSlug) {
      setToast("Charging guide is not available for this vehicle yet.");
      window.setTimeout(() => setToast(""), 2200);
      return;
    }

    router.push(`/charging-guide/${vehicle.guideSlug}`);
  };

  const isVehicleCategory = activeCategory === "CAT_002";
  const isArticleCategory = activeCategory !== "CAT_002";
  const activeArticles = articlesByCategory[activeCategory as keyof GuideArticlesByCategory] ?? [];

  return (
    <div className="ev-guide">
      <section className="ev-guide__hero">
        <div className="ev-guide__container">
          <div className="ev-guide__badge">
            <span className="ev-guide__badge-dot" />
            <span className="ev-guide__badge-text">Charging Network Is Live</span>
          </div>

          <h1 className="ev-guide__heading">
            Electric Vehicle
            <br />
            <span className="ev-guide__heading-accent">Charging Guide.</span>
          </h1>

          <p className="ev-guide__subtitle">
            Everything you need to know about setting up home, office, commercial, and public EV charging infrastructure.
          </p>

          <a className="ev-guide__cta" href="#ev-guide-categories">
            Explore the Guide
          </a>
        </div>
      </section>

      <section className="guide-categories" id="ev-guide-categories">
        <div className="guide-categories__container">
          <div className="guide-categories__wrapper">
            <div className="guide-categories__pills-section">
              <h2 className="guide-categories__pills-title">Categories</h2>
              <nav className="guide-categories__pills-nav" aria-label="Guide categories">
                {categories.map((category) => (
                  <button
                    className={`guide-categories__pill ${activeCategory === category.id ? "guide-categories__pill--active" : "guide-categories__pill--inactive"}`}
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    type="button"
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>

            {isVehicleCategory ? (
              <div className="guide-categories__content">
                <div>
                  <div className="guide-categories__search">
                    <h3 className="guide-categories__search-title">Search Vehicles</h3>
                    <div className="guide-categories__search-input-wrap">
                      <input
                        className="guide-categories__search-input"
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search BYD, MG, Tata..."
                        type="search"
                        value={searchTerm}
                      />

                      {searchResults.length ? (
                        <div className="guide-categories__search-results" role="listbox">
                          {searchResults.map((vehicle) => (
                            <button
                              className="guide-categories__search-result"
                              key={vehicle.id}
                              onClick={() => {
                                setSelectedVehicleId(vehicle.id);
                                setSearchTerm("");
                              }}
                              type="button"
                            >
                              <div>
                                <div className="guide-categories__search-result-name">{vehicle.name}</div>
                                <div className="guide-categories__search-result-brand">{vehicle.manufacturer}</div>
                              </div>
                              <span aria-hidden="true">></span>
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="guide-categories__type-cards">
                    <Link className="guide-categories__type-card" href="/charging-guide/ev-cars">
                      <div className="guide-categories__type-card-icon">4W</div>
                      <h4 className="guide-categories__type-card-title">4-Wheeler EVs</h4>
                      <p className="guide-categories__type-card-sub">Passenger Cars</p>
                    </Link>
                    <article className="guide-categories__type-card guide-categories__type-card--muted">
                      <div className="guide-categories__type-card-icon">2W</div>
                      <h4 className="guide-categories__type-card-title">2-Wheeler EVs</h4>
                      <p className="guide-categories__type-card-sub">Coming Soon</p>
                    </article>
                  </div>
                </div>

                <div>
                  {selectedVehicle ? (
                    <article className="guide-categories__detail">
                      <header className="guide-categories__detail-header">
                        <span className="guide-categories__detail-brand">{selectedVehicle.manufacturer}</span>
                        <h3 className="guide-categories__detail-name">{selectedVehicle.name}</h3>
                        <p className="guide-categories__detail-variant">{selectedVehicle.variant || "Standard"}</p>
                      </header>

                      <div className="guide-categories__detail-body">
                        <div className="guide-categories__detail-grid">
                          <div className="guide-categories__detail-box">
                            <p className="guide-categories__detail-box-label">Price</p>
                            <p className="guide-categories__detail-box-value">{selectedVehicle.price || "N/A"}</p>
                          </div>
                          <div className="guide-categories__detail-box">
                            <p className="guide-categories__detail-box-label">Battery</p>
                            <p className="guide-categories__detail-box-value">{selectedVehicle.battery || "N/A"}</p>
                          </div>
                          <div className="guide-categories__detail-box">
                            <p className="guide-categories__detail-box-label">Claimed Range</p>
                            <p className="guide-categories__detail-box-value">{selectedVehicle.claimedRange || "N/A"}</p>
                          </div>
                          <div className="guide-categories__detail-box">
                            <p className="guide-categories__detail-box-label">Real Range</p>
                            <p className="guide-categories__detail-box-value">{selectedVehicle.realRange || "N/A"}</p>
                          </div>
                        </div>

                        <div className="guide-categories__detail-connector">
                          <div>
                            <p className="guide-categories__detail-box-label">Connector</p>
                            <p className="guide-categories__detail-box-value">{selectedVehicle.connector || "Standard"}</p>
                          </div>
                        </div>

                        <button
                          className="guide-categories__detail-cta"
                          onClick={() => openVehicleGuide(selectedVehicle)}
                          type="button"
                        >
                          View Charging Guide
                        </button>
                      </div>
                    </article>
                  ) : (
                    <div className="guide-categories__empty">
                      <p className="guide-categories__empty-text">Search for a vehicle to view details.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : null}

            {isArticleCategory ? (
              <section className="guide-categories__trips">
                <div className="guide-categories__trips-header">
                  <h3 className="guide-categories__trips-title">
                    {activeCategory === "CAT_004"
                      ? "EV Trip Reports"
                      : activeCategory === "CAT_003"
                        ? "EV Charging 101"
                        : "Charging Station Guides"}
                  </h3>
                  <p className="guide-categories__trips-sub">Select an article to open the full page.</p>
                </div>

                {activeArticles.length ? (
                  <div className="guide-categories__trips-grid">
                    {activeArticles.map((article) => (
                      <Link className="guide-categories__trip-card" href={`/charging-guide/${article.slug}`} key={article.slug}>
                        <div>
                          <p className="guide-categories__trip-label">
                            {activeCategory === "CAT_004" ? "Trip Report" : "Guide"}
                          </p>
                          <h4 className="guide-categories__trip-title">{article.title}</h4>
                        </div>
                        <span aria-hidden="true">></span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="guide-categories__coming-soon">
                    <p className="guide-categories__coming-soon-text">No articles are available yet.</p>
                  </div>
                )}
              </section>
            ) : null}
          </div>
        </div>
      </section>

      {toast ? <div className="guide-categories__toast">{toast}</div> : null}
    </div>
  );
}
