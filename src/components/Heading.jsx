


const Heading = ({tag, children, classlist}) => {
 if(tag == "h1"){
  return <h1 className={`text-white text-[36px] font-bold ${classlist}`}>{children}</h1>
 }
 else if(tag == "h2"){
  return <h2 className={`text-white text-[30px] font-bold ${classlist}`}>{children}</h2>
 }
 if(tag == "h3"){
  return <h3 className={`text-white text-[18px] font-bold ${classlist}`}>{children}</h3>
 }
}

export default Heading
