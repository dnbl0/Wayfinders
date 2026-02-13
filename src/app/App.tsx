import React, { useState, useMemo } from 'react';
import StationMap from './components/Map';
import { LocationSearch } from './components/LocationSearch';
import { StationCard } from './components/StationCard';
import { StationDetail } from './components/StationDetail';
import { Filters } from './components/Filters';
import { mockStations, Station } from './data/mockStations';
import { useStations } from './hooks/useStations';
import { usePostcodes } from './hooks/usePostcodes';
import clsx from 'clsx';
import { Map as MapIcon, List as ListIcon, Loader2 } from 'lucide-react';

export default function App() {
  const { stations: fetchedStations, isLoading: isLoadingStations, error: stationsError } = useStations();
  const [viewMode, setViewMode] = useState<'list' | 'detail' | 'filter'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [committedQuery, setCommittedQuery] = useState(''); // New state for triggering results
  const [searchLocation, setSearchLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number] | undefined>(undefined);
  const [mapZoom, setMapZoom] = useState<number | undefined>(undefined);
  
  // Mobile state: 'list' (sidebar visible) or 'map' (sidebar hidden)
  const [mobileView, setMobileView] = useState<'list' | 'map'>('list');
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Fetch postcode data
  const { postcodes, isLoading: isLoadingPostcodes, error: postcodesError } = usePostcodes();

  // Derived state for filtered stations
  const filteredStations = useMemo(() => {
    let stations = fetchedStations;

    // Apply location or text search
    if (searchLocation) {
      // Filter by proximity (e.g., within 50km)
      stations = stations.filter(s => {
        const dist = Math.sqrt(Math.pow(s.lat - searchLocation.lat, 2) + Math.pow(s.lng - searchLocation.lng, 2)) * 111;
        return dist < 50;
      });
      // Sort by distance
      stations.sort((a, b) => {
        const distA = Math.sqrt(Math.pow(a.lat - searchLocation.lat, 2) + Math.pow(a.lng - searchLocation.lng, 2));
        const distB = Math.sqrt(Math.pow(b.lat - searchLocation.lat, 2) + Math.pow(b.lng - searchLocation.lng, 2));
        return distA - distB;
      });
    } else if (committedQuery.trim()) {
      const q = committedQuery.toLowerCase();
      stations = stations.filter(s => 
        s.name.toLowerCase().includes(q) ||
        s.suburb.toLowerCase().includes(q) ||
        s.postcode.includes(q) ||
        s.state.toLowerCase().includes(q)
      );
    }

    // Apply filters
    if (activeFilters.length > 0) {
      stations = stations.filter(s => {
        const stationTags = [...s.fuelTypes, ...s.services];
        return activeFilters.every(f => stationTags.includes(f));
      });
    }

    return stations;
  }, [committedQuery, searchLocation, activeFilters, fetchedStations]);

  // Derived state for Autocomplete suggestions (Postcodes)
  const suggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 1) return [];

    const q = searchQuery.toLowerCase();
    
    // Filter postcodes
    const matches = postcodes.filter(p => 
      p.locality.toLowerCase().startsWith(q) || 
      p.postcode.startsWith(q)
    );

    // Limit to 5 and map to display format
    return matches.slice(0, 5).map(p => ({
      suburb: p.locality, // Map locality to suburb for SearchBar compatibility
      state: p.state,
      postcode: p.postcode,
      lat: p.lat || p.latitude, // Handle potential key variations
      lng: p.long || p.longitude,
      id: p.id
    }));
  }, [searchQuery, postcodes]);

  // Handlers
  const handleSelectStation = (id: string) => {
    const station = fetchedStations.find(s => s.id === id);
    if (station) {
      setSelectedStationId(id);
      setViewMode('detail');
      setMapCenter([station.lat, station.lng]);
      setMapZoom(15);
      
      // On mobile, if we select a station from list, we might want to stay in detail view 
      // (which is inside sidebar).
      // But if we select from Map, we should show Detail view (open sidebar).
      setMobileView('list'); 
    }
  };

  const handleBackToSearch = () => {
    setSelectedStationId(null);
    setViewMode('list');
    setMobileView('list');
    
    // Reset Search State to ensure all pins show
    setSearchQuery('');
    setCommittedQuery('');
    setSearchLocation(null);
    setActiveFilters([]);

    setMapCenter([-25.2744, 133.7751]);
    setMapZoom(4);
  };

  const handleApplyFilters = (filters: string[]) => {
    setActiveFilters(filters);
    setViewMode('list');
  };

  const handleSelectSuggestion = (suggestion: any) => {
    // When a location suggestion is selected
    if (suggestion.lat && suggestion.lng) {
      setMapCenter([suggestion.lat, suggestion.lng]);
      setSearchLocation({ lat: suggestion.lat, lng: suggestion.lng });
      setMapZoom(13); // Zoom in closer to the suburb
    } else {
        setSearchLocation(null);
    }
    
    // Update search query to the suburb name
    setSearchQuery(suggestion.suburb);
    // Commit the query to trigger results
    setCommittedQuery(suggestion.suburb);
    
    // Switch to list view to show results in that area (or map view?)
    // Let's keep it in the current view or switch to map to show context?
    // User might want to see the stations listed.
    // 'list' mode on mobile shows the list.
  };

  const handleSearchCommit = () => {
    if (searchQuery.trim()) {
      setCommittedQuery(searchQuery);
      setSearchLocation(null); // Fallback to text only search
    }
  };

  const getDistanceMock = (s: Station) => {
    // Distance from search location or map center or fallback to Melb CBD
    const center = searchLocation || (mapCenter ? { lat: mapCenter[0], lng: mapCenter[1] } : { lat: -37.8136, lng: 144.9631 });
    const dist = Math.sqrt(Math.pow(s.lat - center.lat, 2) + Math.pow(s.lng - center.lng, 2)) * 111; 
    return `${dist.toFixed(1)}kms away`;
  };

  const selectedStation = fetchedStations.find(s => s.id === selectedStationId);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background font-sans relative">
      
      {/* Sidebar Container */}
      <div className={clsx(
        "bg-sidebar flex flex-col z-20 transition-transform duration-300 absolute inset-0 md:relative md:w-[450px] md:min-w-[450px] shadow-xl md:translate-x-0 md:shadow-none border-r border-border",
        // On mobile: if mobileView is 'map', hide sidebar (translate out)
        // If mobileView is 'list', show sidebar
        mobileView === 'map' ? "translate-y-full md:translate-y-0" : "translate-y-0"
      )}>
        <div className="flex-1 flex flex-col p-6 h-full overflow-hidden relative">
          
          {/* Header Title - Only in List/Search Mode */}
          {viewMode === 'list' && (
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-[length:var(--text-h5)] leading-[30px] text-foreground font-normal">
                Find an Ampol Foodary
                </h1>
                {isLoadingStations && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground animate-pulse">
                        <Loader2 className="animate-spin" size={16} />
                        <span>Updating data...</span>
                    </div>
                )}
            </div>
          )}

          {/* Conditional Content */}
          {viewMode === 'filter' ? (
            <Filters 
              onBack={() => setViewMode('list')} 
              onApply={handleApplyFilters} 
              activeFilters={activeFilters} 
            />
          ) : viewMode === 'detail' && selectedStation ? (
            <StationDetail 
              station={selectedStation} 
              onBack={handleBackToSearch} 
            />
          ) : (
            /* List Mode */
            <div className="flex flex-col h-full">
              <LocationSearch 
                value={searchQuery} 
                onChange={(val) => {
                  setSearchQuery(val);
                  
                  if (searchTimeoutRef.current) {
                    clearTimeout(searchTimeoutRef.current);
                  }

                  if (val.length > 1) {
                    setIsSearching(true);
                    searchTimeoutRef.current = setTimeout(() => {
                      setIsSearching(false);
                    }, 300);
                  } else {
                    setIsSearching(false);
                  }
                }} 
                onClear={() => {
                  setSearchQuery('');
                  setCommittedQuery('');
                  setIsSearching(false);
                  if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
                  handleBackToSearch();
                }}
                onSearch={handleSearchCommit}
                onOpenFilters={() => setViewMode('filter')}
                suggestions={suggestions}
                hasError={committedQuery.trim().length > 0 && filteredStations.length === 0 && suggestions.length === 0}
                onSelectSuggestion={handleSelectSuggestion}
                isLoading={isSearching}
              />
              
              <div className="mt-4 text-[length:var(--text-body)] text-muted-foreground">
                {committedQuery ? (
                    <>{filteredStations.length} Ampol Foodarys found near {committedQuery}</>
                ) : (
                    <div className="mt-8 flex flex-col gap-2">
                        <p>Start typing to find locations near you.</p>
                        {isLoadingPostcodes && (
                            <p className="text-xs text-muted-foreground flex items-center gap-2">
                                <Loader2 className="animate-spin" size={12} />
                                Loading postcodes...
                            </p>
                        )}
                        {postcodesError && (
                            <p className="text-xs text-destructive">
                                Unable to load postcode data. Search may be limited.
                            </p>
                        )}
                    </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto mt-4 space-y-4 pb-20 md:pb-4">
                 {committedQuery && filteredStations.map(station => (
                   <StationCard 
                     key={station.id} 
                     station={station} 
                     distance={getDistanceMock(station)}
                     onClick={() => handleSelectStation(station.id)}
                   />
                 ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button (List View -> Map View) */}
        {/* Only show if we are in list mode (not detail/filter) */}
        <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button 
                onClick={() => setMobileView(mobileView === 'list' ? 'map' : 'list')}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold uppercase tracking-wider text-sm active:scale-95 transition-transform"
            >
                {mobileView === 'list' ? (
                    <>
                        <MapIcon size={18} />
                        Map
                    </>
                ) : (
                    <>
                        <ListIcon size={18} />
                        List
                    </>
                )}
            </button>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative h-full z-10">
        <StationMap 
          stations={filteredStations} 
          selectedId={selectedStationId}
          onSelectStation={(id) => {
              handleSelectStation(id);
              setMobileView('list');
          }}
          center={mapCenter}
          zoom={mapZoom}
        />
        
        {/* Mobile Toggle Button (Map View -> List View) */}
        {mobileView === 'map' && (
            <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
                 <button 
                    onClick={() => setMobileView('list')}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold uppercase tracking-wider text-sm active:scale-95 transition-transform"
                >
                    <ListIcon size={18} />
                    List
                </button>
            </div>
        )}
      </div>
    </div>
  );
}