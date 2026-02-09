import React, { useState, useEffect, useMemo } from 'react';

const ChargingGuidePage = ({ vehicleGuideData, coreMessageBlockData }) => {
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Auto-select first vehicle with guide when data loads
  useEffect(() => {
    if (vehicleGuideData && !selectedVehicleId) {
      // ✅ FIXED: Changed from Vehicle_details to 4w_vehicle_details
      const firstVehicleWithGuide = vehicleGuideData['4w_vehicle_details']?.find(
        v => v.Guide_ID && v.Guide_ID !== ""
      );
      if (firstVehicleWithGuide) {
        setSelectedVehicleId(firstVehicleWithGuide.Vehicle_ID);
      }
    }
  }, [vehicleGuideData, selectedVehicleId]);

  // Get current vehicle details
  const currentVehicle = useMemo(() => {
    if (!vehicleGuideData || !selectedVehicleId) return null;

    // ✅ FIXED: Changed from Vehicle_details to 4w_vehicle_details
    const detail = vehicleGuideData['4w_vehicle_details']?.find(v => v.Vehicle_ID === selectedVehicleId);
    const master = vehicleGuideData.Vehicle_master?.find(v => v.Vehicle_ID === selectedVehicleId);

    return detail && master ? { ...detail, ...master } : null;
  }, [vehicleGuideData, selectedVehicleId]);

  // Get article blocks for current vehicle
  const articleBlocks = useMemo(() => {
    if (!vehicleGuideData || !coreMessageBlockData || !currentVehicle?.Guide_ID) return [];

    const guideArticle = vehicleGuideData.Guide_article?.find(g => g.Guide_ID === currentVehicle.Guide_ID);
    if (!guideArticle) return [];

    const blocks = coreMessageBlockData.Core_message_blocks
      ?.filter(block => block.cmsg_id === guideArticle.cmsg_id)
      .sort((a, b) => parseInt(a.block_order) - parseInt(b.block_order)) || [];

    return blocks;
  }, [vehicleGuideData, coreMessageBlockData, currentVehicle]);

  // Search and filter vehicles
  const searchResults = useMemo(() => {
    if (!vehicleGuideData || !searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    // ✅ FIXED: Changed from Vehicle_details to 4w_vehicle_details
    const vehiclesWithGuides = vehicleGuideData['4w_vehicle_details']?.filter(v => v.Guide_ID && v.Guide_ID !== "") || [];

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

  // Render article content block
  const renderBlock = (block) => {
    switch (block.block_type) {
      case 'heading_1':
        return <h1 key={block.block_id} className="article-h1">{block.text}</h1>;

      case 'heading_2':
        return <h2 key={block.block_id} className="article-h2">{block.text}</h2>;

      case 'heading_3':
        return <h3 key={block.block_id} className="article-h3">{block.text}</h3>;

      case 'body':
        return <p key={block.block_id} className="article-p">{block.text}</p>;

      case 'list':
        const items = block.text
          .split('\n')
          .map(item => item.trim())
          .filter(item => item.startsWith('-'))
          .map(item => item.substring(1).trim());

        return (
          <ul key={block.block_id} className="article-ul">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );

      case 'divider':
        return <div key={block.block_id} className="article-divider" />;

      case 'image':
        return block.src ? (
          <img key={block.block_id} src={block.src} alt={block.alt || ''} className="article-img" />
        ) : null;

      default:
        return <div key={block.block_id}>{block.text}</div>;
    }
  };

  // Handle vehicle selection from search
  const handleSelectVehicle = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
    setSearchQuery('');
    setIsSearchFocused(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading state
  if (!vehicleGuideData || !coreMessageBlockData) {
    return (
      <div style={styles.loading}>
        <div style={styles.loadingSpinner}></div>
        <p>Loading charging guides...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Row 1: Charging Guide Content */}
      <section style={styles.contentSection}>
        <div style={styles.contentWrapper}>
          {currentVehicle && articleBlocks.length > 0 ? (
            <article style={styles.article}>
              {/* Vehicle header card */}
              <div style={styles.vehicleCard}>
                <div style={styles.vehicleCardHeader}>
                  <h2 style={styles.vehicleTitle}>
                    {currentVehicle.Manufacturer} {currentVehicle.Vehicle_Name}
                  </h2>
                  <span style={styles.vehicleVariant}>{currentVehicle.Vehicle_Variant}</span>
                </div>
                <div style={styles.vehicleSpecs}>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Battery</span>
                    <span style={styles.specValue}>{currentVehicle.Battery_Capacity}</span>
                  </div>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Range</span>
                    <span style={styles.specValue}>{currentVehicle.Realworld_Range}</span>
                  </div>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Charging</span>
                    <span style={styles.specValue}>{currentVehicle.Charging_Type}</span>
                  </div>
                  <div style={styles.spec}>
                    <span style={styles.specLabel}>Price</span>
                    <span style={styles.specValue}>{currentVehicle.Price}</span>
                  </div>
                </div>
              </div>

              {/* Article content */}
              <div style={styles.articleContent}>
                {articleBlocks.map(block => renderBlock(block))}
              </div>
            </article>
          ) : (
            <div style={styles.noGuide}>
              <h2>No Charging Guide Available</h2>
              <p>Please select a vehicle from the search below to view its charging guide.</p>
            </div>
          )}
        </div>
      </section>

      {/* Row 2: Search Section */}
      <section style={styles.searchSection}>
        <div style={styles.searchWrapper}>
          <h2 style={styles.searchTitle}>Find Charging Guide for Other Electric Vehicles</h2>
          <p style={styles.searchSubtitle}>Search by manufacturer, model, or variant</p>
          
          <div style={styles.searchContainer}>
            <div style={styles.searchInputWrapper}>
              <svg style={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
                style={styles.searchInput}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={styles.clearButton}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {isSearchFocused && searchQuery && searchResults.length > 0 && (
              <div style={styles.dropdown}>
                {searchResults.map((vehicle) => (
                  <button
                    key={vehicle.Vehicle_ID}
                    onClick={() => handleSelectVehicle(vehicle.Vehicle_ID)}
                    style={styles.dropdownItem}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9ff'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                  >
                    <div style={styles.dropdownItemContent}>
                      <div style={styles.dropdownItemMain}>
                        <span style={styles.dropdownManufacturer}>{vehicle.Manufacturer}</span>
                        <span style={styles.dropdownModel}>{vehicle.Vehicle_Name}</span>
                      </div>
                      <div style={styles.dropdownItemVariant}>{vehicle.Vehicle_Variant}</div>
                      <div style={styles.dropdownItemSpecs}>
                        {vehicle.Battery_Capacity} • {vehicle.Realworld_Range} • {vehicle.Price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No results message */}
            {isSearchFocused && searchQuery && searchResults.length === 0 && (
              <div style={styles.dropdown}>
                <div style={styles.noResults}>
                  <p>No vehicles found matching "{searchQuery}"</p>
                  <p style={styles.noResultsSubtext}>Try searching with a different term</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const styles = {
  container: {
    minHeight: '100vh',
    background: '#f8f9fa',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: '1rem',
    color: '#667eea',
    fontSize: '1.2rem',
  },
  loadingSpinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #e0e0e0',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  contentSection: {
    background: 'white',
    padding: '3rem 0',
    borderBottom: '1px solid #e0e0e0',
  },
  contentWrapper: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  vehicleCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    padding: '2rem',
    color: 'white',
    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.2)',
  },
  vehicleCardHeader: {
    marginBottom: '1.5rem',
  },
  vehicleTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: 'white',
  },
  vehicleVariant: {
    fontSize: '1.1rem',
    opacity: '0.9',
    fontWeight: '500',
  },
  vehicleSpecs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1.5rem',
  },
  spec: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  specLabel: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    opacity: '0.8',
  },
  specValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
  },
  articleContent: {
    lineHeight: '1.8',
  },
  noGuide: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: '#666',
  },
  searchSection: {
    background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
    padding: '4rem 0 6rem',
  },
  searchWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  searchTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#1a1a1a',
  },
  searchSubtitle: {
    fontSize: '1.1rem',
    textAlign: 'center',
    color: '#666',
    marginBottom: '2rem',
  },
  searchContainer: {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
  },
  searchInputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: '1.25rem',
    width: '20px',
    height: '20px',
    color: '#999',
    pointerEvents: 'none',
  },
  searchInput: {
    width: '100%',
    padding: '1rem 3rem 1rem 3.5rem',
    fontSize: '1.1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    outline: 'none',
    transition: 'all 0.3s ease',
    background: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  clearButton: {
    position: 'absolute',
    right: '1rem',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: '#e0e0e0',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: '#666',
    transition: 'all 0.2s ease',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 0.5rem)',
    left: 0,
    right: 0,
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    maxHeight: '400px',
    overflowY: 'auto',
    zIndex: 1000,
    border: '1px solid #e0e0e0',
  },
  dropdownItem: {
    width: '100%',
    padding: '1rem 1.25rem',
    border: 'none',
    background: 'white',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background 0.2s ease',
    borderBottom: '1px solid #f0f0f0',
  },
  dropdownItemContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  dropdownItemMain: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  dropdownManufacturer: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#667eea',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  dropdownModel: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  dropdownItemVariant: {
    fontSize: '0.95rem',
    color: '#666',
  },
  dropdownItemSpecs: {
    fontSize: '0.85rem',
    color: '#999',
  },
  noResults: {
    padding: '2rem',
    textAlign: 'center',
    color: '#999',
  },
  noResultsSubtext: {
    fontSize: '0.9rem',
    marginTop: '0.5rem',
  },
};

// CSS for article content
const articleStyles = `
  .article-h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .article-h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 2.5rem 0 1rem 0;
    padding-top: 1.5rem;
  }

  .article-h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #34495e;
    margin: 2rem 0 1rem 0;
  }

  .article-p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #4a4a4a;
    margin-bottom: 1.2rem;
  }

  .article-ul {
    margin: 1.5rem 0;
    padding-left: 0;
    list-style: none;
  }

  .article-ul li {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #4a4a4a;
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
  }

  .article-ul li::before {
    content: "●";
    color: #667eea;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  .article-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, #e0e0e0, transparent);
    margin: 2.5rem 0;
  }

  .article-img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    .article-h1 {
      font-size: 2rem;
    }

    .article-h2 {
      font-size: 1.5rem;
    }

    .article-h3 {
      font-size: 1.2rem;
    }
  }
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = articleStyles;
  document.head.appendChild(styleTag);
}

export default ChargingGuidePage;
