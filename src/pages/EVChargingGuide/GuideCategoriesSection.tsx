import React, { useState, useMemo } from "react";
import {
  Search,
  Battery,
  MapPin,
  Zap,
  Info,
  Car,
  Bike,
  ChevronRight,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppData } from "../../App";
import "./GuideCategoriesSection.css";

const slugifyTitle = (title = "") =>
  title.toLowerCase().trim().replace(/\s+/g, "-");

export default function GuideCategoriesSection() {
  const { vehicleGuideData: database } = useAppData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState("CAT_002");
  const navigate = useNavigate();

  const allVehicles = useMemo(() => {
    if (!database || !database.Vehicle_master) return [];
    return database.Vehicle_master.map((v: any) => {
      const details4w = database["4w_vehicle_details"]?.find(
        (d: any) => d.Vehicle_ID === v.Vehicle_ID
      );
      const details2w = database["2w_vehicle_details"]?.find(
        (d: any) => d.Vehicle_ID === v.Vehicle_ID
      );
      return { ...v, details: details4w || details2w || null };
    });
  }, [database]);

  const filteredResults = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return allVehicles
      .filter(
        (v: any) =>
          v.Vehicle_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.Manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 6);
  }, [searchTerm, allVehicles]);

  const categoryArticles = useMemo(() => {
    if (!database || !["CAT_003", "CAT_004", "CAT_005"].includes(activeCategory))
      return [];
    return (database.Category_Guide_Map || [])
      .filter((item: any) => item.Category_ID === activeCategory)
      .map((item: any) => {
        const guide = (database.Guide_article || []).find(
          (g: any) => g.Guide_ID === item.Guide_ID
        );
        const message = guide
          ? (database.Core_message || []).find(
              (m: any) => m.cmsg_id === guide.cmsg_id
            )
          : null;
        if (!guide || !message) return null;
        return { guide, message };
      })
      .filter(Boolean);
  }, [database, activeCategory]);

  const handleSelectVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setSearchTerm("");
  };

  const isEVChargingGuide = activeCategory === "CAT_002";
  const isArticleCategory = ["CAT_003", "CAT_004", "CAT_005"].includes(
    activeCategory
  );
  const articleSectionTitle =
    activeCategory === "CAT_004"
      ? "EV Trip Reports"
      : activeCategory === "CAT_003"
      ? "EV Charging 101"
      : "Charging Station Guides";
  const articleCardLabel =
    activeCategory === "CAT_004" ? "Trip Report" : "Guide";

  const categories = [
    { id: "CAT_002", name: "e-Vehicles Charging Guide", icon: <Zap size={18} /> },
    { id: "CAT_003", name: "EV Charging 101", icon: <Info size={18} /> },
    { id: "CAT_004", name: "Trip Reports", icon: <MapPin size={18} /> },
    { id: "CAT_005", name: "Charging Stations", icon: <Battery size={18} /> },
  ];

  if (!database) return null;

  return (
    <section id="ev-guide-categories" className="guide-categories">
      <div className="guide-categories__container">
        <div className="guide-categories__wrapper">
          {/* Category Pills */}
          <div className="guide-categories__pills-section">
            <h3 className="guide-categories__pills-title">Categories</h3>
            <nav className="guide-categories__pills-nav">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`guide-categories__pill ${
                    activeCategory === cat.id
                      ? "guide-categories__pill--active"
                      : "guide-categories__pill--inactive"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          {isEVChargingGuide ? (
            <div className="guide-categories__content">
              {/* Left: Search + Type Cards */}
              <div>
                <div className="guide-categories__search">
                  <h3 className="guide-categories__search-title">
                    Search Vehicles
                  </h3>
                  <div className="guide-categories__search-input-wrap">
                    <Search
                      className="guide-categories__search-icon"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search for BYD eMax, Ola S1..."
                      className="guide-categories__search-input"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {filteredResults.length > 0 && (
                      <div className="guide-categories__search-results">
                        {filteredResults.map((v: any) => (
                          <button
                            key={v.Vehicle_ID}
                            onClick={() => handleSelectVehicle(v)}
                            className="guide-categories__search-result"
                          >
                            <div>
                              <div className="guide-categories__search-result-name">
                                {v.Vehicle_Name}
                              </div>
                              <div className="guide-categories__search-result-brand">
                                {v.Manufacturer}
                              </div>
                            </div>
                            <ChevronRight size={16} color="#9B9B9B" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="guide-categories__type-cards">
                  <div
                    onClick={() => navigate("/charging-guide/ev-cars")}
                    className="guide-categories__type-card"
                  >
                    <div className="guide-categories__type-card-icon">
                      <Car size={24} color="#E50000" />
                    </div>
                    <h4 className="guide-categories__type-card-title">
                      4-Wheeler EVs
                    </h4>
                    <p className="guide-categories__type-card-sub">
                      Passenger Cars
                    </p>
                  </div>

                  <div className="guide-categories__type-card">
                    <div className="guide-categories__type-card-icon">
                      <Bike size={24} color="#E50000" />
                    </div>
                    <h4 className="guide-categories__type-card-title">
                      2-Wheeler EVs
                    </h4>
                    <p className="guide-categories__type-card-sub">
                      Bikes & Scooters
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Vehicle Detail */}
              <div>
                {selectedVehicle ? (
                  <div className="guide-categories__detail">
                    <div className="guide-categories__detail-header">
                      <span className="guide-categories__detail-brand">
                        {selectedVehicle.Manufacturer}
                      </span>
                      <h3 className="guide-categories__detail-name">
                        {selectedVehicle.Vehicle_Name}
                      </h3>
                      <div className="guide-categories__detail-variant">
                        <Zap size={14} color="#E50000" />
                        {selectedVehicle.details?.Vehicle_Variant || "Standard"}
                      </div>
                    </div>
                    <div className="guide-categories__detail-body">
                      <div className="guide-categories__detail-grid">
                        <div className="guide-categories__detail-box">
                          <p className="guide-categories__detail-box-label">
                            Price
                          </p>
                          <p className="guide-categories__detail-box-value">
                            {selectedVehicle.details?.Price || "N/A"}
                          </p>
                        </div>
                        <div className="guide-categories__detail-box">
                          <p className="guide-categories__detail-box-label">
                            Battery
                          </p>
                          <p className="guide-categories__detail-box-value">
                            {selectedVehicle.details?.Battery_Capacity || "N/A"}
                          </p>
                        </div>
                        <div className="guide-categories__detail-box">
                          <p className="guide-categories__detail-box-label">
                            Claimed Range
                          </p>
                          <p className="guide-categories__detail-box-value">
                            {selectedVehicle.details?.Claimed_Range || "N/A"}
                          </p>
                        </div>
                        <div className="guide-categories__detail-box">
                          <p className="guide-categories__detail-box-label">
                            Real Range
                          </p>
                          <p className="guide-categories__detail-box-value">
                            {selectedVehicle.details?.Realworld_Range || "N/A"}
                          </p>
                        </div>
                      </div>

                      <div className="guide-categories__detail-connector">
                        <div>
                          <p className="guide-categories__detail-box-label">
                            Connector
                          </p>
                          <p className="guide-categories__detail-box-value">
                            {selectedVehicle.details?.Charging_Type ||
                              "Standard"}
                          </p>
                        </div>
                        <Battery size={20} color="#E50000" />
                      </div>

                      <button
                        onClick={() => {
                          const guideArticle = database.Guide_article?.find(
                            (g: any) =>
                              g.Guide_ID === selectedVehicle.details?.Guide_ID
                          );
                          if (guideArticle) {
                            const message = database.Core_message?.find(
                              (m: any) => m.cmsg_id === guideArticle.cmsg_id
                            );
                            if (message) {
                              navigate(
                                `/charging-guide/${slugifyTitle(message.title)}`
                              );
                              return;
                            }
                          }
                          alert("Charging guide not available for this vehicle");
                        }}
                        disabled={!selectedVehicle.details?.Guide_ID}
                        className="guide-categories__detail-cta"
                      >
                        View Charging Guide
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="guide-categories__empty">
                    <div className="guide-categories__empty-icon">
                      <Search size={36} color="#D9D9D9" />
                    </div>
                    <p className="guide-categories__empty-text">
                      Search for a vehicle to view details
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : isArticleCategory ? (
            <div className="guide-categories__trips">
              <div className="guide-categories__trips-header">
                <h2 className="guide-categories__trips-title">
                  {articleSectionTitle}
                </h2>
                <p className="guide-categories__trips-sub">
                  Select an article to open the full page.
                </p>
              </div>
              {categoryArticles.length > 0 ? (
                <div className="guide-categories__trips-grid">
                  {categoryArticles.map(({ guide, message }: any) => (
                    <button
                      key={`${guide.Guide_ID}-${message.cmsg_id}`}
                      onClick={() =>
                        navigate(
                          `/charging-guide/${slugifyTitle(message.title)}`
                        )
                      }
                      className="guide-categories__trip-card"
                    >
                      <div>
                        <p className="guide-categories__trip-label">
                          {articleCardLabel}
                        </p>
                        <h3 className="guide-categories__trip-title">
                          {message.title}
                        </h3>
                      </div>
                      <ChevronRight size={18} color="#9B9B9B" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="guide-categories__coming-soon">
                  <p className="guide-categories__coming-soon-text">
                    No articles available yet.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="guide-categories__coming-soon">
              <div className="guide-categories__coming-soon-icon">
                <Clock size={64} color="#D9D9D9" />
              </div>
              <h2 className="guide-categories__coming-soon-title">
                Content Coming Soon
              </h2>
              <p className="guide-categories__coming-soon-text">
                We're working hard to bring you comprehensive guides for this
                category. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
