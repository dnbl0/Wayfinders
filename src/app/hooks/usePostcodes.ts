import { useState, useEffect } from 'react';

export interface PostcodeEntry {
  id?: number;
  postcode: string;
  locality: string;
  state: string;
  lat: number;
  long: number; 
  // Handle potential variations in key names if needed
  latitude?: number;
  longitude?: number;
}

export function usePostcodes() {
  const [data, setData] = useState<PostcodeEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostcodes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://raw.githubusercontent.com/dnbl0/postcode-suburb-testing/refs/heads/test/australian_postcodes.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch postcodes: ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        
        // Transform the data to match PostcodeEntry interface
        const postcodes: PostcodeEntry[] = jsonData
          .map((item: any) => ({
            postcode: String(item.postcode || item.Pcode),
            locality: (item.locality || item.Locality).toUpperCase(),
            state: (item.state || item.State).toUpperCase(),
            lat: Number(item.lat || item.latitude || item.Lat),
            long: Number(item.long || item.longitude || item.Long || item.Lon),
          }))
          // User Request: Ensure all postcodes for NSW start with a 2 and not a 1 (filter out PO Boxes/LVRs)
          .filter((p: PostcodeEntry) => {
            if (p.state === 'NSW') {
              return p.postcode.startsWith('2');
            }
            return true;
          });
        
        setData(postcodes);
        setError(null);
      } catch (err) {
        console.error('Error fetching postcodes:', err);
        setError(err instanceof Error ? err.message : 'Failed to load postcodes');
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostcodes();
  }, []);

  return { postcodes: data, isLoading, error };
}