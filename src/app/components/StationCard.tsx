
import React from 'react';
import { Station } from '../data/mockStations';

interface StationCardProps {
  station: Station;
  distance?: string; // We'll calculate this or mock it
  onClick: () => void;
}

export function StationCard({ station, distance, onClick }: StationCardProps) {
  return (
    <div 
      onClick={onClick}
      className="w-full bg-card border border-border rounded-lg p-4 cursor-pointer hover:bg-muted transition-colors text-left"
    >
      <h3 className="text-[16px] font-bold text-foreground mb-1">{station.suburb}</h3> 
      
      <p className="text-[16px] text-muted-foreground mb-1">{distance || '5kms away'}</p>
      <p className="text-[16px] text-muted-foreground">{station.address}, {station.suburb} {station.state}, {station.postcode}</p>
    </div>
  );
}
