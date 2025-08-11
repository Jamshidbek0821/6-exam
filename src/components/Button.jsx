


const Button = ({children, classlist}) => {
  return (
    <button className={`bg-[#0075FF] w-[350px] ${classlist} mt-[35px] cursor-pointer  py-[15px] text-white font-bold text-[13px] rounded-[12px] hover:opacity-[70%]`}>{children}</button>
  )
}

export default Button
