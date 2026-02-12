import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ChargingGuidePage = ({ vehicleGuideData, coreMessageBlockData }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Guard clause for when data is still loading in App.js
  if (!vehicleGuideData || !coreMessageBlockData) {
    return <div className="p-10 text-center text-slate-500">Initializing Database...</div>;
  }

  // 1. Find message by URL slug
  const message = vehicleGuideData.Core_message.find(
    msg => msg.title.toLowerCase().replace(/ /g, '-') === slug
  );

  if (!message) {
    return <div className="p-10 text-center">Guide not found.</div>;
  }

  // 2. Filter and sort the blocks
  const blocks = coreMessageBlockData.Core_message_blocks
    .filter(block => block.cmsg_id === message.cmsg_id)
    .sort((a, b) => parseInt(a.block_order) - parseInt(b.block_order));

  // 3. Search functionality - find vehicles with guides
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const vehiclesWithGuides = vehicleGuideData['4w_vehicle_details']?.filter(
      v => v.Guide_ID && v.Guide_ID !== ""
    ) || [];

    return vehiclesWithGuides
      .map(detail => {
        const master = vehicleGuideData.Vehicle_master?.find(m => m.Vehicle_ID === detail.Vehicle_ID);
        return master ? { ...detail, ...master } : null;
      })
      .filter(vehicle => {
        if (!vehicle) return false;
        const searchText = `${vehicle.Manufacturer} ${vehicle.Vehicle_Name} ${vehicle.Vehicle_Variant}`.toLowerCase();
        return searchText.includes(query);
      })
      .slice(0, 8);
  }, [vehicleGuideData, searchQuery]);

  // 4. Handle vehicle selection from search
  const handleSelectVehicle = (vehicle) => {
    // Find the guide article for this vehicle
    const guideArticle = vehicleGuideData.Guide_article?.find(g => g.Guide_ID === vehicle.Guide_ID);
    if (guideArticle) {
      const message = vehicleGuideData.Core_message?.find(m => m.cmsg_id === guideArticle.cmsg_id);
      if (message) {
        const slug = message.title.toLowerCase().replace(/ /g, '-');
        navigate(`/charging-guide/${slug}`);
        setSearchQuery('');
        setIsSearchFocused(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const renderBlock = (block) => {
    switch (block.block_type) {
      case 'heading_1':
        return <h1 key={block.block_id} className="text-4xl font-extrabold mb-8 text-slate-900 tracking-tight">{block.text}</h1>;
      case 'heading_2':
        return <h2 key={block.block_id} className="text-2xl font-bold mt-10 mb-4 text-sky-800 border-b border-sky-100 pb-2">{block.text}</h2>;
      case 'heading_3':
        return <h3 key={block.block_id} className="text-xl font-semibold mt-6 mb-3 text-slate-800">{block.text}</h3>;
      case 'body':
        return <p key={block.block_id} className="text-lg leading-relaxed text-slate-700 mb-5">{block.text}</p>;
      case 'list':
        return (
          <ul key={block.block_id} className="space-y-3 mb-6">
            {block.text.split('\n').map((item, i) => (
              <li key={i} className="flex items-start text-lg text-slate-700">
                <span className="text-sky-500 mr-2">•</span>
                {item.replace(/^- /, '')}
              </li>
            ))}
          </ul>
        );
      case 'table':
        return <TableRenderer key={block.block_id} rawText={block.text} />;
      case 'divider':
        return <hr key={block.block_id} className="my-10 border-slate-200" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Row 1: Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 bg-white shadow-xl my-10 rounded-xl border border-slate-100">
        <Link to="/charging-guide/ev-cars" className="text-sky-600 hover:text-sky-800 font-medium mb-10 inline-block">
          ← Back to EV Cars
        </Link>
        {blocks.map(renderBlock)}
      </article>

      {/* Row 2: Search Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-900">
            Find Charging Guide for Other Electric Vehicles
          </h2>
          <p className="text-center text-slate-600 mb-8 text-lg">
            Search by manufacturer, model, or variant
          </p>

          <div className="relative max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              
              <input
                type="text"
                placeholder="Search for your electric vehicle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-slate-200 rounded-xl 
                         focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none 
                         transition-all shadow-sm"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 
                           w-7 h-7 flex items-center justify-center 
                           bg-slate-200 hover:bg-slate-300 rounded-full 
                           text-slate-600 text-xl transition-colors"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {isSearchFocused && searchQuery && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl 
                            shadow-xl border border-slate-200 max-h-96 overflow-y-auto z-50">
                {searchResults.map((vehicle) => (
                  <button
                    key={vehicle.Vehicle_ID}
                    onClick={() => handleSelectVehicle(vehicle)}
                    className="w-full px-5 py-4 text-left border-b border-slate-100 
                             hover:bg-slate-50 transition-colors last:border-b-0"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
                          {vehicle.Manufacturer}
                        </span>
                        <span className="text-lg font-semibold text-slate-900">
                          {vehicle.Vehicle_Name}
                        </span>
                      </div>
                      <div className="text-slate-600">
                        {vehicle.Vehicle_Variant}
                      </div>
                      <div className="text-sm text-slate-500">
                        {vehicle.Battery_Capacity} • {vehicle.Realworld_Range} • {vehicle.Price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No Results Message */}
            {isSearchFocused && searchQuery && searchResults.length === 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl 
                            shadow-xl border border-slate-200 p-8 text-center z-50">
                <p className="text-slate-600 text-lg">
                  No vehicles found matching "{searchQuery}"
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Try searching with a different term
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const TableRenderer = ({ rawText }) => {
  const rows = rawText.trim().split('\n').filter(row => !row.includes('---'));
  const data = rows.map(row => row.split('|').filter(cell => cell.trim() !== ''));

  return (
    <div className="overflow-x-auto my-8 rounded-lg border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            {data[0]?.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {data.slice(1).map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-4 text-sm text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChargingGuidePage;
