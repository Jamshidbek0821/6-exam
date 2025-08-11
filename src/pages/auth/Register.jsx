import { useNavigate } from "react-router-dom"
import { Heading, Text, Button } from "../../components"
import Input from "./Input"
import { useContext } from "react";
import { Context } from "../../context/GlobalContext";
import Remember from "../../components/Remember";
import { Apple, Facebook, Google } from "../../assets/icons";



const Register = () => {
  const navigate = useNavigate()
  const {setRegisterData} = useContext(Context)

  function handleRegisterSubmit(e){
    e.preventDefault()
    const data = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    setRegisterData(data)
    navigate("/login")
  }
  return (
    <div className="flex">
      <div className="w-[50%] register-bg text-center min-h-screen flex flex-col justify-center">
        <Text classlist={`!text-[20px] !mb-[16px]`}>INSPIRED BY THE FUTURE:</Text>
        <Heading tag={`h1`}>THE VISION UI DASHBOARD</Heading>
      </div>
      <div className=" w-[50%] login-form-bg min-h-screen">
        <div className="w-[452px] pl-[56px]">
          <div className="w-[333px] text-center mx-auto pt-[110px] pb-[20px]">
            <Heading classlist={"!mb-[7px]"} tag={"h2"}>Welcome!</Heading>
            <Text classlist={"!text-center !w-[333px] mx-auto"}>
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </div>
          <div className="w-[452px] py-[10px] border-[2px] border-[#656B8C] rounded-[30px] mx-auto">
            <div className="w-[255px] mx-auto flex flex-col justify-center  items-center gap-[15px]">
              <Text classlist={"!text-[18px] !pt-[8px] !font-bold !text-white"}>
                Register with
              </Text>
              <div className="flex items-center gap-[15px]">
                <div className="p-[10px] backdrop-blur-[42px] border-[2px] border-[#656B8C] rounded-[10px]">
                  <Facebook/>
                </div>
                <div className="p-[10px] backdrop-blur-[42px] border-[2px] border-[#656B8C] rounded-[10px]">
                  <Apple/>
                </div>
                <div className="p-[10px] backdrop-blur-[42px] border-[2px] border-[#656B8C] rounded-[10px]"> 
                   <Google/>
                </div>
                </div>
            </div>
            <form onSubmit={handleRegisterSubmit}
              autoComplete="off"
              className="mt-[10px] ml-[48px] ">
              <label className="!w-[350px] block ">
                <Text classlist={"!mb-[4px] !pl-[4.5]"}>Name</Text>
                <Input type={`text`} name={"fullname"} placeholder={"Your full name"} />
              </label>
              <label className="mt-[14px] block w-[350px]">
                <Text classlist={"!mb-[4px] !pl-[4.5]"}>Email</Text>
                <Input type={`email`} name={"email"} placeholder={"Your email address"} />
              </label>
              <label className="mt-[14px] block w-[350px]">
                <Text classlist={"!mb-[4px] !pl-[4.5]"}>Password</Text>
                <Input type={`password`} name={"password"} placeholder={"Your password"} />
              </label>
              <div className="flex items-center gap-[10px] pt-3 cursor-pointer">
                <Remember/>
                <Text>Remember me </Text>
              </div>
              <Button classlist={"!mt-6"}>SIGN IN</Button>
            </form>
            <Text classlist={`mt-[8px] mb-[10px] !cursor-pointer text-center`}><span className="text-[#A0AEC0]">Already have an account?</span> <span onClick={() => navigate("/login")}>Sign in</span></Text>
          </div>
          <div className="flex flex-col w-[442px] pt-[20px]">
            <Text classlist={"text-[14px] text-white "}>
              @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
            </Text>
           <div className="flex items-center justify-center pt-[10px] gap-[46px]">
              <Text className={"!text-[#A0AEC0]"}>Marketplace</Text>
               <Text className={"!text-[#A0AEC0]"}>Blog</Text>
               <Text className={"!text-[#A0AEC0]"}>License</Text>
               </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register

