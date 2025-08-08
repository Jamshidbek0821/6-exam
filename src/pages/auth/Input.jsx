


const Input = ({type, name, placeholder, classlist}) => {
  return (
   <input className={`${classlist} w-full py-[14px] pl-[20px] border-[2px] border-white outline-none rounded-[20px] placeholder:text-white text-white`} required type={type} name={name} placeholder={placeholder}/>
  )
}

export default Input
