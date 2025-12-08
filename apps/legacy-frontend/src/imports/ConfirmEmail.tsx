import svgPaths from "./svg-0lk7sn5rz5";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pd243c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3cc2c7f0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#00ec97] content-stretch flex items-center justify-center left-[256px] rounded-[3.35544e+07px] size-[64px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-[88px] w-[576px]" data-name="Heading 1">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[288.53px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Check Your Email</p>
    </div>
  );
}

function Text() {
  return <div className="absolute h-[21px] left-[429.36px] top-px w-[27.375px]" data-name="Text" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[124px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[24px] left-[274.27px] text-[#717182] text-[16px] text-center text-nowrap top-[-1px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">
        <span>{`We've sent a confirmation link to `}</span>
        <span className="font-['Red_Hat_Mono:SemiBold',sans-serif] font-semibold">your@email.com</span>
      </p>
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[148px] left-[498.5px] top-[232.5px] w-[576px]" data-name="Container">
      <Container />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-[255.05px] text-[#717182] text-[14px] text-center top-0 tracking-[-0.48px] translate-x-[-50%] w-[507px]">Click the link in your email to verify your account and complete the signup process.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-[150.11px] top-[20px] w-[209.766px]" data-name="Button">
      <p className="[text-underline-position:from-font] absolute decoration-solid font-['Red_Hat_Mono:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.48px] underline whitespace-pre">resend the confirmation</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Red_Hat_Mono:Regular',sans-serif] font-normal leading-[20px] left-[255.53px] text-[#717182] text-[14px] text-center text-nowrap top-0 tracking-[-0.48px] translate-x-[-50%] whitespace-pre">{`Didn't receive the email? Check your spam folder or`}</p>
      <Button />
    </div>
  );
}

function AccountCreation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[100px] items-start relative shrink-0 w-full" data-name="AccountCreation">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-[574px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-[574px]">
        <AccountCreation />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[498.5px] p-px top-[412.5px] w-[576px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <CardContent />
    </div>
  );
}

export default function ConfirmEmail() {
  return (
    <div className="bg-white relative size-full" data-name="Confirm Email">
      <Container1 />
      <Card />
    </div>
  );
}