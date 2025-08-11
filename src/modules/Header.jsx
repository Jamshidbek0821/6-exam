import { HeaderIcon1, HeaderIcon2, HeaderIcon3, HeaderIcon4 } from "../assets/icons";
import { Text } from "../components";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-[10px] z-50 w-[987px] border-[1px] border-[#A0AEC0] header-bg mx-auto p-[20px] rounded-[20px] flex items-center justify-between">
      <h2 className="text-[#FFFFFF]">VISION UI FREE</h2>
      <div className="flex gap-[30px]">
        <div className="flex items-center gap-1">
          <HeaderIcon1 />
          <Text>Dashboard</Text>
        </div>
        <div className="flex items-center gap-1">
        <HeaderIcon2/>
        <Text>PROFILE</Text>
      </div>
      <div className="flex items-center gap-1">
        <HeaderIcon3/>
        <Text>SIGN UP</Text>
      </div>
      <div className="flex items-center gap-1">
        <HeaderIcon4/>
        <Text>SIGN IN</Text>
      </div>
      </div>
      <button className="bg-[#0075FF] rounded-[12px] text-white px-[30px] py-[10px] hover:opacity-[70%]">Free Download</button>
    </div>
  );
};

export default Header;
