import { useNavigate } from "react-router-dom";
import {
  NotificationIcon,
  PeopleIcon,
  SearchIcon,
  SettingsIcon,
} from "../assets/icons";
import { useCookies } from "react-cookie";

const DashboardItem = ({ text, type, name, placeholder, item }) => {
  const navigate = useNavigate()
  const [, , removeCookies] = useCookies(["token"])

  const handleSignOut = () => {
    if(window.confirm("Are you sure Sign out")){
      removeCookies("token")
      navigate("/login", {replace: true})
    }
  }

  return (
    <div className="pt-[22px] px-[10px] flex justify-between items-center">
      <div>
        <p className="font-normal text-[12px] text-[#A0AFC0]">
          Pages{" "}
          <span className="text-[12px] font-normal text-[#FFFFFF]">
            / {text}
          </span>
        </p>
        <h3 className="text-[14px] font-normal text-[#FFFFFF] pt-1">{item}</h3>
      </div>
      <div className="flex items-center gap-[18px]">
        <div className="flex items-center gap-[5px] py-[9px] pl-[6px] rounded-[15px] bg-[#0F1535] text-[#A0AEC0]">
          <SearchIcon />
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className="outline-none"
          />
        </div>
        <div className="flex items-center gap-[18px]">
          <div className="text-[#718096] flex items-center gap-1">
            <PeopleIcon />
            <p onClick={handleSignOut} className="text-[12px] text-[#718096] cursor-pointer">Sign out</p>
          </div>
          <div className="flex items-center text-[#718096] gap-[15px]">
              <SettingsIcon />
            <NotificationIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
