import svgPaths from "./svg-zyqrrqcpdd";
import imgImageWithFallback from "figma:asset/4fa8b39e9c2ac96748ac43f791167a77131c590e.png";
import imgImageWithFallback1 from "figma:asset/94535c3b6626230dc51277bada2fec4da763bba7.png";
import imgImageWithFallback2 from "figma:asset/91bb79150f84dc69e298818199169189c32fd5d7.png";
import imgImageWithFallback3 from "figma:asset/c90671806a221dfe4f2cfa2c496b9afe21957596.png";
import imgImageWithFallback4 from "figma:asset/60aeb6e8fae869d59657e4792208dcffbd4ed8de.png";

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
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[36px] text-[14px] text-neutral-950 text-nowrap top-[8px] tracking-[-0.48px] whitespace-pre">Back to Shop</p>
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

function ImageWithFallback() {
  return (
    <div className="h-[388.656px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex flex-col items-start left-0 overflow-clip size-[388.656px] top-0" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[388.672px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex flex-col items-start left-[404.66px] overflow-clip size-[388.672px] top-0" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[388.656px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex flex-col items-start left-0 overflow-clip size-[388.656px] top-[404.67px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[388.672px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#ececf0] content-stretch flex flex-col items-start left-[404.66px] overflow-clip size-[388.672px] top-[404.67px]" data-name="Container">
      <ImageWithFallback3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[793.344px] left-[64px] top-[48px] w-[793.328px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[30px] left-0 text-[20px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">You Might Also Like</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Explore more from our collection</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[62px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Men</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[14px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Men's Essential Tee - Black`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[246.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[246.25px]">
        <Paragraph1 />
        <Heading2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$32</p>
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container7 />
      <Paragraph2 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon1 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback4 />
      <Container8 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard />
        <ProductCard1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Men</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[14px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Men's Oversized Tee`}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[44px] relative shrink-0 w-[173.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[173.281px]">
        <Paragraph3 />
        <Heading4 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$38</p>
      </div>
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container9 />
      <Paragraph4 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon2 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button2 />
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback5 />
      <Container10 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard2 />
        <ProductCard3 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Men</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[14px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Men's Polo Shirt`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[145.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[145.922px]">
        <Paragraph5 />
        <Heading5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$45</p>
      </div>
    </div>
  );
}

function ProductCard4() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container11 />
      <Paragraph6 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon3 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button3 />
    </div>
  );
}

function ProductCard5() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback6 />
      <Container12 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard4 />
        <ProductCard5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[434px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[434px] pl-0 pr-[358px] py-0 relative w-full">
          <Card />
          <Card1 />
          <Card2 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[528px] items-start left-[64px] top-[905.34px] w-[1408px]" data-name="Container">
      <Container6 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[1481.34px] left-[11px] top-[69px] w-[1536px]" data-name="Container">
      <Container5 />
      <Container14 />
    </div>
  );
}

function ProductDetail() {
  return (
    <div className="h-[1550.34px] relative shrink-0 w-[1558px]" data-name="ProductDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1550.34px] relative w-[1558px]">
        <Container />
        <Container15 />
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
    <div className="absolute box-border content-stretch flex flex-col h-[1619.34px] items-start left-0 pb-0 pt-[69px] px-0 top-0 w-[1558px]" data-name="App">
      <ProductDetail />
      <Section />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[22px] left-0 top-[2px] w-[38.172px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[38.172px]">
        <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Men</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-[36px] w-[566.656px]" data-name="Heading 1">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Protocol Hoodie</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p27700500} fill="var(--fill-0, #0A0A0A)" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p1416a00} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[80px]">
        {[...Array(4).keys()].map((_, i) => (
          <Icon4 key={i} />
        ))}
        <Icon5 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[134.656px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[135px]">4.8 (127 reviews)</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-[76px] w-[566.656px]" data-name="Container">
      <Container16 />
      <Text />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[27.375px]" data-name="Heading 2">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 top-[-1px] tracking-[-0.48px] w-[28px]">$65</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-[39.38px] top-[2px] w-[253.453px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Free shipping on orders over $50</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[566.656px]" data-name="Container">
      <Heading6 />
      <Text1 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[72px] left-0 top-[160px] w-[566.656px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] top-[-1px] tracking-[-0.48px] w-[557px]">Premium heavyweight hoodie featuring the iconic NEAR Protocol logo. Made from 100% organic cotton for ultimate comfort and sustainability.</p>
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[256px] w-[566.656px]" data-name="Primitive.div" />;
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Size</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-0 px-[16px] py-[8px] top-0 w-[47.844px]" data-name="Button">
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.48px] whitespace-pre">XS</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[55.84px] px-[17px] py-[9px] top-0 w-[41.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">S</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[105.77px] px-[17px] py-[9px] top-0 w-[41.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">M</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[155.69px] px-[17px] py-[9px] top-0 w-[41.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">L</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[205.61px] px-[17px] py-[9px] top-0 w-[49.844px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">XL</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[263.45px] px-[17px] py-[9px] top-0 w-[57.766px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">XXL</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[72px] items-start left-0 top-[281px] w-[566.656px]" data-name="Container">
      <Label />
      <Container19 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[566.656px]" data-name="Label">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Quantity</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="opacity-50 relative shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[24.44px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[38px] items-center left-0 p-px rounded-[4px] top-[36px] w-[146px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Button10 />
      <Text2 />
      <Button11 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[74px] left-0 top-[377px] w-[566.656px]" data-name="Container">
      <Label1 />
      <Container21 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-0 px-[16px] py-[8px] top-[475px] w-[566.656px]" data-name="Button">
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.48px] whitespace-pre">Add to Cart - $65.00</p>
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[543px] w-[566.656px]" data-name="Primitive.div" />;
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Features</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[205.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">100% organic cotton fleece</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[198px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Heavyweight 350GSM fabric</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[190.094px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Screen-printed NEAR logo</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[245.531px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Kangaroo pocket with hidden zip</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[158.406px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Ribbed cuffs and hem</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[79.203px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Unisex fit</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text13 />
      <Text14 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[172px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[208px] items-start left-0 top-[568px] w-[566.656px]" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function ProductDetail1() {
  return (
    <div className="absolute h-[776px] left-[916.33px] top-[186px] w-[566.656px]" data-name="ProductDetail">
      <Badge />
      <Heading />
      <Container17 />
      <Container18 />
      <Paragraph7 />
      <PrimitiveDiv />
      <Container20 />
      <Container22 />
      <Button12 />
      <PrimitiveDiv1 />
      <Container23 />
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

function Icon8() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <NearLogo />
    </div>
  );
}

function NearLogo1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 top-[2px] w-[115px]" data-name="NearLogo">
      <Icon8 />
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Men</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[45.609px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Women</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Collections</p>
      </div>
    </div>
  );
}

function Button16() {
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
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Icon9() {
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

function Button17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Icon10() {
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
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_772)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pec8cb00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_772">
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
      <Icon11 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[1284px] top-0" data-name="Container">
      <Button17 />
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

function Search() {
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

function Container25() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <NearLogo1 />
      <Navigation />
      <Container24 />
      <Search />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[69px] items-start left-0 pb-px pt-[16px] px-[75px] top-0 w-[1558px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container25 />
    </div>
  );
}

export default function Product() {
  return (
    <div className="bg-white relative size-full" data-name="Product">
      <App />
      <ProductDetail1 />
      <Header />
    </div>
  );
}