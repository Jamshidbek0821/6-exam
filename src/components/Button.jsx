


const Button = ({children, classlist}) => {
  return (
    <button className={`bg-[#0075FF] ${classlist} mt-[35px] w-full py-[15px] text-white font-bold text-[13px] rounded-[12px] hover:opacity-[70%]`}>{children}</button>
  )
}

export default Button
