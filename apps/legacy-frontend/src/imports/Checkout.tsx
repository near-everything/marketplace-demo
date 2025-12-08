import svgPaths from "./svg-jhz5c8sxrh";
import imgImageWithFallback from "figma:asset/4fa8b39e9c2ac96748ac43f791167a77131c590e.png";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Button">
      <Icon />
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[36px] text-[14px] text-neutral-950 text-nowrap top-[8px] tracking-[-0.48px] whitespace-pre">Back to Cart</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[69px] items-start left-0 pb-px pl-[75px] pr-[1339.95px] pt-[16px] top-0 w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Checkout() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Checkout">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Order Summary</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#ececf0] relative rounded-[4px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-[80px]">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Protocol Hoodie</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[140px]">Size: L • Qty: 1</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[80px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[80px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[80px] relative shrink-0 w-[54.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[80px] relative w-[54.734px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[54.73px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[90px]">$65.00</p>
      </div>
    </div>
  );
}

function Checkout1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-start relative shrink-0 w-full" data-name="Checkout">
      <Container1 />
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Checkout />
      <Checkout1 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Primitive.div" />;
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[63.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Subtotal</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[47.531px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-0 tracking-[-0.48px] w-[48px]">$65.00</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[63.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Shipping</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[31.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[31.688px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Free</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[23.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[23.766px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Tax</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[39.609px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-[39.61px] text-[14px] text-neutral-950 text-right top-0 tracking-[-0.48px] translate-x-[-100%] w-[113px]">$5.20</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Primitive.div" />;
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[45.609px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Total</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[79.22px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[123px]">$70.20</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-[80px] text-[#717182] text-[14px] text-right top-0 tracking-[-0.48px] translate-x-[-100%] w-[80px]">20.06 NEAR</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[44px] relative shrink-0 w-[79.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[79.219px]">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Container6 />
    </div>
  );
}

function Checkout2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[153px] items-start relative shrink-0 w-full" data-name="Checkout">
      <Container3 />
      <Container4 />
      <Container5 />
      <PrimitiveDiv1 />
      <Container7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <PrimitiveDiv />
      <Checkout2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[190.094px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Apply Discount Code</p>
    </div>
  );
}

function Search() {
  return (
    <div className="h-[40px] relative shrink-0 w-[238px]" data-name="Search">
      <div className="absolute bg-white inset-0 rounded-[3px]" data-name="Searchfield">
        <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <div className="absolute flex flex-col font-['Red_Hat_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-[15px] text-[#717182] text-[14px] text-nowrap top-[20px] tracking-[-0.48px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">Enter Code</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[580px]">
      <Paragraph5 />
      <Search />
    </div>
  );
}

function EnterDiscountCode() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex h-[72px] items-center justify-between relative rounded-[4px] shrink-0 w-[614px]" data-name="Enter Discount Code">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[678px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start pb-0 pt-[32px] px-[32px] relative w-[678px]">
        <Frame1 />
        <Frame />
        <EnterDiscountCode />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col items-start p-px relative shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <CardContent />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[680px]" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Choose Payment Method</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3d12d900} fill="var(--fill-0, black)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#00ec97] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-black text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Pay with NEAR `}</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] tracking-[-0.48px]">Recommended</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-0 w-[225.281px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon2() {
  return <div className="h-[32px] shrink-0 w-full" data-name="Icon" />;
}

function NearLogo() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[600px] size-[32px] top-[4px]" data-name="NearLogo">
      <Icon2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[24px] w-[632px]" data-name="Container">
      <Container10 />
      <NearLogo />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[76px] w-[632px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Instant checkout with your NEAR wallet</p>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[120px] left-0 top-0 w-[680px]" data-name="Container" />;
}

function Button1() {
  return (
    <div className="h-[120px] relative rounded-[4px] shrink-0 w-[680px]" data-name="Button">
      <div className="h-[120px] overflow-clip relative rounded-[inherit] w-[680px]">
        <Container11 />
        <Paragraph8 />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <rect fill="var(--fill-0, #8A85FA)" height="6" id="Rectangle 78" rx="1" width="22" x="1" y="4" />
          <path d={svgPaths.p197f6980} id="Icon_2" stroke="var(--stroke-0, #635BFF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#d6d3ff] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[128px]">
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Pay with Card</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.82%_0.13%_9.59%_1.31%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 14">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3aae5770} fill="var(--fill-0, #635BFF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[16px] left-[66.7px] top-0 w-[33px]" data-name="Img">
      <Group />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[16px] relative shrink-0 w-[99.7px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[99.7px]">
        <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-16.4px)] text-[#635bff] text-[12px] text-center top-[7.18px] translate-x-[-50%] translate-y-[-50%] w-[66.9px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">{`Powered by `}</p>
        </div>
        <Img />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[26px] top-[26px] w-[628px]" data-name="Container">
      <Container13 />
      <Paragraph9 />
      <Link />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-[26px] top-[74px] w-[628px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Traditional checkout with credit card</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[120px] relative rounded-[4px] shrink-0 w-[680px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container14 />
      <Paragraph10 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[483px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[411px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[32px] items-start relative self-start shrink-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute gap-[48px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[502px] left-[75px] top-[159px] w-[1408px]" data-name="Container">
      <Card />
      <Container17 />
    </div>
  );
}

function Checkout3() {
  return (
    <div className="bg-white h-[967px] relative shrink-0 w-[1558px]" data-name="Checkout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[967px] relative w-[1558px]">
        <Container />
        <Container18 />
        <p className="absolute font-['Red_Hat_Mono:SemiBold',sans-serif] font-semibold leading-[normal] left-[76px] text-[32px] text-neutral-950 text-nowrap top-[101px] tracking-[-0.48px] whitespace-pre">Checkout</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-0 relative shrink-0 w-[1558px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[1558px]" />
    </div>
  );
}

function App() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[1040px] items-start left-0 pb-0 pt-[73px] px-0 top-0 w-[1558px]" data-name="App">
      <Checkout3 />
      <Section />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[27.64%_14.32%_27.65%_37.07%]" data-name="Group">
      <div className="absolute inset-[27.82%_51.59%_28.67%_37.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p229a5640} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.65%_37.77%_27.65%_50.13%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p3dbe3800} fill="var(--fill-0, black)" id="Vector_2" />
        </svg>
      </div>
      <div className="absolute inset-[27.64%_25.06%_27.91%_63.74%]" data-name="Vector_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
          <path d={svgPaths.p35204300} fill="var(--fill-0, black)" id="Vector_3" />
        </svg>
      </div>
      <div className="absolute inset-[28.67%_14.32%_28.67%_76.88%]" data-name="Vector_4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
          <path d={svgPaths.p211f3380} fill="var(--fill-0, black)" id="Vector_4" />
        </svg>
      </div>
    </div>
  );
}

function NearLogo1() {
  return (
    <div className="absolute contents inset-[19.05%_14.32%_19.05%_14.33%]" data-name="NEAR Logo">
      <Group1 />
      <div className="absolute inset-[19.05%_68.28%_19.05%_14.33%]" data-name="Vector_5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p7395c00} fill="var(--fill-0, black)" id="Vector_5" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <NearLogo1 />
    </div>
  );
}

function NearLogo2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 top-[2px] w-[115px]" data-name="NearLogo">
      <Icon4 />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Men</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[45.609px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Women</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Collections</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[45.609px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[24px] items-center left-[558.53px] top-[6px] w-[290.922px]" data-name="Navigation">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13f2e300} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function FavButton() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Fav button">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_1548)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pec8cb00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_5_1548">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CartButton() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Cart Button">
      <Icon7 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[1284px] top-0" data-name="Container">
      <Button7 />
      <FavButton />
      <CartButton />
    </div>
  );
}

function IconSearch() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[12px]" data-name="icon/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/search">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 14L11.1 11.1" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute h-[40px] left-[1032px] top-[-2px] w-[238px]" data-name="Search">
      <div className="absolute bg-[#f3f3f5] inset-0" data-name="Searchfield" />
      <div className="absolute flex flex-col font-['Red_Hat_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-[31px] text-[#717182] text-[14px] text-nowrap top-[20px] tracking-[-0.48px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">Search products...</p>
      </div>
      <IconSearch />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <NearLogo2 />
      <Navigation />
      <Container19 />
      <Search1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[69px] items-start left-1/2 pb-px pt-[16px] px-[75px] top-0 translate-x-[-50%] w-[1558px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container20 />
    </div>
  );
}

export default function Checkout4() {
  return (
    <div className="bg-white relative size-full" data-name="Checkout">
      <App />
      <Header />
    </div>
  );
}