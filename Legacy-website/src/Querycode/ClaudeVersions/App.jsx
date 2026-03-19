import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EVGallery from './EVGallery'; 
import ArticlePage from './Content/ArticlePage';
import ChargingGuideHome from './Content/ChargingGuideHome'; 
import ChargingGuidePage from './Querycode/ChargingGuidePage';
// Import your existing components
import EVChargingGuide_Dashboard from './Querycode/EVChargingGuide_Dashboard';
import EVCarsCatalogue from './Querycode/EVCarsCatalogue';

function App() {
  const [database, setDatabase] = useState(null);
  const [coreMessageData, setCoreMessageData] = useState(null);

  useEffect(() => {
    // Fetch BOTH JSON files at the highest level
    const loadData = async () => {
      try {
        const [vehicleResponse, messageResponse] = await Promise.all([
          fetch('/vehicle_guide.json'),
          fetch('/Core_message_block.json')
        ]);

        const vehicleData = await vehicleResponse.json();
        const messageData = await messageResponse.json();

        setDatabase(vehicleData);
        setCoreMessageData(messageData);
        
        console.log('✅ Both JSON files loaded successfully');
      } catch (err) {
        console.error("❌ Database fetch error:", err);
      }
    };

    loadData();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <nav className="bg-white border-b border-slate-200 px-6 py-4 flex gap-8 shadow-sm">
          <Link to="/" className="font-bold text-slate-700 hover:text-sky-600">EV Catalog</Link>
          <Link to="/charging-guide" className="font-bold text-slate-700 hover:text-sky-600">Charging Guide</Link>
          <Link to="/Query-guide" className="font-bold text-slate-700 hover:text-sky-600">Query Guide</Link>
          <Link to="/Catalogue" className="font-bold text-slate-700 hover:text-sky-600">Cars Catalogue</Link>
          {/* New link for the new Charging Guide Page */}
          <Link to="/charging-guide-page" className="font-bold text-slate-700 hover:text-sky-600">Guide Page</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EVGallery />} />
          
          <Route path="/charging-guide" element={<ChargingGuideHome database={database} />} />
          
          <Route path="/Query-guide" element={<EVChargingGuide_Dashboard database={database} />} />
          
          <Route path="/guide/:guideId" element={<ArticlePage database={database} coreMessageData={coreMessageData} />} />
          
          <Route path="/Catalogue" element={<EVCarsCatalogue database={database} />} />
          
          <Route path="/Core_Message" element={<ArticlePage database={database} coreMessageData={coreMessageData} />} />
          
          {/* New Route for ChargingGuidePage */}
          <Route 
            path="/charging-guide-page" 
            element={<ChargingGuidePage vehicleGuideData={database} coreMessageBlockData={coreMessageData} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
