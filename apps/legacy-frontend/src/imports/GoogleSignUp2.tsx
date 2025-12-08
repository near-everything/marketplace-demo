import svgPaths from "./svg-d8qtmf4p9u";
import imgProfileImage from "figma:asset/dc84db6cd31fe6a5ea62826f9523624b13cf80f4.png";
import imgUnsplashFyl8SMc2J2Q from "figma:asset/37d74396bb7edd43800d4ede6718807191ef1b63.png";

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow_drop_down">
          <mask height="16" id="mask0_27_2322" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, black)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_27_2322)">
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
    <div className="absolute box-border content-stretch flex items-center justify-between left-[8px] px-[32px] py-0 top-[484px] w-[484px]" data-name="Footer">
      <Language />
      <Links />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#4285f4] h-[40px] left-[calc(50%+159px)] overflow-clip rounded-[4px] top-[calc(50%+93px)] translate-x-[-50%] translate-y-[-50%] w-[120px]" data-name="Button">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[12px] text-center text-nowrap text-white top-[calc(50%-7px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirm
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center left-[31px] pl-0 pr-[8px] py-[8px] top-[304px]" data-name="Button">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4285f4] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Forgot password?
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[56px] left-[31px] top-[234px] w-[438px]" data-name="Input">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 56">
        <g id="Input">
          <rect height="54.5" id="Input_2" rx="3.25" stroke="var(--stroke-0, #3367D6)" strokeWidth="1.5" width="436.5" x="0.75" y="0.75" />
          <line id="Line 3" stroke="var(--stroke-0, #4285F4)" strokeWidth="0.5" x1="16.25" x2="16.25" y1="16" y2="40" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] items-start left-[50px] p-[4px] top-[225px]" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3367d6] text-[10px] text-nowrap tracking-[0.02px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enter Password
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute contents left-[31px] top-[225px]" data-name="Input">
      <Input />
      <Label />
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

function Email() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Email">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5f6368] text-[14px] text-center text-nowrap tracking-[0.028px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        ester@near.foundation
      </p>
      <div className="h-[6.014px] relative shrink-0 w-[10.7px]" data-name="expand_more">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
          <path d={svgPaths.p26d3ee00} fill="var(--fill-0, #5F6368)" id="expand_more" />
        </svg>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute bg-white left-[calc(50%+0.5px)] rounded-[64px] top-[calc(50%-103px)] translate-x-[-50%] translate-y-[-50%]" data-name="Profile">
      <div className="box-border content-stretch flex items-center overflow-clip p-[4px] relative rounded-[inherit]">
        <UserImage />
        <Email />
      </div>
      <div aria-hidden="true" className="absolute border-[0.35px] border-[rgba(0,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function GoogleTypemark() {
  return (
    <div className="absolute h-[30px] left-[206px] top-[39px] w-[88px]" data-name="Google Typemark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 30">
        <g id="Google Typemark">
          <g id="Logo">
            <path d={svgPaths.p454af00} fill="#EA4335" />
            <path d={svgPaths.pd6a0e80} fill="#FBBC05" />
            <path d={svgPaths.p35e40d80} fill="var(--fill-0, #4285F4)" />
            <path d={svgPaths.p32f96840} fill="#34A853" />
            <path d={svgPaths.p32c56600} fill="#EA4335" />
            <path d={svgPaths.p54b6b80} fill="var(--fill-0, #4285F4)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContinueWithGoogle() {
  return (
    <div className="absolute bg-white h-[550px] left-[calc(50%+0.5px)] rounded-[8px] top-[214px] translate-x-[-50%] w-[500px]" data-name="Continue with Google">
      <div className="h-[550px] overflow-clip relative rounded-[inherit] w-[500px]">
        <Footer />
        <Button />
        <Button1 />
        <Input1 />
        <Profile />
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[32px] left-[250px] text-[#202124] text-[24px] text-center top-[100px] translate-x-[-50%] w-[384px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hi Ester
        </p>
        <GoogleTypemark />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function GoogleSignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Google Sign up 2">
      <ContinueWithGoogle />
    </div>
  );
}