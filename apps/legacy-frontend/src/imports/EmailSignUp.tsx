import svgPaths from "./svg-cijah2imul";

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
    <div className="absolute content-stretch flex flex-col items-start left-[256px] size-[64px] top-0" data-name="NearLogo">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-[88px] w-[576px]" data-name="Heading 1">
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[36px] left-[288.25px] text-[24px] text-center text-neutral-950 text-nowrap top-0 tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Create Your Account</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[136px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[288.33px] text-[#717182] text-[16px] text-center text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Sign up with email to start shopping</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <NearLogo1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Email Address</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">your@email.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">Password</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.48px] whitespace-pre">Create a strong password</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Red_Hat_Mono:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717182] text-[12px] tracking-[-0.48px]">Must be at least 8 characters</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
      <Paragraph1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#030213] h-[36px] opacity-50 relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[20px] left-[199.55px] text-[14px] text-nowrap text-white top-[8px] tracking-[-0.48px] whitespace-pre">Create Account</p>
    </div>
  );
}

function AccountCreation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[210px] items-start relative shrink-0 w-full" data-name="AccountCreation">
      <Container1 />
      <Container2 />
      <Button />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[20px] top-[27px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3b957700} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#717182] text-[16px] text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Your data is protected</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717182] text-[12px] text-nowrap tracking-[-0.48px] whitespace-pre">We use industry-standard encryption to keep your information secure.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[32px] top-[25px] w-[456.969px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function AccountCreation1() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="AccountCreation">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon1 />
      <Container3 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[574px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start pb-0 pt-[32px] px-[32px] relative w-[574px]">
        <AccountCreation />
        <AccountCreation1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[361px] items-start p-px relative shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <CardContent />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[182.172px]" data-name="Button">
      <p className="absolute font-['Red_Hat_Mono:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.48px] whitespace-pre">← Back to login options</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[29px] items-center left-[499px] top-[183.5px] w-[576px]">
      <Container />
      <Card />
      <Button1 />
    </div>
  );
}

export default function EmailSignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Email Sign Up">
      <Frame />
    </div>
  );
}