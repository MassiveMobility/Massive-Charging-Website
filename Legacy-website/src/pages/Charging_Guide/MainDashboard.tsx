/* MainDashboard.tsx */
import React, { useMemo, useState } from "react";
import {
  Search,
  Battery,
  MapPin,
  Zap,
  Info,
  Car,
  Bike,
  ChevronRight,
  Loader2,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * ✅ Data Flow Compatibility
 * - New flow: <MainDashboard vehicleGuideData={vehicleGuideData} />
 * - Old flow: <MainDashboard database={vehicleGuideData} />
 * We support BOTH, without changing any upstream data flow.
 */
interface MainDashboardProps {
  vehicleGuideData?: any;
  database?: any;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ vehicleGuideData, database }) => {
  const navigate = useNavigate();

  // ✅ Single internal reference
  const db = database ?? vehicleGuideData;

  // ✅ Same logic as before (only UI upgraded)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  // UI-only state (extracted pattern from EVChargingGuide_Dashboard)
  const [activeCategory, setActiveCategory] = useState("CAT_002");
  const isEVChargingGuide = activeCategory === "CAT_002";

  const allVehicles = useMemo(() => {
    if (!db || !db.Vehicle_master) return [];

    return db.Vehicle_master.map((v: any) => {
      const details4w = db["4w_vehicle_details"]?.find(
        (d: any) => d.Vehicle_ID === v.Vehicle_ID
      );
      const details2w = db["2w_vehicle_details"]?.find(
        (d: any) => d.Vehicle_ID === v.Vehicle_ID
      );
      return { ...v, details: details4w || details2w || null };
    });
  }, [db]);

  const filteredResults = useMemo(() => {
    if (searchTerm.trim().length < 2) return [];
    const q = searchTerm.toLowerCase();

    return allVehicles
      .filter((v: any) => {
        const name = (v.Vehicle_Name || "").toLowerCase();
        const mfg = (v.Manufacturer || "").toLowerCase();
        return name.includes(q) || mfg.includes(q);
      })
      .slice(0, 6);
  }, [searchTerm, allVehicles]);

  const handleSelectVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setSearchTerm("");
  };

  const slugify = (name: string) =>
    (name || "")
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  // ✅ Better empty-state UI (data flow unchanged)
  if (!db) {
    return (
      <div className="w-full flex flex-col items-center justify-center bg-slate-50 rounded-3xl border border-slate-200 p-12">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
        <p className="text-slate-600 font-semibold text-lg">Loading Vehicle Database…</p>
        <p className="text-slate-400 text-sm mt-1">
          Waiting for App source-of-truth JSON
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
      <div className="grid grid-cols-12 gap-8">
        {/* COLUMN 1: SIDEBAR (UI extracted) */}
        <aside className="col-span-12 lg:col-span-3 bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5 px-2">
            Categories
          </h3>

          <nav className="space-y-2">
            {[
              {
                id: "CAT_002",
                name: "e-Vehicles Charging Guide",
                icon: <Zap size={20} />,
              },
              { id: "CAT_003", name: "EV Charging 101", icon: <Info size={20} /> },
              { id: "CAT_004", name: "Trip Reports", icon: <MapPin size={20} /> },
              { id: "CAT_005", name: "Charging Stations", icon: <Battery size={20} /> },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-semibold text-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-slate-700 hover:bg-white hover:shadow-sm"
                }`}
              >
                <span className={activeCategory === cat.id ? "text-white" : "text-blue-600"}>
                  {cat.icon}
                </span>
                <span className="leading-tight">{cat.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* CONTENT AREA */}
        {isEVChargingGuide ? (
          <>
            {/* COLUMN 2: SEARCH + CARDS */}
            <section className="col-span-12 lg:col-span-5 space-y-6">
              {/* Search card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Search Vehicles
                </h3>

                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Search for Tata Nexon, BYD eMax, Ola…"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  {filteredResults.length > 0 && (
                    <div className="absolute z-30 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
                      {filteredResults.map((v: any) => (
                        <button
                          key={v.Vehicle_ID}
                          onClick={() => handleSelectVehicle(v)}
                          className="w-full text-left px-4 py-3 hover:bg-blue-50 flex justify-between items-center border-b border-slate-100 last:border-0 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">
                              {v.Vehicle_Name}
                            </div>
                            <div className="text-xs text-slate-500">{v.Manufacturer}</div>
                          </div>
                          <ChevronRight size={16} className="text-slate-400" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Category cards */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => navigate("/charging-guide/ev-cars")}
                  className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors shadow-sm">
                    <Car
                      size={24}
                      className="text-indigo-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">
                    4-Wheeler EVs
                  </h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                    Passenger Cars
                  </p>
                </div>

                {/* 2W card - UI ready; wire route when your 2W page exists */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:bg-emerald-50 hover:border-emerald-300 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors shadow-sm">
                    <Bike
                      size={24}
                      className="text-emerald-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">
                    2-Wheeler EVs
                  </h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                    Bikes & Scooters
                  </p>
                </div>
              </div>
            </section>

            {/* COLUMN 3: VEHICLE DETAILS */}
            <section className="col-span-12 lg:col-span-4">
              {selectedVehicle ? (
                <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-lg bg-white/10 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-3 border border-white/20">
                      {selectedVehicle.Manufacturer}
                    </span>

                    <h3 className="text-2xl font-black mb-2 leading-tight">
                      {selectedVehicle.Vehicle_Name}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Zap size={14} className="text-blue-400" />
                      {selectedVehicle.details?.Vehicle_Variant || "Standard"}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <DetailBox label="Price" value={selectedVehicle.details?.Price} />
                      <DetailBox
                        label="Battery"
                        value={selectedVehicle.details?.Battery_Capacity}
                      />
                      <DetailBox
                        label="Claimed Range"
                        value={selectedVehicle.details?.Claimed_Range}
                      />
                      <DetailBox
                        label="Real Range"
                        value={selectedVehicle.details?.Realworld_Range}
                      />
                    </div>

                    {/* Charging info */}
                    <div className="bg-white rounded-xl p-4 flex items-center justify-between border border-slate-200">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Connector
                        </p>
                        <p className="text-slate-900 font-bold text-sm">
                          {selectedVehicle.details?.Charging_Type || "Standard"}
                        </p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <Battery className="text-blue-600" size={20} />
                      </div>
                    </div>

                    {/* CTA (keeps old behaviour: slugify vehicle name) */}
                    <button
                      onClick={() =>
                        navigate(`/charging-guide/${slugify(selectedVehicle.Vehicle_Name)}`)
                      }
                      className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20"
                    >
                      View Full Guide
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center h-full min-h-[500px] flex flex-col items-center justify-center">
                  <div className="bg-white p-5 rounded-2xl mb-4 shadow-sm">
                    <Search size={36} className="text-slate-300" />
                  </div>
                  <h4 className="text-slate-400 font-semibold">
                    Search for a vehicle to view details
                  </h4>
                </div>
              )}
            </section>
          </>
        ) : (
          <section className="col-span-12 lg:col-span-9">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-16 text-center h-full min-h-[600px] flex flex-col items-center justify-center">
              <div className="bg-white p-8 rounded-3xl mb-6 shadow-lg">
                <Clock size={64} className="text-slate-300" />
              </div>
              <h2 className="text-4xl font-black text-slate-800 mb-4">Content Coming Soon</h2>
              <p className="text-lg text-slate-500 font-medium max-w-md">
                We’re building comprehensive guides for this category. Stay tuned!
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const DetailBox: React.FC<{ label: string; value: any }> = ({ label, value }) => (
  <div className="bg-white rounded-xl p-3 border border-slate-200">
    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">
      {label}
    </p>
    <p className="text-slate-900 font-bold text-base">{value || "N/A"}</p>
  </div>
);

export default MainDashboard;