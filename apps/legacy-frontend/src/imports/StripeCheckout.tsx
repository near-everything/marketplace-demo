import svgPaths from "./svg-lc4wajod96";
import imgImageWithFallback from "figma:asset/4fa8b39e9c2ac96748ac43f791167a77131c590e.png";
import img6D65726368616E745F69643D616363745F31534C505549367A43544F6A69626B4E26636C69656E743D5041594D454E545F50414745 from "figma:asset/90fd96cccb5e0428bcdda396bacdfac4c823b84c.png";
import { imgGroup } from "./svg-6clm8";

function Svg() {
  return (
    <div className="absolute left-[4px] size-[12px] top-[8px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG" opacity="0.4">
          <path clipRule="evenodd" d={svgPaths.p505d180} fill="var(--fill-0, #1A1A1A)" fillOpacity="0.9" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute h-[12px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p196e1500} fill="var(--fill-0, #1A1A1A)" fillOpacity="0.5" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-white left-[24px] rounded-[28px] shadow-[0px_2px_5px_0px_rgba(50,50,93,0.1),0px_1px_1px_0px_rgba(0,0,0,0.07)] size-[28px] top-1/2 translate-y-[-50%]" data-name="Background+Shadow">
      <Svg1 />
    </div>
  );
}

function LinkBackTo() {
  return (
    <div className="absolute h-[28px] left-[-24px] top-1/2 translate-y-[-50%] w-[60px]" data-name="Link - Back to">
      <Svg />
      <BackgroundShadow />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[28px] opacity-0 text-[14px] text-[rgba(26,26,26,0.9)] top-[13.91px] translate-y-[-50%] w-[31.33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Back</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[124.17px]" data-name="Container">
      <LinkBackTo />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[28px] left-0 right-0 top-0" data-name="Header">
      <Container />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[12.5%] left-0 right-0 top-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="Group">
          <path d={svgPaths.p7e07400} fill="var(--fill-0, #43458B)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p334fed00} fill="var(--fill-0, #FCD669)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FlagIconEu80D53Aa74E8Cf703577Cb29D7Cf745BdSvg() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="FlagIcon-EU-80d53aa74e8cf703577cb29d7cf745bd.svg">
      <Group />
    </div>
  );
}

function FlagIconEu80D53Aa74E8Cf703577Cb29D7Cf745BdSvgFill() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[22px]" data-name="FlagIcon-EU-80d53aa74e8cf703577cb29d7cf745bd.svg fill">
      <FlagIconEu80D53Aa74E8Cf703577Cb29D7Cf745BdSvg />
    </div>
  );
}

function Eu() {
  return (
    <div className="absolute h-[16px] left-[13px] overflow-clip top-[14.18px] w-[22px]" data-name="EU">
      <FlagIconEu80D53Aa74E8Cf703577Cb29D7Cf745BdSvgFill />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[44.39px] left-0 right-[194px] rounded-[10px] top-[52.8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Eu />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[calc(50%-29.43px)] text-[15.6px] text-black text-center top-[21.5px] translate-x-[-50%] translate-y-[-50%] w-[49.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.4px]">€27.05</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[12.5%] left-0 right-0 top-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="Group">
          <path d={svgPaths.p1f6d8f40} fill="var(--fill-0, #E25950)" id="Vector" />
          <path d={svgPaths.pd77a600} fill="var(--fill-0, #F6F9FC)" id="Vector_2" />
          <path d={svgPaths.p33630500} fill="var(--fill-0, #E25950)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p3a0a1300} fill="var(--fill-0, #43458B)" id="Vector_4" />
          <path d={svgPaths.p3f5eb240} fill="var(--fill-0, white)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p2b15570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_6" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67Svg() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="FlagIcon-US-858b47c5a50311ee27ec390dd06d3b67.svg">
      <Group1 />
    </div>
  );
}

function FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67SvgFill() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[22px]" data-name="FlagIcon-US-858b47c5a50311ee27ec390dd06d3b67.svg fill">
      <FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67Svg />
    </div>
  );
}

function Us() {
  return (
    <div className="absolute h-[16px] left-[13px] overflow-clip top-[14.18px] w-[22px]" data-name="US">
      <FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67SvgFill />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[44.39px] left-[194px] right-0 rounded-[10px] top-[52.8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Us />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[calc(50%-29.43px)] text-[15.6px] text-black text-center top-[21.5px] translate-x-[-50%] translate-y-[-50%] w-[49.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.4px]">$29.99</p>
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-0 size-[42px] top-[0.02px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Component6D65726368616E745F69643D616363745F31534C505549367A43544F6A69626B4E26636C69656E743D5041594D454E545F() {
  return (
    <div className="absolute left-[calc(50%-169px)] overflow-clip rounded-[4px] size-[42px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="6d65726368616e745f69643d616363745f31534c505549367a43544f6a69626b4e26636c69656e743d5041594d454e545f50414745">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6D65726368616E745F69643D616363745F31534C505549367A43544F6A69626B4E26636C69656E743D5041594D454E545F50414745} />
      </div>
      <ImageWithFallback />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[18.19px] left-[58px] overflow-clip right-[67.95px] top-px" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[14px] text-[rgba(26,26,26,0.9)] text-nowrap top-[9.5px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px] whitespace-pre">NEAR Protocol Hoodie</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[15.6px] left-[58px] overflow-clip right-[20px] top-[20.8px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[11.8px] text-[rgba(26,26,26,0.5)] top-[7px] translate-y-[-50%] w-[234.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Size: L • Qty: 1</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[42px] left-[5px] right-0 top-0" data-name="List → Item">
      <Component6D65726368616E745F69643D616363745F31534C505549367A43544F6A69626B4E26636C69656E743D5041594D454E545F />
      <Container1 />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[340.05px] text-[13.6px] text-[rgba(26,26,26,0.9)] top-[10px] tracking-[-0.48px] translate-y-[-50%] w-[40.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">€27.05</p>
      </div>
      <Container2 />
      <div className="absolute bottom-[5.59px] left-[272.67px] right-0 top-[36.4px]" data-name="Rectangle" />
    </div>
  );
}

function ParagraphHorizontalBorder() {
  return (
    <div className="absolute h-[51.19px] left-[63px] right-0 top-[58px]" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(26,26,26,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 text-[13.7px] text-[rgba(26,26,26,0.9)] top-[26px] translate-y-[-50%] w-[51.58px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Subtotal</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-[282.05px] text-[13.3px] text-[rgba(26,26,26,0.9)] top-[26px] tracking-[-0.48px] translate-y-[-50%] w-[40.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">€27.05</p>
      </div>
    </div>
  );
}

function ParagraphHorizontalBorder1() {
  return (
    <div className="absolute h-[37.8px] left-[63px] right-0 top-[158.97px]" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(26,26,26,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 text-[13.7px] text-[rgba(26,26,26,0.9)] top-[27px] translate-y-[-50%] w-[57.03px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Total due</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[275.94px] text-[15.3px] text-[rgba(26,26,26,0.9)] top-[26.5px] tracking-[-0.48px] translate-y-[-50%] w-[46.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">€27.05</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[212.77px] left-[-5px] right-0 top-[169.98px]" data-name="Section">
      <ListItem />
      <ParagraphHorizontalBorder />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[63px] text-[#1a1a1a] text-[14px] top-[118.19px] translate-y-[-50%] w-[54.7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Shipping</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[63px] text-[12px] text-[rgba(26,26,26,0.5)] top-[134.38px] translate-y-[-50%] w-[189.65px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Free Shipping (5-10 business days)</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[358.13px] text-[14px] text-[rgba(26,26,26,0.5)] top-[118.19px] tracking-[-0.48px] translate-y-[-50%] w-[27.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Free</p>
      </div>
      <ParagraphHorizontalBorder1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[414.75px] left-0 right-0 top-[60px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-0 text-[16px] text-[rgba(26,26,26,0.9)] top-[25.5px] translate-y-[-50%] w-[138.93px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">Choose a currency:</p>
      </div>
      <Button />
      <Button1 />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[12px] text-[rgba(26,26,26,0.5)] top-[112.19px] translate-y-[-50%] w-[114.61px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">1 USD = 0.9020 EUR</p>
      </div>
      <Section />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white h-[514.75px] left-[302px] top-[48px] w-[380px]" data-name="Background">
      <Header />
      <Container3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white h-[18.18px] left-[45.13%] right-[45.13%] top-[15.41px]" data-name="Background">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[8px] text-[14px] text-[rgba(26,26,26,0.5)] top-[9px] translate-y-[-50%] uppercase w-[21.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Or</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[49px] left-0 overflow-clip right-0 top-[63px]" data-name="Container">
      <div className="absolute bg-[rgba(26,26,26,0.1)] h-px left-0 right-0 top-1/2 translate-y-[-50%]" data-name="Separator" />
      <Background1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute h-[19.797px] left-[196.78px] top-[17.59px] w-[59.391px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 20">
        <g id="SVG">
          <path d={svgPaths.p4d74e00} fill="var(--fill-0, #011E0F)" id="Vector" />
          <path d={svgPaths.pb72f670} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute h-[19.797px] left-[calc(50%+95.87px)] top-[calc(50%+0.35px)] translate-x-[-50%] translate-y-[-50%] w-[59.391px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d={svgPaths.p4d74e00} fill="var(--fill-0, #011E0F)" id="Vector" />
          <path d={svgPaths.pb72f670} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[-20.17%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_3.586px] mask-size-[21.45px_14.278px] right-0 top-[-23.31%]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d="M21.45 0H0V21.45H21.45V0Z" fill="var(--fill-0, #00579F)" id="Vector" />
          <path d={svgPaths.pdba2b00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p5259500} fill="var(--fill-0, white)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p96a2940} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          <path d={svgPaths.p92f5a80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p27e3af00} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-[3.82%] contents left-0 right-0 top-[0.68%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[14.95px] left-0 top-[calc(50%+0.01px)] translate-y-[-50%] w-[21.45px]" data-name="Frame">
      <ClipPathGroup />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute h-[14.94px] left-[338.34px] opacity-0 overflow-clip rounded-[2px] top-1/2 translate-y-[-50%] w-[21.45px]" data-name="SVG">
      <Frame />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center leading-[0] left-[calc(50%-32.53px)] not-italic text-[#011e0f] text-[17px] text-center top-[calc(50%-0.34px)] translate-x-[-50%] translate-y-[-50%] w-[67.15px]">
        <p className="leading-[20.7px]">Pay with</p>
      </div>
      <Svg2 />
      <Svg3 />
      <div className="absolute bg-[#00a355] bottom-[27.39px] left-[323.56px] opacity-0 top-[27.39px] w-px" data-name="Background" />
      <Svg4 />
      <div className="absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] h-[18px] justify-center leading-[0] left-[371.56px] not-italic opacity-0 text-[#011e0f] text-[18px] top-[27.5px] translate-y-[-50%] w-[40.25px]">
        <p className="leading-[18px]">0000</p>
      </div>
    </div>
  );
}

function ButtonPayWithLink() {
  return (
    <div className="absolute bg-[#00d66f] h-[55px] left-[4px] right-[4px] rounded-[6px] top-[4px]" data-name="Button - Pay with Link">
      <Container5 />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute h-[63px] left-[-4px] overflow-clip top-[-4px] w-[388px]" data-name="Html → Body">
      <ButtonPayWithLink />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[120px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <HtmlBody />
      <Container4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[16.71px] left-[120.39px] overflow-clip top-[16px] w-[243.61px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[14px] text-[rgba(26,26,26,0.9)] top-[9px] translate-y-[-50%] w-[233.09px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">davis@demo.everything</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[50.89px] left-0 overflow-clip right-0 rounded-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-[44.8px]" data-name="Background+Shadow">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[16px] text-[13px] text-[rgba(26,26,26,0.7)] top-[25.5px] translate-y-[-50%] w-[32.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.9px]">Email</p>
      </div>
      <Container7 />
    </div>
  );
}

function InputAddressLine() {
  return <div className="absolute bg-white h-[36px] left-0 opacity-0 right-[356px] rounded-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-0" data-name="Input - Address line 2" />;
}

function InputCity() {
  return <div className="absolute bg-white h-[36px] left-0 opacity-0 right-[356px] rounded-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-0" data-name="Input - City" />;
}

function InputZip() {
  return <div className="absolute bg-white h-[36px] left-0 opacity-0 right-[356px] rounded-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-0" data-name="Input - ZIP" />;
}

function OptionsState() {
  return <div className="absolute bg-white h-[36px] left-0 opacity-0 right-[88.42%] rounded-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-0" data-name="Options - State" />;
}

function Svg5() {
  return (
    <div className="absolute right-[390px] size-[12px] top-[calc(50%-54px)] translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path clipRule="evenodd" d={svgPaths.p2d313300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[16px] left-[12px] overflow-clip right-[12px] top-[10px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[14px] text-[rgba(26,26,26,0.5)] top-[8px] translate-y-[-50%] w-[61.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Full name</p>
      </div>
    </div>
  );
}

function InputFullName() {
  return (
    <div className="absolute bg-white h-[36px] left-0 overflow-clip right-0 rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-0" data-name="Input - Full name">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[21px] left-[12px] overflow-clip right-[32px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[14px] text-[rgba(26,26,26,0.9)] top-[10px] translate-y-[-50%] w-[84.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">Italy</p>
      </div>
    </div>
  );
}

function OptionsCountryOrRegion() {
  return (
    <div className="absolute bg-white h-[36px] left-0 overflow-clip right-0 shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-[36px]" data-name="Options - Country or region">
      <Container9 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute right-[12px] size-[12px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2d313300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[16px] left-[12px] overflow-clip right-[12px] top-[10px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[14px] text-[rgba(26,26,26,0.5)] top-[8px] translate-y-[-50%] w-[51.56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Address</p>
      </div>
    </div>
  );
}

function ComboboxGridAddress() {
  return (
    <div className="absolute bg-white h-[36px] left-0 overflow-clip right-0 rounded-bl-[6px] rounded-br-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-[72px]" data-name="Combobox grid - Address">
      <Container10 />
    </div>
  );
}

function Fieldset() {
  return (
    <div className="absolute h-[108px] left-[8px] right-[8px] top-[32.79px]" data-name="Fieldset">
      <InputAddressLine />
      <InputCity />
      <InputZip />
      <OptionsState />
      <Svg5 />
      <InputFullName />
      <OptionsCountryOrRegion />
      <Svg6 />
      <ComboboxGridAddress />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[15.6px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[126.08px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[12px] text-[rgba(26,26,26,0.7)] text-center top-[7px] translate-x-[-50%] translate-y-[-50%] w-[126.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] decoration-dotted leading-[15.6px] underline">Enter address manually</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[15.6px] left-[8px] top-[148.79px] w-[126.08px]" data-name="Button">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[172.39px] left-[-8px] right-[-8px] top-[103.69px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[8px] text-[12.9px] text-[rgba(26,26,26,0.7)] top-[18.5px] translate-y-[-50%] w-[100.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.9px]">Shipping address</p>
      </div>
      <Fieldset />
      <Button2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[16px] left-[12px] overflow-clip right-[132px] top-[10px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[14px] text-[rgba(26,26,26,0.5)] top-[8px] translate-y-[-50%] w-[136.45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">1234 1234 1234 1234</p>
      </div>
    </div>
  );
}

function InputCardNumber() {
  return (
    <div className="absolute bg-white h-[36px] left-0 overflow-clip right-0 rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-0" data-name="Input - Card number">
      <Container13 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[1.56%_1.04%]" data-name="Group">
      <div className="absolute inset-[-1.61%_-1.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16">
          <g id="Group">
            <path d={svgPaths.p3cf3af00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.2" strokeWidth="0.5" />
            <path d={svgPaths.p37ece200} fill="var(--fill-0, #1434CB)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Visa729C05C240C4Bdb47B03Ac81D9945BfeSvg() {
  return (
    <div className="absolute h-[16px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="visa-729c05c240c4bdb47b03ac81d9945bfe.svg">
      <Group7 />
    </div>
  );
}

function Visa729C05C240C4Bdb47B03Ac81D9945BfeSvgFill() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[24px]" data-name="visa-729c05c240c4bdb47b03ac81d9945bfe.svg fill">
      <Visa729C05C240C4Bdb47B03Ac81D9945BfeSvg />
    </div>
  );
}

function Visa() {
  return (
    <div className="absolute h-[16px] left-[260px] overflow-clip top-[calc(50%-18px)] translate-y-[-50%] w-[24px]" data-name="Visa">
      <Visa729C05C240C4Bdb47B03Ac81D9945BfeSvgFill />
    </div>
  );
}

function Mastercard4D8844094130711885B5E41B28C9848FSvg() {
  return (
    <div className="absolute h-[16px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="mastercard-4d8844094130711885b5e41b28c9848f.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16">
        <g id="Group">
          <path d={svgPaths.pc61fb00} fill="var(--fill-0, #252525)" id="Vector" />
          <path d={svgPaths.p5b19af0} fill="var(--fill-0, #EB001B)" id="Vector_2" />
          <path d={svgPaths.pf2e6d00} fill="var(--fill-0, #F79E1B)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p3fe6b400} fill="var(--fill-0, #FF5F00)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Mastercard4D8844094130711885B5E41B28C9848FSvgFill() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[24px]" data-name="mastercard-4d8844094130711885b5e41b28c9848f.svg fill">
      <Mastercard4D8844094130711885B5E41B28C9848FSvg />
    </div>
  );
}

function MasterCard() {
  return (
    <div className="absolute h-[16px] left-[288px] overflow-clip top-[calc(50%-18px)] translate-y-[-50%] w-[24px]" data-name="MasterCard">
      <Mastercard4D8844094130711885B5E41B28C9848FSvgFill />
    </div>
  );
}

function AmexA49B82F46C5Cd6A96A6E418A6Ca1717CSvg() {
  return (
    <div className="absolute h-[16px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16">
        <g id="Group">
          <path d={svgPaths.pc61fb00} fill="var(--fill-0, #016FD0)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p14535a00} fill="var(--fill-0, #FFFFFE)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p222e9480} fill="var(--fill-0, #016FD0)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p386e1770} fill="var(--fill-0, #016FD0)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p19cabf00} fill="var(--fill-0, #FFFFFE)" fillRule="evenodd" id="Vector_5" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p132600} fill="var(--fill-0, #016FD0)" fillRule="evenodd" id="Vector_6" />
            <path clipRule="evenodd" d={svgPaths.p18264b00} fill="var(--fill-0, #016FD0)" fillRule="evenodd" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AmexA49B82F46C5Cd6A96A6E418A6Ca1717CSvgFill() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[24px]" data-name="amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg fill">
      <AmexA49B82F46C5Cd6A96A6E418A6Ca1717CSvg />
    </div>
  );
}

function AmericanExpress() {
  return (
    <div className="absolute h-[16px] left-[316px] overflow-clip top-[calc(50%-18px)] translate-y-[-50%] w-[24px]" data-name="American Express">
      <AmexA49B82F46C5Cd6A96A6E418A6Ca1717CSvgFill />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-[-1.56%] left-[1.04%] right-0 top-[1.56%]" data-name="Group">
      <div className="absolute bottom-[-1.56%] left-[-1.05%] right-0 top-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
          <g id="Group">
            <path d={svgPaths.p27d76f80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.2" strokeWidth="0.45" />
            <path d={svgPaths.p16d88700} fill="var(--fill-0, #F27712)" id="Vector_2" />
            <path d={svgPaths.p3d04ea00} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p3fca0400} fill="var(--fill-0, #F27712)" id="Vector_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute bottom-[-1.56%] contents left-[1.04%] right-0 top-[1.56%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[-1.56%] contents left-[1.04%] right-0 top-[1.56%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-[-1.56%] contents left-[1.04%] right-0 top-[1.56%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-[-1.56%] contents left-[1.04%] right-0 top-[1.56%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function DiscoverAc52Cd46F89Fa40A29A0Bfb954E33173Svg() {
  return (
    <div className="absolute h-[14.4px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.6px]" data-name="discover-ac52cd46f89fa40a29a0bfb954e33173.svg">
      <Group12 />
    </div>
  );
}

function DiscoverAc52Cd46F89Fa40A29A0Bfb954E33173SvgFill() {
  return (
    <div className="absolute h-[14.4px] left-0 overflow-clip top-0 w-[21.6px]" data-name="discover-ac52cd46f89fa40a29a0bfb954e33173.svg fill">
      <DiscoverAc52Cd46F89Fa40A29A0Bfb954E33173Svg />
    </div>
  );
}

function Discover() {
  return (
    <div className="absolute h-[14.4px] left-[345.4px] opacity-0 overflow-clip top-[calc(50%-18px)] translate-y-[-50%] w-[21.6px]" data-name="Discover">
      <DiscoverAc52Cd46F89Fa40A29A0Bfb954E33173SvgFill />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-0 left-[0.89%] right-[0.89%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16">
        <g id="Group">
          <path d={svgPaths.p142ddf00} fill="var(--fill-0, #047AB1)" id="Vector" />
          <path d={svgPaths.p145c46c0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2246e180} fill="var(--fill-0, #D42D06)" id="Vector_3" />
          <path d={svgPaths.p2d595300} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p20b75f80} fill="var(--fill-0, #67B637)" id="Vector_5" />
          <path d={svgPaths.p13745c40} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Jcb271Fd06E6E7A2C52692Ffa91A95Fb64FSvg() {
  return (
    <div className="absolute h-[16px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[23px]" data-name="jcb-271fd06e6e7a2c52692ffa91a95fb64f.svg">
      <Group13 />
    </div>
  );
}

function Jcb271Fd06E6E7A2C52692Ffa91A95Fb64FSvgFill() {
  return (
    <div className="absolute h-[16px] left-0 overflow-clip top-0 w-[23px]" data-name="jcb-271fd06e6e7a2c52692ffa91a95fb64f.svg fill">
      <Jcb271Fd06E6E7A2C52692Ffa91A95Fb64FSvg />
    </div>
  );
}

function Jcb() {
  return (
    <div className="absolute h-[16px] left-[344px] overflow-clip top-[calc(50%-18px)] translate-y-[-50%] w-[23px]" data-name="JCB">
      <Jcb271Fd06E6E7A2C52692Ffa91A95Fb64FSvgFill />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[1.56%_1.04%_-1.56%_1.04%]" data-name="Group">
      <div className="absolute inset-[-1.56%_-1.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
          <g id="Group">
            <path d={svgPaths.p27d76f80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.2" strokeWidth="0.45" />
            <path d={svgPaths.p200dd80} fill="var(--fill-0, #0165AC)" id="Vector_2" />
            <path d={svgPaths.p3758fe00} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%_-1.56%_1.04%]" data-name="Group">
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%_-1.56%_1.04%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%_-1.56%_1.04%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[1.56%_1.04%_-1.56%_1.04%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function DinersFbcbd3360F8E3F629Cdaa80E93Abdb8BSvg() {
  return (
    <div className="absolute h-[14.4px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.6px]" data-name="diners-fbcbd3360f8e3f629cdaa80e93abdb8b.svg">
      <Group18 />
    </div>
  );
}

function DinersFbcbd3360F8E3F629Cdaa80E93Abdb8BSvgFill() {
  return (
    <div className="absolute h-[14.4px] left-0 overflow-clip top-0 w-[21.6px]" data-name="diners-fbcbd3360f8e3f629cdaa80e93abdb8b.svg fill">
      <DinersFbcbd3360F8E3F629Cdaa80E93Abdb8BSvg />
    </div>
  );
}

function DinersClub() {
  return (
    <div className="absolute h-[14.4px] left-[345.4px] opacity-0 overflow-clip top-[calc(50%-18px)] translate-y-[-50%] w-[21.6px]" data-name="Diners Club">
      <DinersFbcbd3360F8E3F629Cdaa80E93Abdb8BSvgFill />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute bottom-[0.1%] left-0 right-[3.28%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
        <g id="Group">
          <path d={svgPaths.p13e72c00} fill="var(--fill-0, #DD2423)" id="Vector" />
          <path d={svgPaths.p10a8280} fill="var(--fill-0, #16315E)" id="Vector_2" />
          <path d={svgPaths.p14d77700} fill="var(--fill-0, #036862)" id="Vector_3" />
          <path d={svgPaths.p3ffcb870} fill="var(--fill-0, #FEFEFE)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Unionpay8A10Aefc7295216C338Ba4E1224627A1Svg() {
  return (
    <div className="absolute h-[14.4px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.6px]" data-name="unionpay-8a10aefc7295216c338ba4e1224627a1.svg">
      <Group19 />
    </div>
  );
}

function Unionpay8A10Aefc7295216C338Ba4E1224627A1SvgFill() {
  return (
    <div className="absolute h-[14.4px] left-0 overflow-clip top-0 w-[21.6px]" data-name="unionpay-8a10aefc7295216c338ba4e1224627a1.svg fill">
      <Unionpay8A10Aefc7295216C338Ba4E1224627A1Svg />
    </div>
  );
}

function UnionPay() {
  return (
    <div className="absolute h-[14.4px] left-[345.4px] opacity-0 overflow-clip top-[calc(50%-18px)] translate-y-[-50%] w-[21.6px]" data-name="UnionPay">
      <Unionpay8A10Aefc7295216C338Ba4E1224627A1SvgFill />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[16px] left-[12px] overflow-clip right-[12px] top-[10px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[13.8px] text-[rgba(26,26,26,0.5)] top-[8px] translate-y-[-50%] w-[53.62px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">MM / YY</p>
      </div>
    </div>
  );
}

function InputExpiration() {
  return (
    <div className="absolute bg-white h-[36px] left-0 overflow-clip right-[190px] rounded-bl-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-[36px]" data-name="Input - Expiration">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[16px] left-[12px] overflow-clip right-[28px] top-[10px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[14px] text-[rgba(26,26,26,0.5)] top-[8px] translate-y-[-50%] w-[29.76px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">CVC</p>
      </div>
    </div>
  );
}

function InputCvc() {
  return (
    <div className="absolute bg-white h-[36px] left-[190px] overflow-clip right-0 rounded-br-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-[36px]" data-name="Input - CVC">
      <Container15 />
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[16px] left-[338px] top-[46px] w-[30px]" data-name="Img">
      <div className="absolute bottom-[-0.05%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 16">
          <g id="Img">
            <g id="Group" opacity="0.74">
              <path clipRule="evenodd" d={svgPaths.p1764500} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
              <path d={svgPaths.p3e7cb300} fill="var(--fill-0, black)" id="Vector_2" />
              <path d={svgPaths.p89e4780} fill="var(--fill-0, black)" id="Vector_3" />
              <path d={svgPaths.p30fb8700} fill="var(--fill-0, black)" id="Vector_4" />
            </g>
            <path d={svgPaths.p3f28c380} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p75d180} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p39558200} fill="var(--fill-0, black)" id="Vector_7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Fieldset1() {
  return (
    <div className="absolute h-[72px] left-0 right-0 top-[357.67px]" data-name="Fieldset">
      <InputCardNumber />
      <Visa />
      <MasterCard />
      <AmericanExpress />
      <Discover />
      <Jcb />
      <DinersClub />
      <UnionPay />
      <InputExpiration />
      <InputCvc />
      <Img />
    </div>
  );
}

function OverlayShadow() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[2px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] size-[16px] top-[4px]" data-name="Overlay+Shadow" />;
}

function Svg7() {
  return (
    <div className="absolute h-[19px] left-0 top-0 w-[21px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p26977900} fill="var(--fill-0, #1A1A1A)" fillOpacity="0.9" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[21.8px] left-0 right-0 top-[445.67px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[28px] text-[12.8px] text-[rgba(26,26,26,0.7)] top-[11.5px] translate-y-[-50%] w-[177.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.9px]">Billing info is same as shipping</p>
      </div>
      <OverlayShadow />
      <Svg7 />
    </div>
  );
}

function OverlayShadow1() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-[12px] rounded-[2px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] size-[16px] top-[9px]" data-name="Overlay+Shadow" />;
}

function Svg8() {
  return (
    <div className="absolute h-[19px] left-[12px] top-[5px] w-[21px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p26977900} fill="var(--fill-0, #1A1A1A)" fillOpacity="0.9" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="absolute bg-white h-[71.97px] left-0 overflow-clip right-0 rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-[495.47px]" data-name="Background+Shadow">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[40px] text-[13.7px] text-[rgba(26,26,26,0.9)] top-[17px] translate-y-[-50%] w-[246.87px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Save my information for faster checkout</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[31.89px] justify-center leading-[16.9px] left-[40px] text-[13px] text-[rgba(26,26,26,0.7)] top-[46.14px] translate-y-[-50%] w-[276.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Pay securely on this site and everywhere Link is</p>
        <p>accepted.</p>
      </div>
      <OverlayShadow1 />
      <div className="absolute left-[12px] opacity-0 size-[16px] top-[9px]" data-name="Input" />
      <Svg8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[16px] left-[12px] overflow-clip right-[26px] top-[10px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[24px] text-[14px] text-[rgba(26,26,26,0.5)] top-[8px] translate-y-[-50%] w-[95.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">(201) 555-0123</p>
      </div>
    </div>
  );
}

function InputPhoneNumber() {
  return (
    <div className="absolute bg-white h-[36px] left-0 overflow-clip right-0 rounded-bl-[6px] rounded-br-[6px] shadow-[0px_0px_0px_1px_#e0e0e0,0px_2px_4px_0px_rgba(0,0,0,0.07),0px_1px_1.5px_0px_rgba(0,0,0,0.05)] top-[567.44px]" data-name="Input - Phone number">
      <Container17 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-[12.5%] left-0 right-0 top-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="Group">
          <path d={svgPaths.p1f6d8f40} fill="var(--fill-0, #E25950)" id="Vector" />
          <path d={svgPaths.pd77a600} fill="var(--fill-0, #F6F9FC)" id="Vector_2" />
          <path d={svgPaths.p33630500} fill="var(--fill-0, #E25950)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.p3a0a1300} fill="var(--fill-0, #43458B)" id="Vector_4" />
          <path d={svgPaths.p3f5eb240} fill="var(--fill-0, white)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p2b15570} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_6" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67Svg1() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="FlagIcon-US-858b47c5a50311ee27ec390dd06d3b67.svg">
      <Group20 />
    </div>
  );
}

function FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67SvgFill1() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="FlagIcon-US-858b47c5a50311ee27ec390dd06d3b67.svg fill">
      <FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67Svg1 />
    </div>
  );
}

function Us1() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="US">
      <FlagIconUs858B47C5A50311Ee27Ec390Dd06D3B67SvgFill1 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute bottom-[-1px] right-[-4px] size-[8px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p14b8f700} fill="var(--fill-0, #1A1A1A)" fillOpacity="0.5" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2d967980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[578.44px]" data-name="Container">
      <Us1 />
      <Svg9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[55px] left-0 opacity-60 overflow-clip top-0 w-[380px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[calc(50%+0.09px)] text-[16px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[27.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Pay</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[55px] left-[16px] opacity-0 overflow-clip top-0 w-[380px]" data-name="Container">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[15.8px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[79.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Processing</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute left-[345px] size-[18px] top-[18.5px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG" opacity="0">
          <path d={svgPaths.p233dae00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute h-[8.4px] left-[183.4px] top-[24.7px] w-[13.2px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
        <g id="SVG">
          <path d="M0.3 3.6L4.8 8.1L12.9 0" id="Vector" opacity="0" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#0074d4] h-[55px] left-0 overflow-clip right-0 rounded-[6px] shadow-[0px_2px_5px_0px_rgba(50,50,93,0.1),0px_1px_1px_0px_rgba(0,0,0,0.07)] top-[627.44px]" data-name="Button">
      <Container19 />
      <Container20 />
      <Svg10 />
      <Svg11 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(50,50,93,0.1)]" />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[15px] left-[calc(50%+51.19px)] top-[701.23px] translate-x-[-50%] w-[35.39px]" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[12.6px] text-[rgba(26,26,26,0.7)] text-center top-[7.5px] translate-x-[-50%] translate-y-[-50%] w-[35.59px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] decoration-dotted leading-[17px] underline">Terms</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[15px] left-[calc(50%+118.64px)] top-[701.23px] translate-x-[-50%] w-[41.66px]" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[12.9px] text-[rgba(26,26,26,0.7)] text-center top-[7.5px] translate-x-[-50%] translate-y-[-50%] w-[41.86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] decoration-dotted leading-[17px] underline">Privacy</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[717.23px] left-0 right-0 top-[112px]" data-name="Form">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-0 text-[15.5px] text-[rgba(26,26,26,0.9)] top-[17px] translate-y-[-50%] w-[146.083px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">Shipping information</p>
      </div>
      <BackgroundShadow1 />
      <Container12 />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-0 text-[15.8px] text-[rgba(26,26,26,0.9)] top-[305.08px] translate-y-[-50%] w-[121.154px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">Payment method</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[12.7px] text-[rgba(26,26,26,0.7)] top-[343.38px] translate-y-[-50%] w-[96.31px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.9px]">Card information</p>
      </div>
      <Fieldset1 />
      <Container16 />
      <BackgroundShadow2 />
      <InputPhoneNumber />
      <Container18 />
      <Button3 />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%-54.69px)] text-[13px] text-[rgba(26,26,26,0.7)] text-center top-[708.23px] translate-x-[-50%] translate-y-[-50%] w-[176.793px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">{`By paying, you agree to Link’s `}</p>
      </div>
      <Link />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+83.46px)] text-[13px] text-[rgba(26,26,26,0.7)] text-center top-[708.23px] translate-x-[-50%] translate-y-[-50%] w-[29.137px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">{` and `}</p>
      </div>
      <Link1 />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+141.45px)] text-[13px] text-[rgba(26,26,26,0.7)] text-center top-[708.23px] translate-x-[-50%] translate-y-[-50%] w-[3.956px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">.</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[829.23px] left-0 right-0 top-0" data-name="Main">
      <Container6 />
      <Form />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[15.59px] left-[calc(50%+38.18px)] top-[calc(50%+0.01px)] translate-x-[-50%] translate-y-[-50%] w-[32.68px]" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[11.6px] text-[rgba(26,26,26,0.5)] top-[7px] translate-y-[-50%] w-[32.88px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Terms</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[15.59px] left-[calc(50%+90.19px)] top-[calc(50%+0.01px)] translate-x-[-50%] translate-y-[-50%] w-[39.34px]" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[12px] text-[rgba(26,26,26,0.5)] top-[7px] translate-y-[-50%] w-[39.54px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Privacy</p>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[5.82%_0.13%_9.59%_1.31%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 14">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3aae5770} fill="var(--fill-0, #1A1A1A)" fillOpacity="0.4" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute h-[16px] left-[66.7px] top-0 w-[33px]" data-name="Img">
      <Group21 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[16px] left-[calc(50%-60.01px)] top-[3px] translate-x-[-50%] w-[99.7px]" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-16.4px)] text-[12px] text-[rgba(26,26,26,0.5)] text-center top-[7.18px] translate-x-[-50%] translate-y-[-50%] w-[66.9px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">{`Powered by `}</p>
      </div>
      <Img1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[21px] left-0 right-0 top-[calc(50%-16px)] translate-y-[-50%]" data-name="Footer">
      <Link2 />
      <Link3 />
      <Link4 />
      <div className="absolute bottom-[9.52%] right-[184.16px] top-[14.29%] w-px" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(26,26,26,0.2)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-white h-[85px] left-0 right-0 top-[829.23px]" data-name="Background">
      <Footer />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white bottom-[-0.23px] left-[842px] top-[48px] w-[380px]" data-name="Background">
      <Main />
      <Background2 />
    </div>
  );
}

export default function StripeCheckout() {
  return (
    <div className="bg-white relative size-full" data-name="Stripe Checkout">
      <div className="absolute bg-white h-[1040px] left-[762px] shadow-[15px_0px_30px_0px_rgba(0,0,0,0.18)] top-0 w-[826px]" data-name="Background+Shadow" />
      <Background />
      <Background3 />
    </div>
  );
}