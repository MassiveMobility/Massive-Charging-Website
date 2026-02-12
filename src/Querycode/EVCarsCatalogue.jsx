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
        <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
        <p className="text-slate-600 font-semibold text-lg">Loading Vehicle Catalogue...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* ROW 1: HEADER */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            Complete EV Catalogue
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-3 tracking-tight">
            Electric <span className="text-blue-400">Cars Catalogue</span>
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Browse our comprehensive collection of electric vehicles with detailed specifications and charging guides.
          </p>
        </div>
      </header>

      {/* ROW 2: 2-COLUMN GRID */}
      <main className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* COLUMN 1: VEHICLE CARDS (Wide - 7 cols) */}
            <section className="col-span-12 lg:col-span-7 space-y-5">
              {/* Search Bar */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Browse Vehicles</h3>
                  <span className="text-xs font-bold text-slate-400">{filteredCars.length} Models</span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search by model or manufacturer..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    value={catalogSearch}
                    onChange={(e) => setCatalogSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Vehicle Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[calc(100vh-340px)] overflow-y-auto pr-2 custom-scrollbar">
                {filteredCars.map((car) => (
                  <div
                    key={car.Vehicle_ID}
                    onClick={() => {
                      setSelectedId(car.Vehicle_ID); // keep selection state
                      openChargingGuideForCar(car); // open guide or toast
                    }}
                    onMouseEnter={() => setHoveredId(car.Vehicle_ID)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedId === car.Vehicle_ID
                        ? "border-blue-600 bg-blue-50 shadow-md shadow-blue-100"
                        : hoveredId === car.Vehicle_ID
                        ? "border-blue-400 bg-blue-50/50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
                          {car.Manufacturer}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 leading-tight mt-0.5">
                          {car.Vehicle_Name}
                        </h3>
                      </div>
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          selectedId === car.Vehicle_ID
                            ? "bg-blue-600 text-white"
                            : hoveredId === car.Vehicle_ID
                            ? "bg-blue-500 text-white"
                            : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600"
                        }`}
                      >
                        <Car size={16} />
                      </div>
                    </div>

                    {/* Variant & Price */}
                    <div className="space-y-0.5 mb-3">
                      <p className="text-[10px] font-medium text-slate-500 line-clamp-1">
                        {car.details?.Vehicle_Variant || "Standard Model"}
                      </p>
                      <p className="text-sm font-bold text-slate-900">{car.details?.Price || "Price on Request"}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                      <div className="flex items-center gap-1 text-slate-500">
                        <Battery size={12} />
                        <span className="text-[10px] font-semibold">{car.details?.Battery_Capacity || "N/A"}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Navigation size={12} />
                        <span className="text-[10px] font-semibold">{car.details?.Claimed_Range || "N/A"}</span>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`ml-auto transition-transform ${
                          selectedId === car.Vehicle_ID || hoveredId === car.Vehicle_ID
                            ? "translate-x-1 text-blue-600"
                            : "text-slate-300 group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* COLUMN 2: VEHICLE DETAILS (5 cols) */}
            <section className="col-span-12 lg:col-span-5 sticky top-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300">
                {/* Details Header */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-lg bg-white/10 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-3 border border-white/20">
                    {displayCar?.Manufacturer}
                  </span>
                  <h2 className="text-2xl font-black leading-tight mb-2 tracking-tight">
                    {displayCar?.Vehicle_Name}
                  </h2>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <Car size={13} className="text-blue-400" />
                    {displayCar?.details?.Vehicle_Variant || "Standard Model"}
                  </div>
                </div>

                {/* Specifications Grid */}
                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    <SpecCard
                      icon={<IndianRupee size={16} className="text-blue-600" />}
                      label="Price"
                      value={displayCar?.details?.Price}
                    />
                    <SpecCard
                      icon={<Battery size={16} className="text-emerald-600" />}
                      label="Battery"
                      value={displayCar?.details?.Battery_Capacity}
                    />
                    <SpecCard
                      icon={<Navigation size={16} className="text-violet-600" />}
                      label="Claimed Range"
                      value={displayCar?.details?.Claimed_Range}
                    />
                    <SpecCard
                      icon={<Gauge size={16} className="text-orange-600" />}
                      label="Real Range"
                      value={displayCar?.details?.Realworld_Range}
                      highlight
                    />
                  </div>

                  {/* Charging Type */}
                  <div className="bg-white rounded-xl p-3.5 flex items-center justify-between border border-slate-200">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Connector Type</p>
                      <p className="text-slate-900 font-bold text-sm">
                        {displayCar?.details?.Charging_Type || "Standard"}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <Zap className="text-blue-600" size={18} />
                    </div>
                  </div>

                  {/* CTA Button: now uses the same helper (with toast) */}
                  <button
                    onClick={() => openChargingGuideForCar(displayCar)}
                    disabled={!displayCar?.details?.Guide_ID}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg group ${
                      displayCar?.details?.Guide_ID
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 cursor-pointer"
                        : "bg-slate-300 text-slate-500 cursor-not-allowed shadow-slate-300/20"
                    }`}
                  >
                    View Complete Charging Guide
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-slate-400 text-[10px] font-medium uppercase tracking-wider">
                    Vehicle ID: {displayCar?.Vehicle_ID}
                  </p>
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
        <div className="rounded-2xl px-5 py-4 border border-lime-200/60 bg-lime-200/20 backdrop-blur-xl shadow-xl">
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
const SpecCard = ({ icon, label, value, highlight = false }) => (
  <div
    className={`rounded-lg p-3 border transition-all ${
      highlight ? "bg-blue-50 border-blue-200" : "bg-white border-slate-200"
    }`}
  >
    <div className="flex items-center gap-1.5 mb-1.5">
      {icon}
      <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">{label}</span>
    </div>
    <p className={`font-bold text-sm ${highlight ? "text-blue-600" : "text-slate-900"}`}>
      {value || "N/A"}
    </p>
  </div>
);

export default EVCarsCatalogue;