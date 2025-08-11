import { BillingIcon, DashboardIcon, ProfileIcon, RtlIcon, SignInIcon, SignUpIcon, TablesIcon, } from "../assets/icons";
import { DashbordImg } from "../assets/images";
import { Heading, Text } from "../components";
import { NavLink } from "react-router-dom";

const NavBarItem = () => {
  return (
    <div className="p-[10px] w-[20%] min-h-screen ">
      <div className="dashboard-bg rounded-[20px] p-[36px] mx-auto">
        <Heading classlist={"!text-center"} tag={"h3"}>VISION UI FREE</Heading>
        <p className="border-b-[2px] mt-[31px] border-white"></p>
        <div className="pt-[22px] space-y-[12px]">
            <NavLink to={"/"} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[20px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    <DashboardIcon/>
                </div>
                <Text>Dashboard</Text>
            </NavLink>
             <NavLink to={"/tables"} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[20px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    <TablesIcon/>
                </div>
                <Text>Tables</Text>
            </NavLink>
            <NavLink to={"/billing"} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[20px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    <BillingIcon/>
                </div>
                <Text>Billing</Text>
            </NavLink>
            <NavLink to={"/rtl"} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[20px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    <RtlIcon/>
                </div>
                <Text>Rtl</Text>
            </NavLink>
            <NavLink to={"/profile"} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[20px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    <ProfileIcon/>
                </div>
                <Text>Profile</Text>
            </NavLink>
            <NavLink to={"/signin"} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[20px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    <SignInIcon/>
                </div>
                <Text>Sign in</Text>
            </NavLink>
            <NavLink to={"/signup"} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[20px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    <SignUpIcon/>
                </div>
                <Text>Sign up</Text>
            </NavLink>
        </div>
        <div className="pt-[418px]">
            <img src={DashbordImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBarItem;
