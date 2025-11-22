import React from "react";
interface SkilsProps {
  skill: string;
}
function Skils({ skill = "" }: SkilsProps) {
  return (
    <div
      className="w-[110px] h-[40px] bg-[#fce4ec] text-[#ad1457] hover:bg-white 
     hover:text-black rounded-3xl flex justify-center items-center mt-3"
    >
      {skill}
    </div>
  );
}

export default Skils;
