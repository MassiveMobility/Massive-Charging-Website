"use client";

import { useMemo, useState } from "react";

type Station = {
  id: string;
  name: string;
  address: string;
  city: string;
  connector: "AC" | "DC";
  status: "Open" | "Unavailable";
  rating: string;
  latitude: number;
  longitude: number;
};

const stations: Station[] = [
  {
    id: "st-001",
    name: "Sector 43 EV Station",
    address: "Spring House, Sector 43, Gurugram",
    city: "Gurugram",
    connector: "AC",
    status: "Open",
    rating: "4.9",
    latitude: 28.46238,
    longitude: 77.09472
  },
  {
    id: "st-002",
    name: "Noida Sector 62 Fast Hub",
    address: "Sector 62, Noida, Uttar Pradesh",
    city: "Noida",
    connector: "DC",
    status: "Open",
    rating: "4.8",
    latitude: 28.6265,
    longitude: 77.3736
  },
  {
    id: "st-003",
    name: "Gomti Nagar Charging Station",
    address: "Gomti Nagar, Lucknow, Uttar Pradesh",
    city: "Lucknow",
    connector: "AC",
    status: "Open",
    rating: "4.4",
    latitude: 26.8501,
    longitude: 80.9921
  },
  {
    id: "st-004",
    name: "Marina Road EV Point",
    address: "Marina Beach Road, Chennai, Tamil Nadu",
    city: "Chennai",
    connector: "DC",
    status: "Open",
    rating: "4.7",
    latitude: 13.0827,
    longitude: 80.2707
  },
  {
    id: "st-005",
    name: "Dwarka Sector 10 Parking",
    address: "Sector 10 parking, Dwarka, New Delhi",
    city: "Delhi",
    connector: "DC",
    status: "Unavailable",
    rating: "4.0",
    latitude: 28.5795,
    longitude: 77.0566
  }
];

function mapsDirectionUrl(station: Station): string {
  const destination = `${station.latitude},${station.longitude}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

function mapsPlaceUrl(station: Station): string {
  const query = `${station.latitude},${station.longitude} (${station.name})`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsEmbedUrl(station: Station): string {
  const query = `${station.latitude},${station.longitude}`;
  return `https://www.google.com/maps?q=${query}&z=13&output=embed`;
}

/**
 * Lightweight searchable station explorer for the migrated map route.
 */
export function ChargingStationsExplorer() {
  const [query, setQuery] = useState("");
  const [selectedStationId, setSelectedStationId] = useState(stations[0]?.id ?? "");

  const filteredStations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return stations;
    }

    return stations.filter((station) => {
      const text = `${station.name} ${station.address} ${station.city}`.toLowerCase();
      return text.includes(normalizedQuery);
    });
  }, [query]);

  const selectedStation = filteredStations.find((station) => station.id === selectedStationId) ?? filteredStations[0] ?? null;

  return (
    <section className="stations-explorer">
      <div className="stations-explorer__container">
        <div className="stations-explorer__left">
          <label className="stations-explorer__search-label" htmlFor="station-search">
            Search stations
          </label>
          <input
            className="stations-explorer__search-input"
            id="station-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search city, station, or address"
            type="search"
            value={query}
          />

          <div className="stations-explorer__cards">
            {filteredStations.map((station) => (
              <button
                className={`stations-explorer__card ${selectedStation?.id === station.id ? "stations-explorer__card--active" : ""}`}
                key={station.id}
                onClick={() => setSelectedStationId(station.id)}
                type="button"
              >
                <div className="stations-explorer__card-top">
                  <h3 className="stations-explorer__card-title">{station.name}</h3>
                  <span className="stations-explorer__chip">{station.connector}</span>
                </div>
                <p className="stations-explorer__card-address">{station.address}</p>
                <div className="stations-explorer__meta">
                  <span
                    className={`stations-explorer__status ${station.status === "Open" ? "stations-explorer__status--open" : "stations-explorer__status--unavailable"}`}
                  >
                    {station.status}
                  </span>
                  <span className="stations-explorer__rating">Rating: {station.rating}</span>
                </div>
                <div className="stations-explorer__card-actions">
                  <a
                    className="stations-explorer__open-link"
                    href={mapsPlaceUrl(station)}
                    onClick={(event) => event.stopPropagation()}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    className="stations-explorer__card-directions"
                    href={mapsDirectionUrl(station)}
                    onClick={(event) => event.stopPropagation()}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Directions {"->"}
                  </a>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="stations-explorer__right">
          {selectedStation ? (
            <div className="stations-explorer__map-frame">
              <iframe
                className="stations-explorer__map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapsEmbedUrl(selectedStation)}
                title={`${selectedStation.name} map`}
              />
            </div>
          ) : (
            <div className="stations-explorer__empty">No stations found for your current search.</div>
          )}
        </div>
      </div>
    </section>
  );
}
