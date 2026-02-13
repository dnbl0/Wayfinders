import React, { useState, useRef, useEffect } from 'react';
import { SlidersHorizontal, X, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import CompLoadingSpinner from '../../imports/CompLoadingSpinner';

export interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onSearch: () => void;
  suggestions: Array<{
    id?: number | string;
    suburb: string;
    state: string;
    postcode: string;
  }>;
  onSelectSuggestion: (suggestion: any) => void;
  hasError: boolean;
  isLoading?: boolean;
  onOpenFilters: () => void;
}

export function LocationSearch({
  value,
  onChange,
  onClear,
  onSearch,
  suggestions,
  onSelectSuggestion,
  hasError,
  isLoading,
  onOpenFilters
}: LocationSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showSuggestions = !isLoading && isFocused && value.length >= 1 && suggestions.length > 0;

  // Helper to highlight matching text
  // User requested "matching characters in 400 weight".
  // Assuming the base text is lighter or the user meant "Bold" (standard highlighting).
  // Since theme.css defines --font-weight-book: 400 and --font-weight-bold: 700,
  // and the current text is 400, we'll use 700 (bold) for the match to create contrast as shown in the image reference.
  const highlightMatch = (text: string, query: string) => {
    if (!query || !text) return text;
    if (text.toLowerCase().startsWith(query.toLowerCase())) {
      return (
        <>
          <span className="font-bold">{text.slice(0, query.length)}</span>
          {text.slice(query.length)}
        </>
      );
    }
    return text;
  };

  return (
    <div className="flex flex-col items-start justify-center relative w-full" ref={wrapperRef}>
      <div className="flex flex-col items-start relative shrink-0 w-full">
        {/* Label */}
        <div className="flex items-center relative shrink-0 w-full mb-2">
          <p className="font-bold leading-[1.3] text-foreground text-[12px] tracking-[1.44px] uppercase">
            enter suburb or postcode
          </p>
        </div>

        {/* Input Box */}
        <div className="relative w-full z-20">
           <div 
             className={clsx(
               "h-[48px] relative rounded-md shrink-0 w-full bg-card flex items-center transition-colors",
               hasError 
                 ? "border-2 border-destructive" 
                 : "border border-border"
             )}
           >
             {/* Focus Dashed Border Simulation */}
             {isFocused && !hasError && (
                <div className="absolute inset-[-4px] rounded-[6px] pointer-events-none z-10 border border-primary border-dashed" />
             )}
             
             <div className="flex flex-row items-center size-full px-[16px] relative z-20">
               <input
                 type="text"
                 value={value}
                 onChange={(e) => onChange(e.target.value)}
                 onFocus={() => setIsFocused(true)}
                 onKeyDown={(e) => {
                   if (e.key === 'Enter') {
                     onSearch();
                     setIsFocused(false);
                   }
                 }}
                 placeholder="Start typing"
                 className="flex-1 font-normal text-[19px] text-foreground outline-none bg-transparent placeholder:text-muted-foreground"
               />
               
               <div className="flex items-center gap-2 ml-2">
                 {isLoading ? (
                   <div className="relative shrink-0 size-[24px] animate-spin text-primary">
                      <CompLoadingSpinner />
                   </div>
                 ) : value && (
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       onClear();
                       // Keep focus if desired, or let it blur
                     }} 
                     className="relative shrink-0 size-[24px] hover:opacity-80 transition-opacity flex items-center justify-center"
                   >
                     <div className="absolute inset-0 bg-primary rounded-full" />
                     <X className="relative z-10 text-primary-foreground" size={14} strokeWidth={3} />
                   </button>
                 )}
               </div>
             </div>
           </div>

           {/* Suggestions Popover */}
           {showSuggestions && (
             <div className="absolute top-full left-0 right-0 mt-2 bg-popover rounded-md shadow-lg z-50 overflow-hidden border border-border">
               <div className="flex flex-col py-2">
                 {suggestions.map((suggestion, index) => (
                   <button
                     key={suggestion.id || index}
                     onClick={() => {
                       onSelectSuggestion(suggestion);
                       setIsFocused(false);
                     }}
                     className="flex items-center px-[12px] py-[16px] hover:bg-muted/50 text-left transition-colors w-full"
                   >
                     <p className="font-normal text-foreground text-[19px] leading-[29px] truncate">
                       {highlightMatch(suggestion.suburb, value)}, {suggestion.state} {highlightMatch(suggestion.postcode, value)}
                     </p>
                   </button>
                 ))}
               </div>
             </div>
           )}
        </div>

        {/* Error Message */}
        {hasError && (
           <p className="mt-2 font-normal leading-[1.5] text-destructive text-[16px] w-full">
             Please enter a valid postcode or suburb
           </p>
        )}
      </div>

      {/* Filter Button */}
      <div className="mt-4 w-full">
         <button 
           onClick={onOpenFilters}
           className="w-full flex gap-[10px] h-[48px] items-center justify-start rounded-card bg-transparent hover:bg-black/5 transition-colors group px-[0px] py-[12px]"
         >
           <p className="font-bold text-foreground text-[12px] tracking-[1.44px] uppercase group-hover:opacity-80">Filters</p>
           <SlidersHorizontal size={14} className="text-foreground group-hover:opacity-80" />
         </button>
      </div>
    </div>
  );
}
