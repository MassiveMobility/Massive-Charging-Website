"use client";

import type { LegacyVehicleCatalogueItem } from "@/data/articles";

import { useMemo, useState } from "react";

import Link from "next/link";

type EvCarsCataloguePageProps = {
  cars: LegacyVehicleCatalogueItem[];
};

/**
 * Legacy-style EV cars catalogue for /charging-guide/ev-cars.
 */
export function EvCarsCataloguePage({ cars }: EvCarsCataloguePageProps) {
  const [selectedId, setSelectedId] = useState(cars[0]?.Vehicle_ID ?? "");
  const [query, setQuery] = useState("");

  const filteredCars = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return cars;
    }

    return cars.filter((car) => {
      const text = `${car.Manufacturer} ${car.Vehicle_Name} ${car.Vehicle_Variant ?? ""}`.toLowerCase();
      return text.includes(normalizedQuery);
    });
  }, [cars, query]);

  const selectedVehicle = filteredCars.find((car) => car.Vehicle_ID === selectedId) ?? filteredCars[0] ?? null;

  return (
    <section className="legacy-cars">
      <header className="legacy-cars__hero">
        <div className="legacy-cars__container">
          <div className="legacy-cars__badge">Complete EV Catalogue</div>
          <h1 className="legacy-cars__title">
            Electric <span>Cars Catalogue</span>
          </h1>
          <p className="legacy-cars__description">
            Browse legacy vehicle data with specs and direct charging-guide links.
          </p>
        </div>
      </header>

      <div className="legacy-cars__container legacy-cars__body">
        <div className="legacy-cars__shell">
          <div className="legacy-cars__grid">
            <section className="legacy-cars__list">
              <div className="legacy-cars__search-wrap">
                <div className="legacy-cars__search-head">
                  <h2>Browse Vehicles</h2>
                  <span>{filteredCars.length} Models</span>
                </div>
                <input
                  className="legacy-cars__search-input"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by model or manufacturer"
                  type="search"
                  value={query}
                />
              </div>

              <div className="legacy-cars__cards">
                {filteredCars.map((car) => {
                  const isSelected = car.Vehicle_ID === selectedId;

                  return (
                    <button
                      className={`legacy-cars__card ${isSelected ? "legacy-cars__card--selected" : ""}`}
                      key={car.Vehicle_ID}
                      onClick={() => setSelectedId(car.Vehicle_ID)}
                      type="button"
                    >
                      <div className="legacy-cars__card-top">
                        <span className="legacy-cars__brand">{car.Manufacturer}</span>
                        <span className="legacy-cars__vehicle-id">{car.Vehicle_ID}</span>
                      </div>

                      <h3 className="legacy-cars__name">{car.Vehicle_Name}</h3>
                      <p className="legacy-cars__variant">{car.Vehicle_Variant || "Standard Variant"}</p>
                      <div className="legacy-cars__meta">
                        <span>{car.Battery_Capacity || "N/A"}</span>
                        <span>{car.Claimed_Range || "N/A"}</span>
                        <span>{car.Price || "N/A"}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <aside className="legacy-cars__details">
              {selectedVehicle ? (
                <article className="legacy-cars__detail-card">
                  <header className="legacy-cars__detail-header">
                    <p>{selectedVehicle.Manufacturer}</p>
                    <h2>{selectedVehicle.Vehicle_Name}</h2>
                    <p className="legacy-cars__detail-variant">
                      {selectedVehicle.Vehicle_Variant || "Standard Variant"}
                    </p>
                  </header>

                  <div className="legacy-cars__detail-body">
                    <div className="legacy-cars__spec-grid">
                      <div>
                        <span>Price</span>
                        <strong>{selectedVehicle.Price || "N/A"}</strong>
                      </div>
                      <div>
                        <span>Battery</span>
                        <strong>{selectedVehicle.Battery_Capacity || "N/A"}</strong>
                      </div>
                      <div>
                        <span>Claimed Range</span>
                        <strong>{selectedVehicle.Claimed_Range || "N/A"}</strong>
                      </div>
                      <div>
                        <span>Real Range</span>
                        <strong>{selectedVehicle.Realworld_Range || "N/A"}</strong>
                      </div>
                    </div>

                    <div className="legacy-cars__connector">
                      <span>Connector</span>
                      <strong>{selectedVehicle.Charging_Type || "Standard"}</strong>
                    </div>

                    {selectedVehicle.slug ? (
                      <Link className="legacy-cars__guide-link" href={`/charging-guide/${selectedVehicle.slug}`}>
                        View Complete Charging Guide
                      </Link>
                    ) : (
                      <p className="legacy-cars__guide-pending">Charging guide is not available yet.</p>
                    )}
                  </div>
                </article>
              ) : (
                <article className="legacy-cars__detail-empty">
                  <p>No vehicles matched your current search.</p>
                </article>
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
