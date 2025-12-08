import svgPaths from "./svg-ail0seg6px";
import imgImageWithFallback from "figma:asset/4fa8b39e9c2ac96748ac43f791167a77131c590e.png";
import imgImageWithFallback1 from "figma:asset/22e8cdddd9ab3900abde04f193e6b75a535503ff.png";
import imgImageWithFallback2 from "figma:asset/f088d7ec9f16661bc461a762417ac9e90242645d.png";
import imgImageWithFallback3 from "figma:asset/432e520b35ca5db7bb27272f597e5876cda9dd9a.png";
import imgImageWithFallback4 from "figma:asset/4bccc138d7d406e34e8558c132be301bebc7f3d7.png";
import imgImageWithFallback5 from "figma:asset/46ea705ffd78f4019918bb2fd2b66e6caa50008e.png";
import imgImageWithFallback6 from "figma:asset/91bb79150f84dc69e298818199169189c32fd5d7.png";
import imgImageWithFallback7 from "figma:asset/c90671806a221dfe4f2cfa2c496b9afe21957596.png";
import imgImageWithFallback8 from "figma:asset/60aeb6e8fae869d59657e4792208dcffbd4ed8de.png";
import imgImageWithFallback9 from "figma:asset/eb34852b4e297ee7b9fefd08cceddc7281c77866.png";
import imgImageWithFallback10 from "figma:asset/049a6e5cda93fc93492b0452f06f9ce2d1c062e4.png";
import imgImageWithFallback11 from "figma:asset/bfb0a76ed33c7802b805fae5c2717c5f337ffb87.png";
import imgImageWithFallback12 from "figma:asset/9b9e29faabe6d02fbddb40d7181f00f5169c1042.png";
import imgImageWithFallback13 from "figma:asset/024d1179f5b1864e85e8d66a4862ca6b0409319c.png";
import imgImageWithFallback14 from "figma:asset/d3e8201b26e4bdb300ee825201cf21d582bfda16.png";
import imgImageWithFallback15 from "figma:asset/f09776468c431cd80517f08553b3afb7b61d6f44.png";
import imgImageWithFallback16 from "figma:asset/24f726cdcbea5949b9b6f1df05e29d7f53d7b8bc.png";
import imgImageWithFallback17 from "figma:asset/3468de44fa3a04d3198a56a23dfc70c4d84eb9c8.png";

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[384.27px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">All Products</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[28px] left-[384.3px] text-[#717182] text-[18px] text-center top-0 tracking-[-0.48px] translate-x-[-50%] w-[723px]">Browse our complete collection of premium NEAR Protocol merchandise.18 products available.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[302px] items-start left-0 pb-px pt-[96px] px-[395px] top-[-5px] w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container />
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

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Protocol Hoodie</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[44px] relative shrink-0 w-[182.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[182.406px]">
        <Paragraph1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$65</p>
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon() {
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

function Button() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button />
    </div>
  );
}

function Icon1() {
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

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback />
      <Container3 />
      <Button1 />
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
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Women</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Classic NEAR Tee</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[145.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[145.922px]">
        <Paragraph3 />
        <Heading3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$35</p>
      </div>
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container4 />
      <Paragraph4 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
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

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button2 />
    </div>
  );
}

function Icon3() {
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

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback1 />
      <Container5 />
      <Button3 />
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
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Accessories</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Snapback Cap</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[44px] relative shrink-0 w-[155.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[155.047px]">
        <Paragraph5 />
        <Heading4 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$28</p>
      </div>
    </div>
  );
}

function ProductCard4() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container6 />
      <Paragraph6 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Icon4() {
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

function Button4() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon4 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button4 />
    </div>
  );
}

function Icon5() {
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

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function ProductCard5() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback2 />
      <Container7 />
      <Button5 />
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

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Accessories</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Protocol Tote Bag</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[44px] relative shrink-0 w-[155.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[155.047px]">
        <Paragraph7 />
        <Heading5 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$22</p>
      </div>
    </div>
  );
}

function ProductCard6() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container8 />
      <Paragraph8 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Icon6() {
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

function Button6() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon6 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button6 />
    </div>
  );
}

function Icon7() {
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

function Button7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon7 />
    </div>
  );
}

function ProductCard7() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback3 />
      <Container9 />
      <Button7 />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard6 />
        <ProductCard7 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Accessories</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Coffee Mug</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[44px] relative shrink-0 w-[136.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[136.813px]">
        <Paragraph9 />
        <Heading6 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$18</p>
      </div>
    </div>
  );
}

function ProductCard8() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container10 />
      <Paragraph10 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Icon8() {
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

function Button8() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon8 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button8 />
    </div>
  );
}

function Icon9() {
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

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function ProductCard9() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback4 />
      <Container11 />
      <Button9 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard8 />
        <ProductCard9 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Exclusives</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Sticker Pack</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[44px] relative shrink-0 w-[109.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[109.453px]">
        <Paragraph11 />
        <Heading7 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$12</p>
      </div>
    </div>
  );
}

function ProductCard10() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container12 />
      <Paragraph12 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Icon10() {
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

function Button10() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon10 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button10 />
    </div>
  );
}

function Icon11() {
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

function Button11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function ProductCard11() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback5 />
      <Container13 />
      <Button11 />
    </div>
  );
}

function CardContent5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard10 />
        <ProductCard11 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="[grid-area:2_/_2] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Men</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Men's Essential Tee - Black`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[44px] relative shrink-0 w-[246.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[246.25px]">
        <Paragraph13 />
        <Heading8 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$32</p>
      </div>
    </div>
  );
}

function ProductCard12() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container14 />
      <Paragraph14 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Icon12() {
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

function Button12() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon12 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button12 />
    </div>
  );
}

function Icon13() {
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

function Button13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function ProductCard13() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback6 />
      <Container15 />
      <Button13 />
    </div>
  );
}

function CardContent6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard12 />
        <ProductCard13 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="[grid-area:2_/_3] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Men</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Men's Oversized Tee`}</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[44px] relative shrink-0 w-[173.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[173.281px]">
        <Paragraph15 />
        <Heading9 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$38</p>
      </div>
    </div>
  );
}

function ProductCard14() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container16 />
      <Paragraph16 />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function Icon14() {
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

function Button14() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon14 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button14 />
    </div>
  );
}

function Icon15() {
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

function Button15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function ProductCard15() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback7 />
      <Container17 />
      <Button15 />
    </div>
  );
}

function CardContent7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard14 />
        <ProductCard15 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="[grid-area:2_/_4] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Men</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Men's Polo Shirt`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[44px] relative shrink-0 w-[145.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[145.922px]">
        <Paragraph17 />
        <Heading10 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$45</p>
      </div>
    </div>
  );
}

function ProductCard16() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container18 />
      <Paragraph18 />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
    </div>
  );
}

function Icon16() {
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

function Button16() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon16 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button16 />
    </div>
  );
}

function Icon17() {
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

function Button17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function ProductCard17() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback8 />
      <Container19 />
      <Button17 />
    </div>
  );
}

function CardContent8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard16 />
        <ProductCard17 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="[grid-area:3_/_1] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Women</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Women's Fitted Tee`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[44px] relative shrink-0 w-[164.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[164.172px]">
        <Paragraph19 />
        <Heading11 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$32</p>
      </div>
    </div>
  );
}

function ProductCard18() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container20 />
      <Paragraph20 />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback9} />
    </div>
  );
}

function Icon18() {
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

function Button18() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon18 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button18 />
    </div>
  );
}

function Icon19() {
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

function Button19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function ProductCard19() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback9 />
      <Container21 />
      <Button19 />
    </div>
  );
}

function CardContent9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard18 />
        <ProductCard19 />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="[grid-area:3_/_2] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Women</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Women's Crop Top`}</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[44px] relative shrink-0 w-[145.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[145.922px]">
        <Paragraph21 />
        <Heading12 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$30</p>
      </div>
    </div>
  );
}

function ProductCard20() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container22 />
      <Paragraph22 />
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback10} />
    </div>
  );
}

function Icon20() {
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

function Button20() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon20 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button20 />
    </div>
  );
}

function Icon21() {
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

function Button21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon21 />
    </div>
  );
}

function ProductCard21() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback10 />
      <Container23 />
      <Button21 />
    </div>
  );
}

function CardContent10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard20 />
        <ProductCard21 />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="[grid-area:3_/_3] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Women</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Women's Hoodie`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[44px] relative shrink-0 w-[127.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[127.688px]">
        <Paragraph23 />
        <Heading13 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$58</p>
      </div>
    </div>
  );
}

function ProductCard22() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container24 />
      <Paragraph24 />
    </div>
  );
}

function ImageWithFallback11() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback11} />
    </div>
  );
}

function Icon22() {
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

function Button22() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon22 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button22 />
    </div>
  );
}

function Icon23() {
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

function Button23() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon23 />
    </div>
  );
}

function ProductCard23() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback11 />
      <Container25 />
      <Button23 />
    </div>
  );
}

function CardContent11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard22 />
        <ProductCard23 />
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="[grid-area:3_/_4] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Exclusives</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Limited Edition Black Tee</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[44px] relative shrink-0 w-[228px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[228px]">
        <Paragraph25 />
        <Heading14 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$48</p>
      </div>
    </div>
  );
}

function ProductCard24() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container26 />
      <Paragraph26 />
    </div>
  );
}

function ImageWithFallback12() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback12} />
    </div>
  );
}

function Icon24() {
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

function Button24() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon24 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button24 />
    </div>
  );
}

function Icon25() {
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

function Button25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon25 />
    </div>
  );
}

function ProductCard25() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback12 />
      <Container27 />
      <Button25 />
    </div>
  );
}

function CardContent12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard24 />
        <ProductCard25 />
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="[grid-area:4_/_1] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Exclusives</p>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Founder's Edition Tee`}</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[44px] relative shrink-0 w-[191.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[191.531px]">
        <Paragraph27 />
        <Heading15 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$52</p>
      </div>
    </div>
  );
}

function ProductCard26() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container28 />
      <Paragraph28 />
    </div>
  );
}

function ImageWithFallback13() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback13} />
    </div>
  );
}

function Icon26() {
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

function Button26() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon26 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button26 />
    </div>
  );
}

function Icon27() {
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

function Button27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon27 />
    </div>
  );
}

function ProductCard27() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback13 />
      <Container29 />
      <Button27 />
    </div>
  );
}

function CardContent13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard26 />
        <ProductCard27 />
      </div>
    </div>
  );
}

function Card13() {
  return (
    <div className="[grid-area:4_/_2] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Accessories</p>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Beanie</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[44px] relative shrink-0 w-[100.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[100.328px]">
        <Paragraph29 />
        <Heading16 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$24</p>
      </div>
    </div>
  );
}

function ProductCard28() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container30 />
      <Paragraph30 />
    </div>
  );
}

function ImageWithFallback14() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback14} />
    </div>
  );
}

function Icon28() {
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

function Button28() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon28 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button28 />
    </div>
  );
}

function Icon29() {
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

function Button29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon29 />
    </div>
  );
}

function ProductCard29() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback14 />
      <Container31 />
      <Button29 />
    </div>
  );
}

function CardContent14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard28 />
        <ProductCard29 />
      </div>
    </div>
  );
}

function Card14() {
  return (
    <div className="[grid-area:4_/_3] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Accessories</p>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Premium Socks (3-Pack)</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[44px] relative shrink-0 w-[200.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[200.641px]">
        <Paragraph31 />
        <Heading17 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$28</p>
      </div>
    </div>
  );
}

function ProductCard30() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container32 />
      <Paragraph32 />
    </div>
  );
}

function ImageWithFallback15() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback15} />
    </div>
  );
}

function Icon30() {
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

function Button30() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon30 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button30 />
    </div>
  );
}

function Icon31() {
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

function Button31() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon31 />
    </div>
  );
}

function ProductCard31() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback15 />
      <Container33 />
      <Button31 />
    </div>
  );
}

function CardContent15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard30 />
        <ProductCard31 />
      </div>
    </div>
  );
}

function Card15() {
  return (
    <div className="[grid-area:4_/_4] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Accessories</p>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Backpack</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[44px] relative shrink-0 w-[118.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[118.563px]">
        <Paragraph33 />
        <Heading18 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$75</p>
      </div>
    </div>
  );
}

function ProductCard32() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container34 />
      <Paragraph34 />
    </div>
  );
}

function ImageWithFallback16() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback16} />
    </div>
  );
}

function Icon32() {
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

function Button32() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon32 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button32 />
    </div>
  );
}

function Icon33() {
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

function Button33() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon33 />
    </div>
  );
}

function ProductCard33() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback16 />
      <Container35 />
      <Button33 />
    </div>
  );
}

function CardContent16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard32 />
        <ProductCard33 />
      </div>
    </div>
  );
}

function Card16() {
  return (
    <div className="[grid-area:5_/_1] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[0.6px] uppercase">Accessories</p>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Water Bottle</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[44px] relative shrink-0 w-[155.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[155.047px]">
        <Paragraph35 />
        <Heading19 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[16px] text-neutral-950 text-right top-[-1px] tracking-[-0.48px] translate-x-[-100%] w-[28px]">$26</p>
      </div>
    </div>
  );
}

function ProductCard34() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[16px] top-[348px] w-[300px]" data-name="ProductCard">
      <Container36 />
      <Paragraph36 />
    </div>
  );
}

function ImageWithFallback17() {
  return (
    <div className="absolute left-0 size-[332px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback17} />
    </div>
  );
}

function Icon34() {
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

function Button34() {
  return (
    <div className="bg-neutral-950 h-[36px] relative shrink-0 w-[127.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[127.281px]">
        <Icon34 />
        <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[44px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">QUICK ADD</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute box-border content-stretch flex items-end justify-center left-0 opacity-0 pb-[24px] pt-0 px-0 size-[332px] top-0" data-name="Container">
      <Button34 />
    </div>
  );
}

function Icon35() {
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

function Button35() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[288px] size-[36px] top-[8px]" data-name="Button">
      <Icon35 />
    </div>
  );
}

function ProductCard35() {
  return (
    <div className="absolute bg-[#ececf0] left-0 overflow-clip size-[332px] top-0" data-name="ProductCard">
      <ImageWithFallback17 />
      <Container37 />
      <Button35 />
    </div>
  );
}

function CardContent17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[332px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[332px]">
        <ProductCard34 />
        <ProductCard35 />
      </div>
    </div>
  );
}

function Card17() {
  return (
    <div className="[grid-area:5_/_2] bg-white relative shrink-0" data-name="Card">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(5,_minmax(0px,_1fr))] h-[2266px] left-[75px] top-[430px] w-[1408px]" data-name="Section">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
      <Card12 />
      <Card13 />
      <Card14 />
      <Card15 />
      <Card16 />
      <Card17 />
    </div>
  );
}

function AllProducts() {
  return (
    <div className="h-[2760px] relative shrink-0 w-[1558px]" data-name="AllProducts">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[2760px] relative w-[1558px]">
        <Container1 />
        <Section />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">NEAR Protocol</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] top-0 tracking-[-0.48px] w-[262px]">Building the future of blockchain technology, one block at a time.</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Paragraph37 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Shop</p>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[95.047px]" data-name="Button">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">All Products</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button36 />
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[87.125px]" data-name="Button">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Collections</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button37 />
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

function Container39() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading20 />
      <List />
    </div>
  );
}

function Heading21() {
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

function Container40() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading21 />
      <List1 />
    </div>
  );
}

function Heading22() {
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

function Container41() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading22 />
      <List2 />
    </div>
  );
}

function Container42() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[116px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-[704.17px] text-[#717182] text-[14px] text-center text-nowrap top-0 tracking-[-0.48px] translate-x-[-50%] whitespace-pre">© 2025 NEAR Protocol. All rights reserved.</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Paragraph38 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[265px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[265px] items-start pb-0 pt-[32px] px-[64px] relative w-full">
          <Container42 />
          <Container43 />
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
        <Container44 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-0 relative shrink-0 w-[1558px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[1558px]" />
    </div>
  );
}

function App() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[3099px] items-start left-0 pb-0 pt-[73px] px-0 top-0 w-[1558px]" data-name="App">
      <AllProducts />
      <Footer />
      <Section1 />
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute bg-[#030213] box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-0 px-[12px] py-0 top-0 w-[47.766px]" data-name="Button">
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.48px] whitespace-pre">All</p>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[55.77px] px-[13px] py-px top-0 w-[49.766px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Men</p>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[113.53px] px-[13px] py-px top-0 w-[65.609px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Women</p>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[187.14px] px-[13px] py-px top-0 w-[105.203px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Exclusives</p>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[300.34px] px-[13px] py-px top-0 w-[113.125px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Accessories</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[32px] relative shrink-0 w-[413.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[413.469px]">
        <Button38 />
        <Button39 />
        <Button40 />
        <Button41 />
        <Button42 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[63.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Sort by:</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.375px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[63.375px]">
        <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Featured</p>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <PrimitiveSpan />
          <Icon36 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[36px] relative shrink-0 w-[255.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[255.375px]">
        <Text />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function AllProducts1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[69px] items-start left-0 pb-px pt-[16px] px-[75px] top-[370px] w-[1558px]" data-name="AllProducts">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container47 />
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

function Icon37() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <NearLogo />
    </div>
  );
}

function NearLogo1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-0 top-[2px] w-[115px]" data-name="NearLogo">
      <Icon37 />
    </div>
  );
}

function Button43() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.375px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Men</p>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[45.609px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Women</p>
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Collections</p>
      </div>
    </div>
  );
}

function Button46() {
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
      <Button43 />
      <Button44 />
      <Button45 />
      <Button46 />
    </div>
  );
}

function Icon38() {
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

function Button47() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Button">
      <Icon38 />
    </div>
  );
}

function Icon39() {
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
      <Icon39 />
    </div>
  );
}

function Icon40() {
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
      <Icon40 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[1284px] top-0" data-name="Container">
      <Button47 />
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
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)]" />
      <div className="absolute bg-[#f3f3f5] inset-0" data-name="Searchfield">
        <div aria-hidden="true" className="absolute border border-[#717182] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute flex flex-col font-['Red_Hat_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-[31px] text-[#717182] text-[14px] text-nowrap top-[20px] tracking-[-0.48px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">Search products...</p>
      </div>
      <IconSearch />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[30px] top-[10px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[20px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <NearLogo1 />
      <Navigation />
      <Container48 />
      <Search />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[69px] items-start left-0 pb-px pl-0 pr-[75px] pt-[16px] top-0 w-[1558px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container49 />
    </div>
  );
}

export default function SearchAllItems() {
  return (
    <div className="bg-white relative size-full" data-name="Search / All Items">
      <App />
      <AllProducts1 />
      <Header />
    </div>
  );
}