
import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Station } from '../data/mockStations';
import svgPaths from '../../imports/svg-hmj0kxsemo';
import ControlsZoomControls from '../../imports/ControlsZoomControls';

// Fix Leaflet's default icon path issues
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// --- ICONS ---

// Use imported SVG paths for pixel-perfect match with Figma
const { 
    p27ddff80: pinPath, 
    p17899e00: redPath, 
    p3c559e80: bluePath 
} = svgPaths;

// We construct the SVG to perfectly align the logo inside the pin
const pinHtml = `
<div class="relative w-full h-full transition-all duration-300 hover:scale-125 origin-bottom group filter drop-shadow-lg hover:drop-shadow-xl z-10 hover:z-50">
    <svg viewBox="0 0 90 108" class="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <!-- Main Pin Shape -->
        <path d="${pinPath}" class="fill-primary" />
        
        <!-- Inner Circle Background (Centered in the pin head) -->
        <circle cx="45" cy="40" r="30" class="fill-primary-foreground" />
        
        <!-- Logo Group (Translated to center) -->
        <g transform="translate(14, 11)">
            <path d="${redPath}" fill="#ED0C06" />
            <path d="${bluePath}" fill="#18249C" />
        </g>
    </svg>
</div>
`;

const singleIcon = L.divIcon({
    className: 'bg-transparent',
    html: pinHtml,
    iconSize: [53, 68], // Aspect ratio matches ~90x116 viewBox
    iconAnchor: [26.5, 68], // Anchor at bottom center
    popupAnchor: [0, -60]
});

// Icon Cache to prevent re-creation
const clusterIconCache: Record<number, L.DivIcon> = {};

const getClusterIcon = (count: number) => {
    if (clusterIconCache[count]) {
        return clusterIconCache[count];
    }

    const html = `
        <div class="w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground text-primary-foreground flex items-center justify-center text-[14px] font-bold shadow-lg transition-transform hover:scale-110">
            ${count}
        </div>
    `;

    const newIcon = L.divIcon({
        html: html,
        className: 'bg-transparent',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    clusterIconCache[count] = newIcon;
    return newIcon;
};

const CustomZoomControl = () => {
    const map = useMap();

    return (
        <div className="absolute bottom-10 right-5 z-[1000] cursor-pointer drop-shadow-md transition-transform hover:scale-105">
            <div className="relative w-[38px] h-[67px]">
                <ControlsZoomControls />
                {/* Zoom In - Top Half */}
                <div 
                    className="absolute top-0 left-0 w-full h-1/2 rounded-t-lg active:bg-black/5"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        map.zoomIn();
                    }}
                    title="Zoom In"
                />
                {/* Zoom Out - Bottom Half */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-lg active:bg-black/5"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        map.zoomOut();
                    }}
                    title="Zoom Out"
                />
            </div>
        </div>
    );
};

// --- CLUSTERING LOGIC ---

interface Cluster {
    id: string; // 'cluster-lat-lng'
    lat: number;
    lng: number;
    stations: Station[];
}

function useClusters(stations: Station[], map: L.Map | null) {
    const [clusters, setClusters] = useState<(Station | Cluster)[]>([]);

    useEffect(() => {
        if (!map) return;

        const updateClusters = () => {
            const zoom = map.getZoom();
            
            // Avoid clustering when zoomed in deep
            if (zoom >= 16) {
                setClusters(stations);
                return;
            }

            const clusterRadiusPx = 35; // Distance in pixels to group
            const points: (Station | Cluster)[] = [];
            const processed = new Set<string>();

            // Sort by latitude to handle overlap deterministically
            const sortedStations = [...stations].sort((a, b) => b.lat - a.lat);

            sortedStations.forEach(station => {
                if (processed.has(station.id)) return;

                const stationPoint = map.project([station.lat, station.lng], zoom);
                
                // Find neighbors
                const neighbors = sortedStations.filter(s => {
                    if (processed.has(s.id) || s.id === station.id) return false;
                    const sPoint = map.project([s.lat, s.lng], zoom);
                    const dist = stationPoint.distanceTo(sPoint);
                    return dist < clusterRadiusPx;
                });

                if (neighbors.length > 0) {
                    const clusterGroup = [station, ...neighbors];
                    clusterGroup.forEach(s => processed.add(s.id));
                    
                    // Center of cluster
                    const latSum = clusterGroup.reduce((sum, s) => sum + s.lat, 0);
                    const lngSum = clusterGroup.reduce((sum, s) => sum + s.lng, 0);
                    
                    points.push({
                        id: `cluster-${station.id}-${zoom}`, 
                        lat: latSum / clusterGroup.length,
                        lng: lngSum / clusterGroup.length,
                        stations: clusterGroup
                    } as Cluster);
                } else {
                    processed.add(station.id);
                    points.push(station);
                }
            });

            setClusters(points);
        };

        updateClusters();
        
        map.on('zoomend', updateClusters);
        map.on('moveend', updateClusters); 

        return () => {
            map.off('zoomend', updateClusters);
            map.off('moveend', updateClusters);
        };
    }, [stations, map]);

    return clusters;
}


interface MapProps {
  stations: Station[];
  selectedId: string | null;
  onSelectStation: (id: string) => void;
  center?: [number, number];
  zoom?: number;
}

const MapContent = ({ stations, onSelectStation, center, zoom }: MapProps) => {
    const map = useMap();
    const clusters = useClusters(stations, map);
    
    // Track if the map was manually moved to avoid fighting with auto-center
    const isProgrammaticMove = useRef(false);

    // Sync external center/zoom changes
    useEffect(() => {
        if (center) {
            isProgrammaticMove.current = true;
            map.flyTo(center, zoom || 14, { 
                duration: 1.5,
                easeLinearity: 0.25
            });
            // Reset flag after animation
            setTimeout(() => { isProgrammaticMove.current = false; }, 1600);
        }
    }, [center, zoom, map]);

    const handleClusterClick = (cluster: Cluster) => {
        const currentZoom = map.getZoom();
        const maxZoom = map.getMaxZoom();
        const bounds = L.latLngBounds(cluster.stations.map(s => [s.lat, s.lng]));
        
        // If we are already close to max zoom, just center and maybe zoom to max
        if (currentZoom >= 15) {
            map.flyTo([cluster.lat, cluster.lng], maxZoom);
        } else {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    };

    return (
        <>
            {clusters.map((item) => {
                if ('stations' in item) {
                    // It's a cluster
                    const cluster = item as Cluster;
                    return (
                        <Marker
                            key={cluster.id}
                            position={[cluster.lat, cluster.lng]}
                            icon={getClusterIcon(cluster.stations.length)}
                            eventHandlers={{
                                click: () => handleClusterClick(cluster)
                            }}
                        />
                    );
                } else {
                    // It's a single station
                    const station = item as Station;
                    
                    return (
                        <Marker
                            key={station.id}
                            position={[station.lat, station.lng]}
                            icon={singleIcon}
                            eventHandlers={{
                                click: () => onSelectStation(station.id)
                            }}
                            zIndexOffset={100} 
                        />
                    );
                }
            })}
        </>
    );
};

export default function StationMap(props: MapProps) {
  return (
    <MapContainer 
      center={props.center || [-28.0, 133.0]} // Center slightly lower to frame Australia better
      zoom={props.zoom || 5} // Country-level zoom (closer in)
      className="w-full h-full z-0 outline-none bg-background"
      zoomControl={false}
      minZoom={4} // Prevent zooming out too far
      maxZoom={18}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <MapContent {...props} />
      <CustomZoomControl />
    </MapContainer>
  );
}
