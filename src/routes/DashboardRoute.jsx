import { Route, Routes } from "react-router-dom";
import { Billing, Dashboard, Profile, Rtl, SignIn, SignUp } from "../pages";
import Tables from "../pages/dashboard/Tables";
import NavBarItem from "../modules/NavBarItem";

const DashboardRoute = () => {
  return (
    <div className="bg-dashboard-cover flex">
      <NavBarItem/>
      <div className="w-[80%] min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/rtl" element={<Rtl/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRoute;
