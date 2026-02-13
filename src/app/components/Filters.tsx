
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import clsx from 'clsx';

interface FiltersProps {
  onBack: () => void;
  onApply: (selectedFilters: string[]) => void;
  activeFilters: string[];
}

const SERVICES = ["Foodary", "Coffee", "Toilets", "ATM", "Trailer Hire", "Car Wash"];

export function Filters({ onBack, onApply, activeFilters }: FiltersProps) {
  const [selected, setSelected] = useState<string[]>(activeFilters);

  const toggleFilter = (filter: string) => {
    if (selected.includes(filter)) {
      setSelected(selected.filter(f => f !== filter));
    } else {
      setSelected([...selected, filter]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[length:var(--text-label)] font-bold uppercase tracking-[1.44px] text-foreground hover:opacity-70 active:scale-95 transition-all origin-left"
        >
          <ArrowLeft size={12} />
          Back
        </button>
        <button 
          onClick={() => setSelected([])}
          className="text-[length:var(--text-label)] font-bold uppercase tracking-[1.44px] text-foreground hover:opacity-70"
        >
          Clear All
        </button>
      </div>

      <h2 className="text-[length:var(--text-h5)] leading-[30px] font-normal text-foreground mb-8">
        Filters
      </h2>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {SERVICES.map((service) => (
            <label key={service} className="flex items-center gap-4 cursor-pointer group">
              <div className={clsx(
                "w-6 h-6 border-2 flex items-center justify-center transition-colors rounded-sm",
                selected.includes(service) 
                  ? "bg-primary border-primary" 
                  : "border-primary group-hover:bg-primary/10"
              )}>
                {selected.includes(service) && (
                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" className="text-primary-foreground" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                )}
              </div>
              <span className="text-[length:var(--text-body)] leading-[29px] text-foreground">{service}</span>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={selected.includes(service)}
                onChange={() => toggleFilter(service)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => onApply(selected)}
          className="w-full bg-destructive text-destructive-foreground font-bold uppercase text-[14px] tracking-[2px] py-4 rounded-md hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          Show Results
        </button>
      </div>
    </div>
  );
}
