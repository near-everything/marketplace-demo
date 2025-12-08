import svgPaths from "./svg-22jgcotrqh";
import imgProfileImage from "figma:asset/dc84db6cd31fe6a5ea62826f9523624b13cf80f4.png";
import imgUnsplashFyl8SMc2J2Q from "figma:asset/37d74396bb7edd43800d4ede6718807191ef1b63.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center relative shrink-0 text-[#202124]" data-name="Heading">
      <p className="leading-[32px] relative shrink-0 text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose an Account
      </p>
      <p className="leading-[normal] relative shrink-0 text-[16px] text-center tracking-[0.0018px] w-[420px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        to continue to “NEAR Merch Store”
      </p>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name="Profile Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProfileImage} />
    </div>
  );
}

function User() {
  return (
    <div className="absolute bg-white left-0 overflow-clip rounded-[64px] size-[32px] top-0" data-name="_user">
      <ProfileImage />
      <div className="absolute bottom-[-49.7%] left-0 right-0 top-0" data-name="unsplash:Fyl8sMC2j2Q">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashFyl8SMc2J2Q} />
      </div>
    </div>
  );
}

function UserImage() {
  return (
    <div className="bg-white overflow-clip relative rounded-[96px] shrink-0 size-[32px]" data-name="User Image">
      <User />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start leading-[normal] relative shrink-0 text-[#3c4043] text-nowrap whitespace-pre" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ester Silva
      </p>
      <p className="font-['Roboto:Light',sans-serif] font-light relative shrink-0 text-[12px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ester@gmail.com
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Profile">
      <UserImage />
      <Details />
    </div>
  );
}

function UserAccount() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[12px] px-[40px] relative shrink-0" data-name="User Account">
      <Profile />
      <div className="h-0 relative shrink-0 w-[419px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 419 1">
            <line id="Line 2" stroke="var(--stroke-0, #DADCE0)" x2="419" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="account_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="account_circle">
          <mask height="24" id="mask0_27_2314" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_27_2314)">
            <path d={svgPaths.p3a7f8cc0} fill="var(--fill-0, #757575)" id="account_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3c4043] text-[14px] text-nowrap tracking-[0.028px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Use another account
      </p>
    </div>
  );
}

function Profile1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Profile">
      <AccountCircle />
      <Details1 />
    </div>
  );
}

function AnotherAccount() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[12px] px-[40px] relative shrink-0" data-name="Another Account">
      <Profile1 />
      <div className="h-0 relative shrink-0 w-[419px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 419 1">
            <line id="Line 2" stroke="var(--stroke-0, #DADCE0)" x2="419" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AccountsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Accounts Container">
      <UserAccount />
      <AnotherAccount />
    </div>
  );
}

function MainBody() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0" data-name="Main Body">
      <Heading />
      <AccountsContainer />
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow_drop_down">
          <mask height="16" id="mask0_27_2310" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, black)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_27_2310)">
            <g id="arrow_drop_down_2">
              <path d={svgPaths.p3f5b3680} fill="var(--fill-0, #202124)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Language() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0" data-name="Language">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[12px] text-nowrap tracking-[0.024px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        English
      </p>
      <ArrowDropDown />
    </div>
  );
}

function Help() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-end p-[4px] relative shrink-0" data-name="Help">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#80868b] text-[12px] text-nowrap tracking-[0.024px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Help
      </p>
    </div>
  );
}

function Privacy() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-end p-[4px] relative shrink-0" data-name="Privacy">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#80868b] text-[12px] text-nowrap tracking-[0.024px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Privacy
      </p>
    </div>
  );
}

function Terms() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-end p-[4px] relative shrink-0" data-name="Terms">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#80868b] text-[12px] text-nowrap tracking-[0.024px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terms
      </p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Links">
      <Help />
      <Privacy />
      <Terms />
    </div>
  );
}

function Footer() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-[32px] py-0 relative shrink-0 w-[484px]" data-name="Footer">
      <Language />
      <Links />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[112px] items-center left-0 pb-[48px] pt-[32px] px-0 top-[64px]" data-name="Body">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.22)] border-solid inset-[-1px] pointer-events-none" />
      <MainBody />
      <Footer />
    </div>
  );
}

function GoogleIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Google Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Google Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p751b200} fill="#4285F4" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e961f80} fill="#34A853" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p7010900} fill="#FBBC05" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3d5c1800} fill="var(--fill-0, #EA4335)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="App Header">
      <GoogleIcon />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3c4043] text-[18px] text-nowrap tracking-[0.002px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign in with Google
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start left-0 pl-[40px] pr-[32px] py-[16px] top-[-1px] w-[499px]" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.22)] border-solid inset-[-1px] pointer-events-none" />
      <AppHeader />
    </div>
  );
}

function ContinueWithGoogle() {
  return (
    <div className="absolute bg-white h-[539px] left-1/2 rounded-[8px] top-[214px] translate-x-[-50%] w-[499px]" data-name="Continue with Google">
      <div className="h-[539px] overflow-clip relative rounded-[inherit] w-[499px]">
        <Body />
        <Header />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

export default function GoogleSignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Google Sign up 1">
      <ContinueWithGoogle />
    </div>
  );
}