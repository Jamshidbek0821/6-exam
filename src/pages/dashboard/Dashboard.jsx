import { ClientsIcon, MoneyIcon, SalesIcon, UsersIcon } from "../../assets/icons";
import DashboardItem from "../../components/DashboardItem";
import {ContentImg1, ContentImg2, ContentImg3, ContentImg4, ContentImg5, ContentImg6, ContentImg7} from "../../assets/images"

const Dashboard = () => {
  return (
    <div className="containers">
      <DashboardItem
        type={"text"}
        name={"search-input"}
        placeholder={"Type here..."}
        text={"Dashboard"}
        item={"Dashboard"}
      />
      <div className="flex justify-between pt-[28px] w-[100%]" >
        <div className="flex items-center w-[23%] justify-between p-[15px] content-bg rounded-[20px]" >
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">Today’s Money</p>
            <p className="text-[#FFFFFF] text-[18px] font-bold">
              $53,000 <span className="text-[#01B574] text-[14px] font-bold">+55%</span>
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center rounded-[12px] items-center bg-[#0075FF]">
            <MoneyIcon />
          </div>
        </div>

        <div className="flex items-center w-[23%] justify-between p-[15px] content-bg rounded-[20px]" >
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">Today’s Users</p>
            <p className="text-[#FFFFFF] text-[18px] font-bold">
             2,300 <span className="text-[#01B574] text-[14px] font-bold">+5%</span>
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center rounded-[12px] items-center bg-[#0075FF]">
            <UsersIcon />
          </div>
        </div>

        <div className="flex items-center w-[23%] justify-between p-[15px] content-bg rounded-[20px]" >
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">New Clients</p>
            <p className="text-[#FFFFFF] text-[18px] font-bold">
              +3,052 <span className="text-[#E31A1A] text-[14px] font-bold">-14%</span>
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center rounded-[12px] items-center bg-[#0075FF]">
            <ClientsIcon />
          </div>
        </div>

        <div className="flex items-center w-[23%] justify-between p-[15px] content-bg rounded-[20px]" >
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">Total Sales</p>
            <p className="text-[#FFFFFF] text-[18px] font-bold">
              $173,000 <span className="text-[#01B574] text-[14px] font-bold">+8%</span>
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center rounded-[12px] items-center bg-[#0075FF]">
            <SalesIcon />
          </div>
        </div>
        
      </div>
      <div className="flex pt-[23px] gap-[18px]">
        <img src={ContentImg1} alt="Content img" width={460}/>
        <img src={ContentImg2} alt="Content img" width={300}/>
        <img src={ContentImg3} alt="Content img" width={400}/>
      </div>
      <div className="flex gap-[24px] pt-[23px]">
        <img src={ContentImg4} alt="Content img" width={700}/>
        <img src={ContentImg5} alt="Content img" width={475}/>
      </div>
      <div className="flex gap-[24px] pt-[24px]">
        <img className="h-[350px]" src={ContentImg7} alt="Content img" width={800}/>
        <img className="h-[350px]" src={ContentImg6} alt="Content img" width={378}/>
      </div>
      <div className="flex justify-between pt-[20px] pb-[30px]"> 
        <p className="text-[#FFFFFF] text-[14px]">@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</p>
        <ul className="flex gap-[46px] pr-[10px]">
          <li className="text-[#FFFFFF] text-[14px]">Marketplace</li>
          <li className="text-[#FFFFFF] text-[14px]">Blog</li>
          <li className="text-[#FFFFFF] text-[14px]">License</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
