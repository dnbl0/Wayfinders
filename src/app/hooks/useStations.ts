import { useState, useEffect } from 'react';
import { Station, mockStations } from '../data/mockStations';
import { manualNSWData, manualNTStations, manualSAData, manualTASData, manualVICData, manualWAData } from '../data/manualStations';
import { australianPostcodes } from '../data/australianPostcodes';

// Use mockStations as initial fallback or while loading to prevent empty state?
// Or purely fetch real data? User said "fetch the data of all ampol fuel stations".
// Mock data is useful for development but we want real data.

const OVERPASS_API_URL = 'https://overpass-api.de/api/interpreter';
const OVERPASS_QUERY = `
[out:json][timeout:25];
area["name"="Australia"]->.a;
(
  node["amenity"="fuel"](area.a);
  way["amenity"="fuel"](area.a);
);
out center;
`;

const manualACTStations: Station[] = [
  {
    id: "act-1",
    name: "Ampol Foodary Braddon",
    address: "36 Lonsdale St",
    suburb: "Braddon",
    state: "ACT",
    postcode: "2612",
    lat: -35.2750,
    lng: 149.1330,
    fuelTypes: ["Unleaded 91", "Premium 95", "Premium 98", "Diesel"],
    services: ["Foodary", "Coffee", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 6247 2544"
  },
  {
    id: "act-2",
    name: "Ampol Foodary Calwell",
    address: "Were St Cnr Webber Crescent",
    suburb: "Calwell",
    state: "ACT",
    postcode: "2905",
    lat: -35.4260,
    lng: 149.1170,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "02 6292 8001"
  },
  {
    id: "act-3",
    name: "Ampol Foodary Canberra Airport",
    address: "1/3 Rogan St",
    suburb: "Canberra Airport",
    state: "ACT",
    postcode: "2609",
    lat: -35.3060,
    lng: 149.1950,
    fuelTypes: ["Unleaded 91", "Premium 95", "Premium 98", "Diesel"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 6262 8842"
  },
  {
    id: "act-4",
    name: "Ampol Foodary Holt",
    address: "1 Hardwick Cres",
    suburb: "Holt",
    state: "ACT",
    postcode: "2615",
    lat: -35.2180,
    lng: 149.0180,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 6am - 11pm"],
    phone: "02 6254 0352"
  },
  {
    id: "act-5",
    name: "Ampol Foodary Kaleen",
    address: "275 Maribyrnong Ave",
    suburb: "Kaleen",
    state: "ACT",
    postcode: "2617",
    lat: -35.2340,
    lng: 149.1080,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "02 6255 4908"
  },
  {
    id: "act-6",
    name: "Ampol Foodary Kambah",
    address: "3 Marconi Cres",
    suburb: "Kambah",
    state: "ACT",
    postcode: "2902",
    lat: -35.3910,
    lng: 149.0630,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 6231 9062"
  },
  {
    id: "act-7",
    name: "Ampol Foodary Nicholls",
    address: "Curran Dr Cnr O'hanlon Pl",
    suburb: "Nicholls",
    state: "ACT",
    postcode: "2913",
    lat: -35.1880,
    lng: 149.0880,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 6242 0705"
  },
  {
    id: "act-8",
    name: "Ampol Foodary Weston",
    address: "1 Kirkpatrick Street",
    suburb: "Weston",
    state: "ACT",
    postcode: "2611",
    lat: -35.3360,
    lng: 149.0520,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 6am - 11pm"],
    phone: "02 6287 2247"
  },
  {
    id: "act-9",
    name: "Ampol Foodary Weston Creek",
    address: "49 Brierly St Cnr Liardet St",
    suburb: "Weston",
    state: "ACT",
    postcode: "2611",
    lat: -35.3370,
    lng: 149.0540,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "02 6287 5960"
  }
];

export function useStations() {
  const [stations, setStations] = useState<Station[]>(mockStations); // Default to mock, replace on fetch
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(OVERPASS_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'data=' + encodeURIComponent(OVERPASS_QUERY),
        });

        if (!response.ok) {
          throw new Error(`Overpass API error: ${response.statusText}`);
        }

        const data = await response.json();
        
        const mappedStations: Station[] = data.elements.map((element: any) => {
          const tags = element.tags || {};
          const lat = element.lat || element.center?.lat;
          const lng = element.lon || element.center?.lon;
          
          // Construct address
          const street = tags['addr:street'] || '';
          const number = tags['addr:housenumber'] || '';
          const address = (number && street) ? `${number} ${street}` : (street || 'Unknown Address');
          
          // Construct services & fuel types from tags (mocked/inferred for now as tags vary)
          // Overpass might not return detailed fuel types unless tagged.
          // We'll use a standard set for now to keep the UI functional.
          const fuelTypes = ["Unleaded 91", "Premium 95", "Diesel"];
          if (tags['fuel:octane_98'] === 'yes') fuelTypes.push("Premium 98");
          if (tags['fuel:e10'] === 'yes') fuelTypes.push("E10");

          const services = ["Foodary"]; // Default service
          if (tags['amenity'] === 'cafe') services.push("Coffee");
          if (tags['atm'] === 'yes') services.push("ATM");
          if (tags['toilets'] === 'yes') services.push("Toilets");
          
          return {
            id: element.id.toString(),
            name: tags['name'] || `Ampol Station ${element.id}`,
            address: address,
            suburb: tags['addr:city'] || tags['addr:suburb'] || '',
            state: tags['addr:state'] || '',
            postcode: tags['addr:postcode'] || '',
            lat: lat,
            lng: lng,
            fuelTypes: fuelTypes,
            services: services,
            openingHours: tags['opening_hours'] ? [tags['opening_hours']] : ["Mon-Sun: 24 Hours"], // Fallback
            phone: tags['phone'] || tags['contact:phone'] || '',
            brand: tags['brand'] // Keep track of brand for filtering
          };
        });

        // Prepare NSW Map for matching (Patching strategy)
        const manualNSWMap = new Map<string, typeof manualNSWData>();
        manualNSWData.forEach(d => {
            // Normalize suburb key: lowercase, handle Mt/Mount
            // Also handle " Via " which might differ from Overpass
            const key = d.suburb.toLowerCase().replace(/^mt\s/, 'mount ');
            if (!manualNSWMap.has(key)) manualNSWMap.set(key, []);
            manualNSWMap.get(key)!.push(d);
        });

        // Prepare SA Map for matching
        const manualSAMap = new Map<string, typeof manualSAData>();
        manualSAData.forEach(d => {
             const key = d.suburb.toLowerCase().replace(/^mt\s/, 'mount ');
             if (!manualSAMap.has(key)) manualSAMap.set(key, []);
             manualSAMap.get(key)!.push(d);
        });

        // Prepare TAS Map for matching
        const manualTASMap = new Map<string, typeof manualTASData>();
        manualTASData.forEach(d => {
             const key = d.suburb.toLowerCase().replace(/^mt\s/, 'mount ');
             if (!manualTASMap.has(key)) manualTASMap.set(key, []);
             manualTASMap.get(key)!.push(d);
        });

        // Prepare VIC Map for matching
        const manualVICMap = new Map<string, typeof manualVICData>();
        manualVICData.forEach(d => {
             const key = d.suburb.toLowerCase().replace(/^mt\s/, 'mount ');
             if (!manualVICMap.has(key)) manualVICMap.set(key, []);
             manualVICMap.get(key)!.push(d);
        });

        // Prepare WA Map for matching
        const manualWAMap = new Map<string, typeof manualWAData>();
        manualWAData.forEach(d => {
             const key = d.suburb.toLowerCase().replace(/^mt\s/, 'mount ');
             if (!manualWAMap.has(key)) manualWAMap.set(key, []);
             manualWAMap.get(key)!.push(d);
        });

        const finalStations: Station[] = [];

        // Helper to check if ACT
        const isACT = (s: Station) => {
             if (s.state === 'ACT' || s.state === 'Australian Capital Territory') return true;
             const pc = parseInt(s.postcode);
             if (!isNaN(pc)) {
                 if ((pc >= 2600 && pc <= 2618) || (pc >= 2900 && pc <= 2920)) return true;
             }
             return false;
        };

        // Helper to check if NT
        const isNT = (s: Station) => {
             if (s.state === 'NT' || s.state === 'Northern Territory') return true;
             if (s.postcode.startsWith('08')) return true;
             return false;
        };

        mappedStations.forEach(s => {
            if (!s.lat || !s.lng) return;

            // Handle ACT (Remove fetched, use manual)
            if (isACT(s)) return;

            // Handle NT (Remove fetched, use manual)
            if (isNT(s)) return;

            // Handle NSW (Patch fetched with manual, remove if not in manual list)
            // NSW Postcodes usually 2xxx (excluding ACT ranges which we already filtered)
            const isNSW = (s.state === 'NSW' || s.state === 'New South Wales' || s.postcode.startsWith('2'));
            
            // Infer suburb from name if missing (common in OSM: "Ampol Foodary SuburbName")
            let matchSuburb = s.suburb;
            if (!matchSuburb && s.name) {
                const nameParts = s.name.match(/Ampol (?:Foodary )?([A-Za-z\s]+)/i);
                if (nameParts && nameParts[1]) {
                    matchSuburb = nameParts[1].trim();
                }
            }
            
            if (isNSW) {
                 const key = (matchSuburb || '').toLowerCase().replace(/^mt\s/, 'mount ');
                 const manuals = manualNSWMap.get(key);
                 
                 if (manuals && manuals.length > 0) {
                     const match = manuals.shift()!; // Consume one match
                     // Patch data
                     s.name = `Ampol Foodary ${match.suburb}`;
                     s.address = match.address;
                     s.phone = match.phone;
                     s.postcode = match.postcode;
                     s.suburb = match.suburb; // Use user's spelling
                     s.state = match.state;
                     
                     finalStations.push(s);
                 } 
                 return;
            }

            // Handle SA (Patch fetched with manual, remove if not in manual list)
            // SA Postcodes start with 5
            const isSA = (s.state === 'SA' || s.state === 'South Australia' || s.postcode.startsWith('5'));

            if (isSA) {
                const key = (matchSuburb || '').toLowerCase().replace(/^mt\s/, 'mount ');
                const manuals = manualSAMap.get(key);

                if (manuals && manuals.length > 0) {
                    const match = manuals.shift()!;
                    s.name = `Ampol Foodary ${match.suburb}`;
                    s.address = match.address;
                    s.phone = match.phone;
                    s.postcode = match.postcode;
                    s.suburb = match.suburb;
                    s.state = match.state;

                    finalStations.push(s);
                }
                return;
            }

            // Handle TAS (Patch fetched with manual, remove if not in manual list)
            // TAS Postcodes start with 7
            const isTAS = (s.state === 'TAS' || s.state === 'Tasmania' || s.postcode.startsWith('7'));

            if (isTAS) {
                const key = (matchSuburb || '').toLowerCase().replace(/^mt\s/, 'mount ');
                const manuals = manualTASMap.get(key);

                if (manuals && manuals.length > 0) {
                    const match = manuals.shift()!;
                    s.name = `Ampol Foodary ${match.suburb}`;
                    s.address = match.address;
                    s.phone = match.phone;
                    s.postcode = match.postcode;
                    s.suburb = match.suburb;
                    s.state = match.state;

                    finalStations.push(s);
                }
                return;
            }

            // Handle VIC (Patch fetched with manual, remove if not in manual list)
            // VIC Postcodes start with 3 or 8 (8 is uncommon but part of range, usually 3xxx)
            const isVIC = (s.state === 'VIC' || s.state === 'Victoria' || s.postcode.startsWith('3'));

            if (isVIC) {
                const key = (matchSuburb || '').toLowerCase().replace(/^mt\s/, 'mount ');
                const manuals = manualVICMap.get(key);

                if (manuals && manuals.length > 0) {
                    const match = manuals.shift()!;
                    s.name = `Ampol Foodary ${match.suburb}`;
                    s.address = match.address;
                    s.phone = match.phone;
                    s.postcode = match.postcode;
                    s.suburb = match.suburb;
                    s.state = match.state;

                    finalStations.push(s);
                }
                return;
            }

            // Handle WA (Patch fetched with manual, remove if not in manual list)
            // WA Postcodes start with 6
            const isWA = (s.state === 'WA' || s.state === 'Western Australia' || s.postcode.startsWith('6'));

            if (isWA) {
                const key = (matchSuburb || '').toLowerCase().replace(/^mt\s/, 'mount ');
                const manuals = manualWAMap.get(key);

                if (manuals && manuals.length > 0) {
                    const match = manuals.shift()!;
                    s.name = `Ampol Foodary ${match.suburb}`;
                    s.address = match.address;
                    s.phone = match.phone;
                    s.postcode = match.postcode;
                    s.suburb = match.suburb;
                    s.state = match.state;

                    finalStations.push(s);
                }
                return;
            }

            // All other states (QLD) -> Keep fetched IF brand is Ampol/Caltex
            const brand = (s as any).brand?.toLowerCase() || '';
            const name = s.name.toLowerCase();
            
            // For raw data (QLD etc), we strictly filter out bad data
            if (!s.suburb || s.address === 'Unknown Address' || s.address.trim() === '') {
                 return;
            }

            if (brand.includes('ampol') || brand.includes('caltex') || name.includes('ampol') || name.includes('caltex')) {
                 finalStations.push(s);
            }
        });

        // Add Manual Stations
        finalStations.push(...manualACTStations);
        finalStations.push(...manualNTStations);

        // Helper to find coords for unmatched manual stations
        const getCoords = (suburb: string, state: string) => {
             // Try exact match first
             let entry = australianPostcodes.find(p => 
                 p.locality.toUpperCase() === suburb.toUpperCase() && 
                 p.state.toUpperCase() === state.toUpperCase()
             );
             
             // If not found, try fuzzy match on suburb? Or just rely on what we have.
             return entry ? { lat: entry.lat, lng: entry.long } : null;
        };

        const processRemainingManuals = (map: Map<string, typeof manualNSWData>, prefix: string) => {
             map.forEach((list) => {
                 list.forEach((manual, index) => {
                     const coords = getCoords(manual.suburb, manual.state);
                     // Only add if we have coordinates (postcode center)
                     if (coords) {
                         finalStations.push({
                             id: `${prefix}-manual-${manual.suburb.replace(/\s+/g, '-').toLowerCase()}-${index}-${Math.random().toString(36).substr(2, 5)}`,
                             name: manual.name || `Ampol Foodary ${manual.suburb}`,
                             address: manual.address,
                             suburb: manual.suburb,
                             state: manual.state,
                             postcode: manual.postcode,
                             lat: coords.lat,
                             lng: coords.lng,
                             fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"], // Default as we don't have this data
                             services: ["Foodary"], // Default
                             openingHours: ["Mon-Sun: 24 Hours"], // Default assumption
                             phone: manual.phone,
                         });
                     }
                 });
             });
        };

        processRemainingManuals(manualNSWMap, 'nsw');
        processRemainingManuals(manualSAMap, 'sa');
        processRemainingManuals(manualTASMap, 'tas');
        processRemainingManuals(manualVICMap, 'vic');
        processRemainingManuals(manualWAMap, 'wa');
        
        setStations(finalStations.length > 0 ? finalStations : mockStations);
      } catch (err) {
        console.error("Failed to fetch stations:", err);
        setError("Failed to load stations. Using offline data.");
        // Fallback to mock data on error?
        setStations(mockStations); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchStations();
  }, []);

  return { stations, isLoading, error };
}
