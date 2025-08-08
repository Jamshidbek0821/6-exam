

const Text = ({children, classlist}) => {
  return (
    <p className={`text-white text-[14px] font-normal ${classlist}`}>{children}</p>
  )
}

export default Text
