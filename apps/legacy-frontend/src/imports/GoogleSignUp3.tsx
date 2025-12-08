import svgPaths from "./svg-g27u8cn2sb";
import imgProfileImage from "figma:asset/dc84db6cd31fe6a5ea62826f9523624b13cf80f4.png";
import imgUnsplashFyl8SMc2J2Q from "figma:asset/37d74396bb7edd43800d4ede6718807191ef1b63.png";

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
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5f6368] text-[14px] text-center text-nowrap tracking-[0.028px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        ester@near.foundation
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

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[8px] py-[8px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4285f4] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cancel
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#4285f4] h-[40px] overflow-clip relative rounded-[4px] shrink-0 w-[120px]" data-name="Button">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[12px] text-center text-nowrap text-white top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirm
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[266px] items-center relative shrink-0" data-name="Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[44px] items-center left-[32px] top-[100px]" data-name="Body">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#202124] text-[24px] text-center w-[384px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirm you want to sign in to NEAR Merch Store as Ester
      </p>
      <Profile />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#5f6368] text-[0px] text-[14px] tracking-[0.042px] w-[438px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>{`To create your account, Google will share your name, email address, and profile picture with “MyApp”. See “MyApp”’s `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium text-[#4285f4]" style={{ fontVariationSettings: "'wdth' 100" }}>
          privacy policy
        </span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>{` and `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium text-[#4285f4]" style={{ fontVariationSettings: "'wdth' 100" }}>
          terms of service.
        </span>
      </p>
      <Buttons />
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

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Header">
      <GoogleIcon />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3c4043] text-[16px] text-nowrap tracking-[0.0018px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign in with Google
      </p>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start left-0 px-[32px] py-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[500px]" data-name="Header Container">
      <Header />
    </div>
  );
}

function ContinueWithGoogle() {
  return (
    <div className="absolute bg-white h-[550px] left-[calc(50%+0.5px)] rounded-[16px] top-[214px] translate-x-[-50%] w-[500px]" data-name="Continue with Google">
      <div className="h-[550px] overflow-clip relative rounded-[inherit] w-[500px]">
        <Body />
        <HeaderContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

export default function GoogleSignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Google Sign up 3">
      <ContinueWithGoogle />
    </div>
  );
}