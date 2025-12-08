import svgPaths from "./svg-zpegt27xe4";

function Group() {
  return (
    <div className="absolute contents inset-[42.42%_6.52%_42.42%_34.24%]" data-name="Group">
      <div className="absolute inset-[42.48%_51.94%_42.77%_34.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
          <path d={svgPaths.p837c240} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.42%_35.09%_42.42%_50.16%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p2e864840} fill="var(--fill-0, black)" id="Vector_2" />
        </svg>
      </div>
      <div className="absolute inset-[42.42%_19.61%_42.51%_66.75%]" data-name="Vector_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
          <path d={svgPaths.p29435080} fill="var(--fill-0, black)" id="Vector_3" />
        </svg>
      </div>
      <div className="absolute inset-[42.77%_6.52%_42.77%_82.76%]" data-name="Vector_4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
          <path d={svgPaths.p28b52fb0} fill="var(--fill-0, black)" id="Vector_4" />
        </svg>
      </div>
    </div>
  );
}

function NearLogo() {
  return (
    <div className="absolute contents inset-[39.5%_6.52%]" data-name="NEAR Logo">
      <Group />
      <div className="absolute inset-[39.5%_72.28%_39.5%_6.52%]" data-name="Vector_5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p2b19ba80} fill="var(--fill-0, black)" id="Vector_5" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <NearLogo />
    </div>
  );
}

function NearLogo1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[304px] size-[64px] top-0" data-name="NearLogo">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-[88px] w-[672px]" data-name="Heading 1">
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[36px] left-[336.23px] text-[24px] text-center text-neutral-950 text-nowrap top-0 tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Welcome to the NEAR Merch Store!</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[136px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[336.19px] text-[#717182] text-[16px] text-center text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Create your account</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[160px] left-[443px] top-[16px] w-[672px]" data-name="Container">
      <NearLogo1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1e7b7a00} fill="var(--fill-0, black)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#00ec97] relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Container1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Sign up with NEAR</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center justify-center left-[22px] top-[22px] w-[562px]" data-name="Container">
      <Container2 />
      <Text />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[68px] relative rounded-[4px] shrink-0 w-[606px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container3 />
    </div>
  );
}

function AccountCreation() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="AccountCreation">
      <Button />
    </div>
  );
}

function AccountCreation1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[166.328px]" data-name="AccountCreation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[166.328px]">
        <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Why connect a wallet?</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute box-border content-stretch flex h-[44px] items-center justify-between left-0 px-[12px] py-0 rounded-[4px] top-0 w-[606px]" data-name="SlotClone">
      <AccountCreation1 />
      <Icon2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[582px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] top-[-1px] tracking-[-0.48px] w-[520px]">Connecting your NEAR wallet provides the fastest and most secure way to shop:</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#00ec97] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[451.453px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">No need to remember passwords - your wallet is your login</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#00ec97] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[388.094px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Pay directly with crypto for instant transactions</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#00ec97] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[372.25px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Access exclusive NFT drops and limited editions</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[7.922px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#00ec97] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">•</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-[15.92px] top-0 w-[364.328px]" data-name="Text">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Your data stays private and under your control</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text7 />
      <Text8 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[120px] items-start left-[16px] top-[60px] w-[566px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function AccountCreation2() {
  return (
    <div className="absolute h-[180px] left-[12px] top-[56px] w-[582px]" data-name="AccountCreation">
      <Paragraph1 />
      <List />
    </div>
  );
}

function ExpandMenu() {
  return (
    <div className="h-[236px] relative shrink-0 w-full" data-name="Expand Menu">
      <SlotClone />
      <AccountCreation2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-[670px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[32px] relative w-[670px]">
        <AccountCreation />
        <ExpandMenu />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start p-px relative shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <CardContent />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[198px] top-px w-[55.453px]" data-name="Text">
      <p className="[text-underline-position:from-font] decoration-solid font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] underline whitespace-pre">Sign in</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[253.453px]" data-name="Button">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">Already have an account?</p>
      <Text9 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] text-center tracking-[-0.48px]">🔒 Your information is secure and encrypted. We never share your data.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#ececf0] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[672px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[23px] items-center relative w-[672px]">
        <Card />
        <Button1 />
        <Container4 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[672px]" data-name="Card">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-center left-[443px] top-[208px] w-[672px]">
      <Card1 />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="Login">
      <Container />
      <Frame1 />
    </div>
  );
}