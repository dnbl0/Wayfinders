import svgPaths from "./svg-mhk16a0c03";
import imgWayfindersMap from "figma:asset/52f56bb7eded63ffdeb1c12284b187dd6598ef1c.png";

function Line() {
  return (
    <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[9999px]" data-name="Line">
      <div className="absolute bg-[rgba(23,23,23,0.1)] inset-0 rounded-[99px]" data-name="offer-bar-bg" />
    </div>
  );
}

function AtomScrollBarIndicator() {
  return (
    <div className="absolute bottom-[4px] left-[230px] rounded-[1px] top-[-2px] w-[50px]" data-name=".atom/scroll bar indicator">
      <div className="absolute bg-[#232632] bottom-[-200%] left-0 right-0 rounded-[99px] top-full" data-name="offer-bar-bg" />
    </div>
  );
}

function CompHScrollControlBarstack() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".comp/h-scroll-control-barstack">
      <Line />
      <AtomScrollBarIndicator />
    </div>
  );
}

function CompScrollBar() {
  return (
    <div className="bg-[rgba(35,38,50,0.3)] content-stretch flex flex-col gap-[10px] h-[4px] items-start justify-center relative rounded-[8px] w-[752px]" data-name="comp/scroll bar">
      <CompHScrollControlBarstack />
    </div>
  );
}

function AtomInputLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Atom/Input Label">
      <p className="font-['Nobel:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase">enter suburb or postcode</p>
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
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[19px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Suburb, State, Postcode</p>
      </div>
      <Close />
    </div>
  );
}

function Box1() {
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
      <Box1 />
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

function LocationSearch() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[400px] min-w-[290px] relative shrink-0 w-full" data-name="LocationSearch">
      <CompInputAutocomplete />
      <Filter />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#e8e6e0] relative shadow-[0px_1px_3px_0px_rgba(35,38,50,0.3)] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative w-full">
        <LocationSearch />
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#232632] text-[16px] text-ellipsis tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[1.3] overflow-hidden">Abbotsford</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">5kms away</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">28-40 Hoddle Street, Abbotsford VIC, 3067</p>
    </div>
  );
}

function Stack4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row1 />
      <Row2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Stack4 />
    </div>
  );
}

function Stack3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row />
    </div>
  );
}

function Box2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Box">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Stack3 />
      </div>
    </div>
  );
}

function LocationTile() {
  return (
    <div className="bg-[#f6f5f3] max-w-[400px] min-w-[290px] relative rounded-[5px] shrink-0 w-full" data-name="Location tile">
      <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Box2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e1da] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#232632] text-[16px] text-ellipsis tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[1.3] overflow-hidden">Abbotsford</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">5kms away</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">28-40 Hoddle Street, Abbotsford VIC, 3067</p>
    </div>
  );
}

function Stack6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row4 />
      <Row5 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell1 />
      <Stack6 />
    </div>
  );
}

function Stack5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Box">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Stack5 />
      </div>
    </div>
  );
}

function LocationTile1() {
  return (
    <div className="bg-[#f6f5f3] max-w-[400px] min-w-[290px] relative rounded-[5px] shrink-0 w-full" data-name="Location tile">
      <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Box3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e1da] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#232632] text-[16px] text-ellipsis tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[1.3] overflow-hidden">Abbotsford</p>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">5kms away</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">28-40 Hoddle Street, Abbotsford VIC, 3067</p>
    </div>
  );
}

function Stack8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row7 />
      <Row8 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell2 />
      <Stack8 />
    </div>
  );
}

function Stack7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row6 />
    </div>
  );
}

function Box4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Box">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Stack7 />
      </div>
    </div>
  );
}

function LocationTile2() {
  return (
    <div className="bg-[#f6f5f3] max-w-[400px] min-w-[290px] relative rounded-[5px] shrink-0 w-full" data-name="Location tile">
      <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Box4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e1da] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#232632] text-[16px] text-ellipsis tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[1.3] overflow-hidden">Abbotsford</p>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">5kms away</p>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">28-40 Hoddle Street, Abbotsford VIC, 3067</p>
    </div>
  );
}

function Stack10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row10 />
      <Row11 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell3 />
      <Stack10 />
    </div>
  );
}

function Stack9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row9 />
    </div>
  );
}

function Box5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Box">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Stack9 />
      </div>
    </div>
  );
}

function LocationTile3() {
  return (
    <div className="bg-[#f6f5f3] max-w-[400px] min-w-[290px] relative rounded-[5px] shrink-0 w-full" data-name="Location tile">
      <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Box5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e1da] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#232632] text-[16px] text-ellipsis tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[1.3] overflow-hidden">Abbotsford</p>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">5kms away</p>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">28-40 Hoddle Street, Abbotsford VIC, 3067</p>
    </div>
  );
}

function Stack12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row13 />
      <Row14 />
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell4 />
      <Stack12 />
    </div>
  );
}

function Stack11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row12 />
    </div>
  );
}

function Box6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Box">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Stack11 />
      </div>
    </div>
  );
}

function LocationTile4() {
  return (
    <div className="bg-[#f6f5f3] max-w-[400px] min-w-[290px] relative rounded-[5px] shrink-0 w-full" data-name="Location tile">
      <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Box6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e1da] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#232632] text-[16px] text-ellipsis tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[1.3] overflow-hidden">Abbotsford</p>
      </div>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">5kms away</p>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Row">
      <p className="flex-[1_0_0] font-['Nobel:book',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(23,23,23,0.75)] whitespace-pre-wrap">28-40 Hoddle Street, Abbotsford VIC, 3067</p>
    </div>
  );
}

function Stack14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row16 />
      <Row17 />
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell5 />
      <Stack14 />
    </div>
  );
}

function Stack13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Stack">
      <Row15 />
    </div>
  );
}

function Box7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Box">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Stack13 />
      </div>
    </div>
  );
}

function LocationTile5() {
  return (
    <div className="bg-[#f6f5f3] max-w-[400px] min-w-[290px] relative rounded-[5px] shrink-0 w-full" data-name="Location tile">
      <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Box7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e1da] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Stack2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Stack">
      <LocationTile />
      <LocationTile1 />
      <LocationTile2 />
      <LocationTile3 />
      <LocationTile4 />
      <LocationTile5 />
    </div>
  );
}

function Stack1() {
  return (
    <div className="flex-[1_0_0] max-w-[400px] min-h-px min-w-[375px] relative w-full" data-name="Stack">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] px-[24px] relative size-full">
        <Stack2 />
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="bg-[#e8e6e0] content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative w-full" data-name="Box">
      <Frame />
      <Stack1 />
    </div>
  );
}

function Stack() {
  return (
    <div className="absolute bg-[#e8e6e0] content-stretch flex flex-col h-[752px] items-start left-0 top-0 w-[403px]" data-name="Stack">
      <Box />
    </div>
  );
}

function AmpolList() {
  return (
    <div className="bg-[#e8e6e0] content-stretch flex flex-[1_0_0] items-start justify-end min-h-px min-w-px relative w-[407px]" data-name="Ampol List">
      <div className="flex h-[752px] items-center justify-center max-w-[1060px] relative shrink-0 w-[4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <CompScrollBar />
        </div>
      </div>
      <Stack />
    </div>
  );
}

function AtomOnlyCell() {
  return (
    <div className="content-stretch flex flex-col h-full items-start min-w-[290px] overflow-clip relative rounded-[3px] shrink-0" data-name=".atom-only/cell">
      <AmpolList />
    </div>
  );
}

function MapPinsAll() {
  return (
    <div className="absolute bg-[#272a39] left-[411px] rounded-[999px] size-[40px] top-[70px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">7</p>
      </div>
    </div>
  );
}

function MapPinsAll1() {
  return (
    <div className="absolute bg-[#272a39] left-[485px] rounded-[999px] size-[40px] top-[248px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">8</p>
      </div>
    </div>
  );
}

function MapPinsAll2() {
  return (
    <div className="absolute bg-[#272a39] left-[581px] rounded-[999px] size-[40px] top-[242px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">16</p>
      </div>
    </div>
  );
}

function MapPinsAll3() {
  return (
    <div className="absolute bg-[#272a39] left-[273px] rounded-[999px] size-[40px] top-[163px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function MapPinsAll4() {
  return (
    <div className="absolute bg-[#272a39] left-[71px] rounded-[999px] size-[40px] top-[309px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">9</p>
      </div>
    </div>
  );
}

function MapPinsAll5() {
  return (
    <div className="absolute bg-[#272a39] left-[123px] rounded-[999px] size-[40px] top-[473px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function MapPinsAll6() {
  return (
    <div className="absolute bg-[#272a39] left-[657px] rounded-[999px] size-[40px] top-[472px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">07</p>
      </div>
    </div>
  );
}

function MapPinsAll7() {
  return (
    <div className="absolute bg-[#272a39] left-[735px] rounded-[999px] size-[40px] top-[804px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">08</p>
      </div>
    </div>
  );
}

function MapPinsAll8() {
  return (
    <div className="absolute bg-[#272a39] left-[560px] rounded-[999px] size-[40px] top-[160px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">19</p>
      </div>
    </div>
  );
}

function MapPinsAll9() {
  return (
    <div className="absolute bg-[#272a39] left-[665px] rounded-[999px] size-[40px] top-[421px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">12</p>
      </div>
    </div>
  );
}

function MapPinsAll10() {
  return (
    <div className="absolute bg-[#272a39] left-[550px] rounded-[999px] size-[40px] top-[535px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">18</p>
      </div>
    </div>
  );
}

function MapPinsAll11() {
  return (
    <div className="absolute bg-[#edebe6] left-[590px] rounded-[999px] size-[28px] top-[583px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px] shadow-[0px_1px_2px_0px_#15171d]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#232632] text-[12px] text-center top-[calc(50%+0.5px)] w-[24px]">
        <p className="leading-[12px] whitespace-pre-wrap">55</p>
      </div>
    </div>
  );
}

function MapPinsAll12() {
  return (
    <div className="absolute bg-[#edebe6] left-[701px] rounded-[999px] size-[28px] top-[498px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px] shadow-[0px_1px_2px_0px_#15171d]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#232632] text-[12px] text-center top-[calc(50%+0.5px)] w-[24px]">
        <p className="leading-[12px] whitespace-pre-wrap">48</p>
      </div>
    </div>
  );
}

function MapPinsAll13() {
  return (
    <div className="absolute bg-[#272a39] left-[645px] rounded-[999px] size-[40px] top-[285px]" data-name="MapPins/All">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(35,38,50,0.5)] border-solid inset-[-1.5px] pointer-events-none rounded-[1000.5px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nobel:Regular',sans-serif] h-[8px] justify-center leading-[0] left-1/2 not-italic text-[#e8e6e0] text-[12px] text-center top-[calc(50%+0.5px)] w-[32px]">
        <p className="leading-[12px] whitespace-pre-wrap">14</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28px] left-1/2 top-1/2 w-[32px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 28">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c719d80} fill="var(--fill-0, #ED0C06)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d5ef0f0} fill="var(--fill-0, #18249C)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Ampol() {
  return (
    <div className="absolute left-0 size-[32px] top-[0.09px]" data-name="Ampol">
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon">
      <Ampol />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex h-[55.814px] items-center justify-between left-0 px-[12px] py-[2px] top-0 w-[56px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 55.814">
        <path d={svgPaths.p1d485800} fill="var(--fill-0, #FAFAF9)" id="Ellipse 210" stroke="var(--stroke-0, #232632)" strokeWidth="2" />
      </svg>
      <Icon />
    </div>
  );
}

function Marker() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Marker">
      <div className="absolute inset-[28.13%_0_0_0]" data-name="Marker">
        <div className="absolute inset-[-3.71%_-8.93%_-11.13%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 61.9062">
            <g filter="url(#filter0_d_1_10179)" id="Marker">
              <path d={svgPaths.p245b6600} fill="var(--fill-0, #232632)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61.9062" id="filter0_d_1_10179" width="64" x="0" y="-3.20009e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_10179" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_10179" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function MapPinsAll14() {
  return (
    <div className="absolute h-[75px] left-[444px] top-[436px] w-[56px]" data-name="MapPins/All">
      <Marker />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28px] left-1/2 top-1/2 w-[32px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 28">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c719d80} fill="var(--fill-0, #ED0C06)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d5ef0f0} fill="var(--fill-0, #18249C)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Ampol1() {
  return (
    <div className="absolute left-0 size-[32px] top-[0.09px]" data-name="Ampol">
      <Group1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon">
      <Ampol1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex h-[55.814px] items-center justify-between left-0 px-[12px] py-[2px] top-0 w-[56px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 55.814">
        <path d={svgPaths.p1d485800} fill="var(--fill-0, #FAFAF9)" id="Ellipse 210" stroke="var(--stroke-0, #232632)" strokeWidth="2" />
      </svg>
      <Icon1 />
    </div>
  );
}

function Marker1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Marker">
      <div className="absolute inset-[28.13%_0_0_0]" data-name="Marker">
        <div className="absolute inset-[-3.71%_-8.93%_-11.13%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 61.9062">
            <g filter="url(#filter0_d_1_10179)" id="Marker">
              <path d={svgPaths.p245b6600} fill="var(--fill-0, #232632)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61.9062" id="filter0_d_1_10179" width="64" x="0" y="-3.20009e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_10179" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_10179" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function MapPinsAll15() {
  return (
    <div className="absolute h-[75px] left-[452px] top-[113px] w-[56px]" data-name="MapPins/All">
      <Marker1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28px] left-1/2 top-1/2 w-[32px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 28">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c719d80} fill="var(--fill-0, #ED0C06)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d5ef0f0} fill="var(--fill-0, #18249C)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Ampol2() {
  return (
    <div className="absolute left-0 size-[32px] top-[0.09px]" data-name="Ampol">
      <Group2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon">
      <Ampol2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[55.814px] items-center justify-between left-0 px-[12px] py-[2px] top-0 w-[56px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 55.814">
        <path d={svgPaths.p1d485800} fill="var(--fill-0, #FAFAF9)" id="Ellipse 210" stroke="var(--stroke-0, #232632)" strokeWidth="2" />
      </svg>
      <Icon2 />
    </div>
  );
}

function Marker2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Marker">
      <div className="absolute inset-[28.13%_0_0_0]" data-name="Marker">
        <div className="absolute inset-[-3.71%_-8.93%_-11.13%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 61.9062">
            <g filter="url(#filter0_d_1_10179)" id="Marker">
              <path d={svgPaths.p245b6600} fill="var(--fill-0, #232632)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61.9062" id="filter0_d_1_10179" width="64" x="0" y="-3.20009e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_10179" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_10179" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function MapPinsAll16() {
  return (
    <div className="absolute h-[75px] left-[194px] top-[204px] w-[56px]" data-name="MapPins/All">
      <Marker2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28px] left-1/2 top-1/2 w-[32px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 28">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c719d80} fill="var(--fill-0, #ED0C06)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d5ef0f0} fill="var(--fill-0, #18249C)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Ampol3() {
  return (
    <div className="absolute left-0 size-[32px] top-[0.09px]" data-name="Ampol">
      <Group3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon">
      <Ampol3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex h-[55.814px] items-center justify-between left-0 px-[12px] py-[2px] top-0 w-[56px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 55.814">
        <path d={svgPaths.p1d485800} fill="var(--fill-0, #FAFAF9)" id="Ellipse 210" stroke="var(--stroke-0, #232632)" strokeWidth="2" />
      </svg>
      <Icon3 />
    </div>
  );
}

function Marker3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Marker">
      <div className="absolute inset-[28.13%_0_0_0]" data-name="Marker">
        <div className="absolute inset-[-3.71%_-8.93%_-11.13%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 61.9062">
            <g filter="url(#filter0_d_1_10179)" id="Marker">
              <path d={svgPaths.p245b6600} fill="var(--fill-0, #232632)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61.9062" id="filter0_d_1_10179" width="64" x="0" y="-3.20009e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_10179" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_10179" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function MapPinsAll17() {
  return (
    <div className="absolute h-[75px] left-[702px] top-[270px] w-[56px]" data-name="MapPins/All">
      <Marker3 />
    </div>
  );
}

function WayfindersMap() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Wayfinders map">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.27%] left-[0.05%] max-w-none top-0 w-[100.07%]" src={imgWayfindersMap} />
      </div>
      <MapPinsAll />
      <MapPinsAll1 />
      <MapPinsAll2 />
      <MapPinsAll3 />
      <MapPinsAll4 />
      <MapPinsAll5 />
      <MapPinsAll6 />
      <MapPinsAll7 />
      <MapPinsAll8 />
      <MapPinsAll9 />
      <MapPinsAll10 />
      <MapPinsAll11 />
      <MapPinsAll12 />
      <MapPinsAll13 />
      <MapPinsAll14 />
      <MapPinsAll15 />
      <MapPinsAll16 />
      <MapPinsAll17 />
    </div>
  );
}

function AtomOnlyCell1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-[290px] overflow-clip relative rounded-[3px]" data-name=".atom-only/cell">
      <WayfindersMap />
    </div>
  );
}

function AtomOnlyRowWithCells() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name=".atom-only/row with cells">
      <AtomOnlyCell />
      <AtomOnlyCell1 />
    </div>
  );
}

export default function AtomOnlyMultirow() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name=".atom-only/multirow">
      <AtomOnlyRowWithCells />
    </div>
  );
}