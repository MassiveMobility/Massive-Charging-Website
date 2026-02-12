import React, { useState, useMemo } from 'react';
import { Search, Battery, MapPin, Zap, Info, Car, Bike, ChevronRight, Loader2, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EVChargingGuide_Dashboard = ({ database }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('CAT_002');
  const navigate = useNavigate();

  const allVehicles = useMemo(() => {
    if (!database || !database.Vehicle_master) return [];
    
    return database.Vehicle_master.map(v => {
      const details4w = database["4w_vehicle_details"]?.find(d => d.Vehicle_ID === v.Vehicle_ID);
      const details2w = database["2w_vehicle_details"]?.find(d => d.Vehicle_ID === v.Vehicle_ID);
      
      return { 
        ...v, 
        details: details4w || details2w || null 
      };
    });
  }, [database]);

  const filteredResults = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return allVehicles.filter(v => 
      v.Vehicle_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.Manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 6);
  }, [searchTerm, allVehicles]);

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setSearchTerm('');
  };

  if (!database) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
        <p className="text-slate-600 font-semibold text-lg">Loading Vehicle Database...</p>
      </div>
    );
  }

  // Check if active category is the EV Charging Guide (CAT_002)
  const isEVChargingGuide = activeCategory === 'CAT_002';

  return (
    <div className="min-h-screen bg-slate-100">
      
      {/* ROW 1: HERO SECTION */}
      {/* ROW 1: HERO SECTION */}
<header className="relative w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 py-24 px-8 overflow-hidden">
  <div className="max-w-[1400px] mx-auto text-center">

    {/* Badge */}
    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
      Massive Charging Network
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
      Electric Vehicle{" "}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Charging Guide
        </span>
      </span>
    </h1>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
      Everything you need to know about setting up home, office, commercial, and public EV charging
      infrastructure — simplified and practical.
    </p>

    {/* CTA */}
    <button
  onClick={() => {
    document
      .getElementById('charging-guide-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }}
  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
>
  Explore the Guide
  <ArrowRight size={20} />
</button>

  </div>
</header>

      {/* ROW 2: DYNAMIC GRID LAYOUT - UNIFIED APP CONTAINER */}
      <main
  id="charging-guide-section"
  className="max-w-[1600px] mx-auto px-8 py-8"
>
        {/* Unified white container wrapping all columns */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
          <div className={`grid ${isEVChargingGuide ? 'grid-cols-12' : 'grid-cols-12'} gap-8`}>
            
            {/* COLUMN 1: SIDEBAR NAVIGATION (Always 3 cols) */}
            <aside className="col-span-12 lg:col-span-3 bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5 px-2">
                Categories
              </h3>
              <nav className="space-y-2">
                {[
                  { id: 'CAT_002', name: 'e-Vehicles Charging Guide', icon: <Zap size={20}/> },
                  { id: 'CAT_003', name: 'EV Charging 101', icon: <Info size={20}/> },
                  { id: 'CAT_004', name: 'Trip Reports', icon: <MapPin size={20}/> },
                  { id: 'CAT_005', name: 'Charging Stations', icon: <Battery size={20}/> },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-semibold text-sm transition-all ${
                      activeCategory === cat.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : 'text-slate-700 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <span className={activeCategory === cat.id ? 'text-white' : 'text-blue-600'}>
                      {cat.icon}
                    </span>
                    <span className="leading-tight">{cat.name}</span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* CONDITIONAL RENDERING: 2-column layout for EV Guide, 1-column for others */}
            {isEVChargingGuide ? (
              <>
                {/* COLUMN 2: SEARCH + CATEGORY CARDS (5 cols) */}
                <section className="col-span-12 lg:col-span-5 space-y-6">
                  
                  {/* ROW 1: SEARCH */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                      Search Vehicles
                    </h3>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="text"
                        placeholder="Search for BYD eMax, Ola S1..."
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />

                      {filteredResults.length > 0 && (
                        <div className="absolute z-30 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
                          {filteredResults.map(v => (
                            <button
                              key={v.Vehicle_ID}
                              onClick={() => handleSelectVehicle(v)}
                              className="w-full text-left px-4 py-3 hover:bg-blue-50 flex justify-between items-center border-b border-slate-100 last:border-0 transition-colors"
                            >
                              <div>
                                <div className="font-semibold text-slate-900 text-sm">{v.Vehicle_Name}</div>
                                <div className="text-xs text-slate-500">{v.Manufacturer}</div>
                              </div>
                              <ChevronRight size={16} className="text-slate-400" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  
                  {/* ROW 2: CATEGORY CARDS */}
<div className="grid grid-cols-2 gap-4">
  <div 
    onClick={() => navigate('/charging-guide/ev-cars')} // This links to your Cars Catalogue page
    className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group shadow-sm hover:shadow-md"
  >
    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors shadow-sm">
      <Car size={24} className="text-indigo-600 group-hover:text-white transition-colors" />
    </div>
    <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">4-Wheeler EVs</h4>
    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Passenger Cars</p>
  </div>

  {/* 2-Wheeler Card (Optional: Link this to a 2W specific route later) */}
  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:bg-emerald-50 hover:border-emerald-300 transition-all cursor-pointer group shadow-sm hover:shadow-md">
    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors shadow-sm">
      <Bike size={24} className="text-emerald-600 group-hover:text-white transition-colors" />
    </div>
    <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">2-Wheeler EVs</h4>
    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Bikes & Scooters</p>
  </div>
</div>
                </section>

                {/* COLUMN 3: VEHICLE DETAILS (4 cols) */}
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
                          {selectedVehicle.details?.Vehicle_Variant || 'Standard'}
                        </div>
                      </div>
                      
                      {/* Details Grid */}
                      <div className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <DetailBox label="Price" value={selectedVehicle.details?.Price} />
                          <DetailBox label="Battery" value={selectedVehicle.details?.Battery_Capacity} />
                          <DetailBox label="Claimed Range" value={selectedVehicle.details?.Claimed_Range} />
                          <DetailBox label="Real Range" value={selectedVehicle.details?.Realworld_Range} />
                        </div>

                        {/* Charging Info */}
                        <div className="bg-white rounded-xl p-4 flex items-center justify-between border border-slate-200">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                              Connector
                            </p>
                            <p className="text-slate-900 font-bold text-sm">
                              {selectedVehicle.details?.Charging_Type || 'Standard'}
                            </p>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-lg">
                            <Battery className="text-blue-600" size={20} />
                          </div>
                        </div>

                        {/* 🔄 UPDATED: CTA Button with navigation to charging guide */}
                        <button 
                          onClick={() => {
                            // Find the guide for this vehicle
                            const guideArticle = database.Guide_article?.find(g => g.Guide_ID === selectedVehicle.details?.Guide_ID);
                            if (guideArticle) {
                              const message = database.Core_message?.find(m => m.cmsg_id === guideArticle.cmsg_id);
                              if (message) {
                                const slug = message.title.toLowerCase().replace(/ /g, '-');
                                navigate(`/charging-guide/${slug}`);
                              } else {
                                alert('Charging guide not available for this vehicle');
                              }
                            } else {
                              alert('Charging guide not available for this vehicle');
                            }
                          }}
                          disabled={!selectedVehicle.details?.Guide_ID}
                          className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg ${
                            selectedVehicle.details?.Guide_ID 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 cursor-pointer' 
                              : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-slate-300/20'
                          }`}
                        >
                          View Charging Guide
                          <ChevronRight size={18} />
                        </button>
                        {/* 🔄 END OF UPDATE */}
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
              /* SINGLE COLUMN: CONTENT COMING SOON (9 cols spanning remaining space) */
              <section className="col-span-12 lg:col-span-9">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-16 text-center h-full min-h-[600px] flex flex-col items-center justify-center">
                  <div className="bg-white p-8 rounded-3xl mb-6 shadow-lg">
                    <Clock size={64} className="text-slate-300" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-800 mb-4">
                    Content Coming Soon
                  </h2>
                  <p className="text-lg text-slate-500 font-medium max-w-md">
                    We're working hard to bring you comprehensive guides for this category. Stay tuned!
                  </p>
                </div>
              </section>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

const DetailBox = ({ label, value }) => (
  <div className="bg-white rounded-xl p-3 border border-slate-200">
    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">{label}</p>
    <p className="text-slate-900 font-bold text-base">{value || 'N/A'}</p>
  </div>
);

export default EVChargingGuide_Dashboard;
