import React, { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Car,
  Zap,
  Battery,
  Navigation,
  IndianRupee,
  ChevronRight,
  Search,
  Gauge,
  Loader2,
} from "lucide-react";

const EVCarsCatalogue = ({ database }) => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState("INEV_A01");
  const [hoveredId, setHoveredId] = useState(null);
  const [catalogSearch, setCatalogSearch] = useState("");
  const [isScale125Like, setIsScale125Like] = useState(false);

  // ✅ NEW: toast state for "Guide Coming Soon"
  const [guideToast, setGuideToast] = useState({ open: false, msg: "" });
  const toastTimerRef = useRef(null);

  const showGuideComingSoon = () => {
    setGuideToast({
      open: true,
      msg: "Charging Experts Are Working On Guide. Please check out other guides to understand charging requirements.",
    });

    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => {
      setGuideToast({ open: false, msg: "" });
    }, 2400);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const updateDesktopScale = () => {
      const width = window.innerWidth;
      setIsScale125Like(width >= 1280 && width <= 1700);
    };

    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);
    return () => window.removeEventListener("resize", updateDesktopScale);
  }, []);

  const sidePaddingClass = isScale125Like
    ? "px-5 md:px-[64px] min-[1960px]:px-[220px] min-[2400px]:px-[440px]"
    : "px-5 md:px-[80px] min-[1960px]:px-[240px] min-[2400px]:px-[480px]";

  const heroPadClass = isScale125Like ? "py-12 md:py-14" : "py-14 md:py-16";
  const heroBadgeClass = isScale125Like
    ? "inline-block px-10 py-1.5 mb-4 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-[11px] md:text-[12px] font-bold uppercase tracking-wider"
    : "inline-block px-12 py-1.5 mb-4 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-[12px] md:text-[14px] font-bold uppercase tracking-wider";
  const heroTitleClass = isScale125Like
    ? "text-4xl md:text-[56px] md:leading-[66px] font-black mb-3 tracking-tight"
    : "text-4xl md:text-[76px] md:leading-[88px] font-black mb-3 tracking-tight";
  const heroSubtitleClass = isScale125Like
    ? "text-base md:text-[19px] md:leading-[30px] text-slate-300 max-w-3xl leading-relaxed"
    : "text-base md:text-[24px] md:leading-[38px] text-slate-300 max-w-4xl leading-relaxed";

  const mainPadClass = isScale125Like ? "py-7 md:py-8" : "py-8 md:py-10";
  const shellClass = isScale125Like
    ? "bg-white rounded-3xl shadow-xl border border-slate-200 p-6"
    : "bg-white rounded-3xl shadow-xl border border-slate-200 p-8";
  const gridGapClass = isScale125Like ? "grid grid-cols-12 gap-6" : "grid grid-cols-12 gap-7";

  const searchWrapClass = isScale125Like
    ? "bg-slate-50 rounded-xl border border-slate-200 p-5 md:p-6"
    : "bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-7";
  const searchTitleClass = isScale125Like
    ? "text-sm font-bold uppercase tracking-wider text-slate-500"
    : "text-base font-bold uppercase tracking-wider text-slate-500";
  const searchCountClass = isScale125Like
    ? "text-xs font-bold text-slate-400"
    : "text-sm font-bold text-slate-400";
  const searchInputClass = isScale125Like
    ? "w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-[15px] leading-[24px] focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
    : "w-full pl-12 pr-5 py-3.5 bg-white border border-slate-300 rounded-lg text-[17px] leading-[28px] focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all";

  const vehicleGridClass = isScale125Like ? "grid grid-cols-1 md:grid-cols-2 gap-3" : "grid grid-cols-1 md:grid-cols-2 gap-4";
  const vehicleCardBaseClass = isScale125Like
    ? "group px-6 py-4 rounded-xl border-2 transition-all cursor-pointer"
    : "group px-7 py-5 rounded-xl border-2 transition-all cursor-pointer";
  const vehicleBrandClass = isScale125Like
    ? "text-[10px] font-bold uppercase tracking-wider text-red-600"
    : "text-[11px] font-bold uppercase tracking-wider text-red-600";
  const vehicleNameClass = isScale125Like
    ? "text-[18px] leading-[26px] font-bold text-slate-900 mt-0.5"
    : "text-[21px] leading-[30px] font-bold text-slate-900 mt-0.5";
  const vehicleVariantClass = isScale125Like
    ? "text-[11px] leading-[16px] font-medium text-slate-500 line-clamp-1"
    : "text-[13px] leading-[20px] font-medium text-slate-500 line-clamp-1";
  const vehiclePriceClass = isScale125Like
    ? "text-[15px] leading-[24px] font-bold text-slate-900"
    : "text-[18px] leading-[28px] font-bold text-slate-900";
  const vehicleStatTextClass = isScale125Like
    ? "text-[11px] font-semibold"
    : "text-[13px] font-semibold";

  const detailHeaderClass = isScale125Like
    ? "bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white"
    : "bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white";
  const detailBrandClass = isScale125Like
    ? "inline-block px-3 py-1 rounded-lg bg-white/10 text-red-300 text-[11px] font-bold uppercase tracking-wider mb-3 border border-white/20"
    : "inline-block px-3.5 py-1.5 rounded-lg bg-white/10 text-red-300 text-[12px] font-bold uppercase tracking-wider mb-3 border border-white/20";
  const detailNameClass = isScale125Like
    ? "text-[30px] leading-[40px] font-black tracking-tight mb-2"
    : "text-[38px] leading-[50px] font-black tracking-tight mb-2";
  const detailVariantClass = isScale125Like
    ? "flex items-center gap-2 text-slate-300 text-[14px] leading-[22px]"
    : "flex items-center gap-2 text-slate-300 text-[17px] leading-[28px]";
  const detailBodyClass = isScale125Like
    ? "p-6 space-y-5"
    : "p-7 space-y-6";
  const detailConnectorClass = isScale125Like
    ? "bg-white rounded-xl p-5 flex items-center justify-between border border-slate-200"
    : "bg-white rounded-xl p-6 flex items-center justify-between border border-slate-200";
  const connectorLabelClass = isScale125Like
    ? "text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1"
    : "text-[12px] font-bold uppercase tracking-wider text-slate-500 mb-1";
  const connectorValueClass = isScale125Like
    ? "text-slate-900 font-bold text-[16px] leading-[24px]"
    : "text-slate-900 font-bold text-[19px] leading-[30px]";
  const detailCtaClass = isScale125Like
    ? "w-full py-3.5 rounded-xl font-semibold text-[16px] leading-[26px] flex items-center justify-center gap-2 transition-all shadow-lg group"
    : "w-full py-4 rounded-xl font-semibold text-[19px] leading-[30px] flex items-center justify-center gap-2 transition-all shadow-lg group";
  const vehicleIdClass = isScale125Like
    ? "text-center text-slate-400 text-[11px] font-medium uppercase tracking-wider"
    : "text-center text-slate-400 text-[12px] font-medium uppercase tracking-wider";

  // Filter only 4W Vehicles (CAT_006) and join with their details
  const carList = useMemo(() => {
    if (!database) return [];
    return database.Vehicle_master.filter((v) => v.Category_ID === "CAT_006").map((v) => {
      const details = database["4w_vehicle_details"]?.find((d) => d.Vehicle_ID === v.Vehicle_ID);
      return { ...v, details };
    });
  }, [database]);

  // Apply search filtering
  const filteredCars = carList.filter(
    (car) =>
      car.Vehicle_Name.toLowerCase().includes(catalogSearch.toLowerCase()) ||
      car.Manufacturer.toLowerCase().includes(catalogSearch.toLowerCase())
  );

  // Show hovered car details if hovering, otherwise show selected
  const displayCar = carList.find((c) => c.Vehicle_ID === (hoveredId || selectedId)) || carList[0];

  // ✅ UPDATED: Open guide page for a given car (shows toast if missing)
  const openChargingGuideForCar = (car) => {
    const guideId = car?.details?.Guide_ID;
    if (!guideId) {
      showGuideComingSoon();
      return;
    }

    const guideArticle = database.Guide_article?.find((g) => g.Guide_ID === guideId);
    if (!guideArticle) {
      showGuideComingSoon();
      return;
    }

    const message = database.Core_message?.find((m) => m.cmsg_id === guideArticle.cmsg_id);
    if (!message?.title) {
      showGuideComingSoon();
      return;
    }

    const slug = message.title.toLowerCase().trim().replace(/\s+/g, "-");
    navigate(`/charging-guide/${slug}`);
  };

  if (!database) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-red-600 mb-4" size={48} />
        <p className="text-slate-600 font-semibold text-lg">Loading Vehicle Catalogue...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50">
      {/* ROW 1: HEADER */}
      <header className={`bg-gradient-to-br from-[#250505] via-[#3b0a0a] to-[#190606] text-white ${heroPadClass} ${sidePaddingClass}`}>
        <div className="w-full mx-auto">
          <div className={heroBadgeClass}>
            Complete EV Catalogue
          </div>
          <h1 className={heroTitleClass}>
            Electric <span className="text-red-400">Cars Catalogue</span>
          </h1>
          <p className={heroSubtitleClass}>
            Browse our comprehensive collection of electric vehicles with detailed specifications and charging guides.
          </p>
        </div>
      </header>

      {/* ROW 2: 2-COLUMN GRID */}
      <main className={`w-full mx-auto ${sidePaddingClass} ${mainPadClass}`}>
        <div className={shellClass}>
          <div className={gridGapClass}>
            {/* COLUMN 1: VEHICLE CARDS (Wide - 7 cols) */}
            <section className="col-span-12 lg:col-span-7 space-y-5">
              {/* Search Bar */}
              <div className={searchWrapClass}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={searchTitleClass}>Browse Vehicles</h3>
                  <span className={searchCountClass}>{filteredCars.length} Models</span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search by model or manufacturer..."
                    className={searchInputClass}
                    value={catalogSearch}
                    onChange={(e) => setCatalogSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Vehicle Cards Grid */}
              <div className={vehicleGridClass}>
                {filteredCars.map((car) => (
                  <div
                    key={car.Vehicle_ID}
                    onClick={() => {
                      setSelectedId(car.Vehicle_ID); // keep selection state
                      openChargingGuideForCar(car); // open guide or toast
                    }}
                    onMouseEnter={() => setHoveredId(car.Vehicle_ID)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`${vehicleCardBaseClass} ${
                      selectedId === car.Vehicle_ID
                        ? "border-red-600 bg-red-50 shadow-md shadow-red-100"
                        : hoveredId === car.Vehicle_ID
                        ? "border-red-400 bg-red-50/50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-red-300"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <span className={vehicleBrandClass}>
                          {car.Manufacturer}
                        </span>
                        <h3 className={vehicleNameClass}>
                          {car.Vehicle_Name}
                        </h3>
                      </div>
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          selectedId === car.Vehicle_ID
                            ? "bg-red-600 text-white"
                            : hoveredId === car.Vehicle_ID
                            ? "bg-red-500 text-white"
                            : "bg-slate-100 text-slate-400 group-hover:bg-red-100 group-hover:text-red-600"
                        }`}
                      >
                        <Car size={16} />
                      </div>
                    </div>

                    {/* Variant & Price */}
                    <div className="space-y-0.5 mb-3">
                      <p className={vehicleVariantClass}>
                        {car.details?.Vehicle_Variant || "Standard Model"}
                      </p>
                      <p className={vehiclePriceClass}>{car.details?.Price || "Price on Request"}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                      <div className="flex items-center gap-1 text-slate-500">
                        <Battery size={12} />
                        <span className={vehicleStatTextClass}>{car.details?.Battery_Capacity || "N/A"}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Navigation size={12} />
                        <span className={vehicleStatTextClass}>{car.details?.Claimed_Range || "N/A"}</span>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`ml-auto transition-transform ${
                          selectedId === car.Vehicle_ID || hoveredId === car.Vehicle_ID
                            ? "translate-x-1 text-red-600"
                            : "text-slate-300 group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* COLUMN 2: VEHICLE DETAILS (5 cols) */}
            <section className="col-span-12 lg:col-span-5">
              <div className="sticky top-28 self-start">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300">
                {/* Details Header */}
                <div className={detailHeaderClass}>
                  <span className={detailBrandClass}>
                    {displayCar?.Manufacturer}
                  </span>
                  <h2 className={detailNameClass}>
                    {displayCar?.Vehicle_Name}
                  </h2>
                  <div className={detailVariantClass}>
                    <Car size={13} className="text-red-400" />
                    {displayCar?.details?.Vehicle_Variant || "Standard Model"}
                  </div>
                </div>

                {/* Specifications Grid */}
                <div className={detailBodyClass}>
                  <div className="grid grid-cols-2 gap-3">
                    <SpecCard
                      isScale125Like={isScale125Like}
                      icon={<IndianRupee size={16} className="text-red-600" />}
                      label="Price"
                      value={displayCar?.details?.Price}
                    />
                    <SpecCard
                      isScale125Like={isScale125Like}
                      icon={<Battery size={16} className="text-rose-600" />}
                      label="Battery"
                      value={displayCar?.details?.Battery_Capacity}
                    />
                    <SpecCard
                      isScale125Like={isScale125Like}
                      icon={<Navigation size={16} className="text-red-500" />}
                      label="Claimed Range"
                      value={displayCar?.details?.Claimed_Range}
                    />
                    <SpecCard
                      isScale125Like={isScale125Like}
                      icon={<Gauge size={16} className="text-rose-700" />}
                      label="Real Range"
                      value={displayCar?.details?.Realworld_Range}
                      highlight
                    />
                  </div>

                  {/* Charging Type */}
                  <div className={detailConnectorClass}>
                    <div>
                      <p className={connectorLabelClass}>Connector Type</p>
                      <p className={connectorValueClass}>
                        {displayCar?.details?.Charging_Type || "Standard"}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <Zap className="text-red-600" size={18} />
                    </div>
                  </div>

                  {/* CTA Button: now uses the same helper (with toast) */}
                  <button
                    onClick={() => openChargingGuideForCar(displayCar)}
                    disabled={!displayCar?.details?.Guide_ID}
                    className={`${detailCtaClass} ${
                      displayCar?.details?.Guide_ID
                        ? "bg-red-600 hover:bg-red-700 text-white shadow-red-500/20 cursor-pointer"
                        : "bg-slate-300 text-slate-500 cursor-not-allowed shadow-slate-300/20"
                    }`}
                  >
                    View Complete Charging Guide
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className={vehicleIdClass}>
                    Vehicle ID: {displayCar?.Vehicle_ID}
                  </p>
                </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ✅ NEW: Guide Coming Soon Toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-200 ${
          guideToast.open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl px-5 py-4 border border-red-200/70 bg-red-50/90 backdrop-blur-xl shadow-xl">
          <div className="text-slate-900 font-black text-sm mb-1">Guide Coming Soon</div>
          <div className="text-slate-700 text-xs leading-relaxed max-w-[420px]">{guideToast.msg}</div>

          <button
            onClick={() => setGuideToast({ open: false, msg: "" })}
            className="mt-3 text-xs font-bold px-3 py-1.5 rounded-lg bg-white/40 hover:bg-white/60 border border-white/60 text-slate-800"
          >
            OK
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

// Specification Card Component
const SpecCard = ({ icon, label, value, highlight = false, isScale125Like }) => (
  <div
    className={`rounded-lg ${isScale125Like ? "p-5" : "p-6"} border transition-all ${
      highlight ? "bg-red-50 border-red-200" : "bg-white border-slate-200"
    }`}
  >
    <div className="flex items-center gap-1.5 mb-1.5">
      {icon}
      <span className={`${isScale125Like ? "text-[10px]" : "text-[11px]"} uppercase font-bold text-slate-500 tracking-wider`}>
        {label}
      </span>
    </div>
    <p className={`font-bold ${isScale125Like ? "text-[16px] leading-[24px]" : "text-[19px] leading-[30px]"} ${highlight ? "text-red-600" : "text-slate-900"}`}>
      {value || "N/A"}
    </p>
  </div>
);

export default EVCarsCatalogue;
