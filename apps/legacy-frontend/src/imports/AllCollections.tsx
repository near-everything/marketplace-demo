import svgPaths from "./svg-ltzoq7tm61";
import imgImageWithFallback from "figma:asset/8b83c6986dd3ffd55dc4f73c18f55e152452f668.png";
import imgImageWithFallback1 from "figma:asset/fd32da6d955919681e059a5194a228ec74fb5883.png";
import imgImageWithFallback2 from "figma:asset/1abbf3e6f5926f53e873d365dc5909350868bab2.png";
import imgImageWithFallback3 from "figma:asset/752ea4da164bcbcb76b2a46abbe7f5eecbe4a267.png";

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[383.59px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Our Collections</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[28px] left-[384.3px] text-[#717182] text-[18px] text-center top-0 tracking-[-0.48px] translate-x-[-50%] w-[723px]">Discover premium NEAR Protocol merchandise across four curated collections. Each piece is designed with quality and sustainability in mind.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0.3)] box-border content-stretch flex flex-col h-[325px] items-start left-0 pb-px pt-[96px] px-[395px] top-0 w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[517.5px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#ececf0] content-stretch flex flex-col h-[517.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[145.922px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[145.922px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Men's Collection`}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Icon />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] top-[-1px] tracking-[-0.48px] w-[593px]">Premium fits designed specifically for men. Classic essentials to modern oversized styles.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[79.219px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[80px]">4 products</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[32px] relative shrink-0 w-[79.453px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative w-[79.453px]">
        <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Explore</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Button />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[181px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[181px] items-start pb-0 pt-[25px] px-[24px] relative w-full">
          <Container3 />
          <Paragraph1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container2 />
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[517.5px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#ececf0] content-stretch flex flex-col h-[517.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164.172px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[164.172px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Women's Collection`}</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Icon1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] top-[-1px] tracking-[-0.48px] w-[539px]">Tailored fits designed for women. Comfortable, stylish, and sustainably made.</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[79.219px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[80px]">4 products</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[79.453px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative w-[79.453px]">
        <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Explore</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Button1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[181px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[181px] items-start pb-0 pt-[25px] px-[24px] relative w-full">
          <Container8 />
          <Paragraph2 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container7 />
          <Container10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[517.5px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#ececf0] content-stretch flex flex-col h-[517.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Legion Collection</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[22px] relative shrink-0 w-[65.047px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[65.047px]">
        <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Limited</p>
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-950 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[277px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[277px]">
        <Heading5 />
        <Badge />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Icon2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] top-[-1px] tracking-[-0.48px] w-[612px]">{`Limited edition designs created in collaboration with artists. Once they're gone, they're gone.`}</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[79.219px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[80px]">3 products</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[79.453px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative w-[79.453px]">
        <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Explore</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Button2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[181px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[181px] items-start pb-0 pt-[25px] px-[24px] relative w-full">
          <Container14 />
          <Paragraph3 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:2_/_1] relative shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container12 />
          <Container16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[517.5px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#ececf0] content-stretch flex flex-col h-[517.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[100.328px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[100.328px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Accessories</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Icon3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] top-[-1px] tracking-[-0.48px] w-[548px]">Complete your look with our curated selection. From everyday essentials to statement pieces.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[79.219px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[80px]">7 products</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[79.453px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative w-[79.453px]">
        <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Explore</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Button3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[181px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[181px] items-start pb-0 pt-[25px] px-[24px] relative w-full">
          <Container19 />
          <Paragraph4 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:2_/_2] relative shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container18 />
          <Container21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[1425px] left-[75px] top-[389px] w-[1408px]" data-name="Container">
      <Container6 />
      <Container11 />
      <Container17 />
      <Container22 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[672px]" data-name="Heading 2">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[336.22px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">{`Can't decide?`}</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[336.16px] text-[#717182] text-[16px] text-center text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Browse our entire collection and find the perfect piece for you.</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[40px] left-[243.67px] top-[88px] w-[184.641px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[25px] text-[14px] text-neutral-950 text-nowrap top-[10px] tracking-[-0.48px] whitespace-pre">View All Products</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph5 />
      <Button4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0.3)] box-border content-stretch flex flex-col h-[257px] items-start left-0 pb-0 pt-[65px] px-[443px] top-[1878px] w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

function Collections() {
  return (
    <div className="h-[2135px] relative shrink-0 w-[1558px]" data-name="Collections">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[2135px] relative w-[1558px]">
        <Container1 />
        <Container23 />
        <Container25 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Protocol</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[262px]">Building the future of blockchain technology, one block at a time.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Paragraph6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Shop</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[95.047px]" data-name="Button">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">All Products</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[87.125px]" data-name="Button">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Collections</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button6 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading7 />
      <List />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Support</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-px w-[23.766px]" data-name="Link">
      <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">FAQ</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-px w-[63.375px]" data-name="Link">
      <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">Shipping</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-px w-[55.453px]" data-name="Link">
      <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">Returns</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <List1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Connect</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-px w-[55.453px]" data-name="Link">
      <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">Twitter</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-px w-[47.531px]" data-name="Link">
      <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">GitHub</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-px w-[55.453px]" data-name="Link">
      <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">Contact</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading9 />
      <List2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[116px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-[704.17px] text-[#717182] text-[14px] text-center text-nowrap top-0 tracking-[-0.48px] translate-x-[-50%] whitespace-pre">© 2025 NEAR Protocol. All rights reserved.</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Paragraph7 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[265px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[265px] items-start pb-0 pt-[32px] px-[64px] relative w-full">
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[266px] relative shrink-0 w-[1558px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[266px] items-start pb-0 pt-px px-[11px] relative w-[1558px]">
        <Container32 />
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
    <div className="absolute box-border content-stretch flex flex-col h-[2470px] items-start left-0 pb-0 pt-[69px] px-0 top-0 w-[1558px]" data-name="App">
      <Collections />
      <Footer />
      <Section />
    </div>
  );
}

function Group() {
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

function NearLogo() {
  return (
    <div className="absolute contents inset-[19.05%_14.32%_19.05%_14.33%]" data-name="NEAR Logo">
      <Group />
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
      <NearLogo />
    </div>
  );
}

function NearLogo1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 top-[2px] w-[115px]" data-name="NearLogo">
      <Icon4 />
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Men</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[45.609px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Women</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Collections</p>
      </div>
    </div>
  );
}

function Button10() {
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
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
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

function Button11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[44px] size-[36px] top-0" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13f2e300} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[36px] top-0" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_191)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pec8cb00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_18_191">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[88px] size-[36px] top-0" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[36px] left-[1284px] top-0 w-[124px]" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <NearLogo1 />
      <Navigation />
      <Container33 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[69px] items-start left-0 pb-px pt-[16px] px-[75px] top-0 w-[1558px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container34 />
    </div>
  );
}

export default function AllCollections() {
  return (
    <div className="bg-white relative size-full" data-name="All Collections">
      <App />
      <Header />
    </div>
  );
}