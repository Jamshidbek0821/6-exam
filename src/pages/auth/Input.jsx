


const Input = ({type, name, placeholder, classlist}) => {
  return (
   <input className={`${classlist} w-full py-[14px] pl-[20px] border-[2px] outline-none rounded-[20px] placeholder:text-[#A0AEC0] text-[#A0AEC0] border-[#656B8C]`} required type={type} name={name} placeholder={placeholder}/>
  )
}

export default Input
