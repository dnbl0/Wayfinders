import svgPaths from "./svg-hmj0kxsemo";

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[36px] left-1/2 top-1/2 w-[40px]" data-name="Group">
      <div className="absolute inset-[-30.56%_-27.5%_-41.67%_-27.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
          <g id="Group">
            <circle cx="31" cy="31" fill="var(--fill-0, #DFDCD4)" id="Ellipse 211" r="31" />
            <path clipRule="evenodd" d={svgPaths.p17899e00} fill="var(--fill-0, #ED0C06)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p3c559e80} fill="var(--fill-0, #18249C)" fillRule="evenodd" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Ampol() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[36px] left-1/2 top-[calc(50%-15px)] w-[40px]" data-name="Ampol">
      <Group />
    </div>
  );
}

export default function DropPin() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Drop Pin">
      <div className="h-[100px] relative shrink-0 w-[74px]" data-name="Path">
        <div className="absolute inset-[-4%_-10.81%_-12%_-10.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 116">
            <g filter="url(#filter0_d_3_25)" id="Path">
              <path clipRule="evenodd" d={svgPaths.p27ddff80} fill="var(--fill-0, #1E212B)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="116" id="filter0_d_3_25" width="90" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.839216 0 0 0 0 0.827451 0 0 0 0 0.784314 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_25" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_25" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Ampol />
    </div>
  );
}