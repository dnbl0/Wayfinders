import svgPaths from "./svg-qn7bxdod1b";

function AtomInputLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Atom/Input Label">
      <p className="font-['Nobel:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase">enter suburb or postcode</p>
    </div>
  );
}

function HorizontalStack() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Horizontal Stack">
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic opacity-75 relative text-[#232632] text-[19px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Start typing</p>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="max-h-[48px] min-h-[48px] relative rounded-[3px] shrink-0 w-full" data-name="Box">
      <div aria-hidden="true" className="absolute border border-[#232632] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <HorizontalStack />
        </div>
      </div>
    </div>
  );
}

function CompInputTextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[188px] relative shrink-0 w-full" data-name="Comp/Input/Text Field">
      <AtomInputLabel />
      <Box />
    </div>
  );
}

function CompInputAutocomplete() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Comp/Input/Autocomplete">
      <CompInputTextField />
    </div>
  );
}

function Filter1() {
  return (
    <div className="h-[11px] relative shrink-0 w-[12px]" data-name="filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
        <g id="filter">
          <path d={svgPaths.p1fbbccf0} fill="var(--fill-0, #1E212B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex gap-[10px] h-[48px] items-center justify-center py-[12px] relative rounded-[5px] shrink-0" data-name="Filter">
      <div className="flex flex-col font-['Nobel:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-none">Filters</p>
      </div>
      <Filter1 />
    </div>
  );
}

export default function LocationSearch() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="LocationSearch">
      <CompInputAutocomplete />
      <Filter />
    </div>
  );
}