import {Heading, Text, Button} from "../../components"
import Input from "./Input"




const Login = () => {
  return (
    <div className="flex justify-between h-[100vh]">
      <div className="w-[50%] login-bg flex flex-col items-center justify-center">
        <Text classlist={`!text-[20px] !mb-[16px]`}>INSPIRED BY THE FUTURE:</Text>
        <Heading tag={`h1`}>THE VISION UI DASHBOARD</Heading>
      </div>
      <div className="w-[50%]  flex flex-col relative justify-center pl-[103px] login-form-bg">
        <div>
          <Heading classlist={"!mb-[7px]"} tag={"h2"}>Nice to see you!</Heading>
          <Text classlist={"!text-[#A0AEC0] !mb-[35px]"}>Enter your email and password to sign in</Text>
          <form className="w-[350px]" autoComplete="off">
            <label>
              <Text classlist={"!mb-[4px] !pl-[4.5]"}>Email</Text>
              <Input type={`email`} name={"email"} placeholder={"Your email address"}/>
            </label>
            <label className="mt-[24px] block">
              <Text classlist={"!mb-[4px] !pl-[4.5]"}>Password</Text>
              <Input type={`password`} name={"password"} placeholder={"Your password"}/>
            </label>
            <Button>SIGN IN</Button>
            <Text classlist={`!mt-[22px] !cursor-pointer text-center`}><span className="text-[#A0AEC0]">Don't have an account?</span>Sign up</Text>
          </form>
          <div className="w-[442px] text-center absolute bottom-[100px] left-[61px]">
          <Text classlist={"!text-[#A0AEC0]"}>@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</Text>
          <div className="flex items-center justify-center gap-[46px] mt-[9px]">
            <Text className={"!text-[#A0AEC0]"}>Marketplace</Text>
            <Text className={"!text-[#A0AEC0]"}>Blog</Text>
            <Text className={"!text-[#A0AEC0]"}>License</Text>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
