
import React from 'react';
import { Station } from '../data/mockStations';
import { ArrowLeft, Navigation, Phone } from 'lucide-react';

interface StationDetailProps {
  station: Station;
  onBack: () => void;
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="w-full mb-6">
    <h4 className="text-[length:var(--text-label)] font-bold uppercase tracking-[1.44px] text-foreground mb-3">
      {title}
    </h4>
    {children}
  </div>
);

export function StationDetail({ station, onBack }: StationDetailProps) {
  return (
    <div className="flex flex-col h-full overflow-y-auto pr-2 bg-background">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 mb-6 text-[length:var(--text-label)] font-bold uppercase tracking-[1.44px] text-foreground hover:opacity-70 active:scale-95 transition-all origin-left"
      >
        <ArrowLeft size={12} />
        Back
      </button>

      <h2 className="text-[length:var(--text-h5)] leading-[30px] font-normal text-foreground mb-6">
        {station.name}
      </h2>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="flex-1 bg-card border border-border rounded-lg py-4 flex flex-col items-center gap-2 hover:bg-muted active:scale-95 transition-all">
          <Navigation size={24} className="text-foreground" />
          <span className="text-[length:var(--text-body)] text-foreground">Directions</span>
        </button>
        <button className="flex-1 bg-card border border-border rounded-lg py-4 flex flex-col items-center gap-2 hover:bg-muted active:scale-95 transition-all">
          <Phone size={24} className="text-foreground" />
          <span className="text-[length:var(--text-body)] text-foreground">Call</span>
        </button>
      </div>

      <Section title="Fuel Types">
        <div className="flex flex-col gap-2">
          {station.fuelTypes.map((fuel) => (
            <p key={fuel} className="text-[length:var(--text-body)] leading-[29px] text-foreground">{fuel}</p>
          ))}
        </div>
      </Section>

      <Section title="Services">
        <div className="flex flex-col gap-2">
          {station.services.map((service) => (
            <p key={service} className="text-[length:var(--text-body)] leading-[29px] text-foreground">{service}</p>
          ))}
        </div>
      </Section>

      <Section title="Details">
        <div className="flex flex-col gap-2">
          <p className="text-[length:var(--text-body)] leading-[29px] text-foreground underline decoration-solid">{station.address}, {station.suburb}</p>
          <p className="text-[length:var(--text-body)] leading-[29px] text-foreground underline decoration-solid">{station.phone}</p>
        </div>
      </Section>

      <Section title="Opening Hours">
        <div className="w-full flex flex-col gap-1">
            {station.openingHours.flatMap((hourString, i) => {
                 // Handle standard mock data format
                 if (hourString.startsWith('Mon-Sun: ')) {
                     return (
                         <div key={i} className="flex justify-between text-[length:var(--text-body)] leading-[29px] text-foreground">
                            <span>Everyday</span>
                            <span>{hourString.replace('Mon-Sun: ', '')}</span>
                         </div>
                     );
                 }
                 
                 // Handle OSM semi-colon separated format
                 return hourString.split(';').map((part, j) => {
                     const trimmed = part.trim();
                     if (!trimmed) return null;
                     
                     // Try to separate "Days Time"
                     // Matches "Mo-Fr 06:00-22:00" or similar
                     const match = trimmed.match(/^([A-Za-z,\s-]+)\s+(.*)$/);
                     
                     let label = "Everyday";
                     let time = trimmed;
                     
                     if (match) {
                         // Convert OSM abbreviations to readable text
                         label = match[1]
                             .replace(/Mo/g, 'Mon')
                             .replace(/Tu/g, 'Tue')
                             .replace(/We/g, 'Wed')
                             .replace(/Th/g, 'Thu')
                             .replace(/Fr/g, 'Fri')
                             .replace(/Sa/g, 'Sat')
                             .replace(/Su/g, 'Sun')
                             .replace('Mon-Sun', 'Everyday')
                             .replace('Mon-Fri', 'Mon-Fri')
                             .replace(',', ', '); // Add space after comma if missing
                         time = match[2];
                     } else if (trimmed === '24/7') {
                         time = '24 Hours';
                     }
                     
                     return (
                        <div key={`${i}-${j}`} className="flex justify-between text-[length:var(--text-body)] leading-[29px] text-foreground">
                            <span>{label}</span>
                            <span>{time}</span>
                        </div>
                     );
                 });
            })}
        </div>
      </Section>
    </div>
  );
}
