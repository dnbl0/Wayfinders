import svgPaths from "./svg-atimtmm9jb";

function AtomInputLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Atom/Input Label">
      <p className="font-['Nobel:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase">enter suburb or postcode</p>
    </div>
  );
}

function AtomTypePosition() {
  return (
    <div className="h-[24px] relative shrink-0 w-px" data-name=".Atom/TypePosition">
      <div className="absolute bg-[#232632] inset-0" data-name="type-position" />
    </div>
  );
}

function Typing() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative" data-name="Typing">
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[19px] whitespace-nowrap">
        <p className="leading-[1.5]">Typing</p>
      </div>
      <AtomTypePosition />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Close">
          <circle cx="12" cy="12" fill="var(--fill-0, #232632)" id="Ellipse 1" r="12" />
          <g id="cross">
            <path d={svgPaths.p11054200} fill="var(--fill-0, #E8E6E0)" id="Union" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HorizontalStack() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Horizontal Stack">
      <Typing />
      <Close />
    </div>
  );
}

function Box() {
  return (
    <div className="max-h-[48px] min-h-[48px] relative rounded-[3px] shrink-0 w-full" data-name="Box">
      <div aria-hidden="true" className="absolute border-2 border-[#232632] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <HorizontalStack />
          <div className="absolute inset-[-4px_-4.33px_-4px_-4px] rounded-[6px]" data-name="Focus">
            <div aria-hidden="true" className="absolute border border-[#232632] border-dashed inset-0 pointer-events-none rounded-[6px]" />
          </div>
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

function Slot() {
  return (
    <div className="h-[48px] min-h-[48px] relative shrink-0 w-full" data-name="Slot1">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Nobel:book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[19px]">
            <p className="leading-[29px] whitespace-pre-wrap">Location 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slot1() {
  return (
    <div className="h-[48px] min-h-[48px] relative shrink-0 w-full" data-name="Slot2">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Nobel:book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[19px]">
            <p className="leading-[29px] whitespace-pre-wrap">Location 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slot2() {
  return (
    <div className="h-[48px] min-h-[48px] relative shrink-0 w-full" data-name="Slot3">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Nobel:book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[19px]">
            <p className="leading-[29px] whitespace-pre-wrap">Location 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutPopover() {
  return (
    <div className="bg-[#fafaf9] relative rounded-[3px] shrink-0 w-full" data-name="layout/popover">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[8px] relative rounded-[inherit] w-full">
        <Slot />
        <Slot1 />
        <Slot2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_8px_16px_0px_#d6d3c8]" />
    </div>
  );
}

export default function CompInputAutocomplete() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Comp/Input/Autocomplete">
      <CompInputTextField />
      <LayoutPopover />
    </div>
  );
}