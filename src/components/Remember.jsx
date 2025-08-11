import { useState } from "react";

const Remember = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div 
      onClick={() => setEnabled(!enabled)} 
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer duration-300 
        ${enabled ? 'bg-[#0075FF] border border-[#0075FF]' : 'bg-white border border-white'}`}
    >
      <div 
        className={`w-4 h-4 rounded-full shadow-md transform duration-300 
          ${enabled ? 'translate-x-6 bg-white' : 'translate-x-0 bg-blue-500'}`}
      />
    </div>
  );
};

export default Remember;
