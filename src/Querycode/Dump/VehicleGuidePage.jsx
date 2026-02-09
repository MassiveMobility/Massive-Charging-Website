import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Battery, 
  Zap, 
  Navigation, 
  IndianRupee,
  Clock,
  BookOpen,
  Loader2
} from 'lucide-react';

const VehicleGuidePage = ({ vehicleDatabase, contentDatabase }) => {
  const { vehicleId } = useParams(); // Get Vehicle_ID from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (vehicleDatabase && contentDatabase) {
      setLoading(false);
    }
  }, [vehicleDatabase, contentDatabase]);

  // Find the vehicle details from Vehicle_master and 4w_vehicle_details
  const vehicleData = useMemo(() => {
    if (!vehicleDatabase) return null;
    
    const vehicleMaster = vehicleDatabase.Vehicle_master?.find(
      v => v.Vehicle_ID === vehicleId
    );
    
    if (!vehicleMaster) return null;
    
    const vehicleDetails = vehicleDatabase["4w_vehicle_details"]?.find(
      d => d.Vehicle_ID === vehicleId
    );
    
    return {
      ...vehicleMaster,
      details: vehicleDetails
    };
  }, [vehicleDatabase, vehicleId]);

  // Find the Guide_ID from vehicle details
  const guideId = vehicleData?.details?.Guide_ID;

  // Find the cmsg_id from Guide_article using Guide_ID
  const guideArticle = useMemo(() => {
    if (!vehicleDatabase || !guideId) return null;
    
    return vehicleDatabase.Guide_article?.find(
      article => article.Guide_ID === guideId
    );
  }, [vehicleDatabase, guideId]);

  // Get the cmsg_id to fetch content
  const cmsgId = guideArticle?.cmsg_id;

  // Find the Core_message metadata
  const coreMessage = useMemo(() => {
    if (!vehicleDatabase || !cmsgId) return null;
    
    return vehicleDatabase.Core_message?.find(
      msg => msg.cmsg_id === cmsgId
    );
  }, [vehicleDatabase, cmsgId]);

  // Fetch all content blocks for this cmsg_id
  const contentBlocks = useMemo(() => {
    if (!contentDatabase || !cmsgId) return [];
    
    const blocks = contentDatabase.Core_message_blocks?.filter(
      block => block.cmsg_id === cmsgId
    ) || [];
    
    // Sort by block_order
    return blocks.sort((a, b) => parseInt(a.block_order) - parseInt(b.block_order));
  }, [contentDatabase, cmsgId]);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
        <p className="text-slate-600 font-semibold text-lg">Loading Guide...</p>
      </div>
    );
  }

  if (!vehicleData) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-md">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Vehicle Not Found</h2>
          <p className="text-slate-600 mb-6">The vehicle you're looking for doesn't exist in our database.</p>
          <button 
            onClick={() => navigate('/catalogue')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            Back to Catalogue
          </button>
        </div>
      </div>
    );
  }

  if (!guideId || !cmsgId || contentBlocks.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100">
        {/* Header */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-8">
          <div className="max-w-[1200px] mx-auto">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back</span>
            </button>
            <h1 className="text-4xl font-black mb-2">{vehicleData.Vehicle_Name}</h1>
            <p className="text-slate-400">{vehicleData.Manufacturer}</p>
          </div>
        </header>

        {/* Content Coming Soon */}
        <main className="max-w-[1200px] mx-auto px-8 py-12">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-16 text-center">
            <div className="bg-slate-50 p-8 rounded-3xl inline-block mb-6">
              <BookOpen size={64} className="text-slate-300" />
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-4">
              Guide Coming Soon
            </h2>
            <p className="text-lg text-slate-500 max-w-md mx-auto">
              We're currently working on the detailed charging guide for this vehicle. 
              Check back soon for comprehensive charging instructions.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Render the guide content
  return (
    <div className="min-h-screen bg-slate-100">
      
      {/* Header Section */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-8">
        <div className="max-w-[1200px] mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Catalogue</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vehicle Info */}
            <div className="lg:col-span-2">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                {vehicleData.Manufacturer}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-3 tracking-tight">
                {vehicleData.Vehicle_Name}
              </h1>
              <p className="text-xl text-slate-300 mb-4">
                {coreMessage?.title || 'Residential Charging Guide'}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock size={16} />
                  <span>{new Date(coreMessage?.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={16} />
                  <span>By {coreMessage?.author || 'Massive'}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Quick Specs
              </h3>
              <div className="space-y-3">
                <QuickSpec 
                  icon={<Battery size={16} />} 
                  label="Battery" 
                  value={vehicleData.details?.Battery_Capacity} 
                />
                <QuickSpec 
                  icon={<Navigation size={16} />} 
                  label="Range" 
                  value={vehicleData.details?.Claimed_Range} 
                />
                <QuickSpec 
                  icon={<Zap size={16} />} 
                  label="Connector" 
                  value={vehicleData.details?.Charging_Type} 
                />
                <QuickSpec 
                  icon={<IndianRupee size={16} />} 
                  label="Price" 
                  value={vehicleData.details?.Price} 
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <article className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="prose prose-slate max-w-none p-12">
            {contentBlocks.map((block) => (
              <ContentBlock key={block.block_id} block={block} />
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

// Quick Spec Component
const QuickSpec = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-slate-300">
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </div>
    <span className="text-white font-bold text-sm">{value || 'N/A'}</span>
  </div>
);

// Content Block Renderer
const ContentBlock = ({ block }) => {
  const renderBlock = () => {
    switch (block.block_type) {
      case 'heading_1':
        return (
          <h1 className="text-4xl font-black text-slate-900 mb-6 mt-8">
            {block.text}
          </h1>
        );
      
      case 'heading_2':
        return (
          <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-8">
            {block.text}
          </h2>
        );
      
      case 'heading_3':
        return (
          <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-6">
            {block.text}
          </h3>
        );
      
      case 'body':
        return (
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            {block.text}
          </p>
        );
      
      case 'list':
        const listItems = block.text.split('\n').filter(item => item.trim());
        return (
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            {listItems.map((item, index) => (
              <li key={index} className="text-lg text-slate-700">
                {item.replace(/^-\s*/, '').trim()}
              </li>
            ))}
          </ul>
        );
      
      case 'divider':
        return <hr className="my-8 border-slate-200" />;
      
      case 'table':
        return (
          <div className="overflow-x-auto my-6">
            <MarkdownTable markdown={block.text} />
          </div>
        );
      
      case 'image':
        if (block.src) {
          return (
            <figure className="my-8">
              <img 
                src={block.src} 
                alt={block.alt || ''} 
                className="w-full rounded-xl shadow-lg"
              />
              {block.alt && (
                <figcaption className="text-sm text-slate-500 text-center mt-3">
                  {block.alt}
                </figcaption>
              )}
            </figure>
          );
        }
        return null;
      
      default:
        return (
          <div className="text-slate-700 mb-4">
            {block.text}
          </div>
        );
    }
  };

  return <div className="content-block">{renderBlock()}</div>;
};

// Markdown Table Parser
const MarkdownTable = ({ markdown }) => {
  const lines = markdown.trim().split('\n');
  if (lines.length < 2) return null;

  const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);
  const rows = lines.slice(2).map(line => 
    line.split('|').map(cell => cell.trim()).filter(Boolean)
  );

  return (
    <table className="w-full border-collapse bg-slate-50 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-slate-900 text-white">
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-3 text-left text-sm font-bold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b border-slate-200 hover:bg-white transition-colors">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-3 text-sm text-slate-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VehicleGuidePage;
